"use client"

import * as React from "react"
import Link from "next/link"
import { Moon, Sun, Search, Command, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = ["MCP", "Blocks", "Icons", "Docs", "Pricing", "Examples"]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-mono text-xl font-bold tracking-tighter">
            <span className="text-primary">&lt;/</span>
            SnapJSX
            <span className="text-primary">/&gt;</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-input hover:bg-accent transition-colors"
          >
            {mounted ? (
              <>
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </>
            ) : (
              <div className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </button>

          <button
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-md border border-input hover:bg-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          <button className="hidden sm:flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-primary hover:bg-primary/90 transition-all active:scale-95">
            Get Started
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full border-b border-border bg-background/95 backdrop-blur-lg animate-in slide-in-from-top-4 p-6">
          <div className="flex flex-col gap-6">
            {navLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="text-lg font-semibold text-foreground hover:text-primary transition-colors flex items-center justify-between"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="pt-6 border-t border-border">
              <button className="w-full h-12 flex items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
