import { Fragment } from "react";

// Only explicit HTTPS links are supported; React escapes all displayed text.
function inlineContent(text: string) {
  return text.split(/(\[[^\]]+\]\(https:\/\/[^\s)]+\))/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\((https:\/\/[^\s)]+)\)$/);
    return link ? (
      <a key={index} href={link[2]} className="text-brand underline underline-offset-4 hover:opacity-80">
        {link[1]}
      </a>
    ) : <Fragment key={index}>{part}</Fragment>;
  });
}

type JournalBodyProps = {
  sections: string[];
  subheads: ReadonlySet<string>;
  strongLines: ReadonlySet<string>;
};

export function JournalBody({
  sections,
  subheads,
  strongLines,
}: JournalBodyProps) {
  return (
    <div className="max-w-5xl space-y-7 pb-12">
      {/* Strings support HTTPS links and local article images, never raw HTML. */}
      {sections.map((section, index) =>
        /^!\[[^\]]+\]\(\/images\/journal\/[a-z0-9-]+\.(?:svg|png|webp)\)$/.test(section) ? (
          <figure key={`${index}-${section}`}>
            <img
              src={section.match(/\]\(([^)]+)\)$/)![1]}
              alt={section.match(/^!\[([^\]]+)\]/)![1]}
              className="h-auto w-full rounded border border-foreground/10"
              loading="lazy"
            />
          </figure>
        ) : subheads.has(section) ? (
          <h3
            key={`${index}-${section}`}
            className="pt-3 font-display text-3xl font-bold leading-tight tracking-wide text-brand/85 md:text-4xl"
          >
            {inlineContent(section)}
          </h3>
        ) : strongLines.has(section) ? (
          <p
            key={`${index}-${section}`}
            className="text-xl font-bold leading-[1.75] text-foreground/90 md:text-2xl"
          >
            {inlineContent(section)}
          </p>
        ) : (
          <p
            key={`${index}-${section}`}
            className="text-xl leading-[1.75] text-foreground/72 md:text-2xl"
          >
            {inlineContent(section)}
          </p>
        )
      )}
    </div>
  );
}
