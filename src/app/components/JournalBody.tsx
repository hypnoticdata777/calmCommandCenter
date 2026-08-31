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
      {sections.map((section, index) =>
        subheads.has(section) ? (
          <h3
            key={`${index}-${section}`}
            className="pt-3 font-display text-3xl font-bold leading-tight tracking-wide text-brand/85 md:text-4xl"
          >
            {section}
          </h3>
        ) : strongLines.has(section) ? (
          <p
            key={`${index}-${section}`}
            className="text-xl font-bold leading-[1.75] text-foreground/90 md:text-2xl"
          >
            {section}
          </p>
        ) : (
          <p
            key={`${index}-${section}`}
            className="text-xl leading-[1.75] text-foreground/72 md:text-2xl"
          >
            {section}
          </p>
        )
      )}
    </div>
  );
}
