export const servicesHub = {
  label: "Services",
  title: "Web platforms and AI systems scoped to ship — not slide decks",
  subtitle:
    "Pick what you need — or book discovery and we'll map the right mix of web, AI, and delivery support.",
} as const;

export const webDevPillar = {
  headline: "Web development",
  outcomeHeadline: "Sites and platforms built to convert, scale, and stay maintainable",
  body: "From marketing sites to full-scale platforms — built for performance, security, and the workflows your team runs every day.",
  relatedWorkSlugs: ["aesthete", "panto", "collaborax"],
  tiers: [
    {
      id: "small-business",
      tagline: "Business websites",
      title: "Corporate & business websites",
      outcomeHeadline: "Marketing sites that convert — and your team can actually update",
      body: "Custom, mobile-first sites with CMS, booking, and lead capture — designed to convert and easy for your team to maintain.",
      includes: ["Custom UI/UX design", "Mobile-first development", "CMS & content workflows", "SEO & launch support"],
    },
    {
      id: "smb",
      tagline: "Web platforms",
      title: "Web applications & portals",
      outcomeHeadline: "Portals and dashboards your users rely on every day",
      body: "Customer portals, admin dashboards, and internal tools with authentication, APIs, and real-time features.",
      includes: ["Full-stack development", "Database architecture", "Third-party integrations", "Admin dashboards"],
    },
    {
      id: "enterprise",
      tagline: "Enterprise systems",
      title: "Enterprise web systems",
      outcomeHeadline: "High-traffic platforms with security and architecture that scale",
      body: "High-traffic platforms with strict security, compliance requirements, and architecture built to scale.",
      includes: ["System architecture", "Security & compliance", "Performance optimization", "DevOps & CI/CD"],
    },
  ],
};

export const aiPillar = {
  headline: "AI solutions",
  outcomeHeadline: "Production AI wired into your stack — with guardrails, not gimmicks",
  body: "Production-grade AI — agents, chatbots, analytics, and custom applications integrated with your existing stack and data.",
  services: [
    {
      slug: "ai-agent-development",
      title: "AI agent development",
      outcomeHeadline: "Agents that run workflows in production — not just in demos",
      tagline: "Autonomous workflows with guardrails",
      body: "Multi-step agents that read context, make decisions within policy, and execute across your CRM, email, and internal tools.",
      useCases: ["Lead qualification & routing", "Operations automation", "Document processing pipelines"],
      capabilities: ["Agent orchestration", "Tool & API integration", "Human-in-the-loop review"],
      relatedWorkSlugs: ["zenith-ai", "smartsupport-ai"],
    },
    {
      slug: "ai-chatbot-development",
      title: "RAG chatbot development",
      outcomeHeadline: "Answers grounded in your data — with escalation when it matters",
      tagline: "Answers grounded in your data",
      body: "Retrieval-augmented chatbots trained on your docs, tickets, and product content — with escalation when confidence is low.",
      useCases: ["Customer support", "Sales qualification", "Internal knowledge bases"],
      capabilities: ["RAG architecture", "Vector search", "Source citations & logging"],
      relatedWorkSlugs: ["zenith-ai", "smartsupport-ai"],
    },
    {
      slug: "ai-analytics",
      title: "AI analytics & insights",
      outcomeHeadline: "From raw data to decisions — without rebuilding spreadsheets every week",
      tagline: "From raw data to decisions",
      body: "Automated trend detection, anomaly alerts, and executive dashboards — replacing manual spreadsheet cycles.",
      useCases: ["Operational reporting", "Trend & anomaly detection", "Executive dashboards"],
      capabilities: ["Data pipelines", "Automated analysis", "Real-time visualizations"],
      relatedWorkSlugs: ["nexusai-business-suite", "zenith-ai", "collaborax"],
    },
    {
      slug: "custom-ai-applications",
      title: "Custom AI applications",
      outcomeHeadline: "Purpose-built AI products — scoped, shipped, and owned by you",
      tagline: "Purpose-built AI products",
      body: "End-to-end AI products combining LLMs, retrieval, and your business logic for industry-specific problems.",
      useCases: ["Vertical SaaS features", "Internal AI platforms", "Customer-facing AI tools"],
      capabilities: ["Product design & UX", "Custom model orchestration", "Production deployment"],
      relatedWorkSlugs: ["turkey-ai-itinerary-planner", "smarttrip-ai"],
    },
    {
      slug: "ai-integration-automation",
      title: "AI integration & automation",
      outcomeHeadline: "AI inside the tools you already use — without replacing your stack",
      tagline: "AI inside your existing stack",
      body: "Embed AI into CRMs, ERPs, and custom software — automating repetitive work without replacing systems you rely on.",
      useCases: ["CRM enrichment", "Workflow automation", "API-driven AI features"],
      capabilities: ["System integration", "Event-driven automation", "Monitoring & fallbacks"],
      relatedWorkSlugs: ["smartsupport-ai", "nexusai-business-suite"],
    },
    {
      slug: "nlp-document-intelligence",
      title: "NLP & document intelligence",
      outcomeHeadline: "Structure from unstructured documents — at the volume you actually receive",
      tagline: "Extract structure from unstructured data",
      body: "Classify, summarize, and extract fields from contracts, invoices, forms, and correspondence at scale.",
      useCases: ["Contract review", "Invoice processing", "Compliance document intake"],
      capabilities: ["Document parsing", "Entity extraction", "Classification pipelines"],
      relatedWorkSlugs: ["zenith-ai", "smartsupport-ai"],
    },
    {
      slug: "computer-vision",
      title: "Computer vision solutions",
      outcomeHeadline: "Visual data processed automatically — with models tuned for your environment",
      tagline: "Visual data, automated",
      body: "Image and video analysis for quality control, asset tagging, identity verification, and visual search.",
      useCases: ["Quality inspection", "Visual search", "Identity verification"],
      capabilities: ["Model training & tuning", "Edge & cloud deployment", "Real-time inference"],
      relatedWorkSlugs: ["collaborax", "zenith-ai"],
    },
    {
      slug: "predictive-ai-ml",
      title: "Predictive AI & ML models",
      outcomeHeadline: "Forecasts and scores you can act on — not models stuck in a notebook",
      tagline: "Forecast what happens next",
      body: "Custom models for demand forecasting, churn prediction, risk scoring, and recommendation engines.",
      useCases: ["Demand forecasting", "Churn & risk scoring", "Recommendation systems"],
      capabilities: ["Feature engineering", "Model training & validation", "MLOps & retraining"],
      relatedWorkSlugs: ["collaborax", "zenith-ai"],
    },
  ],
};

export function getAIService(slug: string) {
  return aiPillar.services.find((s) => s.slug === slug);
}

export function getWebDevTier(id: string) {
  return webDevPillar.tiers.find((t) => t.id === id);
}
