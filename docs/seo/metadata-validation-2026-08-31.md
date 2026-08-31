# h777 SEO Metadata Validation - 2026-08-31

## Scope

V9 validates the live SEO surface after V8 static prerendering.

This pass focuses on:

- live sitemap routes,
- route-specific metadata,
- canonical URLs,
- Open Graph and X/Twitter cards,
- JSON-LD structured data,
- static fallback content,
- robots/sitemap health,
- social image availability,
- and the first Google Search Console indexing request.

## What Changed

Added `scripts/validate-seo.mjs` and the npm script:

```txt
npm run validate:seo
```

The validator reads `public/sitemap.xml`, fetches the live URLs on `https://h777.dev`, and checks the production HTML response for every public route.

## Automated Checks

The validator checks:

- sitemap URL count and duplicate URLs,
- live `robots.txt` response,
- live `sitemap.xml` response,
- `200` status for every sitemap route,
- route-specific `<title>`,
- route-specific meta description,
- canonical URL matching the sitemap URL,
- indexable robots tag,
- Open Graph title, description, URL, image, and image alt text,
- X/Twitter title, description, card type, and image,
- static `seo-fallback` content,
- JSON-LD parseability,
- expected schema types by route,
- and live availability of each unique social image.

## Route Validation Results

The live V9 validation passed across all 14 sitemap routes:

| URL | Expected schema confirmed |
|---|---|
| `https://h777.dev/` | `WebSite`, `Person` |
| `https://h777.dev/journal` | `WebSite`, `Person`, `Blog` |
| `https://h777.dev/journal/the-hackathon-blew-a-gasket` | `WebSite`, `Person`, `BlogPosting` |
| `https://h777.dev/journal/the-api-went-dark` | `WebSite`, `Person`, `BlogPosting` |
| `https://h777.dev/journal/the-picture-frame-was-real` | `WebSite`, `Person`, `BlogPosting` |
| `https://h777.dev/journal/complete-is-an-astonishingly-ambitious-word` | `WebSite`, `Person`, `BlogPosting` |
| `https://h777.dev/journal/the-silent-killer-of-property-management-operations` | `WebSite`, `Person`, `BlogPosting` |
| `https://h777.dev/lab` | `WebSite`, `Person`, `CollectionPage` |
| `https://h777.dev/work` | `WebSite`, `Person`, `CollectionPage` |
| `https://h777.dev/work/pm-ops-map` | `WebSite`, `Person`, `Article` |
| `https://h777.dev/work/techsync-ops` | `WebSite`, `Person`, `Article` |
| `https://h777.dev/work/turnflow-home` | `WebSite`, `Person`, `Article` |
| `https://h777.dev/about` | `WebSite`, `Person`, `ProfilePage` |
| `https://h777.dev/contact` | `WebSite`, `Person`, `ContactPage` |

## Social Image Results

The validator confirmed 4 unique social images are live and returned image content:

- default `og.png`,
- PM Ops Map case-study image,
- TechSync Ops case-study image,
- TurnFlow Home case-study image.

## Search Console Status

Google Search Console already confirmed:

- `https://h777.dev/` is on Google,
- the page is indexed,
- HTTPS is valid,
- sitemap submission succeeded,
- and the sitemap discovered 14 pages.

Owner action completed during V9:

- requested indexing for `https://h777.dev/`.

Remaining owner-side indexing actions:

- repeat URL Inspection and Request Indexing for `https://h777.dev/journal`,
- repeat it for `https://h777.dev/work`,
- repeat it for `https://h777.dev/journal/the-silent-killer-of-property-management-operations`,
- repeat it for `https://h777.dev/work/techsync-ops`,
- repeat it for `https://h777.dev/work/turnflow-home`.

## Verification Commands

Local build and live SEO validation both passed:

```txt
npm run build:check
npm run validate:seo
```

Validation output:

```txt
Validated 14 sitemap routes.
Validated 4 unique social images.
SEO validation passed.
```

## V9 Verdict

V9 is implemented and passing on the automated side.

The site now has a repeatable live SEO validator in the repo, and the live production pages pass the current metadata, canonical, structured-data, fallback-content, sitemap, robots, and social-image checks.

The only V9 item that remains partly manual is Search Console URL Inspection indexing requests for the remaining priority pages, because that action happens inside the verified site-owner Google account.
