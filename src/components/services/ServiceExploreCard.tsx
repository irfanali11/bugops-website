import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function ServiceExploreCard({
  href,
  title,
  promise,
  bullets,
  exploreLabel = "Explore",
}: {
  href: string;
  title: string;
  promise: string;
  bullets: readonly string[];
  exploreLabel?: string;
}) {
  return (
    <Link href={href} className="group block h-full">
      <article className="surface-card flex h-full flex-col p-7">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-sm font-medium leading-snug text-brand">{promise}</p>
        <ul className="mt-5 flex-1 space-y-2">
          {bullets.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              {item}
            </li>
          ))}
        </ul>
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand opacity-80 transition-all duration-[250ms] ease-out group-hover:gap-2 group-hover:opacity-100">
          {exploreLabel}
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </article>
    </Link>
  );
}

export function ServiceCategoryBlock({
  label,
  headline,
  outcomeHeadline,
  body,
  children,
  viewAllHref,
}: {
  label: string;
  headline: string;
  outcomeHeadline?: string;
  body: string;
  children: React.ReactNode;
  viewAllHref?: string;
}) {
  return (
    <FadeIn>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{label}</p>
        <h2 className="display-heading mt-3 text-2xl text-foreground md:text-3xl">{headline}</h2>
        {outcomeHeadline && (
          <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-foreground/90">
            {outcomeHeadline}
          </p>
        )}
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{body}</p>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="text-link mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand"
          >
            View on homepage
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </FadeIn>
  );
}
