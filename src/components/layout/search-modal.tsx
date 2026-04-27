"use client";

import {
  ArrowRight,
  BarChart,
  Bell,
  Blocks,
  BookOpen,
  FileCode,
  Hash,
  Layout,
  Menu,
  Search,
  Settings,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDocsStore } from "@/lib/store";

interface SearchItem {
  title: string;
  description: string;
  url: string;
  sectionPath: string;
  category: string;
  subcategory?: string;
  icon?: React.ReactNode;
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "Getting Started":
      return <Sparkles className="w-4 h-4" />;
    case "Core Components":
      return <Layout className="w-4 h-4" />;
    case "Loaders":
      return <Hash className="w-4 h-4" />;
    case "Notifications":
      return <Bell className="w-4 h-4" />;
    case "Navigation":
      return <Menu className="w-4 h-4" />;
    case "Data Display":
      return <BarChart className="w-4 h-4" />;
    case "General":
      return <Blocks className="w-4 h-4" />;
    default:
      return <BookOpen className="w-4 h-4" />;
  }
}

const ResultItem = memo(
  ({
    item,
    isSelected,
    onSelect,
  }: {
    item: SearchItem;
    isSelected: boolean;
    onSelect: (section: string) => void;
  }) => (
    <button
      type="button"
      onClick={() => onSelect(item.sectionPath)}
      className={`group flex w-full items-center justify-start gap-4 px-6 py-3 border-l-2 cursor-pointer text-left ${
        isSelected
          ? "bg-accent/80 border-primary text-primary"
          : "bg-transparent border-transparent hover:bg-accent/30"
      }`}
    >
      <div className="flex-1 text-left">
        <div
          className={`font-medium text-sm ${isSelected ? "text-primary" : "text-foreground group-hover:text-primary"}`}
        >
          {item.title}
        </div>
        <div className="text-xs text-muted-foreground text-left line-clamp-1">
          {item.description}
        </div>
      </div>
      <ArrowRight
        className={`w-4 h-4 flex-shrink-0 text-primary/60 ${isSelected ? "opacity-100 translate-x-0" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2"}`}
      />
    </button>
  ),
);

ResultItem.displayName = "ResultItem";

export function SearchModal() {
  const isOpen = useDocsStore((state) => state.isSearchOpen);
  const setIsSearchOpen = useDocsStore((state) => state.setIsSearchOpen);
  const sidebarData = useDocsStore((state) => state.sidebarData);

  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onClose = useCallback(() => setIsSearchOpen(false), [setIsSearchOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const { filteredGroups, flattenedItems } = useMemo(() => {
    const index: SearchItem[] = [];
    sidebarData.forEach((section) => {
      section.items.forEach((item) => {
        item.subItems.forEach((sub) => {
          if (sub === "All") return;
          index.push({
            title: sub,
            description: `${sub} in ${item.name}`,
            url: `/docs/${section.title.replace(/\s+/g, "-")}-${item.name.replace(/\s+/g, "-")}`,
            sectionPath: `${section.title}-${sub}`,
            category: section.title,
            icon: <FileCode className="w-4 h-4" />,
          });
        });
      });
    });

    if (!query) return { filteredGroups: [], flattenedItems: [] };

    const searchLower = query.toLowerCase();
    const filtered = index.filter(
      (item) =>
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.category.toLowerCase().includes(searchLower),
    );

    const groupsMap: Record<string, SearchItem[]> = {};
    const flat: SearchItem[] = [];

    filtered.forEach((item) => {
      if (!groupsMap[item.category]) groupsMap[item.category] = [];
      groupsMap[item.category].push(item);
      flat.push(item);
    });

    const groups = Object.entries(groupsMap).map(([name, items]) => ({
      name,
      items,
      icon: getCategoryIcon(name),
    }));

    return { filteredGroups: groups, flattenedItems: flat };
  }, [query, sidebarData]);

  useEffect(() => {
    setSelectedIndex(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (flattenedItems.length || 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(
          (prev) =>
            (prev - 1 + (flattenedItems.length || 1)) %
            (flattenedItems.length || 1),
        );
      }
      if (e.key === "Enter" && flattenedItems[selectedIndex]) {
        e.preventDefault();
        router.push("/docs");
        window.dispatchEvent(
          new CustomEvent("sidebar-change", {
            detail: flattenedItems[selectedIndex].sectionPath,
          }),
        );
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, flattenedItems, selectedIndex, router]);

  if (!isOpen) return null;

  let runningIndex = 0;

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <button
        type="button"
        className="fixed inset-0 w-full h-full cursor-default bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-label="Close search"
      />
      <div className="relative min-h-screen flex items-start justify-center p-4 pt-[10vh]">
        <div className="relative w-full max-w-2xl bg-card border border-border/50 rounded-2xl shadow-[0_0_50px_-12px_rgba(255,215,0,0.1)] overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-border/50">
            <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search components, blocks, and documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
            />
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-accent transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto translate-z-0">
            {query === "" ? (
              <div className="py-8">
                <div className="px-6 py-2 flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  <Sparkles className="w-4 h-4" />
                  Quick Links
                </div>
                <div className="mt-2">
                  {[
                    {
                      title: "Introduction",
                      sectionPath: "Getting Started-Introduction",
                      icon: <BookOpen className="w-4 h-4" />,
                      isDocs: true,
                    },
                    {
                      title: "All Components",
                      url: "/components",
                      icon: <FileCode className="w-4 h-4" />,
                      isDocs: false,
                    },
                    {
                      title: "Blocks",
                      url: "/blocks",
                      icon: <Blocks className="w-4 h-4" />,
                      isDocs: false,
                    },
                    {
                      title: "Latest Updates",
                      url: "/updates",
                      icon: <Hash className="w-4 h-4" />,
                      isDocs: false,
                    },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.title}
                      onClick={() => {
                        if (item.isDocs) {
                          router.push("/docs");
                          window.dispatchEvent(
                            new CustomEvent("sidebar-change", {
                              detail: item.sectionPath,
                            }),
                          );
                        } else {
                          router.push(item.url || "/");
                        }
                        onClose();
                      }}
                      className="group flex w-full items-center justify-start gap-4 px-6 py-3 border-l-2 border-transparent cursor-pointer hover:bg-accent/30 hover:border-primary/30"
                    >
                      <div className="w-8 h-8 rounded-lg bg-accent border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary/30 group-hover:text-primary">
                        {item.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-medium text-sm text-foreground group-hover:text-primary">
                          {item.title}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2" />
                    </button>
                  ))}
                </div>
              </div>
            ) : filteredGroups.length > 0 ? (
              <div className="py-4">
                {filteredGroups.map((group) => (
                  <div key={group.name}>
                    <div className="px-6 py-2 flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-muted/30">
                      {group.icon}
                      {group.name}
                    </div>
                    <div className="mt-1">
                      {group.items.map((item, itemIdx) => {
                        const idx = runningIndex++;
                        return (
                          <ResultItem
                            key={`${item.sectionPath}-${itemIdx}`}
                            item={item}
                            isSelected={idx === selectedIndex}
                            onSelect={(section) => {
                              router.push("/docs");
                              window.dispatchEvent(
                                new CustomEvent("sidebar-change", {
                                  detail: section,
                                }),
                              );
                              onClose();
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-sm text-muted-foreground">
                  No results for "{query}"
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-6 py-4 border-t border-border/50 bg-muted/30 text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
            <div className="hidden sm:flex items-center gap-1.5">
              <kbd className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs">
                ↑↓
              </kbd>
              <span>to navigate</span>
            </div>
            <div className="flex items-center gap-1.5">
              <kbd className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs">
                ESC
              </kbd>
              <span>to close</span>
            </div>
            <div className="flex items-center gap-1.5">
              <kbd className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs">
                ↵
              </kbd>
              <span>to select</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
