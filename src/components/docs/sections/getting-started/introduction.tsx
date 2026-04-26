import React, { useState } from "react";
import { Copy, Code2, Package, ShieldCheck, Zap, Layers, GitBranch, ArrowRight } from "lucide-react";

const IconMap: Record<string, any> = {
  Copy,
  Code2,
  Package,
  ShieldCheck,
  Zap,
  Layers,
  GitBranch,
};

export function Introduction() {
  const [data] = useState({
    title: "Introduction",
    features: [
      { title: "Copy & Paste", description: "Browse components, copy the code, paste into your project.", icon: "Copy" },
      { title: "Full Ownership", description: "The code lives in your project. Modify and customize freely.", icon: "Code2" },
      { title: "Zero Dependencies", description: "No package.json bloat. No version conflicts.", icon: "Package" },
    ],
    philosophy: {
      title: "Our Philosophy",
      points: [
        { title: "Design Integrity", description: "Built on Tailwind v4, ensuring style consistency without custom CSS files.", icon: "Palette" },
        { title: "Accessibility First", description: "Every component is built with WAI-ARIA patterns for screen readers and keyboard users.", icon: "ShieldCheck" },
        { title: "Performance Focused", description: "Tiny footprint. Zero runtime overhead. Just pure, functional JSX.", icon: "Zap" },
        { title: "Modular Architecture", description: "Registry-driven system that scales with your project.", icon: "Layers" },
      ],
    },
    whySnapJSX: {
      title: "Why SnapJSX?",
      points: [
        { title: "Not a Library, But a Registry", description: "SnapJSX gives you the raw source. You aren't tied to a versioned package; you own the implementation pattern.", icon: "GitBranch" },
        { title: "Tailwind-Native", description: "Built exclusively on Tailwind CSS v4. No custom configurations—just pure, utility-first power.", icon: "Code2" },
        { title: "Accessibility Default", description: "We use headless primitives to ensure every component is robust, screen-reader friendly, and fully keyboard navigable.", icon: "ShieldCheck" }
      ]
    },
    comparison: {
      title: "SnapJSX vs. Libraries",
      items: [
        { type: "Traditional Libraries", pros: "Easy setup", cons: "Bloated, rigid styling, version drift, security overhead" },
        { type: "SnapJSX", pros: "Full control, zero bloat, custom themes", cons: "Requires initial copy-paste" }
      ]
    }
  });

  return (
    <div className="w-full space-y-16">
      {/* Hero Features */}
      <div className="grid gap-6 md:grid-cols-3">
        {data.features.map((feature) => {
          const Icon = IconMap[feature.icon];
          return (
            <div key={feature.title} className="rounded-2xl border border-border p-6 space-y-4 bg-card/50 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {Icon && <Icon className="h-6 w-6" />}
              </div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          );
        })}
      </div>

      {/* Why Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-black tracking-tight">{data.whySnapJSX.title}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {data.whySnapJSX.points.map((point) => {
             const Icon = IconMap[point.icon];
             return (
              <div key={point.title} className="p-6 rounded-2xl border border-border bg-card/30 space-y-3">
                <div className="text-primary">{Icon && <Icon className="h-6 w-6" />}</div>
                <h4 className="font-bold">{point.title}</h4>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
             )
          })}
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="rounded-3xl border border-border p-8 md:p-12 bg-accent/10">
        <h2 className="text-2xl font-black mb-8">{data.comparison.title}</h2>
        <div className="grid gap-8 md:grid-cols-2">
            {data.comparison.items.map((item) => (
                <div key={item.type} className="space-y-4">
                    <h3 className="font-bold text-lg border-b border-border pb-2">{item.type}</h3>
                    <div className="grid gap-2">
                        {item.pros && <p className="text-sm text-green-500 font-medium">✓ Pros: {item.pros}</p>}
                        {item.cons && <p className="text-sm text-red-500 font-medium">✗ Cons: {item.cons}</p>}
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}
