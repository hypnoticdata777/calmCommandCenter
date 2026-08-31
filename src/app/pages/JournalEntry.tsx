import { motion } from "motion/react";
import { Link, useParams } from "react-router-dom";
import { JournalBody } from "../components/JournalBody";
import { Seo } from "../components/Seo";
import { NotFound } from "./NotFound";
import { journalEntries, journalStrongLines, journalSubheads } from "./Journal";

function getPreviousAndNext(slug: string) {
  const publishedEntries = journalEntries.filter((entry) => !entry.comingSoon);
  const currentIndex = publishedEntries.findIndex((entry) => entry.slug === slug);

  return {
    previous: currentIndex > 0 ? publishedEntries[currentIndex - 1] : null,
    next:
      currentIndex >= 0 && currentIndex < publishedEntries.length - 1
        ? publishedEntries[currentIndex + 1]
        : null,
  };
}

export function JournalEntry() {
  const { slug } = useParams();
  const entry = journalEntries.find(
    (candidate) => candidate.slug === slug && !candidate.comingSoon
  );

  if (!entry) {
    return <NotFound />;
  }

  const { previous, next } = getPreviousAndNext(entry.slug);
  const articleUrl = `https://h777.dev/journal/${entry.slug}`;

  return (
    <main className="min-h-screen text-foreground px-6 py-28 sm:px-8 sm:py-32 relative z-10">
      <Seo
        title={`${entry.label}: ${entry.title} | h777 Journal`}
        description={entry.excerpt}
        path={`/journal/${entry.slug}`}
        type="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: entry.title,
          description: entry.excerpt,
          url: articleUrl,
          datePublished: entry.dateISO,
          dateModified: entry.dateISO,
          articleSection: entry.type,
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
            to="/journal"
            className="inline-block font-display text-sm tracking-wide text-brand/70 transition-colors hover:text-brand"
          >
            Back to Journal
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
        </header>

        <JournalBody
          sections={entry.sections}
          subheads={journalSubheads}
          strongLines={journalStrongLines}
        />

        <footer className="grid gap-4 border-t border-foreground/10 pt-8 sm:grid-cols-2">
          {previous ? (
            <Link
              to={`/journal/${previous.slug}`}
              className="border border-foreground/10 px-5 py-4 transition-colors hover:border-brand/35 hover:bg-brand/5"
            >
              <span className="block text-xs uppercase tracking-[0.24em] text-foreground/35">
                Previous
              </span>
              <span className="mt-2 block font-display text-lg leading-snug text-foreground/75">
                {previous.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next && (
            <Link
              to={`/journal/${next.slug}`}
              className="border border-foreground/10 px-5 py-4 transition-colors hover:border-brand/35 hover:bg-brand/5 sm:text-right"
            >
              <span className="block text-xs uppercase tracking-[0.24em] text-foreground/35">
                Next
              </span>
              <span className="mt-2 block font-display text-lg leading-snug text-foreground/75">
                {next.title}
              </span>
            </Link>
          )}
        </footer>
      </motion.article>
    </main>
  );
}

