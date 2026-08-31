import { motion } from "motion/react";
import { RelatedLinks } from "../components/RelatedLinks";
import { Seo } from "../components/Seo";

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
];

const buildNotes = [
  "The loop is simple: Journal captures the thought, Lab tests whether the idea still stands, and Work holds the tools that are strong enough to present as case studies.",
  "Lab is allowed to be messy, but it should still be honest: status, audience, missing pieces, and why the experiment deserves another pass.",
  "Some experiments will graduate to Work, some may become paid products, and some will stay here because the idea was useful even if the build is not ready.",
];

const labPathways = [
  {
    label: "Journal",
    title: "The Silent Killer of Property Management Operations",
    href: "/journal/the-silent-killer-of-property-management-operations",
  },
  {
    label: "Work",
    title: "PM Ops Map: the day-one operating map",
    href: "/work/pm-ops-map",
  },
  {
    label: "Work",
    title: "TechSync Ops and TurnFlow Home after Lab",
    href: "/work",
  },
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
      <Seo
        title="Lab | h777 Property Management Tool Experiments"
        description="The h777 lab tracks property management experiments, early PropTech ideas, m3ldSync, VendorRadar, and tools being tested before they become case studies."
        path="/lab"
      />
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
              Where ideas get tested before they earn Work.
            </h1>

            <div className="h-px bg-foreground/10 w-28" />

            <div className="space-y-5 text-lg md:text-xl leading-loose text-foreground/65">
              <p>
                This is where journal thoughts, PM friction, product hunches,
                and half-built tools get stress-tested against reality.
              </p>
              <p className="text-foreground/90">
                Not everything here needs to ship. The point is to capture the
                experiment, test whether it still stands, and decide whether it
                belongs in Work later.
              </p>
            </div>
          </motion.div>
        </section>

        <RelatedLinks
          eyebrow="The loop"
          title="Start with the idea, test the tool, then show the proof"
          links={labPathways}
        />

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeIn" }}
          className="grid gap-10 border-t border-foreground/10 pt-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="space-y-5">
            <SectionLabel>01 / Active Test</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              The current experiment with the clearest shape.
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
                The testing shelf, honestly labeled.
              </h2>
            </div>

            <p className="text-lg leading-loose text-foreground/65">
              Journal feeds Lab. Lab tests the useful pieces. Work is where
              PM Ops Map, TechSync Ops, and TurnFlow Home live because they
              have enough shape to stand as case studies.
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
