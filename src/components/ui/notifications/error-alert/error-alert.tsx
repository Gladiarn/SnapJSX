"use client";

import { motion } from "framer-motion";

interface ErrorAlertProps {
  title: string;
  description: string;
  className?: string;
}

/**
 * Error Alert - A full-width critical feedback notification.
 */
export function ErrorAlert({
  title,
  description,
  className = "",
}: ErrorAlertProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        flex flex-col p-4 rounded-2xl bg-destructive/10 border border-destructive/20 
        text-destructive w-full ${className}
      `}
    >
      <div className="flex items-center gap-3 mb-1">
        <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
        <h4 className="text-sm font-black uppercase tracking-widest">
          {title}
        </h4>
      </div>
      <p className="text-xs font-medium text-destructive/80 leading-relaxed ml-5">
        {description}
      </p>
    </motion.div>
  );
}
