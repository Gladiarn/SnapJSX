import {
  CheckCircle2,
  Code2,
  Copy,
  GitBranch,
  Layers,
  Package,
  Server,
  Settings,
  ShieldCheck,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

const IconMap: Record<string, any> = {
  Copy,
  Code2,
  Package,
  ShieldCheck,
  Zap,
  Layers,
  GitBranch,
  Server,
  Settings,
  CheckCircle2,
};

export function Introduction() {
  const [data] = useState({
    title: "Introduction",
    features: [
      {
        title: "Universal Compatibility",
        description:
          "SnapJSX works with both React/JSX and pure HTML/CSS, giving you total freedom.",
        icon: "Copy",
      },
      {
        title: "Full Ownership",
        description:
          "The code lives in your project. Modify and customize freely.",
        icon: "Code2",
      },
      {
        title: "Zero Dependencies",
        description: "No package.json bloat. No version conflicts.",
        icon: "Package",
      },
    ],
    philosophy: {
      title: "Our Philosophy",
      description:
        "Modern component libraries often come with heavy dependencies and opinionated abstractions. SnapJSX takes a different approach:",
      points: [
        {
          title: "Full Ownership",
          description: "You own the code, not a package manager",
        },
        {
          title: "Zero Dependencies",
          description: "No security vulnerabilities from third parties",
        },
        {
          title: "Fully Customizable",
          description: "Modify without fighting framework abstractions",
        },
        {
          title: "Minimal Bundle",
          description: "Ship only what you use, nothing more",
        },
      ],
    },
    whySnapJSX: {
      title: "Why SnapJSX?",
      points: [
        {
          title: "Not a Library, But a Registry",
          description:
            "SnapJSX gives you the raw source. You aren't tied to a versioned package; you own the implementation pattern.",
          icon: "GitBranch",
        },
        {
          title: "Tailwind-Native",
          description:
            "Built exclusively on Tailwind CSS v4. No custom configurations—just pure, utility-first power.",
          icon: "Code2",
        },
        {
          title: "Accessibility Default",
          description:
            "We use headless primitives to ensure every component is robust, screen-reader friendly, and fully keyboard navigable.",
          icon: "ShieldCheck",
        },
      ],
    },
    environments: {
      title: "Supported Environments",
      description:
        "SnapJSX is platform-agnostic. It works anywhere Tailwind CSS works.",
      items: [
        "Next.js (App & Pages Router)",
        "Vite + React",
        "Remix",
        "Astro",
        "Laravel + Inertia",
      ],
    },
    principles: {
      title: "Engineering Principles",
      items: [
        {
          title: "Predictable",
          description:
            "Standard component architecture that follows React best practices.",
        },
        {
          title: "Tree-Shakeable",
          description:
            "Because you copy-paste the source, your bundle size is exactly the size of the components you use.",
        },
        {
          title: "Extensible",
          description:
            "Use hooks, context, or custom props without fighting restrictive APIs.",
        },
      ],
    },
    credits:
      "Inspired by shadcn/ui, Radix UI, and the amazing React community. Built with love for developers who value simplicity and control.",
  });

  const {
    features,
    philosophy,
    whySnapJSX,
    environments,
    principles,
    credits,
  } = data;

  return (
    <div className="w-full space-y-16">
      {/* Hero Features */}
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = IconMap[feature.icon];
          return (
            <div
              key={feature.title}
              className="rounded-2xl border border-border p-6 space-y-4 bg-card/50 hover:shadow-lg transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {Icon && <Icon className="h-6 w-6" />}
              </div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Philosophy Section */}
      <div className="rounded-3xl border border-border p-8 md:p-12 bg-accent/10 space-y-8">
        <h2 className="text-3xl font-black">{philosophy.title}</h2>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {philosophy.description}
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {philosophy.points.map((point) => (
            <div key={point.title} className="flex gap-4">
              <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-lg">{point.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why SnapJSX */}
      <section className="space-y-8">
        <h2 className="text-3xl font-black">{whySnapJSX.title}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {whySnapJSX.points.map((point) => {
            const Icon = IconMap[point.icon];
            return (
              <div
                key={point.title}
                className="p-6 rounded-2xl border border-border bg-card/30 space-y-2"
              >
                <div className="text-primary">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h4 className="font-semibold text-lg">{point.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Environments & Principles */}
      <section className="grid md:grid-cols-2 gap-12 pt-12 border-t border-border">
        <div className="space-y-6">
          <h3 className="text-2xl font-black">{environments.title}</h3>
          <p className="text-muted-foreground">{environments.description}</p>
          <div className="flex flex-wrap gap-2">
            {environments.items.map((i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full border border-border bg-muted text-xs font-bold"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-black">{principles.title}</h3>
          <div className="space-y-4">
            {principles.items.map((p) => (
              <div key={p.title} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="font-bold text-sm">{p.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-8 border-t border-border">
        <h3 className="text-xl font-bold mb-4">Credits</h3>
        <p className="text-muted-foreground italic text-sm">{credits}</p>
      </div>
    </div>
  );
}
