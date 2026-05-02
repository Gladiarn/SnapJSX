"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { ComponentCard } from "@/components/ui/component-card";
import { Pagination } from "@/components/ui/pagination";
import { RegistryHub } from "@/lib/registry-hub";

export function ComponentsPageClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("1");
  const itemsPerPage = 4;
  const moreRef = useRef<HTMLDivElement>(null);

  // Flatten RegistryHub into a single list of components
  const allComponents = useMemo(() => {
    return Object.entries(RegistryHub).flatMap(([group, variants]) =>
      variants.map((v) => ({ ...v, group })),
    );
  }, []);

  // Extract unique categories for filtering
  const categories = useMemo(() => {
    const cats = new Set(allComponents.map((c) => c.category));
    return ["All", ...Array.from(cats)].sort();
  }, [allComponents]);

  const visibleCategories = useMemo(() => categories.slice(0, 5), [categories]);
  const hiddenCategories = useMemo(() => categories.slice(5), [categories]);

  const filteredComponents = useMemo(() => {
    return allComponents.filter((comp) => {
      const matchesQuery =
        comp.title.toLowerCase().includes(query.toLowerCase()) ||
        comp.description.toLowerCase().includes(query.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || comp.category === activeCategory;

      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory, allComponents]);

  const totalPages = Math.ceil(filteredComponents.length / itemsPerPage);
  const paginatedComponents = useMemo(() => {
    return filteredComponents.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage,
    );
  }, [filteredComponents, currentPage]);

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
      {/* Header - Centered Layout matching Guide/Updates Page pattern */}
      <header className="mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-widest mb-6">
          <Sparkles className="w-3 h-3" />
          Component Registry
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
          The <span className="text-primary">Library.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          High-performance, zero-dependency React components. Standardized
          architecture. Perfectly styled with Tailwind CSS.
        </p>
      </header>

      {/* Filter Section - Matching Guide Page Layout */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search components..."
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

      {/* Grid Section - Matching Spacing pattern */}
      {paginatedComponents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedComponents.map((comp) => (
            <ComponentCard
              key={`${comp.group}-${comp.title}`}
              title={comp.title}
              category={comp.category}
              description={comp.description}
              size={comp.size || "0.0kb"}
              preview={comp.preview}
              codeJsx={comp.codeJsx}
              codeHtml={comp.codeHtml}
            />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center border border-dashed border-border rounded-[2.5rem]">
          <p className="text-muted-foreground">
            No components found matching your criteria.
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
      <div className="mt-32 p-16 rounded-[4rem] bg-gradient-to-br from-primary/10 via-card/50 to-transparent border border-primary/10 text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-150" />
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
          Need a <span className="text-primary">Custom</span> Component?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          Can't find what you're looking for? Reach out or check our blocks for
          complex layouts.
        </p>
        <button
          type="button"
          className="px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-primary/20 active:scale-95"
        >
          Request Component
        </button>
      </div>
    </main>
  );
}
