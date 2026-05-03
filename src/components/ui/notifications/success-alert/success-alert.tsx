"use client";

import { motion } from "framer-motion";

interface SuccessAlertProps {
  title: string;
  description: string;
  className?: string;
}

export function SuccessAlert({
  title,
  description,
  className = "",
}: SuccessAlertProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        flex flex-col p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20
        text-emerald-500 w-full max-w-md
        ${className}
      `}
    >
      <div className="flex items-center gap-3 mb-1">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <h4 className="text-sm font-black uppercase tracking-widest">
          {title}
        </h4>
      </div>
      <p className="text-xs font-medium text-emerald-500/80 leading-relaxed ml-5">
        {description}
      </p>
    </motion.div>
  );
}
