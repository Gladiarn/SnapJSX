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

export function DocsContent({ activeSection, slug }: DocsContentProps) {
  // 1. Handle Static Pages
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
      break;
  }

  // 2. Registry-Driven Dynamic Routing
  // slug is [title, category, sub?] or [title, "all"]
  const [titleSlug, categorySlug, ..._rest] = slug;

  // Find category in RegistryHub. Keys are like "Core Components".
  const categoryKey = Object.keys(RegistryHub).find(
    (key) => key.toLowerCase().replace(/\s+/g, "-") === titleSlug,
  );

  if (categoryKey && RegistryHub[categoryKey]) {
    // If route is /docs/{title}/all
    const _isAll = categorySlug === "all";

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
}
