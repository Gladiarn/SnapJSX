"use client";

interface SkeletonProps {
  className?: string;
  variant?: "rectangle" | "circle" | "text";
}

export function Skeleton({
  className = "",
  variant = "rectangle",
}: SkeletonProps) {
  const variants = {
    rectangle: "rounded-xl",
    circle: "rounded-full",
    text: "rounded-md h-4 w-full",
  };

  return (
    <div
      className={`
        bg-muted/50 animate-pulse
        ${variants[variant]}
        ${className}
      `}
    />
  );
}
