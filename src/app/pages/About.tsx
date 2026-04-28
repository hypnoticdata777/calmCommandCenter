import { motion } from "motion/react";

const frictionPoints = [
  "unclear ownership",
  "hidden bottlenecks",
  "unnecessary friction in simple tasks",
];

const principles = [
  "If it's hard to understand, it won't be used",
  "If it depends on one person, it will fail",
  "If it creates friction, it will be ignored",
  "If it doesn't move work forward, it's noise",
];

const focusAreas = [
  "Tools that automate repetitive work",
  "Systems that reduce decision fatigue",
  "Interfaces that feel intuitive instead of forced",
  "Workflows that continue even when things aren't fully understood",
];

function SectionNumber({ children }: { children: string }) {
  return (
    <div className="font-display text-brand/60 text-sm tracking-widest">
      {children}
    </div>
  );
}

export function About() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-28 md:px-10 lg:px-16 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeIn" }}
        className="mx-auto flex w-full max-w-5xl flex-col gap-28"
      >
        <section className="max-w-3xl space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="space-y-8"
          >
            <p className="text-brand/60 text-sm tracking-widest uppercase">
              About
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight">
              I build systems that make work move.
            </h1>

            <div className="h-px bg-foreground/10 w-28" />

            <div className="space-y-5 text-lg md:text-xl leading-loose text-foreground/70">
              <p>Because most systems don't.</p>
              <p>
                They stall, depend on the wrong things, or quietly break when
                nobody's looking.
              </p>
              <p className="text-foreground/90">
                I don't build for theory.
                <br />
                I build for when things get messy.
              </p>
            </div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="space-y-5">
            <SectionNumber>01 / What I Do</SectionNumber>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              Messy environments are usually telling the truth.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-loose text-foreground/70">
            <p>
              I'm drawn to messy environments, places where things slow down,
              break, or depend too much on one person.
            </p>
            <p className="text-foreground/90">That's usually where the real problem is:</p>

            <div className="grid gap-4 sm:grid-cols-3">
              {frictionPoints.map((point, index) => (
                <div
                  key={point}
                  className="border-l border-brand/40 pl-4 text-foreground/75"
                >
                  <div className="font-display text-brand/60 text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-foreground/80">
              <p>I don't try to fix everything at once.</p>
              <p>
                I find the edges.
                <br />
                Map the flow.
                <br />
                Remove what gets in the way.
              </p>
              <p className="text-foreground/90">
                Then build something simple enough that people actually use it.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="space-y-5">
            <SectionNumber>02 / How I Think</SectionNumber>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              Clarity is not decorative.
            </h2>
          </div>

          <div className="space-y-10">
            <div className="grid gap-5">
              {principles.map((principle) => (
                <p
                  key={principle}
                  className="border-b border-foreground/10 pb-5 text-xl leading-relaxed text-foreground/85"
                >
                  {principle}
                </p>
              ))}
            </div>

            <div className="space-y-5 text-lg leading-loose text-foreground/65">
              <p>
                Work should not feel chaotic by default. It usually feels that
                way because the system behind it is unclear.
              </p>
              <p className="text-foreground/90">
                Fix the system, and the work starts to flow.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="space-y-5">
            <SectionNumber>03 / Current Focus</SectionNumber>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              Building for motion, not ceremony.
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg leading-loose text-foreground/70">
              Right now I'm focused on building:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="border border-foreground/10 bg-background/40 px-5 py-5"
                >
                  <p className="text-lg leading-relaxed text-foreground/80">
                    {area}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xl leading-loose text-foreground/90">
              Not everything needs to be solved upfront.
              <br />
              The work just needs to keep moving.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="border-t border-foreground/10 pt-12"
        >
          <div className="ml-auto max-w-3xl space-y-10">
            <div className="space-y-5">
              <SectionNumber>04 / Why It Matters</SectionNumber>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-wide">
                I care about systems that actually deliver outcomes.
              </h2>
            </div>

            <div className="space-y-7 text-lg md:text-xl leading-loose text-foreground/70">
              <p>I'm not interested in building for the sake of building.</p>

              <div className="flex flex-wrap gap-x-8 gap-y-3 text-brand/80">
                <span>clarity</span>
                <span>execution</span>
                <span>systems that actually deliver outcomes</span>
              </div>

              <p>
                If you're working on something real, and need it to move faster,
                smoother, or more reliably, we'll probably get along.
              </p>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
