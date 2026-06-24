import { cn } from "@/lib/utils";

export function SectionHeader({
  title,
  description,
  label,
  align = "left",
  className,
}: {
  title: string;
  description?: string;
  label?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {label && <p className="section-label">{label}</p>}
      <h2 className={cn("section-heading", label && "mt-3")}>{title}</h2>
      {description && <p className="type-body mt-4 text-muted">{description}</p>}
    </div>
  );
}
