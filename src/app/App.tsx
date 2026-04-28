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
// ║    At the bottom, an email capture form for pre-launch signups. ║
// ╠══════════════════════════════════════════════════════════════════╣
// ║  Structure:                                                     ║
// ║    1. Background — BeatingBrain + 3 × RollingHeptagon           ║
// ║    2. Hero       — name, tagline, copy, three principles        ║
// ║    3. Form       — email capture before launch                  ║
// ╚══════════════════════════════════════════════════════════════════╝

// ── IMPORTS ────────────────────────────────────────────────────────
// motion gives us HTML elements that can animate.
// motion.div is an animatable <div>, motion.p is an animatable <p>, etc.
import { motion } from "motion/react";

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
    // bg-background = color del tema activo (negro en dark, blanco en light)
    // flex flex-col = children stack vertically
    // items-center  = everything centered horizontally
    // px-8 py-16    = horizontal padding 8, vertical padding 16
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-8 py-16">

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
            A calm command center for people building useful things.
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
              Systems that remove friction.
            </h2>

            {/* Three short italic lines — the project manifesto.
                text-white/80 = white at 80% opacity. */}
            <div className="space-y-4 text-foreground/80 leading-loose text-lg">
              <p className="italic">Not louder.</p>
              <p className="italic">Not prettier.</p>
              <p className="italic">Just clearer.</p>
            </div>
          </div>

          <div className="h-px bg-foreground/10" />

          <div className="space-y-6">
            {/* First line more visible (90%), second more subtle (60%) —
                creates a visual hierarchy within the same text block. */}
            <p className="text-foreground/90 leading-loose text-lg">
              I build tools, notes, and workflows that make messy work easier to move.
            </p>
            <p className="text-foreground/60 leading-loose text-lg italic">
              For operators, students, builders, and anyone trying to turn chaos into something usable.
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
            <p className="text-foreground/70 leading-relaxed">Built from real problems.</p>
          </div>

          {/* Principle 2 */}
          <div className="space-y-3 text-center">
            <div className="font-display text-brand opacity-60 text-xl">2</div>
            <p className="text-foreground/70 leading-relaxed">Designed to reduce noise.</p>
          </div>

          {/* Principle 3 */}
          <div className="space-y-3 text-center">
            <div className="font-display text-brand opacity-60 text-xl">3</div>
            <p className="text-foreground/70 leading-relaxed">Made to hold under pressure.</p>
          </div>
        </motion.div>
        {/* ─────────────────────────────────────────────────────────── */}

      </motion.div>
      {/* ─────────────────────────────────────────────────────────── */}

      {/* ── EMAIL FORM ────────────────────────────────────────────── */}
      {/* Last element on the page (delay 1.5s) — the page's "signature".
          Captures emails before launch. relative z-10 keeps it above
          the animated background layer. */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 1.5, ease: "easeIn" }}
        className="mt-32 flex flex-col items-center gap-4 relative z-10 w-full max-w-md"
        onSubmit={(e) => {
          e.preventDefault(); // stops the browser from refreshing the page on submit
          // Email submission logic goes here
        }}
      >
        {/* Label copy — very subtle (text-white/40 = only 40% visible) */}
        <p className="text-foreground/40 tracking-wide">Follow the build. I'll share tools, notes, and experiments as they go live.</p>

        {/* Input and button sit side by side in a horizontal row */}
        <div className="flex gap-3 w-full">

          {/* Email input:
              type="email"  = browser validates the format automatically
              required      = can't submit with an empty field
              bg-white/5    = near-transparent background
              focus:border-[#dc2626]/40 = border turns red on focus
              transition-colors = border color change is animated */}
          <input
            type="email"
            aria-label="Email address"
            placeholder="your@email.com"
            required
            className="flex-1 bg-foreground/5 border border-foreground/10 rounded px-4 py-2.5 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brand/40 transition-colors"
          />

          {/* Submit button:
              bg-[#dc2626]/10 = very subtle red background (10% opacity)
              hover:bg-[#dc2626]/20 = gets slightly more red on hover
              transition-colors = hover change is animated */}
          <button
            type="submit"
            className="px-6 py-2.5 bg-brand/10 border border-brand/30 text-brand rounded hover:bg-brand/20 transition-colors tracking-wide"
          >
            Notify
          </button>
        </div>
      </motion.form>
      {/* ─────────────────────────────────────────────────────────── */}

    </div>
  );
}
