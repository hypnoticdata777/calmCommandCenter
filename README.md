# Calm Command Center

A public portfolio site for `h777`, built to showcase property management tools, case studies, lab notes, and workflow experiments in a calm command center style.

## What It Is

This is the portfolio shell for the h777 tool ecosystem. The main shape is in place: routing, layout, theme switching, animated background, responsive navigation, the home page, Journal, Lab, Work, About, Contact, and 404 handling.

The site now follows a simple maturity loop: Journal captures the thinking, Lab tests the ideas, and Work holds the tools that are strong enough to stand as case studies. PM Ops Map, TechSync Ops, and TurnFlow Home live in Work. m3ldSync and VendorRadar live in Lab until they earn that next step.

The default look is dark and editorial: serif type, red accents, soft glows, and slow geometric motion. There is also a light theme with cyan accents available from the nav.

## SEO Progress

The first five SEO organization passes are complete.

- **V1 metadata foundation:** route-aware SEO helper, page-specific titles and descriptions, canonical URLs, default social metadata, structured data, `robots.txt`, `sitemap.xml`, and a first branded social preview asset.
- **V2 Journal URLs:** each published Field Note now has a dedicated `/journal/...` route, article metadata, excerpt, ISO date, canonical URL, structured data, sitemap entry, and a `Read` path from the Journal index.
- **V3 Work case study URLs:** PM Ops Map, TechSync Ops, and TurnFlow Home now have dedicated `/work/...` routes, case-study metadata, structured data, sitemap entries, and `Read case study` paths from the Work overview.
- **V4 social preview polish:** added a reliable `1200x630` PNG share card, wired Open Graph/X image metadata with alt text, width, height, and type where appropriate, added article metadata for Field Notes and case studies, and added a small branded favicon.
- **V5 screenshot SEO:** copied portfolio-safe Work screenshots into `public/images/work/...`, replaced external PM Ops Map screenshot URLs with local assets, added image alt text and dimensions, and aligned TechSync Ops and TurnFlow Home with their current README screenshot sets.

Current SEO caveat: this is still a React/Vite single-page app. The site now has much better public structure and route metadata once the app loads, but the later high-grade SEO step is prerendering or static HTML output so each route serves fully route-specific HTML immediately.

See [`docs/seo/seo-progress-log.md`](docs/seo/seo-progress-log.md) for the completed SEO work, challenges, and next rollout steps.

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
- **Lab page** - a testing shelf for m3ldSync, VendorRadar, and ideas that still need more proof.
- **Work page** - three portfolio case studies, with positioning, links, problem/solution copy, builder notes, local screenshots for PM Ops Map, TechSync Ops, and TurnFlow Home, and dedicated case-study URLs.
- **Product requirements brief** - an interactive HTML split between TurnFlow Home and TechSync Ops.
- **Journal page** - real written content, with a browsable index and dedicated URLs for each published Field Note.
- **SEO foundation** - metadata helper, canonical URLs, sitemap, robots file, social preview asset, Journal article URLs, and Work case-study URLs.
- **ImageWithFallback** - a small utility for handling broken image URLs cleanly.

## Still In Progress

- Add the next testing tools to Lab.
- Promote tools from Lab to Work only after they have enough proof, screenshots, and public-safe positioning.
- Replace "Demo coming soon" once PM Ops Map, m3ldSync, and TurnFlow Home have hosted demo URLs.
- Finish TechSync Ops accessibility notes and visual polish before treating its hosted staging loop as public promotion.
- Refresh TurnFlow Home screenshots again after the public hosted demo is final, even though the current case-study page now matches the latest README screenshot set.
- Contact is intentionally email-first for v1; LinkedIn or a form can be added later.
- Newsletter-style plumbing is intentionally minimal until there is a real service behind it.
- The repo includes a larger shadcn/ui component set than the site currently uses.
- High-grade SEO still needs prerendering/static HTML, Search Console submission, live metadata validation, and future screenshot refreshes as each tool matures.

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
| Components | Radix UI + shadcn/ui |
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

This is a Vite single-page React app. Static hosts should serve `dist/` and send all routes back to `index.html` so direct URLs like `/about` and `/journal` work after refresh.

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
npm run serve
npm run typecheck
```

## Project Structure

```text
src/
  app/
    App.tsx                  # Home page
    AppRouter.tsx            # Route definitions
    Layout.tsx               # Shared navbar and animated background wrapper
    components/
      JournalBody.tsx        # Shared Field Note body renderer
      Navbar.tsx             # Scroll-aware responsive navigation
      Seo.tsx                # Route-aware metadata helper
      BeatingBrain.tsx       # Pulsing blob background
      RollingHeptagon.tsx    # Floating 7-sided animated shapes
      Spiral.tsx             # SVG icon component
      shared/
        ImageWithFallback.tsx
      ui/                    # shadcn/ui component library
    constants/
      heptagons.ts           # Shared animation config for heptagons
    data/
      workCaseStudies.ts     # Shared Work case-study data
    pages/
      About.tsx
      Contact.tsx
      JournalEntry.tsx
      Journal.tsx
      Lab.tsx
      NotFound.tsx
      WorkCaseStudy.tsx
      Work.tsx
  styles/
    fonts.css
    index.css
    tailwind.css
    text.js
    theme.css
  main.tsx
  vite-env.d.ts
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
