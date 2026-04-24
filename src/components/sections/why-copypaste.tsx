import { Zap, ShieldCheck, BookOpen } from "lucide-react"

const FEATURES = [
  {
    title: "Velocity",
    description: "Stop writing boilerplate. Focus on the interface. Drop in components and ship faster than ever.",
    icon: Zap,
  },
  {
    title: "Consistency",
    description: "Pixel-perfect styles, every single time. Shared tokens ensure your UI stays coherent as you scale.",
    icon: ShieldCheck,
  },
  {
    title: "Learnability",
    description: "Fullstack logic explained, not just hidden. Every component comes with documentation on how it works.",
    icon: BookOpen,
  },
]

export function WhySnapJSX() {
  return (
    <section className="py-24 ">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why SnapJSX?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built for developers who care about speed, quality, and maintainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-border  hover:border-primary/50 transition-colors"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
