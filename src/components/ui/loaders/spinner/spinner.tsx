"use client";

import { motion } from "framer-motion";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-3",
  lg: "h-12 w-12 border-4",
};

/**
 * Spinner - A smooth, performant rotation loader.
 */
export function Spinner({ size = "md", className = "" }: SpinnerProps) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      className={`
        rounded-full border-primary border-t-transparent 
        ${sizes[size]} ${className}
      `}
    />
  );
}
