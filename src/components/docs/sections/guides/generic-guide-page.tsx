"use client";

import { BookOpen, ChevronRight, Clock } from "lucide-react";
import { memo } from "react";
import type { Guide } from "@/content/guides";

interface GenericGuidePageProps {
  guide: Guide;
}

export const GenericGuidePage = memo(function GenericGuidePage({
  guide,
}: GenericGuidePageProps) {
  return (
    <div className="w-full space-y-12">
      <header className="space-y-6 pb-12 border-b border-border">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
            <guide.icon className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
              {guide.category} Guide
            </span>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
              <Clock className="w-3 h-3" />
              {guide.readTime} read
            </div>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
          {guide.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          {guide.description}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3 space-y-16">
          {guide.sections?.map((section, idx) => (
            <section
              key={section.title}
              className="space-y-6 scroll-mt-32"
              id={`section-${idx}`}
            >
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {section.title}
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {section.content}
              </div>
              {section.code && (
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        {section.code.language}
                      </span>
                    </div>
                    <pre className="p-6 text-sm font-mono overflow-x-auto bg-card/50">
                      <code className="text-foreground">
                        {section.code.value}
                      </code>
                    </pre>
                  </div>
                </div>
              )}
            </section>
          ))}

          {(!guide.sections || guide.sections.length === 0) && (
            <div className="py-24 text-center border border-dashed border-border rounded-[2.5rem]">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
              <p className="text-muted-foreground italic">
                Full content for this guide is currently being drafted.
              </p>
            </div>
          )}
        </div>

        <aside className="hidden lg:block space-y-8 sticky top-32 h-fit">
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">
              On this page
            </h4>
            <nav className="space-y-2">
              {guide.sections?.map((section, idx) => (
                <a
                  key={section.title}
                  href={`#section-${idx}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
});
