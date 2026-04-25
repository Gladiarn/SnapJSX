import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiVercel,
  SiBiome,
} from "react-icons/si";

export function TrustedBy() {
  const FRAMEWORKS = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Vercel", icon: SiVercel },
    { name: "Biome", icon: SiBiome },
  ];

  return (
    <section className="py-12 border-y border-border bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          Trusted by modern framework ecosystems
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {FRAMEWORKS.map((fw) => (
            <div key={fw.name} className="flex items-center gap-2">
              <fw.icon size={32} />
              <span className="text-xl font-bold tracking-tighter md:text-2xl">
                {fw.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
