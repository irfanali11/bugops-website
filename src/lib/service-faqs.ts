const sharedServiceFaq = [
  {
    q: "How long does a typical engagement take?",
    a: "Focused MVPs often run 4–12 weeks. Mid-complexity web or AI builds run 3–6 months. We scope timeline in discovery — written and agreed before development starts.",
  },
  {
    q: "Who owns the IP and source code?",
    a: "You do. Code is developed in your repositories where possible, with documentation and handoff included. We assign full IP ownership on signing.",
  },
  {
    q: "Can you integrate with our existing tools and data?",
    a: "Yes. We connect via APIs to CRMs, ERPs, databases, and internal systems — with scoped tool access, logging, and fallbacks when integrations fail.",
  },
  {
    q: "Do you work with regulated or sensitive data?",
    a: "We configure projects for GDPR, HIPAA-aware workflows, and sector-specific requirements as part of discovery. Sensitive workloads can use private cloud endpoints or self-hosted models when needed.",
  },
  {
    q: "What happens after launch?",
    a: "Every project ships with monitoring and handoff documentation. Ongoing support covers performance, security patches, and feature work — with the same engineers who built it.",
  },
] as const;

export const webDevelopmentFaq = [
  {
    q: "What types of websites and platforms do you build?",
    a: "Corporate and marketing sites, customer portals, admin dashboards, and enterprise web systems — from CMS-driven business sites to full-stack applications with auth, APIs, and real-time features.",
  },
  ...sharedServiceFaq,
] as const;

const aiServiceFaqs: Record<string, readonly { q: string; a: string }[]> = {
  "ai-agent-development": [
    {
      q: "What makes your agents production-ready?",
      a: "Policy boundaries, tool access scoped to the workflow, human-in-the-loop escalation, cost controls, and monitoring — not just a prompt that works on demo data.",
    },
    ...sharedServiceFaq,
  ],
  "ai-chatbot-development": [
    {
      q: "How do you keep chatbot answers grounded?",
      a: "Retrieval-augmented generation over your docs and tickets, source citations, confidence thresholds, and escalation to a person when retrieval is weak.",
    },
    ...sharedServiceFaq,
  ],
  "ai-analytics": [
    {
      q: "Do you replace our existing reporting tools?",
      a: "Usually we consolidate data into pipelines and dashboards your team already trusts — adding automated trend and anomaly detection, not another siloed tool.",
    },
    ...sharedServiceFaq,
  ],
  "custom-ai-applications": [
    {
      q: "Can you build a full AI product, not just a feature?",
      a: "Yes — end-to-end products combining UX, model orchestration, data layers, and production deployment for customer-facing or internal platforms.",
    },
    ...sharedServiceFaq,
  ],
  "ai-integration-automation": [
    {
      q: "Will AI integration replace our current systems?",
      a: "No. We embed AI into CRMs, ERPs, and custom software — automating repetitive work while keeping the systems your team relies on.",
    },
    ...sharedServiceFaq,
  ],
  "nlp-document-intelligence": [
    {
      q: "What document types can you process?",
      a: "Contracts, invoices, forms, correspondence, and compliance intake — with classification, extraction, and routing into your existing workflows.",
    },
    ...sharedServiceFaq,
  ],
  "computer-vision": [
    {
      q: "Do you deploy on edge or cloud?",
      a: "Both — depending on latency, privacy, and hardware constraints. We train, tune, and deploy for real-time inference where your use case requires it.",
    },
    ...sharedServiceFaq,
  ],
  "predictive-ai-ml": [
    {
      q: "How do you validate models before production?",
      a: "Feature engineering, holdout validation, and MLOps for retraining — with monitoring for drift so models stay useful after launch.",
    },
    ...sharedServiceFaq,
  ],
};

export function getAIServiceFaq(slug: string) {
  return aiServiceFaqs[slug] ?? sharedServiceFaq;
}
