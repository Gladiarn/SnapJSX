"use client";

import { Menu } from "lucide-react";

export function SubNavbar({
  onToggleSidebar,
  title,
  subtitle,
}: {
  onToggleSidebar: () => void;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="sticky top-16 z-30 w-full border-b border-border bg-background/95 backdrop-blur-md px-4 h-12 flex items-center gap-4">
      <button
        type="button"
        onClick={onToggleSidebar}
        className="p-1.5 rounded-md hover:bg-accent text-muted-foreground transition-colors"
      >
        <Menu className="w-4 h-4" />
      </button>
      <div className="text-sm text-muted-foreground capitalize">
        Docs <span className="mx-2">/</span>{" "}
        <span className="font-medium text-foreground">{title}</span>
        {subtitle && subtitle.toLowerCase() !== title.toLowerCase() && (
          <>
            <span className="mx-2">/</span>
            <span className="font-medium text-foreground">{subtitle}</span>
          </>
        )}
      </div>
    </div>
  );
}
