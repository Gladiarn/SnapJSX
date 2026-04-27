"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="relative overflow-hidden pt-24 pb-24 md:pt-32 md:pb-32"
    >
      <div className="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto flex max-w-[1152px] flex-col items-center px-4 text-center">
        <motion.div
          variants={item}
          className="mb-6 flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium backdrop-blur-sm"
        >
          <Sparkles className="h-3 w-3 text-primary" />
          <span>Zero Dependencies</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
        >
          Copy. Paste. <span className="text-primary">Complete.</span>
          <br />
          <span className="text-muted-foreground">
            Barebone JSX for Modern Apps.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-10 max-w-[672px] text-lg text-muted-foreground md:text-xl"
        >
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </motion.p>

        <motion.div variants={item} className="flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            className="flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-primary hover:bg-primary/90 transition-all active:scale-95"
          >
            Browse Components
            <ArrowRight className="h-4 w-4" />
          </button>
          <Link href="/guide"
            type="button"
            className="flex h-12 items-center justify-center rounded-lg border border-input px-8 py-3 text-base font-semibold hover:bg-accent transition-all active:scale-95"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
