import { motion } from "motion/react";

const screenshots = [
  {
    title: "Guided dashboard on day one",
    caption: "A new PMC gets structure immediately instead of staring at a blank board and guessing what should exist.",
    src: "https://raw.githubusercontent.com/hypnoticdata777/pm-ops-map/master/docs/screenshots/02-dashboard.png",
  },
  {
    title: "Every task, owned and tracked",
    caption: "260+ editable PM tasks across 17 departments, with ownership, priority, and status visible.",
    src: "https://raw.githubusercontent.com/hypnoticdata777/pm-ops-map/master/docs/screenshots/03-tracking-tasks.png",
  },
  {
    title: "Workload and team assignment",
    caption: "Role templates, auto-assign, and workload balancing help stop the sharpest teammate from silently carrying everything.",
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
    caption: "A synthetic public-demo surface that shows the concept without exposing real owner or maintenance records.",
    src: "https://raw.githubusercontent.com/hypnoticdata777/m3ldSync/main/docs/portfolio/meldsync-portfolio-hero.png",
  },
  {
    title: "Follow-up signal",
    caption: "Import comparison highlights what changed, what aged, and what needs attention next.",
    src: "https://raw.githubusercontent.com/hypnoticdata777/m3ldSync/main/docs/portfolio/meldsync-portfolio-follow-up-signal.png",
  },
  {
    title: "Sticky manual truth",
    caption: "Manual corrections survive future imports instead of getting buried by the next CSV.",
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
  "The backend foundation is already organized around organizations, work orders, assignments, technicians, files, billing, and metrics.",
  "The mobile direction is clear: technicians need a field calendar, live job queue, updates, and proof collection without extra chasing.",
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
  "Launch-oriented SaaS POC candidate",
  "Homeowner-first maintenance workspace",
  "Owner, vendor, and collaborator portals",
  "Proof packets, vault docs, reminders, and billing records",
  "Automated verification and route smoke scripts in place",
];

const turnFlowFeatures = [
  "Homeowner signup, login, and first-run setup guidance",
  "Multiple property records with care signals and dashboard filters",
  "Guided maintenance intake with urgency, safety, access, and photo context",
  "Owner request-detail rail for scope, cost, bids, help, proof, closeout, billing, and history",
  "Scoped vendor and collaborator invite flows with pending access management",
  "Vendor profiles, assigned-job queues, bid submission, and lifecycle tracking",
  "Quote comparison with approve, decline, attachments, price cues, and decision history",
  "Structured task checklists with expected proof types, costs, status, and owner acceptance",
  "Completion gating for final cost, after-photo proof, assigned vendor, or explicit waiver",
  "Work-session timeline, vendor closeout packets, owner approval, and change requests",
  "Property vault, recurring maintenance calendar, reminder signals, and .ics export",
  "PDF proof packets, property history rollups, CSV export, and JSON backup/restore",
];

const turnFlowCurrentBuild = [
  "Next.js 16 App Router, TypeScript, Tailwind CSS v4, and Server Actions",
  "Neon serverless Postgres with Drizzle ORM",
  "Auth.js / NextAuth v5 credentials auth with JWT sessions",
  "Server-side role and ownership checks for owner, vendor, and collaborator access",
  "Vercel Blob for photos, quote attachments, and vault documents",
  "Resend email notifications with log-only fallback and delivery-health guidance",
  "Vercel Cron reminder digests plus public and protected health endpoints",
  "Vitest unit coverage, Playwright smoke scripts, and poc:ready / verify checks",
];

const turnFlowNextSteps = [
  "Configure the real preview or production environment",
  "Run poc:ready and verify against the hosted environment",
  "Seed public-safe demo data",
  "Run owner and helper smoke tests against the hosted URL",
  "Refresh signed-in screenshots for the README, portfolio, and case study",
  "Run a homeowner user-testing pass and log findings",
  "Verify Resend deliverability, sender domain setup, and reminder cron behavior",
  "Decide later layers for billing model, subscriptions, payments, analytics, and observability",
];

const turnFlowLinks = [
  {
    label: "Source",
    href: "https://github.com/hypnoticdata777/turnflow-mvp",
  },
  {
    label: "Docs",
    href: "https://github.com/hypnoticdata777/turnflow-mvp#documentation",
  },
  {
    label: "Readiness",
    href: "https://github.com/hypnoticdata777/turnflow-mvp#current-poc-readiness",
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
              records, and operations documentation on day one without signup,
              backend setup, or monthly software cost.
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
              Most PM software assumes the company already has the volume,
              process, and budget to justify another platform. PM Ops Map
              starts earlier. It answers the question a new owner or ops
              manager is really asking: what am I supposed to be tracking in
              the first place?
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
                frictionless. No login. No monthly fee. No blank-board panic.
                The tool gives you a serious starting point and lets you edit
                it into your own operation.
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
              starting point before they hire expensive consultants or commit
              to heavier software.
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
              need attention first before the team wastes another hour hunting
              through rows.
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
              turns them into working memory: changes, conflicts, stale
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
                The important design choice is privacy. Portfolio visitors see
                synthetic data and locked public views, while real owner
                workflows stay local-only until backend auth and protected
                storage are ready.
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
              reconciliation, conflict visibility, local persistence, synthetic
              demo boundaries, and screenshot-ready portfolio proof.
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
              completion proof instead of running the day through constant
              follow-up.
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
              same work to move from request to assignment to completion
              without the manager manually chasing every update.
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
                technician fits the job, how workload should be balanced, and
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
              production polish before it carries a live operation.
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
              TurnFlow Home: maintenance history for homeowners who want the proof.
            </h2>
            <p className="max-w-3xl text-lg md:text-xl leading-loose text-foreground/70">
              A homeowner-first maintenance workspace for people who want to
              manage repairs, proof, costs, documents, reminders, and scoped
              help without handing the whole process to a property management
              company. Each property gets one shared record for what broke, who
              was invited, what was quoted, what changed, what proof came back,
              and what needs attention next.
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
                Signed-in screenshots need refresh
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
              Repairs are easier to manage when the history stays in one place.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-loose text-foreground/70">
            <p>
              When you manage repairs yourself, the hard part is not only
              getting the work done. It is keeping the story straight. Photos
              live in texts. Quotes sit in email threads. Receipts disappear
              into camera rolls. Updates come from different people at
              different times.
            </p>
            <p>
              Later, when the same issue comes back, the details matter: who
              fixed it, what it cost, what was approved, what proof came back,
              and whether the repair actually solved the problem. TurnFlow Home
              gives that history a home record without forcing the owner into
              heavy property management software or a full PMC workflow.
            </p>
            <p className="text-foreground/90">
              The product direction is intentionally focused: calmer ownership,
              clearer coordination, exportable maintenance history, and better
              recurring care before a small issue becomes a bigger repair.
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
              One shared repair record from issue to proof.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="space-y-6 text-lg leading-loose text-foreground/70">
              <p>
                With TurnFlow Home, an owner can create a property, log a
                maintenance issue, collect safety and access details, attach
                photos, invite a vendor or trusted helper, compare quotes,
                track status changes, and close the request with final cost,
                proof, billing context, and exportable history.
              </p>
              <p className="text-foreground/90">
                The product is intentionally focused. It is not trying to run a
                maintenance company, and it is not dispatch software. It is the
                homeowner-facing system of record for people who want
                confidence, documentation, and continuity when repairs happen.
              </p>
              <p>
                Owners can manage multiple properties, use care signals and
                setup guidance, approve or decline bids, record costs, keep a
                document vault, schedule recurring maintenance, and download
                proof packets. Vendors and collaborators get scoped portals
                that show only the work shared with them.
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
            <SectionLabel>Current Build</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              Rebuilt from a Firebase MVP into a full-stack SaaS-style POC.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="space-y-6 text-lg leading-loose text-foreground/70">
              <p>
                The first version used Firebase Authentication, Firestore,
                Firebase Storage, and Firestore security rules. That MVP proved
                the workflow: role-based views, technician photo proof,
                itemized estimates, client-facing approval status, and JSON
                backup and restore.
              </p>
              <p className="text-foreground/90">
                The current version moves the project closer to a real SaaS
                foundation: Next.js, relational data, server-side authorization,
                Blob-backed uploads, notification logging, reminder digests,
                smoke scripts, health checks, and readiness verification before
                the hosted POC invites external users.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {turnFlowCurrentBuild.map((item) => (
                <p
                  key={item}
                  className="border-b border-foreground/10 pb-4 text-lg leading-relaxed text-foreground/75"
                >
                  {item}
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
              The product should feel lighter than property management
              software.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-loose text-foreground/70">
            <p>
              TurnFlow Home is strongest when it stays focused on homeowner
              confidence: what happened, what it cost, who was involved, what
              proof came back, what decision was made, and what record should
              be kept afterward.
            </p>
            <p>
              That keeps it distinct from a PMC operations platform. PMCs need
              dispatch, routing, technician workload, internal reporting,
              vendor management, and company controls. This tool stays calmer:
              trusted repair history, scoped help, clear coordination, and less
              risk of losing the thread.
            </p>
            <p>
              The next product phase is about turning the POC into a
              public-safe SaaS demo: a real hosted environment, seeded demo
              data, signed-in screenshots, owner/helper smoke tests,
              homeowner-user feedback, verified notifications, and eventually
              the business layers around billing, subscriptions, payments,
              analytics, and observability.
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
            <SectionLabel>Next Up</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              What has to happen before the public demo.
            </h2>
          </div>

          <div className="grid gap-5">
            {turnFlowNextSteps.map((step) => (
              <p
                key={step}
                className="border-b border-foreground/10 pb-5 text-lg leading-loose text-foreground/72"
              >
                {step}
              </p>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
