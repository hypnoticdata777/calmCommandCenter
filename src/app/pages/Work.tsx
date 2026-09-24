import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import {
  type CaseStudyImage,
  type CaseStudySection,
  type WorkCaseStudy,
  workCaseStudies,
} from "../data/workCaseStudies";

// PROJECT BEACON
// Route: "/work" is the case-study shelf after Journal thinking and Lab testing.
// The facts below come from data/workCaseStudies.ts, which also powers "/work/:slug".
// Keep page-specific layout here; keep case-study content in the shared data file.
const workStudiesBySlug = Object.fromEntries(
  workCaseStudies.map((study) => [study.slug, study])
) as Record<WorkCaseStudy["slug"], WorkCaseStudy>;

const pmOpsMap = workStudiesBySlug["pm-ops-map"];
const techSyncOps = workStudiesBySlug["techsync-ops"];
const turnFlowHome = workStudiesBySlug["turnflow-home"];

const overviewCopy: Record<
  WorkCaseStudy["slug"],
  { description: string; badge: string; imageTitles?: string[] }
> = {
  "pm-ops-map": {
    badge: "Demo coming soon",
    description:
      "A free, open-source browser app that helps new PMCs set up departments, tasks, ownership, maintenance tracking, portfolio records, and operations documentation on day one without signup, backend setup, or monthly software cost.",
  },
  "techsync-ops": {
    badge: "Staged demo",
    description:
      "A staged PMC maintenance command center that turns one messy maintenance pile into role-aware lanes for admins, coordinators, technicians, clients, viewers, and vendors.",
  },
  "turnflow-home": {
    badge: "Current README screenshots",
    description:
      "A homeowner-first maintenance workspace for people who want the repair story in one place: what broke, who was invited, what was quoted, what changed, what came back, and what needs attention next.",
    imageTitles: [
      "Owner maintenance dashboard",
      "Guided intake with safety checklist",
      "Request detail with cost and decision context",
      "Property document vault",
    ],
  },
};

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-brand/60 text-sm tracking-widest uppercase">
      {children}
    </p>
  );
}

function ExternalLinks({ links }: { links: WorkCaseStudy["links"] }) {
  return (
    <>
      {links.map((link) => (
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
    </>
  );
}

function FactsGrid({ facts }: { facts: string[] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.9, ease: "easeIn" }}
      className="grid gap-8 border-t border-foreground/10 pt-12 md:grid-cols-5"
    >
      {facts.map((fact) => (
        <div key={fact} className="border-l border-brand/35 pl-4">
          <p className="text-lg leading-relaxed text-foreground/80">{fact}</p>
        </div>
      ))}
    </motion.section>
  );
}

function StudySection({ section }: { section: CaseStudySection }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.9, ease: "easeIn" }}
      className="grid gap-12 border-t border-foreground/10 pt-12 lg:grid-cols-[0.85fr_1.15fr]"
    >
      <div className="space-y-5">
        <SectionLabel>{section.label}</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
          {section.heading}
        </h2>
      </div>

      <div className="space-y-8">
        <div className="space-y-6 text-lg leading-loose text-foreground/70">
          {section.body.map((paragraph, index) => (
            <p
              key={paragraph}
              className={
                index === section.body.length - 1
                  ? "text-foreground/90"
                  : undefined
              }
            >
              {paragraph}
            </p>
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
  );
}

function getOverviewImages(study: WorkCaseStudy) {
  const imageTitles = overviewCopy[study.slug].imageTitles;

  if (!imageTitles) {
    return study.images ?? [];
  }

  return imageTitles
    .map((title) => study.images?.find((image) => image.title === title))
    .filter((image): image is CaseStudyImage => Boolean(image));
}

function ScreenshotFigure({ image }: { image: CaseStudyImage }) {
  return (
    <figure key={image.title} className="space-y-3">
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
      <figcaption className="space-y-1">
        <h3 className="text-base font-bold tracking-wide">{image.title}</h3>
        <p className="text-sm leading-relaxed text-foreground/55">
          {image.caption}
        </p>
      </figcaption>
    </figure>
  );
}

function ProductScreenshots({ images }: { images: CaseStudyImage[] }) {
  if (!images.length) {
    return null;
  }

  return (
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
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
            What the product feels like.
          </h2>
        </div>

        <p className="text-lg leading-loose text-foreground/65">
          The Lab explains the logic. Work lets the interface carry the idea:
          what the user sees, what they can do, and what becomes easier to
          understand.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {images.map((image) => (
          <ScreenshotFigure key={image.title} image={image} />
        ))}
      </div>
    </motion.section>
  );
}

function StudyIntro({
  study,
  headingClassName,
}: {
  study: WorkCaseStudy;
  headingClassName: string;
}) {
  const copy = overviewCopy[study.slug];

  return (
    <div className="space-y-8">
      <SectionLabel>{study.label}</SectionLabel>

      <h2 className={headingClassName}>{study.title}</h2>

      <div className="h-px bg-foreground/10 w-28" />

      <p className="max-w-3xl text-lg md:text-xl leading-loose text-foreground/70">
        {copy.description}
      </p>

      <div className="flex flex-wrap gap-3">
        <Link
          to={`/work/${study.slug}`}
          className="border border-brand/30 px-4 py-2 font-display text-sm tracking-wide text-brand/85 transition-colors hover:bg-brand/10"
        >
          Read case study
        </Link>
        <ExternalLinks links={study.links} />
        <span className="border border-foreground/15 px-4 py-2 font-display text-sm tracking-wide text-foreground/45">
          {copy.badge}
        </span>
      </div>
    </div>
  );
}

function StandardStudy({ study }: { study: WorkCaseStudy }) {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        className="grid gap-10 border-t border-foreground/10 pt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-start"
      >
        <div className="max-w-4xl">
          <StudyIntro
            study={study}
            headingClassName="text-4xl font-bold tracking-wide leading-tight md:text-5xl xl:text-6xl"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {getOverviewImages(study).map((image) => (
            <ScreenshotFigure key={image.title} image={image} />
          ))}
        </div>
      </motion.section>

      <FactsGrid facts={study.facts} />

      {study.sections.map((section) => (
        <StudySection key={section.label} section={section} />
      ))}
    </>
  );
}

export function Work() {
  const workItems = [pmOpsMap, techSyncOps, turnFlowHome];

  return (
    <main className="min-h-screen text-foreground px-6 py-28 sm:px-8 sm:py-32 relative z-10">
      <Seo
        title="Work | PM Ops Map, TechSync Ops, and TurnFlow Home"
        description="Case studies for PM Ops Map, TechSync Ops, and TurnFlow Home: property management tools for maintenance records, operations clarity, and better handoffs."
        path="/work"
        breadcrumbs={[
          { name: "h777", path: "/" },
          { name: "Work", path: "/work" },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Work | PM Ops Map, TechSync Ops, and TurnFlow Home",
          description:
            "Case studies for property management tools focused on operations clarity, maintenance records, and better handoffs.",
          url: "https://h777.dev/work",
          isPartOf: {
            "@type": "WebSite",
            name: "h777",
            url: "https://h777.dev",
          },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: workItems.map((study, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: study.name,
              url: `https://h777.dev/work/${study.slug}`,
            })),
          },
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeIn" }}
        className="mx-auto flex w-full max-w-6xl flex-col gap-24"
      >
        <section className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="space-y-7"
          >
            <SectionLabel>Work</SectionLabel>

            <h1 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight">
              Tools for making operational mess easier to see.
            </h1>

            <div className="h-px bg-foreground/10 w-28" />

            <p className="max-w-3xl text-lg md:text-xl leading-loose text-foreground/70">
              Work is where the screenshots, product story, and case-study
              version live. The Journal carries the lesson, the Lab shows the
              algorithm, and Work shows what the idea looks like once it has a
              real interface.
            </p>
          </motion.div>
        </section>

        <section className="max-w-4xl space-y-9">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <StudyIntro
              study={pmOpsMap}
              headingClassName="text-3xl md:text-5xl font-bold tracking-wide leading-tight"
            />
          </motion.div>
        </section>

        <FactsGrid facts={pmOpsMap.facts} />

        {pmOpsMap.sections.slice(0, 2).map((section) => (
          <StudySection key={section.label} section={section} />
        ))}

        <ProductScreenshots images={getOverviewImages(pmOpsMap)} />

        {pmOpsMap.sections.slice(2).map((section) => (
          <StudySection key={section.label} section={section} />
        ))}

        <StandardStudy study={techSyncOps} />
        <StandardStudy study={turnFlowHome} />
      </motion.div>
    </main>
  );
}
