# Calm Command Center

A dark, atmospheric portfolio site built to feel like a calm operator's dashboard — serious, minimal, and alive.

## What it is

A multi-page portfolio with an animated background made of pulsing red glows and floating geometric shapes. The design language is dark and editorial: near-black background, red accents, and serif typography (Playfair Display + Crimson Text) to create a dramatic but restrained presence.

Navigation adapts to context — a transparent top bar at rest, a floating right-side pill when scrolling, and a full-screen overlay on mobile.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, principles, email capture |
| `/work` | Selected projects |
| `/lab` | Open source tools and experiments |
| `/journal` | Writing on systems and operations |
| `/about` | Who's behind this |
| `/contact` | Direct contact |

## What's inside

- **Navbar** — scroll-aware navigation: top bar at rest, vertical pill on the right when scrolled (fades until hovered), full-screen overlay on mobile with a `☰` trigger
- **BeatingBrain** — four layered red blobs that pulse at different speeds, creating an organic breathing atmosphere in the background
- **RollingHeptagon** — three 7-sided shapes that wander across the screen along different paths and speeds, each with a small ball rolling inside
- **Hero section** — name, tagline, three guiding principles, and an email capture form for launch signups
- **ImageWithFallback** — utility component that gracefully handles broken image URLs with a clean placeholder

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Language | TypeScript |
| Routing | React Router v7 |
| Styling | Tailwind CSS v4 |
| Animations | Motion (motion/react) |
| Components | Radix UI + shadcn/ui |
| Icons | Lucide React |

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Project structure

```
src/
├── app/
│   ├── App.tsx                  # Home page component
│   ├── AppRouter.tsx            # All route definitions
│   ├── Layout.tsx               # Navbar wrapper — shared across all pages
│   ├── components/
│   │   ├── Navbar.tsx           # Scroll-aware navigation bar
│   │   ├── BeatingBrain.tsx     # Pulsing red blob background
│   │   ├── RollingHeptagon.tsx  # Floating 7-sided animated shapes
│   │   ├── Spiral.tsx           # Eye icon SVG
│   │   ├── shared/              # Reusable utility components
│   │   │   └── ImageWithFallback.tsx
│   │   └── ui/                  # shadcn/ui component library
│   └── pages/
│       ├── Work.tsx
│       ├── Lab.tsx
│       ├── Journal.tsx
│       ├── About.tsx
│       └── Contact.tsx
├── styles/
│   ├── index.css
│   ├── fonts.css
│   ├── tailwind.css
│   └── theme.css
└── main.tsx
```

## Color palette

| Token | Value | Usage |
|---|---|---|
| Background | `#0a0a0a` | Page background |
| Accent | `#dc2626` | Headings, active links, buttons |
| Text full | `white` | Primary headings |
| Text 90% | `white/90` | Body text |
| Text 60% | `white/60` | Taglines, subtle copy |
| Text 40% | `white/40` | Labels, least prominent |
| Dividers | `white/10` | Horizontal rules, borders |

## Attributions

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for licensing details on third-party components and assets.






npm install
npm run dev
If you want, I can make this even easier by adding a double-clickable Windows .bat file like start-dev.bat in the repo.
