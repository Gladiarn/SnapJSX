import React from "react";
import { CUSTOMIZATION_DATA } from "@/content/docs-content-data";
import { Settings2, Zap, Layers, Palette } from "lucide-react";

export function Customization() {
  const { strategies, theming } = CUSTOMIZATION_DATA;

  return (
    <div className="w-full space-y-20">
      {/* Strategies */}
      <div className="space-y-16">
        {strategies.map((strategy, idx) => (
          <section key={strategy.title} className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {idx === 0 && <Zap className="h-5 w-5" />}
                  {idx === 1 && <Settings2 className="h-5 w-5" />}
                  {idx === 2 && <Layers className="h-5 w-5" />}
                </div>
                <h2 className="text-3xl font-black tracking-tight">{strategy.title}</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {strategy.description}
              </p>
              
              {strategy.points && (
                <ul className="space-y-4 pt-4">
                  {strategy.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 font-bold text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="space-y-4">
              {strategy.example && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-border bg-card/30 p-6 space-y-4">
                     <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{strategy.example.title}</span>
                     </div>
                     <code className="text-xs font-mono text-muted-foreground block bg-muted/50 p-3 rounded-lg">{strategy.example.code}</code>
                  </div>
                  <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 space-y-4 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-150 transition-transform">
                        <Palette className="h-12 w-12" />
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono text-primary uppercase tracking-widest font-black">{strategy.updated?.title}</span>
                     </div>
                     <code className="text-xs font-mono text-primary block bg-primary/10 p-3 rounded-lg font-bold">{strategy.updated?.code}</code>
                  </div>
                </div>
              )}

              {strategy.code && !strategy.example && (
                <div className="bg-[#0f0f0f] border border-white/5 rounded-3xl overflow-hidden shadow-2xl h-full">
                  <div className="px-6 py-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Example.tsx</span>
                  </div>
                  <pre className="p-8 font-mono text-xs leading-relaxed text-blue-50/80">
                    <code>{strategy.code}</code>
                  </pre>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Global Theming */}
      <section className="relative rounded-[3rem] overflow-hidden border border-border bg-card/30">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
         <div className="grid lg:grid-cols-2">
            <div className="p-12 space-y-6">
               <h2 className="text-4xl font-black tracking-tight">{theming.title}</h2>
               <p className="text-lg text-muted-foreground leading-relaxed">
                  {theming.description}
               </p>
               <div className="flex flex-wrap gap-4 pt-4">
                  <div className="px-4 py-2 rounded-full border border-border bg-background text-xs font-bold">globals.css</div>
                  <div className="px-4 py-2 rounded-full border border-border bg-background text-xs font-bold">Tailwind variables</div>
                  <div className="px-4 py-2 rounded-full border border-border bg-background text-xs font-bold">CSS custom properties</div>
               </div>
            </div>
            <div className="bg-[#0f0f0f] border-l border-white/5 p-8 flex items-center">
               <pre className="font-mono text-sm leading-relaxed text-blue-100/90 w-full">
                  <code>{theming.code}</code>
               </pre>
            </div>
         </div>
      </section>
    </div>
  );
}
