import { Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { MaintenancePlaceholder } from "@/components/ui/core/maintenance/maintenance-placeholder";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "Explore amazing projects built with SnapJSX. Get inspired by how others use our zero-dependency component registry.",
};

export default function ShowcasePage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-24">
      <header className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-widest mb-6">
          <Sparkles className="w-3 h-3" />
          Inspiration
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Showcase
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          See what developers have built using the SnapJSX ecosystem.
        </p>
      </header>

      <MaintenancePlaceholder />
    </main>
  );
}
