import { ArrowUpRight } from "lucide-react";
import { AppLink } from "@/components/layout/NavLink";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceVisualCard } from "@/components/services/ServiceVisualCard";
import { aiPillar, servicesHub, webDevPillar } from "@/lib/services-data";
import { getServiceCardImage, getWebDevCardImage } from "@/lib/image-paths";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";

export function ServicesOverview() {
  return (
    <section className="section-band-muted py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Capabilities"
            title="Services"
            description={servicesHub.subtitle}
          />
          <AppLink
            href="/services"
            className="text-link mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand"
          >
            View all services
            <ArrowUpRight className="h-4 w-4" />
          </AppLink>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-16">
            <h3 className="text-xl font-bold tracking-tight text-foreground">{webDevPillar.headline}</h3>
            <p className="mt-2 text-base font-medium text-foreground/90">{webDevPillar.outcomeHeadline}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{webDevPillar.body}</p>
            <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {webDevPillar.tiers.map((tier) => (
                <StaggerItem key={tier.id}>
                  <ServiceVisualCard
                    href={`/services/web-development#${tier.id}`}
                    image={getWebDevCardImage(tier.id)}
                    title={tier.title}
                    tagline={tier.tagline}
                    outcomeHeadline={tier.outcomeHeadline}
                    bullets={tier.includes}
                  />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-20">
            <h3 className="text-xl font-bold tracking-tight text-foreground">{aiPillar.headline}</h3>
            <p className="mt-2 text-base font-medium text-foreground/90">{aiPillar.outcomeHeadline}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{aiPillar.body}</p>
            <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {aiPillar.services.map((service) => (
                <StaggerItem key={service.slug}>
                  <ServiceVisualCard
                    href={`/services/${service.slug}`}
                    image={getServiceCardImage(service.slug)}
                    title={service.title}
                    tagline={service.tagline}
                    outcomeHeadline={service.outcomeHeadline}
                    bullets={service.capabilities}
                    imageSizes="(max-width: 640px) 50vw, 25vw"
                  />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
