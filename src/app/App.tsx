/*
/* ╔══════════════════════════════════════════════════════════════════════════════╗
/* ║                         CONCEPT TABLE FOR THIS FILE                        ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  SYMBOL / TERM                  PLAIN-LANGUAGE EXPLANATION                 ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  import                       │ Pulls in a piece of code from another      ║
/* ║                               │ file or library so you can use it here.    ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  export default function      │ Marks this function as THE thing this      ║
/* ║                               │ file exports. Any other file that imports  ║
/* ║                               │ App.tsx gets this function.                ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  motion.div / motion.p / etc  │ Regular HTML elements (div, p, form) that  ║
/* ║                               │ the Framer Motion library has enhanced to  ║
/* ║                               │ support animations via props.              ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  initial / animate            │ Framer Motion props. "initial" is the      ║
/* ║                               │ starting state, "animate" is the end       ║
/* ║                               │ state. The library interpolates between    ║
/* ║                               │ them automatically.                        ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  transition                   │ Framer Motion prop that controls HOW the   ║
/* ║                               │ animation plays: speed (duration),         ║
/* ║                               │ delay, and easing curve.                   ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  delay                        │ Seconds to wait before the animation       ║
/* ║                               │ starts. Used here to stagger elements so   ║
/* ║                               │ the page "reveals" top to bottom.          ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  className                    │ JSX's version of HTML's "class" attribute. ║
/* ║                               │ Tailwind utility classes go here.          ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  const HEPTAGON_*             │ Configuration objects defined outside the  ║
/* ║                               │ component so they don't get recreated on   ║
/* ║                               │ every render. Each one describes one       ║
/* ║                               │ heptagon's movement path and timing.       ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  xPath / yPath                │ Arrays of positions (in viewport units)    ║
/* ║                               │ that the heptagon travels through.         ║
/* ║                               │ First and last values match to make the    ║
/* ║                               │ loop seamless.                             ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  rotatePath                   │ Array of rotation angles (in degrees)      ║
/* ║                               │ at each position stop. Gives the heptagon  ║
/* ║                               │ a tumbling effect as it moves.             ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  spread operator {...obj}     │ Expands every key-value pair inside an     ║
/* ║                               │ object as individual props on a component. ║
/* ║                               │ {...HEPTAGON_SLOW} = delay={0}             ║
/* ║                               │ duration={40} xPath={[...]} etc.           ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  e.preventDefault()           │ Stops the browser's default behavior on   ║
/* ║                               │ form submit, which would reload the page.  ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  vw / vh                      │ Viewport units. 1vw = 1% of the browser   ║
/* ║                               │ window's width. 1vh = 1% of its height.   ║
/* ║                               │ Used here so the heptagons travel across  ║
/* ║                               │ the full screen regardless of resolution. ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  z-10                         │ Tailwind class that sets the stacking      ║
/* ║                               │ order (z-index: 10). Higher = in front.   ║
/* ║                               │ The background renders first (no z-index) ║
/* ║                               │ and the content sits on top (z-10).        ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  BeatingBrain                 │ Custom component that renders the          ║
/* ║                               │ animated red blobs in the background.      ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  RollingHeptagon              │ Custom component that renders one          ║
/* ║                               │ seven-sided shape floating across the      ║
/* ║                               │ screen on a defined path.                  ║
/* ╚══════════════════════════════════════════════════════════════════════════════╝
*/

/*
/* ╔══════════════════════════════════════════════════════════════════════════════╗
/* ║                            FILE HEADER                                     ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  File      : App.tsx                                                       ║
/* ║  Purpose   : Root component of the application. Assembles every visible    ║
/* ║              piece of the page in one place — background animations,       ║
/* ║              hero copy, principles, and the email capture form.            ║
/* ║              Nothing renders on screen that doesn't originate here.        ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  Sections in this file                                                     ║
/* ║  ─────────────────────────────────────────────────────────────────────     ║
/* ║  1. Imports          → motion library + background components              ║
/* ║  2. Heptagon configs → three constant objects with path/timing data        ║
/* ║  3. Background layer → BeatingBrain + three RollingHeptagons               ║
/* ║  4. Hero section     → name, tagline, copy, and principles grid            ║
/* ║  5. Email form       → pre-launch capture form at the bottom               ║
/* ╠══════════════════════════════════════════════════════════════════════════════╣
/* ║  Stagger timeline (all fade-ins, easeIn):                                  ║
/* ║    0.0s → outer wrapper                                                    ║
/* ║    0.3s → h777 name                                                        ║
/* ║    0.6s → tagline                                                          ║
/* ║    0.9s → main copy block                                                  ║
/* ║    1.2s → principles grid                                                  ║
/* ║    1.5s → email form                                                       ║
/* ╚══════════════════════════════════════════════════════════════════════════════╝
*/


// ── Imports ──────────────────────────────────────────────────────────────────

// "motion" upgrades standard HTML elements so they can accept animation props.
// motion.div is still a <div> — it just gains initial/animate/transition.
import { motion } from "motion/react";

// Both background components live in their own files so this file stays readable.
import { BeatingBrain } from "./components/BeatingBrain";
import { RollingHeptagon } from "./components/RollingHeptagon";


// ── Heptagon path configurations ─────────────────────────────────────────────

// Defined outside the component so the objects are created once at module load,
// not recreated on every render cycle — keeps animations stable.
//
// xPath/yPath: waypoints the shape visits, expressed in viewport units so the
// path scales with any screen size. First and last values match — seamless loop.
// rotatePath: degrees of rotation at each waypoint — creates a tumbling effect.

// SLOW: 40s per loop, opacity 0.4 — the most visible, most contemplative feel.
const HEPTAGON_SLOW = {
  delay: 0,
  duration: 40, // slowest — most contemplative
  xPath:      ["60vw", "-45vw", "70vw", "-50vw", "65vw", "-40vw", "75vw", "-55vw", "60vw"],
  yPath:      ["-35vh", "55vh", "-40vh", "60vh", "10vh", "-30vh", "65vh", "-25vh", "-35vh"],
  rotatePath: [0, 165, -95, 230, -60, 185, -130, 110, 0],
  opacity:    0.4,  // most prominent of the three
};

// FAST: 35s per loop, opacity 0.35 — slightly subtler, delayed 5s so it doesn't
// appear at the same moment as SLOW, which would collapse the depth effect.
const HEPTAGON_FAST = {
  delay: 5,
  duration: 35, // fastest — more energetic
  xPath:      ["-55vw", "65vw", "-40vw", "70vw", "-60vw", "55vw", "-45vw", "75vw", "-55vw"],
  yPath:      ["50vh", "-30vh", "65vh", "-35vh", "20vh", "-40vh", "55vh", "5vh", "50vh"],
  rotatePath: [0, -120, 95, -175, 60, -210, 140, -85, 0],
  opacity:    0.35, // slightly more subtle than SLOW
};

// MEDIUM: 45s per loop, opacity 0.3 — the most transparent. Delayed 12s to stay
// well out of phase with the other two, so all three are rarely in the same spot.
const HEPTAGON_MEDIUM = {
  delay: 12,
  duration: 45, // middle speed — offsets the other two
  xPath:      ["10vw", "-60vw", "75vw", "0vw", "-50vw", "65vw", "-35vw", "70vw", "10vw"],
  yPath:      ["-40vh", "30vh", "-25vh", "60vh", "-35vh", "45vh", "-20vh", "55vh", "-40vh"],
  rotatePath: [0, 180, -110, 240, -70, 195, -155, 125, 0],
  opacity:    0.3,  // most subtle of the three
};


// ── Root component ────────────────────────────────────────────────────────────

export default function App() {
  return (
    // Page shell: full-height, near-black background, white text, centered column.
    // px-8 py-16 keeps content from touching the viewport edges on small screens.
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-8 py-16">

      {/* ── Background layer ──────────────────────────────────────────────────
          Rendered first in the DOM so it sits beneath all content layers.
          No z-index here — content uses z-10 to explicitly float above it. */}

      {/* Animated red blob cluster — creates the ambient atmosphere. */}
      <BeatingBrain />

      {/* Three heptagons on independent paths/speeds for a parallax-like depth.
          Spread operator unpacks each config object as individual props,
          avoiding a long list of prop={value} pairs in JSX. */}
      <RollingHeptagon {...HEPTAGON_SLOW} />
      <RollingHeptagon {...HEPTAGON_FAST} />
      <RollingHeptagon {...HEPTAGON_MEDIUM} />


      {/* ── Hero section ──────────────────────────────────────────────────────
          relative z-10 lifts this above the background layer.
          max-w-3xl caps line length so copy stays readable on wide screens.
          The outer motion.div fades in at 0.0s — sets the stage for children. */}
      <motion.div
        initial={{ opacity: 0 }}  // invisible on first paint
        animate={{ opacity: 1 }}  // transitions to fully visible
        transition={{ duration: 1.2, ease: "easeIn" }} // 1.2s — slow enough to feel intentional
        className="max-w-3xl w-full text-center space-y-16 relative z-10"
      >

        {/* ── Name and tagline block ────────────────────────────────────────── */}
        <div className="space-y-8">

          {/* h777 name — delayed 0.3s so it appears after the wrapper has started
              fading in, creating a subtle cascade rather than everything at once. */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease: "easeIn" }}
            className="flex items-center justify-center gap-3"
          >
            {/* h1: only one per page — marks this as the primary heading for SEO
                and accessibility. text-[3rem] = 48px, tracking-wider opens
                letter spacing to match the sparse, minimal aesthetic. */}
            <h1 className="text-[3rem] tracking-wider">h777</h1>
          </motion.div>

          {/* Tagline — 0.6s delay keeps the stagger rhythm consistent (every 0.3s).
              text-white/60 = 60% white, which reads as a soft secondary gray. */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.6, ease: "easeIn" }}
            className="text-[1.125rem] text-white/60 leading-relaxed tracking-wide"
          >
            A calm command center for developer-operators.
          </motion.p>
        </div>


        {/* ── Main copy block ───────────────────────────────────────────────── */}
        {/* 0.9s delay — the page "unrolls" top to bottom as each section appears. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.9, ease: "easeIn" }}
          className="space-y-12"
        >
          {/* Hairline divider: h-px = 1px tall, bg-white/10 = barely visible white.
              Used to suggest structure without adding visual weight. */}
          <div className="h-px bg-white/10" />

          <div className="space-y-6">
            {/* h2: secondary heading. Red (#dc2626) is the single brand accent
                color — used sparingly so it retains its visual weight. */}
            <h2 className="text-[#dc2626] text-[2.75rem] leading-tight font-bold tracking-[0.02em]">
              Building systems that remove friction
            </h2>

            {/* Three-line manifesto in italics — brevity reinforces the tone.
                text-white/80 = slightly softer than full white to avoid harshness. */}
            <div className="space-y-4 text-white/80 leading-loose text-[1.125rem]">
              <p className="italic">Not loud.</p>
              <p className="italic">Not flashy.</p>
              <p className="italic">Not trying to convince.</p>
            </div>
          </div>

          {/* Second hairline divider — closes the copy section visually. */}
          <div className="h-px bg-white/10" />

          <div className="space-y-6">
            {/* Two closing lines: first at 90% white (near-primary), second at 60%
                (softer, receding) — creates a natural visual hierarchy in a single block. */}
            <p className="text-white/90 leading-loose text-[1.125rem]">
              Competence you can feel without being told.
            </p>
            <p className="text-white/60 leading-loose text-[1.125rem] italic">
              Systems that reduce friction without adding noise.
            </p>
          </div>
        </motion.div>


        {/* ── Principles grid ───────────────────────────────────────────────── */}
        {/* 1.2s delay — last element in the hero block to appear.
            grid-cols-1 on mobile, grid-cols-3 on md+ so layout adapts correctly. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.2, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16"
        >
          {/* Principle 1 — inline style is necessary here because this is a div,
              not a heading element, so Tailwind's font-serif shorthand won't target
              the Playfair Display variable correctly without the explicit declaration. */}
          <div className="space-y-3 text-center">
            <div className="text-[#dc2626] opacity-60 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>1</div>
            <p className="text-white/70 leading-relaxed">Built for real operations.</p>
          </div>

          {/* Principle 2 */}
          <div className="space-y-3 text-center">
            <div className="text-[#dc2626] opacity-60 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>2</div>
            <p className="text-white/70 leading-relaxed">Systems over noise.</p>
          </div>

          {/* Principle 3 */}
          <div className="space-y-3 text-center">
            <div className="text-[#dc2626] opacity-60 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>3</div>
            <p className="text-white/70 leading-relaxed">Designed to hold under pressure.</p>
          </div>
        </motion.div>

      </motion.div>


      {/* ── Email capture form ────────────────────────────────────────────────
          Sits outside the hero motion.div so it can have its own stagger delay
          (1.5s) without being constrained by the parent's layout. mt-32 gives
          clear breathing room between the principles and the form.             */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 1.5, ease: "easeIn" }} // last element on the page to appear
        className="mt-32 flex flex-col items-center gap-4 relative z-10 w-full max-w-md"
        onSubmit={(e) => {
          e.preventDefault(); // prevents page reload — the browser's default form behavior
          // Handle form submission — email persistence logic goes here
        }}
      >
        {/* Label copy at 40% white — intentionally quiet so it doesn't compete
            with the hero messaging above. */}
        <p className="text-white/40 tracking-wide">Leave your email. We'll let you know when we launch.</p>

        {/* Input and button sit side by side via flex gap-3. */}
        <div className="flex gap-3 w-full">

          {/* Email input:
              type="email" — browser validates format before submitting, no JS needed.
              required — prevents empty submissions without custom validation logic.
              focus:border-[#dc2626]/40 — red accent on focus keeps the brand color
              present even in interactive states. transition-colors animates the change. */}
          <input
            type="email"
            placeholder="your@email.com"
            required
            className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#dc2626]/40 transition-colors"
          />

          {/* Submit button: bg-[#dc2626]/10 keeps the red present but very muted
              at rest — hover:bg-[#dc2626]/20 doubles the intensity on hover, giving
              clear feedback without a jarring color jump. */}
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#dc2626]/10 border border-[#dc2626]/30 text-[#dc2626] rounded hover:bg-[#dc2626]/20 transition-colors tracking-wide"
          >
            Notify
          </button>
        </div>
      </motion.form>

    </div>
  );
}
