"use client";

import {
  BarChart,
  Bell,
  Book,
  ChevronRight,
  FileText,
  Layout,
  Loader2,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useDocsStore } from "@/lib/store";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({
  activeSection,
  onSectionChange,
  isOpen,
  onToggle,
}: SidebarProps) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const { sidebarData } = useDocsStore();

  useEffect(() => {
    const handleSectionChange = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      onSectionChange(customEvent.detail);
    };
    window.addEventListener("sidebar-change", handleSectionChange);
    return () =>
      window.removeEventListener("sidebar-change", handleSectionChange);
  }, [onSectionChange]);

  const toggleGroup = (name: string) => {
    setOpenGroups((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const getIcon = (title: string) => {
    switch (title) {
      case "Getting Started":
        return <Book className="w-4 h-4" />;
      case "Core Components":
        return <Layout className="w-4 h-4" />;
      case "Loaders":
        return <Loader2 className="w-4 h-4" />;
      case "Notifications":
        return <Bell className="w-4 h-4" />;
      case "Navigation":
        return <Menu className="w-4 h-4" />;
      case "Forms":
        return <FileText className="w-4 h-4" />;
      case "Data Display":
        return <BarChart className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] border-r border-border bg-background overflow-y-auto overflow-x-hidden scrollbar-thin transition-all duration-300 z-40 ${isOpen ? "w-64" : "w-0 opacity-0 md:opacity-100 md:w-0"}`}
    >
      <div className="px-4 py-8 w-64">
        <div className="md:hidden flex justify-end mb-4">
          <button type="button" onClick={onToggle}>
            <X />
          </button>
        </div>
        <div className="mb-6 px-2 pr-1">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 bg-muted border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
        </div>

        <nav className="space-y-6">
          {sidebarData.map((section, idx) => (
            <div key={section.title} className="px-2">
              {idx > 0 && <div className="border-t border-border/50 mb-6" />}
              <div className="flex items-center gap-2 mb-3 text-muted-foreground text-xs tracking-wide font-medium uppercase">
                {getIcon(section.title)}
                <span className="truncate">{section.title}</span>
              </div>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.name}>
                    {item.subItems.length > 0 ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => toggleGroup(item.name)}
                          className="flex items-center justify-between w-full px-2 py-1.5 rounded-md text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          <span className="truncate">{item.name}</span>
                          <ChevronRight
                            className={`w-4 h-4 shrink-0 transition-transform ${openGroups[item.name] ? "rotate-90" : ""}`}
                          />
                        </button>
                        {openGroups[item.name] && (
                          <ul className="pl-4 mt-1 space-y-1">
                            {item.subItems.map((sub) => (
                              <li key={sub}>
                                <button
                                  type="button"
                                  onClick={() =>
                                    onSectionChange(`${section.title}-${sub}`)
                                  }
                                  className={`w-full text-left px-2 py-1 rounded-md text-xs transition-colors ${
                                    activeSection === `${section.title}-${sub}`
                                      ? "bg-primary/10 text-primary font-medium"
                                      : "text-muted-foreground hover:text-foreground"
                                  }`}
                                >
                                  {sub}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          onSectionChange(`${section.title}-${item.name}`)
                        }
                        className={`w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors ${
                          activeSection === `${section.title}-${item.name}`
                            ? "bg-primary/10 text-primary font-medium border border-primary/20"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        {item.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
