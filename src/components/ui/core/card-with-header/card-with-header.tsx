"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardWithHeaderProps {
  children?: ReactNode;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  className?: string;
  hoverable?: boolean;
}

/**
 * CardWithHeader - Container with a distinct header section.
 */
export function CardWithHeader({
  children,
  title,
  subtitle,
  action,
  className = "",
  hoverable = true,
}: CardWithHeaderProps) {
  return (
    <motion.div
      whileHover={
        hoverable
          ? { y: -4, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)" }
          : {}
      }
      className={`
        bg-card border border-border/50 rounded-[2rem] overflow-hidden
        transition-colors duration-300 hover:border-primary/20 
        ${className}
      `}
    >
      <div className="px-8 py-6 border-b border-border/50 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold tracking-tight">{title}</h3>
          {subtitle && (
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-black mt-1">
              {subtitle}
            </p>
          )}
        </div>
        {action && <div>{action}</div>}
      </div>
      <div className="p-8 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </motion.div>
  );
}
