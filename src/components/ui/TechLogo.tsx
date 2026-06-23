import { resolveTechIcon } from "@/lib/custom-tech-icons";
import { cn } from "@/lib/utils";

export function TechLogo({
  iconSlug,
  title,
  className,
}: {
  iconSlug: string;
  title: string;
  className?: string;
}) {
  const icon = resolveTechIcon(iconSlug);

  if (!icon) {
    return (
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-lg bg-surface-muted text-xs font-bold text-muted",
          className
        )}
        aria-hidden
      >
        ?
      </span>
    );
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      className={cn("h-9 w-9 shrink-0", className)}
    >
      <title>{icon.title}</title>
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  );
}
