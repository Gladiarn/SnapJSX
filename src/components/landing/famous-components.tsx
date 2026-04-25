import { Copy } from "lucide-react";

const COMPONENTS = [
  {
    name: "Glass Morphism Card",
    category: "UI",
    size: "2.4kb",
    description: "Frosted glass effect with sleek borders.",
  },
  {
    name: "Infinite Scroll List",
    category: "Logic",
    size: "4.1kb",
    description: "Smooth, virtualized list for heavy data.",
  },
  {
    name: "Radial Context Menu",
    category: "UX",
    size: "3.2kb",
    description: "Modern circular menu for quick actions.",
  },
];

export function FamousComponents() {
  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Famous Components
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most loved snippets, optimized for performance and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPONENTS.map((comp) => (
            <div
              key={comp.name}
              className="group relative flex flex-col rounded-xl border border-border  p-2 transition-all hover:scale-[1.01] hover:shadow-primary hover:border-primary/50"
            >
              <div className="flex items-center justify-between px-3 py-2">
                <span className="font-mono text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
                  {comp.category} · {comp.size}
                </span>
              </div>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg  flex items-center justify-center mb-4">
                <div
                  className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)",
                    backgroundSize: "16px 16px",
                  }}
                />
                <div className="h-24 w-40 rounded-lg /50 border border-border shadow-lg backdrop-blur-md flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-primary/20 animate-pulse" />
                </div>
              </div>

              <div className="px-3 pb-4 flex-1">
                <h3 className="text-lg font-semibold mb-1">{comp.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {comp.description}
                </p>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-input h-10 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all">
                  <Copy className="h-4 w-4" />
                  Copy Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
