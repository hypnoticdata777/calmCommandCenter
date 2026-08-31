# h777 SEO Progress Log

Last updated: 2026-08-31

## Current Status

The h777 portfolio now has a real SEO foundation for the current React/Vite stack. Every main page, Field Note, and Work case study has a dedicated URL, route-aware metadata, article metadata, a reliable PNG social preview path, local screenshot assets for the current Work case studies, internal links that connect Journal, Lab, and Work, Google Search Console ownership, a submitted sitemap, live-validated static SEO HTML for all 14 public sitemap routes, a repeatable live SEO validator, breadcrumb structured data, and a performance budget baseline.

## Completed

### V1 - Metadata Foundation

Built and shipped:

- Added `src/app/components/Seo.tsx` for route-aware title, description, canonical, Open Graph, X/Twitter, robots, and structured data updates.
- Added page-specific metadata for Home, Journal, Lab, Work, About, Contact, and 404.
- Added canonical URLs pointing to `https://h777.dev`.
- Added `public/robots.txt`.
- Added `public/sitemap.xml`.
- Added `public/og-card.svg` as the first branded social preview asset.
- Added basic structured data for WebSite, Person, ProfilePage, Blog, CollectionPage, and page-level records.

Commit: `9890243 Add SEO v1 metadata and crawl files`

### V2 - Journal Article URLs

Built and shipped:

- Kept `/journal` as the browsable Journal index.
- Added dedicated article routes under `/journal/:slug`.
- Added `src/app/pages/JournalEntry.tsx`.
- Added `src/app/components/JournalBody.tsx` so the Journal index and article pages share the same article rendering.
- Added slugs, ISO dates, and excerpts to each published Field Note.
- Added article-specific SEO titles, descriptions, canonical URLs, and BlogPosting structured data.
- Added `Preview` and `Read` actions to the Journal index.
- Added all published Field Notes to the sitemap:
  - `/journal/the-hackathon-blew-a-gasket`
  - `/journal/the-api-went-dark`
  - `/journal/the-picture-frame-was-real`
  - `/journal/complete-is-an-astonishingly-ambitious-word`
  - `/journal/the-silent-killer-of-property-management-operations`

Commit: `cf8b2ea Add dedicated journal article routes`

### V3 - Work Case Study URLs

Built and shipped:

- Kept `/work` as the Work overview page.
- Added dedicated case-study routes under `/work/:slug`.
- Added `src/app/data/workCaseStudies.ts` as the shared Work case-study data source.
- Added `src/app/pages/WorkCaseStudy.tsx` as the reusable case-study page template.
- Added `Read case study` links to the Work overview.
- Added case-study-specific SEO titles, descriptions, canonical URLs, article-style metadata, and structured data.
- Added all Work case studies to the sitemap:
  - `/work/pm-ops-map`
  - `/work/techsync-ops`
  - `/work/turnflow-home`

Commit: `72c3321 Add dedicated Work case study routes`

### V4 - Social Preview And Article Metadata Polish

Built and shipped:

- Added `public/og.png` as a reliable `1200x630` PNG social preview card for LinkedIn, X/Twitter, Slack, text previews, and other share surfaces.
- Kept `public/og-card.svg` as the editable/source-style preview asset, but changed the live metadata default to the PNG card.
- Added `public/favicon.svg` for small browser, bookmark, and tab identity.
- Updated `index.html` so crawlers and preview tools see the PNG preview before React loads.
- Added Open Graph image alt text, secure image URL, width, height, and PNG type for the default share card.
- Added X/Twitter image alt text.
- Added route-aware article metadata support for published time, modified time, section, and author.
- Wired Field Note pages with article published/modified dates, section, and author.
- Wired Work case-study pages with modified date, section, author, and case-study image alt text.
- Added static WebSite and Person JSON-LD in `index.html` so the base identity is present even before the SPA route metadata runs.

Commit: `c6cb543 Add SEO v4 social preview polish`

### V5 - Local Screenshot SEO

Built and shipped:

- Added local Work screenshot folders under `public/images/work/`.
- Copied PM Ops Map screenshots from the public source repo into the portfolio:
  - `public/images/work/pm-ops-map/dashboard.png`
  - `public/images/work/pm-ops-map/tracking-tasks.png`
  - `public/images/work/pm-ops-map/team-manager.png`
- Copied the current TechSync Ops README screenshot set into the portfolio:
  - `public/images/work/techsync-ops/admin-workspace.png`
  - `public/images/work/techsync-ops/client-portal.png`
  - `public/images/work/techsync-ops/viewer-snapshot.png`
  - `public/images/work/techsync-ops/vendor-desk.png`
- Copied the current TurnFlow Home README screenshot set into the portfolio:
  - `public/images/work/turnflow-home/login.png`
  - `public/images/work/turnflow-home/dashboard.png`
  - `public/images/work/turnflow-home/new-request-checklist.png`
  - `public/images/work/turnflow-home/request-detail.png`
  - `public/images/work/turnflow-home/properties.png`
  - `public/images/work/turnflow-home/property-vault.png`
  - `public/images/work/turnflow-home/maintenance-calendar.png`
  - `public/images/work/turnflow-home/vendor-portal.png`
- Replaced PM Ops Map remote GitHub raw screenshot URLs with local portfolio paths.
- Added descriptive alt text, width, and height to Work case-study screenshot records.
- Added width, height, and async decoding attributes to rendered screenshots to improve image stability.
- Added screenshot URLs to case-study structured data.
- Gave TechSync Ops and TurnFlow Home dedicated screenshot sections on their case-study pages using the local assets.
- Aligned TurnFlow Home case-study image titles, captions, alt text, and ordering with the latest README screenshot evidence.
- Added a compact TurnFlow Home screenshot cluster to the main Work overview intro so the Work page itself shows visual proof instead of only the dedicated case-study page.
- Added a compact TechSync Ops screenshot cluster to the main Work overview intro so its current role-lane screenshots are visible before the problem section.
- Aligned TechSync Ops copy with the latest README positioning: hosted Vercel web/API staging, Neon Postgres demo data, six role-aware lanes, scoped visibility, proof capture, closeout records, and explicit synthetic-data POC boundaries.

### V6 - Internal Linking And Content Relationships

Built and shipped:

- Added `src/app/components/RelatedLinks.tsx` as a shared related-link section for internal content paths.
- Added related links to every published Field Note so each article points toward the matching tools, follow-up notes, Lab, or Work shelf.
- Added related links to each Work case study so PM Ops Map, TechSync Ops, and TurnFlow Home point back to the Field Notes that explain the operating philosophy behind them.
- Added a Lab pathway section that connects the Journal -> Lab -> Work loop directly from the Lab page.
- Added `isRelatedTo` structured data hints on Journal article routes and Work case-study routes.
- Updated sitemap `lastmod` values for the routes whose visible internal-linking content changed.

Commit: `Add SEO v6 internal links`

### V7 - Live Validation

Built and shipped:

- Checked the deployed `https://h777.dev` site after the V6 internal-linking pass.
- Confirmed live `200` responses for Home, Journal, FN5, Work, TechSync Ops, Lab, sitemap, robots, and the PNG social card.
- Confirmed the live sitemap contains 14 public URLs.
- Confirmed `robots.txt` allows crawling and points to `https://h777.dev/sitemap.xml`.
- Confirmed `https://h777.dev/og.png` is live as `image/png`.
- Confirmed the deployed JavaScript bundle contains FN5, V6 related-link copy, Work relationship copy, listen-mode copy, and TechSync Ops case-study copy.
- Verified `h777.dev` ownership in Google Search Console through Namecheap DNS.
- Submitted `https://h777.dev/sitemap.xml` in Google Search Console and confirmed `Success` with 14 discovered pages.
- Documented the important limitation that direct nested-route HTML still serves the same React/Vite app shell before route-specific metadata is applied client-side.
- Added the full validation record at `docs/seo/live-validation-2026-08-31.md`.

Commit: `Add SEO v7 live validation log`

### V8 - Static SEO Prerender

Built and shipped:

- Added `scripts/prerender-seo.mjs` as a build-time static route generator.
- Added the `prerender:seo` npm script.
- Updated the normal production build so it runs Vite first, then generates route-specific HTML files.
- Generated static `index.html` files for all 14 public sitemap routes.
- Added route-specific titles, descriptions, canonical URLs, Open Graph metadata, X/Twitter metadata, article metadata, JSON-LD structured data, fallback readable body content, and related internal links before React loads.
- Included Field Note article routes, Work case-study routes, Journal, Lab, Work, About, Contact, and Home.
- Kept the existing React/Vite user experience intact while giving crawlers and social preview tools stronger first-response HTML.
- Preserved production asset links from the Vite build and added font preconnect hints to generated route files.
- Local build check passed and confirmed `Prerendered 14 SEO route files.`
- Spot checks confirmed the generated FN5 route contains the correct route title, canonical URL, fallback content, `BlogPosting` structured data, and `isRelatedTo` relationship hints.
- Pushed the V8 build to GitHub and let Vercel deploy it.
- Live-validated all 14 sitemap routes on `https://h777.dev`.
- Confirmed every live route returns a `200`, route-specific `<title>`, route-specific canonical URL, static fallback content, and JSON-LD structured data before React loads.

Commit: `Add SEO v8 static prerender`

### V9 - Metadata And Structured-Data Validation

Built and shipped:

- Added `scripts/validate-seo.mjs` as a repeatable live SEO validator.
- Added the `validate:seo` npm script.
- Validated the live sitemap URL count and checked for duplicate sitemap URLs.
- Confirmed live `robots.txt` responds and points to `https://h777.dev/sitemap.xml`.
- Confirmed live `sitemap.xml` responds as valid-looking XML.
- Validated all 14 live sitemap routes on `https://h777.dev`.
- Confirmed every route returns a `200`.
- Confirmed every route has a route-specific title, meta description, canonical URL, indexable robots tag, Open Graph metadata, X/Twitter metadata, static fallback content, and parseable JSON-LD.
- Confirmed expected schema types by page family:
  - Home: `WebSite`, `Person`
  - Journal index: `Blog`
  - Field Notes: `BlogPosting`
  - Lab and Work: `CollectionPage`
  - Work case studies: `Article`
  - About: `ProfilePage`
  - Contact: `ContactPage`
- Confirmed 4 unique social images are live and return image content.
- Confirmed the homepage is indexed in Google Search Console.
- Logged the owner-side indexing request for `https://h777.dev/`.
- Added the V9 validation record at `docs/seo/metadata-validation-2026-08-31.md`.

Commit: `Add SEO v9 validation checks`

### V10 - Breadcrumb Schema And Performance Baseline

Built and shipped:

- Added `BreadcrumbList` structured data support to `src/app/components/Seo.tsx`.
- Added client-side breadcrumb schema to Journal, Field Notes, Lab, Work, Work case studies, About, and Contact.
- Added matching static breadcrumb schema generation to `scripts/prerender-seo.mjs`.
- Upgraded `scripts/validate-seo.mjs` to require breadcrumb schema on every non-home sitemap route.
- Added breadcrumb quality checks for item count, first item, sequential positions, absolute URLs, and current-page final item.
- Added `scripts/validate-performance.mjs` as a repeatable performance budget baseline.
- Added the `validate:performance` npm script.
- Added `docs/seo/content-release-checklist.md` for future Field Notes, Lab experiments, and Work case studies.
- Added the V10 record at `docs/seo/performance-and-breadcrumbs-2026-08-31.md`.
- Confirmed local build passes and still prerenders 14 SEO route files.
- Confirmed generated static HTML includes breadcrumb schema for representative Journal and Work detail routes.
- Confirmed the performance budget passes.

Local performance snapshot:

- Main JS: `469.3 KB` raw / `143.4 KB` gzip.
- Main CSS: `107.3 KB` raw / `16.5 KB` gzip.
- JS/CSS total: `576.6 KB` raw / `159.9 KB` gzip.
- Work images: `16` files / `1593.0 KB` total.
- Largest Work image: `public/images/work/pm-ops-map/dashboard.png` at `254.5 KB`.

Commit: `Add SEO v10 breadcrumbs and performance budget`

## Challenges

- The site is still a Vite single-page React app for the user experience, but V8 now gives every public sitemap route its own static SEO HTML before hydration.
- The Journal and Work pages were originally long overview pages. They needed dedicated URL structure without disrupting the existing visual experience.
- The Work overview and new Work case-study data currently duplicate some content. This is acceptable short term, but future updates should reduce drift by making the overview read from the shared data file.
- Social previews now use a PNG card, but live social preview validation still needs to happen after Vercel deploys the change.
- The current Work screenshot set is now local. TechSync Ops and TurnFlow Home now match their latest README screenshot sets.
- V6 added meaningful internal routes, but live crawler validation still needs to happen after deploy because the app remains client-rendered.
- V7 confirmed the deployment is healthy, but it also confirmed that route-specific metadata was not present in the first HTML response for nested routes before V8.
- V8 local preview through Vite still returned the app shell for nested routes, but Vercel production correctly served the generated nested `index.html` files before the catch-all app fallback.
- Search Console indexing requests are partially manual because URL Inspection actions happen inside the verified Google account. The homepage request is complete; priority inner pages should be requested next.
- The repo validator checks schema presence and parseability, but external rich-result tools should still be used for Google's final interpretation.
- Real Core Web Vitals field data cannot be forced from the repo. The new performance validator is a build-budget guardrail, and Search Console or browser lab tooling should still be used for LCP, INP, and CLS.

## Still Pending For High-Grade SEO

1. Request indexing for the highest-priority non-home pages in Google Search Console: Journal, Work, FN5, TechSync Ops, and TurnFlow Home.
2. Check LinkedIn and X/Twitter share previews from their external preview tools or by posting private/test links where available.
3. Run external rich-result/schema checks against representative Journal and Work pages.
4. Refresh TechSync Ops and TurnFlow Home screenshots again after their hosted demos are polished.
5. Add specific share images for top case studies when public screenshots are final.
6. Refactor Work overview to pull from `workCaseStudies.ts` to prevent copy drift.
7. Run Search Console Core Web Vitals and mobile performance checks after Google has enough field data.
8. Consider browser lab tooling for LCP, INP, CLS, and bundle attribution.

## Next Recommended SEO Version

V11 should focus on external validation and content-source cleanup:

- Finish manual indexing requests for priority inner pages.
- Run external rich-result and social preview checks.
- Consider a shared content manifest so sitemap, prerender metadata, page content, and validators all pull from one source.
- Review Core Web Vitals in Search Console once field data is available.

## Operating Rule Going Forward

Every new public piece of content should get:

- A stable URL.
- A readable title.
- A concise description.
- A canonical URL.
- Structured data.
- A sitemap entry.
- At least one internal link pointing to it.
- A note in this log when the SEO structure changes.
