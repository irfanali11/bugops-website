"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormSelect } from "@/components/ui/FormSelect";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { stepMotion } from "@/lib/step-motion";
import { companyStats, engagementModels, siteConfig } from "@/lib/site-config";

const primaryNeeds = ["Web development", "AI engineering", "Both"] as const;

export function BookFormClient() {
  const formId = useId();
  const [step, setStep] = useState<"form" | "calendar" | "confirmed">("form");
  const [submitting, setSubmitting] = useState(false);
  const reduceMotion = useReducedMotion();

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setStep("calendar");
    }, 350);
  }

  const motionProps = reduceMotion ? {} : stepMotion;

  return (
    <Container className="grid max-w-6xl gap-10 py-16 md:py-20 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <AnimatePresence mode="wait">
          {step === "confirmed" && (
            <motion.div key="confirmed" {...motionProps}>
              <div className="surface-card p-8 text-center md:p-10">
                <CheckCircle2 className="mx-auto h-10 w-10 text-brand" />
                <h2 className="display-heading mt-4 text-2xl text-foreground">You are booked</h2>
                <p className="mt-2 text-sm text-muted">Check your email for confirmation.</p>
                <Button href="/" variant="secondary" className="mt-6">
                  Back home
                </Button>
              </div>
            </motion.div>
          )}
          {step === "calendar" && (
            <motion.div key="calendar" {...motionProps}>
              <div className="surface-card p-8 md:p-10">
                <h2 className="display-heading text-2xl text-foreground">Pick a time</h2>
                <p className="mt-2 text-sm text-muted">Scheduler embed goes here.</p>
                <div className="mt-6 flex min-h-[220px] items-center justify-center rounded-xl border border-dashed border-border bg-surface-muted/50">
                  <Button onClick={() => setStep("confirmed")} className="btn-emphasis">
                    Confirm (demo)
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
          {step === "form" && (
            <motion.div key="form" {...motionProps}>
              <div className="surface-card p-8 md:p-10">
                <h2 className="display-heading text-2xl text-foreground">Before the call</h2>
                <form
                  onSubmit={handleFormSubmit}
                  className={`mt-6 space-y-4${submitting ? " form-is-submitting" : ""}`}
                  aria-busy={submitting}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor={`${formId}-name`} className="mb-1.5 block text-xs font-medium text-muted">
                        Name
                      </label>
                      <input
                        id={`${formId}-name`}
                        name="name"
                        required
                        type="text"
                        autoComplete="name"
                        className="form-input"
                        disabled={submitting}
                      />
                    </div>
                    <div>
                      <label htmlFor={`${formId}-email`} className="mb-1.5 block text-xs font-medium text-muted">
                        Work email
                      </label>
                      <input
                        id={`${formId}-email`}
                        name="email"
                        required
                        type="email"
                        autoComplete="email"
                        className="form-input"
                        disabled={submitting}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor={`${formId}-need`} className="mb-1.5 block text-xs font-medium text-muted">
                      Primary need
                    </label>
                    <FormSelect
                      id={`${formId}-need`}
                      name="primaryNeed"
                      options={primaryNeeds}
                      required
                      disabled={submitting}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="btn-emphasis w-full"
                    disabled={submitting}
                    aria-busy={submitting}
                  >
                    {submitting ? "Sending…" : "Continue"}
                  </Button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <FadeIn delay={0.1} className="lg:col-span-2">
        <div className="surface-card sticky top-24 p-8">
          <h3 className="display-heading text-xl text-foreground">What to expect</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Listen first, scope second, quote third.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{engagementModels.intro}</p>
          <div className="mt-6 space-y-4 border-t border-border-light pt-6">
            {companyStats.slice(0, 2).map((stat) => (
              <div key={stat.title}>
                <p className="text-xl font-bold text-brand">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="text-sm text-muted">{stat.title}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-faint">{siteConfig.responseTime}</p>
        </div>
      </FadeIn>
    </Container>
  );
}
