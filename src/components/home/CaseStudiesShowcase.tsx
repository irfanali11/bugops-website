import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedCaseStudies } from "@/lib/case-studies-data";
import { getPortfolioCardImage } from "@/lib/image-paths";
import { TechStackPills } from "@/components/work/TechStackPills";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";

export function CaseStudiesShowcase() {
  const studies = getFeaturedCaseStudies();

  return (
    <section id="work" className="section-band-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Portfolio</p>
              <h2 className="section-heading mt-3">Our work</h2>
            </div>
            <Link
              href="/work"
              className="text-link inline-flex items-center gap-1 text-sm font-medium text-muted hover:gap-2"
            >
              View all projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <Stagger className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
          {studies.map((study) => {
            const image = getPortfolioCardImage(study.slug);

            return (
            <StaggerItem key={study.slug}>
              <Link href={`/work/${study.slug}`} className="group block">
                <article className="surface-card overflow-hidden p-0">
                  <div className="work-preview aspect-[16/10]">
                    {image ? (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading="lazy"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                      {study.category[0]}
                    </p>
                    <h3 className="mt-3 text-lg font-bold tracking-tight text-foreground">{study.title}</h3>
                    <p className="mt-3 text-sm font-semibold text-brand">{study.heroMetric}</p>
                    <TechStackPills items={study.techStack} limit={4} className="mt-4" />
                  </div>
                </article>
              </Link>
            </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
