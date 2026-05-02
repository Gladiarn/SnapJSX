import { Sparkles } from "lucide-react";
import React from "react";
import type { ComponentVariant } from "@/components/docs/sections/generic-category-page";
// We import the components only for the "preview" function, not the code snippet strings.
import { PrimaryButton } from "@/components/ui/buttons/primary-button/primary-button";
import { Card } from "@/components/ui/core/card/card";
import { BouncingDots } from "@/components/ui/loaders/bouncing-dots/bouncing-dots";
import { Spinner } from "@/components/ui/loaders/spinner/spinner";

export const RegistryHub: Record<string, ComponentVariant[]> = {
  "Core Components": [
    {
      title: "Primary Button",
      category: "Buttons",
      subcategory: "Primary-Button",
      description: "Main call-to-action button.",
      size: "0.45kb",
      preview: React.createElement(
        PrimaryButton,
        { icon: Sparkles },
        "Primary Button",
      ),
      codeJsx: `<button className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg">
  <Sparkles className="w-4 h-4" />
  Primary Button
</button>`,
      codeHtml: `<button class="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg">
  <svg class="w-4 h-4">...</svg>
  Primary Button
</button>`,
    },
    {
      title: "Basic Card",
      category: "Cards",
      subcategory: "Basic-Card",
      description: "Standard container with hover elevation.",
      size: "0.35kb",
      preview: React.createElement(
        Card,
        { title: "Card Title", subtitle: "Subtitle" },
        "Card content",
      ),
      codeJsx: `<div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm">
  <h3 className="text-xl font-bold mb-1">Card Title</h3>
  <p className="text-sm text-slate-500 mb-4">Subtitle</p>
  <p className="text-sm text-slate-600">Card content</p>
</div>`,
      codeHtml: `<div class="bg-white border border-gray-200 p-8 rounded-[2rem] shadow-sm">
  <h3 class="text-xl font-bold mb-1">Card Title</h3>
  <p class="text-sm text-gray-500 mb-4">Subtitle</p>
  <p class="text-sm text-gray-600">Card content</p>
</div>`,
    },
  ],

  Loaders: [
    {
      title: "Spinner",
      category: "Spinners",
      subcategory: "Spinner",
      description: "Smooth rotation loader.",
      size: "0.25kb",
      preview: React.createElement(Spinner, { size: "md" }),
      codeJsx: `<div className="h-8 w-8 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>`,
      codeHtml: `<div class="h-8 w-8 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>`,
    },    {
      title: "Spinnerss",
      category: "Spinda",
      subcategory: "Spinner",
      description: "Smooth rotation loader.",
      size: "0.25kb",
      preview: React.createElement(Spinner, { size: "md" }),
      codeJsx: `<div className="h-8 w-8 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>`,
      codeHtml: `<div class="h-8 w-8 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>`,
    },    {
      title: "Spinnersss",
      category: "Spindas",
      subcategory: "Spinner",
      description: "Smooth rotation loader.",
      size: "0.25kb",
      preview: React.createElement(Spinner, { size: "md" }),
      codeJsx: `<div className="h-8 w-8 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>`,
      codeHtml: `<div class="h-8 w-8 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>`,
    },
    {
      title: "Bouncing Dots",
      category: "Pulse",
      subcategory: "Bouncing-Dots",
      description: "Rhythmic bouncing dots.",
      size: "0.3kb",
      preview: React.createElement(BouncingDots, {}),
      codeJsx: `<div className="flex gap-1.5 items-center justify-center">
  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.3s]"></div>
  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.15s]"></div>
  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-bounce"></div>
</div>`,
      codeHtml: `<div class="flex gap-1.5 items-center justify-center">
  <div class="w-2.5 h-2.5 rounded-full bg-blue-600 animate-bounce" style="animation-delay: -0.3s;"></div>
  <div class="w-2.5 h-2.5 rounded-full bg-blue-600 animate-bounce" style="animation-delay: -0.15s;"></div>
  <div class="w-2.5 h-2.5 rounded-full bg-blue-600 animate-bounce"></div>
</div>`,
    },
  ],
};
