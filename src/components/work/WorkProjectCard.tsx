import Link from "next/link";
import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import { PortfolioPreviewImage } from "@/components/work/PortfolioPreviewImage";
import { TechStackPills } from "@/components/work/TechStackPills";
import type { CaseStudy } from "@/lib/case-studies-data";

type WorkProjectCardProps = {
  study: CaseStudy;
  image?: { src: string; alt: string };
};

export const WorkProjectCard = memo(function WorkProjectCard({
  study,
  image,
}: WorkProjectCardProps) {
  return (
    <Link href={`/work/${study.slug}`} className="group block">
      <article className="surface-card overflow-hidden p-0">
        {image ? (
          <PortfolioPreviewImage
            src={image.src}
            alt={image.alt}
            variant="list"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        ) : null}
        <div className="p-4 sm:p-5 md:p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">{study.category[0]}</p>
          <h2 className="mt-2 text-lg font-bold text-foreground sm:text-xl">{study.title}</h2>
          <p className="mt-1 text-xs text-muted">{study.clientType}</p>
          <p className="mt-3 text-sm font-medium text-brand">{study.heroMetric}</p>
          <TechStackPills items={study.techStack} limit={5} className="mt-4" />
          <span className="text-link mt-4 inline-flex items-center gap-1 text-sm text-muted group-hover:gap-2">
            Read case study
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        </div>
      </article>
    </Link>
  );
});
