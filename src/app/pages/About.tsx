import { motion } from "motion/react";

// PROJECT COMMAND STRUCTURE - About
// 1. Why: Explains the operating philosophy behind h777 and the site.
// 2. Who: Visitors deciding whether the builder's way of thinking fits their work.
// 3. Main modules: frictionPoints, principles, focusAreas, and SectionNumber helper.
// 4. Screens: "/about".
// 5. Data stored: Static lists of friction, principles, and focus areas.
// 6. State tracked: Motion reveal state only; no persisted user state.
// 7. User actions: Read the philosophy and navigate to related sections.
// 8. Rules: Keep the claims grounded in systems, clarity, and real outcomes.
// 9. Outside tools: Motion for fade/scroll reveals.
// 10. Smallest version: One clear explanation of what gets built and why.

const frictionPoints = [
  "unclear ownership",
  "slow training",
  "billing confusion",
];

const principles = [
  "Accountability is the starting point, not a feature",
  "Homeowners do not only want cheap. They want clear and logical",
  "Software only helps when the process has a spine",
  "If a tool needs a ceremony before anyone can use it, it is already in trouble",
];

const focusAreas = [
  "Open-source tools for property management teams",
  "Workflow experiments for remote operations",
  "Vendor follow-up and triage systems",
  "Clearer handoffs for owners, managers, and admins",
];

const consultingOffers = [
  "PMC operations cleanup and accountability mapping",
  "Maintenance workflow, handoff, and follow-up design",
  "Remote team rhythms, training structure, and workload clarity",
  "Tool selection, process setup, and custom tool scoping",
];

function SectionNumber({ children }: { children: string }) {
  return (
    <div className="font-display text-brand/60 text-sm tracking-widest">
      {children}
    </div>
  );
}

export function About() {
  return (
    <main className="min-h-screen text-foreground px-6 py-28 md:px-10 lg:px-16 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeIn" }}
        className="mx-auto flex w-full max-w-5xl flex-col gap-28"
      >
        <section className="max-w-3xl space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="space-y-8"
          >
            <p className="text-brand/60 text-sm tracking-widest uppercase">
              About
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight">
              An opinionated operator with a systems brain.
            </h1>

            <div className="h-px bg-foreground/10 w-28" />

            <div className="space-y-5 text-lg md:text-xl leading-loose text-foreground/70">
              <p>
                I have spent 7+ years inside property management operations,
                and more than 10 years across remote service, leadership,
                systems, and client-facing work.
              </p>
              <p>
                I am trying to leave places better than I found them. That has
                been the pattern since my earliest service and operations work:
                find the messy part, understand the real outcome, and improve
                the way the work moves.
              </p>
              <p>
                That kind of work teaches you things quickly.
              </p>
              <p className="text-foreground/90">
                Most PM problems are not just software problems.
                <br />
                They are accountability, handoff, training, billing, and
                clarity problems.
              </p>
            </div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="space-y-5">
            <SectionNumber>01 / What PM Taught Me</SectionNumber>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              When everyone owns a little piece, nobody owns the outcome.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-loose text-foreground/70">
            <p>Accountability needs to be clear.</p>
            <p>
              Not because managers need control for the sake of control. People
              do better work when they know what they own, what they do not,
              and what success actually looks like.
            </p>
            <p className="text-foreground/90">
              Homeowners usually are not asking for cheap.
              <br />
              They are asking for clear, logical, honest service.
            </p>
            <p>
              They want billing they can understand, updates they can trust,
              and a system that does not make them feel like they have to chase
              the company they hired.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {frictionPoints.map((point, index) => (
                <div
                  key={point}
                  className="border-l border-brand/40 pl-4 text-foreground/75"
                >
                  <div className="font-display text-brand/60 text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-foreground/80">
              <p>
                The problems usually show up in the same places:
                <br />
                scattered ownership, slow onboarding, billing confusion,
                <br />
                vendor follow-ups, remote handoffs, and tools nobody fully
                trusts.
              </p>
              <p className="text-foreground/90">
                That is the mess I am building from.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="space-y-5">
            <SectionNumber>02 / Software Is Not Magic</SectionNumber>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              A new platform will not fix unclear expectations.
            </h2>
          </div>

          <div className="space-y-10">
            <div className="grid gap-5">
              {principles.map((principle) => (
                <p
                  key={principle}
                  className="border-b border-foreground/10 pb-5 text-xl leading-relaxed text-foreground/85"
                >
                  {principle}
                </p>
              ))}
            </div>

            <div className="space-y-5 text-lg leading-loose text-foreground/65">
              <p>
                Software FOMO is real. A new platform will not solve team
                anxiety, replace accountability, or align people if the company
                has not defined what good work looks like.
              </p>
              <p className="text-foreground/90">
                If the process is unclear, software usually gives the confusion
                a nicer dashboard.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="space-y-5">
            <SectionNumber>03 / Current Focus</SectionNumber>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              Turning operations experience into tools and useful systems.
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg leading-loose text-foreground/70">
              I am currently finishing Computer Systems Engineering, and I am
              using that technical background alongside my property management
              experience to build:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="border border-foreground/10 bg-background/40 px-5 py-5"
                >
                  <p className="text-lg leading-relaxed text-foreground/80">
                    {area}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xl leading-loose text-foreground/90">
              The goal is simple: make property management less painful.
              <br />
              Not with more noise, but with clearer tools around the work
              people already do every day.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="space-y-5">
            <SectionNumber>04 / Consulting</SectionNumber>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
              Available for PMC ops coaching, cleanup, and tool-minded
              consulting.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="space-y-6 text-lg leading-loose text-foreground/70">
              <p>
                If you are a property manager, homeowner, investor, operator,
                or remote team tired of chaos and nonstop decision calls, I can
                help organize the messy part.
              </p>
              <p>
                That can mean clarifying accountability across departments,
                improving handoffs, setting up task systems, shaping training,
                reviewing maintenance workflows, or scoping a tailored tool
                before anyone spends money building the wrong thing.
              </p>
              <p className="text-foreground/90">
                Availability depends on schedule and fit. I am always looking
                for the truth of the problem first, not just trying to be right.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {consultingOffers.map((offer) => (
                <div
                  key={offer}
                  className="border border-foreground/10 bg-background/40 px-5 py-5"
                >
                  <p className="text-lg leading-relaxed text-foreground/80">
                    {offer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="border-t border-foreground/10 pt-12"
        >
          <div className="ml-auto max-w-3xl space-y-10">
            <div className="space-y-5">
              <SectionNumber>05 / Why It Matters</SectionNumber>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-wide">
                I like working with people who want the work to make sense.
              </h2>
            </div>

            <div className="space-y-7 text-lg md:text-xl leading-loose text-foreground/70">
              <p>
                I enjoy working with honest people, funny people, positive
                people, and people who are smart enough to challenge a process
                without turning every conversation into a ceremony.
              </p>

              <div className="flex flex-wrap gap-x-8 gap-y-3 text-brand/80">
                <span>honesty</span>
                <span>clarity</span>
                <span>useful software</span>
                <span>cleaner PM operations</span>
              </div>

              <p>
                If you are building something useful, trying to make PM
                operations cleaner, or looking for someone who understands both
                the business pain and the technical side, we will probably get
                along.
              </p>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
