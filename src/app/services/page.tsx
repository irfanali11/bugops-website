import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { NavLink } from "@/components/layout/NavLink";
import { Button } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { ServiceCategoryBlock, ServiceExploreCard } from "@/components/services/ServiceExploreCard";
import { HowWeDeliverCard } from "@/components/services/HowWeDeliverCard";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { MidPageCta } from "@/components/home/MidPageCta";
import { howWeDeliverCards } from "@/lib/how-we-deliver-data";
import { aiPillar, servicesHub, webDevPillar } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description: servicesHub.subtitle,
};

const servicesPills = ["Web platforms", "AI systems", "Delivery support"] as const;

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        label={servicesHub.label}
        title={servicesHub.title}
        description={servicesHub.subtitle}
        pills={servicesPills}
      >
        <Button href="/book" size="lg" className="btn-emphasis">
          Book discovery
        </Button>
      </PageHero>

      <section className="section-band-muted py-20 md:py-28">
        <div className="mx-auto max-w-6xl space-y-20 px-6 lg:px-8">
          <ServiceCategoryBlock
            label="Build"
            headline={webDevPillar.headline}
            outcomeHeadline={webDevPillar.outcomeHeadline}
            body={webDevPillar.body}
          >
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
              {webDevPillar.tiers.map((tier) => (
                <StaggerItem key={tier.id}>
                  <ServiceExploreCard
                    href={`/services/web-development#${tier.id}`}
                    title={tier.title}
                    promise={tier.outcomeHeadline}
                    bullets={tier.includes}
                  />
                </StaggerItem>
              ))}
            </Stagger>
            <Link
              href="/services/web-development"
              className="text-link mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand"
            >
              Full web development overview
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </ServiceCategoryBlock>

          <ServiceCategoryBlock
            label="AI"
            headline={aiPillar.headline}
            outcomeHeadline={aiPillar.outcomeHeadline}
            body={aiPillar.body}
          >
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.04}>
              {aiPillar.services.map((service) => (
                <StaggerItem key={service.slug}>
                  <ServiceExploreCard
                    href={`/services/${service.slug}`}
                    title={service.title}
                    promise={service.outcomeHeadline}
                    bullets={service.capabilities}
                  />
                </StaggerItem>
              ))}
            </Stagger>
          </ServiceCategoryBlock>

          <ServiceCategoryBlock
            label="Delivery"
            headline="How we deliver"
            body="Cross-cutting capabilities that sit alongside every web or AI build — from discovery through launch and cleanup."
          >
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
              {howWeDeliverCards.map((card) => (
                <StaggerItem key={card.id}>
                  <HowWeDeliverCard card={card} showIcon={false} includeLimit={3} />
                </StaggerItem>
              ))}
            </Stagger>
            <NavLink
              href="/#how-we-deliver"
              className="text-link mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand"
            >
              See delivery on homepage
              <ArrowUpRight className="h-4 w-4" />
            </NavLink>
          </ServiceCategoryBlock>
        </div>
      </section>

      <ServiceProcess />
      <MidPageCta />
    </div>
  );
}
