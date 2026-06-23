import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { caseStudies } from "@/lib/case-studies-data";
import { getPortfolioCardImage } from "@/lib/image-paths";
import { TechStackPills } from "@/components/work/TechStackPills";

export const metadata: Metadata = {
  title: "Work",
  description: "Web and AI systems we have shipped for clients.",
};

export default function WorkPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          label="Portfolio"
          title="Projects we scoped, built, and shipped"
          description="Production web platforms and AI systems — with outcomes we can point to."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2" stagger={0.12}>
          {caseStudies.map((study) => {
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
                          sizes="(max-width: 640px) 100vw, 50vw"
                          loading="lazy"
                          className="object-cover"
                        />
                      ) : null}
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand">{study.category[0]}</p>
                      <h2 className="mt-2 text-xl font-bold text-foreground">{study.title}</h2>
                      <p className="mt-1 text-xs text-muted">{study.clientType}</p>
                      <p className="mt-3 text-sm font-medium text-brand">{study.heroMetric}</p>
                      <TechStackPills items={study.techStack} limit={5} className="mt-4" />
                      <span className="text-link mt-4 inline-flex items-center gap-1 text-sm text-muted group-hover:gap-2">
                        Read case study
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </div>
  );
}
