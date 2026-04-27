"use client";

import { Command, Menu, Moon, Search, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import * as React from "react";
import { SearchModal } from "./search-modal";

// Simple social icon components to avoid issues with Lucide imports
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const NAV_LINKS = [
  { title: "Components", href: "/components" },
  { title: "Blocks", href: "/blocks" },
  { title: "Guide", href: "/guide" },
  { title: "Showcase", href: "/showcase" },
  { title: "Updates", href: "/updates" },
];

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-mono text-xl font-bold tracking-tighter"
          >
            <span className="text-primary">&lt;</span>
            SnapJSX
            <span className="text-primary">/&gt;</span>
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Minimalist Search */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="hidden md:flex items-center gap-2 h-9 w-48 xl:w-64 rounded-md border border-input bg-background/50 px-3 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-all focus-within:ring-1 focus-within:ring-ring"
          >
            <Search className="h-4 w-4 shrink-0" />
            <span className="flex-1 text-left">Search...</span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
              <Command className="h-2.5 w-2.5" /> K
            </kbd>
          </button>

          <div className="hidden md:block h-4 w-[1px] bg-border mx-1" />

          {/* Social Icons */}
          <Link
            href="https://github.com/Gladiarn"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
          >
            <GithubIcon />
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
          >
            <TwitterIcon />
          </Link>

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
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-md border border-input hover:bg-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>

          <Link
            href="/docs"
            className="hidden sm:flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-primary hover:bg-primary/90 transition-all active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full border-b border-border bg-background/95 backdrop-blur-lg animate-in slide-in-from-top-4 p-6 shadow-xl">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`text-lg font-semibold transition-colors flex items-center justify-between ${
                    isActive ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              );
            })}

            <div className="pt-6 border-t border-border flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/Gladiarn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex h-10 items-center justify-center rounded-md border border-input hover:bg-accent transition-colors text-muted-foreground"
                >
                  <GithubIcon />
                  <span className="ml-2 text-sm font-medium">GitHub</span>
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex h-10 items-center justify-center rounded-md border border-input hover:bg-accent transition-colors text-muted-foreground"
                >
                  <TwitterIcon />
                  <span className="ml-2 text-sm font-medium">Twitter</span>
                </Link>
              </div>

              <Link
                href="/docs"
                className="w-full h-12 flex items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
