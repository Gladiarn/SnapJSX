"use client";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BasicBreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function BasicBreadcrumbs({
  items,
  className = "",
}: BasicBreadcrumbsProps) {
  return (
    <nav
      className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${className}`}
    >
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-2">
          {index > 0 && <span className="text-muted-foreground/30">/</span>}
          {item.href ? (
            <a
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
