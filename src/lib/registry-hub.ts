import { PrimaryButton } from "@/components/ui/buttons/primary-button/primary-button";
import { Spinner } from "@/components/ui/loaders/spinner/spinner";
import { BouncingDots } from "@/components/ui/loaders/bouncing-dots/bouncing-dots";
import { Card } from "@/components/ui/core/card/card";
import { Sparkles } from "lucide-react";
import { ComponentVariant } from "@/components/docs/sections/generic-category-page";
import React from "react";

export const RegistryHub: Record<string, ComponentVariant[]> = {
  "Core Components": [
    {
      title: "Primary Button",
      category: "Buttons",
      subcategory: "Primary Button",
      description: "Main call-to-action button.",
      size: "0.45kb",
      preview: React.createElement(
        PrimaryButton,
        { icon: Sparkles },
        "Primary Button",
      ),
      codeJsx: `<PrimaryButton icon={Sparkles}>Primary Button</PrimaryButton>`,
      codeHtml: `<button class="...">...</button>`,
    },
    {
      title: "Primary Button Large",
      category: "Buttons",
      subcategory: "Primary Button",
      description: "Larger variant for high visibility.",
      size: "0.45kb",
      preview: React.createElement(
        PrimaryButton,
        { icon: Sparkles },
        "Large Button",
      ),
      codeJsx: `<PrimaryButton size="lg" icon={Sparkles}>Large Button</PrimaryButton>`,
      codeHtml: `<button class="px-8 py-4 ...">...</button>`,
    },
    {
      title: "Basic Card",
      category: "Core Components",
      subcategory: "Basic Card",
      description: "Standard container with hover elevation.",
      size: "0.35kb",
      preview: React.createElement(
        Card,
        { title: "Card Title", subtitle: "Subtitle" },
        "Card content",
      ),
      codeJsx: `<Card title="Title" subtitle="Subtitle">Content</Card>`,
      codeHtml: `<div class="bg-white border p-8 rounded-[2rem]">...</div>`,
    },
  ],
  Loaders: [
    {
      title: "Spinner",
      category: "Loaders",
      subcategory: "Spinner",
      description: "Smooth rotation loader.",
      size: "0.25kb",
      preview: React.createElement(Spinner, { size: "md" }),
      codeJsx: `<Spinner size="md" />`,
      codeHtml: `<div class="..."></div>`,
    },
    {
      title: "Bouncing Dots",
      category: "Loaders",
      subcategory: "Bouncing Dots",
      description: "Rhythmic bouncing dots.",
      size: "0.3kb",
      preview: React.createElement(BouncingDots, {}),
      codeJsx: `<BouncingDots />`,
      codeHtml: `<div class="..."></div>`,
    },
  ],
};
