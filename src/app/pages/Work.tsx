// ============================================================
// ARCHIVO: Work.tsx
//
// ¿QUÉ HACE ESTA PÁGINA?
// Muestra la página de proyectos seleccionados.
// El fondo animado (BeatingBrain + heptágonos) viene de Layout.tsx
// y corre continuamente sin reiniciarse al navegar aquí.
// Esta página solo define su contenido propio.
// ============================================================

import { motion } from "motion/react";

// PROJECT COMMAND STRUCTURE - Work
// 1. Why: Reserves a clear place for selected project writeups.
// 2. Who: Visitors evaluating what has been built.
// 3. Main modules: Page label, headline, divider, status copy.
// 4. Screens: "/work".
// 5. Data stored: Static placeholder copy only.
// 6. State tracked: Motion entrance state only.
// 7. User actions: Read the status and navigate elsewhere through the shared nav.
// 8. Rules: Do not invent finished case studies before real content exists.
// 9. Outside tools: Motion for the entrance animation.
// 10. Smallest version: A truthful placeholder that does not break routing.

export function Work() {
  return (
    // relative z-10 = este contenido aparece encima del fondo animado
    <div className="min-h-screen text-foreground flex flex-col items-center justify-center px-8 py-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="text-center space-y-6 max-w-xl"
      >
        <p className="text-brand/60 text-sm tracking-widest uppercase">Work</p>
        <h1 className="text-4xl font-bold tracking-wide leading-tight">
          Selected projects.
        </h1>
        <div className="h-px bg-foreground/10 w-24 mx-auto" />
        <p className="text-foreground/40 tracking-wide leading-relaxed">
          This section is being built carefully.
        </p>
      </motion.div>
    </div>
  );
}
