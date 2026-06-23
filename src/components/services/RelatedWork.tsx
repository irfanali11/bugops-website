import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies-data";
import { TechStackPills } from "@/components/work/TechStackPills";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";

export function RelatedWork({
  studies,
  title = "Related work",
  subtitle = "Portfolio projects that reflect this kind of build — not generic client claims.",
}: {
  studies: CaseStudy[];
  title?: string;
  subtitle?: string;
}) {
  if (studies.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <p className="section-label">Portfolio</p>
          <h2 className="section-heading mt-3">{title}</h2>
          <p className="type-body mt-4 max-w-2xl text-muted">{subtitle}</p>
        </FadeIn>

        <Stagger className="mt-10 grid gap-5 md:grid-cols-2" stagger={0.04}>
          {studies.map((study) => (
            <StaggerItem key={study.slug}>
              <Link href={`/work/${study.slug}`} className="group block h-full">
                <article className="surface-card flex h-full flex-col p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                    {study.showcaseLabel}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-foreground">{study.title}</h3>
                  <p className="mt-2 text-sm text-muted">{study.clientType}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{study.executiveSummary}</p>
                  <p className="mt-4 text-sm font-medium text-brand">{study.heroMetric}</p>
                  <TechStackPills items={study.techStack} limit={4} className="mt-4" />
                  <span className="text-link mt-5 inline-flex items-center gap-1 text-sm font-medium text-muted group-hover:gap-2">
                    View project
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
