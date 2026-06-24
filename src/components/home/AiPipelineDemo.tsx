"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const steps = [
  { id: "ingest", label: "Ingest", detail: "PDFs, APIs, CRM events, and tickets normalized into a single pipeline." },
  { id: "embed", label: "Embed", detail: "Chunking, vector indexing, and metadata tagging for retrieval at scale." },
  { id: "agent", label: "Agent", detail: "Tool routing, policy guardrails, and human-in-the-loop approvals." },
  { id: "act", label: "Act", detail: "Tickets created, emails sent, dashboards updated — with full audit trail." },
] as const;

export function AiPipelineDemo() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-band-muted py-20 md:py-28" aria-labelledby="ai-pipeline-heading">
      <Container>
        <div className="motion-enter max-w-2xl">
          <p className="section-label">Production AI</p>
          <h2 id="ai-pipeline-heading" className="section-heading mt-3">
            How production AI actually ships
          </h2>
          <p className="type-body mt-4 text-muted">
            Not a demo chatbot — a pipeline from your data to automated action, built to run in production.
          </p>
        </div>

        <div className="motion-stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "motion-stagger-item surface-card p-5 text-left transition-transform duration-300 ease-out",
                active === index && "ring-2 ring-brand/40"
              )}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                0{index + 1}
              </span>
              <p className="mt-2 font-bold text-foreground">{step.label}</p>
            </button>
          ))}
        </div>

        <p className="motion-enter motion-enter-delay-1 mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          {steps[active].detail}
        </p>
      </Container>
    </section>
  );
}
