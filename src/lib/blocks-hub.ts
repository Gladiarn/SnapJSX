import React from "react";
import type { ComponentVariant } from "@/components/docs/sections/generic-category-page";
import { SaasHero } from "@/components/ui/blocks/saas-hero/saas-hero";

export const BlocksHub: Record<string, ComponentVariant[]> = {
  Marketing: [
    {
      title: "SaaS Hero Block",
      category: "Marketing",
      subcategory: "Hero",
      description: "High-converting SaaS hero section with dashboard mockup.",
      size: "1.2kb",
      preview: React.createElement(SaasHero),
      codeJsx: `"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { PrimaryButton } from "@/components/ui/buttons/primary-button/primary-button";

export function SaasHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Introducing SnapJSX 2.0
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
          >
            Build your <span className="text-primary">Next Big Idea</span> faster.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-medium"
          >
            High-performance, zero-dependency React components and sections designed for 
            speed and scalability. Copy, paste, and ship your product in record time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <button className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Get Started for Free
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 rounded-xl font-bold text-base hover:bg-muted transition-colors">
              View Showcase
            </button>
          </motion.div>
        </div>

        {/* Mockup Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="aspect-[16/10] rounded-[2rem] border border-border bg-card shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 pointer-events-none" />
            <div className="w-full h-full flex items-center justify-center bg-muted/30">
              <div className="text-muted-foreground font-bold tracking-tighter text-2xl">
                DASHBOARD PREVIEW
              </div>
            </div>
            
            {/* Glass effect overlays */}
            <div className="absolute top-8 left-8 w-32 h-32 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl" />
            <div className="absolute bottom-8 right-8 w-48 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl" />
          </div>
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-12 border-t border-border/50 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Trusted by the world's most innovative teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale contrast-125">
             <div className="text-2xl font-black tracking-tighter">VOLT</div>
             <div className="text-2xl font-black tracking-tighter">PRISM</div>
             <div className="text-2xl font-black tracking-tighter">QUANTUM</div>
             <div className="text-2xl font-black tracking-tighter">APEX</div>
             <div className="text-2xl font-black tracking-tighter">ORBIT</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}`,
      codeHtml: `<section class="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
  <div class="container relative mx-auto px-4">
    <div class="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
        Build your <span class="text-primary">Next Big Idea</span> faster.
      </h1>
      <p class="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-medium">
        High-performance, zero-dependency React components and sections designed for 
        speed and scalability.
      </p>
    </div>
  </div>
</section>`,
    },
  ],
};
