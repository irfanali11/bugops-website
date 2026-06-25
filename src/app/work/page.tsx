import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { WorkProjectCard } from "@/components/work/WorkProjectCard";
import { caseStudies } from "@/lib/case-studies-data";
import { getPortfolioCardImage } from "@/lib/image-paths";

export const metadata: Metadata = {
  title: "Work",
  description: "Web and AI systems we have shipped for clients.",
};

export default function WorkPage() {
  return (
    <div className="py-12 sm:py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Portfolio"
          title="Projects we scoped, built, and shipped"
          description="Production web platforms and AI systems — with outcomes we can point to."
        />

        <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6">
          {caseStudies.map((study) => (
            <StaggerItem key={study.slug}>
              <WorkProjectCard study={study} image={getPortfolioCardImage(study.slug)} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
