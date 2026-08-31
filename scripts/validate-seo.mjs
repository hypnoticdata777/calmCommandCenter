import { readFile } from "node:fs/promises";

const expectedTypesByPath = new Map([
  ["/journal", ["WebSite", "Person", "Blog", "BreadcrumbList"]],
  [
    "/journal/the-hackathon-blew-a-gasket",
    ["WebSite", "Person", "BlogPosting", "BreadcrumbList"],
  ],
  ["/journal/the-api-went-dark", ["WebSite", "Person", "BlogPosting", "BreadcrumbList"]],
  [
    "/journal/the-picture-frame-was-real",
    ["WebSite", "Person", "BlogPosting", "BreadcrumbList"],
  ],
  [
    "/journal/complete-is-an-astonishingly-ambitious-word",
    ["WebSite", "Person", "BlogPosting", "BreadcrumbList"],
  ],
  [
    "/journal/the-silent-killer-of-property-management-operations",
    ["WebSite", "Person", "BlogPosting", "BreadcrumbList"],
  ],
  ["/lab", ["WebSite", "Person", "CollectionPage", "BreadcrumbList"]],
  ["/work", ["WebSite", "Person", "CollectionPage", "BreadcrumbList"]],
  ["/work/pm-ops-map", ["WebSite", "Person", "Article", "BreadcrumbList"]],
  ["/work/techsync-ops", ["WebSite", "Person", "Article", "BreadcrumbList"]],
  ["/work/turnflow-home", ["WebSite", "Person", "Article", "BreadcrumbList"]],
  ["/about", ["WebSite", "Person", "ProfilePage", "BreadcrumbList"]],
  ["/contact", ["WebSite", "Person", "ContactPage", "BreadcrumbList"]],
  ["/", ["WebSite", "Person"]],
]);

const siteUrl = "https://h777.dev";
const sitemapPath = new URL("../public/sitemap.xml", import.meta.url);

function pathFromUrl(url) {
  const parsed = new URL(url);
  return parsed.pathname;
}

function findTagContent(html, pattern) {
  return html.match(pattern)?.[1]?.trim() ?? "";
}

function findAllJsonLd(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((match) => match[1])
    .map((raw) => JSON.parse(raw));
}

function flattenSchemaRecords(jsonLd) {
  return jsonLd.flatMap((entry) => entry["@graph"] ?? [entry]);
}

function flattenSchemaTypes(jsonLd) {
  const records = flattenSchemaRecords(jsonLd);
  return records.flatMap((record) => {
    const type = record["@type"];
    return Array.isArray(type) ? type : [type];
  });
}

function findSchemaRecord(jsonLd, type) {
  return flattenSchemaRecords(jsonLd).find((record) => {
    const recordType = record["@type"];
    return Array.isArray(recordType)
      ? recordType.includes(type)
      : recordType === type;
  });
}

function collectMeta(html) {
  const readName = (name) =>
    findTagContent(
      html,
      new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["']`, "i")
    );
  const readProperty = (property) =>
    findTagContent(
      html,
      new RegExp(
        `<meta[^>]+property=["']${property}["'][^>]+content=["']([^"']+)["']`,
        "i"
      )
    );

  return {
    title: findTagContent(html, /<title>([\s\S]*?)<\/title>/i),
    description: readName("description"),
    canonical: findTagContent(
      html,
      /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i
    ),
    robots: readName("robots"),
    ogTitle: readProperty("og:title"),
    ogDescription: readProperty("og:description"),
    ogUrl: readProperty("og:url"),
    ogImage: readProperty("og:image"),
    ogImageAlt: readProperty("og:image:alt"),
    twitterCard: readName("twitter:card"),
    twitterTitle: readName("twitter:title"),
    twitterDescription: readName("twitter:description"),
    twitterImage: readName("twitter:image"),
  };
}

function assert(condition, message, issues) {
  if (!condition) {
    issues.push(message);
  }
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { "user-agent": "h777-seo-validator/1.0" },
  });
  const text = await response.text();
  return { response, text };
}

async function validateRoute(url) {
  const issues = [];
  const { response, text: html } = await fetchText(url);
  const meta = collectMeta(html);
  const pathname = pathFromUrl(url);
  const expectedTypes = expectedTypesByPath.get(pathname) ?? ["WebSite", "Person"];
  const jsonLd = findAllJsonLd(html);
  const schemaTypes = flattenSchemaTypes(jsonLd);
  const breadcrumb = findSchemaRecord(jsonLd, "BreadcrumbList");

  assert(response.status === 200, `Expected 200, received ${response.status}`, issues);
  assert(meta.title.length > 10, "Missing or weak title", issues);
  assert(meta.description.length > 50, "Missing or weak description", issues);
  assert(meta.canonical === url, `Canonical mismatch: ${meta.canonical}`, issues);
  assert(meta.robots.toLowerCase().includes("index"), "Robots tag does not include index", issues);
  assert(!meta.robots.toLowerCase().includes("noindex"), "Robots tag includes noindex", issues);
  assert(meta.ogTitle.length > 10, "Missing Open Graph title", issues);
  assert(meta.ogDescription.length > 50, "Missing Open Graph description", issues);
  assert(meta.ogUrl === url, `Open Graph URL mismatch: ${meta.ogUrl}`, issues);
  assert(meta.ogImage.startsWith(siteUrl), `Open Graph image is not absolute: ${meta.ogImage}`, issues);
  assert(meta.ogImageAlt.length > 20, "Missing Open Graph image alt text", issues);
  assert(meta.twitterCard === "summary_large_image", "Twitter card is not summary_large_image", issues);
  assert(meta.twitterTitle.length > 10, "Missing Twitter title", issues);
  assert(meta.twitterDescription.length > 50, "Missing Twitter description", issues);
  assert(meta.twitterImage.startsWith(siteUrl), `Twitter image is not absolute: ${meta.twitterImage}`, issues);
  assert(html.includes("seo-fallback"), "Missing static SEO fallback content", issues);
  assert(jsonLd.length > 0, "Missing JSON-LD structured data", issues);

  for (const expectedType of expectedTypes) {
    assert(
      schemaTypes.includes(expectedType),
      `Missing structured data type: ${expectedType}`,
      issues
    );
  }

  if (pathname === "/") {
    assert(!breadcrumb, "Home page should not emit a single-item breadcrumb", issues);
  } else {
    const items = Array.isArray(breadcrumb?.itemListElement)
      ? breadcrumb.itemListElement
      : [];
    const firstItem = items[0];
    const lastItem = items[items.length - 1];

    assert(items.length >= 2, "BreadcrumbList needs at least two ListItems", issues);
    assert(firstItem?.position === 1, "Breadcrumb first item position must be 1", issues);
    assert(firstItem?.name === "h777", "Breadcrumb first item should be h777", issues);
    assert(
      firstItem?.item === `${siteUrl}/`,
      `Breadcrumb first item should point to home: ${firstItem?.item}`,
      issues
    );
    assert(
      lastItem?.item === url,
      `Breadcrumb last item should point to current URL: ${lastItem?.item}`,
      issues
    );
    items.forEach((item, index) => {
      assert(
        item.position === index + 1,
        `Breadcrumb item ${index + 1} has incorrect position ${item.position}`,
        issues
      );
      assert(
        typeof item.name === "string" && item.name.length > 1,
        `Breadcrumb item ${index + 1} is missing a name`,
        issues
      );
      assert(
        typeof item.item === "string" && item.item.startsWith(siteUrl),
        `Breadcrumb item ${index + 1} is missing an absolute site URL`,
        issues
      );
    });
  }

  return {
    url,
    title: meta.title,
    canonical: meta.canonical,
    image: meta.ogImage,
    schemaTypes,
    issues,
  };
}

async function validateImage(url) {
  const response = await fetch(url, {
    method: "HEAD",
    headers: { "user-agent": "h777-seo-validator/1.0" },
  });
  return {
    url,
    ok: response.ok,
    status: response.status,
    type: response.headers.get("content-type") ?? "",
  };
}

async function main() {
  const sitemap = await readFile(sitemapPath, "utf8");
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  const sitemapIssues = [];

  assert(urls.length === 14, `Expected 14 sitemap URLs, found ${urls.length}`, sitemapIssues);
  assert(new Set(urls).size === urls.length, "Sitemap contains duplicate URLs", sitemapIssues);

  const robots = await fetchText(`${siteUrl}/robots.txt`);
  assert(robots.response.status === 200, "robots.txt did not return 200", sitemapIssues);
  assert(
    robots.text.includes(`${siteUrl}/sitemap.xml`),
    "robots.txt does not point to the sitemap",
    sitemapIssues
  );

  const sitemapLive = await fetchText(`${siteUrl}/sitemap.xml`);
  assert(sitemapLive.response.status === 200, "Live sitemap did not return 200", sitemapIssues);
  assert(
    sitemapLive.text.includes("<urlset") && sitemapLive.text.includes("</urlset>"),
    "Live sitemap is not valid-looking XML",
    sitemapIssues
  );

  const routeResults = [];
  for (const url of urls) {
    routeResults.push(await validateRoute(url));
  }

  const uniqueImages = [...new Set(routeResults.map((result) => result.image))];
  const imageResults = [];
  for (const imageUrl of uniqueImages) {
    imageResults.push(await validateImage(imageUrl));
  }

  const imageIssues = imageResults
    .filter((image) => !image.ok || !image.type.startsWith("image/"))
    .map((image) => `${image.url} returned ${image.status} ${image.type}`);

  console.log(`Validated ${routeResults.length} sitemap routes.`);
  console.log(`Validated ${imageResults.length} unique social images.`);

  for (const result of routeResults) {
    const status = result.issues.length ? "FAIL" : "PASS";
    console.log(`${status}: ${result.url}`);
    console.log(`  title: ${result.title}`);
    console.log(`  schema: ${[...new Set(result.schemaTypes)].join(", ")}`);
    for (const issue of result.issues) {
      console.log(`  - ${issue}`);
    }
  }

  const allIssues = [
    ...sitemapIssues.map((issue) => `Sitemap/robots: ${issue}`),
    ...routeResults.flatMap((result) =>
      result.issues.map((issue) => `${result.url}: ${issue}`)
    ),
    ...imageIssues.map((issue) => `Image: ${issue}`),
  ];

  if (allIssues.length) {
    console.error("\nSEO validation failed:");
    for (const issue of allIssues) {
      console.error(`- ${issue}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log("\nSEO validation passed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
