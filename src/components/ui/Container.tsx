import { cn } from "@/lib/utils";

const maxWidths = {
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "6xl": "max-w-6xl",
} as const;

export function Container({
  children,
  className,
  size = "6xl",
}: {
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof maxWidths;
}) {
  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", maxWidths[size], className)}>
      {children}
    </div>
  );
}
