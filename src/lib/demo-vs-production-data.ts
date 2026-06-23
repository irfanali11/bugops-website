export const demoVsProductionSection = {
  title: "Demo AI vs production AI",
  subtitle:
    "Most AI projects stall between a working prototype and something your team can run every day. We build for the second.",
};

export const demoVsProductionComparison = {
  demo: {
    label: "Demo agent",
    tagline: "Clean input, happy path",
    points: [
      "Works on well-structured test data — impressive in a meeting, fragile in the wild",
      "Single linear path with no recovery when something unexpected happens",
      "Prompts tuned for ideal inputs, not ambiguous or incomplete messages",
      "Token usage unchecked — fine for a demo, unsustainable at scale",
      "Failures go unnoticed until a user reports them",
    ],
  },
  production: {
    label: "Production agent",
    tagline: "How we build at BugOps",
    points: [
      "Input validation and guardrails before anything reaches the model",
      "Branching logic, retries, and graceful escalation — not silent failures",
      "Human-in-the-loop when confidence is low, with full context preserved",
      "Token budgets, rate limits, and cost monitoring from day one",
      "Logging, evals, and monitoring so issues surface before users do",
    ],
  },
} as const;
