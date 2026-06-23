export const portfolioCardImages: Record<string, { src: string; alt: string }> = {
  "smartsupport-ai": {
    src: "/images/portfolio/smartsupport-dashboard.png",
    alt: "SmartSupport AI ticket resolution platform dashboard mock-up",
  },
  "smarttrip-ai": {
    src: "/images/portfolio/smarttrip-itinerary.png",
    alt: "SmartTrip Türkiye AI luxury travel marketplace homepage with bespoke Turkey itineraries",
  },
  "turkey-ai-itinerary-planner": {
    src: "/images/portfolio/turkey-ai-itinerary-hero.png",
    alt: "Turkey AI itinerary planner hero with destination search and trip planning UI",
  },
  collaborax: {
    src: "/images/portfolio/collaborax-workspace.png",
    alt: "CollaboraX high-concurrency real-time enterprise workspace interface",
  },
  "trendforce-consulting": {
    src: "/images/portfolio/trendforce-consulting.png",
    alt: "TrendForce Consulting financial services marketing website hero section",
  },
  "zenith-ai": {
    src: "/images/portfolio/zenith-ai-dashboard.png",
    alt: "ZENITH AI system analytics dashboard with ticket metrics and AI resolution charts",
  },
  "nexusai-business-suite": {
    src: "/images/portfolio/nexusai-dashboard.png",
    alt: "NexusAI Business Suite operational dashboard with revenue KPIs and AI insights",
  },
};

export const portfolioGalleryImages: Record<string, readonly { src: string; alt: string }[]> = {
  "turkey-ai-itinerary-planner": [
    {
      src: "/images/portfolio/turkey-ai-itinerary-destinations.png",
      alt: "Turkey AI itinerary planner top destinations and historical treasures browse UI",
    },
  ],
  "nexusai-business-suite": [
    {
      src: "/images/portfolio/nexusai-orders.png",
      alt: "NexusAI Business Suite orders and sales ledger with revenue tracking",
    },
  ],
};

export function getPortfolioCardImage(slug: string) {
  return portfolioCardImages[slug];
}

export function getPortfolioGalleryImages(slug: string) {
  return portfolioGalleryImages[slug] ?? [];
}

type CardImage = { src: string; alt: string };

const unsplash = (photoId: string, alt: string) => ({
  src: `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=960&q=85`,
  alt,
});

export const industryCardImages: Record<string, CardImage> = {
  EdTech: unsplash(
    "photo-1516321318423-f06f85e504b3",
    "Engineering team analyzing terminal output with RAG knowledge graph node visualization and cyan data glow"
  ),
  HealthTech: unsplash(
    "photo-1555949963-aa79dcee981c",
    "Medical AI diagnostic interface with neural network overlays and glowing health metric readouts"
  ),
  "FinTech & banking": unsplash(
    "photo-1551288049-bebda4e38f71",
    "Financial analytics dashboard with AI predictive trend lines, confidence intervals, and automated data flags"
  ),
  "Retail & e-commerce": unsplash(
    "photo-1504639725590-34d0984388bd",
    "E-commerce intelligence dashboard with recommendation engine metrics and automated demand signals"
  ),
  "B2B SaaS": unsplash(
    "photo-1556761175-b413da4baf72",
    "Multi-tenant SaaS operations cockpit with live API telemetry and product analytics panels"
  ),
  "Real estate": unsplash(
    "photo-1451187580459-43490279c0fa",
    "Geospatial property intelligence platform with AI valuation models and market trend overlays"
  ),
  "Legal & compliance": unsplash(
    "photo-1526374965328-7f61d4dc18c5",
    "NLP contract intelligence pipeline with structured document extraction and compliance scoring"
  ),
  Manufacturing: unsplash(
    "photo-1485827404703-89b55fcc595e",
    "Industrial computer vision system with real-time object detection bounding boxes and QC confidence scores"
  ),
  "Hospitality & travel": unsplash(
    "photo-1518770660439-4636190af475",
    "Travel operations AI stack with automated itinerary optimization and booking intelligence workflows"
  ),
  "Media & entertainment": unsplash(
    "photo-1460925895917-afdab827c52f",
    "Media analytics engine with content recommendation models and audience intelligence dashboards"
  ),
  "Government & public sector": unsplash(
    "photo-1563986768609-322da13575f3",
    "Secure civic technology infrastructure with encrypted document processing and citizen portal automation"
  ),
  "Energy & utilities": unsplash(
    "photo-1550751827-4bd374c3f58b",
    "Energy grid IoT monitoring with predictive maintenance models and asset telemetry heatmaps"
  ),
};

export const serviceCardImages: Record<string, CardImage> = {
  "ai-agent-development": unsplash(
    "photo-1677442136019-21780ecad995",
    "Autonomous AI agent orchestration graph with tool routing nodes and policy guardrail boundaries"
  ),
  "ai-chatbot-development": unsplash(
    "photo-1620712943543-bcc4688e7485",
    "RAG architecture visualization with document blocks streaming into a glowing vector database array"
  ),
  "ai-analytics": unsplash(
    "photo-1543286386-713bdd548da4",
    "AI analytics pipeline with automated trend detection, anomaly alerts, and executive KPI visualizations"
  ),
  "custom-ai-applications": unsplash(
    "photo-1498050108023-c5249f4df085",
    "Custom LLM application engineering workspace with production model orchestration and deployment tooling"
  ),
  "ai-integration-automation": unsplash(
    "photo-1558494949-ef010cbdcc31",
    "Event-driven AI integration layer connecting CRM, ERP, and internal APIs through automated workflows"
  ),
  "nlp-document-intelligence": unsplash(
    "photo-1555066931-4365d14bab8c",
    "NLP document intelligence flow with semantic text parsing, entity extraction, and classification pipelines"
  ),
  "computer-vision": unsplash(
    "photo-1461749280684-dccba630e2f6",
    "Computer vision inference stack with camera feed overlays, detection boxes, and matrix confidence heatmaps"
  ),
  "predictive-ai-ml": unsplash(
    "photo-1517694712202-14dd9538aa97",
    "Predictive machine learning model outputs with feature engineering charts and MLOps retraining monitors"
  ),
};

export const webDevCardImages: Record<string, CardImage> = {
  "small-business": unsplash(
    "photo-1519389950473-47ba0277781c",
    "High-performance marketing web platform with CMS workflows and conversion-optimized component architecture"
  ),
  smb: unsplash(
    "photo-1553877522-43269d4ea984",
    "Full-stack web portal engineering with authenticated dashboards, APIs, and real-time data layers"
  ),
  enterprise: unsplash(
    "photo-1504384308090-c894fdcc538d",
    "Enterprise web systems architecture with scalable infrastructure, security controls, and CI/CD pipelines"
  ),
};

export const howWeDeliverCardImages: Record<string, CardImage> = {
  "product-discovery": unsplash(
    "photo-1542744173-8e7e53415bb0",
    "Product discovery session with stakeholder mapping and technical feasibility analysis"
  ),
  "mvp-development": unsplash(
    "photo-1522071820081-009f0129c71c",
    "MVP development sprint with rapid build and scalable product engineering"
  ),
  "ui-ux-design": unsplash(
    "photo-1551650975-87deedd944c3",
    "UI and UX design workspace with user flows and interface prototyping"
  ),
  "vibe-coding-cleanup": unsplash(
    "photo-1587620962725-abab7fe55159",
    "Codebase audit and refactor of AI-generated code into production-stable structure"
  ),
  "digital-transformation": unsplash(
    "photo-1454165804606-c3d57bc86b40",
    "Digital transformation with legacy modernization and AI-assisted workflow integration"
  ),
};

export function getIndustryCardImage(title: string): CardImage | undefined {
  return industryCardImages[title];
}

export function getServiceCardImage(slug: string): CardImage {
  return (
    serviceCardImages[slug] ?? {
      src: "/images/services/ai-agent-development.svg",
      alt: "AI service",
    }
  );
}

export function getWebDevCardImage(tierId: string): CardImage {
  return (
    webDevCardImages[tierId] ?? {
      src: "/images/services/small-business.svg",
      alt: "Web development service",
    }
  );
}

export function getHowWeDeliverCardImage(id: string): CardImage | undefined {
  return howWeDeliverCardImages[id];
}
