import { useEffect } from "react";

const SITE_URL = "https://h777.dev";
const SITE_NAME = "h777";
const DEFAULT_IMAGE = "/og-card.svg";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
  image?: string;
  robots?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

function setNamedMeta(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setPropertyMeta(property: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`
  );

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(url: string) {
  let tag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", url);
}

function setStructuredData(schema: Record<string, unknown> | Record<string, unknown>[]) {
  let tag = document.querySelector<HTMLScriptElement>(
    'script[type="application/ld+json"][data-seo="route"]'
  );

  if (!tag) {
    tag = document.createElement("script");
    tag.setAttribute("type", "application/ld+json");
    tag.setAttribute("data-seo", "route");
    document.head.appendChild(tag);
  }

  tag.textContent = JSON.stringify(schema);
}

export function Seo({
  title,
  description,
  path,
  type = "website",
  image = DEFAULT_IMAGE,
  robots,
  schema,
}: SeoProps) {
  useEffect(() => {
    const url = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);
    const routeSchema =
      schema ??
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url,
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
        },
      };

    document.title = title;
    setCanonical(url);

    setNamedMeta("description", description);
    setNamedMeta("robots", robots ?? "index, follow");
    setNamedMeta("twitter:card", "summary_large_image");
    setNamedMeta("twitter:title", title);
    setNamedMeta("twitter:description", description);
    setNamedMeta("twitter:image", imageUrl);

    setPropertyMeta("og:type", type);
    setPropertyMeta("og:title", title);
    setPropertyMeta("og:description", description);
    setPropertyMeta("og:url", url);
    setPropertyMeta("og:image", imageUrl);
    setPropertyMeta("og:site_name", SITE_NAME);
    setPropertyMeta("og:locale", "en_US");

    setStructuredData(routeSchema);
  }, [description, image, path, robots, schema, title, type]);

  return null;
}
