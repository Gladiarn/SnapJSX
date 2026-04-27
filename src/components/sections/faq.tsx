"use client";

import { type ClassValue, clsx } from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const FAQS = [
  {
    question: "Can I use this with my own Tailwind theme?",
    answer:
      "Absolutely. Our components use standard Tailwind classes and CSS variables. If you have a custom theme, they will inherit your design tokens automatically.",
  },
  {
    question: "How do I update my components?",
    answer:
      "Since you own the code after copying, you can update them manually or come back to SnapJSX to see if we've released any improvements or bug fixes for that specific snippet.",
  },
  {
    question: "Is it really zero dependencies?",
    answer:
      "Yes. Most components rely only on React and Tailwind CSS. If a component requires a small utility like 'lucide-react' for icons, we clearly mark it.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 ">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div
              key={faq.question}
              className="rounded-xl border border-border  overflow-hidden"
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
                <div className="px-6 pb-6 text-muted-foreground animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
