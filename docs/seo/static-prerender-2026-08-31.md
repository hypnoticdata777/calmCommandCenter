# h777 Static SEO Prerender - 2026-08-31

## Scope

V8 adds build-time static SEO HTML for the public h777 routes while keeping the existing React/Vite app experience.

## Why This Was Needed

Before V8, every direct route request returned the same Vite app shell first. React updated the title, canonical URL, metadata, and structured data after the app loaded.

That was useful for users and modern crawlers, but weaker for:

- social preview tools,
- simple crawlers,
- direct HTML inspection,
- route-specific canonical URLs,
- article metadata before JavaScript runs,
- and the highest-grade SEO target for this stack.

## What Changed

- Added `scripts/prerender-seo.mjs`.
- Added the `prerender:seo` npm script.
- Updated the normal production build so it runs:

```txt
vite build && npm run prerender:seo
```

- The prerender step reads the built `dist/index.html`.
- It writes one route-specific `index.html` file for every public sitemap route.
- Each generated route gets its own:
  - `<title>`
  - meta description
  - canonical URL
  - Open Graph title, description, URL, image, image alt text, and image dimensions when available
  - X/Twitter card metadata
  - article metadata for Field Notes and Work case studies
  - JSON-LD structured data
  - minimal readable fallback content inside `#root`
  - related internal links for crawlers and no-JS visitors

## Generated Route Files

The V8 build generates 14 `index.html` files, matching the current sitemap:

- `/`
- `/journal`
- `/journal/the-hackathon-blew-a-gasket`
- `/journal/the-api-went-dark`
- `/journal/the-picture-frame-was-real`
- `/journal/complete-is-an-astonishingly-ambitious-word`
- `/journal/the-silent-killer-of-property-management-operations`
- `/lab`
- `/work`
- `/work/pm-ops-map`
- `/work/techsync-ops`
- `/work/turnflow-home`
- `/about`
- `/contact`

## Local Verification

Local build check passed:

```txt
npm run build:check
```

The build produced:

```txt
Prerendered 14 SEO route files.
```

Spot checks confirmed that the generated FN5 route includes:

- route-specific title,
- route-specific canonical URL,
- static fallback content,
- `BlogPosting` structured data,
- and `isRelatedTo` structured data.

## Live Verification

After the V8 commit deployed through Vercel, all 14 public sitemap routes were checked live on `https://h777.dev`.

Confirmed for every route:

- `200` response
- route-specific `<title>`
- route-specific canonical URL
- static fallback content inside `#root`
- JSON-LD structured data

Representative live checks:

| URL | Confirmed title |
|---|---|
| `https://h777.dev/journal/the-silent-killer-of-property-management-operations` | `Field Note 5: The Silent Killer of Property Management Operations \| h777 Journal` |
| `https://h777.dev/work/techsync-ops` | `TechSync Ops Case Study \| Maintenance Dispatch and Proof \| h777 Work` |
| `https://h777.dev/lab` | `Lab \| h777 Property Management Tool Experiments` |

## Important Note

Vite preview still served the app shell for nested routes during local preview. That was local preview fallback behavior, not production behavior.

Production Vercel now serves the generated nested `index.html` files before the catch-all app-shell fallback.

## V8 Verdict

V8 is implemented, deployed, and live-validated across all 14 sitemap routes.
