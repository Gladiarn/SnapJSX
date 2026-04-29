import Link from "next/link";

const FOOTER_LINKS = [
  {
    title: "SnapJSX",
    links: [
      { name: "Components", href: "/components" },
      { name: "Blocks", href: "/blocks" },
      { name: "Guides", href: "/guide" },
      { name: "Showcase", href: "/showcase" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs/getting-started/introduction" },
      { name: "Quick Start", href: "/docs/getting-started/quick-start" },
      { name: "Updates", href: "/updates" },
      { name: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "GitHub", href: "https://github.com/Gladiarn" },
      { name: "Discord", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "Contributing", href: "/docs/getting-started/introduction" },
    ],
  },
  {
    title: "Legal & Support",
    links: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "License", href: "#" },
      { name: "Security", href: "#" },
      { name: "Status", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className=" border-t border-border pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap justify-between gap-12 mb-16">
          {FOOTER_LINKS.map((section) => (
            <div key={section.title} className="min-w-[140px]">
              <h4 className="font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm font-bold tracking-tighter">
            <span className="text-primary">&lt;</span>
            SnapJSX
            <span className="text-primary">/&gt;</span>
          </div>
          <p
            className="text-xs text-muted-foreground text-center"
            suppressHydrationWarning
          >
            © {new Date().getFullYear()} ICZB. Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
