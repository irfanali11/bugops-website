import { TechLogo } from "@/components/ui/TechLogo";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectMarquee } from "@/components/home/ProjectMarquee";
import { getProjectMarqueeItems } from "@/lib/project-marquee-data";
import { technologyPartners } from "@/lib/trust-partners-data";

export function TrustPartners() {
  const projectItems = getProjectMarqueeItems();

  return (
    <section className="trust-partners-section section-band-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="section-label justify-center">Social proof</p>
            <h2 className="section-heading mt-3">Shipped in production</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Web apps, AI platforms, and enterprise systems from our portfolio — the same projects featured in our work section.
            </p>
          </div>

          <ProjectMarquee items={projectItems} />
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="mt-16 border-t border-border-light pt-16 text-center md:mt-20 md:pt-20">
            <p className="section-label justify-center">Platforms</p>
            <h2 className="section-heading mt-3">Partnered with</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Production AI and cloud platforms we integrate with — using official tooling, APIs, and deployment patterns.
            </p>

            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-12 md:gap-x-14">
              {technologyPartners.map((partner) => (
                <div key={partner.slug} className="partner-logo-item" title={partner.label}>
                  <TechLogo iconSlug={partner.slug} title={partner.label} className="h-9 w-9 sm:h-10 sm:w-10" />
                  <span className="partner-logo-label">{partner.label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
