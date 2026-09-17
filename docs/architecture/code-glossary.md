# h777 Code Glossary

This glossary explains the code patterns used in the h777 portfolio in practical
language. It is written for explaining the repo out loud, not for memorizing
abstract theory.

## App Startup Terms

### `createRoot`

React's function for mounting the app into the browser page.

In h777: `main.tsx` uses it to attach React to `div#root` from `index.html`.

How to explain it: "This is where React takes control of the page."

### `ThemeProvider`

Provider from `next-themes` that manages dark/light mode.

In h777: it wraps the whole app so every page can use the same theme state.

Why it is outside the router: the theme should survive route changes.

### `BrowserRouter`

React Router component that lets the app respond to URL paths.

In h777: it enables routes like `/journal`, `/work/techsync-ops`, and
`/contact` without reloading the entire app.

## Routing Terms

### `Routes`

The container for the route table.

In h777: `AppRouter.tsx` puts all page routes inside it.

### `Route`

One URL rule.

Example:

`<Route path="/journal" element={<Journal />} />`

Means: when the browser path is `/journal`, render the `Journal` page.

### `:slug`

A dynamic part of the URL.

Example:

`/journal/:slug`

Can match:

`/journal/the-ghost-house-and-the-math-boogeyman`

In h777: the slug is used to look up the correct article or case study.

### `useParams`

React Router hook for reading dynamic URL parts.

In h777: `JournalEntry.tsx` and `WorkCaseStudy.tsx` use it to read the `slug`.

How to explain it: "This asks the URL which article or case study the visitor
requested."

### `Outlet`

A placeholder for child routes.

In h777: `Layout.tsx` renders the Navbar/background, then `<Outlet />` renders
the current page inside that shared shell.

## React Terms

### Component

A reusable piece of UI.

Examples in h777:

- `Navbar`
- `Seo`
- `JournalBody`
- `RelatedLinks`
- `ArticleListenControls`

How to explain it: "A component is a named UI building block."

### Props

Inputs passed into a component.

Example:

`<JournalBody sections={entry.sections} subheads={journalSubheads} />`

In plain English: "Render this body using this article's sections and these
formatting rules."

### `useState`

React hook for storing UI state.

In h777: `Journal.tsx` uses it to remember which Field Note preview is currently
open on the Journal index.

How to explain it: "This is short-term memory for the interface."

### `useEffect`

React hook for running side effects after render.

In h777:

- `Seo.tsx` uses it to update `document.head`.
- `ArticleListenControls.tsx` uses it to detect speech support and clean up
  audio when the component unmounts.

How to explain it: "This handles work that touches the browser outside normal
HTML rendering."

### `useMemo`

React hook for calculating a value only when its inputs change.

In h777: `ArticleListenControls.tsx` uses it to build speech chunks from the
article title and sections.

Why use it: the chunk list only needs to rebuild when the article text changes.

### `useRef`

React hook for storing mutable values that should not trigger a re-render.

In h777: `ArticleListenControls.tsx` uses refs to track speech status inside
speech-synthesis callbacks.

How to explain it: "This is a stable pocket of memory for event callbacks."

## JavaScript And TypeScript Terms

### `type`

TypeScript's way to describe the shape of data.

Example:

`WorkCaseStudy` describes what every Work case-study object must contain.

Why it matters: TypeScript can warn us if a case study is missing fields the UI
expects.

### Array

An ordered list.

In h777:

- `journalEntries` is an array of Field Notes.
- `workCaseStudies` is an array of case studies.
- `sections` is an array of paragraphs.

### `map()`

Array method that transforms each item into something else.

In h777: `map()` is often used to turn data into UI.

Examples:

- each `journalEntries` item becomes a Journal row,
- each article `section` becomes a paragraph,
- each `relatedLinks` item becomes a link,
- each screenshot object becomes a figure.

How to explain it: "For every item in this list, render one matching UI block."

### `filter()`

Array method that keeps only items matching a rule.

In h777: `JournalEntry.tsx` filters out coming-soon entries when calculating
previous/next navigation.

How to explain it: "Only keep the entries that are actually published."

### `find()`

Array method that returns the first item matching a rule.

In h777: article and case-study pages use `find()` to match the URL slug to the
right data object.

How to explain it: "Find the article whose slug matches the URL."

### `Set`

A collection optimized for membership checks.

In h777:

- `journalSubheads` checks whether a section string should become a heading.
- `journalStrongLines` checks whether a section string should become a bold
  paragraph.

Why use it: it keeps body content simple while still letting exact lines receive
special styling.

### Template literal

A string wrapped with backticks.

In h777: article sections use backticks because the copy contains apostrophes
and quotes. This keeps writing easier.

Example:

```
`I'm not just engineering a portfolio.`
```

### Optional chaining `?.`

Safely access a property that may not exist.

Example:

`entry.relatedLinks?.map(...)`

Means: only run `.map()` if `relatedLinks` exists.

### Nullish coalescing `??`

Use a fallback only when the left side is `null` or `undefined`.

Example:

`imageAlt={study.images?.[0]?.alt ?? `${study.name} case study from h777`}`

Means: use the screenshot alt text if it exists; otherwise use a fallback.

### Spread `...`

Copies properties from one object/array into another.

In h777: `Seo.tsx` uses object spread to conditionally include schema fields
like `isRelatedTo`.

How to explain it: "Copy these fields into the final object."

## SEO Terms

### Canonical URL

The official URL for a page.

Why it matters: it tells search engines which URL should count as the main
version of the content.

### Meta description

Short page summary used by search engines and preview tools.

### Open Graph

Metadata used by platforms like LinkedIn, Facebook, Slack, and messaging apps to
show a preview card when a link is shared.

In h777: `og:title`, `og:description`, and `og:image` are set by `Seo.tsx` and
the prerender script.

### X/Twitter card

Metadata used by X/Twitter-style preview cards.

### JSON-LD

A structured data format embedded into HTML.

In h777: JSON-LD tells search engines whether a route is a `BlogPosting`,
`Article`, `CollectionPage`, `ProfilePage`, or `ContactPage`.

### BreadcrumbList

Structured data describing the page hierarchy.

Example:

`h777 -> Journal -> Field Note 7`

Why it matters: it helps crawlers understand where a page sits in the site.

### Sitemap

An XML file listing public URLs.

In h777: `public/sitemap.xml` is the route list submitted to Google Search
Console.

### Robots file

`public/robots.txt` tells crawlers what they may crawl and where the sitemap is.

## Build And Deployment Terms

### Vite

The frontend build tool. It runs the dev server and produces the production
bundle.

### `dist/`

The production build output folder. Vercel serves files from this output.

### Prerender

Generating static HTML files ahead of time.

In h777: `scripts/prerender-seo.mjs` creates one static HTML file per public
route after the normal Vite build.

### Hydration

When React takes over static HTML in the browser and makes it interactive.

In h777: prerendered HTML gives crawlers content immediately; hydration gives
visitors the full React app.

### Validator

A script that checks whether expected rules are still true.

In h777:

- SEO validator checks live metadata and schema.
- Performance validator checks bundle and image size budgets.

## How The Big Pieces Talk

### Journal article path

1. User visits `/journal/the-ghost-house-and-the-math-boogeyman`.
2. `AppRouter.tsx` matches `/journal/:slug`.
3. `JournalEntry.tsx` reads the slug with `useParams`.
4. It finds the matching object in `journalEntries`.
5. It sends metadata to `Seo.tsx`.
6. It renders the article with `JournalBody`.
7. It renders listen controls and related links.

### Work case-study path

1. User visits `/work/techsync-ops`.
2. `AppRouter.tsx` matches `/work/:slug`.
3. `WorkCaseStudy.tsx` reads the slug with `useParams`.
4. It finds the matching object in `workCaseStudies`.
5. It sends metadata and image data to `Seo.tsx`.
6. It renders facts, sections, screenshots, related links, and previous/next
   links.

### SEO publish path

1. Content is added to React data/components.
2. The sitemap gets the public URL.
3. `prerender-seo.mjs` gets matching metadata for static HTML.
4. `validate-seo.mjs` gets the expected schema type for the new route.
5. Build runs and prerenders route files.
6. Push to GitHub triggers Vercel.
7. Live validator confirms the deployed route.

## Phrases You Can Use In A Demo

- "The app is a React SPA, but we added static prerendered route files so SEO
  tools do not have to wait for client-side rendering."
- "Journal entries are currently a structured content array. The article route
  reads a slug from the URL and uses it to find the correct entry."
- "The Work case-study pages follow the same slug lookup pattern, but their
  source data lives in `workCaseStudies.ts`."
- "The `Seo` component manages browser metadata during client navigation, while
  `prerender-seo.mjs` handles first-response HTML for crawlers."
- "The validator is a guardrail. It checks that every public sitemap route has
  the expected metadata, schema, canonical URL, and social image."
- "The current tradeoff is metadata duplication. The next mature architecture
  move would be a shared route manifest that generates sitemap, prerender data,
  and validation expectations from one source."
