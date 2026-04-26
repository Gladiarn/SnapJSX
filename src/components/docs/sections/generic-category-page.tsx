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

export function GenericCategoryPage({ title, description, activeSection, variants }: GenericCategoryPageProps) {
  
  const renderContent = () => {
    // 1. Identify if we are in "All" mode
    const isAll = activeSection.endsWith("-All");
    
    // 2. Identify the target subcategory/component
    // Sidebar sends "Category-SubItem" (e.g., "Buttons-Primary Button")
    const activeSub = activeSection.includes("-") ? activeSection.split("-")[1] : activeSection;

    // 3. Filter logic
    const filteredVariants = isAll 
        ? variants 
        : variants.filter((c) => c.subcategory === activeSub || c.title === activeSub);
    
    if (filteredVariants.length > 0) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                {filteredVariants.map((item) => (
                    <ComponentCard key={item.title} {...item} />
                ))}
            </div>
        )
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
