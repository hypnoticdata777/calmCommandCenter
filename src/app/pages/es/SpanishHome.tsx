import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Seo } from "../../components/Seo";
import { spanishSiteCopy } from "../../data/spanishSiteCopy";

// PROJECT BEACON
// Route: "/es" is the first Spanish entry point for Mexican real-estate ops.
// It keeps the English site stable while testing Spanish positioning.
export function SpanishHome() {
  const copy = spanishSiteCopy.home;

  return (
    <main className="min-h-screen text-foreground px-6 py-28 sm:px-8 sm:py-32 relative z-10">
      <Seo
        title={copy.seoTitle}
        description={copy.seoDescription}
        path="/es"
        locale="es_MX"
        alternates={{ en: "/", esMx: "/es" }}
        breadcrumbs={[
          { name: "h777", path: "/" },
          { name: "Español", path: "/es" },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: copy.seoTitle,
          description: copy.seoDescription,
          url: "https://h777.dev/es",
          inLanguage: "es-MX",
          isPartOf: {
            "@type": "WebSite",
            name: "h777",
            url: "https://h777.dev",
          },
        }}
      />

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="mx-auto flex w-full max-w-6xl flex-col gap-20"
      >
        <div className="max-w-4xl space-y-8">
          <p className="text-brand/60 text-sm tracking-widest uppercase">
            {copy.eyebrow}
          </p>

          <h1 className="text-4xl font-bold tracking-wide leading-tight md:text-6xl">
            {copy.headline}
          </h1>

          <div className="h-px bg-foreground/10 w-28" />

          <div className="max-w-3xl space-y-5 text-lg leading-loose text-foreground/70 md:text-xl">
            <p>{copy.intro}</p>
            <p className="text-foreground/90">{copy.proof}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/es/contacto"
              className="border border-brand/30 bg-brand/10 px-5 py-2.5 font-display tracking-wide text-brand transition-colors hover:bg-brand/20"
            >
              {copy.ctas.primary}
            </Link>
            <Link
              to="/work"
              className="border border-foreground/15 px-5 py-2.5 font-display tracking-wide text-foreground/65 transition-colors hover:border-brand/30 hover:text-brand"
            >
              {copy.ctas.secondary}
            </Link>
          </div>
        </div>

        <section className="grid gap-8 border-t border-foreground/10 pt-12 md:grid-cols-3">
          {copy.pillars.map((pillar, index) => (
            <div key={pillar} className="border-l border-brand/35 pl-4">
              <p className="font-display text-sm text-brand/55">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-xl leading-relaxed text-foreground/82">
                {pillar}
              </p>
            </div>
          ))}
        </section>

        <section className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <p className="text-brand/60 text-sm tracking-widest uppercase">
              Para quien
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-wide md:text-4xl">
              Para equipos que necesitan dejar de adivinar que paso.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {copy.audience.map((item) => (
              <p
                key={item}
                className="border-b border-foreground/10 pb-4 text-lg leading-relaxed text-foreground/75"
              >
                {item}
              </p>
            ))}
          </div>
        </section>
      </motion.section>
    </main>
  );
}
