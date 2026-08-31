# h777 SEO Progress Log

Last updated: 2026-08-30

## Current Status

The h777 portfolio now has a real SEO foundation for the current React/Vite stack. The site is not yet at the highest possible SEO grade because it still serves one app shell before React renders each route, but the public structure is now much stronger: every main page, Field Note, and Work case study has a dedicated URL and route-aware metadata.

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

## Challenges

- The site is a Vite single-page React app, so the browser initially receives one `index.html`. Route-specific metadata updates after React loads. This is useful, but not as strong as route-specific static HTML.
- The Journal and Work pages were originally long overview pages. They needed dedicated URL structure without disrupting the existing visual experience.
- The Work overview and new Work case-study data currently duplicate some content. This is acceptable short term, but future updates should reduce drift by making the overview read from the shared data file.
- Social previews currently use an SVG card. It works as a first asset, but PNG/JPG is safer across LinkedIn, texts, Discord, Slack, and other preview systems.
- Tool screenshots are partly external GitHub raw URLs. Local optimized screenshots will give better control, speed, and image SEO.

## Still Pending For High-Grade SEO

1. Add prerendering or static HTML output so each route serves its own real HTML before JavaScript runs.
2. Replace `public/og-card.svg` with a polished `public/og.png` or `public/og.jpg`.
3. Add local optimized screenshots for PM Ops Map, TechSync Ops, TurnFlow Home, and future Work case studies.
4. Add specific share images for top case studies when public screenshots are ready.
5. Submit `https://h777.dev/sitemap.xml` in Google Search Console.
6. Validate live metadata after Vercel deploys using Google Search Console and social preview/debug tools.
7. Add stronger internal links between Field Notes, Lab experiments, and Work case studies.
8. Add schema validation checks for WebSite, Person, BlogPosting, Article, CollectionPage, and SoftwareApplication records.
9. Refactor Work overview to pull from `workCaseStudies.ts` to prevent copy drift.
10. Add a content-update checklist for every new Field Note and Work case study: slug, title, excerpt, ISO date, route, metadata, structured data, sitemap entry, and internal links.
11. Run a Core Web Vitals and mobile performance pass after local images are added.

## Next Recommended SEO Version

V4 should focus on social and image SEO:

- Create a safer PNG/JPG social preview image.
- Wire that image as the default Open Graph and X/Twitter image.
- Start collecting or copying portfolio-safe screenshots into `public/`.
- Give PM Ops Map the first local case-study image set because it already has screenshot proof.

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
