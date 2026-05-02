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
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-40"
    >
      {/* Premium Background Lights - Matching the rest of the site */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[800px] rounded-full bg-primary/10 blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
        <motion.div
          variants={item}
          className="mb-8 flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-sm"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>The Zero Dependency Registry</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-8 text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.85]"
        >
          Copy. Paste. <br />
          <span className="relative inline-block text-primary">
            Complete.
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary/20 -skew-x-12 -z-10" />
          </span>
        </motion.h1>

        <motion.div
          variants={item}
          className="space-y-8 flex flex-col items-center"
        >
          <p className="max-w-2xl text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
            High-performance, barebone JSX components for modern apps. Take full
            ownership of your UI with zero framework bloat.
          </p>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col gap-4 sm:flex-row items-center"
        >
          <Link
            href="/components"
            className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-primary px-10 text-xs font-black uppercase tracking-widest text-primary-foreground shadow-xl shadow-primary/20 hover:scale-105 transition-all active:scale-95"
          >
            Explore Library
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/guide"
            className="flex h-14 items-center justify-center rounded-2xl border border-border bg-card/50 px-10 text-xs font-black uppercase tracking-widest hover:bg-accent transition-all active:scale-95"
          >
            How it works
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
