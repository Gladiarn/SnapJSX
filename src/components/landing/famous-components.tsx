"use client";

import { motion, type Variants } from "framer-motion";
import { useMemo } from "react";
import { ComponentCard } from "@/components/ui/component-card";
import { RegistryHub } from "@/lib/registry-hub";

// Mock usage data that will eventually come from a backend
const COMPONENT_STATS = [
  { title: "Primary Button", copyCount: 1240 },
  { title: "Alert Modal", copyCount: 850 },
  { title: "Simple Navbar", copyCount: 720 },
  { title: "Stats Card", copyCount: 450 },
  { title: "Basic Dropdown", copyCount: 380 },
  { title: "Pill Tabs", copyCount: 290 },
];

export function FamousComponents() {
  // 1. Flatten the RegistryHub to get a single list of components
  const allComponents = useMemo(() => {
    return Object.values(RegistryHub).flat();
  }, []);

  // 2. Identify top 3 components based on copyCount
  const famousComponents = useMemo(() => {
    // Sort stats by copyCount descending and take top 3
    const topStats = [...COMPONENT_STATS]
      .sort((a, b) => b.copyCount - a.copyCount)
      .slice(0, 3);

    // Match titles with RegistryHub components
    return topStats
      .map((stat) => allComponents.find((comp) => comp.title === stat.title))
      .filter((comp): comp is Exclude<typeof comp, undefined> => !!comp);
  }, [allComponents]);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Most Copied Components
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The building blocks developers love most. Standardized, accessible,
            and ready to drop into your project.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
        >
          {famousComponents.map((comp) => (
            <motion.div key={comp.title} variants={item}>
              <ComponentCard
                title={comp.title}
                category={comp.category}
                description={comp.description}
                size={comp.size || "0.0kb"}
                preview={comp.preview}
                codeJsx={comp.codeJsx}
                codeHtml={comp.codeHtml}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
