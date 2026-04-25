import React from "react";
import { INTRODUCTION_DATA } from "@/content/docs-content-data";
import { Copy, Code2, Package } from "lucide-react";

const IconMap: Record<string, any> = {
  Copy,
  Code2,
  Package
};

export function Introduction() {
  const { features, philosophy, credits } = INTRODUCTION_DATA;

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
