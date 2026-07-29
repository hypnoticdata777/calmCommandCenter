import { motion } from "motion/react";

// PROJECT COMMAND STRUCTURE - Lab
// 1. Why: Shows tools, experiments, and workflow ideas without pretending all are shipped.
// 2. Who: Builders, operators, students, and visitors looking for useful systems.
// 3. Main modules: tools catalog, featured tool, build notes, SectionLabel helper.
// 4. Screens: "/lab".
// 5. Data stored: Static arrays for tool cards and build notes.
// 6. State tracked: featuredTool is derived from tools[0]; no user data is stored.
// 7. User actions: Read status labels and understand what is prototype/planned.
// 8. Rules: Planned links must stay non-clickable until real sources/docs exist.
// 9. Outside tools: Motion for entrance and scroll-in animation.
// 10. Smallest version: One honest tool entry with status, audience, and purpose.

const tools = [
  {
    name: "PM Ops Map",
    status: "Built / Open source",
    type: "Browser app",
    audience: "New PMCs, owners, and ops managers",
    description:
      "A free day-one operations map for property management companies. It gives new teams 260+ editable PM tasks across 17 departments, team assignment, workload balancing, maintenance work orders, portfolio tracking, handbook exports, backups, and optional self-hosted team sync.",
    links: [
      {
        label: "Source",
        href: "https://github.com/hypnoticdata777/pm-ops-map",
      },
      {
        label: "Download",
        href: "https://github.com/hypnoticdata777/pm-ops-map/releases/latest",
      },
      {
        label: "Screenshots",
        href: "https://github.com/hypnoticdata777/pm-ops-map/tree/master/docs/screenshots",
      },
      {
        label: "Demo coming soon",
      },
    ],
  },
  {
    name: "m3ldSync",
    status: "Local POC / Public demo packaged",
    type: "CSV reconciliation tool",
    audience: "Maintenance managers and busy PM operators",
    description:
      "A local browser proof-of-concept that turns repeated maintenance CSV exports into operational memory. It compares imports, spots new, changed, stale, and manually corrected records, then turns the noise into a Kanban triage view with property-level attention signals.",
    links: [
      {
        label: "Source",
        href: "https://github.com/hypnoticdata777/m3ldSync",
      },
      {
        label: "Portfolio assets",
        href: "https://github.com/hypnoticdata777/m3ldSync/tree/main/docs/portfolio",
      },
      {
        label: "Demo coming soon",
      },
    ],
  },
  {
    name: "VendorRadar",
    status: "POC / In design",
    type: "Vendor intelligence",
    audience: "PMCs and owners",
    description:
      "A vendor memory layer for teams tired of managing contractors through screenshots, old texts, Facebook posts, Google searches, and pure hope. The smallest useful version captures vendor leads, tags trade and location, tracks quote requests, scores reliability, and remembers who actually worked out.",
    links: [{ label: "POC roadmap" }, { label: "Prototype notes" }],
  },
  {
    name: "TechSync",
    status: "SaaS POC / Backend + mobile foundation",
    type: "Field service SaaS",
    audience: "PMCs, field teams, technicians, and homeowners",
    description:
      "A multi-tenant field-service SaaS POC for ingesting maintenance work orders, assigning them to the best-fit technician by priority, skills, proximity, and workload, and tracking field progress through mobile technician workflows.",
    links: [
      {
        label: "Source",
        href: "https://github.com/hypnoticdata777/Techsync",
      },
      {
        label: "Docs",
        href: "https://github.com/hypnoticdata777/Techsync#spec-coverage",
      },
      {
        label: "Demo coming soon",
      },
    ],
  },
];

const buildNotes = [
  "Some tools will stay free and open-source. Some may become small paid products if they prove useful enough.",
  "Nothing here is pretending to be finished before it survives real use.",
  "The test is simple: if it does not make property management clearer, it does not belong here.",
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
              Tools for property management problems that keep coming back.
            </h1>

            <div className="h-px bg-foreground/10 w-28" />

            <div className="space-y-5 text-lg md:text-xl leading-loose text-foreground/65">
              <p>
                This is where I turn PM operations pain into small tools,
                proof-of-concepts, and open-source systems.
              </p>
              <p className="text-foreground/90">
                Some are built. Some are prototypes. Some are still
                suspiciously ambitious. The rule is simple: if it does not make
                the work clearer, it does not belong here.
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
            <SectionLabel>01 / Built</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              The free ops foundation.
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
              {featuredTool.links.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-brand/30 px-4 py-2 font-display text-sm tracking-wide text-brand/85 transition-colors hover:bg-brand/10"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span
                    key={link.label}
                    className="border border-foreground/15 px-4 py-2 font-display text-sm tracking-wide text-foreground/45"
                  >
                    {link.label}
                  </span>
                )
              )}
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
                A small product shelf, honestly labeled.
              </h2>
            </div>

            <p className="text-lg leading-loose text-foreground/65">
              Ordered by maturity, not hype. Each entry says what it solves,
              who it helps, and whether it is built, in proof-of-concept, or
              still being shaped.
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
                    {tool.links.map((link) =>
                      link.href ? (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-brand/70 transition-colors hover:text-brand"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <span key={link.label} className="text-foreground/38">
                          {link.label}
                        </span>
                      )
                    )}
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
