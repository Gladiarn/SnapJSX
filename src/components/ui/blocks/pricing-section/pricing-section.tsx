"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for side projects and hobbyists.",
    features: [
      "5 Components",
      "Basic Documentation",
      "Community Support",
      "Free Updates",
    ],
    buttonText: "Start for Free",
    popular: false,
  },
  {
    name: "Professional",
    price: "49",
    description: "Ideal for growing startups and small teams.",
    features: [
      "Unlimited Components",
      "Premium Blocks",
      "Priority Support",
      "Custom Themes",
      "Source Code Access",
    ],
    buttonText: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "99",
    description: "Advanced features for large-scale applications.",
    features: [
      "SLA Guarantee",
      "Dedicated Support",
      "Custom Components",
      "Security Audits",
      "Team Management",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
            Simple, <span className="text-primary">Transparent</span> Pricing.
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border ${
                plan.popular
                  ? "bg-card border-primary/30 shadow-2xl shadow-primary/5"
                  : "bg-background border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground font-medium">
                    /month
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <button
                type="button"
                className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
