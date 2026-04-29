"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Box,
  Calendar,
  ChevronDown,
  Layers,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Pagination } from "@/components/ui/pagination";

export function UpdatesPageClient() {
  const updatesLog = useMemo(
    () => [
      {
        version: "v0.1.15",
        date: "April 30, 2026",
        title: "SEO: Visibility & Discovery Optimization",
        summary:
          "Engineered a comprehensive SEO framework to enhance search engine visibility and discovery.",
        category: "SEO",
        icon: Zap,
        details: [
          "Global Metadata: Robust architecture in the root layout.",
          "Dynamic Sitemap: Automated indexing of registries.",
          "Structured Data: Integrated JSON-LD schemas.",
          "Crawlability: Optimized robots.txt and linking.",
        ],
      },
      {
        version: "v0.1.14",
        date: "April 30, 2026",
        title: "Documentation: UI Refinement",
        summary:
          "Polished the documentation layout and verified system scalability.",
        category: "Docs",
        icon: Layers,
        details: [
          "Layout Refinement: Content-first reading experience.",
          "Navigation Streamlining: Focused high-value articles.",
          "Content Expansion: Scaled Guide manifest.",
        ],
      },
      {
        version: "v0.1.13",
        date: "April 28, 2026",
        title: "Architecture: Dynamic Guide Content",
        summary: "Scalable system for rendering complex guide content.",
        category: "Architecture",
        icon: Box,
        details: [
          "Content Model: Multi-section content support.",
          "GenericArticlePage: Generic rendering engine.",
          "Scalable Routing: Catch-all routes integration.",
        ],
      },
      {
        version: "v0.1.12",
        date: "April 28, 2026",
        title: "Content Expansion: Professional Guides",
        summary:
          "Launched comprehensive Guides system for SnapJSX architecture.",
        category: "Content",
        icon: Terminal,
        details: [
          "Architecture: Scalable guides.ts manifest.",
          "UI Design: Modern Guide page with filtering.",
          "Modular Components: GuideCard and FeaturedGuide.",
        ],
      },
      {
        version: "v0.1.11",
        date: "April 28, 2026",
        title: "UI/UX: Enhanced Navigation",
        summary:
          "Refined navigation path clarity and improved search accessibility.",
        category: "UI/UX",
        icon: Zap,
        details: [
          "SubNavbar Breadcrumbs: Semantic title/subtitle props.",
          "Mobile Search: Dedicated trigger in mobile menu.",
        ],
      },
      {
        version: "v0.1.10",
        date: "April 28, 2026",
        title: "UI/UX: Global Scrollbar Design",
        summary: "Standardized scrollbar appearance across the application.",
        category: "UI/UX",
        icon: Box,
        details: [
          "Custom Styles: Thin scrollbar in globals.css.",
          "Brand Matching: Primary color thumb.",
        ],
      },
    ],
    [],
  );

  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("1");
  const itemsPerPage = 6;

  const totalPages = Math.ceil(updatesLog.length / itemsPerPage);
  const paginatedUpdates = useMemo(
    () =>
      updatesLog.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      ),
    [currentPage, updatesLog],
  );

  const handlePagination = (page: number) => {
    setCurrentPage(page);
    setInputValue(page.toString());
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const toggleItem = (version: string) => {
    setOpenItems((prev) => ({ ...prev, [version]: !prev[version] }));
  };

  return (
    <main className="container mx-auto max-w-6xl px-4 py-24">
      {/* Header - Matching Guide Page Style */}
      <header className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-widest mb-6">
          <Sparkles className="w-3 h-3" />
          Release History
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Latest <span className="text-primary">Updates</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Tracking the evolution of SnapJSX, from architectural shifts to
          feature releases and performance optimizations.
        </p>
      </header>

      {/* Updates List - Cleaner, Less Bulky */}
      <div className="space-y-4 mb-12">
        {paginatedUpdates.map((update) => {
          const Icon = update.icon || Zap;
          const isOpen = openItems[update.version];

          return (
            <div
              key={update.version}
              className={`group border border-border/50 rounded-2xl transition-all duration-200 ${
                isOpen
                  ? "bg-card/30 border-primary/20"
                  : "bg-transparent hover:border-primary/10"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(update.version)}
                className="w-full text-left p-6 md:px-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-primary font-mono font-bold text-sm">
                          {update.version}
                        </span>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest bg-muted/50 px-1.5 py-0.5 rounded">
                          {update.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {update.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {update.date}
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180 text-primary" : ""}`}
                    />
                  </div>
                </div>

                {!isOpen && (
                  <p className="mt-4 text-sm text-muted-foreground line-clamp-1 ml-0 md:ml-16">
                    {update.summary}
                  </p>
                )}
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-8 md:px-8 md:ml-16 border-t border-border/50 pt-6">
                      <p className="text-sm text-foreground/80 mb-6 font-medium leading-relaxed">
                        {update.summary}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                        {update.details.map((detail) => (
                          <div
                            key={detail}
                            className="flex gap-3 text-xs text-muted-foreground leading-relaxed"
                          >
                            <span className="text-primary mt-1 shrink-0">
                              ✦
                            </span>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center border-t border-border/50 pt-12">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePagination={handlePagination}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>

      {/* Simplified CTA */}
      <div className="mt-24 p-12 rounded-[2.5rem] bg-gradient-to-b from-primary/5 to-transparent border border-primary/10 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
          SnapJSX is evolving. Follow our GitHub for real-time progress.
        </p>
        <button
          type="button"
          className="px-8 py-3 bg-foreground text-background rounded-xl font-bold hover:scale-105 transition-transform active:scale-95 text-sm"
        >
          Follow on GitHub
        </button>
      </div>
    </main>
  );
}
