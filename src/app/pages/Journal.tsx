// ============================================================
// ARCHIVO: Journal.tsx
//
// WHAT THIS PAGE DOES
// Shows calm, narrow journal entries about systems and operations.
// The animated background comes from Layout.tsx, so it is not defined here.
// ============================================================

import { motion } from "motion/react";

const journalEntries = [
  {
    title: "A system is calm when it knows what to ignore.",
    readTime: "2 min",
    type: "System",
    date: "Field note 01",
    sections: [
      "The best operating systems do not make every signal louder. They decide what deserves attention, what can wait, and what should disappear before it turns into noise.",
      "That is the point of a calm command center: not more dashboards, not more urgency, just a place where the next useful move becomes easier to see.",
    ],
  },
  {
    title: "Thinking out loud before the work hardens.",
    readTime: "3 min",
    type: "Thought",
    date: "Field note 02",
    sections: [
      "Writing is where rough systems get pressure-tested. If an idea cannot survive a quiet paragraph, it probably is not ready to become a workflow.",
      "The journal is for that middle state: useful enough to keep, unfinished enough to keep shaping.",
    ],
  },
  {
    title: "Lessons should leave handles.",
    readTime: "2 min",
    type: "Lesson",
    date: "Field note 03",
    sections: [
      "A good lesson is not a quote to remember. It is a handle you can grab when the room gets loud and the work starts moving faster than your notes.",
      "That is the standard here: entries should feel readable, but they should also leave something operational behind.",
    ],
  },
];

export function Journal() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-28 sm:px-8 sm:py-32 relative z-10">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="mx-auto w-full max-w-[650px] space-y-20"
      >
        <header className="space-y-7 text-center">
          <p className="text-brand/60 text-sm tracking-widest uppercase">Journal</p>
          <h1 className="text-4xl font-bold tracking-wide leading-tight">
            Thinking out loud.
          </h1>
          <div className="h-px bg-foreground/10 w-24 mx-auto" />
          <p className="text-foreground/45 tracking-wide leading-[1.75]">
            Writing on systems, operations, and building in public.
          </p>
        </header>

        <div className="space-y-24">
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
              className="space-y-9"
            >
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.24em] text-foreground/35 sm:justify-start">
                  <span>Time to read: {entry.readTime}</span>
                  <span className="hidden h-px w-6 bg-foreground/15 sm:block" />
                  <span>Type: {entry.type}</span>
                </div>

                <div className="space-y-3 text-center sm:text-left">
                  <p className="text-brand/50 text-sm tracking-widest uppercase">
                    {entry.date}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold leading-snug tracking-wide">
                    {entry.title}
                  </h2>
                </div>
              </div>

              <div className="space-y-7 text-lg leading-[1.75] text-foreground/60">
                {entry.sections.map((section) => (
                  <p key={section}>{section}</p>
                ))}
              </div>

              {index < journalEntries.length - 1 && (
                <div className="h-px bg-foreground/10" />
              )}
            </motion.article>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
