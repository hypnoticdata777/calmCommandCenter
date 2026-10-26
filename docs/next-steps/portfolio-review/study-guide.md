# Mobile reading copy

[HTML original with 13 flowcharts](study-guide.html) · [Add your review](review.md)

This text copy is derived from the HTML guide. Flowcharts are in the HTML original; algorithms and pseudocode are included below.

Portfolio Architecture — A Practical Study Guide

h777 · Study guide · Plan before implementation

# From Journal to Tools:
understanding your portfolio architecture

A patient, practical walkthrough con un poquito de Spanglish. Algorithms, pseudocode, offline flowcharts, phase gates, and exercises.

Prepared October 2026. Repository observations reflect the planning session. No website implementation is included in this document.Print / Save as PDF Download HTML

Self-contained: no external scripts, fonts, or diagram services. Open the downloaded file in a browser. External GitHub links require Internet access.

Open the companion review worksheet · Open the GitHub-editable review

## 1. The big idea / La idea central

Your portfolio should explain a chain of reasoning: problem → reflection → design → tool → evidence → source code.

Imagine a small museum. Tools is the exhibition directory. Each project page is an exhibit. Journal is the creator’s notebook. Lab is the workshop where visitors can see how an idea is being tested. GitHub is the workshop’s technical archive.

A visitor should understand what you built, why you built it, what you personally contributed, and what works today. Eso vale más than adding fancy animations to an unclear story.

Scope: this guide explains the proposed portfolio architecture and page/linking algorithms. It does not document the internal algorithms of PM Ops Map, TechSync, or the other applications. Those require inspecting their source. This is a study and implementation plan, not an implemented release.

## 2. Vocabulary you actually need

 | Term | Plain explanation | Example

 | Algorithm | A repeatable recipe of steps and decisions. | Find published articles connected to one project.

 | Pseudocode | The recipe written like code, without language syntax requirements. | IF project missing: RETURN NotFound.

 | Flowchart | A map of execution. Arrows mean “what happens next.” | A failed lookup branches to 404.

 | Route | A URL path mapped to a page. | /work/pm-ops-map

 | Canonical URL | The preferred public address for a piece of content. | Retain an existing case-study address.

 | Registry | A structured catalog of project identities and metadata. | Project ID, name, maturity, and path.

 | Relationship | A deliberate connection between two content records. | An article explains a TechSync design decision.

 | Prerender | Generate useful HTML during the build, before browser JavaScript runs. | A direct article request already contains its metadata.

 | Invariant | A rule that must remain true. | Every relationship references existing records.

## 3. Inventory: what exists and what we propose

The observations below come from the portfolio repository inspected during planning. They are not fresh audits of the tools’ own repositories.

 | Project | Current portfolio evidence | Proposed destination | Source

 | PM Ops Map | Dedicated case study, local screenshots | /work/pm-ops-map — retain | pm-ops-map

 | TechSync Ops | Case study, screenshots, role-aware Lab explanation | /work/techsync-ops — retain | Techsync; verify existing destination

 | TurnFlow Home | Case study and screenshots | /work/turnflow-home — retain | turnflow-mvp

 | m3ldSync | Lab explanation and source/assets links | /tools/m3ldsync — new | m3ldSync

 | VendorRadar | Lab concept marked Designing | /tools/vendor-radar — new | Not established; do not invent

 | EmailVault | English and Spanish Journal coverage | /tools/emailvault — new | Not established; verify before linking

“Role-aware maintenance lanes” is an explanation attached to TechSync, not a separate product. The portfolio itself could become a future case study, once we have a clear story and evidence.

## 4. Navigation and the page template

Home · Tools · Journal · Lab · About · Contact

One Tools navigation item scales better than six project tabs. On mobile, six product tabs plus the other sections would turn navigation into a crowded menu. Think of Tools as the table of contents, not a row of every chapter title.

Make /tools the full directory. Keep /work as the curated case-study collection and preserve existing /work/:slug addresses. The visible Work navigation label becomes Tools. This mixed URL structure is a deliberate compatibility compromise; moving everything now creates redirects and SEO work without improving the core story.

 | Page section | Question it answers

 | Overview and maturity | What is this, and how finished is it?

 | The problem | Whose problem does it solve?

 | My contribution | What did you personally build or decide?

 | How it works | What happens in the main workflow?

 | Evidence | What can I inspect rather than merely believe?

 | Decisions and limits | What tradeoffs and unfinished work remain?

 | Related Journal | Where can I understand the thinking?

 | Source and next step | Where can I inspect code or try a confirmed demo?

Use an “On this page” anchor menu, not hidden content panels. An anchor such as #decisions moves the reader to visible content and supports direct section links. Preserve the site’s serif typography, restrained motion, themes, and responsive layout.

## 5. Data modeling / Organizar antes de renderizar

A registry is like a library catalog: it identifies the book, but does not duplicate every chapter. Keep existing case-study and Journal bodies as their content source. Add a small catalog that connects them.

```text
type Project = {
  id: string; // Stable, even if the name or maturity changes
  name: string;
  canonicalPath: string;
  maturity: "design" | "poc" | "staging" | "released";
  summary: string;
  publicDisplayApproved: boolean;
  sourceUrl?: string;
  documentationUrl?: string;
  demoUrl?: string;
  demoAvailabilityConfirmed?: boolean;
  featuredOrder?: number;
};

type ProjectJournalLink = {
  projectId: string;
  journalId: string; // Shared identity across translations
  relationship: "origin" | "design-decision" | "build-note" | "lesson";
  explanation: string;
  order: number;
};
```

Why stable IDs? “EmailVault” might change its display name later. A relationship should survive that change. Use an ID as the library barcode; use the title as the text on the cover.

Why explicit links? Keyword matching “maintenance” could connect nearly everything. Explicit relationships tell us that an article explains a specific decision. Store that connection once and derive both directions, so one page cannot forget to link back.

```text
// Illustrative proposed relationship, subject to editorial approval:
{
  projectId: "techsync-ops",
  journalId: "the-api-went-dark",
  relationship: "build-note",
  explanation: "Explains an API troubleshooting episode behind the tool.",
  order: 1
}
```

TypeScript checks shapes at development time; it does not prove that an ID exists or that a URL works. Build-time validation must check those rules separately. Avoid introducing a database or CMS for six projects unless editing needs actually justify it.

## 6. Algorithm A: build the Tools directory
- Read the project registry and select records approved for public display.
- Apply the selected maturity filter, if any.
- Sort by editorial order; treat missing order as last, then sort by name.
- Render cards with truthful status labels and canonical links.
- Show a useful empty state when nothing matches.

```text
FUNCTION buildDirectory(projects, selectedMaturity):
    visible = projects WHERE publicDisplayApproved = true
    IF selectedMaturity exists:
        visible = visible WHERE maturity = selectedMaturity
    SORT visible BY (featuredOrder OR infinity), name
    IF visible is empty:
        RETURN "No projects match this filter"
    RETURN projectCards(visible)
```

## 7. Algorithm B: resolve a project page
- Look up the request path in the project registry.
- If it does not resolve, show the existing not-found page.
- Load the existing or new content record associated with that project ID.
- Resolve published Journal relationships and optional actions.
- Render the page and generate metadata from the same record.

```text
FUNCTION renderProject(requestPath):
    project = projectByCanonicalPath(requestPath)
    IF project does not exist:
        RETURN NotFound
    content = loadProjectContent(project.id)
    articles = relatedPublishedArticles(project.id, readerLanguage)
    actions = availableActions(project)
    RETURN ProjectPage(project, content, articles, actions,
                       metadataFrom(project, content))
```

## 8. Algorithm C: link Journal and projects
- Find relationship records with this project ID.
- Validate both endpoints before publication.
- Resolve a published article in the reader’s language when available.
- If unavailable, choose the original published version and identify its language.
- Sort by relationship order and remove repeated article identities.
- For an article page, reverse the lookup to derive related project cards.

```text
FUNCTION relatedPublishedArticles(projectId, language):
    results = []
    FOR link IN relationships WHERE projectId matches:
        article = preferredPublishedTranslation(link.journalId, language)
        IF article does not exist:
            article = originalPublishedArticle(link.journalId)
        IF article exists:
            ADD (article, link.relationship, link.explanation, link.order)
                TO results
    RETURN deduplicateByArticleId(sortByOrder(results))

FUNCTION relatedProjects(journalId):
    links = relationships WHERE journalId matches
    RETURN uniquePublicProjects(resolveProjects(links))
```

## 9. Algorithm D: show only usable actions
- Include View source only when a repository destination is recorded.
- Include documentation only when a destination is recorded.
- Include a demo only when its destination and availability have been confirmed.
- Label a staging demo as staging.
- Omit unavailable actions; do not fill the page with dead buttons.

```text
FUNCTION availableActions(project):
    actions = []
    IF project.sourceUrl exists:
        ADD ("View source", project.sourceUrl) TO actions
    IF project.documentationUrl exists:
        ADD ("Read documentation", project.documentationUrl) TO actions
    IF project.demoUrl exists AND project.demoAvailabilityConfirmed:
        ADD (demoLabelFor(project.maturity), project.demoUrl) TO actions
    RETURN actions
```

## 10. Project recipe: PM Ops Map

Path: /work/pm-ops-map · Presentation: Built / open source

### Written algorithm / La receta

Lead with day-one operational structure. Retain the existing case study and screenshots. Connect approved operations writing, then expose source, release, and documentation destinations where recorded.

### Pseudocode

```text
page = renderProject("/work/pm-ops-map")
emphasize(page, "Day-one operational structure")
includeExistingScreenshots(page)
connectApprovedJournal(page, "origin or lesson")
showAvailableActions(page)
RETURN page
```

### Visitor flow

Study check: Can a reader tell what is implemented, what is proposed, and where to inspect evidence? If not, this page is not finished.

## 11. Project recipe: TechSync Ops

Path: /work/techsync-ops · Presentation: Hosted staging / synthetic-data POC

### Written algorithm / La receta

Explain role-specific handoffs and show existing role screenshots. Preserve the staging boundary. Link the role-aware Lab explanation and approved build notes. Verify source and staging destinations before exposing actions.

### Pseudocode

```text
page = renderProject("/work/techsync-ops")
displayMaturity(page, "Hosted staging / synthetic-data POC")
includeExistingRoleScreenshots(page)
linkLabExplanation(page, "role-aware-maintenance-lanes")
connectApprovedJournal(page, "build-note or design-decision")
showConfirmedSourceAndStagingActions(page)
RETURN page
```

### Visitor flow

Study check: Can a reader tell what is implemented, what is proposed, and where to inspect evidence? If not, this page is not finished.

## 12. Project recipe: TurnFlow Home

Path: /work/turnflow-home · Presentation: Launch-oriented SaaS POC candidate

### Written algorithm / La receta

Explain homeowner maintenance history and proof. Differentiate this audience from TechSync’s PMC operations audience. Reuse screenshots and connect approved writing about evidence and completion.

### Pseudocode

```text
page = renderProject("/work/turnflow-home")
emphasize(page, "Homeowner maintenance history and proof")
includeExistingScreenshots(page)
explainAudienceAndBoundaries(page)
connectApprovedJournal(page, "origin or lesson")
showAvailableActions(page)
RETURN page
```

### Visitor flow

Study check: Can a reader tell what is implemented, what is proposed, and where to inspect evidence? If not, this page is not finished.

## 13. Project recipe: m3ldSync

Path: /tools/m3ldsync · Presentation: POC

### Written algorithm / La receta

Create a dedicated page from approved Lab material. Explain reconciliation at portfolio level; do not claim the pseudocode is a verified implementation of the tool. Use verified public assets and keep the POC label.

### Pseudocode

```text
page = renderProject("/tools/m3ldsync")
displayMaturity(page, "POC")
reuseApprovedLabExplanation(page)
includeVerifiedPublicAssets(page)
connectApprovedJournal(page)
showAvailableActions(page)
RETURN page
```

### Visitor flow

Study check: Can a reader tell what is implemented, what is proposed, and where to inspect evidence? If not, this page is not finished.

## 14. Project recipe: VendorRadar

Path: /tools/vendor-radar · Presentation: Design

### Written algorithm / La receta

Present the vendor-memory problem and proposed workflow. Separate intended behavior from implemented behavior. Explain open questions and the next evidence milestone. No invented repository or demo.

### Pseudocode

```text
page = renderProject("/tools/vendor-radar")
displayMaturity(page, "Design")
labelProposedWorkflow(page)
showOpenDesignQuestions(page)
showNextEvidenceMilestone(page)
showAvailableActions(page) // Only recorded destinations
RETURN page
```

### Visitor flow

Study check: Can a reader tell what is implemented, what is proposed, and where to inspect evidence? If not, this page is not finished.

## 15. Project recipe: EmailVault

Path: /tools/emailvault · Presentation: Maturity to verify before publication

### Written algorithm / La receta

Ground the page in the English and Spanish articles. Date capability evidence and distinguish recorded capabilities from planned work. The articles describe OAuth groundwork and preservation boundaries; do not turn that into a claim of completed live Gmail ingestion.

### Pseudocode

```text
page = renderProject("/tools/emailvault")
describeCapabilitiesWithEvidenceDates(page)
separateRecordedCapabilitiesFromPlannedWork(page)
connectJournal(page, "emailvault-needed-boundaries")
resolveSpanishTranslationWhenAvailable(page)
showAvailableActions(page)
RETURN page
```

### Visitor flow

Study check: Can a reader tell what is implemented, what is proposed, and where to inspect evidence? If not, this page is not finished.

## 16. How React and Vite fit together

React is the exhibit builder. It turns project data into reusable components. React Router chooses which exhibit to show based on the address. Vite is the development and build workshop. It serves modules during development and produces production assets.

The existing SEO script adds another important stage: build-time route HTML. A page must agree in three places: browser rendering, prerendered HTML, and sitemap. Updating only the React router is not enough.

### Likely implementation touchpoints
- src/app/data/: project registry and relationship records.
- src/app/AppRouter.tsx: Tools directory and new detail routes.
- src/app/components/Navbar.tsx: desktop/mobile labels and active navigation.
- src/app/pages/WorkCaseStudy.tsx: preserve established case-study behavior.
- src/app/pages/Lab.tsx: link concepts to project pages without duplicating entire case studies.
- scripts/prerender-seo.mjs and sitemap handling: include the new public pages.
- tests/: relationships, routes, optional actions, and regressions.

These are planned touchpoints, not a claim that these files have been modified.

## 17. Publication algorithm and maturity

A project can mature from design to POC to staging or release, but this is not an automatic conveyor belt. A local tool can be released without hosted staging. Promotion requires evidence and editorial judgment; a polished screenshot alone is insufficient.

Keep the stable project ID and canonical URL when maturity changes. A new status should not break old Journal links.

```text
FUNCTION preparePublication(projects, articles, relationships):
    REQUIRE uniqueProjectIdsAndCanonicalPaths()
    REQUIRE allRelationshipReferencesResolve()
    REQUIRE publicPagesHaveRequiredContent()
    REQUIRE noUnpublishedArticleLeaks()
    REQUIRE optionalActionsHaveValidDestinations()

    routes = derivePublicRoutes(projects, articles)
    generatePrerenderedPages(routes)
    generateOrValidateSitemap(routes)

    REQUIRE metadataMatchesVisibleContent()
    REQUIRE internalLinksResolve()
    REQUIRE existingRoutesStillWork()
    REQUIRE requiredChecksPass()
    RETURN reviewableRelease
```

Environment publication and website deployment are different operations. The onboarding snapshot prepares development tooling; it does not publish website content. This guide proposes a website release process without selecting or changing the current hosting provider.

## 18. Phase plan and visual tracker

Work in small slices. First make one complete vertical journey work: directory → existing project → Journal → project again. Then expand coverage. This catches architectural mistakes before copying them six times.

 | Phase | Deliverable | Exit condition | Current state

 | 0 — Design | Inventory, algorithms, diagrams, this guide | Review the proposed structure | Delivered for review

 | 1 — Foundation | Registry, Tools directory, integrate existing pages | Three established case studies still work; directory works | Planned

 | 2 — Coverage | m3ldSync, VendorRadar, EmailVault pages | Accurate status, evidence, and available links | Planned

 | 3 — Connections | Shared relationships and language selection | Correct links in both directions, no duplicates | Planned

 | 4 — Release | SEO integration, accessibility, regression checks | Required checks and representative journeys pass | Planned

For Phase 1, use a minimal real relationship to prove the model; Phase 3 completes migration of the relationship set. Do not defer all linking design until after every page is built. Verify missing repository destinations and dated capability claims Introduce stable project/article identities Build Tools directory and desktop/mobile navigation Preserve existing case-study URLs and content Validate one complete directory–project–Journal journey Add three missing project pages Consolidate duplicated relationship records Handle English/Spanish article fallback explicitly Update prerendering and sitemap coverage Test unknown routes, unpublished articles, and missing actions Check keyboard, mobile, both themes, and reduced motion Run type checks, tests, lint, build, and performance budget

Checkboxes are an interactive study aid for this open document. They are not saved project status and do not persist after reloading.

## 19. Testing: prove behavior, not just compilation

Compilation is like checking whether a recipe uses valid words. Tests and browser checks ask whether the meal actually comes out correctly.

 | Check | What it should establish

 | Registry validation | Unique IDs and routes; all relationship endpoints exist.

 | Rendering behavior | Unknown projects show 404; missing source/demo destinations produce no dead buttons.

 | Relationship tests | Only published articles, correct language fallback, stable ordering, reverse links, no duplicates.

 | Browser journeys | Directory → project → Journal → project, including mobile and keyboard navigation.

 | SEO checks | New routes have prerendered HTML, canonical metadata, structured data, sitemap entries, and appropriate language metadata where applicable.

 | Regression checks | Existing Work and Journal URLs and their content remain available.

 | Performance | Images and bundle remain within the repository budget.

```text
# Existing repository checks, run from /workspace/calmCommandCenter
npm run typecheck
npm test
npm run lint
npm run build
npm run validate:performance

# Equivalent combined type-check/build command:
npm run build:check
```

During onboarding, the existing type check, build, six tests, lint, performance budget, and 24 production route checks passed. That is a baseline from that session, not validation of this unimplemented proposal. New routes will require new checks; do not hardcode 24 as the permanent expected count.

## 20. Professor’s pushback / Ojo con esto
- More pages are not automatically a better portfolio. Each page needs a reason to exist, your contribution, evidence, and an honest boundary.
- One navigation tab per product is too much. Use one directory and clear project cards.
- Do not rebuild existing case studies unnecessarily. Reuse the working data/template foundation and preserve URLs.
- Do not move every URL for cosmetic consistency. The mixed /work and /tools paths are acceptable now; revisit with redirects only if a real benefit appears.
- Do not equate attractive design with product readiness. VendorRadar remains a concept until implementation evidence supports a different claim.
- Do not claim tool internals from marketing copy. These page recipes organize explanations; they do not verify business algorithms or backend authorization.
- Do not duplicate connections in two places. One relationship record should drive both directions.
- Do not add a CMS, backend, or complex graph engine prematurely. Six projects need disciplined records and simple lookups, not infrastructure at scale.
- Do not hide unfinished work behind vague labels. “POC” should be followed by concrete capabilities and concrete limitations.
- Do not call the change finished after a successful build. Read the actual pages, follow links, and inspect generated HTML.

## 21. Study exercises and worked answers

Exercise 1: A project changes its name. Which field should remain stable?

The project ID. You may update the display name without breaking relationships. Prefer retaining the canonical path unless a migration is justified.

Exercise 2: EmailVault has an English article and a Spanish translation. How many relationship records do we need for that article’s project connection?

One relationship to the language-independent article identity. Translation resolution chooses the visible version. This requires explicit translation identity; matching slugs by guesswork is not sufficient.

Exercise 3: VendorRadar has no confirmed repository. What should the page do?

Render the concept and its design status. Omit the source action. Never fabricate a repository URL from the name.

Exercise 4: A Journal article references two tools. Is that allowed?

Yes. This is a many-to-many relationship: one article can explain several projects, and one project can have several articles. Each connection should explain why it exists.

Exercise 5: A new page works after navigation but has generic HTML when directly requested. What did we miss?

Likely the prerender or metadata integration. Check route generation, page-specific static HTML, canonical metadata, and sitemap coverage.

Exercise 6: Why keep a “design-decision” label on a relationship?

It gives a reader a reason to click. “Why I separated homeowner and operator workflows” explains the connection better than an unlabeled list of article titles.

### Teach it back / Explícalo en tus palabras

“My Tools directory lists projects. Each project has a stable identity, an honest maturity label, and one canonical page. Journal relationships explain why a project exists and which decisions shaped it. React renders that data, while the build generates matching public HTML. We validate references and user journeys before deploying.”Study guide for calmCommandCenter · Proposed portfolio architecture, not verified tool internals · All flowcharts are embedded SVG with accessible text labels.