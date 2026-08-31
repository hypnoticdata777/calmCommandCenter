export type CaseStudyLink = {
  label: string;
  href: string;
};

export type CaseStudyImage = {
  title: string;
  caption: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseStudySection = {
  label: string;
  heading: string;
  body: string[];
  items?: string[];
};

export type WorkCaseStudy = {
  label: string;
  slug: string;
  name: string;
  title: string;
  seoTitle: string;
  description: string;
  status: string;
  type: string;
  audience: string;
  dateModified: string;
  facts: string[];
  links: CaseStudyLink[];
  images?: CaseStudyImage[];
  sections: CaseStudySection[];
};

export const workCaseStudies: WorkCaseStudy[] = [
  {
    label: "Work / Case Study 01",
    slug: "pm-ops-map",
    name: "PM Ops Map",
    title:
      "PM Ops Map: a day-one operating system for new property management companies.",
    seoTitle: "PM Ops Map Case Study | Property Management Operations Setup",
    description:
      "A free, open-source browser app that helps new property management companies set up departments, tasks, ownership, maintenance tracking, and operations documentation on day one.",
    status: "Built / open source",
    type: "Browser app",
    audience: "New PMCs, owners, and operations managers",
    dateModified: "2026-08-30",
    facts: [
      "260+ editable PM tasks",
      "17 departments",
      "No login or backend required",
      "localStorage by default",
      "Optional self-hosted Team Sync",
    ],
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
    ],
    images: [
      {
        title: "Guided dashboard on day one",
        caption:
          "A new PMC gets structure immediately instead of staring at a blank board and guessing what should exist.",
        src: "/images/work/pm-ops-map/dashboard.png",
        alt: "PM Ops Map dashboard showing launch readiness, owned tasks, team roster, and open repairs.",
        width: 1280,
        height: 860,
      },
      {
        title: "Every task, owned and tracked",
        caption:
          "260+ editable PM tasks across 17 departments, with ownership, priority, and status visible.",
        src: "/images/work/pm-ops-map/tracking-tasks.png",
        alt: "PM Ops Map task tracking view with department tasks, status labels, and role ownership.",
        width: 900,
        height: 900,
      },
      {
        title: "Workload and team assignment",
        caption:
          "Role templates, auto-assign, and workload balancing help stop the sharpest teammate from silently carrying everything.",
        src: "/images/work/pm-ops-map/team-manager.png",
        alt: "PM Ops Map team manager view showing assignment and workload balancing controls.",
        width: 1280,
        height: 860,
      },
    ],
    sections: [
      {
        label: "Problem",
        heading: "New PMCs do not always know what needs to exist yet.",
        body: [
          "A beginning property management company has to track departments, recurring tasks, ownership, handoffs, maintenance intake, vendors, tenant records, lease dates, delinquency, SOPs, and follow-up before the operation has fully matured.",
          "Most PM software assumes the company already has the volume, process, and budget to justify another platform. PM Ops Map starts earlier. It answers the question a new owner or ops manager is really asking: what am I supposed to be tracking in the first place?",
        ],
      },
      {
        label: "Solution",
        heading: "A guided workspace instead of an empty board.",
        body: [
          "PM Ops Map opens with a structured operating map: 260+ standard PM tasks across 17 departments, all editable to fit the company. Teams can assign owners, balance workload, track work orders, manage portfolio records, export handbooks, and keep backups without sending data to a server by default.",
          "The product decision was simple: make the first useful version frictionless. No login. No monthly fee. No blank-board panic. The tool gives you a serious starting point and lets you edit it into your own operation.",
        ],
        items: [
          "Guided launch dashboard for new companies",
          "Task tracking across departments, owners, status, priority, and due dates",
          "Team assignment engine with workload balancing and role templates",
          "Maintenance work order pipeline from intake to completion",
          "Property, tenant, and vendor registry with lease and rent tracking",
          "Exportable operations handbook in Markdown and printable HTML",
          "Auto-backups, CSV import/export, and optional team sync",
        ],
      },
      {
        label: "Builder Notes",
        heading: "Built from real PM operations pain.",
        body: [
          "After 7+ years inside property management operations, I kept seeing the same pattern: work goes missing when ownership is unclear, and the sharpest teammate often ends up carrying too much invisible work.",
          "PM Ops Map is my answer to that early-stage gap. It gives new owners, ops managers, coordinators, and PM teams a free guided starting point before they hire expensive consultants or commit to heavier software.",
          "Next up: stronger maintenance tracking, deeper vendor and work order tools, owner-ready reports, import presets, and better Team Sync conflict handling.",
        ],
      },
    ],
  },
  {
    label: "Work / Case Study 02",
    slug: "techsync-ops",
    name: "TechSync Ops",
    title:
      "TechSync Ops: the PMC command center for maintenance handoffs.",
    seoTitle: "TechSync Ops Case Study | Maintenance Dispatch and Proof",
    description:
      "A staged multi-tenant maintenance command center for PMCs and field-service teams, focused on role lanes, dispatch, proof, closeout, and scoped visibility.",
    status: "Hosted staging / synthetic-data POC",
    type: "PMC maintenance command platform",
    audience: "PMCs, field-service teams, coordinators, technicians, clients, viewers, and vendors",
    dateModified: "2026-08-30",
    facts: [
      "Public POC and product-maturity build",
      "Hosted Vercel web and API staging",
      "FastAPI with Neon Postgres demo data",
      "Six role-aware work lanes",
      "Synthetic-data testing only",
    ],
    links: [
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
    ],
    images: [
      {
        title: "Admin workspace",
        caption:
          "Org admins get full tenant command: Work Views, search, work-order cards, risk signals, and Next Actions.",
        src: "/images/work/techsync-ops/admin-workspace.png",
        alt: "TechSync Ops admin workspace with Work Views, Search, work-order cards, and Next Actions.",
        width: 1600,
        height: 920,
      },
      {
        title: "Client portal",
        caption:
          "Clients see scoped request status, proof readiness, updates, and next steps without internal operations context.",
        src: "/images/work/techsync-ops/client-portal.png",
        alt: "TechSync Ops client portal with client-safe request cards and next steps.",
        width: 1600,
        height: 920,
      },
      {
        title: "Viewer snapshot",
        caption:
          "Read-only users can inspect linked status, risk, and proof without dispatch, edit, upload, or approval controls.",
        src: "/images/work/techsync-ops/viewer-snapshot.png",
        alt: "TechSync Ops viewer snapshot with read-only work visibility.",
        width: 1600,
        height: 920,
      },
      {
        title: "Vendor desk",
        caption:
          "Vendors see assigned jobs, proof state, blockers, and scope-focused actions without unrelated tenant or client data.",
        src: "/images/work/techsync-ops/vendor-desk.png",
        alt: "TechSync Ops vendor desk with assigned jobs, proof state, and scope-focused actions.",
        width: 1600,
        height: 920,
      },
    ],
    sections: [
      {
        label: "Problem",
        heading: "Maintenance breaks when every handoff lives in a different place.",
        body: [
          "Maintenance work orders arrive from scattered exports, calls, messages, portals, spreadsheets, and follow-up threads. The real cost is not just intake. It is figuring out who owns the next step, what changed, what the technician actually did, and whether the proof made it back to the office.",
          "TechSync is aimed at the handoffs where maintenance operations usually break: unclear ownership, inconsistent proof, clients needing visibility without internal notes, vendors needing enough context without unrelated tenant data, and managers rebuilding the story from messages, photos, spreadsheets, and memory.",
        ],
      },
      {
        label: "Solution",
        heading: "A role-lane workspace for dispatch, updates, proof, and closeout.",
        body: [
          "The POC validates the core platform shape: a FastAPI backend, Expo / React Native web client, multi-tenant organization model, Neon/Postgres demo database, JWT auth, tenant-scoped repositories, work-order ingestion, role workspaces, assignments, messages, approvals, proof, closeout exports, and operations reporting.",
          "The product direction is a calmer SaaS console: a left Work Views rail, a center queue or detail record, and a right Next Actions rail. Each user gets a lane, each work order keeps its operating story, and the tenant boundary stays explicit so internal operations can move without overexposing client, vendor, or tenant context.",
        ],
        items: [
          "Role-aware workspaces for org admin, coordinator, technician, client, viewer, and vendor users",
          "Work-order intake, assignment, status transitions, messages, approvals, proof, and closeout packages",
          "Multi-tenant auth, organization onboarding, invitations, roles, and tenant-scoped access",
          "Persistent Work Views rail, center queue/detail surface, and right-side Next Actions rail",
          "Lane-aware search for request ID, address, status, dates, proof, approvals, and role context",
          "Compact help bubbles that explain role guidance without turning the workspace into a wall of instructions",
          "Client and vendor visibility that stays scoped to linked work instead of internal operations",
          "Dashboard metrics, dispatch board, operations report, closeout exports, and CSV exports",
          "Synthetic seed/reset tooling plus documented hosted QA and evidence workflows",
        ],
      },
      {
        label: "Technical Proof",
        heading: "Strong enough to show, still labeled as a POC.",
        body: [
          "The staged loop is live: Vercel hosts the Expo / React Native web client, Vercel hosts the FastAPI API, and Neon carries synthetic demo data for walkthroughs.",
          "The repo has real product evidence behind it: backend pytest coverage, client Jest checks, GitHub Actions CI, Gitleaks config, seeded demo data, smoke helpers, and readiness documentation.",
          "The boundary is honest: real billing, SMTP, object storage, customer onboarding, offline mobile sync, and app-store release are still deferred before real customer production.",
        ],
      },
      {
        label: "Builder Notes",
        heading: "Built around the follow-up problem.",
        body: [
          "The pain behind TechSync is familiar: a manager should not have to keep asking technicians for updates, photos, receipts, materials, and completion status just to know whether the work is moving.",
          "For the public portfolio, this belongs as an ambitious PMC SaaS POC with real architecture, hosted staging, meaningful tests, clear product direction, and honest boundaries around what still needs production polish before it carries a live operation.",
          "Next up: finish the public UX polish pass across role lanes, complete the current role-walkthrough screenshot set, check small screens and accessibility notes, keep client/vendor/technician actions practical, and keep staged synthetic testing separate from real customer onboarding.",
        ],
      },
    ],
  },
  {
    label: "Work / Case Study 03",
    slug: "turnflow-home",
    name: "TurnFlow Home",
    title:
      "TurnFlow Home: maintenance history for homeowners who want the proof.",
    seoTitle: "TurnFlow Home Case Study | Homeowner Maintenance Records",
    description:
      "A homeowner-first maintenance workspace for repair history, proof, costs, documents, reminders, scoped help, and clearer property care records.",
    status: "Launch-oriented SaaS POC candidate",
    type: "Homeowner maintenance workspace",
    audience: "Homeowners, small landlords, rental hosts, vendors, and trusted helpers",
    dateModified: "2026-08-30",
    facts: [
      "Launch-oriented SaaS POC candidate",
      "Homeowner-first maintenance workspace",
      "Owner, vendor, and collaborator portals",
      "Proof packets, vault docs, reminders, and billing records",
      "Automated verification and route smoke scripts in place",
    ],
    links: [
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
    ],
    images: [
      {
        title: "Owner maintenance dashboard",
        caption:
          "Status filters, request counts, homeowner-value cards, and next actions show what each home repair record needs now.",
        src: "/images/work/turnflow-home/dashboard.png",
        alt: "TurnFlow Home dashboard showing maintenance requests, homeowner value cards, filters, and repair status.",
        width: 1440,
        height: 900,
      },
      {
        title: "Guided intake with safety checklist",
        caption:
          "The intake flow separates required fields from helpful context so owners can save a private record first, then strengthen the vendor handoff.",
        src: "/images/work/turnflow-home/new-request-checklist.png",
        alt: "TurnFlow Home new maintenance request screen with readiness checklist and owner-controlled draft guidance.",
        width: 1440,
        height: 900,
      },
      {
        title: "Request detail with cost and decision context",
        caption:
          "Quotes, cost clarity, proof gaps, shared help, and decision history stay attached to the repair instead of scattering across messages.",
        src: "/images/work/turnflow-home/request-detail.png",
        alt: "TurnFlow Home repair record showing proof gaps, cost clarity, completion status, and proof packet actions.",
        width: 1440,
        height: 900,
      },
      {
        title: "Property records",
        caption:
          "Each property anchors its requests, documents, reminders, and exportable maintenance history.",
        src: "/images/work/turnflow-home/properties.png",
        alt: "TurnFlow Home properties screen showing property records, request counts, documents, reminders, and export actions.",
        width: 1440,
        height: 900,
      },
      {
        title: "Property document vault",
        caption:
          "Receipts, warranties, manuals, invoices, and inspection documents stay tied to the property instead of disappearing into messages.",
        src: "/images/work/turnflow-home/property-vault.png",
        alt: "TurnFlow Home property vault showing saved records, repair-linked documents, and document upload controls.",
        width: 1440,
        height: 900,
      },
      {
        title: "Maintenance calendar",
        caption:
          "Recurring care, due-soon work, overdue signals, and calendar export turn preventive maintenance into a visible routine.",
        src: "/images/work/turnflow-home/maintenance-calendar.png",
        alt: "TurnFlow Home maintenance calendar showing preventive care metrics, recurring reminders, overdue items, and calendar export.",
        width: 1440,
        height: 900,
      },
      {
        title: "Vendor portal",
        caption:
          "Vendors see only the assigned requests and next actions they need for bids, work progress, proof, closeout, and owner review.",
        src: "/images/work/turnflow-home/vendor-portal.png",
        alt: "TurnFlow Home vendor portal showing assigned requests, vendor next step guidance, work queue, and profile readiness.",
        width: 1440,
        height: 900,
      },
      {
        title: "Sign in",
        caption:
          "The public auth entry point frames TurnFlow Home as repair records, scoped sharing, and proof that survives the job.",
        src: "/images/work/turnflow-home/login.png",
        alt: "TurnFlow Home sign-in screen with product positioning and owner workspace login form.",
        width: 1440,
        height: 900,
      },
    ],
    sections: [
      {
        label: "Problem",
        heading: "Repairs are easier to manage when the history stays in one place.",
        body: [
          "When you manage repairs yourself, the hard part is not only getting the work done. It is keeping the story straight. Photos live in texts. Quotes sit in email threads. Receipts disappear into camera rolls. Updates come from different people at different times.",
          "Later, when the same issue comes back, the details matter: who fixed it, what it cost, what was approved, what proof came back, and whether the repair actually solved the problem. TurnFlow Home gives that history a home record without forcing the owner into heavy property management software or a full PMC workflow.",
          "The product direction is intentionally focused: calmer ownership, clearer coordination, exportable maintenance history, and better recurring care before a small issue becomes a bigger repair.",
        ],
      },
      {
        label: "Solution",
        heading: "One shared repair record from issue to proof.",
        body: [
          "With TurnFlow Home, an owner can create a property, log a maintenance issue, collect safety and access details, attach photos, invite a vendor or trusted helper, compare quotes, track status changes, and close the request with final cost, proof, billing context, and exportable history.",
          "The product is intentionally focused. It is not trying to run a maintenance company, and it is not dispatch software. It is the homeowner-facing system of record for people who want confidence, documentation, and continuity when repairs happen.",
          "Owners can manage multiple properties, use care signals and setup guidance, approve or decline bids, record costs, keep a document vault, schedule recurring maintenance, and download proof packets. Vendors and collaborators get scoped portals that show only the work shared with them.",
        ],
        items: [
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
        ],
      },
      {
        label: "Current Build",
        heading: "Rebuilt from a Firebase MVP into a full-stack SaaS-style POC.",
        body: [
          "The first version used Firebase Authentication, Firestore, Firebase Storage, and Firestore security rules. That MVP proved the workflow: role-based views, technician photo proof, itemized estimates, client-facing approval status, and JSON backup and restore.",
          "The current version moves the project closer to a real SaaS foundation: Next.js, relational data, server-side authorization, Blob-backed uploads, notification logging, reminder digests, smoke scripts, health checks, and readiness verification before the hosted POC invites external users.",
        ],
        items: [
          "Next.js 16 App Router, TypeScript, Tailwind CSS v4, and Server Actions",
          "Neon serverless Postgres with Drizzle ORM",
          "Auth.js / NextAuth v5 credentials auth with JWT sessions",
          "Server-side role and ownership checks for owner, vendor, and collaborator access",
          "Vercel Blob for photos, quote attachments, and vault documents",
          "Resend email notifications with log-only fallback and delivery-health guidance",
          "Vercel Cron reminder digests plus public and protected health endpoints",
          "Vitest unit coverage, Playwright smoke scripts, and poc:ready / verify checks",
        ],
      },
      {
        label: "Next Up",
        heading: "What has to happen before the public demo.",
        body: [
          "The next product phase is about turning the POC into a public-safe SaaS demo: a real hosted environment, seeded demo data, signed-in screenshots, owner/helper smoke tests, homeowner-user feedback, verified notifications, and eventually the business layers around billing, subscriptions, payments, analytics, and observability.",
        ],
        items: [
          "Configure the real preview or production environment",
          "Run poc:ready and verify against the hosted environment",
          "Seed public-safe demo data",
          "Run owner and helper smoke tests against the hosted URL",
          "Refresh signed-in screenshots for the README, portfolio, and case study",
          "Run a homeowner user-testing pass and log findings",
          "Verify Resend deliverability, sender domain setup, and reminder cron behavior",
          "Decide later layers for billing model, subscriptions, payments, analytics, and observability",
        ],
      },
    ],
  },
];
