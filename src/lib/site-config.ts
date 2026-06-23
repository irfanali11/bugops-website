export const colors = {
  background: "#F8FAFC",
  surface: "#F8FAFC",
  surfaceElevated: "#FFFFFF",
  surfaceMuted: "#E2E8F0",
  accent: "#0B0F19",
  brand: "#06B6D4",
  brandSoft: "#8B5CF6",
  border: "#CBD5E1",
  textPrimary: "#0F172A",
  textMuted: "#475569",
  textFaint: "#64748B",
} as const;

export const siteConfig = {
  name: "BugOps",
  tagline: "Web & AI Engineering",
  description:
    "Full-service web development and AI engineering for companies that need both — scoped properly, delivered on timelines we stand behind.",
  url: "https://bugops.dev",
  email: "hello@bugops.dev",
  phone: "+1 (555) 000-0000",
  responseTime: "We reply within one business day.",
  since: "2024",
  colors,
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
};

export type BusinessSize = "Small Business" | "SMB" | "Enterprise";
export type ServiceInterest =
  | "Web Development"
  | "AI Agent Development"
  | "RAG Chatbot Development"
  | "AI Analytics"
  | "Custom AI Applications"
  | "AI Integration & Automation"
  | "NLP & Document Intelligence"
  | "Computer Vision"
  | "Predictive AI & ML"
  | "Not Sure";

export const businessSizes: BusinessSize[] = ["Small Business", "SMB", "Enterprise"];

export const serviceInterests: ServiceInterest[] = [
  "Web Development",
  "AI Agent Development",
  "RAG Chatbot Development",
  "AI Analytics",
  "Custom AI Applications",
  "AI Integration & Automation",
  "NLP & Document Intelligence",
  "Computer Vision",
  "Predictive AI & ML",
  "Not Sure",
];

export const companyStats = [
  {
    value: "25",
    suffix: "+",
    title: "Skilled professionals",
    description:
      "Engineers, designers, and AI specialists with deep domain expertise across web and machine learning.",
    accent: "warm" as const,
  },
  {
    value: "6",
    suffix: "+",
    title: "Years of experience",
    description:
      "Combined industry experience delivering production systems for startups, SMBs, and enterprise teams.",
    accent: "bronze" as const,
  },
  {
    value: "100",
    suffix: "+",
    title: "Projects delivered",
    description:
      "Web platforms, AI agents, analytics pipelines, and custom applications shipped across 12+ industries.",
    accent: "warm" as const,
  },
  {
    value: "98",
    suffix: "%",
    title: "Client satisfaction",
    description:
      "Long-term partnerships built on clear scoping, transparent delivery, and systems that stay running.",
    accent: "bronze" as const,
  },
];

export const industries = [
  {
    title: "EdTech",
    body: "Learning platforms, student portals, and AI tutoring systems that personalize education at scale.",
  },
  {
    title: "HealthTech",
    body: "Patient portals, clinical dashboards, and HIPAA-aware AI for documentation and care coordination.",
  },
  {
    title: "FinTech & banking",
    body: "Secure web platforms, fraud detection, and AI-driven analytics for financial services.",
  },
  {
    title: "Retail & e-commerce",
    body: "High-conversion storefronts, inventory systems, and recommendation engines for online retail.",
  },
  {
    title: "B2B SaaS",
    body: "Multi-tenant platforms, customer portals, and embedded AI features for software products.",
  },
  {
    title: "Real estate",
    body: "Property platforms, CRM integrations, and AI tools for listings, valuations, and lead management.",
  },
  {
    title: "Legal & compliance",
    body: "Document intelligence, contract review workflows, and secure client portals for legal teams.",
  },
  {
    title: "Manufacturing",
    body: "Supply chain dashboards, quality inspection with computer vision, and operational analytics.",
  },
  {
    title: "Hospitality & travel",
    body: "Booking platforms, itinerary tools, and AI assistants for guest experience and operations.",
  },
  {
    title: "Media & entertainment",
    body: "Content platforms, recommendation systems, and AI-powered production and distribution tools.",
  },
  {
    title: "Government & public sector",
    body: "Accessible citizen portals, secure internal systems, and document processing at scale.",
  },
  {
    title: "Energy & utilities",
    body: "Field operations dashboards, predictive maintenance models, and asset monitoring platforms.",
  },
];

export const missionVision = {
  banner: {
    title: "Your long-term web and AI technology partner",
    subtitle:
      "We partner with organizations to design, build, and maintain web platforms and AI systems — from first scope to production and beyond.",
  },
  mission: {
    title: "Our mission",
    body: "Deliver production-grade web development and AI engineering that drives measurable business outcomes — with clear scoping, honest timelines, and no vendor handoffs between your site and your AI layer.",
  },
  vision: {
    title: "Our vision",
    body: "To be the engineering partner teams trust for custom web platforms and applied AI — known for shipping systems that work in production, not just in demos.",
  },
};

export const engagementModels = {
  intro:
    "Fixed-scope MVPs for validation, or ongoing builds for teams that need a long-term engineering partner — scoped in discovery, not guessed from a form.",
  models: [
    {
      title: "Fixed-scope MVP",
      body: "Defined deliverables, timeline, and budget — built to validate before you invest in the full product.",
    },
    {
      title: "Ongoing build",
      body: "Iterative delivery with staging reviews and a team that stays on through launch and beyond.",
    },
  ],
} as const;

export const howWeWork = [
  {
    step: "01",
    title: "Discovery",
    subtitle: "Understand the problem",
    body: "We map your goals, users, data, and constraints before proposing any solution or timeline.",
  },
  {
    step: "02",
    title: "Scoping",
    subtitle: "Document everything",
    body: "Requirements, architecture, deliverables, and effort — written and agreed before development starts.",
  },
  {
    step: "03",
    title: "Build",
    subtitle: "Ship in stages",
    body: "Iterative delivery with staging reviews, QA, and regular check-ins so nothing surprises you at launch.",
  },
  {
    step: "04",
    title: "Launch & support",
    subtitle: "Stay running",
    body: "Deployment, monitoring, handoff documentation, and post-launch support through go-live and beyond.",
  },
];

export const faqSections = [
  {
    title: "Web development",
    items: [
      {
        q: "What types of websites and platforms do you build?",
        a: "Corporate and marketing sites, customer portals, admin dashboards, and enterprise web systems — from CMS-driven business sites to full-stack applications with auth, APIs, and real-time features.",
      },
      {
        q: "Do you handle design, development, and launch?",
        a: "Yes. We deliver custom UI/UX, mobile-first development, CMS workflows, SEO setup, and go-live support — so your team can maintain content after launch without starting over.",
      },
      {
        q: "Can you scale a site from small business to enterprise?",
        a: "We scope in tiers: business websites, web applications, and enterprise systems. You can start with a focused build and expand architecture, security, and DevOps as traffic and compliance requirements grow.",
      },
    ],
  },
  {
    title: "AI solutions",
    items: [
      {
        q: "Which AI services do you offer?",
        a: "AI agents, RAG chatbots, analytics and insights, custom AI applications, system integration and automation, NLP and document intelligence, computer vision, and predictive ML — all built for production, not demos.",
      },
      {
        q: "How do you integrate AI with our existing stack?",
        a: "We connect to your CRM, ERP, databases, and internal tools via APIs and event-driven workflows — with guardrails, logging, human-in-the-loop review, and fallbacks when models are uncertain.",
      },
      {
        q: "Do you build RAG chatbots on our own data?",
        a: "Yes. We design retrieval-augmented chatbots grounded in your docs, tickets, and product content — with vector search, source citations, and escalation paths when confidence is low.",
      },
      {
        q: "Can you ship AI agents for internal operations?",
        a: "We build multi-step agents for lead routing, document processing, support triage, and ops automation — with policy boundaries and tool access scoped to what your team actually needs.",
      },
    ],
  },
  {
    title: "Working together",
    items: [
      {
        q: "Do you handle both web development and AI under one team?",
        a: "Yes. BugOps is a full-service web and AI engineering team — one scope, one timeline, and one team responsible for your platform and intelligence layer.",
      },
      {
        q: "Which industries do you work with?",
        a: "We serve EdTech, HealthTech, FinTech, retail, B2B SaaS, real estate, legal, manufacturing, hospitality, media, government, energy, and more — with domain-aware compliance and data workflows.",
      },
      {
        q: "How does pricing and scoping work?",
        a: "Every project starts with discovery. We document requirements first, then provide a fixed quote — no guessing from a contact form alone.",
      },
      {
        q: "How do we get started?",
        a: "Book an intro call or send a message through our contact form. We will discuss your requirements, timeline, and fit. If we are not the right partner, we will tell you directly.",
      },
    ],
  },
];

/** @deprecated Use faqSections — kept for backwards compatibility */
export const faqs = faqSections.flatMap((section) => section.items);

export const teamIntro =
  "Led by co-founders with deep expertise in full-stack web engineering and applied AI — backed by a senior engineering team across design, development, and machine learning.";

export const team = [
  {
    name: "Irfan Ali",
    role: "Co-Founder",
    initials: "IA",
    avatar: "/team/irfan-ali.png",
  },
  {
    name: "Mian Asadullah",
    role: "Co-Founder",
    initials: "MA",
    avatar: "/team/mian-asadullah.png",
  },
];

export const trustLine = "Trusted by companies across 12+ industries worldwide";
