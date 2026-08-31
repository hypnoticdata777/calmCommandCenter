import { motion } from "motion/react";
import { Link, useParams } from "react-router-dom";
import { RelatedLinks } from "../components/RelatedLinks";
import { Seo } from "../components/Seo";
import { workCaseStudies } from "../data/workCaseStudies";
import { NotFound } from "./NotFound";

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-brand/60 text-sm tracking-widest uppercase">
      {children}
    </p>
  );
}

function getPreviousAndNext(slug: string) {
  const currentIndex = workCaseStudies.findIndex((study) => study.slug === slug);

  return {
    previous: currentIndex > 0 ? workCaseStudies[currentIndex - 1] : null,
    next:
      currentIndex >= 0 && currentIndex < workCaseStudies.length - 1
        ? workCaseStudies[currentIndex + 1]
        : null,
  };
}

export function WorkCaseStudy() {
  const { slug } = useParams();
  const study = workCaseStudies.find((candidate) => candidate.slug === slug);

  if (!study) {
    return <NotFound />;
  }

  const { previous, next } = getPreviousAndNext(study.slug);
  const canonicalPath = `/work/${study.slug}`;
  const caseStudyUrl = `https://h777.dev${canonicalPath}`;
  const relatedSchema = study.relatedLinks?.map((link) => ({
    "@type": "WebPage",
    name: link.title,
    url: `https://h777.dev${link.href}`,
  }));

  return (
    <main className="min-h-screen text-foreground px-6 py-28 sm:px-8 sm:py-32 relative z-10">
      <Seo
        title={`${study.seoTitle} | h777 Work`}
        description={study.description}
        path={canonicalPath}
        type="article"
        image={study.images?.[0]?.src}
        imageAlt={
          study.images?.[0]?.alt ??
          `${study.name} case study from h777`
        }
        imageWidth={study.images?.[0]?.width}
        imageHeight={study.images?.[0]?.height}
        imageType={study.images?.[0] ? "image/png" : undefined}
        modifiedTime={study.dateModified}
        section="Work case study"
        author="Carlos Sanchez"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: study.title,
          description: study.description,
          url: caseStudyUrl,
          dateModified: study.dateModified,
          author: {
            "@type": "Person",
            name: "Carlos Sanchez",
            url: "https://h777.dev/about",
          },
          publisher: {
            "@type": "Organization",
            name: "h777",
            url: "https://h777.dev",
          },
          image: study.images?.map((image) => `https://h777.dev${image.src}`),
          about: {
            "@type": "SoftwareApplication",
            name: study.name,
            applicationCategory: study.type,
            description: study.description,
            audience: {
              "@type": "Audience",
              audienceType: study.audience,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": caseStudyUrl,
          },
          ...(relatedSchema ? { isRelatedTo: relatedSchema } : {}),
        }}
      />

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="mx-auto flex w-full max-w-6xl flex-col gap-20"
      >
        <header className="max-w-4xl space-y-8 border-b border-foreground/10 pb-12">
          <Link
            to="/work"
            className="inline-block font-display text-sm tracking-wide text-brand/70 transition-colors hover:text-brand"
          >
            Back to Work
          </Link>

          <div className="space-y-3">
            <SectionLabel>{study.label}</SectionLabel>
            <p className="text-xs uppercase tracking-[0.24em] text-foreground/35">
              {study.status} / {study.type}
            </p>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-wide md:text-6xl">
            {study.title}
          </h1>

          <p className="max-w-3xl text-lg leading-loose text-foreground/70 md:text-xl">
            {study.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {study.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="border border-brand/30 px-4 py-2 font-display text-sm tracking-wide text-brand/85 transition-colors hover:bg-brand/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </header>

        <section className="grid gap-8 md:grid-cols-5">
          {study.facts.map((fact) => (
            <div key={fact} className="border-l border-brand/35 pl-4">
              <p className="text-lg leading-relaxed text-foreground/80">
                {fact}
              </p>
            </div>
          ))}
        </section>

        {study.sections.map((section) => (
          <motion.section
            key={section.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.9, ease: "easeIn" }}
            className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.85fr_1.15fr]"
          >
            <div className="space-y-5">
              <SectionLabel>{section.label}</SectionLabel>
              <h2 className="text-3xl font-bold leading-tight tracking-wide md:text-4xl">
                {section.heading}
              </h2>
            </div>

            <div className="space-y-8">
              <div className="space-y-6 text-lg leading-loose text-foreground/70">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.items && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <p
                      key={item}
                      className="border-b border-foreground/10 pb-4 text-lg leading-relaxed text-foreground/75"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </motion.section>
        ))}

        {study.images && (
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.9, ease: "easeIn" }}
            className="space-y-10 border-t border-foreground/10 pt-12"
          >
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="space-y-5">
                <SectionLabel>Screenshots</SectionLabel>
                <h2 className="text-3xl font-bold leading-tight tracking-wide md:text-4xl">
                  Proof from the build.
                </h2>
              </div>

              <p className="text-lg leading-loose text-foreground/65">
                Product screenshots give the case study visible evidence, not
                just a nice paragraph saying the tool exists.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {study.images.map((image) => (
                <figure key={image.title} className="space-y-4">
                  <div className="overflow-hidden border border-foreground/10 bg-background/40">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="aspect-[16/11] w-full object-cover object-top"
                    decoding="async"
                    loading="lazy"
                  />
                  </div>
                  <figcaption className="space-y-2">
                    <h3 className="text-xl font-bold tracking-wide">
                      {image.title}
                    </h3>
                    <p className="leading-relaxed text-foreground/55">
                      {image.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </motion.section>
        )}

        {study.relatedLinks && (
          <RelatedLinks
            eyebrow="Related thinking"
            title="How this connects to the rest of h777"
            links={study.relatedLinks}
          />
        )}

        <footer className="grid gap-4 border-t border-foreground/10 pt-8 sm:grid-cols-2">
          {previous ? (
            <Link
              to={`/work/${previous.slug}`}
              className="border border-foreground/10 px-5 py-4 transition-colors hover:border-brand/35 hover:bg-brand/5"
            >
              <span className="block text-xs uppercase tracking-[0.24em] text-foreground/35">
                Previous
              </span>
              <span className="mt-2 block font-display text-lg leading-snug text-foreground/75">
                {previous.name}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next && (
            <Link
              to={`/work/${next.slug}`}
              className="border border-foreground/10 px-5 py-4 transition-colors hover:border-brand/35 hover:bg-brand/5 sm:text-right"
            >
              <span className="block text-xs uppercase tracking-[0.24em] text-foreground/35">
                Next
              </span>
              <span className="mt-2 block font-display text-lg leading-snug text-foreground/75">
                {next.name}
              </span>
            </Link>
          )}
        </footer>
      </motion.article>
    </main>
  );
}
