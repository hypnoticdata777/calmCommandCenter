# Calm Command Center

A public portfolio site for `h777`, built to showcase property management tools, case studies, lab notes, and workflow experiments in a calm command center style.

## Architecture Reference

For the single document covering system topology, project structure, runtime, content, build output, and deployment boundaries, read **[Site Architecture & Project Topology](docs/architecture/site-walkthrough.md)**.

Documentation reconciled with the repository on November 10, 2026. Local implementation and historical production validation are distinguished below.

## What It Is

This is the portfolio shell for the h777 tool ecosystem. The main shape is in place: routing, layout, theme switching, animated background, responsive navigation, the home page, Journal, Lab, Work, About, Contact, and 404 handling.

The site now follows a simple maturity loop: Journal captures the thinking, Lab tests the ideas, and Work holds the tools that are strong enough to stand as case studies. PM Ops Map, TechSync Ops, and TurnFlow Home live in Work. m3ldSync and VendorRadar live in Lab until they earn that next step.

The default look is dark and editorial: serif type, red accents, soft glows, and slow geometric motion. There is also a light theme with cyan accents available from the nav.

## SEO Progress

The first ten SEO organization passes are complete.

- **V1 metadata foundation:** route-aware SEO helper, page-specific titles and descriptions, canonical URLs, default social metadata, structured data, `robots.txt`, `sitemap.xml`, and a first branded social preview asset.
- **V2 Journal URLs:** each published Field Note now has a dedicated `/journal/...` route, article metadata, excerpt, ISO date, canonical URL, structured data, sitemap entry, and a `Read` path from the Journal index.
- **Journal listen mode:** published Field Notes include browser-powered Listen, Pause, Resume, Restart, and Stop controls on the article route and expanded Journal preview.
- **V3 Work case study URLs:** PM Ops Map, TechSync Ops, and TurnFlow Home now have dedicated `/work/...` routes, case-study metadata, structured data, sitemap entries, and `Read case study` paths from the Work overview.
- **V4 social preview polish:** added a reliable `1200x630` PNG share card, wired Open Graph/X image metadata with alt text, width, height, and type where appropriate, added article metadata for Field Notes and case studies, and added a small branded favicon.
- **V5 screenshot SEO:** copied portfolio-safe Work screenshots into `public/images/work/...`, replaced external PM Ops Map screenshot URLs with local assets, added image alt text and dimensions, and aligned TechSync Ops and TurnFlow Home with their current README screenshot sets.
- **V6 internal linking:** connected Field Notes, Lab experiments, and Work case studies with related-link sections plus related-page schema hints so visitors and crawlers can follow the Journal -> Lab -> Work loop.
- **V7 live validation:** checked the deployed site for route health, sitemap availability, robots availability, share-card availability, live bundle freshness, and the remaining SPA metadata caveat.
- **V8 static SEO prerender:** added a build-time route generator that creates static HTML files for all public sitemap routes with route-specific metadata, canonical URLs, structured data, fallback content, and internal links before React loads.
- **V9 metadata validation:** added a reusable live SEO validator, confirmed all sitemap routes, verified route-specific metadata and structured data, checked social image availability, and logged the first Search Console indexing request.
- **V10 breadcrumbs and performance:** added BreadcrumbList structured data across non-home routes, upgraded the live SEO validator to enforce breadcrumb quality, added a performance budget script, and created a public content release checklist.

Current repository status: the sitemap and prerender build cover **26 public routes**, including 12 English Field Notes, two Spanish notes, three Work case studies, and their index/static pages. The build creates route-specific metadata, structured data, and a limited static fallback; the complete article and interactive UI mount in the browser using React `createRoot`. This is not React hydration or full article server-side rendering. Historical live-validation reports below remain dated evidence; the current production deployment has not been revalidated by this documentation update.

Owner-side indexing work remains in Google Search Console: use URL Inspection and request indexing for priority pages after verifying deployment.

See [`docs/seo/seo-progress-log.md`](docs/seo/seo-progress-log.md), [`docs/seo/live-validation-2026-08-31.md`](docs/seo/live-validation-2026-08-31.md), [`docs/seo/static-prerender-2026-08-31.md`](docs/seo/static-prerender-2026-08-31.md), [`docs/seo/metadata-validation-2026-08-31.md`](docs/seo/metadata-validation-2026-08-31.md), [`docs/seo/performance-and-breadcrumbs-2026-08-31.md`](docs/seo/performance-and-breadcrumbs-2026-08-31.md), and [`docs/seo/content-release-checklist.md`](docs/seo/content-release-checklist.md) for the completed SEO work, live checks, challenges, and next rollout steps.

For a plain-English technical walkthrough, start with [`docs/architecture/site-walkthrough.md`](docs/architecture/site-walkthrough.md). For operators, React hooks, route parameters, structured data, and common JavaScript/TypeScript patterns used in this repo, use [`docs/architecture/code-glossary.md`](docs/architecture/code-glossary.md). To practice explaining the repo out loud, use [`docs/architecture/explain-the-code-practice-guide.md`](docs/architecture/explain-the-code-practice-guide.md).

## Current Work

### PM Ops Map

PM Ops Map is the first flagship tool featured on the site.

- **Status:** Built / open source
- **Type:** Browser app
- **Audience:** New PMCs, owners, and operations managers
- **Source:** [hypnoticdata777/pm-ops-map](https://github.com/hypnoticdata777/pm-ops-map)
- **Download:** [latest release](https://github.com/hypnoticdata777/pm-ops-map/releases/latest)
- **Screenshots:** [docs/screenshots](https://github.com/hypnoticdata777/pm-ops-map/tree/master/docs/screenshots)

The Work page now includes the first real case study: **PM Ops Map: a day-one operating system for new property management companies.**

### TechSync Ops

TechSync Ops is the second Work case study featured on the site. Its portfolio copy and screenshots are aligned with the latest README positioning: staged synthetic-data POC, hosted web/API loop, six role lanes, scoped visibility, proof capture, and clear production boundaries.

- **Status:** Hosted staging / synthetic-data POC
- **Type:** PMC maintenance command platform
- **Audience:** PMCs, field-service teams, coordinators, technicians, clients, viewers, and vendors
- **Source:** [hypnoticdata777/Techsync](https://github.com/hypnoticdata777/Techsync)
- **Docs:** [README documentation](https://github.com/hypnoticdata777/Techsync#documentation-index)
- **Staging app:** [techsync-ops-web.vercel.app](https://techsync-ops-web.vercel.app)
- **API docs:** [techsync-ops-api-lyart.vercel.app/docs](https://techsync-ops-api-lyart.vercel.app/docs)

The Work page now includes the second case study: **TechSync Ops: the PMC command center for maintenance handoffs.**

The current TechSync README screenshot set is now copied into the portfolio:

- `public/images/work/techsync-ops/admin-workspace.png`
- `public/images/work/techsync-ops/client-portal.png`
- `public/images/work/techsync-ops/viewer-snapshot.png`
- `public/images/work/techsync-ops/vendor-desk.png`

### TurnFlow Home

TurnFlow Home is the third Work case study featured on the site.

- **Status:** Launch-oriented SaaS POC candidate
- **Type:** Homeowner maintenance workspace
- **Audience:** Homeowners, small landlords, rental hosts, vendors, and trusted helpers
- **Source:** [hypnoticdata777/turnflow-mvp](https://github.com/hypnoticdata777/turnflow-mvp)
- **Docs:** [README documentation](https://github.com/hypnoticdata777/turnflow-mvp#documentation)
- **Readiness:** [current POC readiness](https://github.com/hypnoticdata777/turnflow-mvp#current-poc-readiness)

The Work page now includes the third case study: **TurnFlow Home: maintenance history for homeowners who want the proof.**

## Current Lab

### m3ldSync

m3ldSync is an active Lab POC.

- **Status:** Local POC / public demo packaged
- **Type:** CSV reconciliation and Kanban triage tool
- **Audience:** Maintenance managers and busy PM operators
- **Source:** [hypnoticdata777/m3ldSync](https://github.com/hypnoticdata777/m3ldSync)
- **Portfolio assets:** [docs/portfolio](https://github.com/hypnoticdata777/m3ldSync/tree/main/docs/portfolio)
- **Docs:** [README documentation](https://github.com/hypnoticdata777/m3ldSync#documentation)

### VendorRadar

VendorRadar is an in-design Lab POC for vendor memory, quote history, and reliability signals.

### Product Split Brief

The repo also includes an interactive requirements brief that separates the two maintenance products:

- **TurnFlow Home:** client/homeowner maintenance self-management, approvals, history, and proof.
- **TechSync Ops:** PMC maintenance operations, dispatch, technician workflows, client communication, and reporting.
- **Local file:** [`docs/product-requirements/maintenance-product-split.html`](docs/product-requirements/maintenance-product-split.html)

## Current Pages

| Route | Current status |
|---|---|
| `/` | Home page with brand intro, manifesto copy, three principles, and real CTAs into Journal and Lab |
| `/journal` | Journal index with field-note entries that feed the lab loop |
| `/journal/the-hackathon-blew-a-gasket` | Field Note 1 article page |
| `/journal/the-api-went-dark` | Field Note 2 article page |
| `/journal/the-picture-frame-was-real` | Field Note 3 article page |
| `/journal/complete-is-an-astonishingly-ambitious-word` | Field Note 4 article page |
| `/journal/the-silent-killer-of-property-management-operations` | Field Note 5 article page |
| `/journal/thursday-night-chaos-git-bouncers-and-the-illusion-of-freedom` | Field Note 6 article page |
| `/journal/the-ghost-house-and-the-math-boogeyman` | Field Note 7 article page |
| `/journal/dont-hire-another-laptop-fix-the-lockfile` | Field Note 8 article page |
| `/journal/a-dashboard-hoards-data-a-command-center-assigns-reality` | Field Note 9 article page |
| `/journal/emailvault-needed-boundaries` | Field Note 10 article page |
| `/journal/why-automated-fixes-break-production-systems` | Field Note 11: dependency fixes and invitation boundaries |
| `/journal/caffeine-context-and-ci-cd` | Field Note 12: runner drift, browser tests, and operational verification |
| `/es` | Spanish home page |
| `/es/contacto` | Spanish contact page |
| `/es/notas/un-dashboard-acumula-datos-un-centro-de-comando-asigna-realidad` | Spanish Nota 1 article page |
| `/es/notas` | Spanish notes index with Nota 2 and Nota 1 |
| `/es/notas/emailvault-necesitaba-fronteras` | Nota 2: EmailVault, Gmail OAuth, and preservation boundaries |
| `/lab` | Testing shelf for m3ldSync, VendorRadar, and experiments that have not earned Work yet |
| `/work` | Case studies shipped: PM Ops Map, TechSync Ops, and TurnFlow Home |
| `/work/pm-ops-map` | PM Ops Map case study page |
| `/work/techsync-ops` | TechSync Ops case study page |
| `/work/turnflow-home` | TurnFlow Home case study page |
| `/about` | Developed about page explaining the thinking behind the site |
| `/contact` | Email-first contact page with GitHub as a secondary link |
| `*` | 404 page for unknown routes |

## What's Working

- **Routing** - the home page, subpages, and 404 route are wired up with React Router.
- **Shared layout** - the navbar and animated background live in `Layout.tsx`, so they stay mounted while moving between pages.
- **Navbar** - a transparent desktop top bar at the top of the page, a right-side pill after scrolling, and a full-screen menu on mobile.
- **Theme toggle** - the site starts in dark mode, with a light/cyan version available from the nav.
- **BeatingBrain** - blurred background blobs that pulse at different speeds.
- **RollingHeptagon** - three animated 7-sided shapes that drift around the screen, each with a small moving dot inside.
- **Home page** - the `h777` mark, main positioning copy, three principles, and real CTAs into Journal and Lab.
- **Lab page** - a testing shelf for role-aware workflow logic, m3ldSync, VendorRadar, and ideas that still need more proof.
- **Work page** - three portfolio case studies, with positioning, links, problem/solution copy, builder notes, local screenshots for PM Ops Map, TechSync Ops, and TurnFlow Home, and dedicated case-study URLs.
- **Product requirements brief** - an interactive HTML split between TurnFlow Home and TechSync Ops.
- **Journal page** - real written content, with a browsable index, dedicated URLs, listen controls, and related links for each published Field Note.
- **Journal evidence images** - FN 11/12 use centered 560px figures, linked italic captions, and click/tap-to-expand image dialogs. Escape, Close, or an outside click dismisses the dialog. The original image remains available in a new tab.
- **Favicon** - larger artwork with 16/32/64px PNGs and a multi-resolution ICO fallback; both the app shell and prerender template declare the same assets.
- **SEO foundation** - metadata helper, canonical URLs, sitemap, robots file, social preview asset, Journal article URLs, Work case-study URLs, screenshots, and internal related-link paths.
- **ImageWithFallback** - a small utility for handling broken image URLs cleanly.

## Still In Progress

- Add the next testing tools to Lab.
- Promote tools from Lab to Work only after they have enough proof, screenshots, and public-safe positioning.
- Replace "Demo coming soon" once PM Ops Map, m3ldSync, and TurnFlow Home have hosted demo URLs.
- Finish TechSync Ops accessibility notes and visual polish before treating its hosted staging loop as public promotion.
- Refresh TurnFlow Home screenshots again after the public hosted demo is final, even though the current case-study page now matches the latest README screenshot set.
- Contact is intentionally email-first for v1; LinkedIn or a form can be added later.
- Newsletter-style plumbing is intentionally minimal until there is a real service behind it.
- The proposed Tools directory and additional project pages remain in review; `/tools` is not an implemented route. Review documents are under `docs/next-steps/portfolio-review/`.
- High-grade SEO now has live static prerendering, repeatable metadata validation, breadcrumb structured data, and a performance budget baseline. The next SEO work is finishing owner-side indexing requests, checking external rich-result/social preview tools, and refreshing screenshots as each tool matures.

## Content Roadmap

Short-term content plan:

1. PM Ops Map case study - shipped.
2. TechSync Ops case study - shipped.
3. TurnFlow Home case study - shipped.
4. Keep m3ldSync and VendorRadar in Lab until they have enough proof to graduate.
5. Add the next Field Notes as individual article URLs and include them in the sitemap.
6. Add the next testing tools as Lab entries with source/demo/screenshot links where available.
7. Promote one Work case study only when the tool is ready to stand on its own and give it a dedicated `/work/...` URL.
8. Replace temporary demo placeholders with live URLs as each tool is hosted.
9. Keep screenshots close to the source project repos when possible, then reference them from portfolio case studies.

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Language | TypeScript |
| Routing | React Router v7 |
| Styling | Tailwind CSS v4 |
| Animations | Motion (`motion/react`) |
| Theme | next-themes |
| Components | Local React components; no installed Radix/shadcn component library |
| Icons | Lucide React |

## Running Locally

### Requirements

- Node.js `22.18.0` recommended, `22.12.0` or newer required.
- npm `10` or newer.

This project is set up for npm. Use `package-lock.json` as the dependency source of truth.

### Easiest On Windows

Double-click `start-dev.cmd`.

It installs dependencies if needed, starts Vite, and opens the browser at [http://127.0.0.1:5173](http://127.0.0.1:5173).

### Terminal

```bash
npm install
npm start
```

Then open [http://127.0.0.1:5173](http://127.0.0.1:5173).

For a clean install on a new machine or after copying the project folder:

```bash
npm ci
npm start
```

## Build And Preview Locally

Before replacing another site with this project, run the full local check:

```bash
npm run build:check
```

That type-checks the project and creates the production files in `dist/`.

To preview the built production version locally:

```bash
npm run serve
```

Then open [http://127.0.0.1:4173](http://127.0.0.1:4173).

## Hosting Notes

This is a Vite single-page React app with build-time metadata/fallback pages. Static hosts must serve existing files (including generated nested `index.html` pages, images, favicons, and downloads) before applying the SPA fallback to `/index.html`. A blanket fallback that replaces generated pages loses their first-response metadata. Verify the behavior on the actual host after deployment.

Recommended host settings:

| Setting | Value |
|---|---|
| Install command | `npm ci` |
| Build command | `npm run build` |
| Publish/output folder | `dist` |
| Node version | `22.18.0` |

The repo includes `public/_redirects` for Netlify-style static hosting and `vercel.json` for Vercel-style rewrites.

## Useful Scripts

```bash
npm run dev
npm start
npm run build:check
npm run build
npm test
npm run lint
npm run validate:seo
npm run validate:performance
npm run serve
npm run typecheck
```

`validate:seo` requests the deployed `https://h777.dev` site; it is not a local-only test. `validate:performance` checks built JS/CSS and Work images, not Journal images, downloads, Core Web Vitals, or end-to-end latency.

## Project Structure

```text
index.html                        # Browser shell, initial metadata, favicon declarations
src/
  main.tsx                        # createRoot, ThemeProvider, BrowserRouter
  app/
    AppRouter.tsx                 # English and Spanish routes
    Layout.tsx                    # Persistent navigation and background; Outlet
    App.tsx                       # English home page
    components/
      JournalBody.tsx             # Text, local images, captions, native image dialog
      ArticleListenControls.tsx   # Browser speech synthesis
      Navbar.tsx                  # Navigation, theme, language maps
      Seo.tsx                     # Client metadata and JSON-LD
      RelatedLinks.tsx            # Internal content links
      BeatingBrain.tsx
      RollingHeptagon.tsx
      Spiral.tsx
      shared/ImageWithFallback.tsx
    constants/heptagons.ts
    data/
      journalImageCaptions.ts     # Image-path keyed provenance/caption strings
      workCaseStudies.ts          # Shared Work overview/detail content
      spanishJournal.ts
      spanishSiteCopy.ts
    pages/
      Journal.tsx                # English article records and expandable index
      JournalEntry.tsx           # Article lookup by slug
      Work.tsx
      WorkCaseStudy.tsx
      Lab.tsx
      About.tsx
      Contact.tsx
      NotFound.tsx
      es/                        # Spanish home/contact/index/article components
  styles/
vite.config.ts                    # React/Tailwind plugins and @ alias
tsconfig.json                     # Browser TypeScript configuration
tsconfig.node.json                # Vite configuration type checking
scripts/                          # Build-time SEO, live SEO, lint, performance checks
tests/content-data.test.mjs        # Eight current content/rendering tests
public/
  sitemap.xml                     # 26 current public page URLs
  robots.txt
  favicon-v2-{16,32,64}.png
  favicon.ico
  favicon.svg                     # Original retained asset; no longer selected by head
  images/journal/                 # English/Spanish evidence images and illustration
  images/work/                    # Case-study screenshots
  downloads/                      # HTML archives, ZIP kits, LinkedIn PDF
  _redirects
vercel.json                       # Host rewrite declaration
package.json
package-lock.json
docs/
  architecture/site-walkthrough.md # Primary architecture/topology reference
  seo/                           # Release procedure and dated evidence
  next-steps/portfolio-review/    # HTML proposal and owner review worksheet
```

## Design Notes

The site uses serif typography because I wanted it to feel more like a quiet notebook or operating room than a typical software landing page:

- **Playfair Display** for headings, logo-like text, buttons, and display moments.
- **Crimson Text** for body copy and form text.

The default dark theme is built around:

| Token | Current value | Usage |
|---|---|---|
| Background | `oklch(0.145 0 0)` | Page background |
| Foreground | `oklch(0.985 0 0)` | Primary text |
| Brand | `#dc2626` | Accent links, active states, buttons, animated glow |
| Dividers | `foreground/10` | Horizontal rules and subtle borders |

The light theme switches the brand accent to `#0e7490` and adjusts the animated background tint accordingly.

## Attributions

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for licensing details on third-party components and assets.

## Spanish Nota 2

Added the supplied Spanish EmailVault article dated October 18, 2026 at
`/es/notas/emailvault-necesitaba-fronteras`. It uses the existing Spanish preview
and article layout, related links, metadata, and browser listen controls. The
Morse-code joke remains a clickable link with its exact query string. The supplied
workflow diagram is transcribed into the local SVG
`public/images/journal/emailvault-flujo.svg`, with the complete workflow as alt
text. The language switch connects this note with English Field Note 10.

See [the release record](docs/seo/nota-2-emailvault-2026-10-18.md) for implementation,
validation, and remaining deployment checks.


## Latest Content, Media, and Review Assets

- **FN 11** retains its published title and URL. Revised copy distinguishes an avoided storage downgrade from observed breakage and an atomic invitation claim from the surrounding signup sequence.
- **FN 12** includes six headings, source links, the timestamped Denzel clip, four typeset source/log cards, and a labeled AI-generated lock illustration. Its release record is [here](docs/seo/field-note-12-2026-11-09.md).
- Figure descriptions live in `src/app/data/journalImageCaptions.ts`, not ordinary narrative paragraphs. English Journal callers pass that map into the shared renderer; Spanish callers use its defaults unless explicitly supplied a map.
- The Work case study currently links to `turnflow-mvp`; FN 11 evidence was inspected in the separately linked `turnflow-home` repository. The portfolio does not run either application as a local backend.
- [Portfolio study/review folder](docs/next-steps/portfolio-review/): HTML-only planning documents; editing an opened form does not write to GitHub. Use GitHub source editing or export/upload a filled HTML copy.
- [FN 11 carousel PDF](public/downloads/fn11-linkedin-carousel.pdf).
- [FN 11 retrospective ZIP](public/downloads/fn11-build-notes-retrospective.zip).
- [Session technical archive HTML](public/downloads/session-technical-archive-fn11-fn12.html).
- [FN 12 archive and LinkedIn kit ZIP](public/downloads/fn12-archive-and-linkedin-kit.zip): HTML archive, teaser, instructions, and two ordered PNGs.

GitHub raw HTML is served as text. Download/extract a ZIP and open its HTML locally for formatted offline reading. `public/downloads/` is copied to `/downloads/` by Vite; these files are not Journal routes or sitemap entries. Archives capture historical work and are not rolling architecture specifications.

### Verification and Release

```bash
npm test
npm run lint
npm run build:check
npm run validate:performance
```

The suite currently has eight tests; it covers content relationships, safe rendering, captions, original links, and referenced image signatures. Previous desktop/mobile interaction checks were temporary Playwright scripts, not a committed browser-test suite. Recheck dialogs, captions, speech, and full-size links manually or with a browser after UI changes.

Use the existing `work` branch review workflow: commit, push, open/review a PR to `main`, merge, then verify the hosting deployment and run `npm run validate:seo`. A pushed commit or passing build is not production verification. See the [content release checklist](docs/seo/content-release-checklist.md).
