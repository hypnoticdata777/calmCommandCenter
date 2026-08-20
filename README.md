# Calm Command Center

A public portfolio site for `h777`, built to showcase property management tools, case studies, lab notes, and workflow experiments in a calm command center style.

## What It Is

This is the portfolio shell for the h777 tool ecosystem. The main shape is in place: routing, layout, theme switching, animated background, responsive navigation, the home page, Lab, Work, Journal, About, Contact, and 404 handling.

The site is now moving from shell to showcase. PM Ops Map, m3ldSync, TechSync Ops, and TurnFlow Home are the first featured case studies and tool entries. The next step is replacing "coming soon" links with hosted demos and adding the remaining ready/semi-ready tools.

The default look is dark and editorial: serif type, red accents, soft glows, and slow geometric motion. There is also a light theme with cyan accents available from the nav.

## Current Showcase

### PM Ops Map

PM Ops Map is the first flagship tool featured on the site.

- **Status:** Built / open source
- **Type:** Browser app
- **Audience:** New PMCs, owners, and operations managers
- **Source:** [hypnoticdata777/pm-ops-map](https://github.com/hypnoticdata777/pm-ops-map)
- **Download:** [latest release](https://github.com/hypnoticdata777/pm-ops-map/releases/latest)
- **Screenshots:** [docs/screenshots](https://github.com/hypnoticdata777/pm-ops-map/tree/master/docs/screenshots)

The Work page now includes the first real case study: **PM Ops Map: a day-one operating system for new property management companies.**

### m3ldSync

m3ldSync is the second showcase tool featured on the site.

- **Status:** Local POC / public demo packaged
- **Type:** CSV reconciliation and Kanban triage tool
- **Audience:** Maintenance managers and busy PM operators
- **Source:** [hypnoticdata777/m3ldSync](https://github.com/hypnoticdata777/m3ldSync)
- **Portfolio assets:** [docs/portfolio](https://github.com/hypnoticdata777/m3ldSync/tree/main/docs/portfolio)
- **Docs:** [README documentation](https://github.com/hypnoticdata777/m3ldSync#documentation)

The Work page now includes the second case study: **m3ldSync: turning maintenance export noise into action.**

### TechSync Ops

TechSync Ops is the third showcase tool featured on the site.

- **Status:** SaaS POC / backend + mobile foundation
- **Type:** PMC maintenance command platform
- **Audience:** PMCs, coordinators, technicians, vendors, and client-view users
- **Source:** [hypnoticdata777/Techsync](https://github.com/hypnoticdata777/Techsync)
- **Docs:** [README documentation](https://github.com/hypnoticdata777/Techsync#spec-coverage)
- **Requirements:** [Techsync SaaS requirements](https://github.com/hypnoticdata777/Techsync/blob/main/Techsync_SaaS_Requirements.md)

The Work page now includes the third case study: **TechSync Ops: the PMC command layer for maintenance dispatch and proof.**

### TurnFlow Home

TurnFlow Home is the fourth showcase tool featured on the site.

- **Status:** Launch-oriented SaaS POC candidate
- **Type:** Homeowner maintenance workspace
- **Audience:** Homeowners, small landlords, rental hosts, vendors, and trusted helpers
- **Source:** [hypnoticdata777/turnflow-mvp](https://github.com/hypnoticdata777/turnflow-mvp)
- **Docs:** [README documentation](https://github.com/hypnoticdata777/turnflow-mvp#documentation)
- **Readiness:** [current POC readiness](https://github.com/hypnoticdata777/turnflow-mvp#current-poc-readiness)

The Work page now includes the fourth case study: **TurnFlow Home: maintenance history for homeowners who want the proof.**

### Product Split Brief

The repo also includes an interactive requirements brief that separates the two maintenance products:

- **TurnFlow Home:** client/homeowner maintenance self-management, approvals, history, and proof.
- **TechSync Ops:** PMC maintenance operations, dispatch, technician workflows, client communication, and reporting.
- **Local file:** [`docs/product-requirements/maintenance-product-split.html`](docs/product-requirements/maintenance-product-split.html)

## Current Pages

| Route | Current status |
|---|---|
| `/` | Home page with brand intro, manifesto copy, three principles, and real CTAs into Lab and Journal |
| `/work` | Case studies shipped: PM Ops Map, m3ldSync, TechSync Ops, and TurnFlow Home |
| `/lab` | Tool shelf with PM Ops Map, m3ldSync, TechSync Ops, and TurnFlow Home as showcase entries |
| `/journal` | Journal page with a few short field-note style entries |
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
- **Home page** - the `h777` mark, main positioning copy, three principles, and real CTAs into Lab and Journal.
- **Lab page** - a product shelf for tools, starting with PM Ops Map, m3ldSync, TechSync Ops, TurnFlow Home, and real outbound links.
- **Work page** - the first four portfolio case studies, with positioning, links, problem/solution copy, builder notes, and screenshots where available.
- **Product requirements brief** - an interactive HTML split between TurnFlow Home and TechSync Ops.
- **Journal page** - real written content, not just placeholder cards.
- **ImageWithFallback** - a small utility for handling broken image URLs cleanly.

## Still In Progress

- Add the next ready tools to Lab.
- Write case studies for the remaining showcase-ready tools.
- Replace "Demo coming soon" once PM Ops Map, m3ldSync, TechSync Ops, and TurnFlow Home have hosted demo URLs.
- Add portfolio-safe TechSync Ops and TurnFlow Home screenshots or staged demo walkthroughs.
- Contact is intentionally email-first for v1; LinkedIn or a form can be added later.
- Newsletter-style plumbing is intentionally minimal until there is a real service behind it.
- The repo includes a larger shadcn/ui component set than the site currently uses.

## Content Roadmap

Short-term content plan:

1. PM Ops Map case study - shipped.
2. m3ldSync case study - shipped.
3. TechSync Ops case study - shipped.
4. TurnFlow Home case study - shipped.
5. Add the next ready tools as Lab entries with source/demo/screenshot links where available.
6. Add 3 semi-ready tools as clearly labeled in-progress entries.
7. Write one Work case study for each showcase-ready tool.
8. Host the portfolio and replace temporary demo placeholders with live URLs.
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
      Navbar.tsx             # Scroll-aware responsive navigation
      BeatingBrain.tsx       # Pulsing blob background
      RollingHeptagon.tsx    # Floating 7-sided animated shapes
      Spiral.tsx             # SVG icon component
      shared/
        ImageWithFallback.tsx
      ui/                    # shadcn/ui component library
    constants/
      heptagons.ts           # Shared animation config for heptagons
    pages/
      About.tsx
      Contact.tsx
      Journal.tsx
      Lab.tsx
      NotFound.tsx
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
