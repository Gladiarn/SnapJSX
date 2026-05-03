"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Spinner } from "@/components/ui/loaders/spinner/spinner";

interface LoadingButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

/**
 * Loading Button - A button that shows a loading state.
 */
export function LoadingButton({
  children,
  onClick,
  isLoading = false,
  disabled = false,
  className = "",
  type = "button",
}: LoadingButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        relative inline-flex items-center justify-center gap-2 
        px-6 py-2.5 rounded-xl font-bold text-sm tracking-tight
        bg-primary text-primary-foreground 
        shadow-[0_4px_20px_-1px_rgba(var(--primary-rgb),0.3)]
        hover:shadow-[0_8px_30px_-1px_rgba(var(--primary-rgb),0.4)]
        transition-all duration-300 disabled:opacity-50 
        disabled:pointer-events-none ${className}
      `}
    >
      {isLoading && <Spinner size="sm" className="border-primary-foreground" />}
      <span className={isLoading ? "opacity-70" : ""}>{children}</span>
    </motion.button>
  );
}
