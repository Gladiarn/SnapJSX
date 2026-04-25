import React from "react";
import { QUICK_START_DATA } from "@/content/docs-content-data";
import { Terminal, ArrowRight, CheckCircle2 } from "lucide-react";

export function QuickStart() {
  const { sections, nextSteps } = QUICK_START_DATA;

  return (
    <div className="w-full space-y-16">
      {/* Workflow Section */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-black tracking-tight">{sections[0].title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {sections[0].description}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {sections[0].steps?.map((step, idx) => (
            <div key={step.name} className="relative p-6 rounded-2xl border border-border bg-card/30 space-y-3">
              <div className="text-primary/20 absolute top-4 right-6 text-6xl font-black italic select-none">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold relative z-10">{step.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Code Sections */}
      {sections.slice(1).map((section) => (
        <section key={section.title} className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-black tracking-tight">{section.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {section.description}
            </p>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative bg-[#0f0f0f] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                  </div>
                  <span className="ml-4 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">{section.language || 'code'}</span>
                </div>
              </div>
              <pre className="p-8 font-mono text-sm leading-relaxed text-blue-50/80 overflow-x-auto">
                <code>{section.code}</code>
              </pre>
            </div>
          </div>
        </section>
      ))}

      {/* Next Steps */}
      <section className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/10 space-y-8">
        <h2 className="text-2xl font-black tracking-tight">Next Steps</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nextSteps.map((step) => (
            <div key={step} className="flex items-center gap-3 p-4 rounded-2xl bg-background border border-border group cursor-pointer hover:border-primary/50 transition-all">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <ArrowRight className="h-4 w-4" />
              </div>
              <span className="text-sm font-bold tracking-tight">{step}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
