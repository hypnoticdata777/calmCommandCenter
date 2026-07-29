import { motion } from "motion/react";

const screenshots = [
  {
    title: "Guided dashboard on day one",
    caption: "A new PMC can start with a guided command center instead of a blank project board.",
    src: "https://raw.githubusercontent.com/hypnoticdata777/pm-ops-map/master/docs/screenshots/02-dashboard.png",
  },
  {
    title: "Every task, owned and tracked",
    caption: "260+ editable PM tasks across 17 departments, with ownership and status visible.",
    src: "https://raw.githubusercontent.com/hypnoticdata777/pm-ops-map/master/docs/screenshots/03-tracking-tasks.png",
  },
  {
    title: "Workload and team assignment",
    caption: "Role templates, auto-assign, and workload balancing keep responsibility from hiding.",
    src: "https://raw.githubusercontent.com/hypnoticdata777/pm-ops-map/master/docs/screenshots/05-team-manager.png",
  },
];

const facts = [
  "260+ editable PM tasks",
  "17 departments",
  "No login or backend required",
  "localStorage by default",
  "Optional self-hosted Team Sync",
];

const features = [
  "Guided launch dashboard for new companies",
  "Task tracking across departments, owners, status, priority, and due dates",
  "Team assignment engine with workload balancing and role templates",
  "Maintenance work order pipeline from intake to completion",
  "Property, tenant, and vendor registry with lease and rent tracking",
  "Exportable operations handbook in Markdown and printable HTML",
  "Auto-backups, CSV import/export, and optional team sync",
];

const links = [
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
];

const meldSyncScreenshots = [
  {
    title: "Portfolio handoff hero",
    caption: "A synthetic public-demo surface built for safe portfolio review.",
    src: "https://raw.githubusercontent.com/hypnoticdata777/m3ldSync/main/docs/portfolio/meldsync-portfolio-hero.png",
  },
  {
    title: "Follow-up signal",
    caption: "Import comparison highlights what changed and what needs attention next.",
    src: "https://raw.githubusercontent.com/hypnoticdata777/m3ldSync/main/docs/portfolio/meldsync-portfolio-follow-up-signal.png",
  },
  {
    title: "Sticky manual truth",
    caption: "Manual corrections survive future imports instead of getting buried by fresh CSV data.",
    src: "https://raw.githubusercontent.com/hypnoticdata777/m3ldSync/main/docs/portfolio/meldsync-portfolio-sticky-manual.png",
  },
];

const meldSyncFacts = [
  "Local browser POC",
  "Synthetic public demo mode",
  "Strict CSV validation",
  "Kanban triage",
  "Private owner mode deferred",
];

const meldSyncFeatures = [
  "Reconciles repeated maintenance CSV exports",
  "Detects new, changed, stale, and missing records",
  "Keeps sticky manual status overrides visible",
  "Shows manual/import conflicts before committing an import",
  "Groups effective status into a Kanban triage board",
  "Adds property-level attention and aging risk panels",
  "Separates public synthetic demo mode from private owner tools",
];

const meldSyncLinks = [
  {
    label: "Source",
    href: "https://github.com/hypnoticdata777/m3ldSync",
  },
  {
    label: "Portfolio assets",
    href: "https://github.com/hypnoticdata777/m3ldSync/tree/main/docs/portfolio",
  },
  {
    label: "Docs",
    href: "https://github.com/hypnoticdata777/m3ldSync#documentation",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-brand/60 text-sm tracking-widest uppercase">
      {children}
    </p>
  );
}

export function Work() {
  return (
    <main className="min-h-screen text-foreground px-6 py-28 sm:px-8 sm:py-32 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeIn" }}
        className="mx-auto flex w-full max-w-6xl flex-col gap-24"
      >
        <section className="max-w-4xl space-y-9">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="space-y-8"
          >
            <SectionLabel>Work / Case Study 01</SectionLabel>

            <h1 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight">
              PM Ops Map: a day-one operating system for new property
              management companies.
            </h1>

            <div className="h-px bg-foreground/10 w-28" />

            <p className="max-w-3xl text-lg md:text-xl leading-loose text-foreground/70">
              A free, open-source browser app that helps new PMCs set up
              departments, tasks, ownership, maintenance tracking, portfolio
              records, and operations documentation without signup, backend
              setup, or monthly software cost.
            </p>

            <div className="flex flex-wrap gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-brand/30 px-4 py-2 font-display text-sm tracking-wide text-brand/85 transition-colors hover:bg-brand/10"
                >
                  {link.label}
                </a>
              ))}
              <span className="border border-foreground/15 px-4 py-2 font-display text-sm tracking-wide text-foreground/45">
                Demo coming soon
              </span>
            </div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeIn" }}
          className="grid gap-8 border-t border-foreground/10 pt-12 md:grid-cols-5"
        >
          {facts.map((fact) => (
            <div key={fact} className="border-l border-brand/35 pl-4">
              <p className="text-lg leading-relaxed text-foreground/80">
                {fact}
              </p>
            </div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="space-y-5">
            <SectionLabel>Problem</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              New PMCs do not always know what needs to exist yet.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-loose text-foreground/70">
            <p>
              A beginning property management company has to track departments,
              recurring tasks, ownership, handoffs, maintenance intake,
              vendors, tenant records, lease dates, delinquency, SOPs, and
              follow-up before the operation has fully matured.
            </p>
            <p>
              Most PM software assumes the company already has enough process,
              volume, and budget to justify the platform. PM Ops Map starts
              earlier. It gives owners and ops managers a practical operating
              structure before work starts falling through the cracks.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="space-y-5">
            <SectionLabel>Solution</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              A guided workspace instead of an empty board.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="space-y-6 text-lg leading-loose text-foreground/70">
              <p>
                PM Ops Map opens with a structured operating map: 260+ standard
                PM tasks across 17 departments, all editable to fit the company.
                Teams can assign owners, balance workload, track work orders,
                manage portfolio records, export handbooks, and keep backups
                without sending data to a server by default.
              </p>
              <p className="text-foreground/90">
                The product decision was simple: make the first useful version
                frictionless. No login. No monthly fee. No guessing what basic
                operations should be tracked.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <p
                  key={feature}
                  className="border-b border-foreground/10 pb-4 text-lg leading-relaxed text-foreground/75"
                >
                  {feature}
                </p>
              ))}
            </div>
          </div>
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
              <SectionLabel>Screenshots</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
                Proof from the build.
              </h2>
            </div>

            <p className="text-lg leading-loose text-foreground/65">
              The first public case study now has actual product receipts:
              dashboard, task tracking, and team assignment views from the
              open-source repo.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {screenshots.map((screenshot) => (
              <figure key={screenshot.title} className="space-y-4">
                <div className="overflow-hidden border border-foreground/10 bg-background/40">
                  <img
                    src={screenshot.src}
                    alt={screenshot.title}
                    className="aspect-[16/11] w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <figcaption className="space-y-2">
                  <h3 className="text-xl font-bold tracking-wide">
                    {screenshot.title}
                  </h3>
                  <p className="leading-relaxed text-foreground/55">
                    {screenshot.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="space-y-5">
            <SectionLabel>Builder Notes</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              Built from real PM operations pain.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-loose text-foreground/70">
            <p>
              After 7+ years inside property management operations, I kept
              seeing the same pattern: work goes missing when ownership is
              unclear, and the sharpest teammate often ends up carrying too
              much invisible work.
            </p>
            <p>
              PM Ops Map is my answer to that early-stage gap. It gives new
              owners, ops managers, coordinators, and PM teams a free guided
              starting point before they are ready for heavier software.
            </p>
            <p className="text-foreground/90">
              Next up: stronger maintenance tracking, deeper vendor and work
              order tools, owner-ready reports, import presets, and better Team
              Sync conflict handling.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="space-y-12 border-t border-foreground/10 pt-16"
        >
          <div className="max-w-4xl space-y-8">
            <SectionLabel>Work / Case Study 02</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight">
              m3ldSync: turning maintenance export noise into action.
            </h2>
            <p className="max-w-3xl text-lg md:text-xl leading-loose text-foreground/70">
              A local browser proof-of-concept that turns repeated maintenance
              CSV exports into operational memory: what is new, what changed,
              what disappeared, what needs verification, and which properties
              need attention first.
            </p>

            <div className="flex flex-wrap gap-3">
              {meldSyncLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-brand/30 px-4 py-2 font-display text-sm tracking-wide text-brand/85 transition-colors hover:bg-brand/10"
                >
                  {link.label}
                </a>
              ))}
              <span className="border border-foreground/15 px-4 py-2 font-display text-sm tracking-wide text-foreground/45">
                Hosted demo coming soon
              </span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            {meldSyncFacts.map((fact) => (
              <div key={fact} className="border-l border-brand/35 pl-4">
                <p className="text-lg leading-relaxed text-foreground/80">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="space-y-5">
            <SectionLabel>Problem</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              The export has the data. It does not always reveal the next move.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-loose text-foreground/70">
            <p>
              Busy maintenance and property management teams can end up
              hunting through filters, spreadsheets, tabs, statuses, and
              property-level searches just to understand which open work
              actually needs attention.
            </p>
            <p>
              m3ldSync attacks the noise layer. Instead of treating every CSV
              export as a disconnected report, it compares repeated exports and
              turns them into a working memory of changes, conflicts, stale
              records, follow-up signals, and property-level risk.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="space-y-5">
            <SectionLabel>Solution</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              A reconciliation layer for maintenance operations.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="space-y-6 text-lg leading-loose text-foreground/70">
              <p>
                The POC validates the CSV shape, previews import impact before
                commit, reconciles new and changed records, preserves manual
                corrections, exposes conflicts, and organizes the effective
                status into a Kanban triage board.
              </p>
              <p className="text-foreground/90">
                It also separates the public demo from private owner use:
                portfolio visitors see synthetic data and locked public views,
                while real owner workflows remain local-only until backend auth
                and protected storage are ready.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {meldSyncFeatures.map((feature) => (
                <p
                  key={feature}
                  className="border-b border-foreground/10 pb-4 text-lg leading-relaxed text-foreground/75"
                >
                  {feature}
                </p>
              ))}
            </div>
          </div>
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
              <SectionLabel>Screenshots</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
                Synthetic proof, public-safe by design.
              </h2>
            </div>

            <p className="text-lg leading-loose text-foreground/65">
              The public assets come from synthetic portfolio routes. Private
              imports, backups, owner controls, and real records stay out of
              the portfolio surface.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {meldSyncScreenshots.map((screenshot) => (
              <figure key={screenshot.title} className="space-y-4">
                <div className="overflow-hidden border border-foreground/10 bg-background/40">
                  <img
                    src={screenshot.src}
                    alt={screenshot.title}
                    className="aspect-[16/11] w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <figcaption className="space-y-2">
                  <h3 className="text-xl font-bold tracking-wide">
                    {screenshot.title}
                  </h3>
                  <p className="leading-relaxed text-foreground/55">
                    {screenshot.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="space-y-5">
            <SectionLabel>Builder Notes</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              Built for the manager who needs signal fast.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-loose text-foreground/70">
            <p>
              The core product instinct is simple: managers do not always need
              more filters. They need a smaller set of trusted signals that
              show what changed, what stayed open too long, and where a human
              correction should not be overwritten by the next import.
            </p>
            <p>
              m3ldSync is still a POC, but the hard parts already have shape:
              reconciliation, conflict visibility, local persistence,
              synthetic public demo boundaries, and screenshot-ready portfolio
              proof.
            </p>
            <p className="text-foreground/90">
              Next up: hosted public demo wiring, production authentication for
              owner mode, protected storage, and stronger reporting around
              aging, follow-up, and portfolio-level priorities.
            </p>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
