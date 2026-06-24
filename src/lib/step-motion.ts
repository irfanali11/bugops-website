export const stepMotion = {
  initial: { opacity: 0, scale: 0.99, y: 6 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.99, y: -4 },
  transition: { duration: 0.32, ease: [0.25, 0.1, 0.25, 1] as const },
} as const;
