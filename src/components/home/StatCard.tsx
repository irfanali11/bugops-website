"use client";

import { StatCardBody, StatCounter } from "@/components/ui/StatCounter";
import { cn } from "@/lib/utils";

export function StatCard({
  value,
  suffix,
  title,
  description,
  accent,
}: {
  value: string;
  suffix: string;
  title: string;
  description: string;
  accent: "warm" | "bronze";
}) {
  return (
    <div
      className={cn(
        "stat-card p-8 md:p-9",
        accent === "warm" ? "stat-accent-warm" : "stat-accent-bronze"
      )}
    >
      <StatCounter value={value} suffix={suffix} />
      <StatCardBody title={title} description={description} />
    </div>
  );
}
