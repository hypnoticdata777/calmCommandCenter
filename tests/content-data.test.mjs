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

test("Spanish Nota 2 preserves its public links, image, and metadata", async () => {
  const { spanishJournalEntries } = await loadContentData();
  const entry = spanishJournalEntries.find((item) => item.label === "Nota 2");
  assert.ok(entry);
  assert.equal(entry.dateISO, "2026-10-18");
  assert.equal(entry.slug, "emailvault-necesitaba-fronteras");
  assert.ok(entry.sections.some((text) => text.includes("https://morsecodetranslator.com/es/?c=-..+.+...+--+.-+-..+.-.+.")));
  assert.ok(entry.sections.some((text) => text.includes("/images/journal/emailvault-flujo.svg")));
  assert.ok(entry.sections.every((text) => !text.includes("mail.google.com")));
  assert.ok(entry.relatedLinks.some((link) => link.href === "/journal/emailvault-needed-boundaries"));
});

test("article body renders the Morse link and local diagram without raw markup", async () => {
  const { createElement } = await import("react");
  const { renderToStaticMarkup } = await import("react-dom/server");
  const { JournalBody } = await vite.ssrLoadModule("/src/app/components/JournalBody.tsx");
  const { spanishJournalEntries } = await loadContentData();
  const entry = spanishJournalEntries.find((item) => item.label === "Nota 2");
  const html = renderToStaticMarkup(createElement(JournalBody, {
    sections: entry.sections, subheads: new Set(), strongLines: new Set(),
  }));
  assert.ok(html.includes('href="https://morsecodetranslator.com/es/?c=-..+.+...+--+.-+-..+.-.+."'));
  assert.match(html, /<img[^>]+src="\/images\/journal\/emailvault-flujo.svg"[^>]+alt="Hilo de Gmail/);
  assert.ok(!html.includes("[image.png]"));
});

test("article body never interprets unsafe links, external images, or raw HTML", async () => {
  const { createElement } = await import("react");
  const { renderToStaticMarkup } = await import("react-dom/server");
  const { JournalBody } = await vite.ssrLoadModule("/src/app/components/JournalBody.tsx");
  const html = renderToStaticMarkup(createElement(JournalBody, {
    sections: ['[unsafe](javascript:alert(1))', '<script>alert(1)</script>', '![image](http://example.com/image.png)'],
    subheads: new Set(), strongLines: new Set(),
  }));
  assert.ok(!html.includes("<a "));
  assert.ok(!html.includes("<script>"));
  assert.ok(!html.includes("<img"));
  assert.ok(html.includes("&lt;script&gt;"));
});
