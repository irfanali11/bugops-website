"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMotionScrollPaused } from "@/hooks/useMotionScrollPaused";

const ease = [0.25, 0.1, 0.25, 1] as const;
const gpuTransition = { duration: 0.38, ease } as const;
const viewport = { once: true, amount: 0.08, margin: "0px 0px -24px 0px" } as const;

export const stepMotion = {
  initial: { opacity: 0, scale: 0.99, y: 6 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.99, y: -4 },
  transition: { duration: 0.32, ease },
} as const;

const motionGpuClass = "motion-gpu";

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 6,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  const scrollPaused = useMotionScrollPaused();

  if (reduce || scrollPaused) {
    return <div className={cn(motionGpuClass, className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ y, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={viewport}
      transition={{ ...gpuTransition, delay }}
      className={cn(motionGpuClass, className)}
    >
      {children}
    </motion.div>
  );
}

export function FadeInOnLoad({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <div
      className={cn("motion-enter motion-gpu", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.04,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const scrollPaused = useMotionScrollPaused();

  if (reduce || scrollPaused) {
    return <div className={cn(motionGpuClass, className)}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren: 0,
          },
        },
      }}
      className={cn(motionGpuClass, className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const scrollPaused = useMotionScrollPaused();

  if (reduce || scrollPaused) {
    return <div className={cn(motionGpuClass, className)}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { y: 8, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: gpuTransition,
        },
      }}
      className={cn(motionGpuClass, className)}
    >
      {children}
    </motion.div>
  );
}

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
  const scrollPaused = useMotionScrollPaused();

  if (reduce || scrollPaused) {
    return <div className={cn(motionGpuClass, className)}>{children}</div>;
  }

  return (
    <motion.div key={stepKey} {...stepMotion} className={cn(motionGpuClass, className)}>
      {children}
    </motion.div>
  );
}
