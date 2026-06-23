"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FormSelect } from "@/components/ui/FormSelect";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { FadeIn, stepMotion } from "@/components/ui/FadeIn";
import { siteConfig, serviceInterests } from "@/lib/site-config";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion ? {} : stepMotion;
  const formId = useId();

  return (
    <section className="section-band-base py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <SectionAnchor id="contact" />
            <p className="section-label">Contact</p>
            <h2 className="section-heading mt-3">Get in touch</h2>
            <p className="type-body mt-4 max-w-md text-muted">
              Tell us about your project — web, AI, or both. We will respond with next steps and an honest
              assessment of fit.
            </p>
            <div className="mt-8 space-y-3 text-sm text-muted">
              <p>
                <span className="font-semibold text-foreground">Email</span>
                <br />
                <a href={`mailto:${siteConfig.email}`} className="text-link hover:text-brand">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <span className="font-semibold text-foreground">Phone</span>
                <br />
                <a href={`tel:${siteConfig.phone.replace(/\s|\(|\)|-/g, "")}`} className="text-link hover:text-brand">
                  {siteConfig.phone}
                </a>
              </p>
              <p className="text-faint">{siteConfig.responseTime}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="sent" {...motionProps}>
                  <div className="surface-card form-success p-8 text-muted" role="status" aria-live="polite">
                    Thank you — we received your message and will reply within one business day.
                  </div>
                </motion.div>
              ) : (
                <motion.div key="form" {...motionProps}>
                  <form
                    className={`surface-card space-y-4 p-6 md:p-8${submitting ? " form-is-submitting" : ""}`}
                    aria-labelledby={`${formId}-heading`}
                    aria-busy={submitting}
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitting(true);
                      window.setTimeout(() => {
                        setSubmitting(false);
                        setSent(true);
                      }, 400);
                    }}
                  >
                    <h3 id={`${formId}-heading`} className="sr-only">
                      Contact form
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor={`${formId}-name`} className="mb-1.5 block text-xs font-medium text-muted">
                          Name
                        </label>
                        <input
                          id={`${formId}-name`}
                          name="name"
                          required
                          autoComplete="name"
                          className="form-input"
                          disabled={submitting}
                        />
                      </div>
                      <div>
                        <label htmlFor={`${formId}-email`} className="mb-1.5 block text-xs font-medium text-muted">
                          Email
                        </label>
                        <input
                          id={`${formId}-email`}
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="form-input"
                          disabled={submitting}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor={`${formId}-service`} className="mb-1.5 block text-xs font-medium text-muted">
                        Service needed
                      </label>
                      <FormSelect
                        id={`${formId}-service`}
                        name="service"
                        options={serviceInterests}
                        disabled={submitting}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor={`${formId}-details`} className="mb-1.5 block text-xs font-medium text-muted">
                        Project details
                      </label>
                      <textarea
                        id={`${formId}-details`}
                        name="details"
                        required
                        rows={4}
                        className="form-input resize-none"
                        placeholder="Brief overview of your goals, timeline, and industry..."
                        disabled={submitting}
                      />
                    </div>
                    <Button type="submit" disabled={submitting} aria-busy={submitting}>
                      {submitting ? "Sending…" : "Send message"}
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
