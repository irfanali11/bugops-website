import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqAccordion({
  items,
  className,
}: {
  items: readonly { q: string; a: string }[];
  className?: string;
}) {
  return (
    <div className={cn("faq-accordion space-y-3", className)}>
      {items.map((item) => (
        <details key={item.q} className="faq-item surface-card group">
          <summary className="faq-summary">
            <span className="faq-question">{item.q}</span>
            <span className="faq-chevron" aria-hidden>
              <ChevronDown className="h-4 w-4" />
            </span>
          </summary>
          <div className="faq-answer-wrap">
            <p className="faq-answer">{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
