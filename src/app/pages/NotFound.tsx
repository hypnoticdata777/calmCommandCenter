// ============================================================
// ARCHIVO: NotFound.tsx
//
// ¿QUÉ HACE ESTA PÁGINA?
// Se muestra cuando el usuario visita una URL que no existe
// en la app — por ejemplo /random-url o una ruta mal escrita.
// Sin esta página, el usuario vería pantalla en blanco.
// El Link de "Back home" lo regresa a la ruta raíz (/).
// ============================================================

import { motion } from "motion/react";
import { Link } from "react-router-dom";

// PROJECT COMMAND STRUCTURE - NotFound
// 1. Why: Prevents invalid URLs from becoming blank or confusing screens.
// 2. Who: Visitors who mistype a URL or follow an outdated link.
// 3. Main modules: 404 label, message, and Back home Link.
// 4. Screens: Catch-all route "*".
// 5. Data stored: Static error copy only.
// 6. State tracked: Motion entrance state only.
// 7. User actions: Return to the home route.
// 8. Rules: Keep the recovery action obvious and route-safe.
// 9. Outside tools: React Router Link and Motion.
// 10. Smallest version: 404 message plus a link back to "/".

export function NotFound() {
  return (
    // relative z-10 = aparece encima del fondo animado de Layout.tsx
    <div className="min-h-screen text-foreground flex flex-col items-center justify-center px-8 py-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="text-center space-y-6 max-w-xl"
      >
        {/* El número 404 es el código HTTP estándar de "página no encontrada" */}
        <p className="text-brand/60 text-sm tracking-widest uppercase">404</p>
        <h1 className="text-4xl font-bold tracking-wide leading-tight">
          Nothing here.
        </h1>
        <div className="h-px bg-foreground/10 w-24 mx-auto" />
        <p className="text-foreground/40 tracking-wide leading-relaxed">
          That page doesn't exist.
        </p>

        {/* Link es el componente de React Router que navega sin recargar la página */}
        <Link
          to="/"
          className="inline-block mt-4 text-sm text-brand/60 hover:text-brand tracking-wider transition-colors"
        >
          ← Back home
        </Link>
      </motion.div>
    </div>
  );
}
