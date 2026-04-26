"use client";

import { ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";

export default function UpdatesPage() {
  const [updatesLog] = useState([
    {
      version: "v0.1.0",
      date: "April 25, 2026",
      title: "Initial Launch & Component Library Setup",
      summary:
        "SnapJSX foundation is laid. Components grouped, documentation system scaffolded, and branding unified.",
      details: [
        "Implemented responsive Navbar with a search-first approach.",
        "Established centralized 'landing-grid' background pattern.",
        "Built a dynamic, collapsible Documentation sidebar following a structured registry pattern.",
        "Integrated Framer Motion for smooth UI transitions.",
        "Created a robust directory structure for landing page, layout, and documentation components.",
      ],
    },
    {
      version: "v0.0.9",
      date: "April 20, 2026",
      title: "Core Design System Implementation",
      summary: "Basic layout primitives and landing page sections completed.",
      details: [
        "Global dark mode configuration with next-themes.",
        "Setup Tailwind CSS typography and branding constants.",
        "Developed Hero, Stats, and How-It-Works sections.",
        "Introduced consistent styling using glass-morphism aesthetic.",
      ],
    },
    {
      version: "v0.0.8",
      date: "April 15, 2026",
      title: "Refined Navigation",
      summary: "Improved mobile menu and navigation responsiveness.",
      details: [
        "Added mobile drawer.",
        "Optimized search bar.",
        "Improved active link state.",
      ],
    },
    {
      version: "v0.0.7",
      date: "April 10, 2026",
      title: "Theme Polishing",
      summary: "Enhanced color palette and theme toggle animations.",
      details: ["Smoother theme transitions.", "Improved contrast ratios."],
    },
    {
      version: "v0.0.6",
      date: "April 5, 2026",
      title: "Documentation Framework",
      summary: "Set up dynamic doc routing and sidebar.",
      details: ["Implemented catch-all routing.", "Added sidebar resizing."],
    },
    {
      version: "v0.0.5",
      date: "March 30, 2026",
      title: "Component Registry",
      summary: "Started component registry infrastructure.",
      details: ["Refactored API route handlers.", "Created component-service."],
    },
    {
      version: "v0.0.4",
      date: "March 25, 2026",
      title: "Initial Styling",
      summary: "Standardized Tailwind setup.",
      details: ["Configured PostCSS.", "Added global CSS variables."],
    },
    {
      version: "v0.0.3",
      date: "March 20, 2026",
      title: "Project Bootstrapped",
      summary: "Initialized the Next.js project.",
      details: ["Project scaffolded.", "TypeScript enabled."],
    },
  ]);
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
          {updatesLog.map((update) => (
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
