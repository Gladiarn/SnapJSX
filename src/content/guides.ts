import { 
  BookOpen, 
  Code2, 
  Cpu, 
  Layers, 
  Layout, 
  Palette, 
  Rocket, 
  Settings, 
  ShieldCheck, 
  Zap 
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
    description: "Understand the core principles of minimalist, zero-dependency component design.",
    category: "Foundations",
    icon: BookOpen,
    readTime: "5 min",
    slug: "philosophy",
    featured: true,
    sections: [
      {
        title: "The Problem with Traditional UI Libraries",
        content: "Most UI libraries today come as massive npm packages. While convenient, they often lead to 'dependency hell', version conflicts, and bloated bundles. You are forced to accept their abstractions, making customization a battle against the library itself.",
      },
      {
        title: "The SnapJSX Approach",
        content: "SnapJSX is not a library you install; it's a registry you copy from. We give you the raw JSX and Tailwind source code. This means you have zero runtime dependencies, full ownership of the code, and absolute freedom to customize.",
        code: {
          language: "tsx",
          value: "// Instead of importing from a package\nimport { Button } from 'snapjsx'; // ❌\n\n// You copy the source into your own components folder\nimport { Button } from '@/components/ui/button'; // ✅",
        }
      },
      {
        title: "Three Pillars of Design",
        content: "1. Zero Dependencies: No package.json bloat.\n2. Total Control: The source code is yours to modify.\n3. Performance First: No unnecessary abstractions or runtime overhead.",
      }
    ]
  },
  {
    id: "registry-architecture",
    title: "Registry-Driven Architecture",
    description: "Learn how the RegistryHub powers dynamic routing and documentation scale.",
    category: "Architecture",
    icon: Cpu,
    readTime: "8 min",
    slug: "registry-architecture",
    sections: [
      {
        title: "Centralized Source of Truth",
        content: "Everything in SnapJSX is driven by the RegistryHub. This centralized manifest maps technical metadata (titles, descriptions, code snippets) to the documentation UI. This architecture allows us to add new components in seconds without manually creating new pages.",
        code: {
          language: "typescript",
          value: "export const RegistryHub: Record<string, ComponentVariant[]> = {\n  'Core Components': [\n    {\n      title: 'Primary Button',\n      category: 'Buttons',\n      description: '...', \n      preview: <PrimaryButton />,\n      codeJsx: '...'\n    }\n  ]\n};",
        }
      },
      {
        title: "Dynamic Routing",
        content: "The documentation uses Next.js catch-all routes to parse segments and look up the corresponding registry entry. This ensures that the URL always matches the data structure perfectly.",
      }
    ]
  },
  {
    id: "customization",
    title: "Deep Customization",
    description: "Master the CSS variable system and Tailwind-first approach to theming.",
    category: "Styling",
    icon: Palette,
    readTime: "6 min",
    slug: "customization",
    sections: [
      {
        title: "Tailwind First",
        content: "SnapJSX is built on top of Tailwind CSS v4. Every component uses utility classes, which means you can change the entire look and feel just by editing the classes in the source code you've copied.",
      },
      {
        title: "CSS Variables",
        content: "We use a centralized CSS variable system defined in globals.css. This allows you to update your entire theme (colors, radiuses, shadows) in one place.",
        code: {
          language: "css",
          value: ":root {\n  --primary: #ffd700;\n  --background: #fbfbfb;\n  --radius-lg: 12px;\n}",
        }
      }
    ]
  },
  {
    id: "animations",
    title: "High-Performance Animations",
    description: "How we use Framer Motion and GPU-accelerated CSS for smooth interactions.",
    category: "Advanced",
    icon: Zap,
    readTime: "10 min",
    slug: "animations",
    sections: [
      {
        title: "Framer Motion Integration",
        content: "Most of our interactive components use Framer Motion for smooth, interruptible animations. We prioritize layout animations and entry/exit transitions to make the UI feel alive.",
        code: {
          language: "tsx",
          value: "<motion.div\n  initial={{ opacity: 0, y: 10 }}\n  animate={{ opacity: 1, y: 0 }}\n  transition={{ duration: 0.2 }}\n>\n  Animated Content\n</motion.div>",
        }
      }
    ]
  },
  {
    id: "accessibility",
    title: "Accessibility Standards",
    description: "Our approach to ARIA roles, keyboard navigation, and semantic HTML.",
    category: "Foundations",
    icon: ShieldCheck,
    readTime: "7 min",
    slug: "accessibility",
    sections: [
      {
        title: "Semantic HTML",
        content: "We strictly use semantic HTML elements (button, nav, aside, main) to ensure built-in accessibility. We avoid 'div-soup' and ensure every interactive element has a clear role.",
      },
      {
        title: "Keyboard Navigation",
        content: "All interactive components are tested for keyboard accessibility. We ensure focus rings are visible and logical tab order is maintained.",
      }
    ]
  },
  {
    id: "best-practices",
    title: "Component Best Practices",
    description: "Learn the recommended patterns for building and maintaining components in SnapJSX.",
    category: "Foundations",
    icon: Code2,
    readTime: "9 min",
    slug: "best-practices",
    sections: [
      {
        title: "Atomic Design",
        content: "We follow a flattened atomic design pattern. Components are grouped by their core function (Buttons, Inputs, Cards) rather than complexity. This makes them easier to find and copy.",
      },
      {
        title: "Prop Standardization",
        content: "Every component should strive for prop consistency. For example, all buttons should support 'icon', 'onClick', and 'disabled' as standard props.",
      }
    ]
  },
  {
    id: "performance",
    title: "Optimizing for Production",
    description: "Best practices for code splitting and minimizing bundle size with SnapJSX.",
    category: "Advanced",
    icon: Rocket,
    readTime: "12 min",
    slug: "performance",
    sections: [
      {
        title: "Tree Shaking",
        content: "Because you copy the source code, your project only includes the components you actually use. This is the ultimate form of tree-shaking.",
      }
    ]
  },
];
