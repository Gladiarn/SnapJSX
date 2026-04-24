export function TrustedBy() {
  const FRAMEWORKS = ["Next.js", "Tailwind CSS", "React", "TypeScript", "Vercel", "Biome"]

  return (
    <section className="py-12 border-y border-border bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          Trusted by modern framework ecosystems
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {FRAMEWORKS.map((fw) => (
            <span key={fw} className="text-xl font-bold tracking-tighter md:text-2xl">
              {fw}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
