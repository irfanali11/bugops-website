import { faqSections } from "@/lib/site-config";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { FaqAccordion } from "@/components/home/FaqAccordion";

export function FAQ() {
  return (
    <section className="section-band-muted border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn>
          <p className="section-label justify-center">FAQ</p>
          <h2 className="section-heading mt-3 text-center">Frequently asked questions</h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-muted">
            Common questions about our web development tiers, AI solutions, and how we work with your team.
          </p>
        </FadeIn>

        <Stagger className="mt-12 space-y-12" stagger={0.04}>
          {faqSections.map((section) => (
            <StaggerItem key={section.title}>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">{section.title}</h3>
                <FaqAccordion items={section.items} className="mt-4" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
