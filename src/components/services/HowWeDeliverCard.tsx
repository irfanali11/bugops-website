import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import { Check, Layers, PenTool, Rocket, Search, Wrench } from "lucide-react";
import type { HowWeDeliverIcon } from "@/lib/how-we-deliver-data";
import { getHowWeDeliverCardImage } from "@/lib/image-paths";
import { cn } from "@/lib/utils";

const iconMap: Record<HowWeDeliverIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  search: Search,
  rocket: Rocket,
  "pen-tool": PenTool,
  wrench: Wrench,
  layers: Layers,
};

type DeliverCard = {
  id: string;
  title: string;
  tagline: string;
  body: string;
  includes: readonly string[];
  icon: HowWeDeliverIcon;
};

export function HowWeDeliverCard({
  card,
  showIcon = true,
  includeLimit,
  className,
}: {
  card: DeliverCard;
  showIcon?: boolean;
  includeLimit?: number;
  className?: string;
}) {
  const Icon = iconMap[card.icon];
  const image = getHowWeDeliverCardImage(card.id);
  const includes = includeLimit != null ? card.includes.slice(0, includeLimit) : card.includes;

  return (
    <article className={cn("surface-card flex h-full flex-col overflow-hidden p-0", className)}>
      {image ? (
        <div className="work-preview relative aspect-[16/10] shrink-0 overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-7">
        {showIcon ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-light bg-surface-elevated text-brand">
            <Icon className="h-5 w-5" strokeWidth={1.85} aria-hidden />
          </div>
        ) : null}
        <h3 className={cn("text-lg font-bold text-foreground", showIcon && "mt-5")}>{card.title}</h3>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-brand">{card.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{card.body}</p>
        <div className="mt-6 border-t border-border-light pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">Includes:</p>
          <ul className="mt-3 grid gap-2">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                {showIcon ? <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> : null}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
