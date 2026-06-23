import { team, teamIntro } from "@/lib/site-config";
import { FounderAvatar } from "@/components/ui/FounderAvatar";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";

export function Team() {
  return (
    <section className="section-band-muted border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="section-label justify-center">People</p>
            <h2 className="section-heading mt-3">Leadership</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted">{teamIntro}</p>
          </div>
        </FadeIn>

        <Stagger className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2" stagger={0.04}>
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <article className="founder-card surface-card flex flex-col items-center p-8 text-center">
                <FounderAvatar
                  name={member.name}
                  avatar={member.avatar}
                  initials={member.initials}
                />
                <p className="mt-6 text-lg font-bold tracking-tight text-foreground">{member.name}</p>
                <p className="mt-1 text-sm font-medium text-brand">{member.role}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
