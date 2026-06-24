import { PageHero } from "@/components/ui/PageHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { BookFormClient } from "@/app/book/BookFormClient";

const bookPills = ["30-minute call", "Scope first", "No sales script"] as const;

export default function BookPage() {
  return (
    <div>
      <PageHero
        label="Book a call"
        title="Tell us what you are building — we will map scope and fit."
        description="We ask about goals, timeline, and whether we are the right team. Fixed-scope MVP or ongoing build — mapped in discovery, not on a sales script."
        pills={bookPills}
        align="center"
      />

      <BookFormClient />

      <ServiceProcess compact />
    </div>
  );
}
