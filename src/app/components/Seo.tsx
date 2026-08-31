import { useEffect } from "react";

const SITE_URL = "https://h777.dev";
const SITE_NAME = "h777";
const DEFAULT_IMAGE = "/og.png";
const DEFAULT_IMAGE_ALT =
  "h777 property management operations tools and field notes";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageType?: string;
  robots?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  author?: string;
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

function removePropertyMeta(property: string) {
  document
    .querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
    ?.remove();
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
  imageAlt = DEFAULT_IMAGE_ALT,
  imageWidth,
  imageHeight,
  imageType,
  robots,
  publishedTime,
  modifiedTime,
  section,
  author,
  schema,
}: SeoProps) {
  useEffect(() => {
    const url = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);
    const usesDefaultShareCard = image === DEFAULT_IMAGE;
    const resolvedImageWidth = imageWidth ?? (usesDefaultShareCard ? 1200 : undefined);
    const resolvedImageHeight =
      imageHeight ?? (usesDefaultShareCard ? 630 : undefined);
    const resolvedImageType =
      imageType ?? (usesDefaultShareCard ? "image/png" : undefined);
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
    setNamedMeta("twitter:image:alt", imageAlt);

    setPropertyMeta("og:type", type);
    setPropertyMeta("og:title", title);
    setPropertyMeta("og:description", description);
    setPropertyMeta("og:url", url);
    setPropertyMeta("og:image", imageUrl);
    setPropertyMeta("og:image:secure_url", imageUrl);
    setPropertyMeta("og:image:alt", imageAlt);
    if (resolvedImageWidth && resolvedImageHeight && resolvedImageType) {
      setPropertyMeta("og:image:width", String(resolvedImageWidth));
      setPropertyMeta("og:image:height", String(resolvedImageHeight));
      setPropertyMeta("og:image:type", resolvedImageType);
    } else {
      removePropertyMeta("og:image:width");
      removePropertyMeta("og:image:height");
      removePropertyMeta("og:image:type");
    }
    setPropertyMeta("og:site_name", SITE_NAME);
    setPropertyMeta("og:locale", "en_US");
    if (type === "article") {
      if (publishedTime) {
        setPropertyMeta("article:published_time", publishedTime);
      } else {
        removePropertyMeta("article:published_time");
      }

      if (modifiedTime) {
        setPropertyMeta("article:modified_time", modifiedTime);
      } else {
        removePropertyMeta("article:modified_time");
      }

      if (section) {
        setPropertyMeta("article:section", section);
      } else {
        removePropertyMeta("article:section");
      }

      if (author) {
        setPropertyMeta("article:author", author);
      } else {
        removePropertyMeta("article:author");
      }
    } else {
      removePropertyMeta("article:published_time");
      removePropertyMeta("article:modified_time");
      removePropertyMeta("article:section");
      removePropertyMeta("article:author");
    }

    setStructuredData(routeSchema);
  }, [
    author,
    description,
    image,
    imageAlt,
    imageHeight,
    imageType,
    imageWidth,
    modifiedTime,
    path,
    publishedTime,
    robots,
    schema,
    section,
    title,
    type,
  ]);

  return null;
}
