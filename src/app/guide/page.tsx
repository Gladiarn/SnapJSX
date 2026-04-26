import { Sparkles } from "lucide-react";
import { MaintenancePlaceholder } from "@/components/ui/core/maintenance/maintenance-placeholder";

export default function GuidePage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-24">
      <header className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-widest mb-6">
          <Sparkles className="w-3 h-3" />
          Guides & Tutorials
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Developer Guide
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          Master the SnapJSX ecosystem with in-depth tutorials, best practices,
          and conceptual deep-dives.
        </p>
      </header>

      <MaintenancePlaceholder />
    </main>
  );
}
