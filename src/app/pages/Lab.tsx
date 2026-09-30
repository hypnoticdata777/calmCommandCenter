import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { RelatedLinks } from "../components/RelatedLinks";
import { Seo } from "../components/Seo";

// PROJECT BEACON
// Route: "/lab" is the public thinking bench between Journal and Work.
// Journal tells the story, Lab shows the logic, and Work shows the tool in action.

type LabAlgorithm = {
  slug: string;
  eyebrow: string;
  status: string;
  title: string;
  fit: string;
  plainProblem: string;
  analogy: string;
  algorithm: string[];
  pseudocode: string[];
  flow: string[];
  code: string[];
  outcome: string;
  workHref?: string;
  links?: {
    label: string;
    href: string;
  }[];
};

const loopSteps = [
  {
    label: "Problem",
    detail:
      "Something keeps repeating, breaking, hiding, or taking too much memory.",
  },
  {
    label: "Algorithm",
    detail: "Turn the messy situation into repeatable steps and decisions.",
  },
  {
    label: "Pseudocode",
    detail: "Write the logic in plain words before polishing the interface.",
  },
  {
    label: "Flowchart",
    detail: "Show where the work starts, where it branches, and where it lands.",
  },
  {
    label: "Code",
    detail: "Build the smallest useful version and let it expose the next problem.",
  },
  {
    label: "Work",
    detail: "When the tool can explain itself visually, it becomes a case study.",
  },
];

const algorithms: LabAlgorithm[] = [
  {
    slug: "role-aware-maintenance-lanes",
    eyebrow: "Tool logic / TechSync Ops",
    status: "Work-backed",
    title: "Role-aware maintenance lanes",
    fit: "Different people need different views of the same operational truth.",
    plainProblem:
      "Maintenance work gets messy when everybody sees the same giant pile. A manager, a client, a vendor, and a read-only viewer do not need the same controls. They need the same work translated into their lane.",
    analogy:
      "Think of it like the front desk of a building. The resident asks for help, the coordinator routes the request, the vendor sees only the assigned job, and the owner sees status without walking behind the desk.",
    algorithm: [
      "Start with the signed-in user.",
      "Read the user's role.",
      "Load only the work that role is allowed to see.",
      "Translate the same work order into that role's language.",
      "Show the next action for that lane.",
      "Hide controls that would let the wrong person change the wrong thing.",
    ],
    pseudocode: [
      "when user opens workspace",
      "  role = user.role",
      "  visibleWork = loadWorkFor(role)",
      "  views = buildViewsFor(role, visibleWork)",
      "  nextAction = chooseNextAction(role, visibleWork)",
      "  show workspace with views, queue, and nextAction",
      "  hide actions outside role boundary",
    ],
    flow: [
      "User opens tool",
      "Identify role",
      "Load allowed work",
      "Build lane",
      "Choose next action",
      "Render workspace",
    ],
    code: [
      "const lane = lanes[user.role];",
      "const work = loadVisibleWork(lane.scope);",
      "const nextAction = pickNextAction(work, lane.rules);",
      "return <Workspace lane={lane} work={work} action={nextAction} />;",
    ],
    outcome:
      "The product starts selling the idea that clarity is not one dashboard for everyone. Clarity is the right amount of information for the person holding the next step.",
    workHref: "/work/techsync-ops",
  },
  {
    slug: "m3ldsync-reconciliation",
    eyebrow: "Lab POC / m3ldSync",
    status: "POC",
    title: "CSV reconciliation as an operations memory tool",
    fit: "Messy exports become triage lanes instead of another spreadsheet burden.",
    plainProblem:
      "Remote operators inherit exports, spreadsheets, screenshots, and status lists that were never designed to agree with each other. The hard part is not opening a CSV. It is finding what changed, what needs triage, and what deserves a human decision before the next handoff.",
    analogy:
      "Think of it like matching receipts after a long shift. The point is not the paper. The point is spotting the missing line, the duplicate charge, and the item that needs someone to say what happens next.",
    algorithm: [
      "Load two operational lists.",
      "Normalize the fields that should describe the same work.",
      "Compare records by stable identifiers and useful fallbacks.",
      "Sort differences into matched, missing, changed, and needs-review lanes.",
      "Turn each difference into a triage card instead of a hidden spreadsheet row.",
      "Export or carry forward the decisions so the next operator can continue.",
    ],
    pseudocode: [
      "when operator imports files",
      "  leftRows = normalize(firstFile)",
      "  rightRows = normalize(secondFile)",
      "  matches = reconcile(leftRows, rightRows)",
      "  cards = buildTriageCards(matches)",
      "  show lanes by status and risk",
      "  save decisions for the next pass",
    ],
    flow: [
      "Import CSVs",
      "Normalize fields",
      "Match records",
      "Find changes",
      "Triage cards",
      "Export decisions",
    ],
    code: [
      "const left = normalizeRows(sourceA);",
      "const right = normalizeRows(sourceB);",
      "const diff = reconcileByKey(left, right);",
      "return buildKanbanLanes(diff, decisions);",
    ],
    outcome:
      "m3ldSync stays in Lab because the product question is still being tested: can reconciliation feel like operational triage instead of spreadsheet punishment?",
    links: [
      {
        label: "Source",
        href: "https://github.com/hypnoticdata777/m3ldSync",
      },
      {
        label: "Portfolio assets",
        href: "https://github.com/hypnoticdata777/m3ldSync/tree/main/docs/portfolio",
      },
    ],
  },
  {
    slug: "vendorradar-memory",
    eyebrow: "In design / VendorRadar",
    status: "Designing",
    title: "Vendor memory instead of a vendor list",
    fit: "Vendor decisions need recent context, not just contact information.",
    plainProblem:
      "A vendor list can say who exists, but operations need to remember what happened the last time work was trusted to that vendor: scope, quote behavior, response time, proof quality, approvals, blockers, and whether the handoff stayed clean.",
    analogy:
      "Think of it like caller ID with a memory. A name and phone number help you call someone. The useful part is knowing what usually happens after they answer.",
    algorithm: [
      "Start with a vendor and a completed work history.",
      "Group jobs by category, property context, urgency, and outcome.",
      "Capture quote, proof, invoice, communication, and closeout signals.",
      "Score reliability by recent evidence instead of reputation alone.",
      "Surface warnings, strengths, and context before the next assignment.",
      "Keep the record scoped so trust is earned, current, and explainable.",
    ],
    pseudocode: [
      "when assigning work",
      "  vendor = loadVendorProfile(id)",
      "  history = loadRecentWork(vendor)",
      "  signals = summarizeReliability(history)",
      "  risks = findOpenPatterns(signals)",
      "  show vendor memory before assignment",
      "  log new outcome after closeout",
    ],
    flow: [
      "Vendor profile",
      "Work history",
      "Reliability signals",
      "Risk context",
      "Assignment decision",
      "New memory",
    ],
    code: [
      "const history = loadVendorHistory(vendorId);",
      "const signals = scoreReliability(history);",
      "const context = explainVendorFit(signals, workOrder);",
      "return <VendorMemory vendor={vendor} context={context} />;",
    ],
    outcome:
      "VendorRadar stays in Lab until the signal model is sharper. The idea is not to rank people casually; it is to make vendor trust specific, current, and backed by work history.",
  },
  {
    slug: "journal-lab-work-system",
    eyebrow: "Site logic / h777 portfolio",
    status: "System",
    title: "Journal to Lab to Work",
    fit: "Ideas need a place to mature before they become public case studies.",
    plainProblem:
      "The site can easily become a pile of smart notes, screenshots, code logs, and half-finished ideas. The system needs to tell visitors where each thing belongs.",
    analogy:
      "Think of it like a workshop with three tables. Journal is the notebook, Lab is the bench where the model is tested, and Work is the display table for the tools that can stand on their own.",
    algorithm: [
      "Capture the idea as a problem.",
      "Turn it into an algorithm, pseudocode, or flowchart.",
      "Build a small version or write the build note.",
      "Use Lab while the logic is still being tested.",
      "Move the public screenshots and polished product story into Work.",
      "Let the next real-world question become the next problem.",
    ],
    pseudocode: [
      "for each new idea",
      "  write the problem in plain language",
      "  describe the algorithm",
      "  sketch pseudocode or a flowchart",
      "  build the smallest useful version",
      "  if it is still being tested, keep it in Lab",
      "  if it can explain itself, promote it to Work",
    ],
    flow: [
      "Problem",
      "Algorithm",
      "Pseudocode",
      "Code",
      "Lab",
      "Work",
      "Next problem",
    ],
    code: [
      "const shelf = idea.isPolished ? 'work' : 'lab';",
      "const links = connectJournalLabAndWork(idea);",
      "return publish({ shelf, problem, algorithm, links });",
    ],
    outcome:
      "The website becomes part portfolio, part thinking system. A visitor can see the story, the logic, and the built thing without guessing how they connect.",
    workHref: "/work",
  },
];

const relatedLinks = [
  {
    label: "Work",
    title: "TechSync Ops case study",
    href: "/work/techsync-ops",
  },
  {
    label: "Journal",
    title: "Don't Hire Another Laptop. Fix the Lockfile.",
    href: "/journal/dont-hire-another-laptop-fix-the-lockfile",
  },
  {
    label: "Journal",
    title: "The Silent Killer of Property Management Operations",
    href: "/journal/the-silent-killer-of-property-management-operations",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-brand/60 text-sm tracking-widest uppercase">
      {children}
    </p>
  );
}

function FlowChart({ steps }: { steps: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {steps.map((step, index) => (
        <div key={`${step}-${index}`} className="flex items-stretch gap-3">
          <div className="flex min-h-24 flex-1 items-center border border-brand/25 bg-brand/5 px-5 py-4">
            <p className="font-display text-lg leading-snug text-foreground/82">
              {step}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div className="hidden items-center text-2xl text-brand/50 sm:flex">
              -&gt;
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function PlainList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-foreground/10 bg-background/30 p-5">
      <p className="text-xs uppercase tracking-[0.22em] text-brand/55">
        {title}
      </p>
      <ol className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li
            key={item}
            className="grid grid-cols-[2rem_1fr] gap-3 text-base leading-relaxed text-foreground/68"
          >
            <span className="font-display text-brand/55">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function CodeBlock({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="border border-foreground/10 bg-background/35 p-5">
      <p className="text-xs uppercase tracking-[0.22em] text-foreground/38">
        {title}
      </p>
      <pre className="mt-4 overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-relaxed text-foreground/72">
        {lines.join("\n")}
      </pre>
    </div>
  );
}

function AlgorithmPanel({ item }: { item: LabAlgorithm }) {
  return (
    <motion.article
      id={item.slug}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.9, ease: "easeIn" }}
      className="space-y-10 border-t border-foreground/10 pt-12"
    >
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="space-y-6">
          <SectionLabel>{item.eyebrow}</SectionLabel>
          <h2 className="text-3xl font-bold leading-tight tracking-wide md:text-5xl">
            {item.title}
          </h2>
          <p className="text-lg leading-loose text-foreground/68">
            {item.plainProblem}
          </p>
        </div>

        <div className="grid content-start gap-5">
          <div className="border-l border-brand/35 pl-5">
            <p className="text-xs uppercase tracking-[0.22em] text-brand/55">
              Analogy
            </p>
            <p className="mt-3 text-xl leading-loose text-foreground/78">
              {item.analogy}
            </p>
          </div>

          <div className="border-l border-foreground/10 pl-5">
            <p className="text-xs uppercase tracking-[0.22em] text-foreground/38">
              Why it matters
            </p>
            <p className="mt-3 text-lg leading-loose text-foreground/68">
              {item.outcome}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <PlainList title="Algorithm" items={item.algorithm} />
        <CodeBlock title="Pseudocode" lines={item.pseudocode} />
      </div>

      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.22em] text-foreground/38">
          Flowchart
        </p>
        <FlowChart steps={item.flow} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <CodeBlock title="Tiny code-shaped example" lines={item.code} />
        {item.workHref && (
          <div className="border border-foreground/10 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-brand/55">
              Full circle
            </p>
            <p className="mt-4 text-lg leading-loose text-foreground/68">
              Lab shows the logic. Work shows the product surface, screenshots,
              and case-study version of the same idea.
            </p>
            <Link
              to={item.workHref}
              className="mt-5 inline-flex border border-brand/30 px-4 py-2 font-display text-sm tracking-wide text-brand/85 transition-colors hover:bg-brand/10"
            >
              See it in Work
            </Link>
          </div>
        )}
        {item.links && (
          <div className="border border-foreground/10 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-brand/55">
              Lab proof
            </p>
            <p className="mt-4 text-lg leading-loose text-foreground/68">
              This experiment is still earning its case-study shape. These
              links show the current public source or supporting material
              without promoting it to Work yet.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {item.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-brand/30 px-4 py-2 font-display text-sm tracking-wide text-brand/85 transition-colors hover:bg-brand/10"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function Lab() {
  return (
    <main className="relative z-10 min-h-screen px-6 py-28 text-foreground sm:px-8 sm:py-32">
      <Seo
        title="Lab | h777 Algorithms and Build Thinking"
        description="The h777 Lab explains how product ideas move from problem to algorithm, pseudocode, flowchart, code, and Work case study."
        path="/lab"
        breadcrumbs={[
          { name: "h777", path: "/" },
          { name: "Lab", path: "/lab" },
        ]}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeIn" }}
        className="mx-auto flex w-full max-w-7xl flex-col gap-24"
      >
        <section className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="space-y-7"
          >
            <SectionLabel>Lab</SectionLabel>

            <h1 className="text-4xl font-bold leading-tight tracking-wide md:text-6xl">
              How the idea becomes a system.
            </h1>

            <div className="h-px w-28 bg-foreground/10" />

            <p className="max-w-3xl text-lg leading-loose text-foreground/70 md:text-xl">
              This page is where I slow the work down and make the thinking
              inspectable. Before an idea becomes a polished tool, I want to
              know the problem, the algorithm, the pseudocode, the flowchart,
              and the first piece of code that proves the shape makes sense.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeIn" }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {loopSteps.map((step) => (
              <article
                key={step.label}
                className="border border-foreground/10 bg-background/25 p-4"
              >
                <h2 className="text-xl font-bold tracking-wide">
                  {step.label}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/56">
                  {step.detail}
                </p>
              </article>
            ))}
          </motion.div>
        </section>

        <section className="border-t border-foreground/10 pt-12">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-start">
            <div className="space-y-5">
              <SectionLabel>On the bench</SectionLabel>
              <h2 className="text-3xl font-bold leading-tight tracking-wide md:text-4xl">
                What is being tested right now.
              </h2>
              <p className="text-lg leading-loose text-foreground/64">
                The Lab is a shelf for product logic before it becomes a
                polished case study. Each thread below has a different job:
                prove the workflow, sharpen the model, or explain how the site
                itself connects the thinking.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {algorithms.map((item) => (
                <a
                  key={item.slug}
                  href={`#${item.slug}`}
                  className="group border border-brand/20 bg-brand/5 p-5 transition-colors hover:border-brand/45 hover:bg-brand/10"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-brand/60">
                    {item.status}
                  </p>
                  <h3 className="mt-4 font-display text-xl leading-snug text-foreground/88">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/56">
                    {item.fit}
                  </p>
                  <span className="mt-5 inline-flex font-display text-sm tracking-wide text-brand/75 transition-transform group-hover:translate-x-1">
                    Open thread -&gt;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {algorithms.map((item) => (
          <AlgorithmPanel key={item.title} item={item} />
        ))}

        <RelatedLinks
          eyebrow="Related paths"
          title="Where this thinking connects"
          links={relatedLinks}
        />
      </motion.div>
    </main>
  );
}
