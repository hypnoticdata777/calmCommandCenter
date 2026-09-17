# h777 Site Walkthrough

This document explains how the h777 portfolio works as a system. Use it as the
"walk me through the codebase" guide before interviews, demos, refactors, or
new Field Note releases.

## One-Sentence Architecture

h777 is a Vite + React single-page app that uses React Router for navigation,
data arrays for Journal and Work content, shared components for repeated page
patterns, and build-time prerender scripts so every public route also has
crawler-friendly static HTML.

## Runtime Flow

When someone opens `https://h777.dev`, the app starts in this order:

1. `index.html` provides the root HTML shell and the `<div id="root">`.
2. `src/main.tsx` mounts React into that root element.
3. `ThemeProvider` wraps the app so dark/light mode works everywhere.
4. `BrowserRouter` wraps the app so URLs like `/journal/...` and `/work/...`
   are handled by React Router.
5. `AppRouter.tsx` maps each URL to the correct page component.
6. `Layout.tsx` wraps every page with the shared Navbar and animated background.
7. The selected page renders its content and calls `Seo.tsx` to update metadata.

In plain English: the browser loads one React app, React Router decides which
screen to show, and the shared layout keeps the navigation/background consistent
as the page content changes.

## Main File Map

| File | Job |
|---|---|
| `src/main.tsx` | Starts React and installs global providers. |
| `src/app/AppRouter.tsx` | Defines which URL renders which page. |
| `src/app/Layout.tsx` | Keeps Navbar and background mounted across all pages. |
| `src/app/App.tsx` | Home page. |
| `src/app/pages/Journal.tsx` | Journal index and source data for Field Notes. |
| `src/app/pages/JournalEntry.tsx` | Dedicated article route for one Field Note. |
| `src/app/components/JournalBody.tsx` | Renders article paragraphs, subheads, and emphasized lines. |
| `src/app/components/ArticleListenControls.tsx` | Browser speech-synthesis listen controls for articles. |
| `src/app/pages/Work.tsx` | Work overview page with current showcase sections. |
| `src/app/data/workCaseStudies.ts` | Structured case-study data for dedicated Work routes. |
| `src/app/pages/WorkCaseStudy.tsx` | Dedicated case-study route for one Work tool. |
| `src/app/components/Seo.tsx` | Client-side metadata, canonical URL, social tags, and JSON-LD. |
| `scripts/prerender-seo.mjs` | Generates static SEO HTML for public routes after Vite builds. |
| `scripts/validate-seo.mjs` | Checks the live site for SEO metadata, schema, sitemap, and images. |
| `scripts/validate-performance.mjs` | Checks bundle and image budget. |
| `public/sitemap.xml` | Public route list submitted to Google Search Console. |
| `public/robots.txt` | Crawl rules and sitemap pointer. |

## Page Routing

`AppRouter.tsx` is the route table:

- `/` -> Home
- `/journal` -> Journal index
- `/journal/:slug` -> one Field Note
- `/lab` -> Lab
- `/work` -> Work overview
- `/work/:slug` -> one Work case study
- `/about` -> About
- `/contact` -> Contact
- `*` -> 404 page

The `:slug` part is a route parameter. It means "whatever text appears here in
the URL." The article and case-study pages read that slug and look up the
matching object in their data arrays.

Example:

`/journal/the-ghost-house-and-the-math-boogeyman`

React Router gives `JournalEntry.tsx` this slug:

`the-ghost-house-and-the-math-boogeyman`

Then `JournalEntry.tsx` searches `journalEntries` for an entry with that same
slug. If it finds one, it renders the article. If it does not, it shows the 404.

## Layout And Background

`Layout.tsx` keeps shared site pieces outside individual pages:

- `Navbar`
- `BeatingBrain`
- three `RollingHeptagon` instances
- `<Outlet />`

`Outlet` is the placeholder where the current page appears. This prevents the
Navbar and background from being destroyed and recreated on every navigation.

The reason this matters: the site feels continuous. The background and nav stay
alive while only the page body changes.

## Journal System

The Journal has two surfaces that share the same data:

1. `/journal` shows the list of Field Notes and can preview an expanded entry.
2. `/journal/:slug` shows one Field Note as its own article page.

The source of truth is the `journalEntries` array in `Journal.tsx`.

Each entry contains:

- `label`: Field Note number.
- `slug`: URL-safe article identifier.
- `title`: visible article title.
- `readTime`: reading estimate shown in UI and audio controls.
- `type`: category label, such as Builder or Operations.
- `date` and `dateISO`: human date and machine date.
- `excerpt`: summary used in UI and metadata.
- `sections`: article body as an array of paragraphs/lines.
- `relatedLinks`: internal links to keep the reader moving through the site.

`JournalBody.tsx` renders each item in `sections`. Two `Set` objects control
presentation:

- `journalSubheads`: lines in this set render as section headings.
- `journalStrongLines`: lines in this set render as emphasized paragraphs.

Why use sets? A `Set` is good for "is this exact value in the list?" checks.
Instead of writing many `if` statements or adding extra markup into every
paragraph, the body renderer asks: "is this line a heading, a strong line, or a
normal paragraph?"

## Work Case Study System

The Work area has a similar pattern:

1. `/work` is the overview.
2. `/work/:slug` is one detailed case study.

Dedicated case-study pages use `workCaseStudies` from
`src/app/data/workCaseStudies.ts`.

Each Work case-study object contains:

- labels, titles, SEO titles, and descriptions,
- status, tool type, audience, and modified date,
- facts for quick scanning,
- links to source/demo/docs,
- screenshots with alt text and dimensions,
- content sections,
- related internal links.

`WorkCaseStudy.tsx` reads the URL slug, finds the matching object, and renders a
full case-study page from that data.

## SEO System

The site has two SEO layers:

### Client-Side SEO

`Seo.tsx` runs in the browser after React loads. It updates:

- page title,
- meta description,
- canonical URL,
- robots tag,
- Open Graph tags,
- X/Twitter tags,
- article metadata,
- JSON-LD structured data,
- breadcrumb schema.

This keeps metadata correct while navigating inside the React app.

### Static SEO Prerender

React single-page apps can look good to humans but be thin on first-response
HTML for crawlers and social preview tools. The project solves that with
`scripts/prerender-seo.mjs`.

The production build runs:

`vite build && npm run prerender:seo`

Vite creates the app bundle. Then the prerender script creates route-specific
`index.html` files under `dist/` for every public route. That means URLs like
`/journal/the-ghost-house-and-the-math-boogeyman` have their own static title,
description, canonical URL, structured data, and fallback content before React
hydrates.

In plain English: humans get the React experience, while crawlers get a readable
page immediately.

## Validation System

The project uses repeatable checks instead of guessing:

- `npm run typecheck`: TypeScript checks the app and Node scripts.
- `npm run build`: builds Vite and prerenders SEO HTML.
- `npm run build:check`: typecheck plus full build.
- `npm run validate:performance`: checks bundle/image budget.
- `npm run validate:seo`: checks the live site at `https://h777.dev`.

`validate:seo` checks:

- sitemap URL count,
- duplicate sitemap URLs,
- `robots.txt`,
- live sitemap response,
- route `200` status,
- title and description,
- canonical URL,
- indexable robots tag,
- Open Graph metadata,
- X/Twitter metadata,
- static fallback content,
- JSON-LD schema,
- breadcrumb schema,
- social image responses.

## Deployment Flow

The production site is deployed by Vercel from GitHub.

Normal publish flow:

1. Edit content/code locally.
2. Run local checks.
3. Commit changes.
4. Push to GitHub `main`.
5. Vercel detects the push and deploys.
6. Run live validation after deployment.
7. If a new public route was added, request indexing in Google Search Console.

## Current Design Philosophy

The site structure follows this loop:

- Journal captures the thinking.
- Lab tests the experiments.
- Work holds tools that are ready to stand as case studies.
- Contact turns the experience into consulting conversations.

The code mirrors that philosophy: content is organized into clear route
families, repeated page patterns are shared, and public routes are backed by SEO
metadata plus validation.

## Known Architecture Tradeoff

Some content metadata currently exists in multiple places:

- `Journal.tsx`
- `workCaseStudies.ts`
- `public/sitemap.xml`
- `scripts/prerender-seo.mjs`
- `scripts/validate-seo.mjs`

This works, but it creates drift risk. The release checklist helps manage that
today. A future cleanup should create shared route/content registries so the app,
sitemap, prerender script, and validator read from the same source of truth.

## How To Explain This Out Loud

"The site is a React/Vite portfolio with route-based pages. React Router handles
the navigation, Layout keeps the shared navbar and animated background mounted,
and the main content is split between normal pages, Journal entries, and Work
case studies. Journal and Work are partly data-driven: each article or case
study has a slug, metadata, body content, links, and screenshots. The SEO layer
has both client-side metadata updates and static prerendered HTML, because the
site is still a React SPA but needs direct URLs that Google and social preview
tools can read immediately. After each publish, the validator checks every live
sitemap route, metadata, schema, social image, and breadcrumb before we call it
done."
