import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { SectionPlaceholder } from "@/components/ui/SectionPlaceholder";

/* Lazy sections above the fold path — Industries stays eager so #industries mounts on first paint */
const TrustPartners = dynamic(
  () => import("@/components/home/TrustPartners").then((m) => ({ default: m.TrustPartners })),
  { loading: () => <SectionPlaceholder /> }
);

const Stats = dynamic(
  () => import("@/components/home/Stats").then((m) => ({ default: m.Stats })),
  { loading: () => <SectionPlaceholder /> }
);

const ServicesOverview = dynamic(
  () => import("@/components/home/ServicesOverview").then((m) => ({ default: m.ServicesOverview })),
  { loading: () => <SectionPlaceholder /> }
);

const MidPageCta = dynamic(
  () => import("@/components/home/MidPageCta").then((m) => ({ default: m.MidPageCta })),
  { loading: () => <SectionPlaceholder /> }
);

const AiPipelineDemo = dynamic(
  () => import("@/components/home/AiPipelineDemo").then((m) => ({ default: m.AiPipelineDemo })),
  { loading: () => <SectionPlaceholder /> }
);

const HowWeWork = dynamic(
  () => import("@/components/home/HowWeWork").then((m) => ({ default: m.HowWeWork })),
  { loading: () => <SectionPlaceholder /> }
);

const HowWeDeliver = dynamic(
  () => import("@/components/home/HowWeDeliver").then((m) => ({ default: m.HowWeDeliver })),
  { loading: () => <SectionPlaceholder /> }
);

const TechnologyStack = dynamic(
  () => import("@/components/home/TechnologyStack").then((m) => ({ default: m.TechnologyStack })),
  { loading: () => <SectionPlaceholder /> }
);

const CaseStudiesShowcase = dynamic(
  () => import("@/components/home/CaseStudiesShowcase").then((m) => ({ default: m.CaseStudiesShowcase })),
  { loading: () => <SectionPlaceholder /> }
);

const MissionVision = dynamic(
  () => import("@/components/home/MissionVision").then((m) => ({ default: m.MissionVision })),
  { loading: () => <SectionPlaceholder /> }
);

const Team = dynamic(
  () => import("@/components/home/Team").then((m) => ({ default: m.Team })),
  { loading: () => <SectionPlaceholder /> }
);

const FAQ = dynamic(
  () => import("@/components/home/FAQ").then((m) => ({ default: m.FAQ })),
  { loading: () => <SectionPlaceholder /> }
);

const Contact = dynamic(
  () => import("@/components/home/Contact").then((m) => ({ default: m.Contact })),
  { loading: () => <SectionPlaceholder /> }
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustPartners />
      <Stats />
      <Industries />
      <ServicesOverview />
      <MidPageCta />
      <AiPipelineDemo />
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
