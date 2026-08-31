# h777 Live SEO Validation - 2026-08-31

## Scope

V7 checked the deployed `https://h777.dev` site after the V6 internal-linking pass and Journal listen-mode work.

## Live Route Health

All checked public URLs returned `200`.

| URL | Result |
|---|---|
| `https://h777.dev/` | `200`, `text/html` |
| `https://h777.dev/journal` | `200`, `text/html` |
| `https://h777.dev/journal/the-silent-killer-of-property-management-operations` | `200`, `text/html` |
| `https://h777.dev/work` | `200`, `text/html` |
| `https://h777.dev/work/techsync-ops` | `200`, `text/html` |
| `https://h777.dev/lab` | `200`, `text/html` |
| `https://h777.dev/sitemap.xml` | `200`, `application/xml` |
| `https://h777.dev/robots.txt` | `200`, `text/plain` |
| `https://h777.dev/og.png` | `200`, `image/png` |

## Sitemap And Robots

The live sitemap contains 14 URLs:

- `https://h777.dev/`
- `https://h777.dev/journal`
- `https://h777.dev/journal/the-hackathon-blew-a-gasket`
- `https://h777.dev/journal/the-api-went-dark`
- `https://h777.dev/journal/the-picture-frame-was-real`
- `https://h777.dev/journal/complete-is-an-astonishingly-ambitious-word`
- `https://h777.dev/journal/the-silent-killer-of-property-management-operations`
- `https://h777.dev/lab`
- `https://h777.dev/work`
- `https://h777.dev/work/pm-ops-map`
- `https://h777.dev/work/techsync-ops`
- `https://h777.dev/work/turnflow-home`
- `https://h777.dev/about`
- `https://h777.dev/contact`

The live robots file allows crawling and points to the sitemap:

```txt
User-agent: *
Allow: /

Sitemap: https://h777.dev/sitemap.xml
```

## Deployment Content Check

The live JavaScript bundle included the expected latest content:

- Field Note 5: `The Silent Killer of Property Management Operations`
- V6 related-link copy: `Related notes and tools`
- Work case-study relationship copy: `How this connects to the rest of h777`
- Journal listen-mode fallback copy: `Listen unavailable in this browser`
- TechSync Ops case-study title copy

This confirms the latest pushed V6 and listen-mode work reached the public deployment.

## Social Preview Check

The site-wide PNG social card is live at:

- `https://h777.dev/og.png`

The asset returned `200`, `image/png`, and a non-empty response.

## Important SEO Caveat

The deployed site is still a React/Vite single-page application. Direct requests to nested routes return the same `index.html` app shell before React runs.

Observed on direct HTML fetches:

- Root, Journal detail, and Work detail routes all returned the same shell size.
- The initial static title is the site-wide title.
- The initial static canonical points to `https://h777.dev/`.
- Route-specific title, canonical, Open Graph, article metadata, and structured data are still applied client-side after React loads.

This is acceptable for the current stage, but it is not the highest-grade SEO shape. The serious next step is prerendering or static HTML output so every route serves route-specific metadata before JavaScript runs.

## Search Console Status

Google Search Console owner verification and sitemap submission were completed from the site-owner account.

Verified owner steps completed:

1. Verified `h777.dev` through Namecheap DNS using Google's TXT record.
2. Submitted `https://h777.dev/sitemap.xml` in Google Search Console.
3. Confirmed Search Console status: `Success`.
4. Confirmed discovered pages: `14`.
5. Confirmed last read date: `2026-08-31`.

Recommended remaining owner step:

1. Use URL Inspection to request indexing for the home page, Journal, Work, and the latest Field Note.

## V7 Verdict

V7 passed for live route health, sitemap availability, robots availability, share-card availability, deployed bundle freshness, Google Search Console ownership verification, and sitemap submission.

V7 did not eliminate the SPA metadata limitation. V8 addresses that locally with static route HTML; the next step is confirming the same route-specific HTML is served live after deployment.
