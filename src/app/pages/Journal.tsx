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
    label: "Field Note 1",
    title: "The Hackathon Blew a Gasket. Page Seven Performed the Autopsy.",
    readTime: "6 min read",
    type: "Builder",
    date: "Aug 12, 2026",
    comingSoon: false,
    sections: [
      "May 20th, 12:00 UTC. The daily.dev Public API Hackathon opened, five days, fully async, build something for developers from developers. I picked my idea fast: a VS Code extension called daily context. Highlight any code snippet, get instantly matched, relevant developer articles pulled straight from daily.dev's API, right there in the sidebar. No commands. No shortcuts. Just highlight and read.",
      "Day one, it worked. Real API calls, real keyword extraction pulling context out of whatever you'd highlighted. Day two, I fixed the deselect behavior, added a better pattern for larger selections, ran the edge cases, six for six passed, and shipped a landing page. Clean scaffold, real progress, live and deployed. I remember actually thinking, huh, this one's going to be easy.",
      "Reader, it was not going to be easy.",
      "Because day two is also exactly where the six most dangerous words in software development showed up, uninvited, wearing ambition's shirt. \"But what if we also added...\" I had a working extension. It solved the actual problem. And I wanted more, richer article matching, deeper context, features nobody asked me to build in a five-day async hackathon. That's the whole horror movie right there. Scope creep doesn't kick your door down, it shows up looking exactly like ambition, and by the time you notice it isn't, you're already off the clock you actually had.",
      "Then life did what life does. Days three and four just evaporated, a full workday both days on top of everything else everybody's quietly carrying whether they post about it or not. I told myself I'd pick it back up Saturday.",
      "Saturday, my mom's car broke down. I spent the day running her around instead of coding, which, correctly, was never actually a choice worth debating.",
      "That left Sunday. One day, and I was already burned out and honestly a little lost on where I'd even left off. I tapped out that morning, semi-sick, embarrassed, extension and landing page both still up, still working, still exactly as good as they'd been on day two. I should have shipped right there and called it done. Instead I wanted to add more first.",
      "The actual scene, if you want it: 7am Sunday, sleep-deprived, physically twitching a little, lying there with what I can only describe as two pitbulls in my brain tearing into each other over how cocky I'd been, thinking I could treat shipping software like something you squeeze in at the end with zero planning. No, sir. I paid for that one in full.",
      "For the record: the tool still worked. I never shipped anything broken. I just never packaged what I had, because the version I wanted to ship was always the next one, the one with the feature I hadn't built yet, instead of the thing already sitting there, live, functional, done.",
      "Here's the part actually worth writing down, though. That hackathon was never really about the hackathon. It was the same story I'd been telling myself since November, on a loop, like a very persistent, very annoying subscription I forgot to cancel: I'm not organized enough yet. Where's the documentation. You can't repeat what you can't explain. Keep learning. Keep practicing. It'll click eventually.",
      "It clicked eventually. Just not in a way that makes a good opening line at a party.",
      "It clicked on page seven of a book called Software Requirements, in a chapter about the different levels and types of requirements, which might be the single least thrilling sentence I have ever typed in something meant to hook a reader. And yet. That's the one. That's the page where a decade of half-finished systems thinking finally stopped rattling around my skull and turned into something repeatable: plan, document, model, test, test again, and, fun fact nobody tells you going in, you never actually stop testing. Or shipping.",
      "The chasm",
      "Bolt that onto what I'd been pulling out of Rob Walling's books, and something that used to feel like standing in a burning kitchen started feeling like a process.",
      "Early in one of them, there's a chasm between entrepreneur and developer, and it's exactly what I keep coming back to. Because here's the honest version of what's actually been driving this whole thing, and I say this as someone who's spent over a decade inside property management and remote, distributed teams, not as an outside observer with opinions: property management can genuinely work for everyone in it. Homeowners want their home taken care of. Tenants want a dignified place to live without having to chase anyone down for a repair. Vendors want clear scope and to get paid on time. None of that is a fantasy, and none of it requires anyone to lose.",
      "But too often, someone's expectations are unrealistic, or communication falls through a crack nobody owns, or the work exists somewhere but nobody can see where it stands. Not because people in this industry don't care. If anything, it's the opposite, this is a genuinely passionate industry, full of people who take pride in doing it right. The problem isn't will. It's that the systems holding the work together are usually held together with duct tape, group chats, and someone's memory.",
      "Reading Walling is where \"microentrepreneurship\" stopped being a buzzword and started being a road map. I'm not walking in with a fix nobody asked for. I've lived both sides of this, property management and remote distributed teams, long enough to see the exact same failure points repeat themselves for over ten years. That's not a lecture. That's just what happens when you stay in a room long enough to watch the same thing break over and over. This industry, and honestly remote work in general, isn't going anywhere. It doesn't have to hurt this much to run, though.",
      "So, I went and built some tools.",
      "What's actually landed since",
      "Nine months since the first iteration. One exploded hackathon. One requirements book that somehow saved my life. A few hundred pages of Rob Walling. And two of the tools quietly crossed a real line this month, out of \"repo on my laptop\" and into something a stranger could actually click into and use.",
      "TechSync Ops went from local proof-of-concept to a live, hosted staging loop, a real API, real docs a stranger can read without cloning anything, and its own set of very stupid, very specific bugs along the way. TurnFlow Home went from an MVP demo to something that finally behaves like it knows what it's doing, proof required, before anyone can claim they did the work, no more mystery buttons.",
      "Both get their own full write-up soon, the \"Wet Paint sign that dried three governments ago\" story deserves more room than a paragraph here can give it. TechSync Ops in a couple of days. TurnFlow Home right after that.",
      "For now: the tools are still not finished. They are never going to be finished, that's simply not how any of this works, ask anyone who's shipped anything. You build a bridge across one gap. Then another. Then you turn the bridges into a process. Then you keep going, because the alternative is standing at the edge of the first gap forever, which, respectfully, is a worse use of a decade.",
      "But the tools are serious now.",
      "And so, apparently, am I.",
      "More soon.",
    ],
  },
  {
    label: "Field Note 2",
    title: "The API Went Dark For a Minute. Then It Said 'I Was Here The Whole Time.'",
    readTime: "Coming soon",
    type: "Builder",
    date: "",
    sections: [],
    comingSoon: true,
  },
  {
    label: "Field Note 3",
    title: "The Picture Frame Was Real. The Picture Was Not.",
    readTime: "Coming soon",
    type: "Builder",
    date: "",
    sections: [],
    comingSoon: true,
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
          <p className="max-w-2xl text-lg leading-[1.8] tracking-wide text-foreground/55 md:text-xl">
            Writing about property management, operations, PropTech, tool
            builds, lessons, and the occasional vent that might turn into a
            case study.
          </p>
        </header>

        <div className="border-y border-foreground/10">
          {journalEntries.map((entry, index) => {
            const isComingSoon = entry.comingSoon;
            const isOpen = openEntry === entry.title && !isComingSoon;

            return (
              <motion.article
                key={entry.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.15 + index * 0.12,
                  ease: "easeIn",
                }}
                className={`border-b border-foreground/10 last:border-b-0 ${
                  isComingSoon ? "opacity-55" : ""
                }`}
              >
                <button
                  type="button"
                  disabled={isComingSoon}
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenEntry(isOpen ? null : entry.title)
                  }
                  className={`group grid w-full gap-5 py-7 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 md:grid-cols-[11rem_1fr_6rem] ${
                    isComingSoon ? "cursor-default" : ""
                  }`}
                >
                  <div className="space-y-2">
                    <p className="text-sm tracking-widest uppercase text-brand/55">
                      {entry.label}
                      {entry.date ? ` / ${entry.date}` : ""}
                    </p>
                    <p className="text-xs uppercase tracking-[0.24em] text-foreground/35">
                      {entry.type}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h2
                      className={`text-2xl sm:text-3xl font-bold leading-snug tracking-wide transition-colors ${
                        isComingSoon
                          ? "text-foreground/45"
                          : "text-foreground group-hover:text-brand"
                      }`}
                    >
                      {entry.title}
                    </h2>
                    <p className="text-sm uppercase tracking-[0.24em] text-foreground/35">
                      {entry.readTime}
                    </p>
                  </div>

                  <div className="flex items-start justify-start md:justify-end">
                    {!isComingSoon && (
                      <span className="border border-foreground/15 px-3 py-1 font-display text-sm tracking-wide text-foreground/45">
                        {isOpen ? "Close" : "Open"}
                      </span>
                    )}
                  </div>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="max-w-4xl space-y-9 pb-12 md:ml-[11rem]">
                      {entry.sections.map((section) => (
                        <p
                          key={section}
                          className="text-xl leading-[1.85] text-foreground/72 md:text-2xl"
                        >
                          {section}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.article>
            );
          })}
        </div>
      </motion.section>
    </main>
  );
}
