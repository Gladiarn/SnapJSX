import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Code2,
  Cpu,
  Layout,
  Palette,
  Rocket,
  Settings,
  ShieldCheck,
  Zap,
} from "lucide-react";

export interface Guide {
  id: string;
  title: string;
  description: string;
  category: "Foundations" | "Architecture" | "Styling" | "Advanced";
  icon: LucideIcon;
  readTime: string;
  slug: string;
  featured?: boolean;
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
  {
    id: "layout-primitives",
    title: "Layout Primitives",
    description:
      "Using our core layout blocks to build complex dashboards in minutes.",
    category: "Architecture",
    icon: Layout,
    readTime: "5 min",
    slug: "layouts",
  },
  {
    id: "performance-optimization",
    title: "Optimizing for Production",
    description:
      "Best practices for code splitting and minimizing bundle size with SnapJSX.",
    category: "Advanced",
    icon: Rocket,
    readTime: "12 min",
    slug: "performance",
  },
  {
    id: "contributing-components",
    title: "Contributing UI Blocks",
    description:
      "Guidelines for building and registering your own components in the ecosystem.",
    category: "Foundations",
    icon: Code2,
    readTime: "9 min",
    slug: "contributing",
  },
  {
    id: "cli-future",
    title: "The Future: SnapJSX CLI",
    description:
      "A sneak peek into automated component installation and manifest tracking.",
    category: "Architecture",
    icon: Settings,
    readTime: "4 min",
    slug: "cli-roadmap",
  },
];
