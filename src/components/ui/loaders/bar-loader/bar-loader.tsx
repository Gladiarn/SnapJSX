"use client";

import { motion } from "framer-motion";

interface BarLoaderProps {
  className?: string;
}

/**
 * Bar Loader - A rhythmic, multiple-bar loading animation.
 */
export function BarLoader({ className = "" }: BarLoaderProps) {
  return (
    <div className={`flex items-center gap-1 h-8 ${className}`}>
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{
            height: [10, 30, 10],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
          className="w-1.5 bg-primary rounded-full"
        />
      ))}
    </div>
  );
}
