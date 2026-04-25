import React from "react";
import { COMPONENTS_DATA } from "@/content/components-data";
import { ComponentCard } from "@/components/ui/component-card";

// Simple preview components or mapping
const PreviewMap: Record<string, React.ReactNode> = {
  "Primary Button": (
    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium">
      Primary Button
    </button>
  ),
  "Secondary Button": (
    <button className="px-4 py-2 border border-border rounded-lg font-medium">
      Secondary Button
    </button>
  ),
  "Basic Card": (
    <div className="bg-card border border-border/50 rounded-xl p-4 w-40">
      <div className="h-2 w-12 bg-primary rounded mb-2" />
      <div className="h-4 w-full bg-muted rounded" />
    </div>
  ),
};

interface SectionOverviewProps {
  section: string;
}

export function SectionOverview({ section }: SectionOverviewProps) {
  const components = COMPONENTS_DATA.filter((c) => c.section === section);

  return (
    <div className="w-full space-y-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {components.map((component) => (
          <ComponentCard
            key={component.title}
            title={component.title}
            category={component.category}
            description={component.description}
            size={component.size}
            preview={PreviewMap[component.title] || <div className="p-4 bg-muted rounded">Preview coming soon</div>}
            codeJsx={component.codeJsx}
            codeHtml={component.codeHtml}
          />
        ))}
      </div>
      
      {components.length === 0 && (
        <div className="p-12 border border-dashed border-border rounded-2xl text-center text-muted-foreground">
          No components found for this section yet.
        </div>
      )}
    </div>
  );
}
