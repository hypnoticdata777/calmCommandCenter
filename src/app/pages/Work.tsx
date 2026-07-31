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

const techSyncFacts = [
  "Multi-tenant SaaS POC",
  "React Native mobile app",
  "FastAPI backend",
  "Postgres tenant isolation",
  "70 backend tests",
];

const techSyncFeatures = [
  "Work-order ingestion from CSV and webhook-style sources",
  "Assignment logic based on priority, technician fit, proximity, and workload",
  "Tenant-scoped organizations, roles, invitations, and onboarding",
  "Technician mobile queue with status movement from assignment to completion",
  "Attachment endpoints for before photos, completion proof, receipts, and field records",
  "Dashboard metrics, billing endpoints, and admin-ready backend boundaries",
  "Postgres row-level security backstop plus repository isolation tests",
];

const techSyncProofPoints = [
  "Backend API foundation is already organized around organizations, work orders, assignments, technicians, files, billing, and metrics.",
  "The mobile direction is clear: technicians need a day/week/month field calendar, live job queue, updates, and proof collection.",
  "The repo documents deferred production work openly: web admin, offline sync, PDF/email ingestion, mobile dependency audit, monitoring, and hosted staging.",
];

const techSyncLinks = [
  {
    label: "Source",
    href: "https://github.com/hypnoticdata777/Techsync",
  },
  {
    label: "Docs",
    href: "https://github.com/hypnoticdata777/Techsync#spec-coverage",
  },
  {
    label: "Requirements",
    href: "https://github.com/hypnoticdata777/Techsync/blob/main/Techsync_SaaS_Requirements.md",
  },
];

const turnFlowFacts = [
  "Firebase-backed MVP",
  "Role-based PM, tech, and client views",
  "Technician photo proof",
  "Itemized turnover estimates",
  "Firestore security rules",
];

const turnFlowFeatures = [
  "Project lifecycle from Pending Approval to Approved to Sent",
  "Itemized labor, rate, materials, and task-level estimate tracking",
  "Technician before, after, and receipt photo uploads per task",
  "Read-only client approval/status view",
  "Contacts stored in Firestore for owner/client records",
  "Chart.js stats for completed vs pending tasks and cost by property",
  "Backup and restore through dated JSON exports",
];

const turnFlowLinks = [
  {
    label: "Source",
    href: "https://github.com/hypnoticdata777/turnflow-mvp",
  },
  {
    label: "Docs",
    href: "https://github.com/hypnoticdata777/turnflow-mvp/blob/main/docs/WORKBOOK.md",
  },
  {
    label: "Requirements",
    href: "https://github.com/hypnoticdata777/turnflow-mvp/blob/main/docs/REQUIREMENTS.md",
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
        <section className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="space-y-7"
          >
            <SectionLabel>Work</SectionLabel>

            <h1 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight">
              Products that prove operations do not have to stay chaotic.
            </h1>

            <div className="h-px bg-foreground/10 w-28" />

            <p className="max-w-3xl text-lg md:text-xl leading-loose text-foreground/70">
              Here you will find the tools I am building and shaping. Some are
              early, some are usable now, and each one starts from the same
              belief: property management work should be easier to see,
              explain, assign, and improve.
            </p>
          </motion.div>
        </section>

        <section className="max-w-4xl space-y-9">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="space-y-8"
          >
            <SectionLabel>Work / Case Study 01</SectionLabel>

            <h2 className="text-3xl md:text-5xl font-bold tracking-wide leading-tight">
              PM Ops Map: a day-one operating system for new property
              management companies.
            </h2>

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

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="space-y-12 border-t border-foreground/10 pt-16"
        >
          <div className="max-w-4xl space-y-8">
            <SectionLabel>Work / Case Study 03</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight">
              TechSync Ops: the PMC command layer for maintenance dispatch and
              proof.
            </h2>
            <p className="max-w-3xl text-lg md:text-xl leading-loose text-foreground/70">
              A multi-tenant SaaS POC for PMCs and field-service teams that
              need to ingest work orders, assign the right technician, keep
              client communication connected, and track progress through
              completion proof instead of constant follow-up.
            </p>

            <div className="flex flex-wrap gap-3">
              {techSyncLinks.map((link) => (
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
                Screenshots coming soon
              </span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            {techSyncFacts.map((fact) => (
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
              Field work breaks when dispatch has no shared operating memory.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-loose text-foreground/70">
            <p>
              Maintenance work orders arrive from scattered exports, calls,
              messages, portals, spreadsheets, and follow-up threads. The real
              cost is not just intake. It is figuring out what should go first,
              who should take it, what the technician actually did, and whether
              the proof made it back to the office.
            </p>
            <p>
              TechSync is aimed at that coordination layer: PMCs, field-service
              teams, technicians, vendors, and client-view users all need the
              same work to move from request to assignment to completion without
              the manager manually chasing every update.
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
              A SaaS foundation for dispatch, technician flow, and job proof.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="space-y-6 text-lg leading-loose text-foreground/70">
              <p>
                The POC validates the core platform shape: a FastAPI backend,
                multi-tenant organization model, Postgres-backed isolation,
                work-order ingestion, assignment logic, technician workflows,
                attachments, metrics, and billing-ready boundaries.
              </p>
              <p className="text-foreground/90">
                The product ambition is bigger than a dispatch board. The
                useful version should help a manager know what is urgent, which
                technician fits the job, how the route should be planned, and
                what proof came back from the field.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {techSyncFeatures.map((feature) => (
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
          className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="space-y-5">
            <SectionLabel>Technical Proof</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              Strong enough to show, still labeled as a POC.
            </h2>
          </div>

          <div className="grid gap-5">
            {techSyncProofPoints.map((point) => (
              <p
                key={point}
                className="border-b border-foreground/10 pb-5 text-lg leading-loose text-foreground/72"
              >
                {point}
              </p>
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
              Built around the follow-up problem.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-loose text-foreground/70">
            <p>
              The pain behind TechSync is familiar: a manager should not have
              to keep asking technicians for updates, photos, receipts,
              materials, and completion status just to know whether the work is
              moving.
            </p>
            <p>
              For the public portfolio, this belongs as an ambitious PMC SaaS
              POC: real architecture, meaningful tests, clear product
              direction, and honest boundaries around what still needs
              production polish.
            </p>
            <p className="text-foreground/90">
              Next up: portfolio-safe screenshots, hosted staging, admin web
              views, Expo and React Native dependency upgrades, offline sync,
              PDF/email ingestion, monitoring, and launch-ready security
              configuration.
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
            <SectionLabel>Work / Case Study 04</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight">
              TurnFlow Home: client-side maintenance approvals with proof built
              in.
            </h2>
            <p className="max-w-3xl text-lg md:text-xl leading-loose text-foreground/70">
              A Firebase-backed MVP for homeowners and owner clients who need a
              calmer way to review turnover work, understand itemized estimates,
              watch approval status, and keep technician photo proof in one
              shared maintenance record.
            </p>

            <div className="flex flex-wrap gap-3">
              {turnFlowLinks.map((link) => (
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
                Screenshots coming soon
              </span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            {turnFlowFacts.map((fact) => (
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
              Clients need confidence without being pulled into the whole
              operation.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-loose text-foreground/70">
            <p>
              Turnovers and repairs get hard for owners because approvals,
              estimates, contacts, technician photos, receipts, and final status
              often live in separate messages or spreadsheets. The client just
              wants to know what is being proposed, what it costs, what was
              approved, and what proof came back.
            </p>
            <p>
              TurnFlow Home keeps that workflow intentionally smaller than
              TechSync Ops. It is not trying to run the entire PMC maintenance
              department. It gives clients and homeowners a focused approval
              and maintenance-history layer.
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
              A client-facing record for approvals, tasks, and photo evidence.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="space-y-6 text-lg leading-loose text-foreground/70">
              <p>
                The MVP uses Firebase Authentication, Firestore, Firebase
                Storage, and role-based security rules so PM/admin users can
                create turnover projects, technicians can upload proof, and
                clients can safely view approval status without editing the
                operation.
              </p>
              <p className="text-foreground/90">
                The product direction is homeowner-friendly: fewer internal
                controls, more clarity around what needs approval, what work was
                completed, and what record should be kept after the job.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {turnFlowFeatures.map((feature) => (
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
          className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="space-y-5">
            <SectionLabel>Builder Notes</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              The client layer should feel simpler than the ops layer.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-loose text-foreground/70">
            <p>
              TurnFlow Home should stay focused on client and homeowner
              confidence: approval clarity, cost context, maintenance records,
              and proof. That keeps it distinct from TechSync Ops, which owns
              dispatch, routing, workload, technician management, and company
              reporting.
            </p>
            <p className="text-foreground/90">
              Next up: public-safe screenshots, a hosted demo environment,
              polished client approval screens, stronger owner-facing PDF
              exports, notification flows, and a tighter split between
              homeowner self-management and PMC-managed projects.
            </p>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
