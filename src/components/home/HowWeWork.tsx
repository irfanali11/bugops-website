import { howWeWork } from "@/lib/site-config";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";

export function HowWeWork() {
  return (
    <section className="section-band-base py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionAnchor id="process" />
          <p className="section-label">Process</p>
          <h2 className="section-heading mt-2 max-w-lg">Discovery before dates. Scope before quotes.</h2>
        </FadeIn>

        <div className="relative mt-14 hidden md:block">
          <div className="timeline-line absolute left-0 right-0 top-5 h-px opacity-40" />
          <Stagger className="grid grid-cols-2 gap-6 lg:grid-cols-4" stagger={0.04}>
            {howWeWork.map((step) => (
              <StaggerItem key={step.step}>
                <div className="relative pt-10">
                  <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-elevated text-xs font-bold text-brand shadow-sm">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-xs font-medium text-brand">{step.subtitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Stagger className="mt-10 space-y-4 md:hidden">
          {howWeWork.map((step) => (
            <StaggerItem key={step.step}>
              <div className="surface-card flex gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-muted text-xs font-bold text-brand">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
