"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import {
  Search,
  ArrowRight,
  Hash,
  FileCode,
  Blocks,
  X,
  Sparkles,
  BookOpen,
  Layout,
  Bell,
  Menu,
  BarChart,
  Command,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDocsStore } from "@/lib/store";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchItem {
  title: string;
  description: string;
  url: string;
  category: string;
  subcategory?: string;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { sidebarData } = useDocsStore();

  // Focus input on open
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Flatten searchable data
  const searchIndex = useMemo(() => {
    const index: SearchItem[] = [];

    // Static Main Pages
    index.push(
      { title: "Components", description: "Browse the full component library", url: "/docs/Core Components-Buttons", category: "General" },
      { title: "Blocks", description: "Pre-built page sections for your apps", url: "/blocks", category: "General" },
      { title: "Guide", description: "Developer tutorials and deep-dives", url: "/guide", category: "General" },
      { title: "Showcase", description: "Community inspiration and builds", url: "/showcase", category: "General" },
      { title: "Updates", description: "Latest version history and logs", url: "/updates", category: "General" }
    );

    // Sidebar Data (Recursive indexing)
    sidebarData.forEach((section) => {
      section.items.forEach((item) => {
        // Index the group/subcategory (e.g., Buttons, Spinners)
        index.push({
          title: item.name,
          description: `All ${item.name} components and variants`,
          url: `/docs/${section.title}-${item.name}`,
          category: section.title,
          subcategory: item.name,
        });

        // Index specific sub-items (e.g., Primary Button, Spinner)
        item.subItems.forEach((sub) => {
          if (sub === "All") return;
          index.push({
            title: sub,
            description: `${sub} implementation for ${item.name}`,
            url: `/docs/${section.title}-${item.name}-${sub}`,
            category: section.title,
            subcategory: item.name,
          });
        });
      });
    });

    return index;
  }, [sidebarData]);

  // Filtered and Grouped Results
  const filteredGroups = useMemo(() => {
    if (!query) return [];

    const searchLower = query.toLowerCase();
    const filtered = searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.category.toLowerCase().includes(searchLower) ||
        item.subcategory?.toLowerCase().includes(searchLower)
    );

    // Group by category
    const groups: Record<string, SearchItem[]> = {};
    filtered.forEach((item) => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });

    return Object.entries(groups).map(([name, items]) => ({
      name,
      items,
      icon: getCategoryIcon(name),
    }));
  }, [query, searchIndex]);

  // Flattened filtered items for keyboard navigation
  const flattenedFiltered = useMemo(() => 
    filteredGroups.flatMap(group => group.items), 
  [filteredGroups]);

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") onClose();
      
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % flattenedFiltered.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + flattenedFiltered.length) % flattenedFiltered.length);
      }
      if (e.key === "Enter" && flattenedFiltered[selectedIndex]) {
        e.preventDefault();
        router.push(flattenedFiltered[selectedIndex].url);
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, flattenedFiltered, selectedIndex, router]);

  if (!isOpen) return null;

  function getCategoryIcon(category: string) {
    switch (category) {
      case "Getting Started": return <Sparkles className="w-4 h-4" />;
      case "Core Components": return <Layout className="w-4 h-4" />;
      case "Loaders": return <Hash className="w-4 h-4" />;
      case "Notifications": return <Bell className="w-4 h-4" />;
      case "Navigation": return <Menu className="w-4 h-4" />;
      case "Data Display": return <BarChart className="w-4 h-4" />;
      case "General": return <Blocks className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-start justify-center p-4 pt-[10vh]">
        <div className="relative w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
          {/* Search Input */}
          <div className="flex items-center gap-3 px-6 py-5 border-b border-border/50">
            <Search className="w-5 h-5 text-primary flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search components, categories, and documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-muted-foreground font-medium"
            />
            <div className="flex items-center gap-2">
              <kbd className="hidden sm:inline-flex h-6 select-none items-center gap-1 rounded border border-border bg-muted px-2 font-mono text-[10px] font-bold text-muted-foreground opacity-100">
                ESC
              </kbd>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-accent transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Results Area */}
          <div className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20">
            {query === "" ? (
              <div className="py-8">
                <div className="px-6 py-2 flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">
                  <Sparkles className="w-3 h-3 text-primary" />
                  Quick Access
                </div>
                <div className="grid gap-1 px-3">
                  {[
                    { title: "Introduction", url: "/docs", icon: <BookOpen className="w-4 h-4" /> },
                    { title: "Browse Components", url: "/docs/Core Components-Buttons", icon: <Layout className="w-4 h-4" /> },
                    { title: "Developer Guide", url: "/guide", icon: <Blocks className="w-4 h-4" /> },
                    { title: "Project Roadmap", url: "/updates", icon: <Hash className="w-4 h-4" /> },
                  ].map((item) => (
                    <Link
                      key={item.url}
                      href={item.url}
                      onClick={onClose}
                      className="group flex items-center gap-4 px-3 py-4 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-accent border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-sm group-hover:text-primary transition-colors">
                          {item.title}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  ))}
                </div>
              </div>
            ) : filteredGroups.length > 0 ? (
              <div className="py-4">
                {filteredGroups.map((group) => (
                  <div key={group.name} className="mb-4 last:mb-0">
                    <div className="px-6 py-2 flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.2em] bg-primary/5">
                      {group.icon}
                      {group.name}
                    </div>
                    <div className="mt-1 px-2">
                      {group.items.map((item) => {
                        const isSelected = flattenedFiltered[selectedIndex]?.url === item.url;
                        return (
                          <Link
                            key={item.url}
                            href={item.url}
                            onClick={onClose}
                            className={`group flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                              isSelected 
                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                                : "hover:bg-accent"
                            }`}
                            onMouseEnter={() => setSelectedIndex(flattenedFiltered.indexOf(item))}
                          >
                            <div className="flex-1">
                              <div className={`font-bold text-sm ${isSelected ? "text-primary-foreground" : "text-foreground"}`}>
                                {item.title}
                              </div>
                              <div className={`text-xs ${isSelected ? "text-primary-foreground/70" : "text-muted-foreground"} line-clamp-1`}>
                                {item.subcategory ? `${item.subcategory} • ` : ""}{item.description}
                              </div>
                            </div>
                            <div className={`flex items-center gap-2 ${isSelected ? "opacity-100" : "opacity-0"} transition-opacity`}>
                              <span className="text-[10px] font-black uppercase tracking-widest">Select</span>
                              <Command className="w-3 h-3" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-muted mb-6">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">No results for "{query}"</h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  Try searching for a component name, category, or guide topic.
                </p>
              </div>
            )}
          </div>

          {/* Shortcut Hints */}
          <div className="hidden sm:flex items-center justify-center gap-8 py-4 border-t border-border/50 bg-muted/20 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <kbd className="rounded bg-background border border-border px-1.5 py-0.5 shadow-sm text-[9px]">↑↓</kbd>
              <span>Navigate</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="rounded bg-background border border-border px-1.5 py-0.5 shadow-sm text-[9px]">↵</kbd>
              <span>Select</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="rounded bg-background border border-border px-1.5 py-0.5 shadow-sm text-[9px]">ESC</kbd>
              <span>Close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
