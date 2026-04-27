import { create } from "zustand";

export interface SidebarItem {
  name: string;
  subItems: string[];
}

export interface SidebarSection {
  title: string;
  category: string;
  items: SidebarItem[];
}

interface DocsStore {
  sidebarData: SidebarSection[];
  setSidebarData: (data: SidebarSection[]) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}

export const useDocsStore = create<DocsStore>((set) => ({
  isSearchOpen: false,
  setIsSearchOpen: (open) => set({ isSearchOpen: open }),
  sidebarData: [
    {
      title: "Getting-Started",
      category: "Guides",
      items: [
        { name: "Introduction", subItems: [] },
        { name: "Installation", subItems: [] },
        { name: "Quick Start", subItems: [] },
        { name: "Customization", subItems: [] },
      ],
    },
    {
      title: "Core-Components",
      category: "UI Components",
      items: [
        {
          name: "Buttons",
          subItems: [
            "Primary Button",
            "Secondary Button",
            "Outline Button",
            "Ghost Button",
            "Loading Button",
            "Button with Icon",
          ],
        },
        {
          name: "Inputs",
          subItems: ["Text Fields", "Checkboxes", "Radio", "Select"],
        },
        {
          name: "Cards",
          subItems: [
            "Basic Card",
            "Card with Header",
            "Interactive Card",
            "Stats Card",
          ],
        },
        { name: "Modals", subItems: ["Alert Modal", "Form Modal"] },
        { name: "Dropdowns", subItems: ["Basic Dropdown", "Context Menu"] },
      ],
    },
    {
      title: "Loaders",
      category: "Animations",
      items: [
        { name: "All", subItems: [] },
        { name: "Spinners", subItems: ["Spinner", "Ring Spinner"] },
        { name: "Progress", subItems: ["Progress Bar", "Bar Loader"] },
        { name: "Skeleton", subItems: ["Skeleton", "Card Skeleton"] },
        {
          name: "Pulse",
          subItems: ["Pulse Dots", "Bouncing Dots", "Grid Loader"],
        },
      ],
    },
    {
      title: "Notifications",
      category: "Components",
      items: [
        { name: "All", subItems: [] },
        { name: "Toasts", subItems: ["Basic Toast", "Action Toast"] },
        { name: "Alerts", subItems: ["Success Alert", "Error Alert"] },
        { name: "Badges", subItems: ["Status Badge", "Count Badge"] },
        { name: "Banners", subItems: ["Announce Banner"] },
      ],
    },
    {
      title: "Navigation",
      category: "Components",
      items: [
        { name: "All", subItems: [] },
        { name: "Navbar", subItems: ["Simple Navbar", "Search Navbar"] },
        { name: "Sidebar", subItems: ["Collapsible Sidebar"] },
        { name: "Breadcrumbs", subItems: ["Basic Breadcrumbs"] },
        { name: "Tabs", subItems: ["Simple Tabs", "Pill Tabs"] },
      ],
    },
    {
      title: "Forms",
      category: "Components",
      items: [
        { name: "All", subItems: [] },
        { name: "Text Fields", subItems: ["Basic Input", "Password Input"] },
        { name: "Checkboxes", subItems: ["Basic Checkbox"] },
        { name: "Radio", subItems: ["Radio Group"] },
        { name: "Select", subItems: ["Native Select"] },
      ],
    },
    {
      title: "Data-Display",
      category: "Components",
      items: [
        { name: "All", subItems: [] },
        { name: "Tables", subItems: ["Basic Table", "Data Table"] },
        { name: "Lists", subItems: ["Simple List", "Detailed List"] },
        { name: "Stats", subItems: ["Stat Widget"] },
        { name: "Charts", subItems: ["Bar Chart", "Line Chart"] },
      ],
    },
  ],
  setSidebarData: (data) => set({ sidebarData: data }),
}));
