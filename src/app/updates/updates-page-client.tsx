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
        version: "v0.1.21",
        date: "May 4, 2026",
        title: "Blocks: Pre-assembled Modules & Ecosystem Standardization",
        summary:
          "Launched the high-level Blocks registry and synchronized the global CTA architecture across all key pages for a unified premium experience.",
        category: "Features",
        icon: Box,
        details: [
          "Blocks Ecosystem: Engineered a new 'BlocksHub' registry architecture for high-level UI sections like SaaS heroes and marketing modules.",
          "SaaS Hero Launch: Implemented the first premium block module featuring responsive typography, dashboard mockups, and animated interactions.",
          "BlockCard Innovation: Developed a specialized card with immersive scaling, decorative grid backgrounds, and a full-screen live preview modal.",
          "CTA Standardization: Synchronized the 'Bottom CTA' card design across Components, Blocks, and Guides, ensuring perfect parity in background lighting, typography, and button physics.",
          "Layout Alignment: Unified search bar dimensions and category capsule padding site-wide to maintain a consistent 1.0 UX baseline.",
        ],
      },
      {
        version: "v0.1.20",
        date: "May 3, 2026",
        title: "Design: Visual Signature Headers & Atmospheric Refinement",
        summary:
          "Unified the premium design language across the entire ecosystem with unique layout signatures and sophisticated atmospheric lighting.",
        category: "UI/UX",
        icon: Layers,
        details: [
          "Signature Headers: Implemented distinct visual 'signatures' for every main page using variations of the primary gold accent line (vertical, asymmetrical, and centered patterns).",
          "Showcase Innovation: Engineered a unique asymmetrical split-header for the Showcase page to distinguish it as a creative hub while maintaining brand parity.",
          "Hero Evolution: Refined the landing page hero section for better balance, simplifying the typography and integrating a subtle version of the new skewed gold signature.",
          "Atmospheric Tuning: Toned down the background decorative light intensity site-wide (from 5% to 2% opacity) to achieve a more understated and professional premium feel.",
          "Layout Cohesion: Standardized H1 typographic scales and background decorative placements across Components, Guides, Showcase, and Updates.",
        ],
      },
      {
        version: "v0.1.19",
        date: "May 3, 2026",
        title: "Search: Intelligent Multi-Level Indexing",
        summary:
          "Upgraded the global Search Modal logic to provide 100% coverage across all documentation levels, including standalone guides and complex component trees.",
        category: "Search",
        icon: Terminal,
        details: [
          "Enhanced Indexer: Implemented dynamic discovery for two-level navigation items, ensuring 'Guide' and 'Getting Started' sections are now fully searchable.",
          "Scalable Architecture: Zero-hardcoding approach ensures that any new records in the global store are automatically indexed with correct kebab-case routing.",
          "Smart Fallbacks: Integrated default icon assignment for new categories to maintain visual integrity during rapid registry expansion.",
          "Performance: Optimized search memoization to maintain sub-millisecond response times even with an expanding content index.",
        ],
      },
      {
        version: "v0.1.18",
        date: "May 3, 2026",
        title: "Showcase: Interactive Gallery & Performance Engineering",
        summary:
          "Launched a high-impact Community Showcase featuring interactive video cards and optimized for extreme scroll performance.",
        category: "Features",
        icon: Sparkles,
        details: [
          "Showcase Architecture: Created a scalable data-driven manifest for community projects with support for video previews and deep-linking.",
          "Interactive Video Cards: Engineered custom 'ShowcaseCard' components that seamlessly transition from thumbnails to autoplaying videos on hover.",
          "Asymmetrical Layout: Implemented a unique, split-header layout signature that distinguishes the Showcase from other pages while maintaining brand consistency.",
          "Performance Optimization: Offloaded hover animations to GPU-accelerated CSS and implemented React.memo to eliminate scroll-time lag and redundant re-renders.",
          "Visual Depth: Integrated premium background decorative elements and gold-themed lighting to elevate the 'soul' of the showcase gallery.",
        ],
      },
      {
        version: "v0.1.17",
        date: "May 2, 2026",
        title: "Registry: Dynamic Components Gallery & Unified Navigation",
        summary:
          "Successfully transformed the Components page into a high-performance, registry-driven gallery with a scalable filtering and pagination system.",
        category: "Features",
        icon: Box,
        details: [
          "Components Registry: Implemented a fully dynamic gallery that pulls real-time data from the RegistryHub, including live previews and code snippets.",
          "Scalable Filtering: Engineered a hybrid category menu that displays 5 core capsules and automatically tucks additional categories into a 'More' dropdown to handle infinite growth.",
          "Unified Design: Achieved 100% typographic and layout consistency between the Components and Guides pages, including search bar dimensions and capsule padding.",
          "Pagination Engine: Integrated a standardized 9-item pagination system across all registry-driven pages to improve performance and scannability.",
          "Interaction Polish: Optimized the 'More' menu with absolute positioning and zero-shadow aesthetics for a cleaner glassmorphism feel.",
        ],
      },
      {
        version: "v0.1.16",
        date: "May 1, 2026",
        title: "UI/UX: Updates Page Performance & Aesthetic Refinement",
        summary:
          "Refined the Updates page for better performance, information density, and design consistency with the global design system.",
        category: "UI/UX",
        icon: Layers,
        details: [
          "Header Alignment: Restored centered header with typography strictly aligned to the Guides section.",
          "Performance Tuning: Implemented useMemo for log data and optimized animation models to eliminate layout lag.",
          "Layout Precision: Tightened vertical spacing between content cards and pagination.",
          "Aesthetic Balance: Scaled down the global CTA section to improve visual hierarchy and professional density.",
        ],
      },
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
    <main className="container mx-auto max-w-6xl px-4 py-24 relative">
      {/* Premium Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[400px] w-[600px] rounded-full bg-primary/2 blur-[120px] pointer-events-none" />

      {/* Header - Centered Dynamic Timeline Style */}
      <header className="mb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-widest mb-8">
          <Sparkles className="w-3 h-3" />
          Release History
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-none">
          Project <span className="text-primary">Logs.</span>
        </h1>
        <div className="flex flex-col items-center gap-4">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            Tracking the evolution of SnapJSX, from architectural shifts to
            feature releases and performance optimizations.
          </p>
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-primary/40 to-transparent mt-4" />
        </div>
      </header>

      {/* Updates List */}
      <div className="space-y-6">
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

      <div className="flex justify-center pt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePagination={handlePagination}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>

      {/* CTA Section */}
      <div className="mt-32 p-12 md:p-14 rounded-[3.5rem] bg-gradient-to-br from-primary/10 via-card/50 to-transparent border border-primary/10 text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-150" />

        <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tight">
          Stay in the <span className="text-primary">Loop.</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
          The SnapJSX ecosystem is evolving rapidly. Follow our progress as we
          redefine component registries.
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
