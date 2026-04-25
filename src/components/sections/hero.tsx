import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-24 md:pt-32 md:pb-32">
      {/* Background Effects */}

      <div className="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      

      <div className="container mx-auto flex max-w-[1152px] flex-col items-center px-4 text-center">
        <div className="mb-6 flex items-center gap-2 rounded-full border border-border  px-4 py-1.5 text-xs font-medium backdrop-blur-sm">
          <Sparkles className="h-3 w-3 text-primary" />
          <span>Zero Dependencies</span>
        </div>

        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          Copy. Paste. <span className="text-primary">Complete.</span>
          <br />
          <span className="text-muted-foreground">
            Barebone JSX for Modern Apps.
          </span>
        </h1>

        <p className="mb-10 max-w-[672px] text-lg text-muted-foreground md:text-xl">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-primary hover:bg-primary/90 transition-all active:scale-95">
            Browse Components
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="flex h-12 items-center justify-center rounded-lg border border-input  px-8 py-3 text-base font-semibold hover:bg-accent transition-all active:scale-95">
            Learn More
          </button>
        </div>

        {/* Animated Illustration Placeholder */}
      </div>
    </section>
  );
}
