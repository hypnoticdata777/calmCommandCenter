import { motion } from "motion/react";
import { Link, useParams } from "react-router-dom";
import { ArticleListenControls } from "../../components/ArticleListenControls";
import { JournalBody } from "../../components/JournalBody";
import { RelatedLinks } from "../../components/RelatedLinks";
import { Seo } from "../../components/Seo";
import {
  spanishJournalEntries,
  spanishJournalStrongLines,
  spanishJournalSubheads,
} from "../../data/spanishJournal";
import { NotFound } from "../NotFound";

export function SpanishJournalEntry() {
  const { slug } = useParams();
  const entry = spanishJournalEntries.find((candidate) => candidate.slug === slug);

  if (!entry) {
    return <NotFound />;
  }

  const articleUrl = `https://h777.dev/es/notas/${entry.slug}`;
  const relatedSchema = entry.relatedLinks?.map((link) => ({
    "@type": "WebPage",
    name: link.title,
    url: `https://h777.dev${link.href}`,
  }));

  return (
    <main className="min-h-screen text-foreground px-6 py-28 sm:px-8 sm:py-32 relative z-10">
      <Seo
        title={`${entry.label}: ${entry.title} | h777 Notas`}
        description={entry.excerpt}
        path={`/es/notas/${entry.slug}`}
        type="article"
        locale="es_MX"
        publishedTime={entry.dateISO}
        modifiedTime={entry.dateISO}
        section={entry.type}
        author="Carlos Sanchez"
        breadcrumbs={[
          { name: "h777", path: "/" },
          { name: "Notas", path: "/es/notas" },
          { name: entry.title, path: `/es/notas/${entry.slug}` },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: entry.title,
          description: entry.excerpt,
          url: articleUrl,
          datePublished: entry.dateISO,
          dateModified: entry.dateISO,
          articleSection: entry.type,
          inLanguage: "es-MX",
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
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": articleUrl,
          },
          ...(relatedSchema ? { isRelatedTo: relatedSchema } : {}),
        }}
      />

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="mx-auto w-full max-w-5xl space-y-14"
      >
        <header className="max-w-4xl space-y-7 border-b border-foreground/10 pb-12 text-left">
          <Link
            to="/es/notas"
            className="inline-block font-display text-sm tracking-wide text-brand/70 transition-colors hover:text-brand"
          >
            Volver a Notas
          </Link>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-widest text-brand/60">
              {entry.label} / {entry.date}
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-foreground/35">
              {entry.type} / {entry.readTime}
            </p>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-wide md:text-6xl">
            {entry.title}
          </h1>

          <p className="max-w-3xl text-lg leading-[1.8] text-foreground/60 md:text-xl">
            {entry.excerpt}
          </p>

          <ArticleListenControls
            title={entry.title}
            readTime={entry.readTime}
            sections={entry.sections}
          />
        </header>

        <JournalBody
          sections={entry.sections}
          subheads={spanishJournalSubheads}
          strongLines={spanishJournalStrongLines}
        />

        {entry.relatedLinks && (
          <RelatedLinks
            eyebrow="Sigue el hilo"
            title="Notas y proyectos relacionados"
            links={entry.relatedLinks}
          />
        )}
      </motion.article>
    </main>
  );
}
