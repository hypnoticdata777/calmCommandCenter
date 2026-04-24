// ============================================================
// ARCHIVO: Journal.tsx
//
// ¿QUÉ HACE ESTA PÁGINA?
// Muestra escritura sobre sistemas y operaciones.
// El fondo animado viene de Layout.tsx — no se define aquí.
// ============================================================

import { motion } from "motion/react";

export function Journal() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-8 py-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="text-center space-y-6 max-w-xl"
      >
        <p className="text-brand/60 text-sm tracking-widest uppercase">Journal</p>
        <h1 className="text-4xl font-bold tracking-wide leading-tight">
          Thinking out loud.
        </h1>
        <div className="h-px bg-foreground/10 w-24 mx-auto" />
        <p className="text-foreground/40 tracking-wide leading-relaxed">
          Writing on systems, operations, and building in public.
        </p>
      </motion.div>
    </div>
  );
}
