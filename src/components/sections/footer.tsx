import Link from "next/link"

const FOOTER_LINKS = [
  {
    title: "Product",
    links: ["Components", "Blocks", "Icons", "Templates"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Showcase", "Blog", "Tutorials"],
  },
  {
    title: "Community",
    links: ["GitHub", "Discord", "Twitter", "Authors"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "License", "Cookies"],
  },
]

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
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm font-bold tracking-tighter">
            <span className="text-primary">&lt;/</span>
            SnapJSX
            <span className="text-primary">/&gt;</span>
          </div>
          <p className="text-xs text-muted-foreground text-center" suppressHydrationWarning>
            © {new Date().getFullYear()} ICZB. Built with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
