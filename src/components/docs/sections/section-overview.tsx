import React, { useState } from "react";
import { ComponentCard } from "@/components/ui/component-card";
import { PrimaryButton } from "@/components/ui/buttons/primary-button/primary-button";
import { Spinner } from "@/components/ui/loaders/spinner/spinner";
import { BouncingDots } from "@/components/ui/loaders/bouncing-dots/bouncing-dots";
import { Card } from "@/components/ui/core/card/card";
import { Sparkles } from "lucide-react";

interface ComponentData {
  title: string;
  category: string;
  section: string;
  size: string;
  description: string;
  codeJsx: string;
  codeHtml: string;
}

// Simple preview components or mapping
const PreviewMap: Record<string, React.ReactNode> = {
  "Primary Button": (
    <PrimaryButton icon={Sparkles}>Primary Button</PrimaryButton>
  ),
  "Spinner": <Spinner />,
  "Pulse Dots": <BouncingDots />,
  "Basic Card": (
    <Card title="Example" subtitle="Subheading" className="w-full">
      Card content goes here.
    </Card>
  ),
  "Secondary Button": (
    <button className="px-4 py-2 border border-border rounded-lg font-medium">
      Secondary Button
    </button>
  ),
};

interface SectionOverviewProps {
  section: string;
}

export function SectionOverview({ section }: SectionOverviewProps) {
  const [componentsData] = useState<ComponentData[]>([
    // Buttons
    {
      title: 'Primary Button',
      category: 'Button',
      section: 'Buttons',
      size: '0.45kb',
      description: 'Modern call-to-action button with Framer Motion animations.',
      codeJsx: `import { PrimaryButton } from "@/components/ui/buttons/primary-button/primary-button";
import { Sparkles } from "lucide-react";

export function Example() {
  return (
    <PrimaryButton icon={Sparkles} onClick={() => console.log("Clicked!")}>
      Get Started
    </PrimaryButton>
  );
}`,
      codeHtml: `<button class="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm bg-blue-600 text-white shadow-lg">
  <svg class="w-4 h-4">...</svg>
  Get Started
</button>`
    },
    {
      title: 'Secondary Button',
      category: 'Button',
      section: 'Buttons',
      size: '0.12kb',
      description: 'Subtle button for secondary actions.',
      codeJsx: `export function SecondaryButton() {
  return (
    <button className="px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors font-medium">
      Secondary Button
    </button>
  );
}`,
      codeHtml: `<button class="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors font-medium">
  Secondary Button
</button>`
    },
    // Cards
    {
      title: 'Basic Card',
      category: 'Card',
      section: 'Cards',
      size: '0.35kb',
      description: 'A premium container for grouping related information.',
      codeJsx: `import { Card } from "@/components/ui/core/card/card";\n\n<Card title="Title" subtitle="Subtitle">\n  Content\n</Card>`,
      codeHtml: `<div class="bg-card border border-border/50 rounded-[2rem] p-8 shadow-sm">...</div>`
    },
    // Loaders
    {
      title: 'Spinner',
      category: 'Loader',
      section: 'Spinners',
      size: '0.25kb',
      description: 'Smooth rotation loader built with Framer Motion.',
      codeJsx: `import { Spinner } from "@/components/ui/loaders/spinner/spinner";\n\n<Spinner size="md" />`,
      codeHtml: `<div class="animate-spin rounded-full h-8 w-8 border-3 border-primary border-t-transparent"></div>`
    },
    {
      title: 'Pulse Dots',
      category: 'Loader',
      section: 'Pulse',
      size: '0.3kb',
      description: 'Rhythmic bouncing dots for subtle loading states.',
      codeJsx: `import { BouncingDots } from "@/components/ui/loaders/bouncing-dots/bouncing-dots";\n\n<BouncingDots />`,
      codeHtml: `<div class="flex gap-1.5">...</div>`
    }
  ]);

  const components = componentsData.filter((c) => c.section === section);

  return (
    <div className="w-full space-y-8">
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
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
