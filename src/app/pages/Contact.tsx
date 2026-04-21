import { motion } from "motion/react";

export function Contact() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="text-center space-y-6 max-w-xl"
      >
        <p className="text-[#dc2626]/60 text-sm tracking-widest uppercase">Contact</p>
        <h1 className="text-4xl font-bold tracking-wide leading-tight">
          Let's talk.
        </h1>
        <div className="h-px bg-white/10 w-24 mx-auto" />
        <p className="text-white/40 tracking-wide leading-relaxed">
          If it's worth saying, say it directly.
        </p>
      </motion.div>
    </div>
  );
}
