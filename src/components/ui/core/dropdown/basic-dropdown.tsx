"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface DropdownItem {
  id: string;
  label: string;
  icon?: React.ElementType;
  onClick?: () => void;
}

interface BasicDropdownProps {
  label: string;
  items: DropdownItem[];
  className?: string;
}

/**
 * Basic Dropdown - A minimalist, animated menu.
 */
export function BasicDropdown({
  label,
  items,
  className = "",
}: BasicDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border font-bold text-xs uppercase tracking-widest hover:border-primary/50 transition-all"
      >
        {label}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 5, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-50 mt-2 w-48 bg-card border border-border rounded-2xl shadow-xl p-2 overflow-hidden"
          >
            {items.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => {
                  item.onClick?.();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all text-left"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
