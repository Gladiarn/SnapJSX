"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface SimpleNavbarProps {
  logo?: string;
  links: NavLink[];
  className?: string;
}

/**
 * Simple Navbar - A minimalist top navigation bar.
 */
export function SimpleNavbar({
  logo = "SnapJSX",
  links,
  className = "",
}: SimpleNavbarProps) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`
        fixed top-0 left-0 right-0 z-40 px-8 h-20 
        flex items-center justify-between 
        bg-background/80 backdrop-blur-md border-b border-border/50 ${className}
      `}
    >
      <Link
        href="/"
        className="text-2xl font-black tracking-tighter text-foreground"
      >
        {logo}
        <span className="text-primary">.</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button type="button" className="md:hidden p-2 text-foreground">
          <Menu className="w-6 h-6" />
        </button>
        <div className="h-8 w-px bg-border/50 mx-2 hidden md:block" />
        <button
          type="button"
          className="px-5 py-2 rounded-xl bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20"
        >
          Get Started
        </button>
      </div>
    </motion.nav>
  );
}
