"use client";

import { ChevronDown } from "lucide-react";
import React from "react";

interface Option {
  value: string;
  label: string;
}

interface NativeSelectProps {
  label?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

/**
 * Native Select - A custom-styled native select element.
 */
export function NativeSelect({
  label,
  options,
  value,
  onChange,
  className = "",
}: NativeSelectProps) {
  const id = React.useId();

  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full appearance-none px-4 py-3 rounded-xl bg-card border border-border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all pr-10"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
