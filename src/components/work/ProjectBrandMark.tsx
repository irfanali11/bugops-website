import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const marks: Record<string, ReactNode> = {
  "smartsupport-ai": (
    <svg viewBox="0 0 168 32" fill="none" aria-hidden>
      <path
        d="M6 10a4 4 0 0 1 4-4h5.5a3.5 3.5 0 0 1 0 7H10v3h5.5a3.5 3.5 0 0 1 0 7H10a4 4 0 0 1-4-4V10Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M10 13h5.5M10 19h5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <text x="34" y="22" fill="currentColor" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="15" fontWeight="600" letterSpacing="-0.02em">
        SmartSupport
      </text>
    </svg>
  ),
  "zenith-ai": (
    <svg viewBox="0 0 148 32" fill="none" aria-hidden>
      <path d="M4 24 14 6l10 18" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8.5 18h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <text x="32" y="22" fill="currentColor" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="14" fontWeight="700" letterSpacing="0.08em">
        ZENITH AI
      </text>
    </svg>
  ),
  "nexusai-business-suite": (
    <svg viewBox="0 0 188 32" fill="none" aria-hidden>
      <circle cx="11" cy="16" r="3" fill="currentColor" />
      <circle cx="22" cy="8" r="2.2" fill="currentColor" opacity="0.55" />
      <circle cx="22" cy="24" r="2.2" fill="currentColor" opacity="0.55" />
      <path d="M14 16h5M11 14.5 20 9M11 17.5 20 23" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <text x="32" y="22" fill="currentColor" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="15" fontWeight="600" letterSpacing="-0.02em">
        Nexus<tspan fontWeight="700">AI</tspan>
      </text>
    </svg>
  ),
  "smarttrip-ai": (
    <svg viewBox="0 0 136 32" fill="none" aria-hidden>
      <path d="M5 22c4-8 8-12 12-12s8 4 12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="17" cy="10" r="2.5" fill="currentColor" />
      <text x="32" y="22" fill="currentColor" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="15" fontWeight="600" letterSpacing="-0.02em">
        SmartTrip
      </text>
    </svg>
  ),
  "turkey-ai-itinerary-planner": (
    <svg viewBox="0 0 196 32" fill="none" aria-hidden>
      <rect x="4" y="8" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 14h10M8 18h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <text x="30" y="22" fill="currentColor" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="14" fontWeight="600" letterSpacing="-0.02em">
        Turkey AI Planner
      </text>
    </svg>
  ),
  collaborax: (
    <svg viewBox="0 0 152 32" fill="none" aria-hidden>
      <circle cx="10" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="22" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13.5 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <text x="32" y="22" fill="currentColor" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="15" fontWeight="600" letterSpacing="-0.02em">
        Collabora<tspan fontWeight="800">X</tspan>
      </text>
    </svg>
  ),
  "trendforce-consulting": (
    <svg viewBox="0 0 176 32" fill="none" aria-hidden>
      <path d="M4 24V12M4 24h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 20l4-5 4 3 5-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <text x="32" y="22" fill="currentColor" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="14" fontWeight="600" letterSpacing="-0.02em">
        TrendForce
      </text>
    </svg>
  ),
};

export function ProjectBrandMark({
  slug,
  title,
  className,
}: {
  slug: string;
  title: string;
  className?: string;
}) {
  const mark = marks[slug];

  if (!mark) {
    return (
      <span className={cn("font-semibold tracking-tight text-foreground", className)}>{title}</span>
    );
  }

  return (
    <span className={cn("inline-flex shrink-0 text-foreground", className)} role="img" aria-label={title}>
      {mark}
    </span>
  );
}
