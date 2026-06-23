import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { RelatedWork } from "@/components/services/RelatedWork";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { MidPageCta } from "@/components/home/MidPageCta";
import { getRelatedWorkBySlugs } from "@/lib/case-studies-data";
import { webDevelopmentFaq } from "@/lib/service-faqs";
import { webDevPillar } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Web Development",
  description: webDevPillar.outcomeHeadline,
};

const webPills = ["Marketing sites", "Portals", "Enterprise scale"] as const;

export default function WebDevelopmentPage() {
  const relatedWork = getRelatedWorkBySlugs(webDevPillar.relatedWorkSlugs);

  return (
    <div>
      <PageHero
        label="Services"
        title={webDevPillar.outcomeHeadline}
        description={webDevPillar.body}
        pills={webPills}
        compact
      >
        <Button href="/book" size="lg" className="btn-emphasis">
          Start a project
        </Button>
      </PageHero>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Stagger className="space-y-8" stagger={0.12}>
            {webDevPillar.tiers.map((tier) => (
              <StaggerItem key={tier.id}>
                <div id={tier.id} className="scroll-mt-24">
                  <article className="surface-card p-8 md:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">{tier.tagline}</p>
                    <h2 className="display-heading mt-3 text-2xl text-foreground md:text-3xl">{tier.title}</h2>
                    <p className="mt-3 text-base font-medium leading-snug text-foreground/90">{tier.outcomeHeadline}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{tier.body}</p>
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {tier.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button href="/book" variant="secondary" className="mt-6">
                      Start a project
                    </Button>
                  </article>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <RelatedWork studies={relatedWork} title="Related web work" />
      <ServiceProcess compact />
      <ServiceFaq items={webDevelopmentFaq} title="Web development FAQ" />
      <MidPageCta title="Ready to scope your platform?" />
    </div>
  );
}
