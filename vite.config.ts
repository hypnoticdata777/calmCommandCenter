// ============================================================
// QUICK REFERENCE TABLE: VITE CONFIGURATION (TYPESCRIPT)
// ============================================================
// | CONCEPT         | TYPE / SOURCE       | DESCRIPTION                                               |
// |-----------------|---------------------|-----------------------------------------------------------|
// | defineConfig    | Function (Vite)     | Helper providing IDE type-safety for the config object.   |
// | path            | Module (Node.js)    | Utility for handling and transforming file paths.         |
// | tailwindcss     | Plugin (@tw/vite)   | Integrates Tailwind v4 into the build pipeline.           |
// | react           | Plugin (@vite/r)    | Enables Fast Refresh and JSX transformation for React.    |
// | plugins         | Array (Config)      | List of extensions that modify Vite's build behavior.     |
// | resolve.alias   | Object (Config)     | Maps specific strings to paths for cleaner imports.       |
// | assetsInclude   | Array (Config)      | Defines non-code files to be treated as static assets.    |
// ============================================================

// ============================================================
// FILE: vite.config.ts
//
// WHAT DOES THIS FILE DO?
// This is the "brain" of the development environment. It configures 
// Vite to transform your source code (React, TSX, Tailwind) into 
// standard JavaScript/CSS that browsers can understand.
//
// SYSTEM ROLE:
// 1. Development: Orchestrates the dev server and Hot Module Replacement (HMR).
// 2. Production: Defines how the 'dist' folder is bundled and optimized.
//
// EXECUTION FLOW:
// 1. Imports necessary plugins and path utilities.
// 2. Defines the configuration object using defineConfig.
// 3. Registers React and Tailwind plugins.
// 4. Sets up path aliasing (e.g., using '@' for 'src').
// 5. Specifies which file types should be treated as static assets.
// ============================================================

// ============================================================
// IMPORTS
// ============================================================

/**
 * defineConfig allows for intellisense and type validation.
 * Without this, writing the config would be prone to typos.
 */
import { defineConfig } from 'vite'

/**
 * Node.js built-in module used to resolve absolute paths,
 * ensuring the project works on Windows, macOS, and Linux.
 */
import path from 'path'

/**
 * Official Tailwind CSS plugin for Vite. 
 * Handles the scanning and injection of utility classes.
 */
import tailwindcss from '@tailwindcss/vite'

/**
 * Essential for React development. 
 * Handles JSX transpilation and state preservation during reloads.
 */
import react from '@vitejs/plugin-react'

// ============================================================
// CONFIGURATION EXPORT
// ============================================================

export default defineConfig({

  // ============================================================
  // PLUGINS
  // ============================================================
  
  /**
   * Plugins extend Vite's core functionality.
   * Order often matters; here we initialize React and Tailwind.
   */
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    
    // Enables support for .jsx and .tsx files with React Fast Refresh.
    react(),        
    
    // Configures the build process to recognize and compile Tailwind v4.
    tailwindcss(),  
  ],

  // ============================================================
  // RESOLUTION & ALIASING
  // ============================================================

  resolve: {
    /**
     * Aliases prevent "Prop-Drilling" of import paths (e.g., ../../../components).
     * By mapping '@' to './src', imports remain clean and relocatable.
     */
    alias: {
      // Alias @ to the src directory
      // Sin alias: import "../../components/Button"  (frágil, cambia con la ubicación)
      // Con alias:  import "@/components/Button"      (siempre igual, desde cualquier lugar)
      
      // path.resolve creates an absolute path from the current directory (__dirname) to the src folder.
      '@': path.resolve(__dirname, './src'),
    },
  },

  // ============================================================
  // ASSET HANDLING
  // ============================================================

  /**
   * File types to support raw imports. Never add .css, .tsx, or .ts files to this.
   * assetsInclude tells Vite to treat these extensions as static files that 
   * return a URL string when imported in code.
   */
  assetsInclude: ['**/*.svg', '**/*.csv'],
  // "**/*.svg" = matches any SVG file in any directory within the project
})
