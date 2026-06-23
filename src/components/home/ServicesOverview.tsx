import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { AppLink } from "@/components/layout/NavLink";
import { aiPillar, servicesHub, webDevPillar } from "@/lib/services-data";
import { getServiceCardImage, getWebDevCardImage } from "@/lib/image-paths";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";

export function ServicesOverview() {
  return (
    <section className="section-band-muted py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <p className="section-label">Capabilities</p>
          <h2 className="section-heading mt-3">Services</h2>
          <p className="type-body mt-4 max-w-2xl text-muted">{servicesHub.subtitle}</p>
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
            <Stagger className="mt-8 grid gap-5 md:grid-cols-3" stagger={0.04}>
              {webDevPillar.tiers.map((tier) => {
                const image = getWebDevCardImage(tier.id);

                return (
                <StaggerItem key={tier.id}>
                  <Link href={`/services/web-development#${tier.id}`} className="group block h-full">
                    <div className="ai-service-card">
                      <div className="service-card-visual px-5 py-5">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          loading="lazy"
                          className="object-cover opacity-45"
                        />
                        <div className="ai-service-card-icon relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-brand-soft/50 bg-surface-elevated/15 backdrop-blur-sm">
                          <ArrowUpRight className="h-4 w-4 text-surface-elevated" />
                        </div>
                        <p className="relative z-10 mt-5 text-sm font-semibold leading-snug text-surface-elevated">
                          {tier.title}
                        </p>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">{tier.tagline}</p>
                        <p className="mt-2 text-sm font-medium leading-snug text-foreground/90">{tier.outcomeHeadline}</p>
                        <ul className="mt-4 space-y-2">
                          {tier.includes.slice(0, 3).map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted">
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand opacity-80 transition-all duration-[250ms] ease-out group-hover:gap-2 group-hover:opacity-100">
                          Explore
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-20">
            <h3 className="text-xl font-bold tracking-tight text-foreground">{aiPillar.headline}</h3>
            <p className="mt-2 text-base font-medium text-foreground/90">{aiPillar.outcomeHeadline}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{aiPillar.body}</p>
            <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.04}>
              {aiPillar.services.map((service) => {
                const image = getServiceCardImage(service.slug);

                return (
                <StaggerItem key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="group block h-full">
                    <div className="ai-service-card">
                      <div className="service-card-visual px-5 py-5">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 640px) 50vw, 25vw"
                          loading="lazy"
                          className="object-cover opacity-45"
                        />
                        <div className="ai-service-card-icon relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-brand-soft/50 bg-surface-elevated/15 backdrop-blur-sm">
                          <ArrowUpRight className="h-4 w-4 text-surface-elevated" />
                        </div>
                        <p className="relative z-10 mt-5 text-sm font-semibold leading-snug text-surface-elevated">
                          {service.title}
                        </p>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-brand">{service.tagline}</p>
                        <p className="mt-2 text-sm font-medium leading-snug text-foreground/90">{service.outcomeHeadline}</p>
                        <ul className="mt-4 space-y-2">
                          {service.capabilities.slice(0, 3).map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted">
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand opacity-80 transition-all duration-[250ms] ease-out group-hover:gap-2 group-hover:opacity-100">
                          Explore
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
