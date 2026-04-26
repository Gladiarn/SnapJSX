"use client";

import { useInView, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { STATS } from "@/content/landing-page";

function Counter({ value }: { value: string }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  const isFloat = value.includes(".");
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  const count = useSpring(0, {
    stiffness: 70,
    damping: 15,
  });

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    return count.on("change", (latest) => {
      setDisplay(isFloat ? parseFloat(latest.toFixed(1)) : Math.floor(latest));
    });
  }, [count, isFloat]);

  useEffect(() => {
    if (isInView) {
      count.set(numericValue);
    }
  }, [isInView, count, numericValue]);

  return (
    <div ref={nodeRef} className="flex justify-center">
      <span>{display}</span>
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
