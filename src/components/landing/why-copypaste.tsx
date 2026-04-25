"use client";

import * as React from "react";
import { WHY_SNAPJSX_FEATURES } from "@/content/landing-page";
import { Zap, Code, Shield, Palette, Check, Users } from "lucide-react";

const icons = {
  zap: Zap,
  code: Code,
  shield: Shield,
  palette: Palette,
  check: Check,
  users: Users,
};

export function WhySnapJSX() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % WHY_SNAPJSX_FEATURES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why SnapJSX?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built for developers who care about speed, quality, and
            maintainability.
          </p>
        </div>

        {/* Desktop: Grid / Mobile: Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_SNAPJSX_FEATURES.map((feature, idx) => {
            const Icon = icons[feature.icon as keyof typeof icons];
            return (
              <div
                key={feature.title}
                className={`p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg ${
                  idx === currentIndex ? "block" : "hidden md:block"
                }`}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary shadow-[0_0_10px_-2px_rgba(255,215,0,0.3)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel Dots */}
        <div className="md:hidden flex justify-center gap-2 mt-8">
          {WHY_SNAPJSX_FEATURES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
