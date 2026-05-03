"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GhostButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function GhostButton({
  children,
  onClick,
  disabled = false,
  className = "",
  type = "button",
}: GhostButtonProps) {
  return (
    <motion.button
      whileHover={{ backgroundColor: "rgba(var(--primary-rgb), 0.1)" }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative inline-flex items-center justify-center gap-2 
        px-6 py-2.5 rounded-xl font-bold text-sm tracking-tight
        bg-transparent text-foreground
        transition-colors duration-200 disabled:opacity-50 
        disabled:pointer-events-none ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
