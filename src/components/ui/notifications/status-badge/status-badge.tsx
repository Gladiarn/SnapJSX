"use client";

import type React from "react";

interface StatusBadgeProps {
  children?: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info";
  className?: string;
}

export function StatusBadge({
  children,
  variant = "default",
  className = "",
}: StatusBadgeProps) {
  const variants = {
    default: "bg-muted text-muted-foreground border-border",
    success: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    error: "bg-destructive/10 text-destructive border-destructive/20",
    info: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  };

  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full border
        text-[10px] font-black uppercase tracking-widest
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
