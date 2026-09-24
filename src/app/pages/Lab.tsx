import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { RelatedLinks } from "../components/RelatedLinks";
import { Seo } from "../components/Seo";

// PROJECT BEACON
// Route: "/lab" is the public thinking bench between Journal and Work.
// Journal tells the story, Lab shows the logic, and Work shows the tool in action.

type LabAlgorithm = {
  eyebrow: string;
  title: string;
  plainProblem: string;
  analogy: string;
  algorithm: string[];
  pseudocode: string[];
  flow: string[];
  code: string[];
  outcome: string;
  workHref?: string;
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
    eyebrow: "Tool logic / TechSync Ops",
    title: "Role-aware maintenance lanes",
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
    eyebrow: "Site logic / h777 portfolio",
    title: "Journal to Lab to Work",
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
              This page is where I slow the work down and explain my thinking.
              Before a tool becomes a case study, I want to know the problem,
              the algorithm, the pseudocode, the flowchart, and the first piece
              of code that proves the shape makes sense.
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

        <section className="space-y-6 border-t border-foreground/10 pt-12">
          <SectionLabel>The loop</SectionLabel>
          <FlowChart
            steps={[
              "Problem",
              "Algorithm",
              "Pseudocode / Flowchart",
              "Code",
              "Lab",
              "Work",
              "Next problem",
            ]}
          />
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
