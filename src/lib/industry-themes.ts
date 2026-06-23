import type { ComponentType, SVGProps } from "react";
import {
  Building2,
  Clapperboard,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers,
  Plane,
  Scale,
  Shield,
  ShoppingBag,
  Zap,
} from "lucide-react";

export interface IndustryTheme {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  background: string;
  border: string;
}

const cyanTheme = {
  color: "#06B6D4",
  background: "linear-gradient(145deg, rgba(6, 182, 212, 0.16), rgba(6, 182, 212, 0.06))",
  border: "rgba(6, 182, 212, 0.35)",
};

const purpleTheme = {
  color: "#8B5CF6",
  background: "linear-gradient(145deg, rgba(139, 92, 246, 0.16), rgba(139, 92, 246, 0.06))",
  border: "rgba(139, 92, 246, 0.35)",
};

export const industryThemes: Record<string, IndustryTheme> = {
  EdTech: { Icon: GraduationCap, ...cyanTheme },
  HealthTech: { Icon: HeartPulse, ...purpleTheme },
  "FinTech & banking": { Icon: Landmark, ...cyanTheme },
  "Retail & e-commerce": { Icon: ShoppingBag, ...purpleTheme },
  "B2B SaaS": { Icon: Layers, ...cyanTheme },
  "Real estate": { Icon: Building2, ...purpleTheme },
  "Legal & compliance": { Icon: Scale, ...cyanTheme },
  Manufacturing: { Icon: Factory, ...purpleTheme },
  "Hospitality & travel": { Icon: Plane, ...cyanTheme },
  "Media & entertainment": { Icon: Clapperboard, ...purpleTheme },
  "Government & public sector": { Icon: Shield, ...cyanTheme },
  "Energy & utilities": { Icon: Zap, ...purpleTheme },
};

export const defaultIndustryTheme: IndustryTheme = industryThemes["B2B SaaS"];
