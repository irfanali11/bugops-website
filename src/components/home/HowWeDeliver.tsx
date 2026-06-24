import { howWeDeliverCards, howWeDeliverSection } from "@/lib/how-we-deliver-data";
import { HowWeDeliverCard } from "@/components/services/HowWeDeliverCard";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";

export function HowWeDeliver() {
  return (
    <section className="section-band-base py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionAnchor id="how-we-deliver" />
          <SectionHeader title={howWeDeliverSection.title} description={howWeDeliverSection.subtitle} />
        </FadeIn>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
          {howWeDeliverCards.map((card) => (
            <StaggerItem key={card.id}>
              <HowWeDeliverCard card={card} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
