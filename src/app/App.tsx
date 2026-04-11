// ============================================================
// ARCHIVO: App.tsx
//
// ¿QUÉ HACE ESTE ARCHIVO?
// Es el componente raíz — la página completa. Todo lo que el
// usuario ve viene de aquí. React ensambla la página juntando
// todos los componentes como piezas de LEGO, y App.tsx es la
// caja que los contiene a todos.
//
// ESTRUCTURA GENERAL DE LA PÁGINA:
//   1. Fondo animado (BeatingBrain + 3 RollingHeptagons)
//   2. Sección hero: nombre, tagline, copy principal
//   3. Sección de principios: los tres pilares (1, 2, 3)
//   4. Formulario de captura de email al final
// ============================================================

// "motion" de la librería motion/react nos da elementos HTML
// que pueden animarse. motion.div es un <div> animable,
// motion.p es un <p> animable, motion.form es un <form> animable, etc.
import { motion } from "motion/react";

// Importamos los dos componentes de fondo que creamos.
// Cada "import" trae una pieza de LEGO para usarla aquí.
import { BeatingBrain } from "./components/BeatingBrain";
import { RollingHeptagon } from "./components/RollingHeptagon";

// ---- CONFIGURACIONES DE LOS TRES HEPTÁGONOS ----
// En lugar de poner todos los números directamente en el JSX,
// los guardamos aquí como constantes con nombres descriptivos.
// Así el JSX queda limpio y podemos entender qué hace cada heptágono
// solo leyendo el nombre: SLOW = lento, FAST = rápido, MEDIUM = medio.
//
// Cada objeto tiene: delay, duration, xPath, yPath, rotatePath, opacity.
// xPath/yPath = lista de puntos de parada en el recorrido (en % de pantalla).
// rotatePath  = cuántos grados gira en cada punto de parada.
// El primer y último valor de xPath/yPath son iguales → el loop es fluido.

// Heptágono lento: 40 segundos por vuelta, el más visible (opacity 0.4)
// Empieza inmediatamente (delay 0). Da la sensación más contemplativa.
const HEPTAGON_SLOW = {
  delay: 0,
  duration: 40, // slowest — most contemplative
  xPath:      ["60vw", "-45vw", "70vw", "-50vw", "65vw", "-40vw", "75vw", "-55vw", "60vw"],
  yPath:      ["-35vh", "55vh", "-40vh", "60vh", "10vh", "-30vh", "65vh", "-25vh", "-35vh"],
  rotatePath: [0, 165, -95, 230, -60, 185, -130, 110, 0],
  opacity:    0.4,  // el más visible de los tres
};

// Heptágono rápido: 35 segundos por vuelta, un poco más tenue (opacity 0.35)
// Empieza 5 segundos después para no aparecer al mismo tiempo que el lento.
const HEPTAGON_FAST = {
  delay: 5,
  duration: 35, // fastest — more energetic
  xPath:      ["-55vw", "65vw", "-40vw", "70vw", "-60vw", "55vw", "-45vw", "75vw", "-55vw"],
  yPath:      ["50vh", "-30vh", "65vh", "-35vh", "20vh", "-40vh", "55vh", "5vh", "50vh"],
  rotatePath: [0, -120, 95, -175, 60, -210, 140, -85, 0],
  opacity:    0.35, // un poco más sutil que el lento
};

// Heptágono medio: 45 segundos por vuelta, el más sutil (opacity 0.3)
// Empieza 12 segundos después — bien desfasado de los otros dos.
const HEPTAGON_MEDIUM = {
  delay: 12,
  duration: 45, // middle speed — offsets the other two
  xPath:      ["10vw", "-60vw", "75vw", "0vw", "-50vw", "65vw", "-35vw", "70vw", "10vw"],
  yPath:      ["-40vh", "30vh", "-25vh", "60vh", "-35vh", "45vh", "-20vh", "55vh", "-40vh"],
  rotatePath: [0, 180, -110, 240, -70, 195, -155, 125, 0],
  opacity:    0.3,  // el más sutil de los tres
};

// "export default" significa que este es EL componente principal del archivo.
// Cuando otro archivo importa App.tsx, obtiene esta función.
export default function App() {
  return (
    // Contenedor raíz de toda la página:
    // min-h-screen = mínimo tan alto como la ventana del navegador
    // bg-[#0a0a0a]  = fondo casi negro
    // text-white    = todo el texto en blanco por defecto
    // flex flex-col = los hijos se apilan verticalmente
    // items-center  = todo centrado horizontalmente
    // justify-center = todo centrado verticalmente
    // px-8 py-16    = padding horizontal 8 unidades, vertical 16 unidades
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-8 py-16">

      {/* CAPA DE FONDO 1: Los blobs rojos pulsantes.
          Se renderiza primero = queda debajo de todo lo demás. */}
      <BeatingBrain />

      {/* CAPA DE FONDO 2: Los tres heptágonos flotantes.
          "{...HEPTAGON_SLOW}" es el "spread operator" — equivale a
          escribir cada propiedad del objeto una por una como prop.
          Tres instancias del mismo componente, cada una con su propia
          velocidad y camino, para crear sensación de profundidad. */}
      <RollingHeptagon {...HEPTAGON_SLOW} />
      <RollingHeptagon {...HEPTAGON_FAST} />
      <RollingHeptagon {...HEPTAGON_MEDIUM} />

      {/* =====================================================
          CONTENIDO PRINCIPAL (Hero Section)
          Todo el texto de la página vive aquí.
          "relative z-10" lo pone encima del fondo animado.
          ===================================================== */}
      {/* initial/animate: la página entera empieza invisible (opacity 0)
          y se vuelve visible (opacity 1) en 1.2 segundos al cargar */}
      <motion.div
        initial={{ opacity: 0 }}  // empieza completamente invisible
        animate={{ opacity: 1 }}  // llega a completamente visible
        transition={{ duration: 1.2, ease: "easeIn" }} // tarda 1.2 segundos
        // max-w-3xl = ancho máximo para que el texto no sea demasiado ancho
        // space-y-16 = espacio vertical entre los hijos directos
        // relative z-10 = necesario para aparecer encima del fondo animado
        className="max-w-3xl w-full text-center space-y-16 relative z-10"
      >

        {/* ---- ENCABEZADO: Nombre y tagline ---- */}
        <div className="space-y-8">

          {/* El nombre "h777" — aparece 0.3 segundos después del contenedor padre */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease: "easeIn" }} // delay: empieza 0.3s después
            className="flex items-center justify-center gap-3"
          >
            {/* h1 = el título más importante de la página (solo debe haber uno).
                text-[3rem] = fuente de 3rem = 48px de alto
                tracking-wider = más espacio entre letras */}
            <h1 className="text-[3rem] tracking-wider">h777</h1>
          </motion.div>

          {/* El tagline — aparece 0.6 segundos después del inicio.
              text-white/60 = blanco al 60% de opacidad (gris suave) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.6, ease: "easeIn" }} // delay: 0.6s
            className="text-[1.125rem] text-white/60 leading-relaxed tracking-wide"
          >
            A calm command center for developer-operators.
          </motion.p>
        </div>

        {/* ---- BLOQUE DE COPY PRINCIPAL ---- */}
        {/* Aparece 0.9 segundos después — la página se "desenvuelve" de arriba a abajo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.9, ease: "easeIn" }} // delay: 0.9s
          className="space-y-12"
        >
          {/* Línea divisora horizontal: h-px = 1px de alto, bg-white/10 = blanco 10% */}
          <div className="h-px bg-white/10" />

          <div className="space-y-6">
            {/* h2 = segundo título en importancia.
                text-[#dc2626] = rojo (el color de acento del proyecto)
                font-bold = negrita | tracking-[0.02em] = espaciado entre letras */}
            <h2 className="text-[#dc2626] text-[2.75rem] leading-tight font-bold tracking-[0.02em]">
              Building systems that remove friction
            </h2>

            {/* Tres frases cortas en itálica — el manifiesto del proyecto.
                text-white/80 = blanco al 80% de opacidad */}
            <div className="space-y-4 text-white/80 leading-loose text-[1.125rem]">
              <p className="italic">Not loud.</p>
              <p className="italic">Not flashy.</p>
              <p className="italic">Not trying to convince.</p>
            </div>
          </div>

          {/* Segunda línea divisora */}
          <div className="h-px bg-white/10" />

          <div className="space-y-6">
            {/* Dos frases de cierre — la primera más visible (90%), la segunda más sutil (60%) */}
            <p className="text-white/90 leading-loose text-[1.125rem]">
              Competence you can feel without being told.
            </p>
            <p className="text-white/60 leading-loose text-[1.125rem] italic">
              Systems that reduce friction without adding noise.
            </p>
          </div>
        </motion.div>

        {/* ---- SECCIÓN DE PRINCIPIOS (los tres pilares) ---- */}
        {/* Aparece 1.2 segundos después — el último elemento del hero en aparecer.
            grid grid-cols-1 md:grid-cols-3 = en móvil: 1 columna, en escritorio: 3 columnas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.2, ease: "easeIn" }} // delay: 1.2s
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16"
        >
          {/* Principio 1 — el número usa Playfair Display (font de display/titulares)
              porque es un div, no un h1/h2, así que necesita la fuente explícita */}
          <div className="space-y-3 text-center">
            <div className="text-[#dc2626] opacity-60 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>1</div>
            <p className="text-white/70 leading-relaxed">Built for real operations.</p>
          </div>

          {/* Principio 2 */}
          <div className="space-y-3 text-center">
            <div className="text-[#dc2626] opacity-60 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>2</div>
            <p className="text-white/70 leading-relaxed">Systems over noise.</p>
          </div>

          {/* Principio 3 */}
          <div className="space-y-3 text-center">
            <div className="text-[#dc2626] opacity-60 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>3</div>
            <p className="text-white/70 leading-relaxed">Designed to hold under pressure.</p>
          </div>
        </motion.div>
      </motion.div>

      {/* =====================================================
          FORMULARIO DE EMAIL AL FINAL DE LA PÁGINA
          Se usa para capturar emails antes del lanzamiento.
          Aparece el último (delay: 1.5s) — la "firma" de la página.
          ===================================================== */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 1.5, ease: "easeIn" }} // delay: 1.5s — el último
        className="mt-32 flex flex-col items-center gap-4 relative z-10 w-full max-w-md"
        onSubmit={(e) => {
          e.preventDefault(); // evita que la página se recargue al hacer submit
          // Handle form submission — aquí iría la lógica de guardar el email
        }}
      >
        {/* Texto explicativo del formulario — muy sutil (text-white/40 = 40% visible) */}
        <p className="text-white/40 tracking-wide">Leave your email. We'll let you know when we launch.</p>

        {/* Fila horizontal con el input y el botón lado a lado */}
        <div className="flex gap-3 w-full">

          {/* Campo de email:
              type="email" = el navegador valida que sea formato correcto
              required = no se puede enviar vacío
              bg-white/5 = fondo casi transparente (blanco 5%)
              border border-white/10 = borde sutil blanco al 10%
              focus:border-[#dc2626]/40 = al hacer clic, el borde se vuelve rojo suave
              transition-colors = el cambio de color del borde es animado */}
          <input
            type="email"
            placeholder="your@email.com"
            required
            className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#dc2626]/40 transition-colors"
          />

          {/* Botón de envío:
              bg-[#dc2626]/10 = fondo rojo muy sutil (10% opacidad)
              border border-[#dc2626]/30 = borde rojo al 30%
              hover:bg-[#dc2626]/20 = al pasar el mouse, el fondo se vuelve más rojo
              transition-colors = el cambio al hacer hover es animado */}
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#dc2626]/10 border border-[#dc2626]/30 text-[#dc2626] rounded hover:bg-[#dc2626]/20 transition-colors tracking-wide"
          >
            Notify
          </button>
        </div>
      </motion.form>
    </div>
  );
}

// ============================================================
// RESUMEN DE App.tsx:
// Este archivo es el director de orquesta. No dibuja nada por
// sí mismo — ensambla las piezas:
//   BeatingBrain    → el ambiente (fondo)
//   RollingHeptagon → el movimiento (fondo)
//   Hero section    → el mensaje (contenido)
//   Formulario      → la acción (conversión)
//
// Todo el contenido aparece con un fade-in escalonado:
//   0.0s → el contenedor general
//   0.3s → el nombre h777
//   0.6s → el tagline
//   0.9s → el copy principal
//   1.2s → los tres principios
//   1.5s → el formulario de email
// Cada elemento espera al anterior — la página "se revela" de arriba a abajo.
// ============================================================