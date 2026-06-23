import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AppLink } from "@/components/layout/NavLink";
import { trustLine } from "@/lib/site-config";

const heroPills = ["Scoped MVPs", "Production AI", "Integrations"] as const;

export function Hero() {
  return (
    <section className="hero-mesh relative overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="hero-mesh-grid" />
        <div className="hero-ambient-core" />
        <div className="hero-mesh-glow hero-mesh-glow-left hero-ambient-enhanced absolute -left-20 top-0 h-[420px] w-[420px] rounded-full blur-3xl" />
        <div className="hero-mesh-glow hero-mesh-glow-right hero-glow-secondary hero-ambient-enhanced absolute -right-16 top-1/4 h-[360px] w-[360px] rounded-full blur-3xl" />
        <div className="hidden lg:block">
          {heroPills.map((pill, index) => (
            <span
              key={pill}
              className="glass-pill hero-float-pill absolute font-semibold text-foreground/85"
              style={{
                animationDelay: `${index * 0.35}s`,
                top: index === 0 ? "18%" : index === 1 ? "42%" : "62%",
                right: index === 0 ? "8%" : index === 1 ? "22%" : "10%",
              }}
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="motion-enter motion-enter-mask">
            <span className="hero-badge inline-flex items-center rounded-full border border-border-light/80 bg-surface-elevated/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand backdrop-blur-sm">
              Web & AI Engineering
            </span>
          </div>
          <div className="motion-enter motion-enter-mask motion-enter-delay-1">
            <h1 className="hero-headline display-heading mt-8 text-foreground">
              Web and AI built to ship — scoped clearly, delivered on time.
            </h1>
          </div>
          <div className="motion-enter motion-enter-mask motion-enter-delay-2">
            <p className="type-body-lg mt-7 max-w-2xl text-muted">
              BugOps designs and builds production-grade web platforms and AI systems for teams that
              need both — discovery first, fixed scope before build.
            </p>
          </div>
          <div className="motion-enter motion-enter-mask motion-enter-delay-3">
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button href="/book" size="lg" className="btn-emphasis">
                <MessageCircle className="h-5 w-5" />
                Book discovery
              </Button>
              <AppLink
                href="/services"
                className="text-link text-link-interactive inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-brand"
              >
                Browse services
                <ArrowUpRight className="h-4 w-4" />
              </AppLink>
            </div>
            <p className="type-caption mt-4 text-faint">Discovery first · Fixed scope before build</p>
          </div>
          <div className="motion-enter motion-enter-mask motion-enter-delay-4">
            <p className="type-caption mt-10 text-faint">{trustLine}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
