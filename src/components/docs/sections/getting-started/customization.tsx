import { Layers, Palette, Settings2, Zap } from "lucide-react";
import { useState } from "react";

export function Customization() {
  const [data] = useState({
    title: "Customization",
    description:
      "SnapJSX provides full source control. There are three primary ways to customize your components.",
    strategies: [
      {
        title: "Utility-First Customization",
        description:
          "The fastest way to customize is by using Tailwind's utility classes. Since the code is yours, you can change margins, paddings, and colors directly in the markup.",
        example: {
          title: "Original",
          code: '<div className="p-4 bg-white border border-border">',
        },
        updated: {
          title: "Customized",
          code: '<div className="p-8 bg-slate-50 border-2 border-primary shadow-xl">',
        },
      },
      {
        title: "Logic & State Extension",
        description:
          "Unlike rigid library components, SnapJSX components are standard React functions. You can easily add state, refs, or custom event handlers.",
        code: "export function CustomModal() {\n  const [isOpen, setIsOpen] = useState(false);\n  const modalRef = useRef(null);\n  \n  // Add your own custom logic here\n  useEffect(() => {\n    // Intersection observers, event listeners, etc.\n  }, []);\n\n  return (\n    // Your copy-pasted JSX here\n  );\n}",
        language: "typescript",
      },
      {
        title: "Design System Integration",
        description:
          "Integrate your own design system by replacing our default variables with your own or using your Tailwind config's theme extension.",
        points: [
          "Consistent spacing using your Tailwind 'spacing' scale",
          "Color synchronization with your brand palette",
          "Typography alignment with your chosen font families",
        ],
      },
    ],
    theming: {
      title: "Global Theming",
      description:
        "Our components respect your system-wide theme settings through CSS variables. Edit your main CSS file to change the feel of all components at once.",
      code: ":root {\n  --primary: 220 100% 50%;\n  --radius: 1rem;\n  --font-sans: 'Inter', sans-serif;\n}\n\n.dark {\n  --primary: 220 100% 70%;\n}",
      language: "css",
    },
  });

  const { strategies, theming } = data;

  return (
    <div className="w-full space-y-20">
      {/* Strategies */}
      <div className="space-y-16">
        {strategies.map((strategy, idx) => (
          <section
            key={strategy.title}
            className="grid gap-8 md:gap-10 grid-cols-1 xl:grid-cols-2"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {idx === 0 && <Zap className="h-5 w-5" />}
                  {idx === 1 && <Settings2 className="h-5 w-5" />}
                  {idx === 2 && <Layers className="h-5 w-5" />}
                </div>
                <h2 className="text-3xl font-black tracking-tight">
                  {strategy.title}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {strategy.description}
              </p>

              {strategy.points && (
                <ul className="space-y-4 pt-4">
                  {strategy.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 font-bold text-sm"
                    >
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
                  <div className="rounded-xl md:rounded-2xl border border-border bg-card/30 p-4 md:p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                        {strategy.example.title}
                      </span>
                    </div>
                    <code className="text-[10px] md:text-xs font-mono text-muted-foreground block bg-muted/50 p-2 md:p-3 rounded-lg overflow-x-auto">
                      {strategy.example.code}
                    </code>
                  </div>
                  <div className="rounded-xl md:rounded-2xl border border-primary/30 bg-primary/5 p-4 md:p-6 space-y-4 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-150 transition-transform">
                      <Palette className="h-8 w-8 md:h-12 md:w-12" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono text-primary uppercase tracking-widest font-black">
                        {strategy.updated?.title}
                      </span>
                    </div>
                    <code className="text-[10px] md:text-xs font-mono text-primary block bg-primary/10 p-2 md:p-3 rounded-lg font-bold overflow-x-auto">
                      {strategy.updated?.code}
                    </code>
                  </div>
                </div>
              )}

              {strategy.code && !strategy.example && (
                <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl h-full">
                  <div className="px-4 py-3 md:px-6 md:py-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                      Example.tsx
                    </span>
                  </div>
                  <pre className="p-4 md:p-8 font-mono text-[10px] md:text-xs leading-relaxed text-blue-50/80 overflow-x-auto">
                    <code>{strategy.code}</code>
                  </pre>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Global Theming */}
      <section className="relative rounded-3xl md:rounded-[3rem] overflow-hidden border border-border bg-card/30">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              {theming.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {theming.description}
            </p>
            <div className="flex flex-wrap gap-2 md:gap-4 pt-2 md:pt-4">
              <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-border bg-background text-[10px] md:text-xs font-bold">
                globals.css
              </div>
              <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-border bg-background text-[10px] md:text-xs font-bold">
                Tailwind variables
              </div>
              <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-border bg-background text-[10px] md:text-xs font-bold">
                CSS custom properties
              </div>
            </div>
          </div>
          <div className="bg-[#0f0f0f] border-t lg:border-t-0 lg:border-l border-white/5 p-6 md:p-8 flex items-center overflow-x-auto">
            <pre className="font-mono text-xs md:text-sm leading-relaxed text-blue-100/90 w-full">
              <code>{theming.code}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
