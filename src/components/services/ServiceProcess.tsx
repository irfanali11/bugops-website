import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { engagementModels, howWeWork } from "@/lib/site-config";

export function ServiceProcess({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section className={compact ? "py-12 md:py-16" : "section-band-base py-20 md:py-28"}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <p className="section-label">Process</p>
          <h2 className="section-heading mt-3 max-w-xl">Discovery before dates. Scope before quotes.</h2>
          {!compact && (
            <p className="type-body mt-4 max-w-2xl text-muted">{engagementModels.intro}</p>
          )}
        </FadeIn>

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.04}>
          {howWeWork.map((step) => (
            <StaggerItem key={step.step}>
              <article className="surface-card h-full p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-light bg-surface-elevated text-xs font-bold text-brand">
                  {step.step}
                </span>
                <h3 className="mt-4 font-bold text-foreground">{step.title}</h3>
                <p className="mt-1 text-xs font-medium text-brand">{step.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {compact && (
          <FadeIn delay={0.08}>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {engagementModels.models.map((model) => (
                <div key={model.title} className="rounded-2xl border border-border-light bg-surface-elevated/60 p-5">
                  <h3 className="font-bold text-foreground">{model.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{model.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
