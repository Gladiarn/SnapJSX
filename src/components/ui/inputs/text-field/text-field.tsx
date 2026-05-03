"use client";

import React from "react";

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
  error?: string;
  className?: string;
}

export function TextField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  disabled = false,
  error,
  className = "",
}: TextFieldProps) {
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
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={`
          w-full px-4 py-3 rounded-xl bg-card border border-border
          text-sm font-medium transition-all duration-200
          placeholder:text-muted-foreground/50
          focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
          disabled:opacity-50 disabled:pointer-events-none
          ${error ? "border-destructive focus:ring-destructive/50" : ""}
        `}
      />
      {error && (
        <span className="text-[10px] font-bold text-destructive ml-1">
          {error}
        </span>
      )}
    </div>
  );
}
