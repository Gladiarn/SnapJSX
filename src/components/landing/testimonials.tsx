"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "SnapJSX saved me hours of styling. It’s like having a design system in my pocket.",
    author: "Alex Rivera",
    role: "Senior Frontend Engineer",
  },
  {
    quote:
      "The cleanest JSX I've ever copied. No bloat, just pure, functional beauty.",
    author: "Sarah Chen",
    role: "Fullstack Developer",
  },
  {
    quote:
      "Finally, a library that respects my time. The components just work out of the box.",
    author: "James Wilson",
    role: "Product Designer",
  },
  {
    quote:
      "The attention to detail in these components is unmatched. Truly production-ready.",
    author: "Elena Rodriguez",
    role: "Lead Developer",
  },
];

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: "start" });

  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-7xl px-4 mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Loved by Developers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear what the community is saying about their experience building with
            SnapJSX.
          </p>
        </div>

        <div className="container mx-auto max-w-7xl px-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8 md:gap-6 cursor-grab active:cursor-grabbing">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex-none w-[280px] sm:w-[320px] md:w-[400px] p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-md transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{t.author}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-lg italic text-foreground/80 leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
