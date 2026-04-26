import React, { useState } from "react";
import { ComponentCard } from "@/components/ui/component-card";

export interface ComponentVariant {
  title: string;
  category: string;
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
    // If activeSection is the category title, "All", or category-All, show everything
    const showAll = activeSection === title || activeSection === "All" || activeSection === `${title}-All`;
    
    // Find component that matches activeSection title
    const component = variants.find((c) => c.title === activeSection);
    
    if (showAll) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {variants.map((item) => (
                    <ComponentCard key={item.title} {...item} />
                ))}
            </div>
        )
    }

    // Otherwise, show the specific variant
    return component ? <ComponentCard {...component} /> : (
      <div className="p-12 border border-dashed border-border rounded-2xl text-center text-muted-foreground">
        Variant "{activeSection}" not found in {title}.
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
