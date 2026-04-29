"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import type { Guide } from "@/content/guides";

interface GuideCardProps {
  guide: Guide;
}

export function GuideCard({ guide }: GuideCardProps) {
  const Icon = guide.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={`/docs/guides/${guide.slug}`}
        className="group relative flex flex-col h-full bg-card/50 border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_-12px_rgba(255,215,0,0.1)]"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <Clock className="w-3 h-3" />
            {guide.readTime}
          </div>
        </div>

        <div className="space-y-3 mb-8 flex-1">
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
            {guide.category}
          </span>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {guide.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {guide.description}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
          Read Guide <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </motion.div>
  );
}

export function FeaturedGuide({ guide }: GuideCardProps) {
  const Icon = guide.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mb-16"
    >
      <Link
        href={`/docs/guides/${guide.slug}`}
        className="group relative flex flex-col md:flex-row gap-8 bg-gradient-to-br from-card/80 to-background border border-primary/20 rounded-[2.5rem] p-8 md:p-12 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(255,215,0,0.15)] overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -mr-32 -mt-32" />

        <div className="relative flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Icon className="w-3 h-3" />
            Featured Guide
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            {guide.title}
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {guide.description}
          </p>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
              Start Reading{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
              <Clock className="w-3 h-3" />
              {guide.readTime}
            </div>
          </div>
        </div>

        <div className="relative hidden lg:flex items-center justify-center w-48 shrink-0">
          <div className="w-32 h-32 rounded-[2.5rem] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transform rotate-12 group-hover:rotate-0 transition-transform duration-700 shadow-2xl">
            <Icon className="w-12 h-12" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
