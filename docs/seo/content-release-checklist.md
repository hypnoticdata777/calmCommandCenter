# h777 Public Content Release Checklist

Use this every time a new Field Note, Lab experiment, or Work case study becomes public.

Last reconciled: November 10, 2026. See the [architecture/topology reference](../architecture/site-walkthrough.md) for implementation boundaries.

## Field Note

- Add the entry to `journalEntries` in `src/app/pages/Journal.tsx`.
- Confirm the slug is short, stable, lowercase, and readable.
- Add title, label, excerpt, date, ISO date, category, read time, and body sections.
- Add strong lines and subheads when the article needs scannable structure.
- Add related links that connect the note to another Field Note, Lab page, or Work case study.
- Confirm the dedicated route works through `/journal/:slug`.
- Add the URL to `public/sitemap.xml`.
- English article routes/metadata are discovered by `buildJournalRoutes` in `scripts/prerender-seo.mjs`. Verify generated output; edit the generator only when its derivation or metadata model needs to change.
- Add the expected schema route to `scripts/validate-seo.mjs`.
- Confirm breadcrumb structure is `h777 -> Journal -> Field Note`.
- Add a dated release record; update the README route inventory and SEO progress log.
- Run `npm test`, `npm run lint`, `npm run build:check`, and `npm run validate:performance`.
- Inspect the built route title/canonical URL, JSON-LD, sitemap, and asset files. The fallback is not the full React article body.
- After deploy, run `npm run validate:seo` and inspect the rendered article and Journal preview.
- Request indexing in Google Search Console when the note is important enough to push quickly.

## Spanish Nota

- Add the entry to `src/app/data/spanishJournal.ts`; `/es/notas` and `/es/notas/:slug` consume it automatically.
- Preserve the supplied Spanish accents, paragraphs, date, label, category, excerpt, and reading time.
- Use the existing emphasis sets for key lines. Body strings support `[label](https://...)` links and `![descriptive alt](/images/journal/name.svg)` local images; raw HTML is never interpreted.
- Store public diagrams under `public/images/journal/`, with descriptive alt text. Never publish private Gmail attachment URLs.
- Add the URL and date to `public/sitemap.xml`; update the Spanish index `lastmod`.
- Add expected article and breadcrumb schemas to `scripts/validate-seo.mjs`. The prerender script discovers Spanish entries automatically.
- When an English counterpart exists, connect both directions in the Navbar language maps.
- Spanish listen controls request `es-MX`; available voices depend on the browser. Markdown links read their labels and images read their alt text.
- Update the README route inventory and SEO progress log, and add a release record.
- Run tests, lint, `build:check`, and `validate:performance`. Inspect generated canonical metadata, `BlogPosting`, breadcrumbs, and sitemap inclusion.
- After deployment, run `validate:seo` and check both language-switch directions, narration, diagram, and external links in a browser.

## Work Case Study

- Add or update the case-study data in `src/app/data/workCaseStudies.ts`.
- Confirm title, SEO title, description, status, type, audience, facts, sections, links, and date modified.
- Add local screenshot files under `public/images/work/<slug>/`.
- Add descriptive alt text, width, height, title, and caption for every screenshot.
- Keep public copy honest about status: demo, POC, staging, open source, or production-ready.
- Confirm the dedicated route works through `/work/:slug`.
- Add the URL to `public/sitemap.xml`.
- Detail routes and screenshot metadata are derived by `buildWorkRoutes`; verify generated output and change the generator only if necessary.
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

## Journal Images, Captions, and Enlargement

- Store images under `public/images/journal/`; supported standalone Markdown image strings use lowercase filenames with SVG, PNG, or WebP extensions.
- Supply descriptive alt text. Do not treat the image itself as the only accessible explanation of code.
- Put evidence notes in `src/app/data/journalImageCaptions.ts`, keyed by the exact served image path. Do not put provenance notes into the narrative merely to place them near an image.
- Captions render as smaller italic `figcaption` text. English callers pass the map; Spanish callers need an explicit map prop if adding captions there.
- FN 11/12 currently opt into centered 560px figures. A new article must explicitly opt in if compact presentation is desired; both article and expanded-preview callers must agree.
- Click/tap and keyboard activation must open the native image dialog. Verify Close, Escape, outside dismissal, focus restoration, scroll restoration, and article-navigation cleanup.
- Verify original-image links and source links. Recheck both themes and mobile/desktop overflow after presentation changes.
- Distinguish original screenshots, typeset source or supplied logs, historical test results, and generated artwork. Label generated illustrations explicitly; do not imply a fresh test run or a real customer record.
- Preserve exact query strings/timestamps for supplied external links.
- Check image dimensions and byte size separately: the existing performance script does not budget Journal images or downloads.

## Favicon and Download Assets

- Active icons: `favicon-v2-16.png`, `favicon-v2-32.png`, `favicon-v2-64.png`, and `/favicon.ico?v=2`. Original `favicon.svg` is retained but not selected by the head.
- Update both root `index.html` and `scripts/prerender-seo.mjs` when favicon declarations change. Check actual 16px rendering and generated route HTML.
- Use versioned paths when replacing an aggressively cached icon.
- `public/downloads/` is copied to `/downloads/`; these assets are not sitemap page routes.
- Verify PDF page order and dimensions. Verify ZIP integrity and its expected member list; download the published repository asset and confirm its content.
- For self-contained offline HTML, provide a ZIP: GitHub raw HTML is served as text. An open HTML form does not save directly to GitHub.
- Keep historical archive claims dated. Updating current documentation does not require silently rewriting archived retrospectives.

## Review, Deploy, and Roll Back

- Preserve unrelated local/untracked work; stage explicit files.
- Commit and push the working branch, review a PR into `main`, and merge through the repository workflow.
- Confirm hosting deployment separately. Existing nested pages and static assets must be served before SPA fallback; inspect actual HTTP responses rather than assuming host precedence.
- Run the live SEO validator only against the deployed site. A local build is not proof of a production update.
- Use `git revert` for rollback through normal review/deployment. Keep image references and files consistent; no database migration is required for portfolio content changes.

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
