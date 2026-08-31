# h777 SEO V10 - Breadcrumbs And Performance Baseline

## Scope

V10 adds richer site hierarchy signals and a repeatable performance budget.

This pass focuses on:

- `BreadcrumbList` structured data,
- parity between client-side SEO and static prerendered SEO,
- live-validator coverage for breadcrumb schema,
- build artifact size budgets,
- Work screenshot payload budgets,
- and a release checklist for future Field Notes, Lab experiments, and Work case studies.

## Reference Targets

Google Search documentation notes that breadcrumb structured data helps Search understand a page's position in the site hierarchy. It also recommends validating structured data and using URL Inspection after deploy.

Core Web Vitals remain focused on:

- Largest Contentful Paint, with a recommended target of 2.5 seconds or less,
- Interaction to Next Paint, with a recommended target below 200 milliseconds,
- Cumulative Layout Shift, with a recommended target below 0.1.

V10 does not claim field Core Web Vitals results. Those require Google/Chrome field data or browser lab tooling. This pass establishes the local guardrails that prevent obvious regressions before the site reaches those external checks.

## What Changed

- Added breadcrumb support to `src/app/components/Seo.tsx`.
- Added client-side breadcrumbs to:
  - Journal index,
  - every Field Note detail page,
  - Lab,
  - Work index,
  - every Work case-study detail page,
  - About,
  - Contact.
- Added matching static breadcrumb generation to `scripts/prerender-seo.mjs`.
- Updated `scripts/validate-seo.mjs` so every non-home sitemap route must include a valid `BreadcrumbList`.
- Added `scripts/validate-performance.mjs`.
- Added the npm script:

```txt
npm run validate:performance
```

- Added `docs/seo/content-release-checklist.md`.

## Breadcrumb Model

Top-level routes use:

```txt
h777 -> Section
```

Detail routes use:

```txt
h777 -> Journal -> Field Note
h777 -> Work -> Case Study
```

Examples:

```txt
h777 -> Journal -> The Silent Killer of Property Management Operations
h777 -> Work -> TechSync Ops
```

The breadcrumb schema is emitted both:

- after React route metadata updates in the browser,
- and inside the static prerendered HTML returned before React loads.

## Validator Changes

`npm run validate:seo` now checks that every non-home route has:

- `BreadcrumbList`,
- at least two breadcrumb `ListItem` records,
- first item named `h777`,
- first item pointing to `https://h777.dev/`,
- sequential positions,
- absolute site URLs,
- and last breadcrumb item pointing to the current canonical URL.

Home intentionally does not emit a one-item breadcrumb.

## Performance Budget

`npm run validate:performance` checks the built `dist/assets` bundle and the local Work screenshot payload.

Current budgets:

| Budget | Limit |
|---|---:|
| Main JS raw | 650 KB |
| Main JS gzip | 200 KB |
| Main CSS raw | 160 KB |
| Main CSS gzip | 50 KB |
| Total JS/CSS raw | 900 KB |
| Total JS/CSS gzip | 275 KB |
| Individual Work image | 350 KB |
| Total Work images | 2 MB |

## Performance Snapshot

After the V10 local build:

```txt
Main JS: 469.3 KB raw / 143.4 KB gzip
Main CSS: 107.3 KB raw / 16.5 KB gzip
JS/CSS total: 576.6 KB raw / 159.9 KB gzip
Work images: 16 files / 1593.0 KB total
Largest Work image: public/images/work/pm-ops-map/dashboard.png at 254.5 KB
```

Result:

```txt
Performance budget passed.
```

## Local Verification

Local build passed:

```txt
npm run build:check
```

The build produced:

```txt
Prerendered 14 SEO route files.
```

Spot checks confirmed `BreadcrumbList` in generated static HTML for:

- `dist/journal/the-silent-killer-of-property-management-operations/index.html`
- `dist/work/techsync-ops/index.html`

## V10 Verdict

V10 is implemented locally.

The V10 commit should be deployed through Vercel, then `npm run validate:seo` should be run again against the live site to confirm production breadcrumb schema is present across all 14 sitemap routes.
