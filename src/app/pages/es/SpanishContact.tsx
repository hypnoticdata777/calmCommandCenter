import { motion } from "motion/react";
import { Github, Mail } from "lucide-react";
import { Seo } from "../../components/Seo";
import { spanishSiteCopy } from "../../data/spanishSiteCopy";

const email = "hypnoticdata777@gmail.com";

// PROJECT BEACON
// Route: "/es/contacto" is the Spanish consulting/contact bridge.
// It speaks to inmobiliarias, desarrolladoras, investors, and postventa teams.
export function SpanishContact() {
  const copy = spanishSiteCopy.contact;

  return (
    <main className="min-h-screen text-foreground px-6 py-28 sm:px-8 sm:py-32 relative z-10">
      <Seo
        title={copy.seoTitle}
        description={copy.seoDescription}
        path="/es/contacto"
        locale="es_MX"
        alternates={{ en: "/contact", esMx: "/es/contacto" }}
        breadcrumbs={[
          { name: "h777", path: "/" },
          { name: "Español", path: "/es" },
          { name: "Contacto", path: "/es/contacto" },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: copy.seoTitle,
          description: copy.seoDescription,
          url: "https://h777.dev/es/contacto",
          inLanguage: "es-MX",
        }}
      />

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.7fr)] lg:items-start"
      >
        <div className="max-w-3xl space-y-8">
          <p className="text-brand/60 text-sm tracking-widest uppercase">
            {copy.eyebrow}
          </p>

          <h1 className="text-4xl font-bold tracking-wide leading-tight md:text-6xl">
            {copy.headline}
          </h1>

          <div className="h-px bg-foreground/10 w-28" />

          <div className="space-y-5 text-lg leading-loose text-foreground/70 md:text-xl">
            <p>{copy.intro}</p>
            <p className="text-foreground/90">{copy.context}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 border border-brand/30 bg-brand/10 px-5 py-2.5 font-display tracking-wide text-brand transition-colors hover:bg-brand/20"
            >
              <Mail size={16} aria-hidden="true" />
              {copy.ctas.email}
            </a>
            <a
              href="https://github.com/hypnoticdata777"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/15 px-5 py-2.5 font-display tracking-wide text-foreground/65 transition-colors hover:border-brand/30 hover:text-brand"
            >
              <Github size={16} aria-hidden="true" />
              {copy.ctas.github}
            </a>
          </div>
        </div>

        <aside className="border border-foreground/10 bg-background/40 px-6 py-6">
          <p className="text-brand/60 text-sm tracking-widest uppercase">
            Temas utiles
          </p>
          <div className="mt-6 grid gap-4">
            {copy.helpfulDetails.map((detail) => (
              <p
                key={detail}
                className="border-b border-foreground/10 pb-3 text-foreground/72 last:border-b-0"
              >
                {detail}
              </p>
            ))}
          </div>
          <a
            href={`mailto:${email}`}
            className="mt-7 block break-all text-sm leading-relaxed text-brand/80 transition-colors hover:text-brand"
          >
            {email}
          </a>
        </aside>
      </motion.section>
    </main>
  );
}
