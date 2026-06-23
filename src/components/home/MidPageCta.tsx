import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AppLink } from "@/components/layout/NavLink";
import { FadeIn } from "@/components/ui/FadeIn";
import { engagementModels } from "@/lib/site-config";

export function MidPageCta({
  title = "Ready to scope your build?",
  description = engagementModels.intro,
  className = "cta-band scroll-mt-0 py-20 md:py-28",
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <FadeIn>
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="display-heading text-3xl text-foreground md:text-4xl lg:text-5xl">{title}</h2>
          <p className="type-body mx-auto mt-5 max-w-2xl text-muted">{description}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book" size="lg" className="btn-emphasis">
              <MessageCircle className="h-5 w-5" />
              Book discovery
            </Button>
            <AppLink href="/services" className="btn-secondary inline-flex items-center justify-center rounded-lg border border-border bg-surface-elevated px-8 py-3.5 text-base font-semibold text-foreground">
              Browse services
            </AppLink>
          </div>
          <p className="type-caption mt-4 text-faint">No guesswork from a contact form alone</p>
        </div>
      </FadeIn>
    </section>
  );
}
