export default function GuidePage() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-6">Developer Guide</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Tutorials, best practices, and conceptual deep-dives for building with SnapJSX.
      </p>
      
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
