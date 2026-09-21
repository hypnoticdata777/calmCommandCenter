# Borrador en Español: Field Note 8

## No Contrates Otra Laptop. Arregla el Lockfile.

## De Qué Trata Esto

Esta nota trata de un error que casi todos los equipos cometen cuando empiezan a crecer.

El trabajo pesa más, entonces la primera respuesta suena obvia: contratar a otra persona.

Pero a veces el problema no es que falten manos. A veces el problema es que el trabajo solo se mueve porque una persona recuerda dónde está todo, qué pasó al último, quién está esperando, y qué todavía falta cerrar.

Ese tipo de operación no necesita otra laptop. Necesita un lockfile.

En software, un lockfile es el registro aburrido que le dice a una máquina nueva exactamente qué necesita el proyecto para correr. Sin adivinar. Sin "en mi laptop sí funciona". Sin memoria secreta.

En operaciones, el lockfile es la bitácora, el checklist, el responsable, el estatus, la fecha, el inbox compartido y el rastro del handoff que permite que alguien más tome el trabajo sin preguntarle a las mismas tres personas qué pasó.

La idea de esta Field Note es simple: antes de contar personas, cuenta ciclos. ¿Se puede encontrar la tarea? ¿Se puede entregar a alguien más? ¿Se puede cerrar sin que una sola persona cargue toda la memoria del equipo?

## La Prueba Del Servidor Limpio

Esta semana, mi proyecto pasó sus pruebas. Las 286.

Eso suena a terminado.

Después intenté instalarlo en un servidor limpio, que básicamente es una computadora nueva sin la memoria de mi laptop, sin accesos viejos, sin archivos acumulados y sin ayuda accidental.

Falló en segundos.

No porque la app estuviera rota. Falló porque mi laptop estaba ayudando en silencio de formas que el proyecto nunca había dejado escritas.

Esa es la versión más clara del problema operativo: funcionó cuando lo tocó la persona con contexto. Falló cuando una máquina extraña tuvo que correrlo desde las instrucciones.

Eso es lo que realmente significa "en mi máquina sí funciona". No significa que el sistema esté terminado. Significa que el sistema está pidiendo prestada la memoria de una persona.

Los equipos de property management hacen esto todo el tiempo. La tarea "funciona" cuando el coordinador recuerda que el dueño le escribió directo. La tarea "funciona" cuando el admin sabe qué ajuste está escondido detrás de qué login. La tarea "funciona" cuando la persona que estuvo en la llamada el jueves recuerda que el vendor estaba esperando acceso, no aprobación.

Pero si la siguiente persona tiene que preguntar alrededor para saber dónde quedó todo, el sistema todavía no está corriendo de verdad.

Está corriendo en la laptop de alguien.

## Los Cuatro Relojes

Cada tarea corre en cuatro relojes.

El tiempo de hacer es el trabajo en sí. El tiempo de encontrar es ubicar dónde quedó la tarea. El tiempo de esperar es el espacio hasta que la siguiente persona se mueve. El tiempo de re-explicar es el costo de pasarle el trabajo a alguien más.

Contratar agrega tiempo de hacer. Eso importa. Pero es solo un reloj.

Si los otros tres relojes están perdiendo tiempo, la nueva persona no solo recibe trabajo. También recibe confusión, retrasos y una montaña de "preguntas rápidas".

Por eso agregar sillas no arregla un handoff roto. Solo le da más público al handoff.

## Reloj Uno: Hacer

El tiempo de hacer es fácil de ver. Es la inspección, la llamada, la cotización, el correo, el build, la reparación.

Por eso contratar se siente como la respuesta obvia. Más personas significa más horas disponibles, y más horas deberían significar más trabajo terminado.

A veces sí.

Pero hacer es la parte visible. Es la parte que todos pueden señalar. La parte escondida es todo lo que pasa antes de que alguien pueda hacer el trabajo con confianza.

En mi build, las pruebas eran el tiempo de hacer. Probaron que el código se podía comportar correctamente cuando ya estaba corriendo.

Pero el servidor limpio hizo otra pregunta: ¿alguien nuevo puede levantar esto desde cero?

Esa es una prueba muy diferente. Y es la misma prueba que corre un equipo cada vez que entra una persona nueva.

## Reloj Dos: Encontrar

El tiempo de encontrar es el impuesto que pagas cuando el sistema no recuerda.

En el código, esto me pasó con un migration runner.

En español normal: una migración es un script que actualiza la base de datos. Puede crear una tabla, cambiar el nombre de una columna, o agregar la estructura que la app necesita.

El migration runner arrancó, mostró un spinner de carga, y luego no dijo claramente qué había pasado.

Las tablas existían. El journal no.

Es decir: parte de la estructura de la base de datos ya se había creado, pero faltaba el registro que dice "estos pasos de setup ya corrieron".

El sistema tenía evidencia de actividad, pero no una memoria limpia del progreso.

Eso es exactamente lo que se siente en operaciones cuando se pierde tiempo buscando. Hay un correo en algún lado. Hubo una llamada. Alguien dijo que el vendor iba el martes. Alguien más cree que el dueño ya aprobó.

El trabajo se movió, pero el rastro no.

Ahora la siguiente persona no está haciendo la tarea. Está reconstruyendo la tarea.

Por eso importan los logs. Cuando cada invite enviado, reenviado, cancelado o aceptado se escribe en el registro, la siguiente persona no tiene que preguntar dónde quedó todo.

La fila ya lo dice.

Un chat grupal no es una base de datos. Es una conversación con buscador y mala memoria.

## Reloj Tres: Esperar

El tiempo de esperar aparece cuando el trabajo ya sabe cuál es el siguiente paso, pero el sistema depende de una sola persona para desbloquearlo.

Lo he visto muchas veces en property management. Dueños que escriben directo a una persona en vez del inbox compartido. Un cambio rutinario de workspace que espera a la única persona con las llaves correctas. Un plan con vendor descrito en chat, pero sin dueño ni fecha.

Una reparación sencilla de bomba muestra la diferencia.

El plan no era misterioso: inspeccionar la bomba y luego reprogramar según lo que saliera en la inspección.

Eso es un plan real. Pero hasta que alguien lo toma con fecha, sigue siendo narración.

Ahí es donde un middle manager debería funcionar como torre de control. No como otro par de manos. Como la persona que asegura que cada avión esté visible, cada pista tenga dueño, y nadie esté volando en neblina porque el update vive en el thread equivocado.

## Reloj Cuatro: Re-Explicar

El tiempo de re-explicar aparece cuando un handoff técnicamente existe, pero no es realmente fluido.

Lo vi en el flujo de invitaciones.

Un vendor con una invitación válida iniciaba sesión, y luego tenía que pasar por un segundo paso para confirmar lo que la invitación ya había confirmado.

Es como preguntarle a alguien que ya está parado en tu cocina si está seguro de que quiere entrar.

El arreglo fue pequeño, pero la lección fue grande: si el link ya prueba quién es la persona y dónde pertenece, el sistema debería llevarla ahí.

Sin explicación extra. Sin segundo ritual. Sin una "nota rápida" de un humano para que el software se entienda.

También construí un panel que explicaba todo el flujo al usuario. Después lo borré.

Porque a veces un panel explicativo no es claridad. A veces es el recibo de un workflow que todavía necesita trabajo.

La mejor versión no es un producto que explica el laberinto. La mejor versión es tener menos vueltas en el laberinto.

## El Equipo De Uno

También he corrido este experimento conmigo mismo.

Una persona. Trabajo de día. Carrera. Un build que casi siempre recibe el turno nocturno.

Cuando el trabajo se acumuló, mi primera respuesta fue la más vieja del mundo: más horas.

Dormir más tarde. Levantarme más temprano. Empujar.

Una noche seguía escribiendo después de medianoche y estaba despierto antes de que saliera el sol para publicar a tiempo.

Eso sacó el post. Pero no arregló el sistema.

Porque lo difícil no siempre era escribir. A veces lo difícil era encontrar el material: una nota en un correo, una analogía en un chat, un detalle técnico en un dev log, una idea suelta en mi cabeza.

Las horas extras no se estaban convirtiendo en más output. Se estaban convirtiendo en tiempo de búsqueda.

Lo que ayudó no fue una noche más heroica. Fue una mejor memoria.

Un repo. Un log de contenido. Un lugar para cabos sueltos. Un lugar donde mi yo del futuro pueda llegar cansado y todavía encontrar el hilo.

Esa es la versión personal de la misma lección.

Si el trabajo solo se mueve cuando una persona recuerda todo, el sistema es frágil.

Aunque esa persona seas tú.

## Entonces, ¿Qué Se Cuenta?

Por eso empecé a mapear acciones, roles y eventos como:

1. Cubierto
2. Solo visible
3. Registrado pero no obvio
4. Faltante

Parece un documento de testing.

En realidad es un documento de contratación.

Porque contesta la pregunta que casi nadie hace antes de abrir una vacante: ¿necesitamos otra persona, o necesitamos otra fila?

¿Necesitamos más manos, o necesitamos que el sistema recuerde dónde dejaron el trabajo esas manos?

Esa sensación rara en medio de una operación no siempre es falta de personal. A veces es no saber si el ciclo está abierto, cerrado, duplicado, esperando, bloqueado o flotando en el inbox de alguien.

Antes de abrir la siguiente vacante, haz cuatro preguntas:

1. ¿En qué reloj está corriendo esta tarea?
2. ¿Cuánto tarda alguien en encontrar dónde quedó?
3. ¿Cuánto pasa por una sola persona?
4. ¿Qué está cerrado, y qué solo fue descrito muy bien?

Porque si tu operación solo funciona en la máquina de una persona, no tienes un equipo.

Tienes una laptop con sentimientos.

No contrates otra laptop.

Arregla el lockfile.

Siguiente Field Note: qué cambia cuando dejas de contar personas y empiezas a contar ciclos.
