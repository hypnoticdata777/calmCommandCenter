# h777 Public Content Release Checklist

Use this every time a new Field Note, Lab experiment, or Work case study becomes public.

## Field Note

- Add the entry to `journalEntries` in `src/app/pages/Journal.tsx`.
- Confirm the slug is short, stable, lowercase, and readable.
- Add title, label, excerpt, date, ISO date, category, read time, and body sections.
- Add strong lines and subheads when the article needs scannable structure.
- Add related links that connect the note to another Field Note, Lab page, or Work case study.
- Confirm the dedicated route works through `/journal/:slug`.
- Add the URL to `public/sitemap.xml`.
- Add route metadata to `scripts/prerender-seo.mjs`.
- Add the expected schema route to `scripts/validate-seo.mjs`.
- Confirm breadcrumb structure is `h777 -> Journal -> Field Note`.
- Run `npm run build:check`.
- After deploy, run `npm run validate:seo`.
- Request indexing in Google Search Console when the note is important enough to push quickly.

## Work Case Study

- Add or update the case-study data in `src/app/data/workCaseStudies.ts`.
- Confirm title, SEO title, description, status, type, audience, facts, sections, links, and date modified.
- Add local screenshot files under `public/images/work/<slug>/`.
- Add descriptive alt text, width, height, title, and caption for every screenshot.
- Keep public copy honest about status: demo, POC, staging, open source, or production-ready.
- Confirm the dedicated route works through `/work/:slug`.
- Add the URL to `public/sitemap.xml`.
- Add route metadata and screenshot metadata to `scripts/prerender-seo.mjs`.
- Add the expected schema route to `scripts/validate-seo.mjs`.
- Confirm breadcrumb structure is `h777 -> Work -> Case Study`.
- Run `npm run build:check`.
- Run `npm run validate:performance` after image changes.
- After deploy, run `npm run validate:seo`.
- Request indexing in Google Search Console if it is a flagship case study.

## Lab Experiment

- Add the experiment to the Lab page with status, audience, why it matters, and honest next steps.
- Keep non-ready tools in Lab until they have enough proof, screenshots, and public-safe positioning.
- Add source/docs/demo links only when they work.
- Add related links when the experiment connects to a Field Note or Work case study.
- If the Lab page content materially changes, update `public/sitemap.xml` lastmod.
- Run `npm run build:check`.
- After deploy, run `npm run validate:seo`.

## Site-Wide SEO Checks

- Run `npm run build:check`.
- Run `npm run validate:performance`.
- After deploy, run `npm run validate:seo`.
- Confirm `https://h777.dev/sitemap.xml` still lists the intended public routes.
- Confirm `https://h777.dev/robots.txt` still points to the sitemap.
- Check at least one Journal URL and one Work URL in Search Console URL Inspection.
- Check social preview rendering when the title, description, or share image changes.

## Writing Checks

- The page title should be readable without the site around it.
- The meta description should explain the value clearly in one sentence.
- The first screen should tell a human what the page is about.
- The route should have at least one internal link pointing to it.
- Structured data must describe visible page content.
- Screenshots should prove the tool exists, not decorate around it.
- Never let a page imply a tool is more production-ready than it is.
