import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        hover ? "surface-card p-6" : "rounded-2xl border border-border-light bg-surface-elevated p-6 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
