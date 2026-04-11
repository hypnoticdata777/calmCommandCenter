# Calm Command Center

A dark, atmospheric portfolio site built to feel like a calm operator's dashboard — serious, minimal, and alive.

## What it is

A single-page portfolio with an animated background made of pulsing red glows and floating geometric shapes. The design language is dark and editorial: near-black background, red accents, and serif typography (Playfair Display + Crimson Text) to create a dramatic but restrained presence.

## What's inside

- **BeatingBrain** — four layered red blobs that pulse at different speeds, creating an organic breathing atmosphere in the background
- **RollingHeptagon** — three 7-sided shapes that wander across the screen along different paths and speeds, each with a small ball rolling inside
- **Hero section** — name, tagline, three guiding principles, and an email capture form for launch signups
- **ImageWithFallback** — utility component that gracefully handles broken image URLs with a clean placeholder
- **Accessibility** — all animations respect the OS-level "reduce motion" setting (`prefers-reduced-motion`)

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Language | TypeScript |
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
│   ├── App.tsx                  # Root component — main page layout
│   └── components/
│       ├── BeatingBrain.tsx     # Pulsing red blob background
│       ├── RollingHeptagon.tsx  # Floating 7-sided animated shapes
│       ├── Spiral.tsx           # Eye icon SVG
│       ├── shared/              # Reusable utility components
│       │   └── ImageWithFallback.tsx
│       └── ui/                  # shadcn/ui component library
├── styles/
│   ├── index.css
│   ├── fonts.css
│   ├── tailwind.css
│   └── theme.css
└── main.tsx
```

## Attributions

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for licensing details on third-party components and assets.
