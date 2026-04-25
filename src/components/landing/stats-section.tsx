import { STATS } from "@/content/landing-page";

export function StatsSection() {
  return (
    <section className="py-8 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.header}
              </div>
              <div className="text-sm text-muted-foreground tracking-wider">
                {stat.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
