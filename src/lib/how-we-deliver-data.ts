export const howWeDeliverSection = {
  title: "How We Deliver",
  subtitle: "The work that happens around every build — before, during, and after the code.",
};

export const howWeDeliverCards = [
  {
    id: "product-discovery",
    title: "Product Discovery",
    tagline: "Scope Before Quotes",
    body: "Before any code gets written, we map your goals, users, and constraints in a structured discovery phase — so the build that follows is scoped against a real plan, not a guess.",
    includes: [
      "Stakeholder/goal mapping",
      "User & competitor research",
      "Technical feasibility assessment",
      "Scoped deliverable & timeline document",
    ],
    icon: "search" as const,
  },
  {
    id: "mvp-development",
    title: "MVP Development",
    tagline: "From Idea to Working Product, Fast",
    body: "We build only what's essential to test your idea in the real world — functional, scalable MVPs for founders who need to validate before they build everything.",
    includes: [
      "Feature prioritization (build only what's essential)",
      "Rapid build sprints",
      "Built-in scalability path for post-validation growth",
      "Founder-friendly fixed-scope pricing",
    ],
    icon: "rocket" as const,
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Interfaces People Actually Want to Use",
    body: "Clean, intuitive design across web and AI products — built around real user flows, not just visual polish, so what we design is what actually converts.",
    includes: [
      "User flow mapping",
      "Wireframes & high-fidelity design",
      "Design systems for consistency at scale",
      "Usability-focused iteration, not just visual polish",
    ],
    icon: "pen-tool" as const,
  },
  {
    id: "vibe-coding-cleanup",
    title: "Vibe Coding Cleanup",
    tagline: "Fix What AI Tools Started",
    body: "Built something fast with Lovable, Replit, or Cursor and now it's fragile under real use? We audit, refactor, and rebuild AI-generated codebases into something production-stable — without starting over.",
    includes: [
      "Full codebase audit",
      "Security & scalability risk assessment",
      "Refactor of AI-generated code into maintainable structure",
      "Documentation handoff so the codebase isn't a black box anymore",
    ],
    icon: "wrench" as const,
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    tagline: "Modernize Without the Disruption",
    body: "For teams running on legacy systems or manual processes — we map a practical path to modern infrastructure and AI-assisted workflows, without breaking what already works.",
    includes: [
      "Legacy system/process audit",
      "Modernization roadmap (no full rip-and-replace required)",
      "AI-assisted workflow integration",
      "Phased rollout to avoid operational disruption",
    ],
    icon: "layers" as const,
  },
] as const;

export type HowWeDeliverIcon = (typeof howWeDeliverCards)[number]["icon"];
