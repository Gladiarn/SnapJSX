export default function GuidePage() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-24">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Developer Guide</h1>
        <p className="text-lg text-muted-foreground">
          Tutorials, best practices, and conceptual deep-dives for building with SnapJSX.
        </p>
      </header>
      
      <div className="prose dark:prose-invert max-w-none">
        <p>This guide section is currently under development. Here you will find tutorials on:</p>
        <ul>
          <li>Advanced Framer Motion integration</li>
          <li>Building custom UI blocks from scratch</li>
          <li>Architecting your own registry systems</li>
        </ul>
      </div>
    </main>
  );
}
