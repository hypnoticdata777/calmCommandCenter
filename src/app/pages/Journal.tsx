import { useState } from "react";
import { motion } from "motion/react";

// PROJECT COMMAND STRUCTURE - Journal
// 1. Why: Gives the site a place for field notes about systems and operations.
// 2. Who: Readers who want the thinking behind the tools, not just the interface.
// 3. Main modules: journalEntries data array and the mapped article layout.
// 4. Screens: "/journal".
// 5. Data stored: Static post metadata and short sections in code.
// 6. State tracked: Map index only for staggered animation and separators.
// 7. User actions: Read entries and move through the shared nav.
// 8. Rules: Keep entries concise, useful, and tied to the site's system theme.
// 9. Outside tools: Motion for reveal timing.
// 10. Smallest version: One entry with title, type, read time, and body copy.

const journalEntries = [
  {
    title: "How do I know I am getting what I paid for?",
    readTime: "Draft",
    type: "Homeowner",
    date: "Aug 11, 2026",
    sections: [
      "A homeowner should not have to become a project manager just to know whether the work was done right. The first layer is proof: scope, photos, receipts, timeline, and a clear answer to what changed.",
      "That is why I keep building around evidence. Good operations make the next question easier instead of forcing the client to chase the last one.",
    ],
  },
  {
    title: "How do I get the homeowner to trust the process?",
    readTime: "Draft",
    type: "PM Ops",
    date: "Aug 10, 2026",
    sections: [
      "Trust does not come from saying everything is under control. It comes from showing the owner what is happening, what is waiting, what was approved, and why the next move makes sense.",
      "The process has to be visible enough that people stop guessing. That is the difference between managing a home and constantly defending a mystery.",
    ],
  },
  {
    title: "Own the outcome, not just the task.",
    readTime: "Draft",
    type: "Team",
    date: "Aug 9, 2026",
    sections: [
      "Teams get stuck when everyone technically did their task, but nobody owns whether the result made sense. That is where handoffs get weird and simple work gets heavy.",
      "The better question is not only who touched it. It is who owns the outcome, what success looks like, and what signal tells us it is done.",
    ],
  },
  {
    title: "Why does a solid property still feel thin on cash flow?",
    readTime: "Draft",
    type: "Investor",
    date: "Aug 8, 2026",
    sections: [
      "Sometimes the asset is not the problem. The leaks are hiding in turns, maintenance timing, unclear approvals, slow follow-up, poor vendor memory, and decisions that nobody turns into a clean system.",
      "That is the kind of question I want the journal to hold before it becomes a tool, a checklist, or a consulting conversation.",
    ],
  },
  {
    title: "What work order deserves my time next?",
    readTime: "Draft",
    type: "PropTech",
    date: "Aug 7, 2026",
    sections: [
      "Not every open work order deserves the same urgency, but most tools make them sit in the same noisy pile. Priority, owner sensitivity, tenant impact, vendor availability, age, and cost risk all matter.",
      "I want to keep working through that problem here: less ambiguity, better triage, and a little room to say the quiet operational truth out loud.",
    ],
  },
];

export function Journal() {
  const [openEntry, setOpenEntry] = useState<string | null>(null);

  return (
    <main className="min-h-screen text-foreground px-6 py-28 sm:px-8 sm:py-32 relative z-10">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="mx-auto w-full max-w-5xl space-y-16"
      >
        <header className="max-w-3xl space-y-7 text-left">
          <p className="text-brand/60 text-sm tracking-widest uppercase">Journal</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight">
            Notes from the messy middle.
          </h1>
          <div className="h-px bg-foreground/10 w-28" />
          <p className="max-w-2xl text-foreground/50 tracking-wide leading-[1.75]">
            Writing about property management, operations, PropTech, tool
            builds, lessons, and the occasional vent that might turn into a
            case study.
          </p>
        </header>

        <div className="border-y border-foreground/10">
          {journalEntries.map((entry, index) => (
            <motion.article
              key={entry.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.15 + index * 0.12,
                ease: "easeIn",
              }}
              className="border-b border-foreground/10 last:border-b-0"
            >
              <button
                type="button"
                aria-expanded={openEntry === entry.title}
                onClick={() =>
                  setOpenEntry(openEntry === entry.title ? null : entry.title)
                }
                className="group grid w-full gap-5 py-7 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 md:grid-cols-[11rem_1fr_6rem]"
              >
                <div className="space-y-2">
                  <p className="text-sm tracking-widest uppercase text-brand/55">
                    {entry.date}
                  </p>
                  <p className="text-xs uppercase tracking-[0.24em] text-foreground/35">
                    {entry.type}
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-bold leading-snug tracking-wide text-foreground transition-colors group-hover:text-brand">
                    {entry.title}
                  </h2>
                  <p className="text-sm uppercase tracking-[0.24em] text-foreground/35">
                    {entry.readTime}
                  </p>
                </div>

                <div className="flex items-start justify-start md:justify-end">
                  <span className="border border-foreground/15 px-3 py-1 font-display text-sm tracking-wide text-foreground/45">
                    {openEntry === entry.title ? "Close" : "Open"}
                  </span>
                </div>
              </button>

              {openEntry === entry.title && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="max-w-3xl space-y-7 pb-10 md:ml-[11rem]">
                    {entry.sections.map((section) => (
                      <p
                        key={section}
                        className="text-lg leading-[1.75] text-foreground/65"
                      >
                        {section}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.article>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
