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
import { useState } from "react";
import { Pagination } from "@/components/ui/pagination";

export function UpdatesPageClient() {
  const [updatesLog] = useState([
    {
      version: "v0.1.15",
      date: "April 30, 2026",
      title: "SEO: Visibility & Discovery Optimization",
      summary:
        "Engineered a comprehensive SEO framework to enhance search engine visibility, social sharing, and structured data discovery.",
      category: "SEO",
      icon: Zap,
      details: [
        "Global Metadata: Implemented a robust metadata architecture in the root layout, including OpenGraph and Twitter card configurations for consistent branding across social platforms.",
        "Dynamic Sitemap: Developed an automated sitemap generation engine that dynamically indexes the component registry and guide manifest.",
        "Page-Specific SEO: Refactored core pages to separate client and server logic, enabling unique, descriptive metadata exports for every section of the site.",
        "Structured Data: Integrated JSON-LD schemas (SoftwareApplication) to provide search engines with rich context about the SnapJSX ecosystem.",
        "Crawlability: Deployed a robots.txt configuration and optimized internal linking structures in the footer for improved search engine traversal.",
      ],
    },
    {
      version: "v0.1.14",
      date: "April 30, 2026",
      title: "Documentation: UI Refinement & Technical Scaling",
      summary:
        "Polished the documentation layout for guides and verified the system's scalability with comprehensive foundational content.",
      category: "Docs",
      icon: Layers,
      details: [
        "Layout Refinement: Implemented conditional header rendering to remove redundant titles on Guide pages, creating a cleaner, content-first reading experience.",
        "Navigation Streamlining: Removed the 'All' category from the Guide sidebar to focus the navigation on specific, high-value technical articles.",
        "Content Expansion: Successfully scaled the Guide manifest to include deep-dives into Architecture, Accessibility, and Performance, confirming the robustness of the data-driven rendering engine.",
        "Registry Synchronization: Ensured seamless routing between the global Search Modal and the newly expanded Guide sections.",
      ],
    },
    {
      version: "v0.1.13",
      date: "April 28, 2026",
      title: "Architecture: Dynamic Guide Content System",
      summary:
        "Engineered a scalable, data-driven system for rendering complex guide content within the documentation framework.",
      category: "Architecture",
      icon: Box,
      details: [
        "Content Model: Enhanced the Guides manifest to support multi-section content, including formatted text and syntax-highlighted code blocks.",
        "GenericArticlePage: Implemented a generic rendering engine for guides that includes automatic Table of Contents (TOC), sticky navigation, and scroll-sync IDs.",
        "Scalable Routing: Integrated Guides into the documentation catch-all routes, enabling dynamic path resolution (e.g., /docs/guides/philosophy) without manual file creation.",
        "Sidebar Store: Updated the global sidebar store to automatically index and display guides, ensuring a unified documentation experience.",
        "UX Refinement: Standardized guide links across the application to ensure seamless transitions between the main Guide page and deep-dive technical articles.",
      ],
    },
    {
      version: "v0.1.12",
      date: "April 28, 2026",
      title: "Content Expansion: Professional Developer Guides",
      summary:
        "Launched a comprehensive Guides system to master the SnapJSX architecture and design patterns.",
      category: "Content",
      icon: Terminal,
      details: [
        "Architecture: Implemented a scalable, data-driven 'Guides' system using a centralized content manifest (guides.ts).",
        "UI Design: Crafted a modern, non-empty 'Guide' page featuring featured content, categorical filtering, and search functionality.",
        "Modular Components: Created reusable 'GuideCard' and 'FeaturedGuide' components with gold-themed hover effects and Framer Motion animations.",
        "Categorization: Structured content into 'Foundations', 'Architecture', 'Styling', and 'Advanced' sections for intuitive learning paths.",
      ],
    },
    {
      version: "v0.1.11",
      date: "April 28, 2026",
      title: "UI/UX: Enhanced Navigation & Breadcrumbs",
      summary:
        "Refined navigation path clarity and improved search accessibility on mobile devices.",
      category: "UI/UX",
      icon: Zap,
      details: [
        "SubNavbar Breadcrumbs: Refactored to use semantic 'title' and 'subtitle' props derived from page state. This provides cleaner breadcrumb paths (e.g., 'Core Components / Primary Button') compared to slug-parsing, while dynamically hiding redundant labels.",
        "Mobile Search Integration: Added a dedicated search trigger button to the mobile navigation menu, ensuring search functionality is accessible on all device sizes.",
        "UX Consistency: Search trigger in mobile menu automatically handles UI state by closing the menu upon invocation.",
      ],
    },
    {
      version: "v0.1.10",
      date: "April 28, 2026",
      title: "UI/UX: Global Scrollbar Design",
      summary:
        "Standardized scrollbar appearance across the application to match the site's gold theme.",
      category: "UI/UX",
      icon: Box,
      details: [
        "Implemented custom thin scrollbar styles in globals.css using system variables.",
        "Ensured scrollbar track is transparent and the thumb matches the brand 'primary' color with a subtle hover effect.",
        "Maintained cross-browser compatibility with standard CSS scrollbar properties.",
      ],
    },
  ]);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("1");
  const itemsPerPage = 4;

  const totalPages = Math.ceil(updatesLog.length / itemsPerPage);
  const paginatedUpdates = updatesLog.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePagination = (page: number) => {
    setCurrentPage(page);
    setInputValue(page.toString());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleItem = (version: string) => {
    setOpenItems((prev) => ({ ...prev, [version]: !prev[version] }));
  };

  return (
    <main className="container mx-auto max-w-7xl px-4 py-24">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <header className="mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Changelog
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
        >
          What's <span className="text-primary">New.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          A chronicle of technical milestones, architectural evolutions, and the
          continuous pursuit of JSX perfection.
        </motion.p>
      </header>

      {/* Updates Grid/List */}
      <div className="space-y-8 mb-16">
        {paginatedUpdates.map((update, index) => {
          const Icon = update.icon || Zap;
          const isOpen = openItems[update.version];

          return (
            <motion.div
              key={update.version}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={`relative bg-card/40 backdrop-blur-sm border ${isOpen ? "border-primary/40 shadow-[0_0_40px_-15px_rgba(255,215,0,0.1)]" : "border-border/50"} rounded-[2.5rem] overflow-hidden transition-all duration-500`}
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-primary/5">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-primary font-mono font-black text-xl tracking-tight">
                            {update.version}
                          </span>
                          <div className="h-1 w-1 rounded-full bg-border" />
                          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest bg-muted/50 px-2 py-0.5 rounded-md">
                            {update.category || "Update"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                          <Calendar className="w-4 h-4 text-primary/60" />
                          {update.date}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleItem(update.version)}
                      className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                        isOpen
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                          : "bg-muted/50 text-foreground hover:bg-muted"
                      }`}
                    >
                      {isOpen ? "Close Logs" : "View Technical Logs"}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>

                  <div className="max-w-4xl">
                    <h3 className="text-2xl md:text-4xl font-black text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {update.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                      {update.summary}
                    </p>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-12 pt-12 border-t border-border/50">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {update.details.map((detail, idx) => (
                              <motion.div
                                key={detail}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex gap-4 p-5 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/20 transition-colors group/item"
                              >
                                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                                  <Zap className="w-3 h-3 fill-primary" />
                                </div>
                                <span className="text-sm font-medium leading-relaxed text-foreground/80">
                                  {detail}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePagination={handlePagination}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 p-16 rounded-[4rem] bg-gradient-to-br from-primary/10 via-card/50 to-transparent border border-primary/10 text-center relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-150" />

        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
          Stay in the <span className="text-primary">Loop.</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          The SnapJSX ecosystem is evolving rapidly. Follow our progress as we
          redefine component registries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            type="button"
            className="px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-primary/20 active:scale-95"
          >
            Follow on GitHub
          </button>
          <button
            type="button"
            className="px-10 py-4 bg-card border border-border rounded-2xl font-black uppercase tracking-widest hover:bg-muted transition-all active:scale-95"
          >
            Join Discord
          </button>
        </div>
      </motion.div>
    </main>
  );
}
