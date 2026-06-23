import { X, Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  demoVsProductionComparison,
  demoVsProductionSection,
} from "@/lib/demo-vs-production-data";

export function DemoVsProduction() {
  const { demo, production } = demoVsProductionComparison;

  return (
    <section className="section-band-muted py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <p className="section-label">Production-grade AI</p>
          <h2 className="section-heading mt-3">{demoVsProductionSection.title}</h2>
          <p className="type-body mt-4 max-w-2xl text-muted">{demoVsProductionSection.subtitle}</p>
        </FadeIn>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <FadeIn delay={0.04}>
            <article className="surface-card h-full p-7 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{demo.label}</p>
              <p className="mt-2 text-lg font-bold text-foreground">{demo.tagline}</p>
              <ul className="mt-6 space-y-3">
                {demo.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-muted">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-faint" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>

          <FadeIn delay={0.08}>
            <article className="surface-card h-full border-brand/20 p-7 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">{production.label}</p>
              <p className="mt-2 text-lg font-bold text-foreground">{production.tagline}</p>
              <ul className="mt-6 space-y-3">
                {production.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
