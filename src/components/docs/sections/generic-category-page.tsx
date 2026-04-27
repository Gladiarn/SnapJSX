import type React from "react";
import { ComponentCard } from "@/components/ui/component-card";

export interface ComponentVariant {
  title: string;
  category: string;
  subcategory: string;
  description: string;
  size: string;
  preview: React.ReactNode;
  codeJsx: string;
  codeHtml: string;
}

interface GenericCategoryPageProps {
  title: string;
  description: string;
  activeSection: string; // e.g. "core-components-buttons" or "core-components-buttons-primary-button"
  variants: ComponentVariant[];
}

export function GenericCategoryPage({
  title,
  description,
  activeSection,
  variants,
}: GenericCategoryPageProps) {
  const renderContent = () => {
    // e.g. activeSection: "core-components-buttons" -> ["core", "components", "buttons"]
    // we want to filter by the third part "buttons" if it exists, or show all
    const parts = activeSection.split("-");
    const filterTerm = parts.length > 2 ? parts[2] : null;
    const subFilterTerm = parts.length > 3 ? parts.slice(3).join("-") : null;

    // Helper to kebab-case a string
    const toKebab = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

    const filteredVariants = variants.filter((c) => {
      // If no filter term, show all
      if (!filterTerm) return true;
      
      // Match category/component name (e.g. "Buttons")
      if (toKebab(c.subcategory) !== filterTerm && toKebab(c.title) !== filterTerm) {
        return false;
      }
      
      // If we have a subcategory/variant name (e.g. "Primary Button")
      if (subFilterTerm) {
        return toKebab(c.title) === subFilterTerm;
      }
      
      return true;
    });

    if (filteredVariants.length > 0) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredVariants.map((item) => (
            <ComponentCard key={item.title} {...item} />
          ))}
        </div>
      );
    }

    return (
      <div className="p-12 border border-dashed border-border rounded-2xl text-center text-muted-foreground">
        No components found for "{activeSection}".
      </div>
    );
  };

  return (
    <div className="w-full space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-black tracking-tight">{title}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      {renderContent()}
    </div>
  );
}
