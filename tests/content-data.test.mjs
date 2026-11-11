import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
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


test("Field Note 12 preserves source links and ships every referenced evidence image", async () => {
  const { journalEntries } = await loadContentData();
  const entry = journalEntries.find((item) => item.label === "Field Note 12");
  assert.ok(entry && !entry.comingSoon);
  assert.equal(entry.title, "Caffeine, Context, and CI/CD: Engineering Apps as Extensions of Ourselves");
  assert.equal(entry.slug, "caffeine-context-and-ci-cd");
  assert.ok(entry.sections.some((text) => text.includes("https://historyofinformation.com/detail.php?entryid=4640")));
  assert.ok(entry.sections.some((text) => text.includes("https://softpanorama.org/Commercial_linuxes/Android/history.shtml")));
  const { createElement } = await import("react");
  const { renderToStaticMarkup } = await import("react-dom/server");
  const { JournalBody } = await vite.ssrLoadModule("/src/app/components/JournalBody.tsx");
  const html = renderToStaticMarkup(createElement(JournalBody, {
    sections: entry.sections, subheads: new Set(), strongLines: new Set(),
  }));
  assert.ok(html.includes('href="https://youtu.be/Lj4adAAHa68?si=9xOAtVHH5maevYDA&amp;t=48"'));
  assert.ok(html.includes('>King Kong ain’t got nothing on me right now.</a>'));
  const images = entry.sections.flatMap((text) => [...text.matchAll(/!\[[^\]]+\]\((\/images\/journal\/[^)]+)\)/g)].map((match) => match[1]));
  assert.equal(images.length, 5);
  assert.ok(images.includes("/images/journal/fn-twelve-checkmark-lock.webp"));
  assert.ok(entry.sections.some((text) => text.includes("door.closed === true does not imply door.locked === true")));
  const { journalImageCaptions } = await vite.ssrLoadModule("/src/app/data/journalImageCaptions.ts");
  assert.ok(journalImageCaptions["/images/journal/fn-twelve-checkmark-lock.webp"].includes("AI-generated editorial illustration"));
  assert.doesNotMatch([...entry.sections, ...images.map((image) => journalImageCaptions[image] ?? "")].join(" "), /\bmeld\b/i);
  for (const image of images) {
    const bytes = await readFile(new URL(`../public${image}`, import.meta.url));
    if (image.endsWith(".webp")) {
      assert.equal(bytes.subarray(0, 4).toString(), "RIFF");
      assert.equal(bytes.subarray(8, 12).toString(), "WEBP");
    } else {
      assert.equal(bytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    }
  }
  const sitemap = await readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8");
  assert.ok(sitemap.includes(`https://h777.dev/journal/${entry.slug}`));
});


test("evidence captions render inside their figures and keep linked sources", async () => {
  const { createElement } = await import("react");
  const { renderToStaticMarkup } = await import("react-dom/server");
  const { JournalBody } = await vite.ssrLoadModule("/src/app/components/JournalBody.tsx");
  const { journalImageCaptions } = await vite.ssrLoadModule("/src/app/data/journalImageCaptions.ts");
  const { journalEntries } = await loadContentData();
  const entry = journalEntries.find((item) => item.label === "Field Note 12");
  const caption = journalImageCaptions["/images/journal/fn-twelve-runner.png"];
  assert.ok(caption);
  assert.ok(!entry.sections.includes(caption));
  const html = renderToStaticMarkup(createElement(JournalBody, {
    sections: entry.sections,
    imageCaptions: journalImageCaptions,
    compactImages: true,
    subheads: new Set(),
    strongLines: new Set(),
  }));
  assert.equal((html.match(/<figcaption/g) ?? []).length, 5);
  assert.match(html, /<figcaption[^>]*>[\s\S]*?<p class="italic">This is a text rendering/);
  assert.ok(html.includes('href="https://github.com/hypnoticdata777/pm-ops-map/blob/c0bb7bbaeea8b1a68e92eb8078ae16a087f20a05/.github/workflows/canary.yml"'));
  assert.equal((html.match(/aria-haspopup="dialog"/g) ?? []).length, 5);
});


test("Field Note 12 editorial emphasis renders safely without losing links", async () => {
  const { createElement } = await import("react");
  const { renderToStaticMarkup } = await import("react-dom/server");
  const { JournalBody } = await vite.ssrLoadModule("/src/app/components/JournalBody.tsx");
  const { journalEntries } = await loadContentData();
  const entry = journalEntries.find((item) => item.label === "Field Note 12");
  assert.ok(entry.sections.some((text) => text.includes("classroom and the messy reality of the systems I’m building.")));
  assert.ok(entry.sections.some((text) => text.includes("I recalibrated the harness to ignore dynamic event bindings and focus strictly on the structural output.")));
  const html = renderToStaticMarkup(createElement(JournalBody, {
    sections: [...entry.sections, '***<script>alert(1)</script>***'],
    subheads: new Set(), strongLines: new Set(),
  }));
  assert.ok(html.includes("<strong><em>The problem</em></strong> wasn’t my code; <strong><em>the hosted CI runner had moved to a newer operating-system image, and my pinned browser-testing tools did not support it.</em></strong>"));
  assert.ok(!html.includes("***"));
  assert.ok(!html.includes("<script>"));
  assert.ok(html.includes("<strong><em>&lt;script&gt;alert(1)&lt;/script&gt;</em></strong>"));
  assert.ok(html.includes('href="https://youtu.be/Lj4adAAHa68?si=9xOAtVHH5maevYDA&amp;t=48"'));
});
