import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const siteUrl = "https://h777.dev";
const siteName = "h777";
const defaultImage = "/og.png";
const defaultImageAlt =
  "h777 property management operations tools and field notes";

const personSchema = {
  "@type": "Person",
  name: "Carlos Sanchez",
  alternateName: "hypnoticdata777",
  url: `${siteUrl}/about`,
  sameAs: ["https://github.com/hypnoticdata777"],
  knowsAbout: [
    "Property management operations",
    "Maintenance workflows",
    "PMC consulting",
    "PropTech tools",
    "Remote operations",
  ],
};

const websiteSchema = {
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description:
    "Property management operations tools, field notes, workflow experiments, and PMC consulting.",
};

const journalEntries = [
  {
    label: "Field Note 1",
    path: "/journal/the-hackathon-blew-a-gasket",
    title:
      "Field Note 1: The Hackathon Blew a Gasket. Page Seven Performed the Autopsy. | h777 Journal",
    headline:
      "The Hackathon Blew a Gasket. Page Seven Performed the Autopsy.",
    description:
      "A field note about an ambitious hackathon build, scope creep, requirements, and the moment h777 started becoming a serious tool portfolio.",
    section: "Builder",
    date: "2026-08-12",
    related: [
      "/work/techsync-ops",
      "/work/turnflow-home",
      "/lab",
    ],
  },
  {
    label: "Field Note 2",
    path: "/journal/the-api-went-dark",
    title:
      "Field Note 2: The API Went Dark For a Minute. Then It Said 'I Was Here The Whole Time.' | h777 Journal",
    headline:
      "The API Went Dark For a Minute. Then It Said 'I Was Here The Whole Time.'",
    description:
      "A field note about TechSync leaving localhost, staging exposing the truth, and why deployed software teaches different lessons than a local build.",
    section: "Builder",
    date: "2026-08-19",
    related: [
      "/work/techsync-ops",
      "/journal/the-silent-killer-of-property-management-operations",
      "/lab",
    ],
  },
  {
    label: "Field Note 3",
    path: "/journal/the-picture-frame-was-real",
    title:
      "Field Note 3: The Picture Frame Was Real. The Picture Wasn't. | h777 Journal",
    headline: "The Picture Frame Was Real. The Picture Wasn't.",
    description:
      "A field note about TurnFlow Home, missing screenshots, proof, transparency, and the difference between a frame around a thing and the thing itself.",
    section: "Builder",
    date: "2026-08-22",
    related: [
      "/work/turnflow-home",
      "/journal/complete-is-an-astonishingly-ambitious-word",
      "/work",
    ],
  },
  {
    label: "Field Note 4",
    path: "/journal/complete-is-an-astonishingly-ambitious-word",
    title:
      "Field Note 4: Complete Is an Astonishingly Ambitious Word. | h777 Journal",
    headline: "Complete Is an Astonishingly Ambitious Word.",
    description:
      "A field note about TurnFlow Home, maintenance proof, remote ownership, receipts, and why complete should mean the work can survive being looked at.",
    section: "Builder",
    date: "2026-08-26",
    related: [
      "/work/turnflow-home",
      "/work/techsync-ops",
      "/journal/the-silent-killer-of-property-management-operations",
    ],
  },
  {
    label: "Field Note 5",
    path: "/journal/the-silent-killer-of-property-management-operations",
    title:
      "Field Note 5: The Silent Killer of Property Management Operations | h777 Journal",
    headline: "The Silent Killer of Property Management Operations",
    description:
      "A field note about unverified information becoming operational truth, why property management handoffs drift, and how to make truth checkable before it travels.",
    section: "Operations",
    date: "2026-08-31",
    related: [
      "/work/techsync-ops",
      "/work/turnflow-home",
      "/work/pm-ops-map",
    ],
  },
];

const workStudies = [
  {
    path: "/work/pm-ops-map",
    title: "PM Ops Map Case Study | Property Management Operations Setup | h777 Work",
    headline:
      "PM Ops Map: a day-one operating system for new property management companies.",
    description:
      "A free, open-source browser app that helps new property management companies set up departments, tasks, ownership, maintenance tracking, and operations documentation on day one.",
    type: "Browser app",
    audience: "New PMCs, owners, and operations managers",
    image: "/images/work/pm-ops-map/dashboard.png",
    imageAlt:
      "PM Ops Map dashboard showing launch readiness, owned tasks, team roster, and open repairs.",
    imageWidth: 1280,
    imageHeight: 860,
    dateModified: "2026-08-31",
    related: [
      "/journal/the-silent-killer-of-property-management-operations",
      "/lab",
      "/work/techsync-ops",
    ],
  },
  {
    path: "/work/techsync-ops",
    title: "TechSync Ops Case Study | Maintenance Dispatch and Proof | h777 Work",
    headline: "TechSync Ops: the PMC command center for maintenance handoffs.",
    description:
      "A staged multi-tenant maintenance command center for PMCs and field-service teams, focused on role lanes, dispatch, proof, closeout, and scoped visibility.",
    type: "PMC maintenance command platform",
    audience:
      "PMCs, field-service teams, coordinators, technicians, clients, viewers, and vendors",
    image: "/images/work/techsync-ops/admin-workspace.png",
    imageAlt:
      "TechSync Ops admin workspace with Work Views, Search, work-order cards, and Next Actions.",
    imageWidth: 1600,
    imageHeight: 920,
    dateModified: "2026-08-31",
    related: [
      "/journal/the-api-went-dark",
      "/journal/the-silent-killer-of-property-management-operations",
      "/work/turnflow-home",
    ],
  },
  {
    path: "/work/turnflow-home",
    title: "TurnFlow Home Case Study | Homeowner Maintenance Records | h777 Work",
    headline:
      "TurnFlow Home: maintenance history for homeowners who want the proof.",
    description:
      "A homeowner-first maintenance workspace for repair history, proof, costs, documents, reminders, scoped help, and clearer property care records.",
    type: "Homeowner maintenance workspace",
    audience:
      "Homeowners, small landlords, rental hosts, vendors, and trusted helpers",
    image: "/images/work/turnflow-home/dashboard.png",
    imageAlt:
      "TurnFlow Home dashboard showing maintenance requests, homeowner value cards, filters, and repair status.",
    imageWidth: 1440,
    imageHeight: 900,
    dateModified: "2026-08-31",
    related: [
      "/journal/the-picture-frame-was-real",
      "/journal/complete-is-an-astonishingly-ambitious-word",
      "/journal/the-silent-killer-of-property-management-operations",
    ],
  },
];

const routes = [
  {
    path: "/",
    title: "h777 | Property Management Operations Tools",
    headline: "Making messy operations behave themselves.",
    description:
      "h777 is a public portfolio for property management operations tools, field notes, workflow experiments, and PMC consulting by Carlos Sanchez.",
    type: "website",
    section: "Home",
    paragraphs: [
      "Creating, iterating, and leading frictionless operations, systems, and tools toward better property management experiences.",
      "The journal holds the thinking. The lab tests the experiments. Work holds the tools that have earned a clearer case study.",
    ],
    links: ["/journal", "/lab", "/work", "/contact"],
  },
  {
    path: "/journal",
    title: "Journal | Field Notes on PM Ops, PropTech, and Building",
    headline: "Notes from the messy middle.",
    description:
      "Field notes from h777 on property management operations, PropTech builds, maintenance workflows, proof, handoffs, and lessons from the messy middle.",
    type: "website",
    section: "Journal",
    paragraphs: [
      "Writing about property management, operations, PropTech, tool builds, lessons, and the occasional vent that might turn into a case study.",
    ],
    links: journalEntries.map((entry) => entry.path),
    schema: [
      {
        "@type": "Blog",
        name: "h777 Journal",
        description:
          "Field notes on property management operations, PropTech builds, maintenance workflows, proof, handoffs, and lessons from the messy middle.",
        url: `${siteUrl}/journal`,
        author: personSchema,
        blogPost: journalEntries.map((entry) => ({
          "@type": "BlogPosting",
          headline: entry.headline,
          url: `${siteUrl}${entry.path}`,
          datePublished: entry.date,
          dateModified: entry.date,
          articleSection: entry.section,
          author: personSchema,
        })),
      },
    ],
  },
  ...journalEntries.map((entry) => ({
    ...entry,
    type: "article",
    paragraphs: [entry.description],
    links: entry.related,
    image: defaultImage,
    imageAlt: defaultImageAlt,
    publishedTime: entry.date,
    modifiedTime: entry.date,
    schema: [
      {
        "@type": "BlogPosting",
        headline: entry.headline,
        description: entry.description,
        url: `${siteUrl}${entry.path}`,
        datePublished: entry.date,
        dateModified: entry.date,
        articleSection: entry.section,
        author: personSchema,
        publisher: {
          "@type": "Organization",
          name: siteName,
          url: siteUrl,
        },
        isRelatedTo: entry.related.map((href) => ({
          "@type": "WebPage",
          url: `${siteUrl}${href}`,
        })),
      },
    ],
  })),
  {
    path: "/lab",
    title: "Lab | h777 Property Management Tool Experiments",
    headline: "Where ideas get tested before they earn Work.",
    description:
      "The h777 lab tracks property management experiments, early PropTech ideas, m3ldSync, VendorRadar, and tools being tested before they become case studies.",
    type: "website",
    section: "Lab",
    paragraphs: [
      "Journal thoughts, PM friction, product hunches, and half-built tools get stress-tested against reality here.",
      "Not everything here needs to ship. The point is to capture the experiment, test whether it still stands, and decide whether it belongs in Work later.",
    ],
    links: [
      "/journal/the-silent-killer-of-property-management-operations",
      "/work/pm-ops-map",
      "/work",
    ],
    schema: [
      {
        "@type": "CollectionPage",
        name: "Lab | h777 Property Management Tool Experiments",
        description:
          "Property management experiments, early PropTech ideas, m3ldSync, VendorRadar, and tools being tested before case-study readiness.",
        url: `${siteUrl}/lab`,
      },
    ],
  },
  {
    path: "/work",
    title: "Work | PM Ops Map, TechSync Ops, and TurnFlow Home",
    headline: "Products that prove operations do not have to stay chaotic.",
    description:
      "Case studies for PM Ops Map, TechSync Ops, and TurnFlow Home: property management tools for maintenance proof, operations clarity, and better handoffs.",
    type: "website",
    section: "Work",
    paragraphs: [
      "Tools that have graduated from the lab into clearer case studies, stronger proof, or public-ready direction.",
    ],
    links: workStudies.map((study) => study.path),
    schema: [
      {
        "@type": "CollectionPage",
        name: "Work | PM Ops Map, TechSync Ops, and TurnFlow Home",
        description:
          "Case studies for property management tools focused on operations clarity, maintenance proof, and better handoffs.",
        url: `${siteUrl}/work`,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: workStudies.map((study, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: study.headline,
            url: `${siteUrl}${study.path}`,
          })),
        },
      },
    ],
  },
  ...workStudies.map((study) => ({
    ...study,
    type: "article",
    section: "Work case study",
    paragraphs: [study.description],
    links: study.related,
    modifiedTime: study.dateModified,
    imageType: "image/png",
    schema: [
      {
        "@type": "Article",
        headline: study.headline,
        description: study.description,
        url: `${siteUrl}${study.path}`,
        dateModified: study.dateModified,
        author: personSchema,
        publisher: {
          "@type": "Organization",
          name: siteName,
          url: siteUrl,
        },
        image: [`${siteUrl}${study.image}`],
        about: {
          "@type": "SoftwareApplication",
          name: study.headline.split(":")[0],
          applicationCategory: study.type,
          description: study.description,
          audience: {
            "@type": "Audience",
            audienceType: study.audience,
          },
        },
        isRelatedTo: study.related.map((href) => ({
          "@type": "WebPage",
          url: `${siteUrl}${href}`,
        })),
      },
    ],
  })),
  {
    path: "/about",
    title: "About | Carlos Sanchez and h777",
    headline: "An opinionated operator with a systems brain.",
    description:
      "About Carlos Sanchez, the operator and builder behind h777: property management operations, maintenance workflows, remote teams, and practical systems.",
    type: "profile",
    section: "About",
    paragraphs: [
      "Carlos Sanchez has spent 7+ years inside property management operations and more than 10 years across remote service, leadership, systems, and client-facing work.",
    ],
    links: ["/work", "/journal", "/contact"],
    schema: [
      {
        "@type": "ProfilePage",
        name: "About Carlos Sanchez and h777",
        description:
          "Property management operations experience, workflow systems, consulting, and tool-building philosophy.",
        url: `${siteUrl}/about`,
        mainEntity: personSchema,
      },
    ],
  },
  {
    path: "/contact",
    title: "Contact | PMC Operations Consulting and Tool Scoping",
    headline: "Bring me the messy part.",
    description:
      "Contact Carlos Sanchez for PMC operations coaching, maintenance workflow cleanup, remote team systems, and property management tool scoping.",
    type: "website",
    section: "Contact",
    paragraphs: [
      "Email Carlos Sanchez for help organizing PMC operations, cleaning up maintenance workflows, scoping a tool, or getting a fresh set of experienced eyes on a process that keeps slipping.",
    ],
    links: ["/about", "/work", "/journal"],
    schema: [
      {
        "@type": "ContactPage",
        name: "Contact Carlos Sanchez",
        description:
          "Contact page for PMC operations consulting, workflow cleanup, and property management tool scoping.",
        url: `${siteUrl}/contact`,
        mainEntity: personSchema,
      },
    ],
  },
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeJsonLd(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function absoluteUrl(value) {
  return new URL(value, siteUrl).toString();
}

function buildBreadcrumbs(route) {
  if (route.path === "/") {
    return [];
  }

  if (route.path.startsWith("/journal/")) {
    return [
      { name: siteName, path: "/" },
      { name: "Journal", path: "/journal" },
      { name: route.headline, path: route.path },
    ];
  }

  if (route.path.startsWith("/work/")) {
    return [
      { name: siteName, path: "/" },
      { name: "Work", path: "/work" },
      { name: route.headline.split(":")[0], path: route.path },
    ];
  }

  const sectionNames = {
    "/journal": "Journal",
    "/lab": "Lab",
    "/work": "Work",
    "/about": "About",
    "/contact": "Contact",
  };

  return [
    { name: siteName, path: "/" },
    { name: sectionNames[route.path] ?? route.section ?? route.headline, path: route.path },
  ];
}

function breadcrumbSchemaForRoute(route) {
  const breadcrumbs = buildBreadcrumbs(route);

  if (breadcrumbs.length < 2) {
    return null;
  }

  return {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: absoluteUrl(breadcrumb.path),
    })),
  };
}

function extractAssetHead(template) {
  const head = template.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? "";
  const assetTags = [
    ...head.matchAll(/<link[^>]+href="\/assets\/[^"]+"[^>]*>/g),
    ...head.matchAll(/<script[^>]+src="\/assets\/[^"]+"[^>]*><\/script>/g),
  ].map((match) => match[0]);

  return [...new Set(assetTags)].join("\n");
}

function routeToOutputFile(routePath) {
  if (routePath === "/") {
    return path.join(distDir, "index.html");
  }

  return path.join(distDir, routePath.replace(/^\//, ""), "index.html");
}

function renderHead(route, assetHead) {
  const url = absoluteUrl(route.path);
  const image = absoluteUrl(route.image ?? defaultImage);
  const imageAlt = route.imageAlt ?? defaultImageAlt;
  const imageWidth = route.imageWidth ?? (route.image ? undefined : 1200);
  const imageHeight = route.imageHeight ?? (route.image ? undefined : 630);
  const imageType = route.imageType ?? "image/png";
  const breadcrumbSchema = breadcrumbSchemaForRoute(route);
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      websiteSchema,
      personSchema,
      ...(route.schema ?? []),
      ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    ],
  };

  const optionalImageDimensions =
    imageWidth && imageHeight
      ? `
    <meta property="og:image:width" content="${imageWidth}" />
    <meta property="og:image:height" content="${imageHeight}" />`
      : "";
  const optionalArticleMeta =
    route.type === "article"
      ? `
    ${
      route.publishedTime
        ? `<meta property="article:published_time" content="${route.publishedTime}" />`
        : ""
    }
    ${
      route.modifiedTime
        ? `<meta property="article:modified_time" content="${route.modifiedTime}" />`
        : ""
    }
    <meta property="article:section" content="${escapeHtml(route.section)}" />
    <meta property="article:author" content="Carlos Sanchez" />`
      : "";

  return `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(route.description)}" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#0f0f0f" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="${route.type ?? "website"}" />
    <meta property="og:title" content="${escapeHtml(route.title)}" />
    <meta property="og:description" content="${escapeHtml(route.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:secure_url" content="${image}" />
    <meta property="og:image:type" content="${imageType}" />${optionalImageDimensions}
    <meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />
    <meta property="og:site_name" content="${siteName}" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(route.title)}" />
    <meta name="twitter:description" content="${escapeHtml(route.description)}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}" />${optionalArticleMeta}
    <script type="application/ld+json">${escapeJsonLd(graph)}</script>
    <style data-seo-fallback>
      .seo-fallback {
        max-width: 760px;
        margin: 0 auto;
        padding: 7rem 1.5rem;
        color: #f6f1ea;
        font-family: Georgia, "Times New Roman", serif;
        line-height: 1.7;
      }
      .seo-fallback__eyebrow {
        color: #ff2d2d;
        font-size: 0.8rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }
      .seo-fallback h1 {
        margin: 1rem 0;
        font-size: clamp(2.5rem, 8vw, 4.75rem);
        line-height: 1.05;
      }
      .seo-fallback p {
        color: rgba(246, 241, 234, 0.72);
        font-size: 1.125rem;
      }
      .seo-fallback nav {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: 2rem;
      }
      .seo-fallback a {
        border: 1px solid rgba(255, 45, 45, 0.35);
        color: #ff4a4a;
        padding: 0.55rem 0.8rem;
        text-decoration: none;
      }
    </style>
    ${assetHead}
    <title>${escapeHtml(route.title)}</title>`;
}

function renderFallback(route) {
  const links = (route.links ?? []).map((href) => {
    const linkedRoute = routes.find((candidate) => candidate.path === href);
    const label = linkedRoute?.headline ?? linkedRoute?.title ?? href;

    return `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
  });

  return `<main class="seo-fallback" aria-label="${escapeHtml(route.headline)}">
    <p class="seo-fallback__eyebrow">${escapeHtml(route.section ?? siteName)}</p>
    <h1>${escapeHtml(route.headline)}</h1>
    ${(route.paragraphs ?? [])
      .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
      .join("\n")}
    ${links.length ? `<nav aria-label="Related pages">${links.join("\n")}</nav>` : ""}
  </main>`;
}

function renderRouteHtml(template, route, assetHead) {
  const head = renderHead(route, assetHead);
  const fallback = renderFallback(route);

  return template
    .replace(/<head>[\s\S]*?<\/head>/, `<head>${head}\n  </head>`)
    .replace(/<div id="root"><\/div>/, `<div id="root">${fallback}</div>`);
}

async function main() {
  const templatePath = path.join(distDir, "index.html");
  const template = await readFile(templatePath, "utf8");
  const assetHead = extractAssetHead(template);

  await Promise.all(
    routes.map(async (route) => {
      const outputFile = routeToOutputFile(route.path);
      await mkdir(path.dirname(outputFile), { recursive: true });
      await writeFile(outputFile, renderRouteHtml(template, route, assetHead));
    })
  );

  console.log(`Prerendered ${routes.length} SEO route files.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
