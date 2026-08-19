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
    readTime: "8 min read",
    type: "Builder",
    date: "Aug 19, 2026",
    comingSoon: false,
    sections: [
      "TechSync finally escaped localhost. Naturally, its first act in the outside world was to pretend it did not exist.",
      "Not Found.",
      "Fair enough.",
      "I checked the API root again.",
      "Not Found.",
      "Fine.",
      "Swagger?",
      "Not Found.",
      "At this point Vercel had stopped behaving like infrastructure and started behaving like someone who had read my message, disabled the read receipts, and decided we both knew what happened.",
      "This was slightly inconvenient because, for all intents and purposes, the API was supposed to be there.",
      "And technically, it was.",
      "We eventually fixed the route forwarding and Swagger appeared, perfectly cheerful, as though it had not just participated in a small psychological experiment.",
      "Oh, hello. I was here the whole time.",
      "Of course you were.",
      "A Few Months Earlier",
      "Back in January, I was entering the final required year of my Computer Systems Engineering degree.",
      "I was happy about that.",
      "I was also tired.",
      "Those two things are apparently allowed to exist at the same time.",
      "Every year in engineering has changed the way I organize information in my head.",
      "At first, programming feels like learning a collection of strange words and punctuation invented by people who apparently considered semicolons a personality trait.",
      "Eventually something shifts.",
      "You stop seeing isolated commands.",
      "You start seeing structures.",
      "A function belongs somewhere. An event causes something else. Data moves through a system. One component depends on another. Something breaks over here because somebody made an assumption three abstractions away.",
      "The code becomes less mysterious.",
      "Unfortunately, this does not mean the computer becomes more cooperative.",
      "Sometimes you understand the architecture reasonably well and the machine still responds:",
      "Not Found.",
      "Which, philosophically, is a fantastic error message.",
      "Technically, less useful.",
      "TechSync Leaves the Garage",
      "Until this build session, TechSync Ops still had one foot firmly inside proof-of-concept territory.",
      "It ran.",
      "There was code.",
      "There were workflows.",
      "There was a repository.",
      "All respectable things.",
      "But there is a very important difference between:",
      "I can run this.",
      "and:",
      "Here is the URL.",
      "This session crossed that line.",
      "The FastAPI backend went live on Vercel.",
      "The root endpoint, /health, and /docs became accessible. Swagger documentation was now available to somebody other than the person who already knew how everything worked.",
      "The Expo web client went live separately.",
      "Frontend and backend got their own Vercel projects, with the client pointing toward the hosted API through EXPO_PUBLIC_API_BASE_URL.",
      "Neon was populated with synthetic users, clients, vendors, properties, work orders, messages, events, and attachments.",
      "That last part matters more than it sounds.",
      "There is a gigantic difference between opening an application and opening an application that looks like somebody was doing business there before you arrived.",
      "TechSync finally had context.",
      "Not customer data.",
      "Not production.",
      "Not me putting sunglasses on a staging environment and introducing it as enterprise software.",
      "A real staged product loop.",
      "You could visit it.",
      "Log in.",
      "Move around.",
      "See work.",
      "Break things.",
      "Which we promptly did.",
      "This Is Why Staging Exists",
      "One of the first casualties was logout.",
      "Local testing had been reasonably polite about it.",
      "Live testing was not.",
      "Good.",
      "That is exactly what staging is supposed to expose.",
      "Testing exclusively on localhost is a little like testing an airplane by driving it around the airport parking lot.",
      "The engine starts.",
      "Steering works.",
      "The radio is excellent.",
      "You might even congratulate yourself on the landing gear.",
      "Eventually, however, somebody has to point out that the bastard needs to fly.",
      "Deployment is when gravity finally gets invited to the meeting.",
      "Now you have routing.",
      "Hosting configuration.",
      "Environment variables.",
      "External databases.",
      "Different URLs.",
      "Real authentication flows.",
      "And an internet that has absolutely no emotional investment in the fact that everything worked perfectly on your laptop.",
      "The admin workflow exposed another problem.",
      "We had a Show Risk action that technically worked.",
      "You clicked it.",
      "The system focused the highest-risk work item.",
      "Success.",
      "Except the user experience was essentially:",
      "I have focused the risk. Good luck noticing.",
      "That is not a workflow.",
      "That is a scavenger hunt.",
      "So we changed it.",
      "Now the admin workspace identifies the highest-risk item and can actually route the user toward it instead of quietly changing some invisible piece of state and expecting applause.",
      "That is one of the things operations taught me before software ever did:",
      "A process does not work merely because every individual step technically occurred.",
      "Humans have to understand what happened next.",
      "Documentation Also Has an Expiration Date",
      "The README joined the rebellion.",
      "It still claimed there was no web admin panel.",
      "Meanwhile, I was sitting in a browser clicking around an admin workspace.",
      "Technically, the README had been correct.",
      "Previously.",
      "Documentation apparently has the shelf life of an avocado.",
      "So we truth-aligned it.",
      "TechSync now says what it actually is: a staged demo product with hosted surfaces, not a customer-production system.",
      "Admin and coordinator workflows exist inside the Expo web client. Deeper desktop-grade polish is still ahead.",
      "Less impressive?",
      "Maybe.",
      "More credible?",
      "Absolutely.",
      "I would rather have documentation undersell reality than make the software wear a fake moustache and introduce itself as enterprise-ready.",
      "Then There Was the Grocery List",
      "One deployment also failed because Vercel tried to process the requirements file and discovered something closer to a breadcrumb trail than an actual grocery list.",
      "Tiny configuration problem.",
      "Massive dramatic red failure screen.",
      "Software is magnificent this way.",
      "You can build authentication, model several business entities, connect a database to an API, deploy a frontend halfway across the internet, and then lose twenty minutes because one small text file has opinions.",
      "The local workflow had become ridiculous too.",
      "Terminals.",
      "Environment variables.",
      "Neon connection strings.",
      "Clipboard gymnastics.",
      "Different processes running in different windows.",
      "At some point local development became so irritating that it effectively bullied me into hosting the application sooner.",
      "In retrospect?",
      "Fair.",
      "Because the moment TechSync became accessible from a URL, I stopped testing only whether the code worked.",
      "I started testing whether the product worked.",
      "Those are not the same question.",
      "The Part I Don't Particularly Enjoy",
      "I like evidence.",
      "A lot.",
      "I want the logs.",
      "I want reproduction steps.",
      "I want the exact line that failed.",
      "I want the receipt, the timestamp, three witnesses and, as we say in Mexico, los pelos de la burra confirming exactly which donkey we are discussing.",
      "Uncertainty annoys me.",
      "Which makes software development an interesting profession to become increasingly obsessed with.",
      "Sometimes you solve something cleanly.",
      "Other times you change the most likely cause, rerun the system and suddenly everything works.",
      "Then you stare at it.",
      "Was that definitely it?",
      "Probably.",
      "Can I reproduce the failure perfectly?",
      "No.",
      "Will it happen again next Tuesday at 2:17 p.m. because Jupiter crossed a load balancer?",
      "We'll find out.",
      "And you move forward.",
      "I have been learning the same lesson outside software.",
      "This year I have been working full time, helping care for my parents, trying to be there for my son, finishing an engineering degree and, because apparently my calendar looked suspiciously comfortable, completing social service too.",
      "There is always more you could do.",
      "Another hour.",
      "Another course.",
      "Another feature.",
      "Another check.",
      "Another contingency plan.",
      "At some point, the pursuit of certainty becomes another form of standing still.",
      "So I am slowly becoming comfortable with an uncomfortable combination:",
      "Demand evidence from the system.",
      "Allow some uncertainty in yourself.",
      "Test.",
      "Inspect.",
      "Learn.",
      "Make the best decision available.",
      "Then move.",
      "The Problem Was Never the Dashboard",
      "Property management taught me this long before TechSync did.",
      "If a resident reports cockroaches, entering a note into the software is not pest control.",
      "Sending one vendor an email and checking three days later is not follow-up.",
      "You call.",
      "You coordinate.",
      "You get the date.",
      "You close the loop.",
      "Software is useful only when it helps the work move.",
      "Putting sophisticated software on top of a broken operational process is a little like bolting a Formula 1 steering wheel onto a supermarket cart with one wheel permanently pulling left.",
      "Now you have twelve buttons.",
      "Telemetry.",
      "Carbon fiber.",
      "Something labeled DRS.",
      "Very exciting.",
      "You're still heading directly into the canned beans.",
      "If nobody owns the work, nobody follows up, expectations are unclear, and completing one task requires consulting four different systems, another dashboard is not transformation.",
      "It is decoration.",
      "The problem was never the dashboard.",
      "We just gave confusion a login screen.",
      "So What Did We Actually Build?",
      "Thirteen commits would make a respectable changelog.",
      "But the changelog misses the important part.",
      "TechSync crossed a threshold.",
      "It went from a repository proof of concept into a live staged product loop with:",
      "a hosted API,",
      "live documentation,",
      "a separately hosted web client,",
      "a synthetic business environment,",
      "clearer role experiences,",
      "real admin risk routing,",
      "and, most importantly, the ability to encounter problems localhost had been politely hiding from me.",
      "There is plenty left.",
      "More UX work.",
      "More testing.",
      "More desktop polish.",
      "More bugs currently enjoying their final days of anonymity.",
      "That is fine.",
      "Back in January, I wanted to become better at building software.",
      "The irritating answer turned out to be the obvious one:",
      "Build software.",
      "Let it fail.",
      "Figure out why.",
      "Build again.",
      "You are, what you repeatedly spend your time doing.",
      "And sometimes the evidence that you're becoming a developer is not that everything finally works.",
      "Sometimes it is staring at a screen that says Not Found, knowing something is wrong, and trusting yourself enough to go looking.",
      "The API eventually came back.",
      "I'm still not entirely convinced it ever left.",
    ],
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

const journalSubheads = new Set([
  "The chasm",
  "What's actually landed since",
  "A Few Months Earlier",
  "TechSync Leaves the Garage",
  "This Is Why Staging Exists",
  "Documentation Also Has an Expiration Date",
  "Then There Was the Grocery List",
  "The Part I Don't Particularly Enjoy",
  "The Problem Was Never the Dashboard",
  "So What Did We Actually Build?",
]);

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
                      {entry.sections.map((section) =>
                        journalSubheads.has(section) ? (
                          <h3
                            key={section}
                            className="pt-5 font-display text-3xl font-bold leading-tight tracking-wide text-brand/85 md:text-4xl"
                          >
                            {section}
                          </h3>
                        ) : (
                          <p
                            key={section}
                            className="text-xl leading-[1.85] text-foreground/72 md:text-2xl"
                          >
                            {section}
                          </p>
                        )
                      )}
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
