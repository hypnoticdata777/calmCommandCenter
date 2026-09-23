import { motion } from "motion/react";
import { RelatedLinks } from "../components/RelatedLinks";
import { Seo } from "../components/Seo";

// PROJECT BEACON
// Route: "/lab" is the h777 Proof Loop workbench between Journal and Work.
// Journal explains the lesson, Lab tests the logic, and Work proves the case study.
// Keep Lab items traceable: problem, algorithm, pseudocode/flowchart, proof, graduation.

const proofSteps = [
  {
    label: "01",
    title: "Problem",
    detail: "Name the friction, risk, delay, or repeated mess.",
  },
  {
    label: "02",
    title: "Algorithm",
    detail: "Turn the messy pattern into repeatable operating logic.",
  },
  {
    label: "03",
    title: "Pseudocode / Flowchart",
    detail: "Make the route visible before the interface gets involved.",
  },
  {
    label: "04",
    title: "Code",
    detail: "Build the smallest useful version of the logic.",
  },
  {
    label: "05",
    title: "Proof",
    detail: "Use tests, screenshots, logs, demos, or generated routes.",
  },
  {
    label: "06",
    title: "Work",
    detail: "Graduate only when a stranger can understand the case.",
  },
];

const activeLoops = [
  {
    name: "Four Clocks Capacity Loop",
    status: "Model under test",
    source: "Field Note 8 -> TechSync Ops / PM Ops Map",
    problem:
      "Teams treat capacity as a headcount problem while finding, waiting, and re-explaining time leak quietly.",
    algorithm:
      "Every task runs on four clocks: doing, finding, waiting, and re-explaining.",
    pseudocode: [
      "For each task, record owner, state, last event, next action, and proof.",
      "If the next person cannot find the task state, mark finding time as leaking.",
      "If the task has a plan but no dated owner, mark waiting time as leaking.",
      "If handoff needs a human explainer, mark re-explaining time as leaking.",
    ],
    proof:
      "FN8 is published; invite events, role-aware flows, and decision logs show the product direction.",
    graduation:
      "Tie the model directly into a Work case study for TechSync Ops or PM Ops Map.",
  },
  {
    name: "m3ldSync Reconciliation Loop",
    status: "Local POC / public demo packaged",
    source: "CSV exports -> operational memory",
    problem:
      "Maintenance CSV exports repeat, drift, and lose context when operators compare them by hand.",
    algorithm:
      "Compare imports, detect new, changed, stale, and manually corrected records, then route the results into triage lanes.",
    pseudocode: [
      "Import the latest CSV.",
      "Normalize records by stable identifiers.",
      "Compare each row against the previous import.",
      "Label records as new, changed, stale, or manually corrected.",
      "Expose attention signals by property and status.",
    ],
    proof:
      "Source and portfolio assets exist; the next proof gap is a public demo path and clearer screenshots.",
    graduation:
      "Graduate after the demo is easy to open and the reconciliation flow has visible proof.",
  },
  {
    name: "VendorRadar Memory Loop",
    status: "POC / in design",
    source: "Vendor leads -> remembered reliability",
    problem:
      "Vendor knowledge often lives in screenshots, old texts, searches, and whoever remembers the last emergency.",
    algorithm:
      "Capture vendor leads, tag trade and location, track quote requests, score reliability, and remember who worked out.",
    pseudocode: [
      "Create a vendor lead with trade, service area, source, and contact state.",
      "Attach quote requests and job outcomes.",
      "Update reliability signals after each interaction.",
      "Surface vendors by fit, freshness, and past outcome.",
    ],
    proof:
      "The problem and smallest useful loop are clear; the build still needs a stronger artifact.",
    graduation:
      "Stay in Lab until there is a prototype, flowchart, and proof of a useful search or scoring path.",
  },
  {
    name: "TurnFlow Proof Packet Loop",
    status: "Work case study candidate",
    source: "Home repair record -> proof packet",
    problem:
      "Homeowners lose repair history across texts, receipts, photos, reminders, and vendor updates.",
    algorithm:
      "Anchor every repair to a property, request, cost, document, proof item, reminder, and scoped collaborator.",
    pseudocode: [
      "Create a repair request under one property.",
      "Collect issue context, access, safety, photos, and vendor help.",
      "Track quotes, approvals, costs, proof, closeout, and reminders.",
      "Export a proof packet when the repair is ready to explain later.",
    ],
    proof:
      "Work screenshots exist; the next proof pass should connect the algorithm to the current case study more explicitly.",
    graduation:
      "Already in Work, but Lab should keep the proof-packet logic visible for future polish.",
  },
];

const prototypes = [
  {
    name: "m3ldSync",
    status: "Local POC / public demo packaged",
    type: "CSV reconciliation tool",
    audience: "Maintenance managers and busy PM operators",
    description:
      "A browser proof-of-concept that turns repeated maintenance CSV exports into operational memory by comparing imports and surfacing triage signals.",
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
        label: "Demo path next",
      },
    ],
  },
  {
    name: "VendorRadar",
    status: "POC / in design",
    type: "Vendor intelligence",
    audience: "PMCs and owners",
    description:
      "A vendor memory layer for tracking contractor leads, trade, service area, quotes, reliability signals, and actual outcomes.",
    links: [{ label: "Pseudocode next" }, { label: "Flowchart next" }],
  },
];

const graduationRules = [
  "The problem is specific enough that a stranger can recognize the pain.",
  "The algorithm explains the moving parts before the UI explains them.",
  "Pseudocode and a flowchart exist for the core loop.",
  "Code proof exists: tests, logs, screenshots, demo routes, or working states.",
  "The case can explain what changed without leaning on a private backstory.",
];

const labPathways = [
  {
    label: "Journal",
    title: "Don't Hire Another Laptop. Fix the Lockfile.",
    href: "/journal/dont-hire-another-laptop-fix-the-lockfile",
  },
  {
    label: "Work",
    title: "TechSync Ops: maintenance handoffs after Lab",
    href: "/work/techsync-ops",
  },
  {
    label: "Work",
    title: "PM Ops Map: the day-one operating map",
    href: "/work/pm-ops-map",
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
  return (
    <main className="min-h-screen text-foreground px-6 py-28 sm:px-8 sm:py-32 relative z-10">
      <Seo
        title="Lab | h777 Proof Loop Experiments"
        description="The h777 Lab tests algorithms, pseudocode, flowcharts, build notes, and code proof before tools graduate into Work case studies."
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
        className="mx-auto flex w-full max-w-6xl flex-col gap-24"
      >
        <section className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="space-y-7"
          >
            <SectionLabel>Lab</SectionLabel>

            <h1 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight">
              The testing bench before Work.
            </h1>

            <div className="h-px bg-foreground/10 w-28" />

            <div className="space-y-5 text-lg md:text-xl leading-loose text-foreground/65">
              <p>
                Lab is where the h777 Proof Loop gets pressure-tested:
                problem, algorithm, pseudocode, flowchart, code, build note,
                and proof before a tool earns a polished Work case study.
              </p>
              <p className="text-foreground/90">
                Journal carries the lesson. Lab tests the logic. Work shows
                the strongest proof.
              </p>
            </div>
          </motion.div>
        </section>

        <RelatedLinks
          eyebrow="Follow the proof"
          title="Start with the field note, test the loop, then show the case"
          links={labPathways}
        />

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeIn" }}
          className="space-y-10 border-t border-foreground/10 pt-12"
        >
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-5">
              <SectionLabel>01 / h777 Proof Loop</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
                From messy problem to traceable proof.
              </h2>
            </div>

            <p className="text-lg leading-loose text-foreground/65">
              Lab does not stop at experiments. It keeps the reasoning visible
              while an idea moves toward Work: first the problem, then the
              algorithm, then the pseudocode and flowchart, then code and proof.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {proofSteps.map((step) => (
              <article
                key={step.title}
                className="min-h-44 border border-foreground/10 p-5"
              >
                <p className="font-display text-sm text-brand/55">
                  {step.label}
                </p>
                <h3 className="mt-4 text-2xl font-bold tracking-wide">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/58">
                  {step.detail}
                </p>
              </article>
            ))}
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
              <SectionLabel>02 / Active Loops</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
                What is being tested right now.
              </h2>
            </div>

            <p className="text-lg leading-loose text-foreground/65">
              Each loop has to show its problem, algorithm, pseudocode, proof,
              and graduation condition. If it cannot do that yet, it stays in
              Lab until the logic is clearer.
            </p>
          </div>

          <div className="divide-y divide-foreground/10">
            {activeLoops.map((loop, index) => (
              <article
                key={loop.name}
                className="grid gap-8 py-10 lg:grid-cols-[0.12fr_0.33fr_1fr]"
              >
                <div className="font-display text-brand/50">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-wide">
                      {loop.name}
                    </h3>
                    <div className="space-y-1 text-xs uppercase tracking-[0.22em] text-foreground/35">
                      <p>{loop.status}</p>
                      <p>{loop.source}</p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-foreground/62">
                    {loop.problem}
                  </p>
                </div>

                <div className="grid gap-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="border-l border-brand/35 pl-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-brand/55">
                        Algorithm
                      </p>
                      <p className="mt-3 text-lg leading-relaxed text-foreground/76">
                        {loop.algorithm}
                      </p>
                    </div>

                    <div className="border-l border-foreground/15 pl-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-foreground/38">
                        Graduation
                      </p>
                      <p className="mt-3 text-lg leading-relaxed text-foreground/68">
                        {loop.graduation}
                      </p>
                    </div>
                  </div>

                  <div className="border border-foreground/10 bg-background/35 p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-foreground/38">
                      Pseudocode
                    </p>
                    <pre className="mt-4 whitespace-pre-wrap font-mono text-sm leading-relaxed text-foreground/70">
                      {loop.pseudocode.map((line) => `- ${line}`).join("\n")}
                    </pre>
                  </div>

                  <p className="text-base leading-relaxed text-foreground/55">
                    <span className="font-display text-foreground/82">
                      Code proof:
                    </span>{" "}
                    {loop.proof}
                  </p>
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
          className="space-y-10 border-t border-foreground/10 pt-12"
        >
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-5">
              <SectionLabel>03 / Prototype Shelf</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
                Useful builds that are still earning proof.
              </h2>
            </div>

            <p className="text-lg leading-loose text-foreground/65">
              Prototypes can be valuable before they are polished. Lab keeps
              them honest by labeling the status, audience, source, and next
              proof gap.
            </p>
          </div>

          <div className="divide-y divide-foreground/10">
            {prototypes.map((tool, index) => (
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
            <SectionLabel>04 / Graduation Rules</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              What has to be true before Lab becomes Work.
            </h2>
          </div>

          <div className="grid gap-5">
            {graduationRules.map((rule) => (
              <p
                key={rule}
                className="border-b border-foreground/10 pb-5 text-xl leading-relaxed text-foreground/80"
              >
                {rule}
              </p>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
