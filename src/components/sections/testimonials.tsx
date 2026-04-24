const TESTIMONIALS = [
  {
    quote:
      "SnapJSX saved me hours of styling. It’s like having a design system in my pocket.",
    author: "Alex Rivera",
    role: "Senior Frontend Engineer",
  },
  {
    quote:
      "The cleanest JSX I've ever copied. No bloat, just pure, functional beauty.",
    author: "Sarah Chen",
    role: "Fullstack Developer",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 overflow-hidden relative bg-transparent">
      
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl border border-border /50 backdrop-blur-sm"
            >
              <div className="absolute -top-4 -left-4 text-6xl text-primary opacity-20 font-serif">
                “
              </div>
              <p className="text-xl italic mb-6 text-foreground/90">
                {t.quote}
              </p>
              <div>
                <p className="font-bold">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
