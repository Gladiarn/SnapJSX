"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Tab {
  id: string;
  label: string;
}

interface PillTabsProps {
  tabs: Tab[];
  activeTab?: string;
  onChange?: (id: string) => void;
  className?: string;
}

/**
 * Pill Tabs - Modern rounded navigation tabs with smooth pill animation.
 */
export function PillTabs({
  tabs,
  activeTab: controlledActiveTab,
  onChange,
  className = "",
}: PillTabsProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.id);
  const activeTab =
    controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;

  const handleTabClick = (id: string) => {
    if (controlledActiveTab === undefined) setInternalActiveTab(id);
    onChange?.(id);
  };

  return (
    <div
      className={`flex items-center gap-2 p-1 bg-muted/30 rounded-full w-fit ${className}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => handleTabClick(tab.id)}
          className={`
            relative px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest
            transition-colors duration-300
            ${activeTab === tab.id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}
          `}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="pill-background"
              className="absolute inset-0 bg-primary rounded-full -z-10 shadow-lg shadow-primary/20"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
