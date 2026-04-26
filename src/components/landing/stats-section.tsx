"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { STATS } from "@/content/landing-page";

function Counter({ value }: { value: string }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });
  
  // Extract number if present
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  const count = useSpring(0, {
    stiffness: 70,
    damping: 15,
  });

  const display = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      count.set(numericValue);
    }
  }, [isInView, count, numericValue]);

  return (
    <div ref={nodeRef} className="flex justify-center">
      <motion.span>{display}</motion.span>
      <span>{suffix}</span>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-12 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-primary mb-1">
                <Counter value={stat.header} />
              </div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                {stat.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
