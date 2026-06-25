import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { PortfolioPreviewImage } from "@/components/work/PortfolioPreviewImage";
import { TechnicalTabs } from "@/components/work/TechnicalTabs";
import {
  caseStudies,
  getCaseStudy,
  getRelatedCaseStudies,
} from "@/lib/case-studies-data";
import { getPortfolioCardImage, getPortfolioGalleryImages } from "@/lib/image-paths";
import { TechStackPills } from "@/components/work/TechStackPills";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Study Not Found" };
  return { title: study.title, description: study.executiveSummary };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const related = getRelatedCaseStudies(
    study.slug,
    study.category[0]?.includes("AI") ? "AI" : "Web"
  );
  const preview = getPortfolioCardImage(study.slug);
  const gallery = getPortfolioGalleryImages(study.slug);

  return (
    <div>
      <FadeIn>
        <section className="border-b border-border bg-surface-muted py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {study.category.map((cat) => (
                <span
                  key={cat}
                  className="rounded-md bg-surface-elevated px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-brand shadow-sm"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="mt-6 text-3xl font-bold text-foreground md:text-4xl">{study.title}</h1>
            <p className="mt-2 text-muted">{study.clientType}</p>
            <p className="mt-6 text-xl font-semibold text-brand">{study.heroMetric}</p>
            <TechStackPills items={study.techStack} className="mt-6" />
          </div>

          {preview && (
            <div className="mx-auto mt-10 max-w-5xl space-y-6 px-6 lg:px-8">
              <div className="surface-card overflow-hidden">
                <PortfolioPreviewImage
                  src={preview.src}
                  alt={preview.alt}
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
              {gallery.map((image) => (
                <div key={image.src} className="surface-card overflow-hidden">
                  <PortfolioPreviewImage
                    src={image.src}
                    alt={image.alt}
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      </FadeIn>

      <FadeIn delay={0.05}>
        <section className="py-12">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">Summary</h2>
            <p className="mt-4 leading-relaxed text-muted">{study.executiveSummary}</p>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.05}>
        <section className="bg-surface-muted py-12">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">The problem</h2>
            <p className="mt-4 leading-relaxed text-muted">{study.challenge}</p>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.05}>
        <section className="py-12">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">How we built it</h2>
            <TechnicalTabs webLayer={study.webLayer} aiLayer={study.aiLayer} dataLayer={study.dataLayer} />
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.05}>
        <section className="bg-surface-muted py-12">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">Results</h2>
            <ul className="mt-4 space-y-3">
              {study.impact.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </FadeIn>

      {related.length > 0 && (
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-xl font-bold text-foreground">Related work</h2>
            </FadeIn>
            <Stagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
              {related.map((r) => (
                <StaggerItem key={r.slug}>
                  <Link href={`/work/${r.slug}`} className="group block">
                    <div className="surface-card p-6">
                      <p className="font-semibold text-foreground">{r.title}</p>
                      <p className="mt-2 text-sm font-medium text-brand">{r.heroMetric}</p>
                      <TechStackPills items={r.techStack} limit={3} className="mt-3" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <FadeIn>
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
            <p className="text-muted">Building something similar?</p>
            <Button href="/book" className="mt-4">
              Start a project
            </Button>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
