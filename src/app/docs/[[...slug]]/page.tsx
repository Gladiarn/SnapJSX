"use client";

import { useEffect, useState } from "react";
import { DocsContent } from "@/components/docs/docs-content";
import { Sidebar } from "@/components/docs/docs-sidebar";
import { SubNavbar } from "@/components/layout/sub-navbar";
import { useDocsStore } from "@/lib/store";

export default function DocPage({ params }: { params: { slug?: string[] } }) {
  const [activeSection, setActiveSection] = useState("Introduction");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { sidebarData } = useDocsStore();

  useEffect(() => {
    if (params.slug && params.slug.length > 0) {
      const lastSlug = params.slug[params.slug.length - 1];
      const formatted =
        lastSlug.charAt(0).toUpperCase() + lastSlug.slice(1).replace(/-/g, " ");
      setActiveSection(formatted);
    }
  }, [params.slug]);

  const findCategory = () => {
    for (const section of sidebarData) {
      if (
        section.items.some(
          (item: any) =>
            item.name === activeSection ||
            item.subItems?.includes(activeSection),
        )
      ) {
        return section.category || section.title;
      }
    }
    return "Documentation";
  };

  return (
    <div className="flex w-full min-h-screen bg-transparent">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
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
              {activeSection}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl font-medium">
              Everything you need to know about {activeSection} in SnapJSX.
              Copy, paste, and customize.
            </p>
          </header>

          <DocsContent activeSection={activeSection} />
        </div>
      </main>
    </div>
  );
}
