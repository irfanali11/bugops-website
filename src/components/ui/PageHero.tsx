import { cn } from "@/lib/utils";

export function PageHero({
  label,
  title,
  description,
  pills,
  align = "left",
  compact = false,
  children,
}: {
  label?: string;
  title: string;
  description?: string;
  pills?: readonly string[];
  align?: "left" | "center";
  compact?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "hero-mesh relative overflow-hidden",
        compact ? "py-14 md:py-20" : "py-20 md:py-28"
      )}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="hero-mesh-grid" />
        <div className="hero-ambient-core" />
        <div className="hero-mesh-glow hero-mesh-glow-left hero-ambient-enhanced absolute -left-20 top-0 h-[360px] w-[360px] rounded-full blur-3xl" />
        <div className="hero-mesh-glow hero-mesh-glow-right hero-glow-secondary hero-ambient-enhanced absolute -right-16 top-1/4 h-[300px] w-[300px] rounded-full blur-3xl" />
        {pills && pills.length > 0 && (
          <div className="hidden lg:block">
            {pills.map((pill, index) => (
              <span
                key={pill}
                className="glass-pill hero-float-pill absolute font-semibold text-foreground/85"
                style={{
                  animationDelay: `${index * 0.35}s`,
                  top: index === 0 ? "20%" : index === 1 ? "45%" : "65%",
                  right: index === 0 ? "10%" : index === 1 ? "24%" : "12%",
                }}
              >
                {pill}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          {label && (
            <span className="page-hero-enter page-hero-enter-mask hero-badge inline-flex items-center rounded-full border border-border-light/80 bg-surface-elevated/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand backdrop-blur-sm">
              {label}
            </span>
          )}
          <h1
            className={cn(
              "page-hero-enter page-hero-enter-mask page-hero-enter-delay-1 display-heading text-foreground",
              compact ? "text-3xl md:text-4xl lg:text-[2.75rem]" : "hero-headline",
              label ? (compact ? "mt-6" : "mt-8") : compact ? "mt-0" : "mt-0"
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "page-hero-enter page-hero-enter-mask page-hero-enter-delay-2 type-body-lg text-muted",
                compact ? "mt-5 max-w-2xl" : "mt-7 max-w-2xl",
                align === "center" && "mx-auto"
              )}
            >
              {description}
            </p>
          )}
          {children && (
            <div
              className={cn(
                "page-hero-enter page-hero-enter-delay-3 mt-8",
                align === "center" && "flex flex-col items-center sm:items-center"
              )}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
