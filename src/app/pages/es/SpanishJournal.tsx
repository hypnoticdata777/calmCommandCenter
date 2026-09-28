import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArticleListenControls } from "../../components/ArticleListenControls";
import { JournalBody } from "../../components/JournalBody";
import { RelatedLinks } from "../../components/RelatedLinks";
import { Seo } from "../../components/Seo";
import {
  spanishJournalEntries,
  spanishJournalStrongLines,
  spanishJournalSubheads,
} from "../../data/spanishJournal";

export function SpanishJournal() {
  const [openEntry, setOpenEntry] = useState<string | null>(null);

  return (
    <main className="min-h-screen text-foreground px-6 py-28 sm:px-8 sm:py-32 relative z-10">
      <Seo
        title="Notas | Operaciones inmobiliarias, PropTech y sistemas"
        description="Notas en espanol sobre operaciones inmobiliarias, mantenimiento, postventa, software interno, PropTech y equipos remotos."
        path="/es/notas"
        locale="es_MX"
        alternates={{ en: "/journal", esMx: "/es/notas" }}
        breadcrumbs={[
          { name: "h777", path: "/" },
          { name: "Notas", path: "/es/notas" },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "h777 Notas",
          description:
            "Notas en espanol sobre operaciones inmobiliarias, mantenimiento, postventa, software interno, PropTech y equipos remotos.",
          url: "https://h777.dev/es/notas",
          inLanguage: "es-MX",
          blogPost: spanishJournalEntries.map((entry) => ({
            "@type": "BlogPosting",
            headline: entry.title,
            datePublished: entry.dateISO,
            url: `https://h777.dev/es/notas/${entry.slug}`,
            author: {
              "@type": "Person",
              name: "Carlos Sanchez",
            },
          })),
        }}
      />

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="mx-auto w-full max-w-5xl space-y-16"
      >
        <header className="max-w-3xl space-y-7 text-left">
          <p className="text-brand/60 text-sm tracking-widest uppercase">Notas</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight">
            Notas para ordenar el caos operativo.
          </h1>
          <div className="h-px bg-foreground/10 w-28" />
          <p className="max-w-2xl text-lg leading-[1.8] tracking-wide text-foreground/55 md:text-xl">
            Ideas sobre inmobiliarias, mantenimiento, postventa, sistemas
            internos y equipos remotos que ya no pueden depender de memoria,
            WhatsApp y suerte.
          </p>
        </header>

        <div className="border-y border-foreground/10">
          {spanishJournalEntries.map((entry, index) => {
            const isOpen = openEntry === entry.title;

            return (
              <motion.article
                id={`spanish-journal-entry-${index}`}
                key={entry.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.15 + index * 0.12,
                  ease: "easeIn",
                }}
                className="scroll-mt-24 border-b border-foreground/10 last:border-b-0"
              >
                <div className="grid w-full gap-5 py-7 text-left md:grid-cols-[11rem_1fr_8rem]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenEntry(isOpen ? null : entry.title)}
                    className="group grid gap-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 md:col-span-2 md:grid-cols-[11rem_1fr]"
                  >
                    <div className="space-y-2">
                      <p className="text-sm tracking-widest uppercase text-brand/55">
                        {entry.label} / {entry.date}
                      </p>
                      <p className="text-xs uppercase tracking-[0.24em] text-foreground/35">
                        {entry.type}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-2xl sm:text-3xl font-bold leading-snug tracking-wide text-foreground transition-colors group-hover:text-brand">
                        {entry.title}
                      </h2>
                      <p className="text-sm uppercase tracking-[0.24em] text-foreground/35">
                        {entry.readTime}
                      </p>
                    </div>
                  </button>

                  <div className="flex flex-wrap items-start gap-2 md:justify-end">
                    <button
                      type="button"
                      onClick={() => setOpenEntry(isOpen ? null : entry.title)}
                      className="border border-foreground/15 px-3 py-1 font-display text-sm tracking-wide text-foreground/45 transition-colors hover:border-foreground/30 hover:text-foreground/70"
                    >
                      {isOpen ? "Cerrar" : "Vista previa"}
                    </button>
                    <Link
                      to={`/es/notas/${entry.slug}`}
                      className="border border-brand/25 px-3 py-1 font-display text-sm tracking-wide text-brand/75 transition-colors hover:bg-brand/10 hover:text-brand"
                    >
                      Leer
                    </Link>
                  </div>
                </div>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="space-y-8 overflow-hidden"
                  >
                    <ArticleListenControls
                      title={entry.title}
                      readTime={entry.readTime}
                      sections={entry.sections}
                    />
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
                  </motion.div>
                )}
              </motion.article>
            );
          })}
        </div>
      </motion.section>
    </main>
  );
}
