import { missionVision } from "@/lib/site-config";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";

export function MissionVision() {
  return (
    <>
      <section className="cta-band py-20 md:py-28">
        <FadeIn>
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="display-heading text-3xl text-foreground md:text-4xl">
              {missionVision.banner.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              {missionVision.banner.subtitle}
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="section-band-muted py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionAnchor id="about" />
          <Stagger className="grid gap-8 md:grid-cols-2" stagger={0.04}>
            <StaggerItem>
              <div className="surface-card h-full p-10 md:p-12">
                <h3 className="display-heading text-2xl text-foreground md:text-3xl">{missionVision.mission.title}</h3>
                <p className="mt-5 leading-relaxed text-muted">{missionVision.mission.body}</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="surface-card h-full p-10 md:p-12">
                <h3 className="display-heading text-2xl text-foreground md:text-3xl">{missionVision.vision.title}</h3>
                <p className="mt-5 leading-relaxed text-muted">{missionVision.vision.body}</p>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>
    </>
  );
}
