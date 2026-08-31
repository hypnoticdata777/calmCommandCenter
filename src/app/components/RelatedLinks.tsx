import { Link } from "react-router-dom";

export type RelatedLink = {
  label: string;
  title: string;
  href: string;
};

type RelatedLinksProps = {
  eyebrow: string;
  title: string;
  links: RelatedLink[];
};

export function RelatedLinks({ eyebrow, title, links }: RelatedLinksProps) {
  if (!links.length) return null;

  return (
    <section
      className="border-t border-foreground/10 pt-10"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="mb-6 space-y-3">
        <p className="font-display text-sm uppercase tracking-[0.24em] text-brand/60">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-bold leading-tight tracking-wide text-foreground/85 md:text-3xl">
          {title}
        </h2>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="group border border-foreground/10 px-5 py-4 transition-colors hover:border-brand/35 hover:bg-brand/5"
          >
            <span className="block font-display text-sm uppercase tracking-[0.2em] text-brand/55">
              {link.label}
            </span>
            <span className="mt-3 block text-lg font-bold leading-snug text-foreground/72 transition-colors group-hover:text-foreground">
              {link.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
