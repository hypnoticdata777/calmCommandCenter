# Spanish Nota 2 — EmailVault boundaries

## Content and route

- Label: Nota 2; category: Constructor; reading time: 7 min de lectura.
- Article date: October 18, 2026 (`2026-10-18`).
- Title: Pensé que EmailVault Necesitaba API Keys. Lo que Necesitaba Eran Fronteras.
- Route: `/es/notas/emailvault-necesitaba-fronteras`.
- English counterpart: `/journal/emailvault-needed-boundaries` (Field Note 10).

The user-supplied Spanish text is stored in `src/app/data/spanishJournal.ts`,
including accents, paragraph order, lists, and the supplied excerpt. Nota 2 appears
before Nota 1 on the Spanish index. The existing article layout, expandable
preview, related links, and listen controls are reused. The only copy cleanup is
spacing around the Morse-code link; the example.com link uses HTTPS.

## Links and diagram

The humorous Morse-code label remains linked to this exact URL:

`https://morsecodetranslator.com/es/?c=-..+.+...+--+.-+-..+.-.+.`

The supplied workflow screenshot has been transcribed into a local SVG at
`public/images/journal/emailvault-flujo.svg`. It retains the complete supplied
sequence, including identity/permission checks, classification, sanitization,
universal files, destination folder, integrity hashes, operation history, and
only then deciding what to do with the original cloud email. Its alt text contains
the complete sequence. No private Gmail attachment URL is published.

`JournalBody` now renders limited inline HTTPS links and standalone local article
images. React still escapes plain text and raw HTML. Unsupported URL schemes are
not interpreted as links. Speech normalization reads link labels and image alt
text instead of Markdown URLs; Spanish callers request an `es-MX` voice.

## SEO and documentation

- Existing Spanish data-driven prerendering discovers the article automatically.
- Canonical, Spanish article metadata, `BlogPosting`, and breadcrumbs are generated.
- The sitemap includes the new route; the Spanish index `lastmod` is updated.
- The live SEO validator expects the new article schemas and 24 sitemap routes.
- Navbar language maps connect the English and Spanish EmailVault routes both ways.
- README route inventory, SEO progress log, content release checklist, architecture
  walkthrough, and Spanish strategy implementation update document the change.

## Local validation

- `npm test`: 6 passed, 0 failed, 0 skipped, including article link/image rendering
  and rejection of unsafe markup.
- `npm run lint`: passed for 40 files.
- `npm run build:check`: type checks passed; production build passed; 24 static SEO
  pages generated. The existing Vite chunk-size advisory remains nonfatal.
- `npm run validate:performance`: passed.
- HTTP checks: all 24 production directory routes match their generated HTML;
  the local SVG is served correctly.
- Nota 2 generated metadata: canonical URL, Spanish language, publication date,
  `BlogPosting`, breadcrumbs, and sitemap membership verified.
- `git diff --check`: passed.

Browser interaction and visual checks were attempted but could not execute:
Playwright has no installed Chromium executable, and downloading the headless
browser from `cdn.playwright.dev` returned HTTP 403 `Domain forbidden` under the
current network policy. No browser checks are claimed as passed.

## Deployment follow-up

This change prepares repository content; it does not establish a live deployment.
After deployment, run `npm run validate:seo`, then check the Spanish index preview,
full article, Morse-code destination, diagram readability on mobile, narration,
and both directions of the EN/ES switch in a browser. Request indexing in Google
Search Console if desired.
