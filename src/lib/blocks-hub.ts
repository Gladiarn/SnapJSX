import React from "react";
import type { ComponentVariant } from "@/components/docs/sections/generic-category-page";
import { FeatureGrid } from "@/components/ui/blocks/feature-grid/feature-grid";
import { PricingSection } from "@/components/ui/blocks/pricing-section/pricing-section";
import { SaasHero } from "@/components/ui/blocks/saas-hero/saas-hero";
import { TestimonialsSection } from "@/components/ui/blocks/testimonials-section/testimonials-section";

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
          <div className="aspect-[16/10] rounded-[3rem] border border-border bg-card shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 pointer-events-none" />
            <div className="w-full h-full flex items-center justify-center bg-muted/30">
              <div className="text-muted-foreground font-bold tracking-tighter text-2xl">
                DASHBOARD PREVIEW
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}`,
      codeHtml: `<section style="position: relative; overflow: hidden; background-color: #0a0a0a; padding: 120px 0; color: #ffffff; font-family: system-ui, sans-serif;">
  <div style="margin: 0 auto; padding: 0 20px; text-align: center; max-width: 900px; position: relative; z-index: 1;">
    <div style="display: inline-flex; align-items: center; gap: 8px; padding: 4px 12px; border-radius: 9999px; background-color: rgba(255, 215, 0, 0.1); border: 1px solid rgba(255, 215, 0, 0.2); color: #ffd700; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 32px;">
      Introducing SnapJSX 2.0
    </div>
    <h1 style="font-size: 80px; font-weight: 900; letter-spacing: -0.05em; line-height: 0.9; margin-bottom: 32px;">
      Build your <span style="color: #ffd700;">Next Big Idea</span> faster.
    </h1>
    <p style="font-size: 20px; color: #a1a1aa; max-width: 600px; margin: 0 auto 40px; line-height: 1.6; font-weight: 500;">
      High-performance, zero-dependency components designed for speed and scalability.
    </p>
    <div style="display: flex; gap: 16px; justify-content: center; align-items: center;">
      <button style="padding: 16px 32px; border-radius: 12px; background-color: #ffd700; color: #0a0a0a; font-weight: bold; font-size: 16px; border: none; cursor: pointer; box-shadow: 0 4px 20px rgba(255, 215, 0, 0.2);">
        Get Started for Free
      </button>
      <button style="padding: 16px 32px; border-radius: 12px; background-color: transparent; color: #ffffff; font-weight: bold; font-size: 16px; border: 1px solid rgba(255, 255, 255, 0.1); cursor: pointer;">
        View Showcase
      </button>
    </div>
  </div>
</section>`,
    },
    {
      title: "Feature Grid Block",
      category: "Marketing",
      subcategory: "Features",
      description: "Elegant 6-column feature showcase.",
      size: "1.8kb",
      preview: React.createElement(FeatureGrid),
      codeJsx: `"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Sparkles, Smartphone, Code, Globe } from "lucide-react";

export function FeatureGrid() {
  const features = [
    { title: "Extreme Performance", description: "Zero-bloat architecture ensures sub-millisecond interaction times.", icon: Zap },
    { title: "Security First", description: "Built-in protection against common vulnerabilities.", icon: Shield },
    { title: "Premium Aesthetics", description: "Hand-crafted designs that make your product stand out.", icon: Sparkles },
    { title: "Mobile Optimized", description: "Responsive by default, providing a perfect experience.", icon: Smartphone },
    { title: "Clean Code", description: "Developer-friendly JSX that is easy to read and modify.", icon: Code },
    { title: "Global Scale", description: "Ready for high-traffic deployments and internationalization.", icon: Globe },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
            Everything you need to <span className="text-primary">Scale.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Powerful features designed to help you build and manage 
            modern web applications with ease.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-card border border-border/50 hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
      codeHtml: `<section style="padding: 96px 0; background-color: #0a0a0a; color: #ffffff; font-family: system-ui, sans-serif;">
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
    <div style="text-align: center; max-width: 700px; margin: 0 auto 64px;">
      <h2 style="font-size: 48px; font-weight: 900; letter-spacing: -0.05em; margin-bottom: 24px;">Everything you need to <span style="color: #ffd700;">Scale.</span></h2>
      <p style="font-size: 18px; color: #a1a1aa; font-weight: 500;">Powerful features designed to help you build modern web applications.</p>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
      <div style="padding: 32px; border-radius: 32px; background-color: #18181b; border: 1px solid rgba(255, 255, 255, 0.05);">
        <div style="width: 48px; height: 48px; border-radius: 16px; background-color: rgba(255, 215, 0, 0.1); display: flex; align-items: center; justify-content: center; color: #ffd700; margin-bottom: 24px; font-size: 24px;">✦</div>
        <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 12px;">Extreme Performance</h3>
        <p style="font-size: 14px; color: #a1a1aa; line-height: 1.6;">Zero-bloat architecture ensures sub-millisecond interaction times.</p>
      </div>
      <!-- Add more feature items as needed -->
    </div>
  </div>
</section>`,
    },
    {
      title: "Pricing Section Block",
      category: "Marketing",
      subcategory: "Pricing",
      description: "Conversion-optimized pricing tables.",
      size: "2.4kb",
      preview: React.createElement(PricingSection),
      codeJsx: `"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export function PricingSection() {
  const plans = [
    { name: "Starter", price: "0", description: "Perfect for side projects.", features: ["5 Components", "Basic Documentation"], popular: false },
    { name: "Professional", price: "49", description: "Ideal for growing startups.", features: ["Unlimited Components", "Premium Blocks", "Priority Support"], popular: true },
    { name: "Enterprise", price: "99", description: "Advanced for large applications.", features: ["Dedicated Support", "Security Audits"], popular: false },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
            Simple, <span className="text-primary">Transparent</span> Pricing.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={\`relative p-8 rounded-[2.5rem] border \${plan.popular ? "bg-card border-primary/30 shadow-2xl" : "bg-background border-border"}\`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight">\${plan.price}</span>
                  <span className="text-muted-foreground font-medium">/month</span>
                </div>
              </div>
              <div className="space-y-4 mb-10">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm font-medium">
                    <Check className="w-4 h-4 text-primary" /> {f}
                  </div>
                ))}
              </div>
              <button className={\`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all \${plan.popular ? "bg-primary text-primary-foreground shadow-lg" : "bg-muted text-foreground hover:bg-muted/80"}\`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
      codeHtml: `<section style="padding: 96px 0; background-color: #0a0a0a; color: #ffffff; font-family: system-ui, sans-serif;">
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
    <h2 style="font-size: 48px; font-weight: 900; text-align: center; margin-bottom: 64px;">Simple, <span style="color: #ffd700;">Transparent</span> Pricing.</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
      <div style="padding: 40px; border-radius: 40px; background-color: #18181b; border: 1px solid rgba(255, 215, 0, 0.3); position: relative; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
        <div style="position: absolute; top: -16px; left: 50%; transform: translateX(-50%); padding: 4px 16px; border-radius: 999px; background-color: #ffd700; color: #0a0a0a; font-size: 10px; font-weight: 900; text-transform: uppercase;">Most Popular</div>
        <h3 style="font-size: 24px; font-weight: bold; margin-bottom: 8px;">Professional</h3>
        <div style="font-size: 40px; font-weight: 900; margin-bottom: 32px;">$49 <span style="font-size: 14px; color: #a1a1aa; font-weight: 500;">/month</span></div>
        <div style="margin-bottom: 40px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; font-size: 14px;">
            <span style="color: #ffd700;">✔</span> Unlimited Components
          </div>
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; font-size: 14px;">
            <span style="color: #ffd700;">✔</span> Premium Blocks
          </div>
        </div>
        <button style="width: 100%; padding: 16px; border-radius: 16px; background-color: #ffd700; color: #0a0a0a; font-weight: 900; border: none; text-transform: uppercase; font-size: 12px; cursor: pointer;">Get Started</button>
      </div>
    </div>
  </div>
</section>`,
    },
    {
      title: "Testimonials Block",
      category: "Marketing",
      subcategory: "Testimonials",
      description: "Social proof grid with premium styling.",
      size: "1.5kb",
      preview: React.createElement(TestimonialsSection),
      codeJsx: `"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    { content: "SnapJSX has completely transformed how we build interfaces.", author: "Sarah Jenkins", role: "Designer at Volt", avatar: "SJ" },
    { content: "Performance and clean code that no other library provides.", author: "Marcus Chen", role: "Developer at Prism", avatar: "MC" },
    { content: "Saved us weeks of development time. Highly recommended.", author: "Elena Rodriguez", role: "Founder at Apex", avatar: "ER" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
            Loved by <span className="text-primary">Innovators.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-card border border-border/50 relative group"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-xl">
                <Quote className="w-6 h-6" />
              </div>
              <p className="text-lg font-medium leading-relaxed mb-8 italic text-foreground/90 pt-4">"{t.content}"</p>
              <div className="flex items-center gap-4 border-t border-border/50 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-sm border border-primary/20">{t.avatar}</div>
                <div>
                  <h4 className="font-bold text-foreground">{t.author}</h4>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
      codeHtml: `<section style="padding: 96px 0; background-color: #0a0a0a; color: #ffffff; font-family: system-ui, sans-serif;">
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
    <h2 style="font-size: 48px; font-weight: 900; text-align: center; margin-bottom: 64px;">Loved by <span style="color: #ffd700;">Innovators.</span></h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
      <div style="padding: 32px; border-radius: 40px; background-color: #18181b; border: 1px solid rgba(255, 255, 255, 0.05); position: relative;">
        <div style="position: absolute; top: -16px; left: -16px; width: 48px; height: 48px; border-radius: 16px; background-color: #ffd700; color: #0a0a0a; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold;">"</div>
        <p style="font-size: 18px; line-height: 1.6; font-style: italic; color: #f4f4f5; margin-bottom: 32px; padding-top: 16px;">"SnapJSX has completely transformed how we build interfaces."</p>
        <div style="display: flex; align-items: center; gap: 16px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px;">
          <div style="width: 48px; height: 48px; border-radius: 999px; background-color: rgba(255, 215, 0, 0.1); border: 1px solid rgba(255, 215, 0, 0.2); display: flex; align-items: center; justify-content: center; color: #ffd700; font-weight: 900;">SJ</div>
          <div>
            <div style="font-weight: bold; font-size: 16px;">Sarah Jenkins</div>
            <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #a1a1aa;">Designer at Volt</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
    },
  ],
};
