import { companyStats } from "@/lib/site-config";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { StatCard } from "@/components/home/StatCard";

export function Stats() {
  return (
    <section className="section-band-cream pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <p className="section-label mb-10 text-center lg:mb-12">By the numbers</p>
        </FadeIn>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.04}>
          {companyStats.map((stat) => (
            <StaggerItem key={stat.title}>
              <StatCard
                value={stat.value}
                suffix={stat.suffix}
                title={stat.title}
                description={stat.description}
                accent={stat.accent === "warm" ? "warm" : "bronze"}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
