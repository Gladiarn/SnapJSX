"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  hoverable?: boolean;
}

/**
 * Card - A minimalist container for grouping related content.
 */
export function Card({
  children,
  title,
  subtitle,
  className = "",
  hoverable = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={
        hoverable
          ? { y: -4, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)" }
          : {}
      }
      className={`
        bg-card border border-border/50 rounded-[2rem] p-8 
        transition-colors duration-300 hover:border-primary/20 
        ${className}
      `}
    >
      {(title || subtitle) && (
        <div className="mb-6 space-y-1">
          {title && (
            <h3 className="text-xl font-bold tracking-tight">{title}</h3>
          )}
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
      )}
      <div className="text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </motion.div>
  );
}
