import { Terminal, FileCode, Sparkles, Copy, Code2, Package, CheckCircle2 } from 'lucide-react';

export const INTRODUCTION_DATA = {
  title: "Introduction",
  description: "SnapJSX is a collection of beautiful, accessible, and production-ready React components built with Tailwind CSS. No npm packages, no dependencies—just pure JSX you can copy and paste into your project.",
  features: [
    {
      title: "Copy & Paste",
      description: "Browse components, copy the code, paste into your project. That's it.",
      icon: "Copy"
    },
    {
      title: "Full Ownership",
      description: "The code lives in your project. Modify and customize however you want.",
      icon: "Code2"
    },
    {
      title: "Zero Dependencies",
      description: "No package.json bloat. No version conflicts. No security vulnerabilities.",
      icon: "Package"
    }
  ],
  philosophy: {
    title: "Philosophy",
    description: "Modern component libraries often come with heavy dependencies and opinionated abstractions. SnapJSX takes a different approach:",
    points: [
      {
        title: "Full Ownership",
        description: "You own the code, not a package manager"
      },
      {
        title: "Zero Dependencies",
        description: "No security vulnerabilities from third parties"
      },
      {
        title: "Fully Customizable",
        description: "Modify without fighting framework abstractions"
      },
      {
        title: "Minimal Bundle",
        description: "Ship only what you use, nothing more"
      }
    ]
  },
  credits: "Inspired by shadcn/ui, Radix UI, and the amazing React community. Built with love for developers who value simplicity and control."
};

export const INSTALLATION_DATA = {
  title: "Installation",
  description: "Get started with SnapJSX in your React + Tailwind CSS project in less than 5 minutes.",
  prerequisites: [
    "React 18+ installed in your project",
    "Tailwind CSS v3.0+ configured",
    "A bundler like Vite, Next.js, or Create React App"
  ],
  steps: [
    {
      title: "Step 1: Install Tailwind CSS",
      description: "If you haven't already, install and configure Tailwind CSS in your project:",
      code: "npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p",
      language: "bash"
    },
    {
      title: "Step 2: Configure Tailwind",
      description: "Add the following to your tailwind.config.js:",
      code: "/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: [\n    \"./src/**/*.{js,ts,jsx,tsx}\",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}",
      language: "javascript"
    }
  ]
};

export const QUICK_START_DATA = {
  title: "Quick Start",
  description: "Get up and running with SnapJSX components in seconds. Choose, copy, and paste.",
  sections: [
    {
      title: "1. The Workflow",
      description: "SnapJSX is designed for speed. Our workflow eliminates the friction of traditional component libraries.",
      steps: [
        {
          name: "Identify",
          detail: "Browse the sidebar to find a component that fits your needs. We provide multiple variants for most common UI patterns."
        },
        {
          name: "Inspect",
          detail: "Use the 'View Code' toggle to examine the implementation. We provide both JSX and raw HTML/Tailwind versions."
        },
        {
          name: "Integrate",
          detail: "Copy the code and paste it directly into your local component directory. We recommend `src/components/ui`."
        }
      ]
    },
    {
      title: "2. Folder Structure",
      description: "We recommend a flat structure for your UI components to keep things organized and easy to find.",
      code: "src/\n├── components/\n│   ├── ui/\n│   │   ├── button.tsx\n│   │   ├── card.tsx\n│   │   └── modal.tsx\n│   └── layout/\n│       ├── sidebar.tsx\n│       └── navbar.tsx\n├── lib/\n│   └── utils.ts\n└── app/\n    └── layout.tsx",
      language: "text"
    },
    {
      title: "3. First Component",
      description: "Let's create your first button. Paste this code into `src/components/ui/button.tsx`.",
      code: "export function Button({ children, className = \"\", ...props }) {\n  return (\n    <button \n      className={`px-4 py-2 bg-primary text-white rounded-lg transition-all active:scale-95 ${className}`}\n      {...props}\n    >\n      {children}\n    </button>\n  );\n}",
      language: "typescript"
    }
  ],
  nextSteps: [
    "Explore the Loaders section for async states",
    "Setup your global design tokens in globals.css",
    "Join our community on GitHub for updates"
  ]
};

export const CUSTOMIZATION_DATA = {
  title: "Customization",
  description: "SnapJSX provides full source control. There are three primary ways to customize your components.",
  strategies: [
    {
      title: "Utility-First Customization",
      description: "The fastest way to customize is by using Tailwind's utility classes. Since the code is yours, you can change margins, paddings, and colors directly in the markup.",
      example: {
        title: "Original",
        code: "<div className=\"p-4 bg-white border border-border\">",
      },
      updated: {
        title: "Customized",
        code: "<div className=\"p-8 bg-slate-50 border-2 border-primary shadow-xl\">",
      }
    },
    {
      title: "Logic & State Extension",
      description: "Unlike rigid library components, SnapJSX components are standard React functions. You can easily add state, refs, or custom event handlers.",
      code: "export function CustomModal() {\n  const [isOpen, setIsOpen] = useState(false);\n  const modalRef = useRef(null);\n  \n  // Add your own custom logic here\n  useEffect(() => {\n    // Intersection observers, event listeners, etc.\n  }, []);\n\n  return (\n    // Your copy-pasted JSX here\n  );\n}",
      language: "typescript"
    },
    {
      title: "Design System Integration",
      description: "Integrate your own design system by replacing our default variables with your own or using your Tailwind config's theme extension.",
      points: [
        "Consistent spacing using your Tailwind 'spacing' scale",
        "Color synchronization with your brand palette",
        "Typography alignment with your chosen font families"
      ]
    }
  ],
  theming: {
    title: "Global Theming",
    description: "Our components respect your system-wide theme settings through CSS variables. Edit your main CSS file to change the feel of all components at once.",
    code: ":root {\n  --primary: 220 100% 50%;\n  --radius: 1rem;\n  --font-sans: 'Inter', sans-serif;\n}\n\n.dark {\n  --primary: 220 100% 70%;\n}",
    language: "css"
  }
};
