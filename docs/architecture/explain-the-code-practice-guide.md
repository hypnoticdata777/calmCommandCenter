# Explain The Code Practice Guide

This guide turns the architecture docs into practice. Use it when you want to
explain the h777 codebase out loud without freezing or drifting into vague
answers.

## Goal

Be able to explain:

- how the app starts,
- how a URL becomes a page,
- how Journal and Work content render,
- how SEO is handled,
- why the app has prerender scripts,
- how validation protects the build,
- what the next architecture improvement should be.

## The 90-Second Explanation

Use this when someone asks, "How does your site work?"

> h777 is a Vite and React portfolio app. The browser starts at `index.html`,
> then `main.tsx` mounts the React app. `ThemeProvider` handles dark/light mode,
> and `BrowserRouter` lets the app respond to real URLs. `AppRouter.tsx` maps
> each route to a page, while `Layout.tsx` keeps the Navbar and animated
> background mounted across the whole site.
>
> The content is split into normal pages, Journal entries, and Work case
> studies. Journal entries are stored as structured data in `Journal.tsx`, and
> each article route reads the URL slug, finds the matching entry, and renders it
> through shared article components. Work case studies use the same idea, but
> their structured data lives in `workCaseStudies.ts`.
>
> For SEO, the site has two layers. `Seo.tsx` updates metadata when people
> navigate inside the React app. Then `scripts/prerender-seo.mjs` generates
> route-specific static HTML at build time so crawlers and social previews can
> read each public page immediately. After deploy, `validate-seo.mjs` checks the
> live site for titles, descriptions, canonical URLs, JSON-LD schema,
> breadcrumbs, sitemap routes, and social images.
>
> The main tradeoff is that some route metadata is duplicated across React,
> sitemap, prerender, and validation files. It works, and it is guarded by a
> release checklist, but the next maturity step would be a shared content
> manifest that generates those pieces from one source of truth.

## The 5-Minute Walkthrough

Use this when you want to sound more technical.

### 1. Startup

Start with:

- `index.html`
- `src/main.tsx`
- `src/app/AppRouter.tsx`

Say:

"The HTML gives React a root node. `main.tsx` mounts the app into that root,
then wraps everything with theme and routing providers. The router decides which
component should render for the current URL."

Important terms:

- `createRoot`
- `ThemeProvider`
- `BrowserRouter`
- `Routes`
- `Route`

### 2. Shared Layout

Open:

- `src/app/Layout.tsx`

Say:

"Every route is wrapped by `Layout`. That is why the Navbar and animated
background stay consistent across pages. The current page renders inside
`Outlet`, which is React Router's placeholder for matched child routes."

Important terms:

- `Outlet`
- shared shell
- route child
- mounted once

### 3. Journal Flow

Open:

- `src/app/pages/Journal.tsx`
- `src/app/pages/JournalEntry.tsx`
- `src/app/components/JournalBody.tsx`
- `src/app/components/ArticleListenControls.tsx`

Say:

"The Journal is data-driven. `journalEntries` stores article metadata and body
sections. The index page maps over that list. The article page reads the URL
slug with `useParams`, finds the matching entry, and renders its sections with
`JournalBody`. The listen controls use browser speech synthesis and read the
article in chunks."

Important terms:

- `journalEntries`
- `slug`
- `useParams`
- `find`
- `map`
- `Set`
- `useMemo`
- `useRef`

### 4. Work Flow

Open:

- `src/app/data/workCaseStudies.ts`
- `src/app/pages/WorkCaseStudy.tsx`
- `src/app/pages/Work.tsx`

Say:

"Work case studies follow the same slug lookup pattern. The data lives in
`workCaseStudies.ts`, and one reusable page template renders facts, sections,
links, screenshots, related links, and SEO metadata based on whichever slug is
in the URL."

Important terms:

- typed data
- reusable template
- screenshot metadata
- related links
- fallback 404

### 5. SEO Flow

Open:

- `src/app/components/Seo.tsx`
- `scripts/prerender-seo.mjs`
- `scripts/validate-seo.mjs`
- `public/sitemap.xml`
- `public/robots.txt`

Say:

"Because this is a React SPA, client-side metadata alone is not enough. `Seo.tsx`
keeps metadata correct during app navigation. The prerender script creates
static HTML for every public route after the Vite build. That gives Google,
LinkedIn, and other crawlers route-specific titles, descriptions, canonical
URLs, schema, and fallback content before React loads."

Important terms:

- metadata
- canonical URL
- Open Graph
- JSON-LD
- BreadcrumbList
- sitemap
- prerender
- hydration

## Follow A Request Through The Code

Practice these like drills.

### Drill 1: Someone opens FN7

URL:

`/journal/the-ghost-house-and-the-math-boogeyman`

Trace:

1. `AppRouter.tsx` matches `/journal/:slug`.
2. `JournalEntry.tsx` reads `slug`.
3. `journalEntries.find(...)` locates FN7.
4. `Seo.tsx` receives title, excerpt, dates, breadcrumbs, and schema.
5. `JournalBody.tsx` renders the body sections.
6. `ArticleListenControls.tsx` receives the same sections for audio.
7. `RelatedLinks.tsx` renders the content graph.

Explain:

"One route template can serve every Field Note because the slug selects the
right data object."

### Drill 2: Someone opens TechSync Ops

URL:

`/work/techsync-ops`

Trace:

1. `AppRouter.tsx` matches `/work/:slug`.
2. `WorkCaseStudy.tsx` reads `slug`.
3. `workCaseStudies.find(...)` locates TechSync Ops.
4. `Seo.tsx` receives case-study metadata and image info.
5. The template renders facts, links, body sections, screenshots, and related
   links.

Explain:

"The case-study page is reusable. The data changes; the rendering pattern stays
consistent."

### Drill 3: A new Field Note is published

Trace:

1. Add the new entry in `journalEntries`.
2. Add URL to `public/sitemap.xml`.
3. Add metadata to `scripts/prerender-seo.mjs`.
4. Add expected schema route to `scripts/validate-seo.mjs`.
5. Run `npm run build:check`.
6. Push to GitHub.
7. Let Vercel deploy.
8. Run `npm run validate:seo`.

Explain:

"The release process touches app content, crawl discovery, static metadata, and
live validation."

## Questions To Test Yourself

Answer these without looking first, then verify in the docs/code.

1. What file starts the React app?
2. Why is `ThemeProvider` outside `AppRouter`?
3. What does `BrowserRouter` enable?
4. What does `Layout.tsx` keep mounted across pages?
5. What does `<Outlet />` do?
6. What is a slug?
7. How does `JournalEntry.tsx` know which article to render?
8. Why does `JournalEntry.tsx` return `NotFound` sometimes?
9. Why are Journal entries stored as an array?
10. Why does `JournalBody` use `Set` objects?
11. What does `ArticleListenControls` use from the browser?
12. How does a Work case study find the right case-study data?
13. What does `Seo.tsx` update?
14. Why is client-side SEO not enough for this site?
15. What does the prerender script generate?
16. What does `validate:seo` check?
17. Why does the sitemap matter?
18. What is JSON-LD?
19. What is BreadcrumbList schema?
20. What is the main metadata duplication tradeoff in the current architecture?

## Deeper Questions

Use these for senior-dev level understanding.

1. What would break if `BrowserRouter` were removed?
2. Why does `Seo.tsx` use `useEffect`?
3. Why does the listen component use refs instead of only state?
4. What drift risk exists between `Journal.tsx`, `sitemap.xml`,
   `prerender-seo.mjs`, and `validate-seo.mjs`?
5. How could a shared content manifest reduce that drift?
6. What are the benefits of a data-driven page template?
7. What are the drawbacks of keeping Field Note content inside a TSX file?
8. When would it make sense to move content into Markdown, MDX, or a CMS?
9. Why does the app still need client-side `Seo.tsx` if static prerender exists?
10. What does the live validator prove that a local build cannot?

## My Current Architecture Opinion

The current architecture is appropriate for a personal portfolio and public
build lab because it is simple, inspectable, and deployable. The biggest mature
engineering improvement is not a new framework. It is reducing metadata/content
duplication by moving public route definitions into a shared manifest that can
feed:

- React pages,
- sitemap generation,
- static prerendering,
- SEO validation,
- release checklist output.

That would make the site easier to grow as the Journal, Lab, Work, and Spanish
content strategy expand.

## Study Plan

### Day 1

Read:

- `site-walkthrough.md`
- `code-glossary.md`

Practice:

- explain app startup,
- explain routing,
- explain the Journal slug flow.

### Day 2

Read:

- `Journal.tsx`
- `JournalEntry.tsx`
- `JournalBody.tsx`
- `ArticleListenControls.tsx`

Practice:

- trace FN7 from URL to rendered article,
- explain `map`, `find`, `Set`, `useParams`, and `useState`.

### Day 3

Read:

- `workCaseStudies.ts`
- `WorkCaseStudy.tsx`
- `Seo.tsx`

Practice:

- trace TechSync Ops from URL to rendered case study,
- explain metadata, related links, images, and schema.

### Day 4

Read:

- `scripts/prerender-seo.mjs`
- `scripts/validate-seo.mjs`
- `public/sitemap.xml`
- `public/robots.txt`

Practice:

- explain why static prerender exists,
- explain what the live validator proves,
- explain the current duplication tradeoff and next improvement.

## Final Confidence Script

Say this when you need to remind yourself you actually know the code:

> This repo is not magic. It is a route table, a shared layout, structured
> content arrays, reusable render templates, SEO metadata, static prerendering,
> and validation scripts. If I can trace a URL to a component, a component to
> its data, and the data to its SEO output, I can explain the system.
