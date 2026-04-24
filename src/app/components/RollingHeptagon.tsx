// ============================================================
// ARCHIVO: RollingHeptagon.tsx
//
// ¿QUÉ HACE ESTE COMPONENTE?
// Dibuja un heptágono (figura de 7 lados) que flota y gira por
// la pantalla siguiendo un camino largo y errático. Dentro del
// heptágono hay una bolita roja que también se mueve, como si
// rodara por el interior de la figura.
// Se usa 3 veces en App.tsx con distintas velocidades y caminos
// para crear profundidad en el fondo.
// ============================================================

// motion: para las animaciones | useReducedMotion: accesibilidad
import { motion, useReducedMotion } from "motion/react";

// Importamos HEPTAGON_SLOW como fuente única de los valores por defecto.
// Antes estaban duplicados aquí y en App.tsx — ahora viven en un solo lugar.
import { HEPTAGON_SLOW } from "../constants/heptagons";

// "interface" es TypeScript — define qué propiedades (parámetros)
// puede recibir este componente y qué tipo de dato es cada uno.
// El "?" al final de cada nombre significa que es OPCIONAL —
// si no se pasa, se usará el valor por defecto definido más abajo.
interface RollingHeptagonProps {
  delay?: number;       // cuántos segundos esperar antes de empezar
  duration?: number;    // cuántos segundos tarda en completar su ruta
  xPath?: string[];     // lista de posiciones horizontales del recorrido
  yPath?: string[];     // lista de posiciones verticales del recorrido
  rotatePath?: number[]; // lista de grados de rotación en cada punto
  opacity?: number;     // qué tan visible es (0 = invisible, 1 = sólido)
}

// La función recibe sus propiedades con valores por defecto (el "= algo" después de cada nombre).
// Los valores por defecto vienen de HEPTAGON_SLOW (importado de constants/heptagons.ts)
// para que haya una sola fuente de verdad — sin duplicados.
export function RollingHeptagon({
  delay      = HEPTAGON_SLOW.delay,
  duration   = HEPTAGON_SLOW.duration,
  xPath      = HEPTAGON_SLOW.xPath,
  yPath      = HEPTAGON_SLOW.yPath,
  rotatePath = HEPTAGON_SLOW.rotatePath,
  opacity    = HEPTAGON_SLOW.opacity,
}: RollingHeptagonProps) {
  // Preguntamos si el usuario prefiere menos movimiento (accesibilidad)
  const prefersReducedMotion = useReducedMotion();

  // ---- CÁLCULO MATEMÁTICO DE LOS VÉRTICES DEL HEPTÁGONO ----
  // Un heptágono tiene 7 vértices (puntos). Para dibujarlo necesitamos
  // calcular las coordenadas (x, y) de cada vértice usando trigonometría.
  const size = 300; // el heptágono cabe en un cuadrado de 300x300 píxeles
  const sides = 7;  // 7 lados = heptágono
  // Array.from crea un array de 7 elementos y calcula cada punto:
  const points = Array.from({ length: sides }, (_, i) => {
    // Fórmula: dividir el círculo completo (2*PI radianes = 360°) en 7 partes iguales.
    // "- Math.PI / 2" rota 90° para que el primer vértice apunte hacia arriba.
    const angle = (i * 2 * Math.PI) / sides - Math.PI / 2;
    // cos(ángulo) da la coordenada X del punto en el círculo
    // sin(ángulo) da la coordenada Y del punto en el círculo
    // "size / 2 +" lo desplaza al centro del cuadrado 300x300
    const x = size / 2 + (size / 2) * Math.cos(angle);
    const y = size / 2 + (size / 2) * Math.sin(angle);
    return `${x},${y}`; // formato "x,y" que SVG entiende
  }).join(" "); // une todos los puntos con espacio: "x1,y1 x2,y2 x3,y3 ..."

  // Es pura decoración — si el usuario prefiere menos movimiento, no mostramos nada.
  if (prefersReducedMotion) return null;

  return (
    // Contenedor invisible que cubre toda la pantalla.
    // z-20 = aparece encima de BeatingBrain (que no tiene z-index explícito)
    <div className="fixed inset-0 pointer-events-none z-20">

      {/* Este motion.div es el "contenedor viajero" — es el que se mueve
          por toda la pantalla siguiendo xPath/yPath/rotatePath.
          Empieza en el centro (top-1/2 left-1/2) y desde ahí viaja. */}
      <motion.div
        animate={{
          x: xPath,      // la lista de posiciones horizontales a visitar
          y: yPath,      // la lista de posiciones verticales a visitar
          rotate: rotatePath, // la lista de rotaciones en cada posición
        }}
        transition={{
          duration,      // usa el valor recibido como prop (40s por defecto)
          repeat: Infinity,   // nunca para
          ease: "easeInOut",  // movimiento suave en aceleración y frenado
          delay,         // usa el delay recibido como prop (0s por defecto)
        }}
        className="absolute top-1/2 left-1/2"
        // willChange: le dice a la GPU que prepare este elemento para animación
        style={{ width: size, height: size, willChange: "transform" }}
      >

        {/* ---- EL HEPTÁGONO (la figura de 7 lados) ---- */}
        {/* SVG = Scalable Vector Graphics, un formato de imagen matemática
            que no se pixela al crecer o reducir. Lo usamos para dibujar
            formas geométricas perfectas. */}
        <svg
          width={size}   // 300px de ancho
          height={size}  // 300px de alto
          viewBox={`0 0 ${size} ${size}`} // el "lienzo" interno es también 300x300
          className="absolute inset-0" // ocupa todo el espacio del contenedor padre
          // drop-shadow usa var(--blob-rgb) para que el brillo cambie con el tema
          style={{ filter: "drop-shadow(0 0 8px rgba(var(--blob-rgb), 0.3))" }}
        >
          {/* <polygon> dibuja la figura usando los puntos calculados arriba.
              fill="none" = solo el borde, sin relleno interior
              stroke = color del borde (rojo con la opacidad recibida como prop)
              strokeWidth = grosor del borde en píxeles
              strokeLinecap/strokeLinejoin="round" = esquinas redondeadas */}
          <polygon
            points={points}                          // los 7 vértices calculados
            fill="none"                              // sin relleno — solo contorno
            // stroke como propiedad CSS para que var(--blob-rgb) funcione correctamente
            style={{ stroke: `rgba(var(--blob-rgb), ${opacity})` }}
            strokeWidth="6"                          // borde de 6px de grosor
            strokeLinecap="round"                    // puntas redondeadas
            strokeLinejoin="round"                   // esquinas redondeadas
          />
        </svg>

        {/* ---- LA BOLITA QUE RUEDA ADENTRO ---- */}
        {/* Este motion.div es un círculo rojo pequeño (20x20px) que se
            anima independientemente del heptágono. Se mueve en X e Y
            dentro del contenedor, dando la ilusión de rodar por dentro. */}
        <motion.div
          // bg-brand usa var(--brand-color): rojo en dark, cian en light
          className="absolute bg-brand rounded-full"
          style={{
            width: 20,      // 20px de ancho
            height: 20,     // 20px de alto
            left: "50%",    // empieza en el centro horizontal
            top: "50%",     // empieza en el centro vertical
            marginLeft: -10, // ajuste: mueve 10px a la izquierda para centrar exacto
            marginTop: -10,  // ajuste: mueve 10px arriba para centrar exacto
            willChange: "transform", // prepara la GPU para esta animación
          }}
          animate={{
            // La bolita viaja por 8 posiciones distintas dentro del heptágono.
            // Los valores en píxeles se alejan máximo ~90px del centro,
            // manteniéndose dentro de los 150px de radio del heptágono.
            x: [0, -80, 75, -85, 80, -70, 90, 0],  // posiciones X relativas al centro
            y: [0, 85, -70, 80, -75, 70, -80, 0],   // posiciones Y relativas al centro
          }}
          transition={{
            duration: 6.5,     // completa su recorrido en 6.5 segundos
            repeat: Infinity,  // nunca para
            ease: "easeInOut", // movimiento suave
            delay,             // mismo delay que el heptágono padre
          }}
        />
      </motion.div>
    </div>
  );
}

// ============================================================
// RESUMEN DE RollingHeptagon:
// Dos animaciones anidadas:
//   1. El contenedor viaja por la pantalla en ~40 segundos (lento, épico)
//   2. La bolita rueda dentro del heptágono en 6.5 segundos (rápido, inquieto)
// El resultado visual es una figura que vaga lentamente mientras
// algo vivo se mueve adentro — como un planeta con su luna.
// ============================================================
