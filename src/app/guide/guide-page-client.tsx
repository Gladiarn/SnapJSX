"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { FeaturedGuide, GuideCard } from "@/components/ui/guide-card";
import { Pagination } from "@/components/ui/pagination";
import { GUIDES } from "@/content/guides";

export function GuidePageClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("1");
  const itemsPerPage = 9;
  const moreRef = useRef<HTMLDivElement>(null);

  const featuredGuide = useMemo(() => GUIDES.find((g) => g.featured), []);

  // Extract unique categories for filtering
  const categories = useMemo(() => {
    const cats = new Set(GUIDES.map((g) => g.category));
    return ["All", ...Array.from(cats)].sort();
  }, []);

  const visibleCategories = useMemo(() => categories.slice(0, 5), [categories]);
  const hiddenCategories = useMemo(() => categories.slice(5), [categories]);

  const filteredGuides = useMemo(() => {
    return GUIDES.filter((guide) => {
      const matchesQuery =
        guide.title.toLowerCase().includes(query.toLowerCase()) ||
        guide.description.toLowerCase().includes(query.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || guide.category === activeCategory;

      return matchesQuery && matchesCategory && !guide.featured;
    });
  }, [query, activeCategory]);

  const totalPages = Math.ceil(filteredGuides.length / itemsPerPage);
  const paginatedGuides = useMemo(() => {
    return filteredGuides.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage,
    );
  }, [filteredGuides, currentPage]);

  const handlePagination = (page: number) => {
    setCurrentPage(page);
    setInputValue(page.toString());
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // Reset to page 1 when query or category changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional reset on filter change
  useEffect(() => {
    setCurrentPage(1);
    setInputValue("1");
  }, [query, activeCategory]);

  // Handle click outside for "More" dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="container mx-auto max-w-6xl px-4 py-24">
      {/* Header - Centered Layout */}
      <header className="mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-widest mb-6">
          <Sparkles className="w-3 h-3" />
          Guides & Tutorials
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
          Master <span className="text-primary">SnapJSX.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Deep-dives into the architecture, styling patterns, and best practices
          designed to help you build lightning-fast interfaces.
        </p>
      </header>

      {/* Featured Section */}
      {!query && activeCategory === "All" && featuredGuide && (
        <FeaturedGuide guide={featuredGuide} />
      )}

      {/* Filter Section - Matching Components Page logic */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search guides..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-card/50 border border-border/50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <SlidersHorizontal className="w-4 h-4 text-muted-foreground mr-2 shrink-0" />
          <div className="flex items-center gap-2 flex-wrap md:flex-nowrap">
            {visibleCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setIsMoreOpen(false);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}

            {hiddenCategories.length > 0 && (
              <div className="relative" ref={moreRef}>
                <button
                  type="button"
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    hiddenCategories.includes(activeCategory)
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {hiddenCategories.includes(activeCategory)
                    ? activeCategory
                    : "More"}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${isMoreOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isMoreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-2xl p-2 z-50 overflow-hidden"
                    >
                      <div className="max-h-64 overflow-y-auto custom-scrollbar">
                        {hiddenCategories.map((category) => (
                          <button
                            key={category}
                            type="button"
                            onClick={() => {
                              setActiveCategory(category);
                              setIsMoreOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                              activeCategory === category
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Grid Section */}
      {paginatedGuides.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center border border-dashed border-border rounded-[2.5rem]">
          <p className="text-muted-foreground">
            No guides found matching your criteria.
          </p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePagination={handlePagination}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}

      {/* Bottom CTA */}
      <div className="mt-32 p-12 rounded-[3rem] bg-gradient-to-b from-primary/5 to-transparent border border-primary/10 text-center">
        <h2 className="text-2xl font-bold mb-4">Want to contribute?</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          SnapJSX is community-driven. If you've mastered a pattern, share it
          with the community.
        </p>
        <button
          type="button"
          className="px-8 py-3 bg-foreground text-background rounded-xl font-bold hover:scale-105 transition-transform active:scale-95"
        >
          Submit a Guide
        </button>
      </div>
    </main>
  );
}
