"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "SnapJSX has completely transformed how we build interfaces. The components are not just beautiful, they are incredibly easy to integrate.",
    author: "Sarah Jenkins",
    role: "Lead Designer at Volt",
    avatar: "SJ",
  },
  {
    content:
      "I've tried many UI libraries, but none match the level of performance and clean code that SnapJSX provides. Truly a game changer.",
    author: "Marcus Chen",
    role: "Senior Developer at Prism",
    avatar: "MC",
  },
  {
    content:
      "The blocks feature saved us weeks of development time. We were able to launch our landing page in record time with zero stress.",
    author: "Elena Rodriguez",
    role: "Founder at Apex",
    avatar: "ER",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
            Loved by <span className="text-primary">Innovators.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Join thousands of developers and designers who are building the next
            generation of web applications with SnapJSX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-card border border-border/50 relative group"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-xl shadow-primary/20">
                <Quote className="w-6 h-6" />
              </div>

              <p className="text-lg font-medium leading-relaxed mb-8 italic text-foreground/90 pt-4">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-border/50 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-sm border border-primary/20">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
