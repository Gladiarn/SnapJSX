"use client";

import { Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { FeaturedGuide, GuideCard } from "@/components/ui/guide-card";
import { GUIDES } from "@/content/guides";

const CATEGORIES = [
  "All",
  "Foundations",
  "Architecture",
  "Styling",
  "Advanced",
] as const;

export default function GuidePage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<(typeof CATEGORIES)[number]>("All");

  const featuredGuide = useMemo(() => GUIDES.find((g) => g.featured), []);

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

  return (
    <main className="container mx-auto max-w-6xl px-4 py-24">
      <header className="mb-20 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-widest mb-6">
          <Sparkles className="w-3 h-3" />
          Guides & Tutorials
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
          Master <span className="text-primary">SnapJSX.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Deep-dives into the architecture, styling patterns, and best practices
          designed to help you build lightning-fast interfaces.
        </p>
      </header>

      {/* Featured Section */}
      {!query && activeCategory === "All" && featuredGuide && (
        <FeaturedGuide guide={featuredGuide} />
      )}

      {/* Filter Section */}
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

        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          <SlidersHorizontal className="w-4 h-4 text-muted-foreground mr-2 shrink-0" />
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Section */}
      {filteredGuides.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => (
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
