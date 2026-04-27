import { memo, useMemo } from "react";
import { RegistryHub } from "@/lib/registry-hub";
import { ComponentPlaceholder } from "./sections/component-placeholder";
import { GenericCategoryPage } from "./sections/generic-category-page";
import { Customization } from "./sections/getting-started/customization";
import { Installation } from "./sections/getting-started/installation";
import { Introduction } from "./sections/getting-started/introduction";
import { QuickStart } from "./sections/getting-started/quick-start";

interface DocsContentProps {
  activeSection: string;
  slug: string[];
}

export const DocsContent = memo(function DocsContent({
  activeSection,
  slug,
}: DocsContentProps) {
  // 1. Handle Static Pages
  const staticContent = useMemo(() => {
    switch (activeSection) {
      case "getting-started-introduction":
        return <Introduction />;
      case "getting-started-installation":
        return <Installation />;
      case "getting-started-quick-start":
        return <QuickStart />;
      case "getting-started-customization":
        return <Customization />;
      default:
        return null;
    }
  }, [activeSection]);

  if (staticContent) return staticContent;

  // 2. Registry-Driven Dynamic Routing
  const [titleSlug, categorySlug, ..._rest] = slug;

  const categoryKey = useMemo(() => {
    return Object.keys(RegistryHub).find(
      (key) => key.toLowerCase().replace(/\s+/g, "-") === titleSlug,
    );
  }, [titleSlug]);

  if (categoryKey && RegistryHub[categoryKey]) {
    return (
      <GenericCategoryPage
        title={categoryKey}
        description={`Explore all ${categoryKey.toLowerCase()} components.`}
        activeSection={activeSection}
        slug={slug}
        variants={RegistryHub[categoryKey]}
      />
    );
  }

  return <ComponentPlaceholder title={activeSection} />;
});
