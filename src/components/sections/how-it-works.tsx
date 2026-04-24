"use client"

import { motion } from "framer-motion"
import { howItWorksSteps } from "@/content/landing-page"

export function HowItWorks() {
  return (
    <section className="py-24 bg-transparent relative z-10">
      {/* Abstract Orbiting Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] border border-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] border border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How SnapJSX Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to supercharge your development workflow.
          </p>
        </div>

        {/* Step-by-Step Flow */}
        <div className="flex flex-col md:flex-row justify-between gap-12 relative">
          {howItWorksSteps.map((step, index) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex-1 flex flex-col items-center text-center relative"
            >
              {/* Connector line */}
              {index < howItWorksSteps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-primary/50 via-primary/20 to-transparent -z-10" />
              )}
              
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-primary/20  text-primary text-2xl font-mono font-bold shadow-[0_0_20px_-5px_rgba(255,215,0,0.2)]">
                0{index + 1}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
