export interface CaseStudy {
  slug: string;
  title: string;
  category: string[];
  clientType: string;
  showcaseLabel: string;
  techStack: string[];
  heroMetric: string;
  featured: boolean;
  publishedDate: string;
  executiveSummary: string;
  challenge: string;
  webLayer: string;
  aiLayer: string;
  dataLayer: string;
  impact: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "smartsupport-ai",
    title: "SmartSupport",
    category: ["AI Engineering", "Web Development"],
    clientType: "B2B SaaS · Customer support",
    showcaseLabel: "Portfolio project",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "LangChain",
      "OpenAI",
      "Pinecone",
      "RAG",
      "Vercel",
    ],
    heroMetric: "68% faster ticket resolution",
    featured: true,
    publishedDate: "2025-03-15",
    executiveSummary:
      "Support team was drowning in triage. We built a dashboard where AI drafts replies from past tickets and docs — agents review before anything goes out.",
    challenge:
      "Every ticket was read, tagged, and routed by hand. Volume kept climbing and senior people spent most of their day sorting, not fixing.",
    webLayer:
      "Internal dashboard for the support team: queue view, suggested reply, one-click edit and send. Human approval on every outbound message.",
    aiLayer:
      "RAG over resolved tickets and product docs. Classifies severity and drafts a grounded reply. Falls back to a person when retrieval is weak.",
    dataLayer:
      "Ticket history feeds back into the vector store as cases close, so retrieval improves without a separate retraining cycle.",
    impact: [
      "68% reduction in average resolution time",
      "Severity mis-tags under 5% of tickets",
      "Senior staff moved off triage to escalations only",
    ],
  },
  {
    slug: "zenith-ai",
    title: "ZENITH AI",
    category: ["AI Engineering", "Web Development"],
    clientType: "B2B SaaS · Support analytics",
    showcaseLabel: "Portfolio project",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "OpenAI",
      "LangChain",
      "Recharts",
      "REST APIs",
      "AI Analytics",
      "Vercel",
    ],
    heroMetric: "78% AI resolution rate",
    featured: true,
    publishedDate: "2025-04-10",
    executiveSummary:
      "Support leadership had no single view of AI performance vs. human agents. We built ZENITH AI — a system analytics dashboard that tracks tickets, resolution rates, CSAT, and AI-vs-human trends in one place.",
    challenge:
      "Ticket volume, AI resolution rate, average handle time, and CSAT lived in different tools. Ops could not answer basic questions without manual exports and spreadsheet work.",
    webLayer:
      "Analytics dashboard with dark sidebar navigation (Dashboard, Inbox, Customer Portal), system analytics KPI cards, ticket volume trend chart, AI vs. human resolution comparison, notifications, and help center access.",
    aiLayer:
      "AI-assisted ticket resolution with performance tracked in real time — resolution rate, average resolution time, and CSAT scored alongside human-handled cases for leadership reporting.",
    dataLayer:
      "Aggregated ticket pipeline metrics with live refresh, historical volume trends, and structured analytics store for AI vs. human resolution breakdowns.",
    impact: [
      "428 total tickets visible in unified system analytics",
      "78% AI resolution rate tracked alongside human performance",
      "4.2h average resolution time and 4.8/5 CSAT on one leadership dashboard",
    ],
  },
  {
    slug: "nexusai-business-suite",
    title: "NexusAI Business Suite",
    category: ["Web Development", "AI Engineering"],
    clientType: "B2B SaaS · SMB operations",
    showcaseLabel: "Portfolio project",
    techStack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Recharts",
      "Node.js",
      "PostgreSQL",
      "Google GenAI SDK",
      "Gemini 3 Flash",
      "Structured Outputs",
      "REST APIs",
      "SPA",
    ],
    heroMetric: "14% customer retention lift in 30 days",
    featured: true,
    publishedDate: "2025-06-01",
    executiveSummary:
      "NexusAI Business Suite is a unified SaaS operations dashboard for SMBs — consolidating sales tracking, customer CRM, and support ticketing into one workspace. Built as a React 19 SPA with TypeScript and Tailwind CSS, it guides owners from a public landing page with live previews and an ROI calculator through secure auth into an operational cockpit with real-time KPIs, Recharts revenue visualization, and Gemini-powered business insights.",
    challenge:
      "SMBs like BloomCraft Commerce ran sales, CRM, and support in disconnected tools — duplicate tickets, cart abandonment with no analytics, and 12+ hours weekly on manual support tagging. A 25% order surge during expansion exposed the gap: no unified view of revenue, customers, or ticket priority.",
    webLayer:
      "Public landing with slate ambient design, live app preview, reviews, FAQs, and interactive ROI calculator (monthly sales + ticket volume → labor savings estimate). Private cockpit: central dashboard with revenue, customer cohort, and ticket KPIs; Recharts revenue chart; CRM table; sales ledger with order pipeline; priority support desk with ticket drawer and status actions.",
    aiLayer:
      "Server-side Gemini 3 Flash via @google/genai — API key bound server-side only. Structured revenue matrices, customer buying intervals, and support descriptions feed a contextual audit loop. Generates operational recommendations: checkout friction alerts, churn-risk ticket categories, and one-click retention outreach drafts.",
    dataLayer:
      "Local state-management repository syncing real-time metrics and historical customer logs across sales, CRM, and support modules — unified data layers replacing disconnected inbox tables and static spreadsheets.",
    impact: [
      "BloomCraft: 14% customer retention boost within 30 days of deployment",
      "$3,200 recovered from abandoned carts via localized shipping incentives",
      "6.5 hours per week saved on support triage; delayed-response complaints down 45%",
      "Gemini flagged 28% premium cart drop-off at checkout — actionable within 140 order logs",
    ],
  },
  {
    slug: "smarttrip-ai",
    title: "SmartTrip",
    category: ["Custom AI Applications", "Web Development"],
    clientType: "Travel · Luxury marketplace",
    showcaseLabel: "Portfolio project",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI",
      "GPT-4",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Framer Motion",
      "Prompt Engineering",
      "Vercel",
    ],
    heroMetric: "AI-curated itineraries in under 8 seconds",
    featured: true,
    publishedDate: "2025-01-20",
    executiveSummary:
      "SmartTrip Türkiye AI needed a luxury travel storefront — not a generic booking grid. We shipped a branded marketplace where users browse AI-curated Turkey packages or commission a custom itinerary from one hero-led experience.",
    challenge:
      "Static listings were not converting high-intent travelers. The product needed a premium first impression, clear paths to marketplace deals and custom orders, and fast AI-generated plans users could book.",
    webLayer:
      "Consumer marketplace with hero positioning (“Bespoke Luxury Turkey Collection”), navigation for marketplace, custom orders, gems map, and bookings — mobile-first layout with season-pass and hot-deals CTAs.",
    aiLayer:
      "AI-curated itinerary generation from dates, budget, and interests — structured day-by-day output tuned for geographic coherence across Turkey destinations.",
    dataLayer:
      "User profiles, saved itineraries, curated POI and package data, and booking state tied to marketplace inventory.",
    impact: [
      "Average itinerary generation under 8 seconds",
      "Clear split between curated marketplace packages and custom order flow",
      "Higher engagement vs. the prior static content format",
    ],
  },
  {
    slug: "turkey-ai-itinerary-planner",
    title: "Turkey AI Itinerary Planner",
    category: ["Custom AI Applications", "Web Development"],
    clientType: "Travel · Conversational planning",
    showcaseLabel: "Portfolio project",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Leaflet",
      "Google GenAI SDK",
      "Gemini",
      "Function Calling",
      "JSON Schema",
      "Node.js",
      "REST APIs",
      "OpenWeatherMap",
      "Conversational UI",
    ],
    heroMetric: "80+ cities · AI-optimized daily routes",
    featured: true,
    publishedDate: "2025-05-18",
    executiveSummary:
      "An AI-powered travel planner for Turkey that moves itinerary planning from manual research into a cohesive, conversational experience. Built with React, Tailwind CSS, and Leaflet Maps, it uses the Google GenAI SDK with function-calling tools and JSON-schema compliance so travelers can pick cities, duration, budget, and style — then receive a geographic daily plan synced with live weather, currency conversion, interactive maps, and mock flight schedules.",
    challenge:
      "Travelers planning Turkey trips juggled blogs, booking sites, and spreadsheets — with no single flow from destination pick to day-by-day route. The product needed a GetYourGuide-inspired browse experience plus AI that respects geography, budget, and live conditions.",
    webLayer:
      "GetYourGuide-inspired UI: hero destination search, continue-planning cards, top destinations grid (Istanbul, Cappadocia, Antalya, and more), historical treasures sidebar, and itinerary/bookings/wishlist tabs — mobile-first with value props for cancellation, instant confirmation, and price matching.",
    aiLayer:
      "Google GenAI SDK (@google/genai) with advanced function-calling: structured JSON itineraries from conversational inputs (cities, duration, budget, travel style), tool hooks for weather, currency, map plotting, and mock flight lookup — schema-validated daily plans optimized by geography.",
    dataLayer:
      "City and POI catalog across 80+ Turkey destinations, live weather and currency API integrations, Leaflet map layers for route visualization, and persisted user itineraries with booking and wishlist state.",
    impact: [
      "Conversational planning replaces manual multi-tab research for Turkey trips",
      "Daily itineraries optimized geographically with live weather and currency context",
      "Unified browse + plan flow across destinations, historical sites, and saved trips",
    ],
  },
  {
    slug: "collaborax",
    title: "CollaboraX",
    category: ["Enterprise Web Development"],
    clientType: "B2B · Team collaboration",
    showcaseLabel: "Portfolio project",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "WebSockets",
      "Redis",
      "Tailwind CSS",
      "Real-time Sync",
      "Multi-tenant",
      "Docker",
      "CI/CD",
    ],
    heroMetric: "Zero isolation incidents post-launch",
    featured: true,
    publishedDate: "2024-11-08",
    executiveSummary:
      "Multi-tenant workspace for distributed teams — real-time editing without the sync bugs that usually show up in collaborative tools.",
    challenge:
      "Simultaneous edits kept causing desync and data leaks between client workspaces. They needed strict isolation and predictable state.",
    webLayer:
      "Centralized state management for concurrent edits — no race conditions, no UI drifting from the server.",
    aiLayer: "Not part of this engagement — web and data only.",
    dataLayer:
      "Multi-tenant schema with workspace-level isolation. WebSocket layer tuned for low latency under concurrent sessions.",
    impact: [
      "Stable real-time performance under heavy concurrent use",
      "No reported cross-workspace data leaks after launch",
    ],
  },
  {
    slug: "trendforce-consulting",
    title: "TrendForce Consulting",
    category: ["Web Development"],
    clientType: "FinTech · Financial consulting",
    showcaseLabel: "Portfolio project",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive UI",
      "SEO",
      "Vercel",
      "React Hook Form",
      "Contentful-ready",
      "i18n-ready",
      "Analytics",
    ],
    heroMetric: "99.9% service accuracy positioning",
    featured: true,
    publishedDate: "2024-09-12",
    executiveSummary:
      "TrendForce needed a marketing site that communicated global financial consulting with clear service paths — not a generic template. We shipped a branded hero, services funnel, and consultation CTAs aligned to how prospects actually evaluate firms.",
    challenge:
      "The prior site did not explain customized consulting clearly or drive free-consultation requests. Leadership wanted a credible first impression with services, about, and FAQs structured for international prospects.",
    webLayer:
      "Marketing site with hero positioning (“Pioneering the future of business”), services and about navigation, FAQ entry points, language selector, and primary CTAs for “Explore our services” and free consultation booking.",
    aiLayer: "Not part of this engagement — web and content experience only.",
    dataLayer:
      "Structured content for services and FAQs, form capture for consultation requests, and layout components built for future localization.",
    impact: [
      "Clear service discovery path from homepage hero to consultation CTA",
      "Brand-forward FinTech presentation with performance and accuracy messaging",
      "Foundation for multilingual expansion (German selector in UI)",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getRelatedWorkBySlugs(slugs: string[]): CaseStudy[] {
  return slugs
    .map((slug) => getCaseStudy(slug))
    .filter((study): study is CaseStudy => Boolean(study))
    .slice(0, 2);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured);
}

export function getRelatedCaseStudies(
  currentSlug: string,
  category?: string
): CaseStudy[] {
  return caseStudies
    .filter((cs) => cs.slug !== currentSlug)
    .filter((cs) => !category || cs.category.some((c) => c.includes(category)))
    .slice(0, 3);
}
