import { TechLogo } from "@/components/ui/TechLogo";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { techCategoryLabels, techStack, techStackIntro } from "@/lib/tech-stack-data";

export function TechnologyStack() {
  return (
    <section id="technology" className="section-band-muted py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <p className="section-label">How we build</p>
          <h2 className="section-heading mt-3">Technology stack</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{techStackIntro}</p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" stagger={0.03}>
          {techStack.map((tech) => (
            <StaggerItem key={tech.id}>
              <article className="tech-stack-card group h-full">
                <div className="flex items-start justify-between gap-3">
                  <div className="tech-stack-logo-wrap">
                    <TechLogo iconSlug={tech.iconSlug} title={tech.name} className="tech-stack-logo" />
                  </div>
                  <span className="tech-stack-category">{techCategoryLabels[tech.category]}</span>
                </div>

                <h3 className="mt-5 text-sm font-bold text-foreground">{tech.name}</h3>

                <p className="tech-stack-use-case mt-2 text-sm leading-relaxed text-muted">
                  {tech.useCase}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
