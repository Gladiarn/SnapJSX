import React from "react";
import { Introduction } from "./sections/getting-started/introduction";
import { Installation } from "./sections/getting-started/installation";
import { QuickStart } from "./sections/getting-started/quick-start";
import { Customization } from "./sections/getting-started/customization";
import { GenericCategoryPage } from "./sections/generic-category-page";
import { RegistryHub } from "@/lib/registry-hub";
import { ComponentPlaceholder } from "./sections/component-placeholder";

interface DocsContentProps {
  activeSection: string;
}

export function DocsContent({ activeSection }: DocsContentProps) {
  // 1. Handle Static Pages
  switch (activeSection) {
    case "Introduction":
      return <Introduction />;
    case "Installation":
      return <Installation />;
    case "Quick Start":
      return <QuickStart />;
    case "Customization":
      return <Customization />;
    default:
      break;
  }

  // 2. Registry-Driven Category Routing
  // Identify the category from the slug (e.g., "Buttons-Primary Button" -> "Buttons")
  const category = activeSection.split("-")[0];
  
  if (RegistryHub[category]) {
    return (
      <GenericCategoryPage
        title={category}
        description={`Explore all ${category.toLowerCase()} components.`}
        activeSection={activeSection}
        variants={RegistryHub[category]}
      />
    );
  }

  return <ComponentPlaceholder title={activeSection} />;
}
