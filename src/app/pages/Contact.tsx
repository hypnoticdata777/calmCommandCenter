// ============================================================
// ARCHIVO: Contact.tsx
//
// ¿QUÉ HACE ESTA PÁGINA?
// Página de contacto — directo y sin ruido.
// El fondo animado viene de Layout.tsx — no se define aquí.
// ============================================================

import { motion } from "motion/react";
import { Github, Mail } from "lucide-react";
import { Seo } from "../components/Seo";

// PROJECT COMMAND STRUCTURE - Contact
// 1. Why: Gives visitors a real, low-friction path to reach or inspect the builder.
// 2. Who: Collaborators, recruiters, classmates, and anyone following the work.
// 3. Main modules: Contact headline, short copy, email CTA, GitHub CTA.
// 4. Screens: "/contact".
// 5. Data stored: No submitted data; outbound email and GitHub URLs only.
// 6. State tracked: Motion entrance state only.
// 7. User actions: Send an email or open the GitHub profile in a new tab.
// 8. Rules: Do not add fake forms unless a real backend/service exists.
// 9. Outside tools: Lucide GitHub icon, external GitHub profile, Motion.
// 10. Smallest version: One accurate contact method.

const email = "hypnoticdata777@gmail.com";

export function Contact() {
  return (
    <div className="min-h-screen text-foreground flex flex-col items-center justify-center px-8 py-16 relative z-10">
      <Seo
        title="Contact | PMC Operations Consulting and Tool Scoping"
        description="Contact Carlos Sanchez for PMC operations coaching, maintenance workflow cleanup, remote team systems, and property management tool scoping."
        path="/contact"
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="text-center space-y-6 max-w-xl"
      >
        <p className="text-brand/60 text-sm tracking-widest uppercase">Contact</p>
        <h1 className="text-4xl font-bold tracking-wide leading-tight">
          Bring me the messy part.
        </h1>
        <div className="h-px bg-foreground/10 w-24 mx-auto" />
        <div className="space-y-5">
          <p className="text-foreground/50 tracking-wide leading-relaxed">
            Email me if you want help organizing PMC operations, cleaning up
            maintenance workflows, scoping a tool, or getting a fresh set of
            experienced eyes on a process that keeps slipping.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded border border-brand/30 bg-brand/10 px-5 py-2.5 font-display tracking-wide text-brand transition-colors hover:bg-brand/20"
            >
              <Mail size={16} aria-hidden="true" />
              {email}
            </a>

            <a
              href="https://github.com/hypnoticdata777"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border border-foreground/15 px-5 py-2.5 font-display tracking-wide text-foreground/65 transition-colors hover:border-brand/30 hover:text-brand"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
          </div>

          <p className="mx-auto max-w-lg text-sm leading-loose text-foreground/40">
            Helpful context: what is messy, what you have already tried, what
            tools or process you use now, who is involved, and what outcome you
            want.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
