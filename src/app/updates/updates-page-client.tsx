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
      {
        version: "v0.1.9",
        date: "April 28, 2026",
        title: "UI/UX: Breadcrumb Refactoring",
        summary:
          "Refined sub-navbar navigation path to use explicit page titles and subtitles.",
        category: "UI/UX",
        icon: Zap,
        details: [
          "Updated SubNavbar to accept 'title' and 'subtitle' props from the DocPage.",
          "Ensured breadcrumbs only display sub-titles that differ from the category title.",
        ],
      },
      {
        version: "v0.1.8",
        date: "April 28, 2026",
        title: "UI/UX: SubNavbar Breadcrumb Refinement",
        summary:
          "Refactored the sub-navigation breadcrumbs for better visual hierarchy.",
        category: "UI/UX",
        icon: Zap,
        details: [
          "Updated SubNavbar to parse activeSection slugs.",
          "Applied capitalization styling to breadcrumb segments.",
        ],
      },
      {
        version: "v0.1.7",
        date: "April 27, 2026",
        title: "Navigation UX: Persistent Sidebar Accordions",
        summary:
          "Enhanced sidebar navigation by ensuring category accordions persist.",
        category: "Navigation",
        icon: Layers,
        details: [
          "Updated sidebar logic to initialize 'open' state based on active path.",
          "Improved navigation flow by preventing category collapse during transitions.",
        ],
      },
      {
        version: "v0.1.6",
        date: "April 27, 2026",
        title: "Performance Optimization: Routing & Rendering",
        summary: "Optimized documentation navigation responsiveness.",
        category: "Performance",
        icon: Zap,
        details: [
          "Implemented React.memo and useMemo across DocsContent.",
          "Optimized registry lookup logic.",
          "Refactored variant filtering into a stable memoized hook.",
        ],
      },
      {
        version: "v0.1.5",
        date: "April 27, 2026",
        title: "Advanced Routing & Search Modal Refinement",
        summary:
          "Refined deep-linking architecture and streamlined navigation paths.",
        category: "Architecture",
        icon: Box,
        details: [
          "Implemented native support for '/docs/{title}/all' routes.",
          "Refactored Search Modal URL construction.",
          "Synchronized search results with primary routing engine.",
        ],
      },
      {
        version: "v0.1.4",
        date: "April 27, 2026",
        title: "Search Modal Implementation",
        summary:
          "Engineered a high-performance, registry-driven Command Palette.",
        category: "Features",
        icon: Terminal,
        details: [
          "Initial Implementation: Architected global Search Modal.",
          "Routing Engine: Custom event-based synchronization.",
          "Stability: Coupled search engine to central sidebar store.",
        ],
      },
      {
        version: "v0.1.3",
        date: "April 26, 2026",
        title: "Architecture Stabilization",
        summary:
          "Completed comprehensive refactor of documentation architecture.",
        category: "Architecture",
        icon: Box,
        details: [
          "Registry Hub: Consolidated UI block definitions.",
          "Generic Rendering: Replaced category-specific pages with GenericCategoryPage.",
          "Accessibility: Resolved all A11y warnings.",
        ],
      },
      {
        version: "v0.1.2",
        date: "April 26, 2026",
        title: "UI Performance & Routing Stability",
        summary:
          "Refined navigation routing and optimized component animations.",
        category: "Performance",
        icon: Zap,
        details: [
          "Replaced Framer Motion code viewer animations with CSS transitions.",
          "Strictly coupled sidebar navigation to component registry.",
        ],
      },
      {
        version: "v0.1.1",
        date: "April 26, 2026",
        title: "Registry-Driven Documentation",
        summary:
          "Refactored documentation architecture to be fully registry-driven.",
        category: "Docs",
        icon: Layers,
        details: [
          "Implemented GenericCategoryPage for scalable showcasing.",
          "Automated sidebar navigation with explicit 'All' tabs.",
        ],
      },
      {
        version: "v0.1.0",
        date: "April 25, 2026",
        title: "Initial Launch & Setup",
        summary: "SnapJSX foundation is laid with unified branding.",
        category: "Release",
        icon: Sparkles,
        details: [
          "Implemented responsive Navbar with search-first approach.",
          "Built dynamic, collapsible Documentation sidebar.",
        ],
      },
      {
        version: "v0.0.9",
        date: "April 20, 2026",
        title: "Core Design System",
        summary: "Basic layout primitives and landing page sections completed.",
        category: "Design",
        icon: Layers,
        details: [
          "Global dark mode configuration with next-themes.",
          "Setup Tailwind CSS typography and branding constants.",
        ],
      },
    ],
    [],
  );

  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("1");
  const itemsPerPage = 5;

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
      {/* Header - Centered Layout with Guide Page Typography */}
      <header className="mb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-widest mb-6">
          <Sparkles className="w-3 h-3" />
          Release History
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
          Latest <span className="text-primary">Updates</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Tracking the evolution of SnapJSX, from architectural shifts to
          feature releases and performance optimizations.
        </p>
      </header>

      {/* Updates List */}
      <div className="space-y-6 mb-16">
        {paginatedUpdates.map((update) => {
          const Icon = update.icon || Zap;
          const isOpen = openItems[update.version];

          return (
            <div
              key={update.version}
              className={`group border border-border/50 rounded-3xl transition-all duration-300 ${
                isOpen
                  ? "bg-card/40 border-primary/30 shadow-[0_0_40px_-15px_rgba(255,215,0,0.1)]"
                  : "bg-transparent hover:border-primary/20 hover:bg-card/20"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(update.version)}
                className="w-full text-left p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-105">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-primary font-mono font-black text-base tracking-tight">
                          {update.version}
                        </span>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest bg-muted/50 px-2 py-0.5 rounded-md">
                          {update.category}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight">
                        {update.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                      <Calendar className="w-4 h-4 text-primary/60" />
                      {update.date}
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-primary border-primary text-primary-foreground" : "group-hover:border-primary group-hover:text-primary"}`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {!isOpen && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-6 text-base text-muted-foreground line-clamp-2 md:ml-20 font-medium leading-relaxed"
                    >
                      {update.summary}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-10 md:ml-20 border-t border-border/50 pt-8">
                      <p className="text-lg text-foreground/90 mb-8 font-semibold leading-relaxed">
                        {update.summary}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                        {update.details.map((detail) => (
                          <div
                            key={detail}
                            className="flex gap-4 text-sm text-muted-foreground leading-relaxed font-medium group/item"
                          >
                            <span className="text-primary mt-1 shrink-0 transition-transform group-hover/item:scale-125">
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

      <div className="flex justify-center pt-2">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePagination={handlePagination}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>

      {/* CTA Section - Scaled Down for better balance */}
      <div className="mt-24 p-12 md:p-14 rounded-[3.5rem] bg-gradient-to-br from-primary/10 via-card/50 to-transparent border border-primary/10 text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-150" />

        <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tight">Stay in the <span className="text-primary">Loop.</span></h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
          The SnapJSX ecosystem is evolving rapidly. Follow our progress as we redefine component registries.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            type="button"
            className="px-8 py-3.5 bg-primary text-primary-foreground rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-primary/20 active:scale-95 text-xs"
          >
            Follow on GitHub
          </button>
          <button
            type="button"
            className="px-8 py-3.5 bg-card border border-border rounded-2xl font-black uppercase tracking-widest hover:bg-muted transition-all active:scale-95 text-xs"
          >
            Join Discord
          </button>
        </div>
      </div>

    </main>
  );
}
