# h777 SEO Progress Log

Last updated: 2026-08-30

## Current Status

The h777 portfolio now has a real SEO foundation for the current React/Vite stack. The site is not yet at the highest possible SEO grade because it still serves one app shell before React renders each route, but the public structure is now much stronger: every main page, Field Note, and Work case study has a dedicated URL, route-aware metadata, article metadata, a reliable PNG social preview path, and local screenshot assets for the current Work case studies.

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
- Copied the strongest available local TechSync Ops proof screenshot into the portfolio:
  - `public/images/work/techsync-ops/new-work-order.png`
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

## Challenges

- The site is a Vite single-page React app, so the browser initially receives one `index.html`. Route-specific metadata updates after React loads. This is useful, but not as strong as route-specific static HTML.
- The Journal and Work pages were originally long overview pages. They needed dedicated URL structure without disrupting the existing visual experience.
- The Work overview and new Work case-study data currently duplicate some content. This is acceptable short term, but future updates should reduce drift by making the overview read from the shared data file.
- Social previews now use a PNG card, but live social preview validation still needs to happen after Vercel deploys the change.
- The current Work screenshot set is now local, and TurnFlow Home now matches its latest README screenshot set. TechSync Ops still needs a fuller screenshot pass once its walkthrough and hosted demo state are final.

## Still Pending For High-Grade SEO

1. Add prerendering or static HTML output so each route serves its own real HTML before JavaScript runs.
2. Refresh TechSync Ops and TurnFlow Home screenshot sets after their hosted demos are polished.
3. Add specific share images for top case studies when public screenshots are final.
4. Submit `https://h777.dev/sitemap.xml` in Google Search Console.
5. Validate live metadata after Vercel deploys using Google Search Console and social preview/debug tools.
6. Add stronger internal links between Field Notes, Lab experiments, and Work case studies.
7. Add schema validation checks for WebSite, Person, BlogPosting, Article, CollectionPage, and SoftwareApplication records.
8. Refactor Work overview to pull from `workCaseStudies.ts` to prevent copy drift.
9. Add a content-update checklist for every new Field Note and Work case study: slug, title, excerpt, ISO date, route, metadata, structured data, sitemap entry, and internal links.
10. Run a Core Web Vitals and mobile performance pass after local images are added.

## Next Recommended SEO Version

V6 should focus on live validation and index submission:

- Validate the deployed PNG social card in LinkedIn and other preview tools after Vercel finishes deploying.
- Submit `https://h777.dev/sitemap.xml` in Google Search Console.
- Run a live metadata/schema pass against the deployed routes.

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
