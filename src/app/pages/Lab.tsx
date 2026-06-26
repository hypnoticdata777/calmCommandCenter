import { motion } from "motion/react";

const tools = [
  {
    name: "Signal Kit",
    status: "Prototype",
    type: "Workflow",
    audience: "solo builders",
    description:
      "A small system for turning scattered notes, tasks, and decisions into one usable operating view before the work starts leaking context.",
    links: ["Source planned", "Docs planned"],
  },
  {
    name: "Briefcase",
    status: "In progress",
    type: "CLI",
    audience: "students and operators",
    description:
      "A command-line utility for collecting project fragments into a clean folder structure with notes, next actions, and reference files in predictable places.",
    links: ["Source planned"],
  },
  {
    name: "Friction Map",
    status: "Planned",
    type: "Template",
    audience: "teams",
    description:
      "A lightweight worksheet for finding the parts of a process that slow people down, hide ownership, or make simple work feel heavier than it should.",
    links: ["Preview planned"],
  },
];

const buildNotes = [
  "Tools here start as fixes for real friction, then get cleaned up enough for other people to use.",
  "Small is preferred. A useful script beats a beautiful platform that nobody has time to maintain.",
  "Everything open source will include enough context to understand why it exists, not just how to run it.",
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-brand/60 text-sm tracking-widest uppercase">
      {children}
    </p>
  );
}

export function Lab() {
  const featuredTool = tools[0];

  return (
    <main className="min-h-screen text-foreground px-6 py-28 sm:px-8 sm:py-32 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeIn" }}
        className="mx-auto flex w-full max-w-5xl flex-col gap-24"
      >
        <section className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="space-y-7"
          >
            <SectionLabel>Lab</SectionLabel>

            <h1 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight">
              Small tools for messy work.
            </h1>

            <div className="h-px bg-foreground/10 w-28" />

            <div className="space-y-5 text-lg md:text-xl leading-loose text-foreground/65">
              <p>
                Open source utilities, experiments, and workflow pieces built
                to reduce friction.
              </p>
              <p className="text-foreground/90">
                Some are usable. Some are still forming. Everything here exists
                because it solved a real problem first.
              </p>
            </div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeIn" }}
          className="grid gap-10 border-t border-foreground/10 pt-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="space-y-5">
            <SectionLabel>01 / Featured</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              The most useful thing here right now.
            </h2>
          </div>

          <article className="space-y-7 border-l border-brand/40 pl-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.24em] text-foreground/35">
                <span>Status: {featuredTool.status}</span>
                <span className="hidden h-px w-6 bg-foreground/15 sm:block" />
                <span>Type: {featuredTool.type}</span>
                <span className="hidden h-px w-6 bg-foreground/15 sm:block" />
                <span>For: {featuredTool.audience}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-wide">
                {featuredTool.name}
              </h3>
            </div>

            <p className="text-lg leading-loose text-foreground/70">
              {featuredTool.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {featuredTool.links.map((link) => (
                <span
                  key={link}
                  className="border border-brand/30 px-4 py-2 font-display text-sm tracking-wide text-brand/85"
                >
                  {link}
                </span>
              ))}
            </div>
          </article>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="space-y-10 border-t border-foreground/10 pt-12"
        >
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-5">
              <SectionLabel>02 / Tools</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
                A quiet catalog of open source work.
              </h2>
            </div>

            <p className="text-lg leading-loose text-foreground/65">
              Ordered by usefulness, not recency. Each entry should make it
              clear what the tool does, who it helps, and whether it is ready
              for real use.
            </p>
          </div>

          <div className="divide-y divide-foreground/10">
            {tools.map((tool, index) => (
              <article
                key={tool.name}
                className="grid gap-6 py-9 lg:grid-cols-[0.15fr_0.35fr_1fr]"
              >
                <div className="font-display text-brand/50">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-wide">
                    {tool.name}
                  </h3>
                  <div className="space-y-1 text-sm uppercase tracking-[0.2em] text-foreground/35">
                    <p>{tool.status}</p>
                    <p>{tool.type}</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <p className="text-lg leading-loose text-foreground/68">
                    {tool.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/45">
                    <span>For: {tool.audience}</span>
                    {tool.links.map((link) => (
                      <span key={link} className="text-brand/60">
                        {link}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="grid gap-10 border-t border-foreground/10 pt-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="space-y-5">
            <SectionLabel>03 / Notes</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              Notes from the build.
            </h2>
          </div>

          <div className="grid gap-5">
            {buildNotes.map((note) => (
              <p
                key={note}
                className="border-b border-foreground/10 pb-5 text-xl leading-relaxed text-foreground/80"
              >
                {note}
              </p>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
