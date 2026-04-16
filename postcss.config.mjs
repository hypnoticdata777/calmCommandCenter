/**
 * ============================================================================
 * QUICK REFERENCE: POSTCSS CONFIGURATION
 * ============================================================================
 * | CONCEPT           | DESCRIPTION                                           |
 * |-------------------|-------------------------------------------------------|
 * | PostCSS           | A tool for transforming CSS with JavaScript plugins.  |
 * | .mjs              | Extension for ECMAScript Modules in Node.js.          |
 * | export default    | Standard syntax to export the configuration object.   |
 * | plugins           | An array of tools to process CSS (e.g. Autoprefixer). |
 * | Tailwind v4       | Automatically handles basic processing via Vite.      |
 * ============================================================================
 */

/**
 * ============================================================================
 * FILE DOCUMENTATION: postcss.config.mjs
 * ============================================================================
 * FILE NAME: postcss.config.mjs
 *
 * WHAT THIS FILE DOES:
 * This file configures the PostCSS engine. PostCSS acts as a pipeline that 
 * takes your CSS files and runs them through various plugins to add 
 * compatibility, modern features, or optimizations.
 *
 * WHAT THE SYSTEM USES IT FOR:
 * During the build process, tools like Vite or Webpack look for this file 
 * to determine which transformations should be applied to your stylesheets 
 * before they reach the browser.
 *
 * EXECUTION FLOW:
 * 1. PostCSS is triggered by the build tool.
 * 2. It reads this configuration file.
 * 3. It applies the plugins listed in the 'plugins' array (if any).
 * 4. It outputs the final, processed CSS ready for production.
 *
 * MAIN SECTIONS:
 * - Configuration Export: Defines the plugins used in the project.
 * ============================================================================
 */

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
 * (-webkit-, -moz-, etc.) para compatibilidad
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

// ============================================================
// SECTION: CONFIGURATION EXPORT
// ============================================================

// Exportamos un objeto vacío — no necesitamos plugins adicionales por ahora.
// Si en el futuro se necesita uno, se agrega aquí: { plugins: [miPlugin()] }
// Note: We leave this empty because Tailwind v4 handles the heavy lifting.
export default {}
