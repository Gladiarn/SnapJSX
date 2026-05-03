"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Tab {
  id: string;
  label: string;
}

interface SimpleTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

export function SimpleTabs({
  tabs,
  defaultTab,
  className = "",
}: SimpleTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div
      className={`flex items-center gap-1 p-1 bg-muted/50 rounded-2xl w-fit ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-colors
              ${isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}
            `}
          >
            {isActive && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-primary rounded-xl -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
