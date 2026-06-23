import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { DemoVsProduction } from "@/components/services/DemoVsProduction";
import { RelatedWork } from "@/components/services/RelatedWork";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { MidPageCta } from "@/components/home/MidPageCta";
import { getRelatedWorkBySlugs } from "@/lib/case-studies-data";
import { getAIServiceFaq } from "@/lib/service-faqs";
import { aiPillar, getAIService } from "@/lib/services-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return aiPillar.services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getAIService(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.outcomeHeadline,
  };
}

export default async function AIServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getAIService(slug);
  if (!service) notFound();

  const relatedWork = getRelatedWorkBySlugs(service.relatedWorkSlugs);
  const faqItems = getAIServiceFaq(slug);

  return (
    <div>
      <PageHero
        label="AI Services"
        title={service.outcomeHeadline}
        description={service.body}
        compact
      >
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">{service.title}</p>
        <Button href="/book" size="lg" className="btn-emphasis mt-6">
          Start a project
        </Button>
      </PageHero>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Stagger className="grid gap-6 lg:grid-cols-2" stagger={0.12}>
            <StaggerItem>
              <div className="surface-card h-full p-8">
                <h2 className="display-heading text-xl text-foreground">Where it fits</h2>
                <p className="mt-2 text-sm font-medium text-brand">{service.tagline}</p>
                <ul className="mt-4 space-y-3">
                  {service.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start gap-2 text-sm text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="surface-card h-full p-8">
                <h2 className="display-heading text-xl text-foreground">What we deliver</h2>
                <ul className="mt-4 space-y-3">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2 text-sm text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <DemoVsProduction />
      <RelatedWork studies={relatedWork} />
      <ServiceProcess compact />
      <ServiceFaq items={faqItems} />
      <MidPageCta title="Ready to scope this build?" />
    </div>
  );
}
