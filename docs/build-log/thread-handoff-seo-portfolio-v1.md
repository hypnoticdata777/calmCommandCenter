# h777 Portfolio Thread Handoff

Updated: 2026-09-01

## Purpose

This document preserves the working context for the h777 public portfolio site so a new Codex thread can continue without losing the product story, SEO history, publishing cadence, or technical decisions.

The site is the public home for Carlos Sanchez / h777: a property-management operations portfolio, tool lab, writing archive, and consulting entry point. The current live domain is:

- https://h777.dev

The active source repo is:

- https://github.com/hypnoticdata777/calmCommandCenter

The old Vercel landing repo, `hypnoticdata777/h777-landing`, was replaced as the source for the same production domain. Vercel now builds from `calmCommandCenter`.

## Current Site Positioning

h777 is positioned as a build lab for property-management operations tools that reduce maintenance, handoff, proof, vendor, and workflow friction.

The site loop is intentional:

1. Journal: thinking, field notes, industry observations, builder logs, and operational philosophy.
2. Lab: experiments and tools still being tested or sharpened.
3. Work: tools and case studies mature enough to showcase publicly.

Navigation order was changed to reinforce that loop:

- Journal
- Lab
- Work
- About
- Contact

## Current Public Work Shelf

The Work section currently contains the public showcase tools:

1. PM Ops Map
   - Free browser-based starter operating system for property-management companies.
   - Local-first by default, with optional team sync.
   - Focus: department/task map, ownership, recurring operational work, handbooks, and team assignment.

2. TechSync Ops
   - Multi-tenant maintenance command center for PMCs and field-service teams.
   - Focus: role-specific queues, dispatch decisions, proof capture, closeout records, client/vendor updates, and reporting.
   - Screenshot assets have been brought into `public/images/work/techsync-ops`.

3. TurnFlow Home
   - Homeowner-first maintenance workspace for people managing repairs, proof, costs, documents, reminders, and scoped help without handing the whole process to a PMC.
   - Focus: property maintenance history, vendor portal, property vault, maintenance calendar, request detail, new request checklist, and homeowner proof trail.
   - Screenshot assets have been brought into `public/images/work/turnflow-home`.

## Current Journal Arc

The Field Notes are not random posts. They are the public story arc of building tools and operating philosophy in public.

Published notes:

1. Field Note 1: The Hackathon Blew a Gasket. Page Seven Performed the Autopsy.
   - Core idea: building looks clean after the fact, but the real lesson lives in the debugging trail.
   - Route: `/journal/the-hackathon-blew-a-gasket`

2. Field Note 2: The API Went Dark For a Minute. Then It Said "I Was Here The Whole Time."
   - Core idea: deployment reveals the difference between local confidence and real-world behavior.
   - Route: `/journal/the-api-went-dark`

3. Field Note 3: The Picture Frame Was Real. The Picture Wasn't.
   - Core idea: visuals, screenshots, and proof make a product feel real, inspectable, and shareable.
   - Route: `/journal/the-picture-frame-was-real`

4. Field Note 4: Complete Is an Astonishingly Ambitious Word.
   - Core idea: "complete" is not a status; it is a claim that needs evidence.
   - Route: `/journal/complete-is-an-astonishingly-ambitious-word`

5. Field Note 5: The Silent Killer of Property Management Operations
   - Core idea: the silent killer is unverified information becoming operational truth.
   - Route: `/journal/the-silent-killer-of-property-management-operations`

6. Field Note 6: Thursday Night Chaos, Git Bouncers, and the Illusion of Freedom
   - Core idea: role design, requirements discipline, and Git friction all point back to the harder personal system underneath the build.
   - Route: `/journal/thursday-night-chaos-git-bouncers-and-the-illusion-of-freedom`

7. Field Note 7: The Ghost House and the Math Boogeyman
   - Core idea: math, SEO architecture, and personal growth all become the same iteration loop: break down the unknown, test the edges, and build capacity.
   - Route: `/journal/the-ghost-house-and-the-math-boogeyman`

The arc so far:

- FN1: building is messy and humbling.
- FN2: deployment exposes fragile assumptions.
- FN3: proof changes how real the product feels.
- FN4: completion requires inspection.
- FN5: operations break when unverified information travels as truth.
- FN6: disciplined systems start with clearer requirements, role boundaries, and personal operating habits.
- FN7: the same decomposition pattern shows up in math, SEO, and the internal work of becoming the kind of builder who can face unknown systems.

## Voice Rules

The writing should sound like Carlos: operational, personal, funny, direct, and built from real work.

Keep:

- first-person builder/operator voice,
- real operational stakes,
- humor that lands as recognition rather than gimmick,
- plain-language explanations for non-technical readers,
- enough technical specificity that senior builders respect the work,
- a clear point in the first scroll,
- a sharper ending than a generic lesson.

Avoid:

- sounding like a SaaS landing page,
- generic PM listicle language,
- overusing the same rhetorical device many times in a row,
- making claims that sound larger than the current tools,
- exposing private workplace details too literally.

For real work examples, anonymize and blend specifics. Preserve the operating pattern, not private identifiers.

## SEO Work Completed

The SEO work has progressed through V10.

### V1 Foundation

- Added route-aware titles and descriptions.
- Added canonical URLs.
- Added Open Graph and X/Twitter metadata.
- Added basic JSON-LD for the site/person.
- Added sitemap and robots support.

### V2 Journal URLs

- Added dedicated routes for each published Field Note.
- Added article metadata, ISO dates, excerpts, canonical URLs, and structured data.
- Added all Field Notes to `public/sitemap.xml`.

### V3 Work Case Study SEO

- Added dedicated Work case-study routes.
- Added per-case-study metadata and structured data.
- Added PM Ops Map, TechSync Ops, and TurnFlow Home route support.

### V4 Social Preview Polish

- Added reliable `1200x630` PNG social preview image.
- Wired Open Graph/X image metadata with width, height, type, and alt text.
- Added favicon.

### V5 Screenshot And Asset Alignment

- Pulled current tool screenshots into local public assets.
- Replaced external/README-only screenshot references with local site images where possible.
- Confirmed TurnFlow Home and TechSync Ops screenshots display in Work case studies.

### V6 Internal Linking

- Added related-link sections connecting Journal, Lab, and Work.
- Connected Field Notes to relevant tools and vice versa.
- Reinforced the intended Journal -> Lab -> Work loop for readers and crawlers.

Commit:

- `fb0aace Add SEO v6 internal links`

### V7 Live Validation And Search Console

- Verified `h777.dev` domain ownership in Google Search Console through Namecheap DNS TXT record.
- Submitted `https://h777.dev/sitemap.xml`.
- Google Search Console reported sitemap success and discovered 14 pages.
- Requested indexing for the homepage.

Commit:

- `2287965 Add SEO v7 live validation log`

### V8 Static Prerender

- Added build-time static HTML generation for the 14 public sitemap routes.
- Preserved the Vite SPA runtime while giving crawlers route-specific static HTML before hydration.
- Added `scripts/prerender-seo.mjs`.
- Updated the build command to run Vite build plus prerender.
- Validated deployed pages with route-specific titles, canonicals, fallback content, and JSON-LD.

Commits:

- `77d1452 Add SEO v8 static prerender`
- `bd7929b Document SEO v8 live validation`

### V9 Live SEO Validator

- Added `scripts/validate-seo.mjs`.
- Added `npm run validate:seo`.
- Validator checks all 14 live routes, sitemap, robots, Open Graph, X/Twitter tags, JSON-LD expected types, canonical URLs, and social images.
- Added `docs/seo/metadata-validation-2026-08-31.md`.

Commit:

- `9453d72 Add SEO v9 validation checks`

### V10 Breadcrumb Schema And Performance Budget

- Added breadcrumb schema through `Seo.tsx` and prerendered static HTML.
- Added breadcrumb coverage to Journal, Field Notes, Lab, Work, Work case studies, About, and Contact.
- Added `scripts/validate-performance.mjs`.
- Added `npm run validate:performance`.
- Performance budget baseline passed:
  - Main JS: 469.3 KB raw / 143.4 KB gzip
  - Main CSS: 107.3 KB raw / 16.5 KB gzip
  - JS/CSS total: 576.6 KB raw / 159.9 KB gzip
  - Work images: 16 files / 1593.0 KB total
  - Largest Work image: PM Ops Map dashboard at 254.5 KB
- Live SEO validator passed after deployment.

Commits:

- `340c0c4 Add SEO v10 breadcrumbs and performance budget`
- `c8ebead Document SEO v10 live validation`

## Current Public Routes In Sitemap

The sitemap currently contains 16 public routes:

- `/`
- `/journal`
- `/journal/the-hackathon-blew-a-gasket`
- `/journal/the-api-went-dark`
- `/journal/the-picture-frame-was-real`
- `/journal/complete-is-an-astonishingly-ambitious-word`
- `/journal/the-silent-killer-of-property-management-operations`
- `/journal/thursday-night-chaos-git-bouncers-and-the-illusion-of-freedom`
- `/journal/the-ghost-house-and-the-math-boogeyman`
- `/lab`
- `/work`
- `/work/pm-ops-map`
- `/work/techsync-ops`
- `/work/turnflow-home`
- `/about`
- `/contact`

## Important Scripts

Run these from the project root:

```bash
npm run build:check
npm run build
npm run prerender:seo
npm run validate:seo
npm run validate:performance
```

`npm run build` produces the Vite build and then prerenders route-specific SEO HTML.

`npm run validate:seo` checks the live deployed site.

`npm run validate:performance` checks local build assets against the current budget.

## Key Technical Decisions

- The site remains a Vite React SPA for the application/runtime experience.
- Static route HTML is generated during build for crawler-visible metadata and fallback content.
- Vercel serves real files first, so prerendered route `index.html` files are used before the SPA fallback.
- JSON-LD is emitted both client-side and in prerendered HTML.
- BreadcrumbList schema is now required for all non-home public routes.
- The live SEO validator is treated as a regression harness, not a one-time manual checklist.
- Performance budgets are encoded in code instead of kept only as vibes.

## Known Technical Debt

The main remaining issue is metadata duplication.

Similar route/content facts currently live across:

- `src/app/pages/Journal.tsx`
- `src/app/data/workCaseStudies.ts`
- `public/sitemap.xml`
- `scripts/prerender-seo.mjs`
- `scripts/validate-seo.mjs`

This works, but it creates drift risk. A future pass should centralize content metadata into shared content registries and generate sitemap/validation expectations from those registries.

Recommended future direction:

- `src/app/content/routes.ts`
- `src/app/content/journal.ts`
- `src/app/content/work.ts`

Then React pages, sitemap generation, prerendering, and validation can all read from the same source of truth.

## Pending SEO Work

### V11 Candidate: Metadata Source Consolidation

- Create shared content registries.
- Generate sitemap from route metadata instead of manually editing XML.
- Make validator expectations import or read from the same content source.
- Reduce copy drift between app UI, static SEO HTML, sitemap, and validation scripts.

### V12 Candidate: Search Console Follow-Through

- Request indexing for key inner pages, especially:
  - `/journal`
  - latest Field Note
  - `/work`
  - PM Ops Map
  - TechSync Ops
  - TurnFlow Home
- Watch Search Console coverage after Google processes the sitemap.
- Review Core Web Vitals once field data exists.

### V13 Candidate: Social Preview QA

- Validate LinkedIn/X previews after cache refresh.
- Confirm article links pull the correct title, description, and image.
- Consider route-specific social images later if posts begin performing well.

## Content Publishing Tracker

A local workbook exists at:

- `C:\Users\hypno\OneDrive\Desktop\h777_content_log_workbook.xlsx`

Workbook tabs:

- Instructions
- Post Log
- Dashboard

The Post Log tracks:

- date
- platform
- post type
- title/hook
- link
- reason for posting
- status
- impressions
- likes
- comments
- shares
- calculated engagement

The Dashboard auto-calculates totals, average impressions, and average engagement by platform and post type.

Current publishing pattern:

- Full Field Notes live on h777.dev.
- LinkedIn receives short punchy teaser posts and the article link in comments.
- X is also being used for distribution, with shorter versions or link posts.

## Recommended Tracking Additions

Track each article as multiple distribution events:

- website publish
- LinkedIn teaser
- LinkedIn comment with link
- X post
- any repost or follow-up

For engagement, capture:

- impressions
- likes
- comments
- shares/reposts
- link clicks if available
- profile visits if available
- notes on what hook seemed to work

Suggested status values:

- Draft
- Published
- Tracked
- Needs Follow-Up
- Repurpose

## Recent Human Context

The project has been moving fast. The user worked late, posted early, and is actively using this site as both a public portfolio and a living build-in-public archive.

Do not treat the site as a sterile portfolio. It is part workbench, part proof trail, part consulting storefront, and part writing engine.

The user cares about:

- being accurate,
- keeping their real voice,
- not losing context,
- making the site credible to PM operators and senior builders,
- documenting what happened while it is still fresh,
- using funny analogies as future writing fuel.

## Good Build Analogies From This Phase

- Search Console verification was the bouncer finally checking the clipboard and saying, yes, this is your building.
- The sitemap submission was handing Google the guest list instead of hoping it wanders into every room eventually.
- Static prerendering was giving crawlers a printed menu before the kitchen starts doing live tableside service.
- The live SEO validator is the smoke alarm that complains before LinkedIn or Google makes the mistake public.
- Breadcrumb schema is the mall directory arrow that says, you are here, and yes, this hallway exists.
- Performance budgets are the luggage scale before the airport counter tells you your suitcase is a financial event.
- The content log is not a diary. It is the flight recorder for which hooks actually survived contact with the feed.
