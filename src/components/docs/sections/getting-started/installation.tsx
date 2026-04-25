import React from "react";
import { INSTALLATION_DATA } from "@/content/docs-content-data";
import { Terminal, CheckCircle2 } from "lucide-react";

export function Installation() {
  const { prerequisites, steps } = INSTALLATION_DATA;

  return (
    <div className="w-full space-y-12">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Prerequisites</h2>
        <p className="text-muted-foreground text-lg">
          Before using SnapJSX components, make sure you have:
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {prerequisites.map((item, i) => (
            <li key={i} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/50">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-10">
        {steps.map((step, index) => (
          <div key={step.title} className="space-y-4">
            <h3 className="text-2xl font-bold">{step.title}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {step.description}
            </p>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative bg-[#0f0f0f] border border-border rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-white/5">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-white/40" />
                    <span className="text-xs font-mono text-white/40 uppercase tracking-widest">{step.language}</span>
                  </div>
                  <button 
                    onClick={() => navigator.clipboard.writeText(step.code)}
                    className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-widest font-bold"
                  >
                    Copy
                  </button>
                </div>
                <pre className="p-6 font-mono text-sm text-blue-100 overflow-x-auto">
                  <code>{step.code}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
