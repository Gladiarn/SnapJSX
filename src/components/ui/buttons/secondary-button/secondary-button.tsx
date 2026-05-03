"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SecondaryButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function SecondaryButton({
  children,
  onClick,
  disabled = false,
  className = "",
  type = "button",
}: SecondaryButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative inline-flex items-center justify-center gap-2 
        px-6 py-2.5 rounded-xl font-bold text-sm tracking-tight
        bg-secondary text-secondary-foreground 
        hover:bg-secondary/80
        transition-colors duration-200 disabled:opacity-50 
        disabled:pointer-events-none ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
