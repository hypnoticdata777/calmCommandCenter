/**
 * ============================================================
 * ARCHIVO: postcss.config.mjs
 *
 * ¿QUÉ HACE ESTE ARCHIVO?
 * Configura PostCSS — una herramienta que procesa y transforma
 * el CSS antes de enviarlo al navegador. Funciona como una
 * cadena de transformaciones: tomas CSS, lo pasas por plugins,
 * y obtienes CSS mejorado/compatible.
 *
 * EJEMPLOS DE LO QUE PUEDE HACER POSTCSS:
 * - Autoprefixer: agrega prefijos de navegador automáticamente
 *   (-webkit-, -moz-, etc.) para compatibilidad
 * - postcss-nested: permite anidar CSS como en Sass/SCSS
 * - postcss-custom-media: permite media queries con variables
 *
 * ¿POR QUÉ ESTÁ VACÍO?
 * Tailwind CSS v4 (via @tailwindcss/vite) automatically sets up all required
 * PostCSS plugins — you do NOT need to include `tailwindcss` or `autoprefixer` here.
 *
 * This file only exists for adding additional PostCSS plugins, if needed.
 * For example:
 *
 * import postcssNested from 'postcss-nested'
 * export default { plugins: [postcssNested()] }
 *
 * Otherwise, you can leave this file empty.
 *
 * La extensión .mjs significa "módulo ES" — usa la sintaxis
 * moderna de import/export en lugar del require() antiguo de Node.js.
 * ============================================================
 */

// Exportamos un objeto vacío — no necesitamos plugins adicionales por ahora.
// Si en el futuro se necesita uno, se agrega aquí: { plugins: [miPlugin()] }
export default {}
