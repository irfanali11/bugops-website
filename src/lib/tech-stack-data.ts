export type TechCategory = "web" | "ai" | "data";

export interface TechStackItem {
  id: string;
  name: string;
  iconSlug: string;
  category: TechCategory;
  useCase: string;
}

export const techStackIntro =
  "Modern frameworks and platforms we use to ship web platforms, AI systems, and production infrastructure.";

export const techStack: TechStackItem[] = [
  {
    id: "nextjs",
    name: "Next.js",
    iconSlug: "nextdotjs",
    category: "web",
    useCase: "Marketing sites, customer portals & full-stack web applications",
  },
  {
    id: "react",
    name: "React",
    iconSlug: "react",
    category: "web",
    useCase: "Interactive dashboards, admin tools & component-driven UIs",
  },
  {
    id: "typescript",
    name: "TypeScript",
    iconSlug: "typescript",
    category: "web",
    useCase: "Type-safe frontends, APIs & shared code across the stack",
  },
  {
    id: "nodejs",
    name: "Node.js",
    iconSlug: "nodedotjs",
    category: "web",
    useCase: "REST & real-time APIs, integrations & backend services",
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    iconSlug: "tailwindcss",
    category: "web",
    useCase: "Design systems, responsive UI & rapid product iteration",
  },
  {
    id: "vercel",
    name: "Vercel",
    iconSlug: "vercel",
    category: "web",
    useCase: "Edge deployment, previews & production web hosting",
  },
  {
    id: "docker",
    name: "Docker",
    iconSlug: "docker",
    category: "web",
    useCase: "Containerized deployment, CI/CD & scalable production ops",
  },
  {
    id: "prisma",
    name: "Prisma",
    iconSlug: "prisma",
    category: "web",
    useCase: "Type-safe database access & schema-driven backends",
  },
  {
    id: "graphql",
    name: "GraphQL",
    iconSlug: "graphql",
    category: "web",
    useCase: "Flexible APIs for portals, mobile clients & integrations",
  },
  {
    id: "supabase",
    name: "Supabase",
    iconSlug: "supabase",
    category: "web",
    useCase: "Auth, storage & realtime features for modern web apps",
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    iconSlug: "kubernetes",
    category: "web",
    useCase: "Enterprise orchestration, scaling & resilient deployments",
  },
  {
    id: "googlecloud",
    name: "Google Cloud",
    iconSlug: "googlecloud",
    category: "web",
    useCase: "Cloud infrastructure, managed AI services & enterprise hosting",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    iconSlug: "postgresql",
    category: "data",
    useCase: "Transactional data, analytics stores & RAG metadata",
  },
  {
    id: "redis",
    name: "Redis",
    iconSlug: "redis",
    category: "data",
    useCase: "Caching, sessions & real-time job queues",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    iconSlug: "mongodb",
    category: "data",
    useCase: "Flexible document storage for product & workflow data",
  },
  {
    id: "python",
    name: "Python",
    iconSlug: "python",
    category: "ai",
    useCase: "ML pipelines, data processing & predictive models",
  },
  {
    id: "openai",
    name: "OpenAI",
    iconSlug: "openai",
    category: "ai",
    useCase: "LLM chatbots, agents & document intelligence",
  },
  {
    id: "langchain",
    name: "LangChain",
    iconSlug: "langchain",
    category: "ai",
    useCase: "AI agents, RAG orchestration & tool integrations",
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    iconSlug: "huggingface",
    category: "ai",
    useCase: "Model hosting, fine-tuning & NLP experimentation",
  },
  {
    id: "pytorch",
    name: "PyTorch",
    iconSlug: "pytorch",
    category: "ai",
    useCase: "Custom model training, computer vision & deep learning",
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    iconSlug: "tensorflow",
    category: "ai",
    useCase: "Production ML models & large-scale inference pipelines",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    iconSlug: "anthropic",
    category: "ai",
    useCase: "Enterprise-grade LLM assistants & reasoning workflows",
  },
  {
    id: "pinecone",
    name: "Pinecone",
    iconSlug: "pinecone",
    category: "ai",
    useCase: "Vector search for grounded RAG chatbots & knowledge bases",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    iconSlug: "fastapi",
    category: "ai",
    useCase: "High-performance AI APIs & model serving endpoints",
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    iconSlug: "nvidia",
    category: "ai",
    useCase: "GPU-accelerated training & computer vision workloads",
  },
];

export const techCategoryLabels: Record<TechCategory, string> = {
  web: "Web",
  ai: "AI",
  data: "Data",
};
