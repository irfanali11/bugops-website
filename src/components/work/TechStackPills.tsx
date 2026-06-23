import { cn } from "@/lib/utils";

export function TechStackPills({
  items,
  limit,
  className,
}: {
  items: readonly string[];
  limit?: number;
  className?: string;
}) {
  if (items.length === 0) return null;

  const shown = limit != null && limit > 0 ? items.slice(0, limit) : items;
  const rest = limit != null && limit > 0 ? Math.max(0, items.length - limit) : 0;

  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {shown.map((tech) => (
        <span
          key={tech}
          className="rounded-md border border-border-light bg-surface-muted/60 px-2 py-0.5 font-mono text-[10px] text-muted sm:text-[11px]"
        >
          {tech}
        </span>
      ))}
      {rest > 0 && <span className="self-center px-1 text-[10px] text-faint">+{rest} more</span>}
    </div>
  );
}
