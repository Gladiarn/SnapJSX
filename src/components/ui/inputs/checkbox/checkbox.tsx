"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

/**
 * Checkbox - A premium, animated checkbox component.
 */
export function Checkbox({
  label,
  checked: controlledChecked,
  onChange,
  className = "",
}: CheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(false);
  const isChecked =
    controlledChecked !== undefined ? controlledChecked : internalChecked;

  const toggle = () => {
    const next = !isChecked;
    if (controlledChecked === undefined) setInternalChecked(next);
    onChange?.(next);
  };

  return (
    <label
      className={`flex items-center gap-3 cursor-pointer group ${className}`}
    >
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={toggle}
        />
        <motion.div
          animate={{
            backgroundColor: isChecked ? "var(--primary)" : "transparent",
            borderColor: isChecked
              ? "var(--primary)"
              : "rgba(var(--border-rgb), 0.5)",
          }}
          className="w-5 h-5 rounded-md border-2 transition-colors flex items-center justify-center"
        >
          {isChecked && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Check className="w-3.5 h-3.5 text-primary-foreground stroke-[3px]" />
            </motion.div>
          )}
        </motion.div>
      </div>
      {label && (
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {label}
        </span>
      )}
    </label>
  );
}
