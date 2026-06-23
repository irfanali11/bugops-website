"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface TechnicalTabsProps {
  webLayer: string;
  aiLayer: string;
  dataLayer: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function TechnicalTabs({ webLayer, aiLayer, dataLayer }: TechnicalTabsProps) {
  const [activeTab, setActiveTab] = useState<"web" | "ai" | "data">("web");
  const reduceMotion = useReducedMotion();
  const baseId = useId();

  const tabs = [
    { id: "web" as const, label: "Web", content: webLayer },
    { id: "ai" as const, label: "AI", content: aiLayer },
    { id: "data" as const, label: "Data", content: dataLayer },
  ];

  const active = tabs.find((t) => t.id === activeTab);
  const panelId = `${baseId}-panel-${activeTab}`;

  return (
    <>
      <div className="mt-4 flex gap-1 rounded-xl bg-surface-muted p-1" role="tablist" aria-label="Technical architecture">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`${baseId}-tab-${tab.id}`}
            aria-selected={activeTab === tab.id}
            aria-controls={`${baseId}-panel-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ease-out ${
              activeTab === tab.id
                ? "bg-surface-elevated text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={activeTab}
          role="tabpanel"
          id={panelId}
          aria-labelledby={`${baseId}-tab-${activeTab}`}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease }}
          className="mt-4 text-sm leading-relaxed text-muted"
        >
          {active?.content}
        </motion.p>
      </AnimatePresence>
    </>
  );
}
