import { NavLink } from "@/components/layout/NavLink";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/site-config";
import { defaultIndustryTheme, industryThemes } from "@/lib/industry-themes";
import { getIndustryCardImage } from "@/lib/image-paths";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";

export function Industries() {
  return (
    <section className="section-band-base relative py-16 sm:py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.06),transparent_65%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionAnchor id="industries" />
          <p className="section-label">Sectors we serve</p>
          <h2 className="section-heading mt-3 max-w-xl">Industries</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            Domain-aware web development and AI engineering — built around your compliance, data, and user workflows.
          </p>
        </FadeIn>

        <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {industries.map((item, index) => {
            const theme = industryThemes[item.title] ?? defaultIndustryTheme;
            const Icon = theme.Icon;
            const image = getIndustryCardImage(item.title);

            return (
              <StaggerItem key={item.title}>
                <NavLink href="/#contact" className="group block h-full">
                  <article
                    className="industry-card flex h-full flex-col p-0"
                    style={{ ["--industry-accent" as string]: theme.color }}
                  >
                    {image ? (
                      <div className="work-preview relative aspect-[16/10] shrink-0">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading={index < 3 ? "eager" : "lazy"}
                          className="object-cover"
                        />
                      </div>
                    ) : null}
                    <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="industry-icon transition-transform duration-500 group-hover:scale-105"
                        style={{
                          color: theme.color,
                          background: theme.background,
                          borderColor: theme.border,
                          boxShadow: `0 4px 14px ${theme.color}22`,
                        }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.85} aria-hidden />
                      </div>
                      <span className="font-mono text-xs text-faint">{String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <span className="mt-6 inline-flex w-fit rounded-full border border-border-light bg-surface-elevated/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
                      Industry
                    </span>

                    <h3 className="mt-4 text-foreground">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.body}</p>

                    <div className="mt-6 flex items-center justify-between border-t border-border-light pt-5">
                      <span className="text-xs font-medium text-faint">Web & AI solutions</span>
                      <span className="industry-card-action flex h-8 w-8 items-center justify-center rounded-full border border-border-light bg-surface-elevated">
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                    </div>
                  </article>
                </NavLink>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
