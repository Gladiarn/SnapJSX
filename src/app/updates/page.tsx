"use client";

import { ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";
import { UPDATES_LOG } from "@/content/updates";

export default function UpdatesPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (version: string) => {
    setOpenItems((prev) => ({ ...prev, [version]: !prev[version] }));
  };

  return (
    <main className="container mx-auto max-w-6xl px-4 py-24">
      <header className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-widest mb-6">
          <Sparkles className="w-3 h-3" />
          Release History
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Development Log
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          Tracking the evolution of SnapJSX, from architectural shifts to
          feature releases.
        </p>
      </header>

      {/* Scrollable Timeline Container */}
      <div className="max-h-[800px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-primary/20">
        <div className="relative border-l-2 border-border ml-2 space-y-12">
          {UPDATES_LOG.map((update) => (
            <div key={update.version} className="relative pl-8">
              {/* Timeline Node */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-background bg-primary ring-2 ring-primary/20" />

              <div className="bg-card/50 rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-colors duration-200 will-change-transform">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary font-mono font-bold text-lg">
                    {update.version}
                  </span>
                  <span className="text-sm text-muted-foreground font-medium">
                    {update.date}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {update.title}
                </h3>
                <p className="text-muted-foreground mb-6">{update.summary}</p>

                {openItems[update.version] && (
                  <ul className="space-y-3 mb-6 border-t border-border/50 pt-6 animate-in slide-in-from-top-2">
                    {update.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex gap-3 text-sm text-foreground/80"
                      >
                        <span className="text-primary mt-1">✦</span> {detail}
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  type="button"
                  onClick={() => toggleItem(update.version)}
                  className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider hover:text-primary/80 transition-colors"
                >
                  {openItems[update.version]
                    ? "Hide technical logs"
                    : "Read full technical logs"}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${openItems[update.version] ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
