import { cn } from "@/lib/utils";

/** Premium B/O lettermark — obsidian tile with prism accent slash */
export function BugOpsMark({
  className,
  letterClassName,
}: {
  className?: string;
  letterClassName?: string;
}) {
  return (
    <span
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-[inherit]",
        className
      )}
      aria-hidden
    >
      <span className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#111827] to-brand" />
      <span className="absolute inset-[1px] rounded-[inherit] bg-gradient-to-br from-[#111827] to-[#0B0F19]" />
      <span className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-cyan-400/20" />
      <span
        className={cn(
          "relative z-10 font-mono font-bold leading-none tracking-tighter text-surface-elevated",
          letterClassName ?? "text-sm"
        )}
      >
        B<span className="text-brand-soft">/</span>O
      </span>
    </span>
  );
}
