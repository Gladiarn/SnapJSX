"use client";

import { ComponentCard } from "@/components/ui/component-card";

const FAMOUS_COMPONENTS = [
  {
    title: "Glass Morphism Card",
    category: "UI",
    description: "Frosted glass effect with sleek borders.",
    size: "2.4kb",
    preview: (
      <div className="h-24 w-40 rounded-lg bg-background/50 border border-border shadow-lg backdrop-blur-md flex items-center justify-center">
        <div className="h-8 w-8 rounded-full bg-primary/20 animate-pulse" />
      </div>
    ),
    codeJsx: `function GlassCard() { return <div className="backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/20">...</div> }`,
    codeHtml: `<div class="backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/20">...</div>`,
  },
  {
    title: "Infinite Scroll List",
    category: "LOGIC",
    description: "Smooth, virtualized list for heavy data.",
    size: "4.1kb",
    preview: <div className="h-16 w-32 bg-muted/50 rounded-lg" />,
    codeJsx: `function ScrollList() { return <ul>...</ul> }`,
    codeHtml: `<ul>...</ul>`,
  },
  {
    title: "Radial Context Menu",
    category: "UX",
    description: "Modern circular menu for quick actions.",
    size: "3.2kb",
    preview: <div className="h-16 w-16 rounded-full bg-primary/20" />,
    codeJsx: `function RadialMenu() { return <div className="rounded-full">...</div> }`,
    codeHtml: `<div class="rounded-full">...</div>`,
  },
];

export function FamousComponents() {
  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Famous Components
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most loved snippets, optimized for performance and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {FAMOUS_COMPONENTS.map((comp) => (
            <ComponentCard key={comp.title} {...comp} />
          ))}
        </div>
      </div>
    </section>
  );
}
