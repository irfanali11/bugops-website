import { howWeDeliverCards, howWeDeliverSection } from "@/lib/how-we-deliver-data";
import { HowWeDeliverCard } from "@/components/services/HowWeDeliverCard";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";

export function HowWeDeliver() {
  return (
    <section className="section-band-base py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionAnchor id="how-we-deliver" />
          <h2 className="section-heading">{howWeDeliverSection.title}</h2>
          <p className="type-body mt-4 max-w-2xl text-muted">{howWeDeliverSection.subtitle}</p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
          {howWeDeliverCards.map((card) => (
            <StaggerItem key={card.id}>
              <HowWeDeliverCard card={card} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
