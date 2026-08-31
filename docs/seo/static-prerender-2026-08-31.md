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

## Important Note

Vite preview still served the app shell for nested routes during local preview. That appears to be local preview fallback behavior, not proof that Vercel will ignore the generated files.

The project already has a Vercel SPA rewrite. Vercel gives filesystem routes precedence before rewrites, so the generated nested `index.html` files should be served in production before the catch-all app-shell fallback.

## V8 Verdict

V8 is implemented locally and ready for deployment.

Live V8 validation should happen after Vercel deploys the V8 commit. The check should confirm that direct requests to nested routes return route-specific static HTML, especially:

- `https://h777.dev/journal/the-silent-killer-of-property-management-operations`
- `https://h777.dev/work/techsync-ops`
- `https://h777.dev/lab`
