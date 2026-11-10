import { Fragment, useEffect, useRef, useState } from "react";

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
  compactImages?: boolean;
  imageCaptions?: Readonly<Record<string, string>>;
  subheads: ReadonlySet<string>;
  strongLines: ReadonlySet<string>;
};

type ArticleImage = { src: string; alt: string };

export function JournalBody({
  sections,
  compactImages = false,
  imageCaptions = {},
  subheads,
  strongLines,
}: JournalBodyProps) {
  const [expandedImage, setExpandedImage] = useState<ArticleImage | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!expandedImage) return;
    // Native modal behavior traps focus, supports Escape, and restores focus on close.
    dialogRef.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [expandedImage]);

  useEffect(() => {
    // A browser-history navigation may reuse this component for another article.
    if (dialogRef.current?.open) dialogRef.current.close();
  }, [sections]);

  return (
    <>
      <div className="max-w-5xl space-y-7 pb-12">
        {/* Strings support HTTPS links and local article images, never raw HTML. */}
        {sections.map((section, index) => {
          const image = section.match(/^!\[([^\]]+)\]\((\/images\/journal\/[a-z0-9-]+\.(?:svg|png|webp))\)$/);
          if (image) {
            const [, alt, src] = image;
            const caption = imageCaptions[src];
            return (
              <figure
                key={`${index}-${section}`}
                className={compactImages ? "mx-auto w-full max-w-[560px]" : undefined}
              >
                <button
                  type="button"
                  onClick={() => setExpandedImage({ src, alt })}
                  aria-label={`Enlarge image: ${alt}`}
                  aria-haspopup="dialog"
                  className="block w-full cursor-zoom-in rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="h-auto w-full rounded border border-foreground/10"
                    loading="lazy"
                  />
                </button>
                {(caption || compactImages) && (
                  <figcaption className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/70">
                    {caption && <p className="italic">{inlineContent(caption)}</p>}
                    {compactImages && (
                      <p className="text-center text-xs">
                        Click image to enlarge ·{" "}
                        <a href={src} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-brand">
                          Open original in a new tab
                        </a>
                      </p>
                    )}
                  </figcaption>
                )}
              </figure>
            );
          }
          if (subheads.has(section)) {
            return (
              <h3 key={`${index}-${section}`} className="pt-3 font-display text-3xl font-bold leading-tight tracking-wide text-brand/85 md:text-4xl">
                {inlineContent(section)}
              </h3>
            );
          }
          return (
            <p
              key={`${index}-${section}`}
              className={strongLines.has(section)
                ? "text-xl font-bold leading-[1.75] text-foreground/90 md:text-2xl"
                : "text-xl leading-[1.75] text-foreground/72 md:text-2xl"}
            >
              {inlineContent(section)}
            </p>
          );
        })}
      </div>
      <dialog
        ref={dialogRef}
        aria-label="Expanded article image"
        onClose={() => setExpandedImage(null)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
            event.currentTarget.close();
          }
        }}
        className="m-auto max-h-[95dvh] w-[95vw] max-w-[1600px] overflow-y-auto rounded-xl border border-foreground/20 bg-background p-4 text-foreground shadow-xl backdrop:bg-black/80"
      >
        {expandedImage && (
          <>
            <div className="mb-4 flex items-center justify-between gap-4">
              <a href={expandedImage.src} target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-4 hover:text-brand">
                Open original in a new tab
              </a>
              <button
                type="button"
                autoFocus
                onClick={() => dialogRef.current?.close()}
                className="rounded border border-foreground/30 px-4 py-2 text-sm hover:bg-foreground/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
              >
                Close image
              </button>
            </div>
            <img src={expandedImage.src} alt={expandedImage.alt} className="mx-auto max-h-[75dvh] w-auto max-w-full rounded object-contain" />
            {imageCaptions[expandedImage.src] && (
              <p className="mt-3 text-sm italic leading-relaxed text-foreground/70">
                {inlineContent(imageCaptions[expandedImage.src])}
              </p>
            )}
          </>
        )}
      </dialog>
    </>
  );
}
