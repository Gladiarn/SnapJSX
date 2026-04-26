import React from "react";
import { Introduction } from "./sections/getting-started/introduction";
import { Installation } from "./sections/getting-started/installation";
import { QuickStart } from "./sections/getting-started/quick-start";
import { Customization } from "./sections/getting-started/customization";
import { GenericCategoryPage } from "./sections/generic-category-page";
import { PrimaryButton } from "@/components/ui/buttons/primary-button/primary-button";
import { Spinner } from "@/components/ui/loaders/spinner/spinner";
import { BouncingDots } from "@/components/ui/loaders/bouncing-dots/bouncing-dots";
import { Card } from "@/components/ui/core/card/card";
import { ComponentPlaceholder } from "./sections/component-placeholder";
import { Sparkles } from "lucide-react";

interface DocsContentProps {
  activeSection: string;
}

export function DocsContent({ activeSection }: DocsContentProps) {
  switch (activeSection) {
    // Getting Started
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
    
    // Core Components
    case "Core Components-Buttons":
    case "Buttons-All":
    case "Buttons-Primary Button":
      return (
        <GenericCategoryPage
          title="Buttons"
          description="SnapJSX button variants are built for clean integration."
          activeSection={activeSection}
          variants={[
            {
              title: "Buttons-Primary Button",
              category: "Buttons",
              description: "Main call-to-action button.",
              size: "0.45kb",
              preview: <PrimaryButton icon={Sparkles}>Primary Button</PrimaryButton>,
              codeJsx: `<PrimaryButton icon={Sparkles}>Primary Button</PrimaryButton>`,
              codeHtml: `<button class="...">...</button>`
            }
          ]}
        />
      );

    case "Core Components-Cards":
    case "Cards-All":
    case "Cards-Basic Card":
      return (
        <GenericCategoryPage
          title="Cards"
          description="Versatile containers for content display."
          activeSection={activeSection}
          variants={[
            {
              title: "Cards-Basic Card",
              category: "Cards",
              description: "Standard container with hover elevation.",
              size: "0.35kb",
              preview: <Card title="Card Title" subtitle="Subtitle">Card content.</Card>,
              codeJsx: `<Card title="Title" subtitle="Subtitle">Content</Card>`,
              codeHtml: `<div class="bg-white border p-8 rounded-[2rem]">...</div>`
            }
          ]}
        />
      );

    // Loaders
    case "Loaders-All":
    case "Loaders-Spinners":
    case "Loaders-Pulse":
      return (
        <GenericCategoryPage
          title="Loaders"
          description="Performant loading indicators."
          activeSection={activeSection}
          variants={[
            {
              title: "Loaders-Spinners-Spinner",
              category: "Loaders",
              description: "Smooth rotation loader.",
              size: "0.25kb",
              preview: <Spinner size="md" />,
              codeJsx: `<Spinner size="md" />`,
              codeHtml: `<div class="..."></div>`
            },
            {
              title: "Loaders-Pulse-Bouncing Dots",
              category: "Loaders",
              description: "Rhythmic bouncing dots.",
              size: "0.3kb",
              preview: <BouncingDots />,
              codeJsx: `<BouncingDots />`,
              codeHtml: `<div class="..."></div>`
            }
          ]}
        />
      );

    default:
      return <ComponentPlaceholder title={activeSection} />;
  }
}
