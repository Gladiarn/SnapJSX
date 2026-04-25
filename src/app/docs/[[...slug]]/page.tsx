"use client";

import { useState, useEffect } from "react";
import { DOCS_CONTENT } from "@/content/docs";
import { DOCS_SIDEBAR } from "@/content/docs-sidebar";
import { Sidebar } from "@/components/docs/docs-sidebar";
import { SubNavbar } from "@/components/layout/sub-navbar";

export default function DocPage({ params }: { params: { slug?: string[] } }) {
  const [activeSection, setActiveSection] = useState("Introduction");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (params.slug && params.slug.length > 0) {
      const lastSlug = params.slug[params.slug.length - 1];
      const formatted =
        lastSlug.charAt(0).toUpperCase() + lastSlug.slice(1).replace(/-/g, " ");
      setActiveSection(formatted);
    }
  }, [params.slug]);

  const findCategory = () => {
    for (const section of DOCS_SIDEBAR as any) {
      if (
        section.items.some(
          (item: any) =>
            item.name === activeSection ||
            (item.subItems && item.subItems.includes(activeSection)),
        )
      ) {
        return section.category || section.title;
      }
    }
    return "Documentation";
  };

  const renderContent = () => {
    return (
      <article className="max-w-4xl py-12 space-y-12">
        <header className="space-y-4 border-b border-border pb-8">
          <div className="text-primary font-medium text-sm tracking-wider uppercase tracking-widest">
            {findCategory()}
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground">
            {activeSection}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Everything you need to know about implementing the {activeSection}{" "}
            component in your SnapJSX projects.
          </p>
        </header>

        <section className="prose dark:prose-invert prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            SnapJSX components are designed to be lightweight and highly
            customizable. The {activeSection} component follows our core
            philosophy of providing clean, accessible, and dependency-free
            markup that you can drop directly into your codebase.
          </p>

          <div className="my-8 p-6 rounded-2xl border border-border bg-card/30 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Usage Note
            </h3>
            <p className="text-muted-foreground text-sm">
              Copy the code snippet below and adjust the CSS classes or
              structure to fit your design system requirements.
            </p>
          </div>
        </section>
      </article>
    );
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
        className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "md:ml-64" : "ml-0"}`}
      >
        <SubNavbar
          activeSection={activeSection}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <div className="px-8 md:px-12">{renderContent()}</div>
      </main>
    </div>
  );
}
