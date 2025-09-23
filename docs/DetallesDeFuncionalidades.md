1. Gestión de Preguntas Pre-Venta (Mercado Muro)
¿Qué es? 🙋‍♀️ Esta funcionalidad maneja las preguntas que un potencial comprador hace en la página de un producto antes de realizar la compra. Es una de las interacciones más importantes para asegurar una venta.

Explicación del Flujo:

Mercado Libre envía una notificación con el tópico questions.

El sistema la procesa y llama a la API de Mercado Libre para obtener el texto completo de la pregunta, quién la hizo y sobre qué producto.

Crea o localiza un chat de tipo MERCADOMURO.

Envía toda esta información (incluyendo detalles del producto en una tarjeta) a la plataforma interna para que un agente pueda responder rápidamente. Además, guarda en Redis el ID de esa última pregunta para poder responderla más tarde desde el sistema.

Analogía .NET/TS: Imagina que tienes un sitio de e-commerce y los usuarios pueden dejar comentarios en la página de un producto. Cuando se publica un comentario nuevo, se dispara un evento. Tu backend en .NET o Node.js recibe este evento, busca en la base de datos los detalles del producto y del usuario, y luego envía una notificación a un canal de Slack del equipo de ventas con un enlace directo para que puedan responder.

Archivo Principal de Implementación: pkg/service/inboundServiceImpl.go (la lógica se encuentra en la función getResourceQuestion).

2. Gestión de Mensajes Post-Venta (Chat de Venta)
¿Qué es? 💬 Esta funcionalidad maneja los mensajes que un comprador envía después de haber realizado una compra, utilizando el sistema de mensajería privada de Mercado Libre.

Explicación del Flujo:

Mercado Libre envía una notificación con el tópico messages.

El sistema obtiene el contenido del mensaje. Es importante destacar que el sistema verifica que el emisor del mensaje no sea el propio vendedor para evitar crear bucles de comunicación.

Identifica a qué orden o "paquete" de envío (pack_id) pertenece el mensaje.

Enruta el mensaje al chat de tipo MERCADOVENTA que corresponde a esa orden.

Si el mensaje incluye archivos adjuntos (imágenes, PDFs), el sistema los descarga de los servidores de Mercado Libre, los sube a un almacenamiento de objetos interno (Minio, un sistema compatible con S3) y luego envía la nueva URL al agente.

Analogía .NET/TS: Es muy similar a integrar un sistema de soporte como Zendesk o Intercom. Cuando un cliente responde a un ticket de soporte por email, tu backend recibe un webhook. El servicio identifica al usuario y al ticket, procesa el cuerpo del mensaje y maneja los archivos adjuntos, actualizando la conversación en tu CRM o panel de control interno.

Archivo Principal de Implementación: pkg/service/inboundServiceImpl.go (la lógica se encuentra en la función getResourceMessage).

3. Procesamiento de Órdenes y Pagos (Inicio Proactivo)
¿Qué es? 🛒 Esta es la funcionalidad que ya discutimos, pero la incluyo para dar la visión completa. Se activa con los tópicos orders_v2 y payments.

Explicación del Flujo: A diferencia de las otras, esta funcionalidad es proactiva. No espera a que el cliente escriba primero. En cuanto se confirma una venta, el sistema:

Crea el chat de tipo MERCADOVENTA.

Envía un mensaje de bienvenida.

Envía un carrusel con los productos que el cliente compró.
De esta forma, la conversación ya está lista y con todo el contexto para cuando el agente o el cliente quieran interactuar.

Archivo Principal de Implementación: pkg/service/inboundServiceImpl.go (la lógica se encuentra en la función getResourceOrders).

Diagrama Simplificado del Flujo
Para que quede más claro, el patrón de diseño es el siguiente:

                                 +--------------------------------+
                                 |         MERCADO LIBRE          |
                                 +--------------------------------+
                                                 |
                                     (Webhook con un 'topic')
                                                 |
                                                 v
+-------------------------------------------------------------------------------------------------------+
|                                      API-CHANNEL-MERCADOLIBRE                                         |
|                                                                                                       |
|   +--------------------------+     +-----------------+      +--------------------------------+        |
|   | Endpoint /inbound        +---->| Kafka (Inbound) +----->| Consumer (inboundSubscription) |        |
|   | (Recibe y encola)        |     +-----------------+      | (Lee y procesa)                |        |
|   +--------------------------+                              +--------------------------------+        |
|                                                                            |                          |
|                                         (Dispatch basado en el 'topic')    |                          |
|                          +-------------------------------------------------+------------------+       |
|                          |                                 |                                  |       |
|                          v                                 v                                  v       |
|      +-------------------------+       +-------------------------+       +-------------------------+  |
|      | Lógica para `questions` |       | Lógica para `messages`  |       | Lógica para `orders_v2` |  |
|      | (getResourceQuestion)   |       | (getResourceMessage)    |       | (getResourceOrders)     |  |
|      +-------------------------+       +-------------------------+       +-------------------------+  |
|                                                                                                       |     
+-------------------------------------------------------------------------------------------------------+

Este patrón de "recibir, encolar y despachar" es muy potente y escalable. Permite que el punto de entrada sea muy simple y rápido, mientras que la lógica de negocio compleja se ejecuta de forma asíncrona y aislada por tipo de evento.