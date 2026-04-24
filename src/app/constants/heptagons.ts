// ============================================================
// ARCHIVO: constants/heptagons.ts
//
// ¿QUÉ HACE ESTE ARCHIVO?
// Es la fuente única de verdad para la configuración de los
// tres heptágonos animados que flotan en el fondo de la app.
//
// Antes, estos valores estaban copiados en dos lugares:
//   1. App.tsx — como constantes locales
//   2. RollingHeptagon.tsx — como valores por defecto de las props
//
// Ahora viven aquí y ambos archivos los importan.
// Si necesitas cambiar la velocidad, ruta o visibilidad de algún
// heptágono, solo lo cambias aquí y se actualiza en toda la app.
//
// ¿QUÉ ES "export const"?
// "export" permite que otros archivos importen este valor.
// "const" significa que el valor nunca cambia — es fijo.
// ============================================================

// ── HEPTÁGONO LENTO ────────────────────────────────────────
// 40 segundos por vuelta. El más visible (opacidad 0.4).
// Empieza inmediatamente (delay 0).
export const HEPTAGON_SLOW = {
  delay: 0,
  duration: 40,
  // xPath: posiciones horizontales del recorrido (vw = % del ancho de ventana)
  // El primer y último valor son iguales → el loop no da saltos bruscos.
  xPath:      ["60vw", "-45vw", "70vw", "-50vw", "65vw", "-40vw", "75vw", "-55vw", "60vw"],
  yPath:      ["-35vh", "55vh", "-40vh", "60vh", "10vh", "-30vh", "65vh", "-25vh", "-35vh"],
  rotatePath: [0, 165, -95, 230, -60, 185, -130, 110, 0],
  opacity:    0.4,  // más visible de los tres
};

// ── HEPTÁGONO RÁPIDO ───────────────────────────────────────
// 35 segundos por vuelta. Ligeramente más sutil (opacidad 0.35).
// Empieza 5s después para no coincidir con el lento.
export const HEPTAGON_FAST = {
  delay: 5,
  duration: 35,
  xPath:      ["-55vw", "65vw", "-40vw", "70vw", "-60vw", "55vw", "-45vw", "75vw", "-55vw"],
  yPath:      ["50vh", "-30vh", "65vh", "-35vh", "20vh", "-40vh", "55vh", "5vh", "50vh"],
  rotatePath: [0, -120, 95, -175, 60, -210, 140, -85, 0],
  opacity:    0.35,
};

// ── HEPTÁGONO MEDIO ────────────────────────────────────────
// 45 segundos por vuelta. El más sutil (opacidad 0.3).
// Empieza 12s después — bien separado de los otros dos.
export const HEPTAGON_MEDIUM = {
  delay: 12,
  duration: 45,
  xPath:      ["10vw", "-60vw", "75vw", "0vw", "-50vw", "65vw", "-35vw", "70vw", "10vw"],
  yPath:      ["-40vh", "30vh", "-25vh", "60vh", "-35vh", "45vh", "-20vh", "55vh", "-40vh"],
  rotatePath: [0, 180, -110, 240, -70, 195, -155, 125, 0],
  opacity:    0.3,
};
