Informe General del Proyecto: api-channel-mercadolibre
Propósito General
En esencia, este software actúa como un intermediario o adaptador. Su función principal es conectar el ecosistema interno de "Chattigo" con la plataforma de Mercado Libre.

Imagina que tienes tu sistema de gestión de clientes (como un CRM o una plataforma de chat unificado) y quieres que tus agentes puedan responder preguntas de productos o mensajes de compradores de Mercado Libre directamente desde tus herramientas, sin tener que entrar a la web de Mercado Libre. Este proyecto hace exactamente eso.

Recibe notificaciones de Mercado Libre (nuevas preguntas, mensajes, órdenes).

Transforma esas notificaciones a un formato que el sistema de Chattigo entiende.

Recibe instrucciones desde Chattigo (ej. "responder a esta pregunta").

Transforma esas instrucciones y las envía a la API de Mercado Libre para ejecutar la acción.

Funcionalidades Principales
He identificado cuatro funcionalidades clave en esta implementación. Vamos a desglosar cada una, señalando dónde vive la lógica principal.

1. Gestión de Notificaciones Entrantes (Inbound)
Esta es la funcionalidad que permite a la aplicación reaccionar a eventos que ocurren en Mercado Libre.

Objetivo
El objetivo es capturar eventos en tiempo real, como una nueva pregunta en una publicación o un nuevo mensaje de un comprador, y procesarlos para que el sistema interno de Chattigo se entere.

Implementación y Flujo de Trabajo
El flujo de entrada tiene dos puntos de partida: un webhook HTTP y un consumidor de mensajes de Kafka.

Recepción de la Notificación: Mercado Libre envía una pequeña notificación (un "ping") a un endpoint de nuestra API.

Archivo Principal: main.go

Código Clave:

Go

// main.go
r.Post("/inbound", container.InboundService.NotificationProcessor)
Explicación: Esta línea registra una ruta HTTP. Cuando Mercado Libre hace un POST a /inbound, se ejecuta la función NotificationProcessor del servicio InboundService.

Validación y Encolamiento: La función NotificationProcessor no procesa el evento directamente. Para no hacer esperar a Mercado Libre y para asegurar que no se pierdan notificaciones, esta valida la notificación y la pone en una cola de mensajes (Kafka) para un procesamiento posterior y asíncrono.

Archivo Principal: pkg/service/inboundServiceImpl.go y pkg/client/notificationClientImpl.go

Código Clave (notificationClientImpl.go):

Go

// pkg/client/notificationClientImpl.go
func (o *NotificationClientImpl) EnqueueNotification(ctx context.Context, notification dto.MercadoLibreNotification) rxgo.Observable {
    // ...
    key := fmt.Sprintf("%v_%v", notification.Topic, notification.Resource)
    notification.CtxId = ctxString
    go o.kafkaProducerService.PublicKafkaKey(ctxString, o.topicEnqueueNotification, key, notification) // Enviar a Kafka
    return rxgo.Empty()
}
Explicación: Se publica la notificación en un "topic" de Kafka. La palabra clave go inicia una goroutine, que es la forma en que Go maneja la concurrencia. Es como un hilo de ejecución muy ligero. Piensa en ello como un Task.Run en C# o simplemente un await en una función asíncrona en TS, pero sin bloquear el hilo principal.

Procesamiento Asíncrono: Un "consumidor" de Kafka está escuchando constantemente ese "topic". Cuando llega la notificación, la procesa.

Archivo Principal: handler/inboundSubscriptionImpl.go

Código Clave:

Go

// handler/inboundSubscriptionImpl.go
func (svc *InboundSubscriptionImpl) ReadTopicInbound(ctx context.Context, message configuration.Message) {
    // ...
    messageChannel := dto.MercadoLibreNotification{}
    if err := json.Unmarshal(message.Value(), &messageChannel); err != nil {
        // ...
        return
    }
    // ...
    // Usa Redis para evitar procesar la misma notificación dos veces
    idMessageCanal, _ := svc.redisService.GetValue(context.Background(), messageChannel.Resource)

    if len(idMessageCanal) < 1 {
        _ = svc.redisService.SetValueExpire(context.Background(), messageChannel.Resource, "1", time.Second*svc.notificationTTL)
        // Llama al servicio principal para manejar la lógica de negocio
        <-svc.inboundService.NotificationHandler(ctxWithdId, messageChannel).ForEach(/*...*/)
    }
    // ...
}
Explicación:

Esta función actúa como el "handler" del mensaje de Kafka.

Primero, decodifica el mensaje (json.Unmarshal).

Buena Práctica: Utiliza Redis como un mecanismo de deduplicación o idempotencia. Antes de procesar, verifica si el ID del recurso (messageChannel.Resource) ya existe en Redis. Si no existe, lo guarda con un tiempo de expiración (TTL) y procede. Esto evita que una notificación duplicada genere acciones duplicadas.

Finalmente, invoca inboundService.NotificationHandler, donde reside la lógica de negocio real (obtener detalles de la pregunta/mensaje, transformarlo y enviarlo al sistema interno).

2. Procesamiento de Mensajes Salientes (Outbound)
Esta es la funcionalidad que permite a los agentes de Chattigo enviar respuestas a Mercado Libre.

Objetivo
Tomar un mensaje generado en la plataforma de Chattigo, determinar si es una respuesta a una pregunta o un mensaje a un comprador, y enviarlo a la API correcta de Mercado Libre.

Implementación y Flujo de Trabajo
Recepción del Mensaje desde Chattigo: La aplicación escucha un "topic" de Kafka diferente para los mensajes salientes.

Archivo Principal: main.go

Código Clave:

Go

// main.go
go consumerOutbound.SyncSubscribe(
    viper.GetString("listen.outbound.topic"),
    group,
    100,
    container.OutboundSubscription.ReadTopicOutbound,
)
Explicación: Al igual que en el flujo de entrada, se inicia una goroutine que suscribe la función ReadTopicOutbound al topic de Kafka de salida.

Manejo del Mensaje: La función ReadTopicOutbound decodifica el mensaje y lo pasa al servicio de negocio.

Archivo Principal: handler/outboundSubscriptionImpl.go

Código Clave:

Go

// handler/outboundSubscriptionImpl.go
func (svc OutboundSupscritpionImpl) ReadTopicOutbound(ctx context.Context, message configuration.Message) {
    // ...
    messageChannel := dto.MessageChannel{}
    if err := json.Unmarshal(message.Value(), &messageChannel); err != nil {
        // ...
        return
    }
    // Llama al servicio que contiene la lógica principal
    <-svc.outboundService.ProcessOutboundEvent(context.Background(), messageChannel).ForEach(/*...*/)
    // ...
}
Lógica de Negocio y Envío a Mercado Libre:

Archivo Principal: pkg/service/outboundServiceImpl.go

Código Clave:

Go

// pkg/service/outboundServiceImpl.go
func (o *OutboundServiceImpl) SendMessageToMercadoLibre(ctx context.Context, message dto.MessageChannel, token string) rxgo.Observable {
    // ...
    channelType := message.Channel
    if channelType == "MERCADOMURO" { // Es una respuesta a una pregunta
        // ... Lógica para buscar el ID de la pregunta ...
        return o.mercadoLibreClient.AnswerQuestion(ctx, token, question.Id, message.Content).FlatMap(/*...*/)
    } else if channelType == "MERCADOVENTA" { // Es un mensaje a un comprador
        // ... Lógica para construir el mensaje post-venta ...
        return o.mercadoLibreClient.SendMessageToBuyer(ctx, token, packId, messageToBuyer).FlatMap(/*...*/)
    }
    return rxgo.Empty()
}
Explicación:

Aquí está el núcleo de la lógica de salida. Primero, se obtiene un token de autenticación (ver siguiente sección).

Luego, se determina el tipo de mensaje basado en message.Channel.

Si es MERCADOMURO, se entiende que es una respuesta a una pregunta pública. El código busca el ID de la última pregunta sin responder para ese usuario y producto y luego llama a mercadoLibreClient.AnswerQuestion.

Si es MERCADOVENTA, es un mensaje privado post-venta. El código prepara el payload y llama a mercadoLibreClient.SendMessageToBuyer.

Analogía con TS/C#: El uso de rxgo con .FlatMap es muy similar a flatMap o mergeMap en RxJS, o a SelectMany en LINQ con Tasks. Se usa para encadenar operaciones asíncronas: "obtén el token, y luego con ese token, envía el mensaje".

3. Autenticación y Gestión de Tokens con Mercado Libre (OAuth2)
Mercado Libre, como muchas otras APIs modernas, utiliza OAuth2 para la autenticación. Esta aplicación maneja ese flujo.

Objetivo
Obtener y refrescar de forma segura los access_token necesarios para realizar llamadas a la API de Mercado Libre en nombre de un vendedor.

Implementación y Flujo de Trabajo
Endpoints de Autorización: Se exponen endpoints para que un usuario pueda iniciar el flujo de OAuth2 y para refrescar tokens.

Archivo Principal: main.go

Código Clave:

Go

// main.go
r.Get("/token-mercado-libre/{code}", container.TokenService.GetMercadoLibreToken)
r.Get("/refresh-token-mercado-libre/{refreshToken}", container.TokenService.GetMercadoLibreRefreshToken)
Lógica de Cliente OAuth2: El tokenClient se encarga de construir y realizar las peticiones HTTP al endpoint de autenticación de Mercado Libre.

Archivo Principal: pkg/client/tokenClientImpl.go

Código Clave:

Go

// pkg/client/tokenClientImpl.go
func (t *TokenClientImpl) AuthMercadoLibre(ctx context.Context, code string) rxgo.Observable {
    // ...
    urlReq := fmt.Sprintf("%s/%s", t.meliUrl, "oauth/token")
    // ...
    authURL := dto.NewAuthorizationURL(urlReq)
    authURL.AddGrantType("authorization_code")
    authURL.AddClientId(t.clientId)
    authURL.AddClientSecret(t.clientSecret)
    authURL.AddCode(code)
    authURL.AddRedirectURI(t.redirectUrl)

    // ... realiza la petición POST a Mercado Libre ...
    return t.webClient.HTTPDoReqHeader(ctxString, authURL.String(), nil, header, http.POST, &authResponse).FlatMap(/*...*/)
}
Explicación: Esta función implementa una parte del flujo estándar de OAuth2. Recibe un code temporal, y lo intercambia por un access_token y un refresh_token haciendo una petición POST al servidor de Mercado Libre con las credenciales de la aplicación.

Abstracción y Caching de Tokens: El tokenService actúa como una capa de abstracción que utiliza Redis para cachear los tokens.

Archivo Principal: pkg/service/tokenServiceImpl.go

Código Clave:

Go

// pkg/service/tokenServiceImpl.go
func (o TokenServiceImpl) GetToken(ctx context.Context, did string, refresh bool) rxgo.Observable {
    // ...
    redisKeyDid := fmt.Sprintf("mercado-libre-token-%v-%v", o.clientId, did)
    if refresh {
        return o.tokenClient.GetToken(ctx, did) // Forzar refresco
    }
    redisToken, err := o.redisService.GetValue(context.Background(), redisKeyDid)
    if redisToken == "" || err != nil {
        // Si no está en caché, lo busca y lo refresca
        return o.tokenClient.GetToken(context.Background(), did)
    }
    // Si está en caché, lo devuelve
    return rxgo.Just(redisToken)()
}
Explicación y Buenas Prácticas: Este es un patrón de diseño clásico de cache-aside. Cuando se necesita un token:

Intenta leerlo de Redis (caché).

Si existe, lo devuelve (muy rápido).

Si no existe (cache miss) o si se fuerza un refresco (refresh = true), llama al tokenClient para que obtenga uno nuevo de Mercado Libre, lo guarde en la base de datos de configuración y en la caché de Redis para futuras peticiones, y luego lo devuelva. Esto optimiza el rendimiento y reduce la dependencia constante del servicio de autenticación.

4. Arquitectura y Componentes Clave
Inyección de Dependencias con Google Wire: El proyecto no instancia sus componentes manualmente (ej. myService := NewService()). En su lugar, usa wire para construir el grafo de dependencias.

Archivo Principal: wire.go

Explicación: En este archivo declaras qué componentes existen y cómo se construyen (ej. service.NewInboundServiceImpl). Al ejecutar make wire (o wire wire.go), Wire genera el código en wire_gen.go que crea e inyecta todas las dependencias necesarias.

Analogía: Esto es muy similar al contenedor de Inyección de Dependencias en .NET Core (services.AddTransient<IMyService, MyService>() en Startup.cs) o a frameworks como NestJS en el mundo de TypeScript.

Configuración centralizada con Viper y Spring Cloud Config: La configuración no está en archivos locales, sino que se obtiene de un servidor centralizado al arrancar.

Archivo Principal: config/configImpl.go

Explicación: La función LoadConfiguration hace una petición HTTP a un servidor de configuración (patrón común en microservicios, popularizado por Spring Cloud en Java). La respuesta JSON se parsea y se carga en viper, una librería muy popular en Go para manejar configuración.

Analogía: Piensa en viper como el sistema IConfiguration de .NET que puede leer de appsettings.json, variables de entorno, Azure App Configuration, etc. Aquí, una de sus "fuentes" es una llamada HTTP.

Contenerización con Docker: El Dockerfile muestra un patrón excelente.

Archivo Principal: Dockerfile

Explicación y Buenas Prácticas: Utiliza una compilación multi-etapa.

La primera etapa (AS builder) usa una imagen completa de Go para compilar el código fuente en un único binario ejecutable.

La segunda etapa (FROM alpine:3.16.0) usa una imagen base mínima (Alpine Linux), y solo copia el binario compilado de la primera etapa.

Resultado: La imagen final es extremadamente pequeña y segura, ya que no contiene el código fuente, el compilador de Go ni herramientas innecesarias. Esto es una práctica estándar y muy recomendada en Go.