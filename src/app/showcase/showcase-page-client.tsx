"use client";

import { motion } from "framer-motion";
import { Sparkles, Trophy } from "lucide-react";
import { ShowcaseCard } from "@/components/ui/showcase-card";
import { SHOWCASE_PROJECTS } from "@/content/showcase";

export function ShowcasePageClient() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-24">
      {/* Header - Centered & Impactful */}
      <header className="mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8"
        >
          <Trophy className="w-3.5 h-3.5" />
          Community Showcase
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
        >
          Built with <span className="text-primary">SnapJSX.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Explore the next generation of web interfaces. From minimalist
          portfolios to complex dashboards, see how developers are pushing the
          boundaries of JSX.
        </motion.p>
      </header>

      {/* Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {SHOWCASE_PROJECTS.map((project, index) => (
          <ShowcaseCard key={project.id} project={project} />
        ))}

        {/* Placeholder for "Your Project Here" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[16/10] rounded-[2.5rem] border-2 border-dashed border-border/50 bg-card/20 flex flex-col items-center justify-center p-12 text-center group hover:border-primary/30 transition-colors"
        >
          <div className="w-20 h-20 rounded-3xl bg-muted/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500">
            <Sparkles className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Build something epic?</h3>
          <p className="text-muted-foreground max-w-xs mb-8">
            Submit your project to be featured in the SnapJSX community
            showcase.
          </p>
          <button
            type="button"
            className="px-8 py-3 bg-foreground text-background rounded-2xl font-bold hover:scale-105 transition-transform active:scale-95"
          >
            Submit Project
          </button>
        </motion.div>
      </div>

      {/* Bottom Stats or Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 pt-24 border-t border-border/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl font-black text-primary mb-2">100%</div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Customizable
            </p>
          </div>
          <div>
            <div className="text-4xl font-black text-primary mb-2">0.0ms</div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Runtime Overhead
            </p>
          </div>
          <div>
            <div className="text-4xl font-black text-primary mb-2">
              Infinite
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Possibilities
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
