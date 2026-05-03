"use client";

import { Skeleton } from "@/components/ui/loaders/skeleton/skeleton";

interface CardSkeletonProps {
  className?: string;
}

/**
 * Card Skeleton - A placeholder for loading cards.
 */
export function CardSkeleton({ className = "" }: CardSkeletonProps) {
  return (
    <div
      className={`bg-card border border-border/50 rounded-[2rem] p-8 space-y-6 ${className}`}
    >
      <div className="space-y-3">
        <Skeleton className="w-1/3 h-6" />
        <Skeleton className="w-1/2 h-4" />
      </div>
      <div className="space-y-2">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-4/5 h-4" />
      </div>
      <div className="pt-4 flex gap-3">
        <Skeleton className="w-24 h-10 rounded-xl" />
        <Skeleton className="w-24 h-10 rounded-xl" />
      </div>
    </div>
  );
}
