"use client";

import { motion } from "framer-motion";

interface StatsCardProps {
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  className?: string;
}

export function StatsCard({
  label,
  value,
  trend,
  trendUp = true,
  className = "",
}: StatsCardProps) {
  return (
    <div
      className={`p-6 rounded-[2rem] bg-card border border-border shadow-sm group hover:border-primary/50 transition-all ${className}`}
    >
      <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">
        {label}
      </p>
      <div className="flex items-end justify-between">
        <h3 className="text-3xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors">
          {value}
        </h3>
        {trend && (
          <div
            className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-widest ${trendUp ? "text-emerald-500" : "text-destructive"}`}
          >
            <span>{trendUp ? "↑" : "↓"}</span>
            {trend}
          </div>
        )}
      </div>

      {/* Decorative background accent */}
      <div className="mt-6 h-1.5 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "65%" }}
          className="h-full bg-primary"
        />
      </div>
    </div>
  );
}
