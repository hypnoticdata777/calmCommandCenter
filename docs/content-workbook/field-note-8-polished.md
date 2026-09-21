# Field Note 8 Draft

## Don't Hire Another Laptop. Fix the Lockfile.

## What This Is About

This note is about a mistake every growing team eventually makes.

The work gets heavy, so the first answer sounds obvious: hire another person.

But sometimes the problem is not that the team lacks hands. Sometimes the problem is that the work only moves because one person remembers where everything is, what happened last, who is waiting, and what still needs to close.

That kind of system does not need another laptop. It needs a lockfile.

In software, a lockfile is the boring little record that tells a new machine exactly what the project needs to run. No guessing. No "it works on my laptop." No secret memory.

In operations, the lockfile is the log, checklist, owner, status, due date, shared inbox, and handoff trail that lets a stranger pick up the work without asking the same three people what happened.

So the point of this Field Note is simple: before you count people, count loops. Can a task be found? Can it be handed off? Can it be finished without one person carrying the whole memory of the room?

## The Fresh Server Test

This week, my project passed its tests. All 286 of them.

That sounds done.

Then I tried to install it on a fresh server, which is basically a clean computer that has none of my laptop's memory, shortcuts, old files, or accidental help.

It failed in seconds.

Not because the app was broken. Because my laptop had been quietly helping in ways the project had not written down.

That is the cleanest version of the operations problem I know: it worked when the person with the history touched it. It failed when a stranger had to run it from the instructions.

That is what "works on my machine" really means. It does not mean the system is finished. It means the system is borrowing memory from one person.

After years in property management, this is the operating pattern I keep recognizing. The task "works" when the coordinator remembers the owner texted them directly. The task "works" when the admin knows which workspace setting is hidden behind which login. The task "works" when the person who was on the phone last Thursday remembers that the vendor was waiting on access, not approval.

But if the next person has to ask around to figure out where things stand, the system is not really running yet.

It is running on someone's laptop.

## The Four Clocks

Every task runs on four clocks.

Doing time is the work itself. Finding time is locating where the task last stood. Waiting time is the gap until the next person moves. Re-explaining time is the cost of handing the work to somebody else.

Hiring adds doing time. That matters. But doing time is only one clock.

If the other three clocks are leaking, the new person does not just receive work. They also receive confusion, delay, and a pile of "quick questions."

That is why adding chairs does not shorten a broken handoff. It just gives the handoff a larger audience.

## Clock One: Doing Time

Doing time is easy to see. It is the inspection, the call, the quote, the email, the build, the repair.

This is why hiring feels like the obvious answer. More people means more available hours, and more hours should mean more work gets done.

Sometimes that is true.

But doing time is the visible part. It is the part everyone can point at. The hidden part is everything that happens before someone can confidently do the work.

In my build, the tests were the doing time. They proved the code could behave correctly once it was already running.

But the fresh server test asked a different question: can someone new get this running from zero?

That is a very different test. And it is the same test a team runs every time a new hire starts.

## Clock Two: Finding Time

Finding time is the tax you pay when the system does not remember.

In the code, I hit this with a migration runner.

Plain English: a migration is a script that updates the database. It might create a table, rename a column, or add the structure the app expects.

The migration runner started, showed a loading spinner, and then did not clearly say what happened.

The tables existed. The journal did not.

Meaning: parts of the database structure had been created, but the tracking record that says "these setup steps already ran" was missing.

So the system had evidence of activity, but not a clean memory of progress.

That is exactly what finding time feels like in operations. There is an email somewhere. There was a call. Someone said the vendor was going Tuesday. Someone else thinks the owner approved it.

The work moved, but the trail did not.

Now the next person is not doing the task. They are reconstructing the task.

That is why logs matter. When every invite sent, resent, canceled, or accepted writes itself into the record, the next person does not have to ask where things stand.

The row already says.

A group chat is not a database. It is a conversation with a search bar and a bad memory.

## Clock Three: Waiting Time

Waiting time is what happens when the work knows the next move, but the system is waiting on one person to unlock it.

This is a familiar property-management pattern, not a new lesson. Owners email one person directly instead of the shared inbox. A routine workspace setting waits on the only person with the right keys. A vendor plan gets described in chat, but nobody owns the next dated step.

A simple pump repair shows the difference.

The plan was not mysterious: inspect the pump, then reschedule based on what the inspection showed.

That is a real plan. But until someone owns it to a date, it is still only narration.

This is where a middle manager should work like a control tower. Not as the extra pair of hands. As the person making sure every plane is visible, every runway is owned, and nobody is flying through fog because the update lives in the wrong thread.

## Clock Four: Re-Explaining Time

Re-explaining time is what happens when a handoff is technically possible but not actually smooth.

I saw this in the invite flow.

A vendor with a valid invite used to log in, then hit a second approval step to confirm what the invite had already confirmed.

That is like asking someone already standing in your kitchen if they are sure they want to come inside.

The fix was small, but the lesson was big: if the link already proves who they are and where they belong, the system should carry them there.

No extra explanation. No second ritual. No "quick note" from a human just to make the software understandable.

I also built a panel that explained the whole loop to the user. Then I deleted it.

Because sometimes an explanatory panel is not clarity. Sometimes it is a receipt for a workflow that still needs work.

The best version is not a product that explains the maze. The best version is fewer turns in the maze.

## The Team Of One

I have also run this experiment on myself.

One person. A day job. A degree. A build that mostly gets the night shift.

When the work piled up, my first answer was the oldest one in the book: more hours.

Stay up later. Wake up earlier. Push through.

One night I was still typing after midnight and back up before sunrise to post on time.

That got the post out. But it did not solve the actual system.

Because the hard part was not always writing. Sometimes the hard part was finding the material: one note in an email, one analogy in a chat, one build detail in a dev log, one loose idea in my head.

The extra hours were not turning into extra output. They were turning into search time.

What helped was not a more heroic night. It was a better memory.

One repo. One content log. One place for loose ends. One place where future me can show up tired and still find the thread.

That is the personal version of the same lesson.

If the work only moves when one person remembers everything, the system is fragile.

Even when that one person is you.

## So What Do You Count?

This is why I started mapping actions, roles, and events as:

1. Covered
2. Visible only
3. Logged but not obvious
4. Missing

It looks like a testing document.

It is really a hiring document.

Because it answers the question nobody asks before a req goes out: do we need another person, or do we need another row?

Do we need more hands, or do we need the system to remember where the hands left off?

That queasy feeling in the middle of an operation is not always a people shortage. Sometimes it is the feeling of not knowing whether the loop is open, closed, duplicated, waiting, blocked, or floating around in someone's inbox.

So before the next req goes out, ask four things:

1. Where does this task's clock actually run?
2. How long does it take to find where it last stood?
3. How much routes through one person?
4. What is closed, and what has only been described really well?

Because if your operation only works on one person's machine, you do not have a team.

You have a laptop with feelings.

Don't hire another laptop.

Fix the lockfile.

Next Field Note: what changes when you stop counting people and start counting loops.
