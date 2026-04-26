import React from "react";
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
  activeSection: string;
  variants: ComponentVariant[];
}

/**
 * GenericCategoryPage - A registry-driven container for any UI category.
 */
export function GenericCategoryPage({ title, description, activeSection, variants }: GenericCategoryPageProps) {
  
  const renderContent = () => {
    // If activeSection is just the category title or ends with "-All", show everything
    const showAll = activeSection === title || activeSection.endsWith("-All");
    
    // Identify subcategory part (e.g., in "Buttons-Primary", subcategory is "Primary")
    const subcategory = activeSection.includes("-") ? activeSection.split("-")[1] : null;
    
    // Filter logic:
    // 1. If "All", show everything.
    // 2. If subcategory exists, filter by that.
    // 3. Match by title exactly (e.g., "Primary Button")
    // 4. Match if activeSection ends with the title (e.g., "Buttons-Primary Button")
    const filteredVariants = showAll 
        ? variants 
        : variants.filter((c) => 
            (subcategory && c.subcategory === subcategory) || 
            c.title === activeSection || 
            activeSection.endsWith(`-${c.title}`)
          );
    
    if (filteredVariants.length > 0) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                {filteredVariants.map((item) => (
                    <ComponentCard key={item.title} {...item} />
                ))}
            </div>
        )
    }

    // If nothing found
    return (
      <div className="p-12 border border-dashed border-border rounded-2xl text-center text-muted-foreground">
        No variants found for "{activeSection}" in {title}.
      </div>
    );
  };

  return (
    <div className="w-full space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-black tracking-tight">{title}</h2>
        <p className="text-lg text-muted-foreground">
          {description}
        </p>
      </div>
      
      {renderContent()}
    </div>
  );
}
