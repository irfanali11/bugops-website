import { cn } from "@/lib/utils";

function enterDelayClass(delay: number) {
  if (delay <= 0) return "";
  if (delay <= 0.06) return "motion-enter-delay-1";
  if (delay <= 0.11) return "motion-enter-delay-2";
  if (delay <= 0.16) return "motion-enter-delay-3";
  return "motion-enter-delay-4";
}

export function FadeIn({
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
    <div className={cn("motion-enter motion-gpu", enterDelayClass(delay), className)}>
      {children}
    </div>
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
      className={cn("motion-enter motion-gpu", enterDelayClass(delay), className)}
    >
      {children}
    </div>
  );
}

export function Stagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return <div className={cn("motion-stagger motion-gpu", className)}>{children}</div>;
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("motion-stagger-item motion-gpu", className)}>{children}</div>;
}
