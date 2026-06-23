import { Hero } from "@/components/home/Hero";
import { TrustPartners } from "@/components/home/TrustPartners";
import { Stats } from "@/components/home/Stats";
import { Industries } from "@/components/home/Industries";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { MidPageCta } from "@/components/home/MidPageCta";
import { HowWeWork } from "@/components/home/HowWeWork";
import { HowWeDeliver } from "@/components/home/HowWeDeliver";
import { TechnologyStack } from "@/components/home/TechnologyStack";
import { CaseStudiesShowcase } from "@/components/home/CaseStudiesShowcase";
import { MissionVision } from "@/components/home/MissionVision";
import { Team } from "@/components/home/Team";
import { FAQ } from "@/components/home/FAQ";
import { Contact } from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustPartners />
      <Stats />
      <Industries />
      <ServicesOverview />
      <MidPageCta />
      <HowWeWork />
      <HowWeDeliver />
      <TechnologyStack />
      <CaseStudiesShowcase />
      <MissionVision />
      <Team />
      <FAQ />
      <Contact />
    </>
  );
}
