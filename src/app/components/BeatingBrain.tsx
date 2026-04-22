// ============================================================
// ARCHIVO: BeatingBrain.tsx
//
// ¿QUÉ HACE ESTE COMPONENTE?
// Crea el fondo animado — esos círculos rojos borrosos que
// "respiran" detrás de todo el contenido. Es pura decoración,
// como el latido de un corazón: se expande y contrae infinitamente.
// Coloca 4 círculos gigantes difuminados, cada uno con su propio
// ritmo, para que nunca se sincronicen y se vean orgánicos/vivos.
// ============================================================

// Importamos dos herramientas de la librería "motion":
// - "motion": convierte un div normal en uno que puede animarse
// - "useReducedMotion": detecta si el usuario activó "reducir movimiento"
//   en su sistema operativo (configuración de accesibilidad)
import { motion, useReducedMotion } from "motion/react";

// Declaramos el componente. En React un componente es una función
// que devuelve HTML visual. "export" permite que otros archivos lo usen.
export function BeatingBrain() {
  // Preguntamos al navegador: ¿el usuario prefiere menos animaciones?
  // Si es true, mostraremos una versión estática sin movimiento,
  // para respetar a personas con epilepsia u otras sensibilidades.
  const prefersReducedMotion = useReducedMotion();

  // Si el usuario prefiere menos movimiento, mostramos los blobs
  // sin animación — mantienen el color ambiental pero no se mueven.
  // "return" aquí termina la función; el código de abajo no se ejecuta.
  if (prefersReducedMotion) {
    return (
      // fixed inset-0 = cubre toda la pantalla y se queda fija al hacer scroll
      // overflow-hidden = nada sale de los bordes de la pantalla
      // pointer-events-none = el mouse ignora este div; los clics pasan a través
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Blob estático arriba-izquierda: usa var(--blob-rgb) para cambiar de
            rojo (dark) a cian (light) automáticamente con el tema */}
        <div className="absolute top-1/4 left-1/3 w-[800px] h-[800px] rounded-full" style={{ background: "radial-gradient(circle, rgba(var(--blob-rgb), 0.3) 0%, transparent 70%)", filter: "blur(80px)", opacity: 0.3 }} />
        {/* Blob estático abajo-derecha: más pequeño y más borroso */}
        <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] rounded-full" style={{ background: "radial-gradient(circle, rgba(var(--blob-rgb), 0.28) 0%, transparent 70%)", filter: "blur(90px)", opacity: 0.27 }} />
        {/* Capa de tinte ambiental — usa var(--blob-tint) para el color correcto por tema */}
        <div className="absolute inset-0" style={{ backgroundColor: "var(--blob-tint)", opacity: 0.15 }} />
      </div>
    );
  }

  // Versión completa con animaciones (solo llega aquí si prefersReducedMotion es false)
  return (
    // Mismo contenedor que la versión estática — cubre toda la pantalla sin interceptar clics
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* ---- BLOB 1: Arriba-izquierda, 800px, el más grande ---- */}
      {/* motion.div es como un div normal pero puede animarse */}
      <motion.div
        animate={{
          // Los corchetes [] definen un ciclo: inicio → mitad → inicio
          scale: [1, 1.15, 1],          // tamaño: normal → 15% más grande → normal
          opacity: [0.25, 0.35, 0.25],  // visibilidad: 25% → 35% → 25%
        }}
        transition={{
          duration: 1.5,      // un ciclo completo tarda 1.5 segundos
          repeat: Infinity,   // se repite para siempre
          ease: "easeInOut",  // empieza suave, acelera en el medio, termina suave
        }}
        // top-1/4 left-1/3 = posición; w/h-[800px] = tamaño; rounded-full = círculo
        className="absolute top-1/4 left-1/3 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(var(--blob-rgb), 0.4) 0%, transparent 70%)",
          filter: "blur(80px)",             // desenfoque — lo vuelve brumoso
          willChange: "transform, opacity", // avisa a la GPU que prepare este elemento
        }}
      />

      {/* ---- BLOB 2: Abajo-derecha, 700px ---- */}
      {/* delay: 0.3 = espera 0.3 segundos antes de empezar su primer ciclo.
          Esto lo desincroniza del Blob 1 — clave para el efecto orgánico. */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],          // se expande solo 12%, más sutil que el Blob 1
          opacity: [0.22, 0.32, 0.22],  // un poco más tenue que el Blob 1
        }}
        transition={{
          duration: 1.6,     // 0.1s más lento que el Blob 1 — nunca sincronizan
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,        // empieza 0.3 segundos después que el Blob 1
        }}
        className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(var(--blob-rgb), 0.38) 0%, transparent 70%)",
          filter: "blur(90px)",             // más borroso que el Blob 1
          willChange: "transform, opacity",
        }}
      />

      {/* ---- BLOB 3: Centro exacto de la pantalla, 600px ---- */}
      {/* top-1/2 left-1/2 pone la esquina superior-izquierda en el centro.
          -translate-x-1/2 -translate-y-1/2 lo mueve 50% de su tamaño
          hacia arriba y a la izquierda, así su CENTRO queda en el centro. */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],          // el que más se expande (18%)
          opacity: [0.28, 0.38, 0.28],  // el más visible de los cuatro
        }}
        transition={{
          duration: 1.4,     // el más rápido — crea variedad en el conjunto de ritmos
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,        // empieza 0.6 segundos después del inicio
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(var(--blob-rgb), 0.35) 0%, transparent 70%)",
          filter: "blur(100px)",            // el más borroso de los cuatro
          willChange: "transform, opacity",
        }}
      />

      {/* ---- BLOB 4: Arriba-derecha, 500px, el más pequeño y sutil ---- */}
      {/* Su rol es llenar la esquina superior-derecha que los otros tres
          no cubren bien. Es el más tenue y el que más tarda en empezar. */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],          // se expande 20% pero al ser pequeño no es dominante
          opacity: [0.2, 0.3, 0.2],    // el más tenue de los cuatro
        }}
        transition={{
          duration: 1.75,    // el más lento — completa el conjunto de 4 ritmos distintos
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.9,        // el último en empezar — máximo desfase
        }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(var(--blob-rgb), 0.32) 0%, transparent 70%)",
          filter: "blur(70px)",
          willChange: "transform, opacity",
        }}
      />

      {/* ---- CAPA DE TINTE GENERAL ----
          Un div rojo-oscuro que cubre TODA la pantalla y pulsa muy levemente.
          Unifica los 4 blobs bajo un ambiente de color consistente —
          como una luz roja de ambiente muy tenue en una habitación oscura. */}
      <motion.div
        animate={{
          opacity: [0.12, 0.18, 0.12], // varía entre 12% y 18% — casi imperceptible
        }}
        transition={{
          duration: 2,        // el ciclo más lento de todo el componente
          repeat: Infinity,
          ease: "easeInOut",
        }}
        // inset-0 = cubre toda la pantalla de esquina a esquina
        // backgroundColor usa var(--blob-tint): rojo-oscuro en dark, cian-oscuro en light
        className="absolute inset-0"
        style={{ backgroundColor: "var(--blob-tint)" }}
      />
    </div>
  );
}

// ============================================================
// RESUMEN DE BeatingBrain:
// 4 blobs con 4 duraciones distintas (1.4s / 1.5s / 1.6s / 1.75s)
// y 4 delays distintos (0 / 0.3s / 0.6s / 0.9s) = nunca se sincronizan.
// Es el mismo principio que las olas del mar: muchos ritmos ligeramente
// distintos superpuestos crean algo que se siente vivo y natural.
// ============================================================