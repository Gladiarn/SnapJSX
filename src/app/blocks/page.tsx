export default function BlocksPage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-24">
      <header className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-widest mb-6">
          <span className="text-primary">✦</span>
          Component Modules
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Component Blocks
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          High-level functional blocks pre-assembled for rapid development.
        </p>
      </header>
    </main>
  );
}
