"use client";

import { motion, Variants } from "framer-motion";

interface BouncingDotsProps {
  className?: string;
}

const containerVariants: Variants = {
  initial: { transition: { staggerChildren: 0.2 } },
  animate: { transition: { staggerChildren: 0.2 } },
};

const dotVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

/**
 * BouncingDots - A subtle, rhythmic pulse loader.
 */
export function BouncingDots({ className = "" }: BouncingDotsProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={`flex gap-1.5 items-center justify-center ${className}`}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          variants={dotVariants}
          className="w-2.5 h-2.5 rounded-full bg-primary"
        />
      ))}
    </motion.div>
  );
}
