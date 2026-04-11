// ============================================================
// ARCHIVO: vite.config.ts
//
// ¿QUÉ HACE ESTE ARCHIVO?
// Configura Vite — la herramienta que hace dos cosas:
//   1. En desarrollo: sirve el proyecto localmente con recarga
//      instantánea al guardar cambios (Hot Module Replacement)
//   2. En producción: compila y empaqueta todo el código en
//      archivos optimizados listos para subir a un servidor
//
// Piénsalo como el panel de control de cómo se construye el proyecto.
// ============================================================

// defineConfig es un helper de Vite que activa el autocompletado
// y verificación de tipos al escribir la configuración.
import { defineConfig } from 'vite'

// "path" es un módulo nativo de Node.js para manejar rutas de archivos.
// Funciona igual en Windows, Mac y Linux — resuelve las diferencias
// de separadores (\ vs /) automáticamente.
import path from 'path'

// Plugin que integra Tailwind CSS v4 directamente en el pipeline de Vite.
// Sin este plugin, Vite no sabría procesar las directivas de Tailwind.
import tailwindcss from '@tailwindcss/vite'

// Plugin que permite a Vite entender la sintaxis JSX de React
// y los archivos .tsx/.jsx. Sin él, Vite no sabría qué hacer con ellos.
import react from '@vitejs/plugin-react'

// "export default" exporta la configuración para que Vite la lea al arrancar.
export default defineConfig({

  // plugins: extensiones que amplían las capacidades de Vite.
  // Cada plugin() es una función que devuelve el plugin configurado.
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),        // habilita soporte para React, JSX, .tsx, .jsx
    tailwindcss(),  // habilita soporte para Tailwind CSS v4
  ],

  resolve: {
    // alias: atajos de ruta para importaciones más limpias.
    alias: {
      // Alias @ to the src directory
      // Sin alias: import "../../components/Button"  (frágil, cambia con la ubicación)
      // Con alias:  import "@/components/Button"     (siempre igual, desde cualquier lugar)
      // path.resolve convierte './src' en la ruta absoluta real del sistema.
      // __dirname es la carpeta donde está este archivo (la raíz del proyecto).
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  // assetsInclude: tipos de archivo que Vite copia tal cual al build final,
  // sin transformar. Los SVG se pueden importar como URLs, los CSV como datos.
  assetsInclude: ['**/*.svg', '**/*.csv'],
  // "**/*.svg" = cualquier archivo .svg en cualquier carpeta del proyecto
})
