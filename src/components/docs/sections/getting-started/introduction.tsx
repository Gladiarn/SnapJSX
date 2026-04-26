import React, { useState } from "react";
import { Copy, Code2, Package } from "lucide-react";

const IconMap: Record<string, any> = {
  Copy,
  Code2,
  Package
};

export function Introduction() {
  const [data] = useState({
    title: "Introduction",
    description: "SnapJSX is a collection of beautiful, accessible, and production-ready React components built with Tailwind CSS. No npm packages, no dependencies—just pure JSX you can copy and paste into your project.",
    features: [
      {
        title: "Copy & Paste",
        description: "Browse components, copy the code, paste into your project. That's it.",
        icon: "Copy"
      },
      {
        title: "Full Ownership",
        description: "The code lives in your project. Modify and customize however you want.",
        icon: "Code2"
      },
      {
        title: "Zero Dependencies",
        description: "No package.json bloat. No version conflicts. No security vulnerabilities.",
        icon: "Package"
      }
    ],
    philosophy: {
      title: "Philosophy",
      description: "Modern component libraries often come with heavy dependencies and opinionated abstractions. SnapJSX takes a different approach:",
      points: [
        {
          title: "Full Ownership",
          description: "You own the code, not a package manager"
        },
        {
          title: "Zero Dependencies",
          description: "No security vulnerabilities from third parties"
        },
        {
          title: "Fully Customizable",
          description: "Modify without fighting framework abstractions"
        },
        {
          title: "Minimal Bundle",
          description: "Ship only what you use, nothing more"
        }
      ]
    },
    credits: "Inspired by shadcn/ui, Radix UI, and the amazing React community. Built with love for developers who value simplicity and control."
  });

  const { features, philosophy, credits } = data;

  return (
    <div className="w-full space-y-12">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = IconMap[feature.icon];
          return (
            <div key={feature.title} className="rounded-2xl border border-border p-6 space-y-4 bg-card/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {Icon && <Icon className="h-6 w-6" />}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-3xl border border-border p-8 md:p-12 bg-accent/20 space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">{philosophy.title}</h2>
          <p className="text-lg text-muted-foreground">
            {philosophy.description}
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {philosophy.points.map((point) => (
            <div key={point.title} className="flex gap-4">
              <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-lg">{point.title}</h4>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 border-t border-border">
        <h3 className="text-xl font-bold mb-4">Credits</h3>
        <p className="text-muted-foreground italic">
          {credits}
        </p>
      </div>
    </div>
  );
}
