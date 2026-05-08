"use client";

import { type ClassValue, clsx } from "clsx";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FAQ_DATA } from "@/content/landing-page";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CATEGORIES = Object.keys(FAQ_DATA) as (keyof typeof FAQ_DATA)[];

export function FAQ() {
  const [category, setCategory] = useState<keyof typeof FAQ_DATA>("about");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { title, description, questions } = FAQ_DATA[category];

  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => {
                setCategory(cat);
                setOpenIndex(null);
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all capitalize border",
                category === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent border-border hover:border-primary/50 text-muted-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={category}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {questions.map((faq, i) => (
            <motion.div
              key={faq.question}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { delay: i * 0.1 } },
              }}
              className="rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left hover:bg-accent/50 transition-colors"
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform",
                    openIndex === i && "rotate-180",
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
