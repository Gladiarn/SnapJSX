"use client";

import { motion } from "framer-motion";
import { Code, Globe, Shield, Smartphone, Sparkles, Zap } from "lucide-react";

const features = [
  {
    title: "Extreme Performance",
    description:
      "Zero-bloat architecture ensures sub-millisecond interaction times.",
    icon: Zap,
  },
  {
    title: "Security First",
    description:
      "Built-in protection against common vulnerabilities and XSS attacks.",
    icon: Shield,
  },
  {
    title: "Premium Aesthetics",
    description:
      "Hand-crafted designs that make your product stand out instantly.",
    icon: Sparkles,
  },
  {
    title: "Mobile Optimized",
    description:
      "Responsive by default, providing a perfect experience on all devices.",
    icon: Smartphone,
  },
  {
    title: "Clean Code",
    description:
      "Developer-friendly JSX that is easy to read, modify, and extend.",
    icon: Code,
  },
  {
    title: "Global Scale",
    description: "Ready for internationalization and high-traffic deployments.",
    icon: Globe,
  },
];

export function FeatureGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
            Everything you need to <span className="text-primary">Scale.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Powerful features designed to help you build, deploy, and manage
            your modern web applications with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
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
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
