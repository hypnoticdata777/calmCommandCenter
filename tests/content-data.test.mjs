import assert from "node:assert/strict";
import test from "node:test";
import { createServer } from "vite";

let vite;

test.before(async () => {
  vite = await createServer({
    appType: "custom",
    logLevel: "error",
    server: { middlewareMode: true },
  });
});

test.after(async () => {
  await vite?.close();
});

async function loadContentData() {
  const [{ journalEntries }, { workCaseStudies }, { spanishJournalEntries }] =
    await Promise.all([
    vite.ssrLoadModule("/src/app/pages/Journal.tsx"),
    vite.ssrLoadModule("/src/app/data/workCaseStudies.ts"),
    vite.ssrLoadModule("/src/app/data/spanishJournal.ts"),
  ]);

  return { journalEntries, workCaseStudies, spanishJournalEntries };
}

test("published journal entries and work studies have unique routes", async () => {
  const { journalEntries, workCaseStudies, spanishJournalEntries } =
    await loadContentData();
  const journalRoutes = journalEntries
    .filter((entry) => !entry.comingSoon)
    .map((entry) => `/journal/${entry.slug}`);
  const spanishJournalRoutes = spanishJournalEntries.map(
    (entry) => `/es/notas/${entry.slug}`
  );
  const workRoutes = workCaseStudies.map((study) => `/work/${study.slug}`);
  const routes = [...journalRoutes, ...spanishJournalRoutes, ...workRoutes];

  assert.equal(new Set(journalRoutes).size, journalRoutes.length);
  assert.equal(new Set(spanishJournalRoutes).size, spanishJournalRoutes.length);
  assert.equal(new Set(workRoutes).size, workRoutes.length);
  assert.equal(new Set(routes).size, routes.length);
  assert.ok(workRoutes.length >= 3);
  assert.ok(journalRoutes.length >= 1);
  assert.ok(spanishJournalRoutes.length >= 1);
});

test("work case studies are ready for route rendering and SEO", async () => {
  const { workCaseStudies } = await loadContentData();

  for (const study of workCaseStudies) {
    assert.match(study.slug, /^[a-z0-9-]+$/);
    assert.ok(study.seoTitle);
    assert.ok(study.description);
    assert.ok(study.facts.length >= 3);
    assert.ok(study.links.length >= 1);
    assert.ok(study.sections.length >= 2);
    assert.ok(study.images?.[0]?.src.startsWith("/images/work/"));
    assert.ok(study.relatedLinks?.length);
  }
});

test("internal related links point to known site routes", async () => {
  const { journalEntries, workCaseStudies, spanishJournalEntries } =
    await loadContentData();
  const publishedJournalRoutes = journalEntries
    .filter((entry) => !entry.comingSoon)
    .map((entry) => `/journal/${entry.slug}`);
  const spanishJournalRoutes = spanishJournalEntries.map(
    (entry) => `/es/notas/${entry.slug}`
  );
  const workRoutes = workCaseStudies.map((study) => `/work/${study.slug}`);
  const knownRoutes = new Set([
    "/",
    "/about",
    "/contact",
    "/journal",
    "/es",
    "/es/contacto",
    "/es/notas",
    "/lab",
    "/work",
    ...publishedJournalRoutes,
    ...spanishJournalRoutes,
    ...workRoutes,
  ]);

  const relatedHrefs = [
    ...journalEntries.flatMap((entry) =>
      (entry.relatedLinks ?? []).map((link) => link.href)
    ),
    ...spanishJournalEntries.flatMap((entry) =>
      (entry.relatedLinks ?? []).map((link) => link.href)
    ),
    ...workCaseStudies.flatMap((study) =>
      (study.relatedLinks ?? []).map((link) => link.href)
    ),
  ];

  for (const href of relatedHrefs) {
    assert.ok(
      knownRoutes.has(href),
      `Expected ${href} to match a known route`
    );
  }
});
