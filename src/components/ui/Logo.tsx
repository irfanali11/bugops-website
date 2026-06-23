import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { BugOpsMark } from "@/components/brand/BugOpsMark";

export function Logo({
  size = "md",
  showWordmark = true,
  showTagline = true,
  className,
}: {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  showTagline?: boolean;
  className?: string;
}) {
  const sizes = {
    sm: { mark: "h-9 w-9 rounded-lg", letters: "text-[11px]", text: "text-base", ops: "text-[10px]" },
    md: { mark: "h-10 w-10 rounded-xl", letters: "text-xs", text: "text-lg", ops: "text-xs" },
    lg: { mark: "h-12 w-12 rounded-xl", letters: "text-sm", text: "text-xl", ops: "text-sm" },
  };
  const s = sizes[size];

  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)}>
      <span className={cn("logo-mark relative flex shrink-0 overflow-hidden", s.mark)}>
        <BugOpsMark letterClassName={s.letters} />
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className={cn("font-bold tracking-tight text-foreground", s.text)}>
            Bug<span className="text-brand">Ops</span>
          </span>
          {showTagline && (
            <span className={cn("mt-1 font-medium tracking-wide text-faint", s.ops)}>{siteConfig.tagline}</span>
          )}
        </span>
      )}
    </Link>
  );
}
