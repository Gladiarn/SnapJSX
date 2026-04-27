"use client";

import { use } from "react";
import { DocsContent } from "@/components/docs/docs-content";
import { Sidebar } from "@/components/docs/docs-sidebar";
import { SubNavbar } from "@/components/layout/sub-navbar";
import { useState } from "react";

export default function DocPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = use(params);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Derive activeSection from slug
  // The slug format is [category, name, sub?]
  const activeSection = slug ? slug.join("-") : "getting-started-introduction";

  const findCategory = () => {
    if (!slug) return "Getting Started";
    // Title is slug[0]
    return slug[0].replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="flex w-full min-h-screen bg-transparent">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <main
        className={`flex-1 min-w-0 transition-all duration-300 ${isSidebarOpen ? "md:ml-64" : "ml-0"}`}
      >
        <SubNavbar
          activeSection={activeSection}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <div className="w-full px-6 py-10 md:px-10 lg:px-16 space-y-12">
          <header className="space-y-4 pb-4">
            <div className="text-primary font-bold text-xs tracking-[0.2em] uppercase">
              {findCategory()}
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight text-foreground">
              {activeSection.split("-").pop()?.replace(/-/g, " ")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl font-medium">
              Everything you need to know about{" "}
              {activeSection.split("-").pop()?.replace(/-/g, " ")}{" "}
              in SnapJSX. Copy, paste, and customize.
            </p>
          </header>

          <DocsContent activeSection={activeSection} />
        </div>
      </main>
    </div>
  );
}
