import { RegistryHub } from "@/lib/registry-hub";
import { ComponentPlaceholder } from "./sections/component-placeholder";
import { GenericCategoryPage } from "./sections/generic-category-page";
import { Customization } from "./sections/getting-started/customization";
import { Installation } from "./sections/getting-started/installation";
import { Introduction } from "./sections/getting-started/introduction";
import { QuickStart } from "./sections/getting-started/quick-start";

interface DocsContentProps {
  activeSection: string;
}

export function DocsContent({ activeSection }: DocsContentProps) {
  // 1. Handle Static Pages
  switch (activeSection) {
    case "Getting Started-Introduction":
    case "Introduction":
      return <Introduction />;
    case "Getting Started-Installation":
    case "Installation":
      return <Installation />;
    case "Getting Started-Quick Start":
    case "Quick Start":
      return <QuickStart />;
    case "Getting Started-Customization":
    case "Customization":
      return <Customization />;
    default:
      break;
  }

  // 2. Registry-Driven Dynamic Routing
  // Find which category matches any part of the activeSection path
  const parts = activeSection.split("-");
  const category = Object.keys(RegistryHub).find((key) => parts.includes(key));

  if (category && RegistryHub[category]) {
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
