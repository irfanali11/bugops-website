"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stepMotion } from "@/lib/step-motion";

export { stepMotion };

export function StepSwap({
  stepKey,
  children,
  className,
}: {
  stepKey: string;
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div key={stepKey} {...stepMotion} className={className}>
      {children}
    </motion.div>
  );
}
