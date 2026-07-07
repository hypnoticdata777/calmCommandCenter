// ╔══════════════════════════════════════════════════════════════════╗
// ║  TAGS TABLE — App.tsx                                           ║
// ╠══════════════════════════════╦═══════════════════════════════════╣
// ║  Tag / Concept               ║  Purpose                         ║
// ╠══════════════════════════════╬═══════════════════════════════════╣
// ║  motion                      ║  Animation library for React     ║
// ║  motion.div                  ║  <div> that can animate          ║
// ║  motion.p                    ║  <p> that can animate            ║
// ║  motion.form                 ║  <form> that can animate         ║
// ║  initial                     ║  Starting state of animation     ║
// ║  animate                     ║  End state of animation          ║
// ║  transition                  ║  How long / how the anim runs    ║
// ║  delay                       ║  Seconds to wait before animating║
// ║  duration                    ║  How many seconds the anim lasts ║
// ║  ease                        ║  Speed curve (smooth vs sharp)   ║
// ║  className                   ║  Tailwind CSS utility classes    ║
// ║  BeatingBrain                ║  Component: pulsing red blobs    ║
// ║  RollingHeptagon             ║  Component: floating heptagon    ║
// ║  spread operator (...)       ║  Unpacks object as props         ║
// ║  export default              ║  Exports the main component      ║
// ║  onSubmit                    ║  Event fired on form submit      ║
// ║  e.preventDefault()          ║  Stops page from reloading       ║
// ║  z-10                        ║  Layers element above background ║
// ║  grid / grid-cols-3          ║  3-column CSS grid layout        ║
// ╚══════════════════════════════╩═══════════════════════════════════╝

// ╔══════════════════════════════════════════════════════════════════╗
// ║  PAGE DESCRIPTION                                               ║
// ╠══════════════════════════════════════════════════════════════════╣
// ║  What the user sees:                                            ║
// ║    A dark page with an animated background (blobs + heptagons)  ║
// ║    and text that fades in progressively from top to bottom.     ║
// ║    At the bottom, real links point into Lab and Journal.         ║
// ╠══════════════════════════════════════════════════════════════════╣
// ║  Structure:                                                     ║
// ║    1. Background — BeatingBrain + 3 × RollingHeptagon           ║
// ║    2. Hero       — name, tagline, copy, three principles        ║
// ║    3. CTAs       — real paths into Lab and Journal               ║
// ╚══════════════════════════════════════════════════════════════════╝

// ── IMPORTS ────────────────────────────────────────────────────────
// motion gives us HTML elements that can animate.
// motion.div is an animatable <div>, motion.p is an animatable <p>, etc.
import { motion } from "motion/react";
import { Link } from "react-router-dom";

// PROJECT COMMAND STRUCTURE - Home
// 1. Why: Introduces h777 and routes visitors into the real site sections.
// 2. Who: New visitors, future collaborators, students, builders, and Carlos.
// 3. Main modules: Hero copy, manifesto lines, principles grid, next-step CTAs.
// 4. Screens: This is the root screen at "/"; it depends on Layout for nav/background.
// 5. Data stored: Static landing copy only; no form data or backend records.
// 6. State tracked: Motion entrance timing only; route/theme state lives outside.
// 7. User actions: Read the positioning, open Lab, or open Journal.
// 8. Rules: Do not claim fake signup/contact plumbing; keep content above background.
// 9. Outside tools: React Router Link and Motion animations.
// 10. Smallest version: Brand intro, one clear value statement, and one real next step.

// Each import brings in one piece of the puzzle to assemble here.
// El fondo animado (BeatingBrain + heptágonos) ya no vive aquí —
// se movió a Layout.tsx para que nunca se reinicie al navegar entre páginas.
// ──────────────────────────────────────────────────────────────────

// "export default" makes this the main component of the file.
// When another file imports App.tsx, it gets this function.
export default function App() {
  return (
    // Root container for the entire page.
    // min-h-screen  = at least as tall as the browser window
    // body provides the theme background; this page stays transparent so the
    // shared animated background can remain visible behind the content.
    // flex flex-col = children stack vertically
    // items-center  = everything centered horizontally
    // px-8 py-16    = horizontal padding 8, vertical padding 16
    <div className="min-h-screen text-foreground flex flex-col items-center justify-center px-8 py-16">

      {/* ── HERO SECTION ──────────────────────────────────────────── */}
      {/* El fondo animado (BeatingBrain + heptágonos) está en Layout.tsx
          y no necesita repetirse aquí. */}
      {/* "relative z-10" places this above the animated background.
          The whole hero fades in from invisible (opacity 0 → 1)
          over 1.2 seconds when the page loads. */}
      <motion.div
        initial={{ opacity: 0 }}   // starts completely invisible
        animate={{ opacity: 1 }}   // fades to fully visible
        transition={{ duration: 1.2, ease: "easeIn" }}
        // max-w-3xl limits line length so text doesn't stretch too wide
        className="max-w-3xl w-full text-center space-y-16 relative z-10"
      >

        {/* ── HEADER ────────────────────────────────────────────────── */}
        <div className="space-y-8">

          {/* Name "h777" — waits 0.3s so it appears after the container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease: "easeIn" }}
            className="flex items-center justify-center gap-3"
          >
            {/* h1 = most important heading on the page (only one per page).
                tracking-wider = extra letter spacing for the logo feel. */}
            <h1 className="text-5xl tracking-wider">h777</h1>
          </motion.div>

          {/* Tagline — fades in 0.6s after load.
              text-white/60 = white at 60% opacity (soft grey). */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.6, ease: "easeIn" }}
            className="text-lg text-foreground/60 leading-relaxed tracking-wide"
          >
            Where property management ops meet practical software.
          </motion.p>
        </div>
        {/* ─────────────────────────────────────────────────────────── */}

        {/* ── MAIN COPY ─────────────────────────────────────────────── */}
        {/* Appears 0.9s in — the page "unwraps" from top to bottom. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.9, ease: "easeIn" }}
          className="space-y-12"
        >
          {/* Horizontal rule: h-px = 1px tall, bg-white/10 = 10% white */}
          <div className="h-px bg-foreground/10" />

          <div className="space-y-6">
            {/* h2 = second most important heading.
                text-brand = color de acento de la marca (rojo en dark, cian en light) */}
            <h2 className="text-brand text-display leading-tight font-bold tracking-[0.02em]">
              Making messy operations behave themselves.
            </h2>

            {/* Three short italic lines — the project manifesto.
                text-white/80 = white at 80% opacity. */}
            <div className="space-y-4 text-foreground/80 leading-loose text-lg">
              <p className="italic">Less dashboard theater.</p>
              <p className="italic">Fewer mystery processes.</p>
              <p className="italic">More things that actually help.</p>
            </div>
          </div>

          <div className="h-px bg-foreground/10" />

          <div className="space-y-6">
            {/* First line more visible (90%), second more subtle (60%) —
                creates a visual hierarchy within the same text block. */}
            <p className="text-foreground/90 leading-loose text-lg">
              I come from property management, where perfectly normal tasks can turn into a full-contact sport for no good reason.
            </p>
            <p className="text-foreground/60 leading-loose text-lg italic">
              Now I build open-source tools, SaaS ideas, and practical workflows for remote teams and hands-on owners who want more control and less operational nonsense.
            </p>
          </div>
        </motion.div>
        {/* ─────────────────────────────────────────────────────────── */}

        {/* ── PRINCIPLES ────────────────────────────────────────────── */}
        {/* Last hero element to appear (delay 1.2s).
            grid-cols-1 md:grid-cols-3 = 1 column on mobile, 3 on desktop. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.2, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16"
        >
          {/* Principle 1 — font-display applies Playfair Display to this <div>
              because only headings get it automatically via theme.css. */}
          <div className="space-y-3 text-center">
            <div className="font-display text-brand opacity-60 text-xl">1</div>
            <p className="text-foreground/70 leading-relaxed">Remote ops without the headache.</p>
          </div>

          {/* Principle 2 */}
          <div className="space-y-3 text-center">
            <div className="font-display text-brand opacity-60 text-xl">2</div>
            <p className="text-foreground/70 leading-relaxed">Practical beats precious.</p>
          </div>

          {/* Principle 3 */}
          <div className="space-y-3 text-center">
            <div className="font-display text-brand opacity-60 text-xl">3</div>
            <p className="text-foreground/70 leading-relaxed">Clear enough to actually use.</p>
          </div>
        </motion.div>
        {/* ─────────────────────────────────────────────────────────── */}

      </motion.div>
      {/* ─────────────────────────────────────────────────────────── */}

      {/* ── NEXT STEPS ────────────────────────────────────────────── */}
      {/* Last element on the page (delay 1.5s) — gives visitors real paths
          through the site while contact/newsletter plumbing is still light. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 1.5, ease: "easeIn" }}
        className="mt-32 flex flex-col items-center gap-5 relative z-10 w-full max-w-md"
      >
        <p className="text-foreground/45 tracking-wide leading-relaxed">
          The lab has the tools. The journal has the thinking behind them.
        </p>

        <div className="flex flex-wrap justify-center gap-3 w-full">
          <Link
            to="/lab"
            className="px-6 py-2.5 bg-brand/10 border border-brand/30 text-brand rounded hover:bg-brand/20 transition-colors tracking-wide"
          >
            Visit Lab
          </Link>
          <Link
            to="/journal"
            className="px-6 py-2.5 border border-foreground/15 text-foreground/70 rounded hover:border-foreground/30 hover:text-foreground transition-colors tracking-wide"
          >
            Read Journal
          </Link>
        </div>
      </motion.div>
      {/* ─────────────────────────────────────────────────────────── */}

    </div>
  );
}
