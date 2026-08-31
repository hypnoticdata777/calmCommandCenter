import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

const screenshots = [
  {
    title: "Guided dashboard on day one",
    caption: "A new PMC gets structure immediately instead of staring at a blank board and guessing what should exist.",
    src: "/images/work/pm-ops-map/dashboard.png",
    alt: "PM Ops Map dashboard showing launch readiness, owned tasks, team roster, and open repairs.",
    width: 1280,
    height: 860,
  },
  {
    title: "Every task, owned and tracked",
    caption: "260+ editable PM tasks across 17 departments, with ownership, priority, and status visible.",
    src: "/images/work/pm-ops-map/tracking-tasks.png",
    alt: "PM Ops Map task tracking view with department tasks, status labels, and role ownership.",
    width: 900,
    height: 900,
  },
  {
    title: "Workload and team assignment",
    caption: "Role templates, auto-assign, and workload balancing help stop the sharpest teammate from silently carrying everything.",
    src: "/images/work/pm-ops-map/team-manager.png",
    alt: "PM Ops Map team manager view showing assignment and workload balancing controls.",
    width: 1280,
    height: 860,
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

const techSyncFacts = [
  "Public POC and product-maturity build",
  "Hosted Vercel web staging",
  "FastAPI API with Neon demo data",
  "Six role-aware work lanes",
  "Synthetic-data testing only",
];

const techSyncFeatures = [
  "Role-aware workspaces for org admin, coordinator, technician, client, viewer, and vendor users",
  "Work-order intake, assignment, status transitions, messages, approvals, proof, and closeout packages",
  "Multi-tenant auth, organization onboarding, invitations, roles, and tenant-scoped access",
  "Persistent Work Views rail, center queue/detail surface, and right-side Next Actions rail",
  "Lane-aware search for request ID, address, status, dates, proof, approvals, and role context",
  "Client and vendor visibility that stays scoped to linked work instead of internal operations",
  "Dashboard metrics, dispatch board, operations report, closeout exports, and CSV exports",
  "Synthetic seed/reset tooling plus documented hosted QA and evidence workflows",
];

const techSyncProofPoints = [
  "The staged loop is live: Vercel hosts the Expo / React Native web client, Vercel hosts the FastAPI API, and Neon carries synthetic demo data for walkthroughs.",
  "The repo has real product evidence behind it: backend pytest coverage, client Jest checks, GitHub Actions CI, Gitleaks config, seeded demo data, smoke helpers, and readiness documentation.",
  "The boundary is honest: billing, SMTP, object storage, customer onboarding, offline mobile sync, and app-store release are still deferred before real customer production.",
];

const techSyncLinks = [
  {
    label: "Source",
    href: "https://github.com/hypnoticdata777/Techsync",
  },
  {
    label: "Docs",
    href: "https://github.com/hypnoticdata777/Techsync#documentation-index",
  },
  {
    label: "Staging App",
    href: "https://techsync-ops-web.vercel.app",
  },
  {
    label: "API Docs",
    href: "https://techsync-ops-api-lyart.vercel.app/docs",
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
      <Seo
        title="Work | PM Ops Map, TechSync Ops, and TurnFlow Home"
        description="Case studies for PM Ops Map, TechSync Ops, and TurnFlow Home: property management tools for maintenance proof, operations clarity, and better handoffs."
        path="/work"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Work | PM Ops Map, TechSync Ops, and TurnFlow Home",
          description:
            "Case studies for property management tools focused on operations clarity, maintenance proof, and better handoffs.",
          url: "https://h777.dev/work",
          isPartOf: {
            "@type": "WebSite",
            name: "h777",
            url: "https://h777.dev",
          },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "PM Ops Map",
                url: "https://h777.dev/work/pm-ops-map",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "TechSync Ops",
                url: "https://h777.dev/work/techsync-ops",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "TurnFlow Home",
                url: "https://h777.dev/work/turnflow-home",
              },
            ],
          },
        }}
      />
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
              Here you will find the tools that have graduated from the lab
              into clearer case studies, stronger proof, or public-ready
              direction. The journal holds the thinking, the lab tests the
              idea, and Work is where the useful pieces stand on their own.
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
              <Link
                to="/work/pm-ops-map"
                className="border border-brand/30 px-4 py-2 font-display text-sm tracking-wide text-brand/85 transition-colors hover:bg-brand/10"
              >
                Read case study
              </Link>
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
                    alt={screenshot.alt}
                    width={screenshot.width}
                    height={screenshot.height}
                    className="aspect-[16/11] w-full object-cover object-top"
                    decoding="async"
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
              TechSync Ops: the PMC command layer for maintenance dispatch and
              proof.
            </h2>
            <p className="max-w-3xl text-lg md:text-xl leading-loose text-foreground/70">
              A multi-tenant maintenance command center for PMCs and
              field-service teams. TechSync Ops turns scattered maintenance
              requests into role-specific work queues, dispatch decisions,
              client and vendor updates, proof capture, closeout records, and
              operational reporting without pretending the staged demo is
              customer-production software yet.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/work/techsync-ops"
                className="border border-brand/30 px-4 py-2 font-display text-sm tracking-wide text-brand/85 transition-colors hover:bg-brand/10"
              >
                Read case study
              </Link>
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
                Role screenshot pass pending
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
              TechSync is aimed at the handoffs where maintenance operations
              usually break: unclear ownership, inconsistent proof, scoped
              client visibility, vendor context without tenant-data leakage,
              and managers rebuilding the story from messages, photos,
              spreadsheets, and memory.
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
                Expo / React Native web client, multi-tenant organization
                model, Neon/Postgres demo database, JWT auth, tenant-scoped
                repositories, work-order ingestion, role workspaces,
                assignments, messages, approvals, proof, closeout exports, and
                operations reporting.
              </p>
              <p className="text-foreground/90">
                The product ambition is bigger than a dispatch board. Each user
                gets a lane, each work order keeps its operating story, and the
                tenant boundary stays explicit so internal operations can move
                without overexposing client, vendor, or tenant context.
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
              POC with real architecture, hosted staging, meaningful tests,
              clear product direction, and honest boundaries around what still
              needs production polish before it carries a live operation.
            </p>
            <p className="text-foreground/90">
              Next up: finish the role walkthrough, screenshot evidence,
              small-width checks, accessibility notes, visual polish, staged
              demo evidence, and clear limitation labels before public
              promotion gets louder.
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
              <Link
                to="/work/turnflow-home"
                className="border border-brand/30 px-4 py-2 font-display text-sm tracking-wide text-brand/85 transition-colors hover:bg-brand/10"
              >
                Read case study
              </Link>
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
