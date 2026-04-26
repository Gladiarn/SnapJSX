"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  icon?: LucideIcon;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

/**
 * Primary Button - The main call-to-action component for SnapJSX.
 * Built with Tailwind CSS v4 and Framer Motion for subtle interactions.
 */
export function PrimaryButton({
  children,
  onClick,
  icon: Icon,
  disabled = false,
  className = "",
  type = "button",
}: PrimaryButtonProps) {
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
        bg-primary text-primary-foreground 
        shadow-[0_4px_20px_-1px_rgba(var(--primary-rgb),0.3)]
        hover:shadow-[0_8px_30px_-1px_rgba(var(--primary-rgb),0.4)]
        transition-shadow duration-300 disabled:opacity-50 
        disabled:pointer-events-none ${className}
      `}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </motion.button>
  );
}
