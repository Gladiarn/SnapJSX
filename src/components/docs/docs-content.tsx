import React from "react";
import { Introduction } from "./sections/getting-started/introduction";
import { Installation } from "./sections/getting-started/installation";
import { QuickStart } from "./sections/getting-started/quick-start";
import { Customization } from "./sections/getting-started/customization";
import { SectionOverview } from "./sections/section-overview";
import { ComponentPlaceholder } from "./sections/component-placeholder";

interface DocsContentProps {
  activeSection: string;
}

export function DocsContent({ activeSection }: DocsContentProps) {
  // Mapping of section names to components
  switch (activeSection) {
    case "Introduction":
      return <Introduction />;
    case "Installation":
      return <Installation />;
    case "Quick Start":
      return <QuickStart />;
    case "Customization":
      return <Customization />;
    
    // Core Components
    case "Buttons":
    case "Primary Button":
    case "Secondary Button":
    case "Outline Button":
    case "Ghost Button":
    case "Loading Button":
    case "Button with Icon":
      return <SectionOverview section="Buttons" />;
      
    case "Cards":
    case "Basic Card":
    case "Card with Header":
    case "Interactive Card":
    case "Stats Card":
      return <SectionOverview section="Cards" />;

    // Loaders
    case "Loaders":
    case "Spinners":
      return <SectionOverview section="Spinners" />;
    case "Progress":
      return <SectionOverview section="Progress" />;
    case "Skeleton":
      return <SectionOverview section="Skeleton" />;
    case "Pulse":
      return <SectionOverview section="Pulse" />;

    // Notifications
    case "Notifications":
    case "Toasts":
    case "Alerts":
    case "Badges":
    case "Banners":
      return <SectionOverview section="Notifications" />;
    
    // Catch-all placeholders for other major sections not yet in COMPONENTS_DATA
    case "Navigation":
    case "Forms":
    case "Data Display":
      return <SectionOverview section={activeSection} />;

    default:
      return <ComponentPlaceholder title={activeSection} />;
  }
}
