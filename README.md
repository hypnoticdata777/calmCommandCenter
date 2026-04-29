# Calm Command Center

A quiet portfolio and personal site built around the feeling of a calm operator's dashboard: focused, minimal, atmospheric, and useful without trying to be loud.

## What It Is

Calm Command Center is a React/Vite portfolio site for `h777`. It has a multi-page structure, a persistent animated background, and a navigation system that changes shape depending on scroll position and screen size.

The current site is strongest as a visual and structural foundation. The home page, journal, about page, routing, theme system, animated background, and responsive navigation are in place. Some sections, especially Work and Contact, are intentionally simple placeholders while the real content is still being shaped.

By default the site opens in a dark editorial theme with red accents, serif typography, soft glows, and slow geometric motion. It also includes a light theme with cyan accents through the theme toggle.

## Current Pages

| Route | Current status |
|---|---|
| `/` | Home page with brand intro, manifesto copy, three principles, and an email capture UI |
| `/work` | Placeholder page for selected projects |
| `/lab` | Early page for open source tools, experiments, and utilities |
| `/journal` | Working journal page with several short field-note style entries |
| `/about` | More developed about page explaining the project's thinking and focus |
| `/contact` | Minimal contact placeholder |
| `*` | 404 page for unknown routes |

## What's Working

- **Responsive routing** - React Router powers the home page, subpages, and catch-all 404 route.
- **Shared layout** - the navbar and animated background are mounted once in `Layout.tsx`, so they persist across page navigation.
- **Navbar** - transparent desktop top bar at rest, floating right-side pill after scrolling, and a full-screen mobile overlay menu.
- **Theme toggle** - dark mode is the default, with a light/cyan theme available through the nav.
- **BeatingBrain** - layered blurred blobs that pulse at different speeds to create the breathing background atmosphere.
- **RollingHeptagon** - three animated 7-sided shapes that drift around the viewport, each with a small moving dot inside.
- **Home page** - a calm hero section with the `h777` mark, positioning copy, principles, and a non-wired email capture form.
- **Journal page** - a real content page with structured entries rather than only placeholder text.
- **ImageWithFallback** - a small reusable utility for handling broken image URLs gracefully.

## Still In Progress

- The Work page does not yet list real projects.
- The Contact page does not yet expose a real contact method.
- The email capture UI prevents page reloads, but it is not connected to a backend or mailing service yet.
- The Lab page has positioning copy, but no individual tools or experiments listed yet.
- A number of shadcn/ui components are present in the codebase, but most are not actively used by the current pages.

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

### Easiest On Windows

Double-click `start-dev.cmd`.

It installs dependencies if needed, starts Vite, and opens the browser at [http://127.0.0.1:5173](http://127.0.0.1:5173).

### Terminal

```bash
npm install
npm start
```

Then open [http://127.0.0.1:5173](http://127.0.0.1:5173).

## Useful Scripts

```bash
npm run dev
npm start
npm run build
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

The project uses serif typography to make the site feel editorial and deliberate:

- **Playfair Display** for headings, logo-like text, buttons, and display moments.
- **Crimson Text** for body copy and form text.

The default dark theme uses:

| Token | Current value | Usage |
|---|---|---|
| Background | `oklch(0.145 0 0)` | Page background |
| Foreground | `oklch(0.985 0 0)` | Primary text |
| Brand | `#dc2626` | Accent links, active states, buttons, animated glow |
| Dividers | `foreground/10` | Horizontal rules and subtle borders |

The light theme switches the brand accent to `#0e7490` and adjusts the animated background tint accordingly.

## Attributions

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for licensing details on third-party components and assets.
