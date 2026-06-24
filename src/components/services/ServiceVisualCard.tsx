import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";

type ServiceVisualCardProps = {
  href: string;
  image: { src: string; alt: string };
  title: string;
  tagline: string;
  outcomeHeadline: string;
  bullets: readonly string[];
  imageSizes?: string;
};

export function ServiceVisualCard({
  href,
  image,
  title,
  tagline,
  outcomeHeadline,
  bullets,
  imageSizes = "(max-width: 768px) 100vw, 33vw",
}: ServiceVisualCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className="ai-service-card">
        <div className="service-card-visual relative px-5 py-5">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={imageSizes}
            loading="lazy"
            className="object-cover opacity-45"
          />
          <div className="ai-service-card-icon relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-brand-soft/50 bg-surface-elevated/15 backdrop-blur-sm">
            <ArrowUpRight className="h-4 w-4 text-surface-elevated" />
          </div>
          <p className="relative z-10 mt-5 text-sm font-semibold leading-snug text-surface-elevated">
            {title}
          </p>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">{tagline}</p>
          <p className="mt-2 text-sm font-medium leading-snug text-foreground/90">{outcomeHeadline}</p>
          <ul className="mt-4 space-y-2">
            {bullets.slice(0, 3).map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand opacity-80 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:opacity-100">
            Explore
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
