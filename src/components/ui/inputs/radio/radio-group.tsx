"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface RadioOption {
  id: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

/**
 * Radio Group - A premium, animated radio selection component.
 */
export function RadioGroup({
  options,
  value: controlledValue,
  onChange,
  className = "",
}: RadioGroupProps) {
  const [internalValue, setInternalValue] = useState(options[0]?.id);
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleSelect = (id: string) => {
    if (controlledValue === undefined) setInternalValue(id);
    onChange?.(id);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {options.map((option) => (
        <label
          key={option.id}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <input
            type="radio"
            className="sr-only"
            name="radio-group"
            checked={value === option.id}
            onChange={() => handleSelect(option.id)}
          />
          <div className="relative flex items-center justify-center">
            <div
              className={`w-5 h-5 rounded-full border-2 transition-all ${value === option.id ? "border-primary" : "border-border/50 group-hover:border-primary/50"}`}
            />
            {value === option.id && (
              <motion.div
                layoutId="radio-inner"
                className="absolute w-2.5 h-2.5 rounded-full bg-primary"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </div>
          <span
            className={`text-sm font-medium transition-colors ${value === option.id ? "text-foreground" : "text-muted-foreground group-hover:text-primary"}`}
          >
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}
