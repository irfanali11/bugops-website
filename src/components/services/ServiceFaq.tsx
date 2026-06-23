import { FaqAccordion } from "@/components/home/FaqAccordion";
import { FadeIn } from "@/components/ui/FadeIn";

export function ServiceFaq({
  items,
  title = "Common questions",
}: {
  items: readonly { q: string; a: string }[];
  title?: string;
}) {
  return (
    <section className="section-band-muted py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn>
          <p className="section-label">FAQ</p>
          <h2 className="section-heading mt-3">{title}</h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <FaqAccordion items={items} className="mt-10" />
        </FadeIn>
      </div>
    </section>
  );
}
