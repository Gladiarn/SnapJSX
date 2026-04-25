import React from "react";

interface ComponentPlaceholderProps {
  title: string;
}

export function ComponentPlaceholder({ title }: ComponentPlaceholderProps) {
  return (
    <div className="w-full space-y-8">
      <div className="p-12 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center text-center space-y-4">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-primary animate-pulse" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Under Construction</h3>
          <p className="text-muted-foreground max-w-sm">
            We're currently working on the detailed documentation and code examples for {title}. Check back soon!
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold">What to expect:</h3>
        <ul className="grid gap-4 md:grid-cols-2">
          {[
            "Multiple variations and styles",
            "Full responsiveness out of the box",
            "Accessibility (WAI-ARIA) compliant markup",
            "Copy-paste ready Tailwind CSS",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/50">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
