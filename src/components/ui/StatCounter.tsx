"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function StatCounter({
  value,
  suffix,
}: {
  value: string;
  suffix: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  const target = parseInt(value, 10);
  const [display, setDisplay] = useState(reduceMotion ? target : 0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(target);
      return;
    }

    const el = ref.current;
    if (!el || hasAnimated.current) return;

    let frameId = 0;

    const runAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const duration = 1000;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * target));
        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -32px 0px" }
    );

    observer.observe(el);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      runAnimation();
      observer.disconnect();
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [target, reduceMotion]);

  return (
    <p
      ref={ref}
      className="text-4xl font-bold tabular-nums tracking-tight text-foreground md:text-[2.75rem]"
    >
      {display}
      <span className="text-brand">{suffix}</span>
    </p>
  );
}

export function StatCardBody({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h3 className="mt-5 text-base font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </>
  );
}
