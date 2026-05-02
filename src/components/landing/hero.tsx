"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="relative overflow-hidden pt-24 pb-24 md:pt-32 md:pb-32"
    >
      {/* Premium Background Lights - Subtle integration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[400px] w-[600px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto flex max-w-[1152px] flex-col items-center px-4 text-center">
        <motion.div
          variants={item}
          className="mb-8 flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-sm"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Zero Dependencies</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-8 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl leading-tight"
        >
          Copy. Paste.{" "}
          <span className="text-primary relative inline-block">
            Complete.
            <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-primary/20 -skew-x-12" />
          </span>
          <br />
          <span className="text-muted-foreground">
            Barebone JSX for Modern Apps.
          </span>
        </motion.h1>

        <motion.div
          variants={item}
          className="flex flex-col items-center space-y-8"
        >
          <p className="max-w-[672px] text-lg text-muted-foreground md:text-xl font-medium leading-relaxed">
            Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source.
          </p>

          {/* The signature gold line - Creative but simple */}
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/components"
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:scale-105 transition-all active:scale-95"
          >
            Browse Components
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/guide"
            className="flex h-12 items-center justify-center rounded-xl border border-border bg-card/50 px-8 text-sm font-bold hover:bg-accent transition-all active:scale-95"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
