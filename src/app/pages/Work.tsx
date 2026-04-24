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

export function Work() {
  return (
    // relative z-10 = este contenido aparece encima del fondo animado
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-8 py-16 relative z-10">
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
