import type { LucideIcon } from "lucide-react";
import { BookOpen, Cpu, Palette, ShieldCheck, Zap } from "lucide-react";

export interface GuideSection {
  title: string;
  content: string;
  code?: {
    language: string;
    value: string;
  };
}

export interface Guide {
  id: string;
  title: string;
  description: string;
  category: "Foundations" | "Architecture" | "Styling" | "Advanced";
  icon: LucideIcon;
  readTime: string;
  slug: string;
  featured?: boolean;
  sections?: GuideSection[];
}

export const GUIDES: Guide[] = [
  {
    id: "philosophy",
    title: "The SnapJSX Philosophy",
    description:
      "Understand the core principles of minimalist, zero-dependency component design.",
    category: "Foundations",
    icon: BookOpen,
    readTime: "5 min",
    slug: "philosophy",
    featured: true,
    sections: [
      {
        title: "The Problem with Traditional UI Libraries",
        content:
          "Most UI libraries today come as massive npm packages. While convenient, they often lead to 'dependency hell', version conflicts, and bloated bundles. You are forced to accept their abstractions, making customization a battle against the library itself.",
      },
      {
        title: "The SnapJSX Approach",
        content:
          "SnapJSX is not a library you install; it's a registry you copy from. We give you the raw JSX and Tailwind source code. This means you have zero runtime dependencies, full ownership of the code, and absolute freedom to customize.",
        code: {
          language: "tsx",
          value:
            "// Instead of importing from a package\nimport { Button } from 'snapjsx'; // ❌\n\n// You copy the source into your own components folder\nimport { Button } from '@/components/ui/button'; // ✅",
        },
      },
      {
        title: "Three Pillars of Design",
        content:
          "1. Zero Dependencies: No package.json bloat.\n2. Total Control: The source code is yours to modify.\n3. Performance First: No unnecessary abstractions or runtime overhead.",
      },
    ],
  },
  {
    id: "registry-deep-dive",
    title: "Registry-Driven Architecture",
    description:
      "Learn how the RegistryHub powers dynamic routing and documentation scale.",
    category: "Architecture",
    icon: Cpu,
    readTime: "8 min",
    slug: "registry-architecture",
    sections: [
      {
        title: "Centralized Source of Truth",
        content:
          "Everything in SnapJSX is driven by the RegistryHub. This centralized manifest maps technical metadata (titles, descriptions, code snippets) to the documentation UI. This architecture allows us to add new components in seconds without manually creating new pages.",
      },
      {
        title: "Dynamic Routing",
        content:
          "The documentation uses Next.js catch-all routes to parse segments and look up the corresponding registry entry. This ensures that the URL always matches the data structure perfectly.",
      },
    ],
  },
  {
    id: "customization-system",
    title: "Deep Customization",
    description:
      "Master the CSS variable system and Tailwind-first approach to theming.",
    category: "Styling",
    icon: Palette,
    readTime: "6 min",
    slug: "customization",
    sections: [
      {
        title: "Tailwind First",
        content:
          "SnapJSX is built on top of Tailwind CSS v4. Every component uses utility classes, which means you can change the entire look and feel just by editing the classes in the source code you've copied.",
      },
    ],
  },
  {
    id: "animation-patterns",
    title: "High-Performance Animations",
    description:
      "How we use Framer Motion and GPU-accelerated CSS for smooth interactions.",
    category: "Advanced",
    icon: Zap,
    readTime: "10 min",
    slug: "animations",
  },
  {
    id: "accessibility-first",
    title: "Accessibility Standards",
    description:
      "Our approach to ARIA roles, keyboard navigation, and semantic HTML.",
    category: "Foundations",
    icon: ShieldCheck,
    readTime: "7 min",
    slug: "accessibility",
  },
];
