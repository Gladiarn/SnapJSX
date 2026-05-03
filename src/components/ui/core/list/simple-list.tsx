"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type React from "react";

interface ListItem {
  id: string;
  title: string;
  description?: string;
  icon?: React.ElementType;
}

interface SimpleListProps {
  items: ListItem[];
  className?: string;
}

/**
 * Simple List - A clean vertical list for navigation or information.
 */
export function SimpleList({ items, className = "" }: SimpleListProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center justify-between p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-4">
            {item.icon && (
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <item.icon className="w-5 h-5" />
              </div>
            )}
            <div>
              <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              {item.description && (
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
        </motion.div>
      ))}
    </div>
  );
}
