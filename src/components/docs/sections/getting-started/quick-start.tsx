import React, { useState } from "react";
import { Terminal, ArrowRight, CheckCircle2 } from "lucide-react";

export function QuickStart() {
  const [data] = useState({
    title: "Quick Start",
    description: "Get up and running with SnapJSX components in seconds. Choose, copy, and paste.",
    sections: [
      {
        title: "The Workflow",
        description: "SnapJSX is designed for speed. Our workflow eliminates the friction of traditional component libraries.",
        steps: [
          {
            name: "Browse",
            detail: "Explore our library of components. Toggle between JSX and HTML/CSS versions to suit your stack."
          },
          {
            name: "Copy",
            detail: "Click 'View Code' on any component. Our registry provides clean, ready-to-use snippets."
          },
          {
            name: "Paste",
            detail: "Paste the snippet directly into your project. Since these are pure snippets, you have total control over the implementation."
          }
        ]
      },
      {
        title: "Integration Pattern",
        description: "SnapJSX provides raw code snippets, not compiled packages. This allows you to integrate them into any file structure.",
        code: "src/components/ui/\n├── button.tsx\n├── card.tsx\n└── spinner.tsx\n\n// Usage:\nimport { Button } from '@/components/ui/button';\n<Button>Click me</Button>",
        language: "text"
      },
      {
        title: "Styling & Logic",
        description: "Each snippet includes all necessary Tailwind classes and logic. You are free to add props, change event handlers, or tweak styles locally.",
        code: "export function CustomButton({ children, ...props }) {\n  return (\n    <button \n      className=\"px-4 py-2 bg-primary text-white rounded-lg\"\n      {...props}\n    >\n      {children}\n    </button>\n  );\n}",
        language: "typescript"
      }
    ],
    nextSteps: [
      "Check out the Customization guide",
      "Configure your design tokens",
      "Join the SnapJSX community"
    ]
  });

  const { sections, nextSteps } = data;

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

        <div className="grid gap-4 grid-cols-1 xl:grid-cols-3">
          {sections[0].steps?.map((step, idx) => (
            <div key={step.name} className="relative p-6 rounded-2xl border border-border bg-card/30 space-y-3">
              <div className="text-primary/20 absolute top-4 right-6 text-5xl md:text-6xl font-black italic select-none">
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
            <div className="relative bg-[#0f0f0f] border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-white/5 bg-white/5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                  </div>
                  <span className="ml-2 md:ml-4 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">{section.language || 'code'}</span>
                </div>
              </div>
              <pre className="p-4 md:p-8 font-mono text-xs md:text-sm leading-relaxed text-blue-50/80 overflow-x-auto">
                <code>{section.code}</code>
              </pre>
            </div>
          </div>
        </section>
      ))}

      {/* Next Steps */}
      <section className="p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-primary/5 border border-primary/10 space-y-6 md:space-y-8">
        <h2 className="text-2xl font-black tracking-tight">Next Steps</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
