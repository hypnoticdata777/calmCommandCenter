import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { JournalBody } from "../components/JournalBody";
import { Seo } from "../components/Seo";

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

export const journalEntries = [
  {
    label: "Field Note 1",
    slug: "the-hackathon-blew-a-gasket",
    title: "The Hackathon Blew a Gasket. Page Seven Performed the Autopsy.",
    readTime: "6 min read",
    type: "Builder",
    date: "Aug 12, 2026",
    dateISO: "2026-08-12",
    excerpt:
      "A field note about an ambitious hackathon build, scope creep, requirements, and the moment h777 started becoming a serious tool portfolio.",
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
    slug: "the-api-went-dark",
    title: "The API Went Dark For a Minute. Then It Said 'I Was Here The Whole Time.'",
    readTime: "8 min read",
    type: "Builder",
    date: "Aug 19, 2026",
    dateISO: "2026-08-19",
    excerpt:
      "A field note about TechSync leaving localhost, staging exposing the truth, and why deployed software teaches different lessons than a local build.",
    comingSoon: false,
    sections: [
      "TechSync finally escaped localhost. Naturally, its first act in the outside world was to pretend it did not exist.",
      "Not Found. Fair enough.",
      "I checked the API root again. Not Found. Fine. Swagger? Not Found.",
      "At this point Vercel had stopped behaving like infrastructure and started behaving like someone who had read my message, disabled the read receipts, and decided we both knew what happened.",
      "This was slightly inconvenient because, for all intents and purposes, the API was supposed to be there. And technically, it was.",
      "We eventually fixed the route forwarding and Swagger appeared, perfectly cheerful, as though it had not just participated in a small psychological experiment.",
      "Oh, hello. I was here the whole time. Of course you were.",
      "A Few Months Earlier",
      "Back in January, I was entering the final required year of my Computer Systems Engineering degree.",
      "I was happy about that. I was also tired. Those two things are apparently allowed to exist at the same time.",
      "Every year in engineering has changed the way I organize information in my head.",
      "At first, programming feels like learning a collection of strange words and punctuation invented by people who apparently considered semicolons a personality trait.",
      "Eventually something shifts. You stop seeing isolated commands. You start seeing structures.",
      "A function belongs somewhere. An event causes something else. Data moves through a system. One component depends on another. Something breaks over here because somebody made an assumption three abstractions away.",
      "The code becomes less mysterious. Unfortunately, this does not mean the computer becomes more cooperative.",
      "Sometimes you understand the architecture reasonably well and the machine still responds: Not Found. Which, philosophically, is a fantastic error message. Technically, less useful.",
      "TechSync Leaves the Garage",
      "Until this build session, TechSync Ops still had one foot firmly inside proof-of-concept territory.",
      "It ran. There was code. There were workflows. There was a repository. All respectable things.",
      "But there is a very important difference between: I can run this, and: Here is the URL.",
      "This session crossed that line.",
      "The FastAPI backend went live on Vercel.",
      "The root endpoint, /health, and /docs became accessible. Swagger documentation was now available to somebody other than the person who already knew how everything worked.",
      "The Expo web client went live separately.",
      "Frontend and backend got their own Vercel projects, with the client pointing toward the hosted API through EXPO_PUBLIC_API_BASE_URL.",
      "Neon was populated with synthetic users, clients, vendors, properties, work orders, messages, events, and attachments.",
      "That last part matters more than it sounds.",
      "There is a gigantic difference between opening an application and opening an application that looks like somebody was doing business there before you arrived.",
      "TechSync finally had context.",
      "Not customer data. Not production. Not me putting sunglasses on a staging environment and introducing it as enterprise software.",
      "A real staged product loop. You could visit it. Log in. Move around. See work. Break things. Which we promptly did.",
      "This Is Why Staging Exists",
      "One of the first casualties was logout.",
      "Local testing had been reasonably polite about it. Live testing was not. Good. That is exactly what staging is supposed to expose.",
      "Testing exclusively on localhost is a little like testing an airplane by driving it around the airport parking lot.",
      "The engine starts. Steering works. The radio is excellent. You might even congratulate yourself on the landing gear.",
      "Eventually, however, somebody has to point out that the bastard needs to fly.",
      "Deployment is when gravity finally gets invited to the meeting.",
      "Now you have routing. Hosting configuration. Environment variables. External databases. Different URLs. Real authentication flows.",
      "And an internet that has absolutely no emotional investment in the fact that everything worked perfectly on your laptop.",
      "The admin workflow exposed another problem.",
      "We had a Show Risk action that technically worked.",
      "You clicked it. The system focused the highest-risk work item. Success. Except the user experience was essentially:",
      "I have focused the risk. Good luck noticing.",
      "That is not a workflow. That is a scavenger hunt.",
      "So we changed it.",
      "Now the admin workspace identifies the highest-risk item and can actually route the user toward it instead of quietly changing some invisible piece of state and expecting applause.",
      "That is one of the things operations taught me before software ever did:",
      "A process does not work merely because every individual step technically occurred.",
      "Humans have to understand what happened next.",
      "Documentation Also Has an Expiration Date",
      "The README joined the rebellion.",
      "It still claimed there was no web admin panel.",
      "Meanwhile, I was sitting in a browser clicking around an admin workspace.",
      "Technically, the README had been correct. Previously.",
      "Documentation apparently has the shelf life of an avocado.",
      "So we truth-aligned it.",
      "TechSync now says what it actually is: a staged demo product with hosted surfaces, not a customer-production system.",
      "Admin and coordinator workflows exist inside the Expo web client. Deeper desktop-grade polish is still ahead.",
      "Less impressive? Maybe. More credible? Absolutely.",
      "I would rather have documentation undersell reality than make the software wear a fake moustache and introduce itself as enterprise-ready.",
      "Then There Was the Grocery List",
      "One deployment also failed because Vercel tried to process the requirements file and discovered something closer to a breadcrumb trail than an actual grocery list.",
      "Tiny configuration problem. Massive dramatic red failure screen.",
      "Software is magnificent this way.",
      "You can build authentication, model several business entities, connect a database to an API, deploy a frontend halfway across the internet, and then lose twenty minutes because one small text file has opinions.",
      "The local workflow had become ridiculous too.",
      "Terminals. Environment variables. Neon connection strings. Clipboard gymnastics. Different processes running in different windows.",
      "At some point local development became so irritating that it effectively bullied me into hosting the application sooner.",
      "In retrospect? Fair.",
      "Because the moment TechSync became accessible from a URL, I stopped testing only whether the code worked.",
      "I started testing whether the product worked.",
      "Those are not the same question.",
      "The Part I Don't Particularly Enjoy",
      "I like evidence. A lot.",
      "I want the logs. I want reproduction steps. I want the exact line that failed. I want the receipt, the timestamp, three witnesses and, as we say in Mexico, los pelos de la burra confirming exactly which donkey we are discussing.",
      "Uncertainty annoys me.",
      "Which makes software development an interesting profession to become increasingly obsessed with.",
      "Sometimes you solve something cleanly. Other times you change the most likely cause, rerun the system and suddenly everything works.",
      "Then you stare at it. Was that definitely it? Probably. Can I reproduce the failure perfectly? No. Will it happen again next Tuesday at 2:17 p.m. because Jupiter crossed a load balancer? We'll find out.",
      "And you move forward.",
      "I have been learning the same lesson outside software.",
      "This year I have been working full time, helping care for my parents, trying to be there for my son, finishing an engineering degree and, because apparently my calendar looked suspiciously comfortable, completing social service too.",
      "There is always more you could do.",
      "Another hour. Another course. Another feature. Another check. Another contingency plan.",
      "At some point, the pursuit of certainty becomes another form of standing still.",
      "So I am slowly becoming comfortable with an uncomfortable combination:",
      "Demand evidence from the system.",
      "Allow some uncertainty in yourself.",
      "Test. Inspect. Learn. Make the best decision available. Then move.",
      "The Problem Was Never the Dashboard",
      "Property management taught me this long before TechSync did.",
      "If a resident reports cockroaches, entering a note into the software is not pest control.",
      "Sending one vendor an email and checking three days later is not follow-up.",
      "You call. You coordinate. You get the date. You close the loop.",
      "Software is useful only when it helps the work move.",
      "Putting sophisticated software on top of a broken operational process is a little like bolting a Formula 1 steering wheel onto a supermarket cart with one wheel permanently pulling left.",
      "Now you have twelve buttons. Telemetry. Carbon fiber. Something labeled DRS. Very exciting.",
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
      "a hosted API, live documentation, a separately hosted web client, a synthetic business environment, clearer role experiences, real admin risk routing, and, most importantly, the ability to encounter problems localhost had been politely hiding from me.",
      "There is plenty left.",
      "More UX work. More testing. More desktop polish. More bugs currently enjoying their final days of anonymity.",
      "That is fine.",
      "Back in January, I wanted to become better at building software.",
      "The irritating answer turned out to be the obvious one:",
      "Build software. Let it fail. Figure out why. Build again.",
      "You are, what you repeatedly spend your time doing.",
      "And sometimes the evidence that you're becoming a developer is not that everything finally works.",
      "Sometimes it is staring at a screen that says Not Found, knowing something is wrong, and trusting yourself enough to go looking.",
      "The API eventually came back.",
      "I'm still not entirely convinced it ever left.",
    ],
  },
  {
    label: "Field Note 3",
    slug: "the-picture-frame-was-real",
    title: "The Picture Frame Was Real. The Picture Wasn't.",
    readTime: "7 min read",
    type: "Builder",
    date: "Aug 22, 2026",
    dateISO: "2026-08-22",
    excerpt:
      "A field note about TurnFlow Home, missing screenshots, proof, transparency, and the difference between a frame around a thing and the thing itself.",
    comingSoon: false,
    sections: [
      "TurnFlow Home finally had a proper public homepage.",
      "This was progress because, until now, visiting TurnFlow was rather like walking into a hotel and immediately being handed a room key by a man who refused to tell you the name of the hotel.",
      "LOGIN.",
      "Login to what?",
      "Never mind that. Credentials, please.",
      "So we fixed it.",
      "TurnFlow now had a landing page explaining what it was, who it was for, what homeowners could actually do with it, and where they could sign up. There was navigation. There was copy. There were screenshots.",
      "It looked suspiciously like real software.",
      "Except one of the screenshots wasn't a screenshot.",
      "Technically, the image existed. The filename existed. The browser asked for a PNG. The server confidently responded with HTML, which is rather like ordering a photograph of your grandmother and receiving the restaurant's lunch menu.",
      "The computer saw no problem with this.",
      "As far as it was concerned, the picture frame existed, something had been placed inside it, and therefore everyone should stop asking difficult questions.",
      "I had built a haunted picture frame.",
      "We eventually fixed the proxy configuration, the PNG resumed its traditional career as a PNG, and the homepage stopped behaving like an art installation about disappointment.",
      "Tiny bug.",
      "Unfortunately, it was also an almost perfect metaphor for why TurnFlow exists.",
      "Because I had spent years watching property maintenance encounter versions of the same problem.",
      "The frame was there.",
      "The label was there.",
      "Everything around the work suggested there should be a picture.",
      "But when somebody actually needed to see it, things sometimes became strangely philosophical.",
      "The Trust Me, Bro Benchmark",
      "A maintenance request comes in.",
      "A contractor gets the work order, says they'll fit it into their schedule, and disappears temporarily into that mysterious dimension inhabited by plumbers, cable technicians, and anyone who has ever promised to arrive \"between eight and four.\"",
      "This isn't a criticism of contractors.",
      "Field work is messy. Schedules move. Parts don't arrive. A repair that looks simple from a work order can turn into something entirely different once somebody opens the wall.",
      "The problem begins when those changes don't travel through the system particularly well.",
      "Someone follows up.",
      "Then someone follows up with the person responsible for following up.",
      "Then someone follows up on the follow-up to determine whether the original follow-up was, in fact, followed up.",
      "And then, suddenly: Done.",
      "Brilliant.",
      "Except perhaps the price changed.",
      "Maybe another repair was discovered. Maybe additional materials were required. Possibly a basement doorknob became involved.",
      "Did we have a photograph?",
      "Not always.",
      "Was the scope change clearly recorded?",
      "Sometimes.",
      "Could everyone looking at the job reconstruct exactly what happened without calling three people?",
      "That was considerably less certain.",
      "Somewhere during those years I started joking that property operations had accidentally developed its own unit of evidence: The Trust Me, Bro Benchmark.",
      "Vendor tells coordinator. Coordinator tells manager. Manager tells owner. Later somebody asks whether the information is correct. The chain travels backwards.",
      "By the time the answer returns, it has covered more territory than Marco Polo while somehow carrying less luggage.",
      "Nobody needs to be dishonest for this to happen.",
      "That's the interesting part.",
      "Every person involved can be acting in perfectly good faith and the system can still lose context because the information moves while the evidence stays behind.",
      "It's like passing an evidence bag through eight people except there's a small hole in the bottom and everybody only holds it long enough not to notice.",
      "A photograph falls out.",
      "Then a material receipt.",
      "Then the change in scope.",
      "Then the basement doorknob enters witness protection.",
      "Eventually the homeowner receives: Repair complete. $850.",
      "Splendid.",
      "For what?",
      "Yes.",
      "The $850 Mystery Box",
      "Property management companies need to make money.",
      "This should not be controversial unless your preferred business model involves starvation.",
      "Contractors need margins too. Coordinating maintenance costs money. Scheduling vendors costs money. Inspecting work costs money. Finding somebody willing to investigate a leaking water heater at 8:43 on a Sunday evening costs money and possibly part of your soul.",
      "None of that bothers me.",
      "What interested me was how easily the final price could become detached from the story that produced it.",
      "An owner gets an invoice.",
      "$850.",
      "Beautiful logo. Invoice number. Payment terms. Possibly a tasteful blue line across the top so you know serious accounting has occurred.",
      "But what was the original scope?",
      "What changed?",
      "What materials were used?",
      "Was there a coordination component?",
      "Did another issue appear during the repair?",
      "There may be perfectly reasonable answers to every one of those questions.",
      "The difficulty is when reconstructing them requires archaeology.",
      "The final number then has roughly the explanatory power of a restaurant receipt that says: FOOD - $164.",
      "Maybe the meal genuinely was worth $164.",
      "That's not the point.",
      "I kept coming back to one principle: The price should be able to survive being looked at.",
      "If the contractor charged one amount and management or coordination legitimately added another, fine.",
      "If three qualified vendors independently arrive around the same price, even better.",
      "Now the owner has something considerably more useful than reassurance: comparison.",
      "Maybe $850 really is the market.",
      "Perhaps copper now has to be carried across the Andes by mule.",
      "Fine.",
      "At least the number has a family history.",
      "TurnFlow isn't supposed to solve the eternal argument over what constitutes a \"fair\" contractor price.",
      "Software can't do that.",
      "Labor markets differ. Contractors differ. Buildings differ. Emergencies differ. And some walls, once opened, reveal things last seen in archaeological documentaries.",
      "The problem isn't that $850 might be expensive.",
      "The problem is when understanding why it is $850 becomes unnecessarily difficult.",
      "Transparency Is Not an Accusation",
      "There's another part of this that matters.",
      "Questions can sound adversarial even when they aren't meant that way.",
      "Can I see the underlying invoice?",
      "Can we get a photograph?",
      "Can we compare another estimate?",
      "Sometimes those questions sound like: I don't trust you.",
      "But they don't have to mean that.",
      "Asking to see the speedometer isn't accusing the driver of lying about the speed.",
      "Sometimes you simply want to know how fast the car is going.",
      "And there are plenty of perfectly innocent reasons information disappears.",
      "People forget. Scope changes. A vendor discovers another problem. A manager is juggling fifty jobs. An owner lives thousands of miles away. A photograph lands in the wrong text thread. Somebody remembers $650 as $850.",
      "None of this requires a villain.",
      "It requires a system designed for actual human beings rather than the fictional creatures business-process diagrams assume we are.",
      "I happen to like evidence.",
      "Probably more than is socially convenient.",
      "I want the receipt, timestamp, photograph, estimate, scope, and exact thing we're discussing.",
      "As we say in Mexico, los pelos de la burra.",
      "Engineering has only made this worse.",
      "Software teaches you very quickly that when a system says something happened, one of the next useful questions is: Where are the logs?",
      "Property operations had been teaching me essentially the same lesson for years.",
      "I just didn't have the vocabulary for it yet.",
      "The strongest systems aren't the ones where nobody asks questions.",
      "They're the ones that remain useful when somebody does.",
      "Then I Started Asking a Different Question",
      "Eventually I stopped asking why information kept getting lost and started wondering what the process would look like if the evidence simply travelled with the work.",
      "What if the photograph stayed attached to the task?",
      "What if a scope change carried its explanation with it?",
      "What if an invoice kept enough of its family history that an owner didn't need a minor in forensic accounting to understand it?",
      "What if complete meant something slightly more ambitious than somebody clicking a green button?",
      "And what if an owner sitting in Belgium could understand what happened at a property in San Diego without making six phone calls across three time zones?",
      "That question became TurnFlow.",
      "The haunted screenshot eventually loaded.",
      "Proxy fixed. PNG served. Picture frame successfully exorcised.",
      "But the larger problem was considerably more interesting.",
      "A system can contain the route. The filename. The label. The status. Everything surrounding the thing you're looking for.",
      "And still somehow not contain the thing itself.",
      "I wanted to see what happened if we built the opposite.",
      "Turns out complete is an astonishingly ambitious word.",
      "More on that next.",
    ],
  },
  {
    label: "Field Note 4",
    slug: "complete-is-an-astonishingly-ambitious-word",
    title: "Complete Is an Astonishingly Ambitious Word.",
    readTime: "6 min read",
    type: "Builder",
    date: "Aug 26, 2026",
    dateISO: "2026-08-26",
    excerpt:
      "A field note about TurnFlow Home, maintenance proof, remote ownership, receipts, and why complete should mean the work can survive being looked at.",
    comingSoon: false,
    sections: [
      "There are very few words in property maintenance doing more unpaid labor than complete.",
      "Faucet repaired?",
      "Complete.",
      "Drywall patched?",
      "Complete.",
      "Basement doorknob replaced?",
      "Also complete.",
      "Photographs? Ah.",
      "Now we're being difficult.",
      "The point, if you do not feel like scrolling through a full six-minute essay with me: complete should mean the work can survive being looked at.",
      "That sounds obvious until a repair passes through a tenant, a manager, a coordinator, a vendor, three text threads, one invoice, and somebody named Mike who is apparently the only person who knows where the photo went.",
      "That is when complete stops being a status and starts acting like a rumor wearing a hard hat.",
      "The problem with complete is not that people use the word. We need the word. The problem is that everybody understands it until you ask what evidence qualifies something to receive it.",
      "Then suddenly we're discussing philosophy with a leaking sink in the background.",
      "TurnFlow exists partly because I wanted complete to mean something slightly more concrete.",
      "Not perfect. Not infallible. Just observable.",
      "Imagine Belgium",
      "Suppose you own a rental property in San Diego.",
      "You do not live in San Diego. You live in Belgium.",
      "A tenant reports a leaking kitchen sink, which is a very rude thing for water to do when you are several thousand miles away and emotionally unavailable for cabinetry problems.",
      "Wonderful.",
      "Traditionally, this begins the sacred property management ritual.",
      "Tenant tells manager.",
      "Manager tells coordinator.",
      "Coordinator contacts vendor.",
      "Vendor visits.",
      "Vendor discovers something unexpected.",
      "Someone texts somebody.",
      "Someone else forgets an attachment.",
      "Three days later an invoice appears in your inbox looking extremely confident.",
      "The owner's problem is not always mistrust.",
      "It is distance.",
      "More specifically, informational distance.",
      "You cannot inspect the sink. You cannot stand beside the contractor. You may not know what plumbing costs in San Diego. You may not even know whether the original leak and the final invoice are still spiritually connected.",
      "So the better version is simple.",
      "Open the request.",
      "There is the complaint.",
      "There are the photos.",
      "There is the scope.",
      "There are the bids.",
      "There is the change.",
      "There is the final proof.",
      "Qualified vendors can bid against the same defined problem.",
      "Now you do not need to be a plumbing scholar with a minor in Southern California pricing. You have context.",
      "If three thermometers all say it is 39 degrees outside, you do not need a degree in atmospheric science to conclude that perhaps a jacket would be useful.",
      "Bids do not tell you the perfect price. They tell you whether the number has neighbors.",
      "And a number with neighbors is much less suspicious than a number that walks into the room alone wearing sunglasses.",
      "Then Someone Gets the Job",
      "Suppose the selected scope says: repair the kitchen faucet; replace the basement doorknob; patch the damaged drywall.",
      "Great.",
      "Now someone performs the work.",
      "This is where I want the software to become mildly annoying.",
      "Because clicking COMPLETE should require something.",
      "If there are three tasks, the evidence should match the three tasks.",
      "Before photo.",
      "After photo.",
      "Materials if materials mattered.",
      "Notes if the scope changed.",
      "Not one heroic photograph from across the hallway followed by: Everything looks good.",
      "That is not verification.",
      "That is landscape photography.",
      "The owner in Belgium should be able to ask, \"Did the basement doorknob actually get replaced?\" and nobody should have to convene a diplomatic summit.",
      "Open the task.",
      "Look at the proof.",
      "There it is.",
      "Remote verification will never be perfect. The minute old buildings, people, scheduling, and plumbing enter the same room, perfection quietly grabs its coat.",
      "But the goal is not perfection.",
      "The goal is less fog.",
      "The Grocery Bag Problem",
      "Here is the analogy I keep coming back to.",
      "A maintenance job is like sending someone to the store with a list.",
      "You asked for bread, eggs, coffee, and paper towels.",
      "They come back, place one grocery bag on the counter, and say: Done.",
      "Reasonable.",
      "But then you look inside.",
      "There is bread.",
      "There are eggs.",
      "There is a crumpled note.",
      "There is also a garden hose, two batteries, and a very expensive cheese nobody remembers approving.",
      "The coffee is missing.",
      "The paper towels may or may not have been substituted with napkins.",
      "And when you ask what happened, everyone involved starts reconstructing the trip from memory.",
      "Well, the store was out.",
      "Actually, there were two stores.",
      "The hose was urgent.",
      "The cheese was technically cheaper than the other cheese.",
      "The receipt is in someone's car.",
      "This is exactly how too much maintenance feels.",
      "The work may have been done. The people may be honest. The price may even be fair.",
      "But the story arrived home in pieces.",
      "A good system keeps the list, the substitution, the approval, the receipt, and the photo in the same bag.",
      "That is the difference.",
      "Not more paperwork.",
      "Less guessing.",
      "The Form Was Applying for Federal Funding",
      "Of course, there is another way to ruin this idea.",
      "Ask for so much information that nobody wants to use the system.",
      "Maintenance software has an amazing ability to take: My ceiling is leaking.",
      "And respond: Excellent. Please complete Sections A through Q and attach three forms of identification.",
      "Some forms behave like the homeowner is not reporting a faucet but requesting permission to construct a hydroelectric dam.",
      "Evidence is valuable.",
      "Bureaucracy is not automatically evidence.",
      "So the request flow should separate what is required from what is helpful.",
      "What happened?",
      "Where?",
      "Give enough information to create the request.",
      "Save the draft.",
      "Then, if you have another thirty seconds, future-you and whichever poor soul inherits the problem would appreciate photos, access notes, scheduling context, and anything else that prevents a mystery later.",
      "The form should basically say: You can stop here. But everyone downstream will like you more if you keep going.",
      "That distinction matters.",
      "The goal is not to collect every possible field.",
      "The goal is to help useful information survive the trip.",
      "Who Has the Keys?",
      "The account page matters for the same reason.",
      "What started as plain account settings becomes more interesting when you ask a simple question: Who can see this?",
      "Homeowners should know what is private, who has access, which invitations are active, and what requests have been shared.",
      "Basically: Who has keys to my house?",
      "Except instead of standing in the driveway trying to remember who got access three repairs ago, there is a screen.",
      "That is not a small thing.",
      "If the software asks contractors and managers to be more transparent, the software has to live under the same rule.",
      "Transparency cannot be a flashlight that only points at everybody else.",
      "The Point",
      "This is what I keep building toward.",
      "Not distrust.",
      "Receipts.",
      "People often use the word trust as though the ideal business relationship is one where nobody ever verifies anything.",
      "I think that is backwards.",
      "Healthy trust makes verification boring.",
      "What happened?",
      "Here it is.",
      "What changed?",
      "Here it is.",
      "Why did the price change?",
      "Here it is.",
      "Nobody has to get defensive because the system already remembers.",
      "And that matters because human memory is a terrible database. It has no audit log, unreliable search, and occasionally updates old records while pretending it did no such thing.",
      "So let the work remember.",
      "Let the request keep the photos.",
      "Let the bid keep the scope.",
      "Let the invoice keep the explanation.",
      "Let the account show who had access.",
      "Let the completed job carry enough proof that six months later, when someone asks what happened, the answer is not a group project.",
      "TurnFlow is not trying to replace trust.",
      "It is trying to stop making trust perform jobs better suited to documentation.",
      "Because complete is an astonishingly ambitious word.",
      "It should mean more than: Somebody said so.",
      "Give it the photo.",
      "Give it the scope.",
      "Give it the invoice.",
      "Give it the before and after.",
      "Let trust arrive with receipts.",
      "Then nobody has to take my word for it.",
      "Don't trust me.",
      "Look.",
    ],
  },
  {
    label: "Field Note 5",
    slug: "the-silent-killer-of-property-management-operations",
    title: "The Silent Killer of Property Management Operations",
    readTime: "12 min read",
    type: "Operations",
    date: "Aug 31, 2026",
    dateISO: "2026-08-31",
    excerpt:
      "A field note about unverified information becoming operational truth, why property management handoffs drift, and how to make truth checkable before it travels.",
    comingSoon: false,
    sections: [
      `The most dangerous sentence in property management might be: I thought it was handled.`,
      `Not because the person saying it is lazy. Not because the team does not care. Not because everyone arrived at work, poured coffee, opened the laptop, and decided to perform a small administrative tragedy in three acts.`,
      `It is dangerous because it usually appears after something has already moved forward.`,
      `A status was trusted. A tracker was believed. A message was forwarded. A charge was processed. A vendor was treated as approved. A unit was treated as ready.`,
      `Then reality clears its throat.`,
      `The point, if you only have the first scroll: the silent killer is unverified information becoming operational truth. The antidote is making truth checkable before it travels.`,
      `Stay for the bruised nail, the haunted tracker, the vacancy status pileup, and the expensive lesson hiding inside perfectly normal paperwork.`,
      `Not the mistake itself. The promotion.`,
      `The moment a maybe becomes a yes. The moment “someone said” becomes “we told the owner.” The moment “I think” becomes the plan.`,
      `The question that catches it is brutally simple:`,
      `How do we know this is true?`,
      `Not as an accusation. As an operating habit.`,
      `Before the owner update. Before the vendor dispatch. Before the legal handoff. Before the leasing plan. Before the recurring charge runs again.`,
      `The Bruised Nail And The Spreadsheet`,
      `Saturday, my dad and I did a two-hour hike. Good weather, good pace, one of those mornings where everybody comes back a little more relaxed than they left.`,
      `On the way back to the truck, tired legs and mind already somewhere else, he reached up to shut the overhead door and did not clear his hand out of the frame fast enough. Crushed one nail pretty good, barely touched the other.`,
      `True to form, he tried to shrug it off for about an hour before anyone convinced him to get it looked at. It turned out fine. No break. Just a nail he is going to lose and a few days of typing carefully.`,
      `But what he said afterward was not really about the finger.`,
      `It was closer to needing to trust his own hands again.`,
      `One tired moment at the end of an otherwise great day, and he filed it away like it said something bigger about him than it actually did.`,
      `So I sent him a few lines instead of the usual “feel better soon.” Something about confidence rebuilding the same way it gets built the first time: constancy, one good thing added to the scale at a time, not a single ruling handed down from one bad afternoon.`,
      `He loved it, same as he always has since I was a kid handing him little rhymes.`,
      `But it stuck with me longer than it probably should have for a bruised nail, because a few days earlier I had almost the exact same conversation.`,
      `Just with a tracker instead of a father.`,
      `Somewhere in my own work that week, a document got vouched for as accurate, current, grounded in reality. Three promises. None of them actually checked deeply enough before someone had to stand behind them.`,
      `Underneath “accurate” was a silence someone had quietly filed as handled. Underneath “current” was a shared file that was not really shared in the practical sense. Underneath “grounded in reality” was a gap that had been sitting open long enough to start charging rent.`,
      `Nobody lied.`,
      `That is the part people want to skip past.`,
      `Every person in that chain believed what they were reporting. The tracker simply accumulated confidence faster than it accumulated proof. And I was the one standing there when somebody asked me to defend a document I had not verified line by line myself yet.`,
      `So I built a test. Three buckets. Nothing fancier than that.`,
      `What I control and can check myself. What depends on someone else answering me, chaseable but not forceable. What was already broken before it reached my desk, and calling that “my accuracy problem” only gives somebody else’s unverified gap a new owner.`,
      `Same week. Same lesson wearing two different outfits.`,
      `My dad needed proof he could trust himself again, and one bad afternoon was never going to hand him that proof. Not the version where he suddenly decides he is careless. Not the version where he waves it off and pretends nothing happened.`,
      `Real proof only shows up over time. The next hike. The next door. The next hundred ordinary moments where nothing goes wrong.`,
      `A tracker needs the exact same thing.`,
      `Not somebody insisting it is fine. Not somebody insisting it is not fine. A structure that can get checked against what is actually real, repeatedly, until “accurate” stops being a claim and starts being something you can point to.`,
      `La confianza se afianza.`,
      `Trust holds up the same way in a spreadsheet as it does in a father’s hands. It is never one clean moment. It is whatever keeps getting rechecked after.`,
      `Fixed Is Not A Magic Spell`,
      `Property management is built out of handoffs. One person hears the issue. Another updates a system. Another calls the vendor. Another talks to the owner. Another handles billing. Another explains the delay. Another gets yelled at by a door lock, which is not technically possible but emotionally accurate.`,
      `Every handoff creates a chance for confidence to outrun confirmation. That is where the damage starts.`,
      `Fixed is a lovely word. Short. Efficient. Reassuring. It sounds like the problem has collected its belongings and left the premises.`,
      `But in operations, fixed does not mean someone typed fixed. Fixed means the right thing was checked by the right person before the next person acted on it.`,
      `A lockbox issue gets reported as handled. Beautiful. Except if nobody confirms that the lockbox actually opens, that “handled” status can travel downstream like a tiny administrative missile.`,
      `Now someone tells a legal contact, an owner, a leasing person, or another vendor that access is solved. The next person shows up. The lockbox remains spiritually opposed to cooperation.`,
      `Suddenly the problem is no longer the lockbox. The problem is that an unverified status became truth.`,
      `The question was not: did somebody report it fixed?`,
      `How do we know access actually works before that status gets passed to someone outside the team?`,
      `If nobody asks that question, everyone gets to play the least popular property management board game ever invented: Who Confirmed This?`,
      `The rules are simple. Nobody wins. Everyone checks old messages.`,
      `Someone thought it was handled. Someone else was waiting on a response. A third person remembers seeing a thumbs-up somewhere, possibly in this lifetime.`,
      `Nobody had to be dishonest. The process simply allowed a status update to outrun confirmation.`,
      `That is the pattern. Not “the lockbox failed.” The truth loop failed.`,
      `Three Systems, No Adult Supervision`,
      `Every growing property management company eventually develops a small ecosystem of tools.`,
      `There is the property management system. There is the leasing or task system. There is the manual tracker. There is probably a spreadsheet called something like Final Real Updated Use This One v3 ACTUAL, which is how you know the organization is in a deeply spiritual place.`,
      `Each system has a version of reality.`,
      `The property system says a unit is vacant. The leasing pipeline says it is not ready. The tracker says someone still needs to confirm move-out. The team chat says, “I think this was already done.”`,
      `And now a simple question becomes a congressional hearing: Can we list this unit or not?`,
      `The problem is not that tools exist. Tools are useful. The problem is that nobody has clearly defined which source wins, when it wins, who updates it, and how disagreement gets caught before the next decision.`,
      `When systems disagree long enough, the company does not have multiple systems of record.`,
      `It has multiple rumors with passwords.`,
      `That matters because teams make real plans from those systems: leasing plans, maintenance plans, owner updates, budget expectations, staffing priorities.`,
      `The question is not: which system has a value?`,
      `How do we know which source is true before leasing, maintenance, or ownership acts on it?`,
      `If the source is wrong, the plan is wrong. And if the plan is wrong, the team looks disorganized even when everyone is working hard.`,
      `That is the cruelty of bad operational truth. It punishes effort.`,
      `Routine Is Where Errors Put On Pajamas`,
      `A one-time mistake is annoying. A recurring mistake is a machine.`,
      `That is why financial process errors are so dangerous. They rarely enter the room wearing a cape and announcing, “I am financial exposure.” They look normal.`,
      `A utility billback gets mapped wrong. A template carries the wrong assumption. A recurring charge behaves exactly like the process told it to behave.`,
      `Nobody catches it because no single invoice looks dramatic enough to stop the day.`,
      `But the problem is repeating. Quietly. Politely. With excellent attendance.`,
      `By the time someone audits it, the question changes from “What happened here?” to “How many times did this happen before we noticed?”`,
      `That is the difference between a mistake and a system problem.`,
      `A mistake creates cleanup. A system problem creates archaeology.`,
      `Now people are digging through old ledgers, old leases, old charges, old emails, and old explanations, trying to figure out where the process wandered off with the truth and joined a circus.`,
      `The question is not: did the charge run?`,
      `How do we know the process underneath the charge is still correct before it quietly repeats?`,
      `This is why recurring workflows need verification points. Not because teams are bad. Because repetition gives errors camouflage.`,
      `If something runs every month, it deserves periodic inspection. If something affects owner money, tenant money, or vendor payment, it deserves a confirmation loop. If something is automated, templated, copied forward, or “the way we always do it,” it deserves a second look.`,
      `Especially then.`,
      `Approved Vendor Is Not A Personality Trait`,
      `Vendor operations have their own version of this problem.`,
      `The phrase approved vendor sounds official. It feels like there should be a gate somewhere. Maybe a checklist. Perhaps a stamp. A clipboard. A person named Linda who takes compliance very seriously.`,
      `But often, approved vendor is doing heroic amounts of unpaid labor.`,
      `Approved how?`,
      `Approved for emergencies? Approved under a certain dollar limit? Approved for occupied units? Approved because insurance is current? Approved because they did one good job two years ago? Approved because they answered the phone once during a panic and everyone emotionally imprinted on them?`,
      `An approved vendor list without context is not vendor management. It is a phone book wearing a hard hat.`,
      `The useful question is not just whether a vendor is on the list. The useful question is what the company actually knows from working with them.`,
      `Do they respond? Do they send photos? Do they explain blockers? Do they respect approval limits? Do they invoice cleanly? Do they need to be chased? Do they do good physical work but create administrative smoke afterward?`,
      `That last one matters.`,
      `A vendor can perform the repair correctly and still create an operational mess if nobody knows who authorized the work, what was approved, where the photos are, or whether the invoice matches the scope.`,
      `The pipe can stop leaking while the process starts leaking. Different problem. Same floor.`,
      `The question is not: is this vendor approved?`,
      `How do we know what this vendor is approved for, and what happened the last time we trusted them with work?`,
      `This is why VendorRadar started feeling less like a vendor list and more like vendor memory.`,
      `The useful thing is not just knowing who exists. It is knowing what happened after the company said yes.`,
      `The Work Is Not The Work`,
      `The deeper I get into building these tools, the clearer the pattern becomes.`,
      `PM Ops Map is not just a task tool. It is a way to help new companies see what the operation even needs to track before everything starts living in somebody’s head.`,
      `TechSync Ops is not just maintenance software. It is a way to keep handoffs from disappearing between managers, techs, vendors, clients, and viewers.`,
      `TurnFlow Home is not just a homeowner maintenance workspace. It is a way to keep repair history from dissolving into texts, photos, invoices, and memory.`,
      `VendorRadar is not just a future vendor directory. It is a way to remember whether vendor trust is earned, current, scoped, and backed by actual work history.`,
      `Different tools. Same argument.`,
      `The work is not only doing the work.`,
      `The work is making sure the next person does not act on a guess.`,
      `That is the part that gets missed. A good operation does not merely move tasks forward. It protects truth while the task moves.`,
      `Who confirmed this? Which system is the source? Who owns the next step? What changed? Who needs to know? What should not be shared? What would make this status false?`,
      `Those questions are not bureaucracy.`,
      `They are the guardrails keeping the whole cart from flying into the canned beans.`,
      `The Antidote`,
      `So no, the silent killer is not one missed task, one bad vendor, or one wrong field in one system.`,
      `The silent killer is unverified information becoming operational truth.`,
      `And the antidote is not distrust.`,
      `It is operational verification.`,
      `Make truth checkable before it travels.`,
      `Fixed should carry confirmation. Vacant should point to one source of record. Normal charges should have audit points. Approved vendors should have context. Completed work should carry enough history that the next person does not have to perform archaeology before making a decision.`,
      `That is the job.`,
      `Not vibes. Not memory. Not the confident little sentence that says handled.`,
      `Property management is messy because reality changes faster than the systems around it. A resident reports something. A vendor sees something else. A manager interprets it. An owner asks for an update. A technician adds context. A bill arrives. A lease says one thing. A tracker says another.`,
      `And somewhere inside all of that, the company has to decide what is true before the next person acts.`,
      `That decision is operations.`,
      `Because once unverified information becomes truth, the company starts making confident decisions on bad ground.`,
      `That is how small issues become owner escalations. That is how routine charges become financial exposure. That is how vendor work becomes invoice confusion. That is how good teams burn out while still doing their best.`,
      `A company does not break only because the wrong thing happened.`,
      `It breaks when nobody checks whether the next person is about to act on something unverified.`,
      `So before the update, before the charge, before the dispatch, before the plan, before the confident little sentence that says handled, ask the question:`,
      `How do we know this is true?`,
      `Ask it early, and operations get calmer.`,
      `Ask it late, and the answer usually arrives from outside the team.`,
      `An owner. A resident. A court. A ledger.`,
      `By then, the question is no longer operational.`,
      `It is expensive.`,
    ],
  },
];

export const journalSubheads = new Set([
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
  "The Trust Me, Bro Benchmark",
  "The $850 Mystery Box",
  "Transparency Is Not an Accusation",
  "Then I Started Asking a Different Question",
  "Imagine Belgium",
  "Then Someone Gets the Job",
  "The Grocery Bag Problem",
  "The Form Was Applying for Federal Funding",
  "Who Has the Keys?",
  "The Point",
  "The Bruised Nail And The Spreadsheet",
  "Fixed Is Not A Magic Spell",
  "Three Systems, No Adult Supervision",
  "Routine Is Where Errors Put On Pajamas",
  "Approved Vendor Is Not A Personality Trait",
  "The Work Is Not The Work",
  "The Antidote",
]);

export const journalStrongLines = new Set([
  "The point, if you do not feel like scrolling through a full six-minute essay with me: complete should mean the work can survive being looked at.",
  "The point, if you only have the first scroll: the silent killer is unverified information becoming operational truth. The antidote is making truth checkable before it travels.",
  "How do we know this is true?",
  "How do we know access actually works before that status gets passed to someone outside the team?",
  "How do we know which source is true before leasing, maintenance, or ownership acts on it?",
  "How do we know the process underneath the charge is still correct before it quietly repeats?",
  "How do we know what this vendor is approved for, and what happened the last time we trusted them with work?",
  "Make truth checkable before it travels.",
]);

export function Journal() {
  const [openEntry, setOpenEntry] = useState<string | null>(null);

  function scrollToEntry(entryIndex: number) {
    document
      .getElementById(`journal-entry-${entryIndex}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="min-h-screen text-foreground px-6 py-28 sm:px-8 sm:py-32 relative z-10">
      <Seo
        title="Journal | Field Notes on PM Ops, PropTech, and Building"
        description="Field notes from h777 on property management operations, PropTech builds, maintenance workflows, proof, handoffs, and lessons from the messy middle."
        path="/journal"
        type="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "h777 Journal",
          description:
            "Field notes on property management operations, PropTech builds, maintenance workflows, proof, and handoffs.",
          url: "https://h777.dev/journal",
          isPartOf: {
            "@type": "WebSite",
            name: "h777",
            url: "https://h777.dev",
          },
          blogPost: journalEntries
            .filter((entry) => !entry.comingSoon)
            .map((entry) => ({
              "@type": "BlogPosting",
              headline: entry.title,
              datePublished: entry.dateISO,
              url: `https://h777.dev/journal/${entry.slug}`,
              author: {
                "@type": "Person",
                name: "Carlos Sanchez",
              },
            })),
        }}
      />
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
                id={`journal-entry-${index}`}
                key={entry.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.15 + index * 0.12,
                  ease: "easeIn",
                }}
                className={`scroll-mt-24 border-b border-foreground/10 last:border-b-0 ${
                  isComingSoon ? "opacity-55" : ""
                }`}
              >
                <div
                  className={`grid w-full gap-5 py-7 text-left md:grid-cols-[11rem_1fr_8rem] ${
                    isComingSoon ? "cursor-default" : ""
                  }`}
                >
                  <button
                    type="button"
                    disabled={isComingSoon}
                    aria-expanded={isOpen}
                    onClick={() => setOpenEntry(isOpen ? null : entry.title)}
                    className="group grid gap-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 md:col-span-2 md:grid-cols-[11rem_1fr]"
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
                  </button>

                  <div className="flex flex-wrap items-start gap-2 md:justify-end">
                    {!isComingSoon && (
                      <>
                        <button
                          type="button"
                          onClick={() => setOpenEntry(isOpen ? null : entry.title)}
                          className="border border-foreground/15 px-3 py-1 font-display text-sm tracking-wide text-foreground/45 transition-colors hover:border-foreground/30 hover:text-foreground/70"
                        >
                          {isOpen ? "Close" : "Preview"}
                        </button>
                        <Link
                          to={`/journal/${entry.slug}`}
                          className="border border-brand/25 px-3 py-1 font-display text-sm tracking-wide text-brand/75 transition-colors hover:bg-brand/10 hover:text-brand"
                        >
                          Read
                        </Link>
                      </>
                    )}
                  </div>
                </div>

                {isOpen && (
                  <motion.div
                    onClick={() => scrollToEntry(index)}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="cursor-ns-resize overflow-hidden"
                    title="Click anywhere in the article to return to its header."
                  >
                    <JournalBody
                      sections={entry.sections}
                      subheads={journalSubheads}
                      strongLines={journalStrongLines}
                    />
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
