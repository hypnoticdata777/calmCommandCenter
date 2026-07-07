# Calm Command Center

A personal site and portfolio for `h777`, built to feel like a calm command center: focused, minimal, atmospheric, and easy to move through.

## What It Is

This is an early but solid version of the site. The main shape is already in place: routing, layout, theme switching, animated background, responsive navigation, the home page, the journal, and the about page.

Some parts are still light on content. Work, Lab, and Contact exist so the structure is ready, but they are not pretending to be finished. The next step is filling those pages with real projects, tools, and contact details.

The default look is dark and editorial: serif type, red accents, soft glows, and slow geometric motion. There is also a light theme with cyan accents available from the nav.

## Current Pages

| Route | Current status |
|---|---|
| `/` | Home page with brand intro, manifesto copy, three principles, and real CTAs into Lab and Journal |
| `/work` | Placeholder page for selected projects |
| `/lab` | Early page for tools, experiments, and utilities |
| `/journal` | Journal page with a few short field-note style entries |
| `/about` | Developed about page explaining the thinking behind the site |
| `/contact` | Minimal contact placeholder |
| `*` | 404 page for unknown routes |

## What's Working

- **Routing** - the home page, subpages, and 404 route are wired up with React Router.
- **Shared layout** - the navbar and animated background live in `Layout.tsx`, so they stay mounted while moving between pages.
- **Navbar** - a transparent desktop top bar at the top of the page, a right-side pill after scrolling, and a full-screen menu on mobile.
- **Theme toggle** - the site starts in dark mode, with a light/cyan version available from the nav.
- **BeatingBrain** - blurred background blobs that pulse at different speeds.
- **RollingHeptagon** - three animated 7-sided shapes that drift around the screen, each with a small moving dot inside.
- **Home page** - the `h777` mark, main positioning copy, three principles, and real CTAs into Lab and Journal.
- **Journal page** - real written content, not just placeholder cards.
- **ImageWithFallback** - a small utility for handling broken image URLs cleanly.

## Still In Progress

- Work still needs the actual project writeups.
- Lab still needs real tools, experiments, or links.
- Contact still needs a real way to reach me.
- Contact and newsletter-style plumbing are intentionally minimal until there is a real service behind them.
- The repo includes a larger shadcn/ui component set than the site currently uses.

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
