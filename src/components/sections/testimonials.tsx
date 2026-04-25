"use client"

const TESTIMONIALS = [
  {
    quote: "SnapJSX saved me hours of styling. It’s like having a design system in my pocket.",
    author: "Alex Rivera",
    role: "Senior Frontend Engineer"
  },
  {
    quote: "The cleanest JSX I've ever copied. No bloat, just pure, functional beauty.",
    author: "Sarah Chen",
    role: "Fullstack Developer"
  },
  {
    quote: "Finally, a library that respects my time. The components just work out of the box.",
    author: "James Wilson",
    role: "Product Designer"
  },
  {
    quote: "The attention to detail in these components is unmatched. Truly production-ready.",
    author: "Elena Rodriguez",
    role: "Lead Developer"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
          Loved by Developers
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Hear what the community is saying about their experience building with SnapJSX.
        </p>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex overflow-x-auto gap-6 py-8 px-4 -mx-4 no-scrollbar snap-x snap-mandatory justify-start md:justify-center">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="flex-none w-[320px] md:w-[400px] snap-center p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-all duration-300 hover:border-primary/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <p className="text-lg italic text-foreground/80 leading-relaxed">
                &quot;{t.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
