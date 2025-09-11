Guía de Implementación de Gestión de Reclamos de Mercado Libre
1. Introducción al flujo de reclamos
En Mercado Libre, los reclamos son una parte vital del proceso post-venta. Cuando un comprador inicia un reclamo, la plataforma genera una notificación que puede ser consumida por nuestra API. El objetivo es procesar esta notificación, obtener los detalles del reclamo y, en el futuro, permitir al agente responder o gestionar el caso desde nuestra interfaz.

El flujo principal a implementar es:

Recepción de la notificación: Mercado Libre envía un evento con el tópico claims a nuestro webhook.

Procesamiento asíncrono: Nuestra API, al igual que con otros tópicos, encola esta notificación en Kafka.

Consumo del mensaje: Un consumidor de Kafka lee el mensaje del tópico claims.

Obtención de detalles: El servicio de reclamos hace una petición a la API de Mercado Libre para obtener toda la información del reclamo, incluyendo mensajes, estado y adjuntos.

Envío a la plataforma de chat: La información del reclamo se formatea y se envía a nuestra plataforma interna para que un agente pueda atender el caso.

2. Creación de una nueva interfaz de Cliente y Servicio
Siguiendo la arquitectura actual, primero definiremos las interfaces.

Archivo: pkg/client/claimClient.go

package client

import (
    "context"
    "[github.com/reactivex/rxgo/v2](https://github.com/reactivex/rxgo/v2)"
    "bitbucket.org/chattigodev/api-channel-mercadolibre/pkg/dto"
)

// ClaimClient define la interfaz para interactuar con la API de reclamos de Mercado Libre.
type ClaimClient interface {
    // GetResourceClaim obtiene los detalles de un reclamo a partir de su ID.
    GetResourceClaim(ctx context.Context, resource string, token string) rxgo.Observable
}

Archivo: pkg/service/claimService.go

package service

import (
    "context"
    "[github.com/reactivex/rxgo/v2](https://github.com/reactivex/rxgo/v2)"
    "bitbucket.org/chattigodev/api-channel-mercadolibre/pkg/dto"
)

// ClaimService define la lógica de negocio para gestionar reclamos.
type ClaimService interface {
    // ProcessClaimEvent maneja la notificación de un reclamo.
    ProcessClaimEvent(ctx context.Context, notification dto.MercadoLibreNotification) rxgo.Observable
}

3. Implementación de los servicios y clientes
Archivo: pkg/client/claimClientImpl.go
Este cliente será similar a mercadoLibreClientImpl.go. Usará el restyClient para hacer peticiones HTTP a la API de Mercado Libre, esta vez apuntando al endpoint de reclamos.

package client

import (
    "bitbucket.org/chattigodev/chattigo-golang-library/pkg/error"
    "bitbucket.org/chattigodev/chattigo-golang-library/pkg/http"
    "bitbucket.org/chattigodev/chattigo-golang-library/pkg/utils"
    "context"
    "fmt"
    "[github.com/go-resty/resty/v2](https://github.com/go-resty/resty/v2)"
    "[github.com/reactivex/rxgo/v2](https://github.com/reactivex/rxgo/v2)"
    "[github.com/rs/zerolog](https://github.com/rs/zerolog)"
    "[github.com/rs/zerolog/log](https://github.com/rs/zerolog/log)"
    "[github.com/spf13/viper](https://github.com/spf13/viper)"
    "bitbucket.org/chattigodev/api-channel-mercadolibre/pkg/dto"
)

type ClaimClientImpl struct {
    log         zerolog.Logger
    restyClient *resty.Client
    meliUrl     string
}

func NewClaimClientImpl(restyClient *resty.Client) ClaimClient {
    return &ClaimClientImpl{
        log:         log.With().Str(utils.Struct, "ClaimClientImpl").Logger(),
        restyClient: restyClient,
        meliUrl:     viper.GetString("webhook.url"),
    }
}

func (c *ClaimClientImpl) GetResourceClaim(ctx context.Context, resource string, token string) rxgo.Observable {
    subLogger := c.log.With().Str(utils.Method, "GetResourceClaim").Logger()
    urlReq := fmt.Sprintf("%s%s", c.meliUrl, resource)
    subLogger.Info().Msgf("Url de reclamo Meli: [%v]", urlReq)

    var claimResponse dto.ClaimResponse
    var errorResponseFromRequest map[string]interface{}
    get, err := c.restyClient.R().
        SetHeader("Content-Type", "application/json").
        SetAuthToken(token).
        SetError(&errorResponseFromRequest).
        SetResult(&claimResponse).
        Get(urlReq)

    if err != nil || get.IsError() {
        subLogger.Error().Err(err).Msgf("Error al obtener el reclamo: %+v", errorResponseFromRequest)
        return rxgo.Just(&errorLib.HttpError{
            StatusCode: get.StatusCode(),
            Msg:        "Error al obtener reclamo",
        })()
    }

    return rxgo.Just(claimResponse)()
}

Archivo: pkg/service/claimServiceImpl.go
Este servicio orquestará la lógica de negocio.

package service

import (
    "context"
    "errors"
    "fmt"
    "strconv"
    "strings"

    "bitbucket.org/chattigodev/api-channel-mercadolibre/pkg/client"
    "bitbucket.org/chattigodev/api-channel-mercadolibre/pkg/dto"
    u "bitbucket.org/chattigodev/api-channel-mercadolibre/pkg/utils"
    kafkaLibrary "bitbucket.org/chattigodev/chattigo-golang-kafka-library/pkg/producer"
    errorLib "bitbucket.org/chattigodev/chattigo-golang-library/pkg/error"
    "bitbucket.org/chattigodev/chattigo-golang-library/pkg/utils"
    "bitbucket.org/chattigodev/chattigo-golang-redis-library/pkg/redis"
    "[github.com/go-chi/chi/v5/middleware](https://github.com/go-chi/chi/v5/middleware)"
    "[github.com/reactivex/rxgo/v2](https://github.com/reactivex/rxgo/v2)"
    "[github.com/rs/zerolog](https://github.com/rs/zerolog)"
    "[github.com/rs/zerolog/log](https://github.com/rs/zerolog/log)"
)

const (
    CLAIM_TOPIC = "claims"
)

type ClaimServiceImpl struct {
    log         zerolog.Logger
    tokenService TokenService
    claimClient client.ClaimClient
    messageClient client.MessageClient
    topicInbound string
}

func NewClaimServiceImpl(
    tokenService TokenService,
    claimClient client.ClaimClient,
    messageClient client.MessageClient,
) ClaimService {
    return &ClaimServiceImpl{
        log:          log.With().Str(utils.Struct, "ClaimServiceImpl").Logger(),
        tokenService: tokenService,
        claimClient:  claimClient,
        messageClient: messageClient,
    }
}

func (s *ClaimServiceImpl) ProcessClaimEvent(ctx context.Context, notification dto.MercadoLibreNotification) rxgo.Observable {
    subLogger := s.log.With().Str(utils.Method, "ProcessClaimEvent").Str(utils.Thread, middleware.GetReqID(ctx)).Logger()
    subLogger.Info().Msg(utils.InitStr)

    // 1. Obtener el token de acceso
    did := strconv.Itoa(notification.UserId)
    return s.tokenService.GetToken(ctx, did, false).FlatMap(func(item rxgo.Item) rxgo.Observable {
        if item.Error() {
            return rxgo.Just(item.E)()
        }
        token, ok := item.V.(string)
        if !ok {
            return rxgo.Just(errors.New("error al parsear el token"))()
        }

        // 2. Obtener los detalles del reclamo
        return s.claimClient.GetResourceClaim(ctx, notification.Resource, token).FlatMap(func(claimItem rxgo.Item) rxgo.Observable {
            if claimItem.Error() {
                // Manejo del token expirado
                errorDto, isHttpError := claimItem.E.(*errorLib.HttpError)
                if isHttpError && errorDto.StatusCode == 401 {
                    return s.tokenService.GetToken(ctx, did, true).FlatMap(func(newTokenItem rxgo.Item) rxgo.Observable {
                        if newTokenItem.Error() {
                            return rxgo.Just(newTokenItem.E)()
                        }
                        newToken, ok := newTokenItem.V.(string)
                        if !ok {
                            return rxgo.Just(errors.New("error al refrescar y parsear el token"))()
                        }
                        return s.claimClient.GetResourceClaim(ctx, notification.Resource, newToken)
                    })
                }
                return rxgo.Just(claimItem.E)()
            }

            claim, ok := claimItem.V.(dto.ClaimResponse)
            if !ok {
                return rxgo.Just(errors.New("error al parsear la respuesta del reclamo"))()
            }
            subLogger.Debug().Interface(utils.Data, claim).Msg("Detalles del reclamo obtenidos")

            // 3. Formatear y enviar a nuestra plataforma de chat
            // Se asume que el `claim_id` y el `seller_id` pueden ser usados para identificar una conversación única.
            // Si el reclamo viene de un comprador, el msisdn podría ser su ID.
            msisdn := fmt.Sprintf("claim_%v_%v", claim.Id, claim.SellerId)
            did := strconv.Itoa(claim.SellerId)
            
            // Aquí se enviaría el primer mensaje al chat de nuestra plataforma.
            // Por simplicidad, se toma el primer mensaje del reclamo, si existe.
            firstMessage := "Nuevo reclamo iniciado."
            if len(claim.Messages) > 0 {
                firstMessage = claim.Messages[0].Text
            }
            
            chatMessage := dto.MessageChannel{
                Did:             did,
                Msisdn:          msisdn,
                Channel:         u.MercadoReclamoChannel, // Nuevo canal para reclamos
                ChannelProvider: u.MercadoLibreChannel,
                Content:         firstMessage,
                Name:            claim.Buyer.Nickname,
            }
            
            // Usamos SendInboundMessageSynchronous para iniciar el chat y obtener el ID.
            return s.messageClient.SendInboundMessageSynchronous(ctx, chatMessage).Map(func(i interface{}) (interface{}, error) {
                subLogger.Info().Msg("Mensaje de reclamo enviado a nuestra plataforma.")
                return i, nil
            })
        })
    })
}

// Nota: se necesita un método similar a `extractIds` o `createMessageCarrousel` para los reclamos si tienen adjuntos.
// Deberías consultar la documentación de Mercado Libre para saber si un reclamo tiene un endpoint de mensajes y un endpoint de adjuntos.

4. Actualizaciones de DTOs y constantes
Archivo: pkg/dto/message.go
Debemos agregar la estructura para la respuesta de un reclamo.

type ClaimResponse struct {
    Id              int64     `json:"id"`
    Status          string    `json:"status"`
    Reason          string    `json:"reason"`
    Solution        string    `json:"solution"`
    DateCreated     time.Time `json:"date_created"`
    DateLastUpdated time.Time `json:"date_last_updated"`
    SiteId          string    `json:"site_id"`
    SellerId        int       `json:"seller_id"`
    Buyer           struct {
        Id       int    `json:"id"`
        Nickname string `json:"nickname"`
    } `json:"buyer"`
    Order struct {
        Id string `json:"id"`
    } `json:"order"`
    Messages []struct {
        From struct {
            UserId int `json:"user_id"`
        } `json:"from"`
        Text string `json:"text"`
    } `json:"messages"`
}

Archivo: pkg/utils/constants.go
Agregamos la constante para el nuevo tópico y canal.

const (
    // ... otros tópicos
    CLAIM_TOPIC = "claims"
    // ... otros canales
    MercadoReclamoChannel = "MERCADORECLAMO"
)

5. Integración en main.go y wire.go
Finalmente, integramos el nuevo servicio en la estructura de la aplicación.

Archivo: main.go
En la función init(), agregamos el nuevo tópico al listado.

func init() {
    // ...
    // Agregar el nuevo tópico a la lista de tópicos a manejar en el `NotificationHandler`
    topics := viper.GetStringSlice("webhook.topics")
    topics = append(topics, "claims")
    viper.Set("webhook.topics", topics)
    
    // ...
}

Archivo: wire.go
Debemos actualizar el archivo wire.go para que wire pueda construir la dependencia de ClaimService.

func InitializeServer(restyClient *resty.Client) configuration.ContainerServiceImpl {
	wire.Build(
        // ... otros proveedores
		client.NewClaimClientImpl,
		service.NewClaimServiceImpl,
		// ...
		configuration.NewContainerServiceImpl,
	)
	return configuration.ContainerServiceImpl{}
}

Archivo: config/containerServiceImpl.go
Tendremos que agregar el nuevo servicio al contenedor.

type ContainerServiceImpl struct {
    // ... otros servicios
    ClaimService         service.ClaimService
}

func NewContainerServiceImpl(
    // ... otros parámetros
    claimService service.ClaimService,
) ContainerServiceImpl {
    return ContainerServiceImpl{
        // ... otros servicios
        ClaimService:         claimService,
    }
}
