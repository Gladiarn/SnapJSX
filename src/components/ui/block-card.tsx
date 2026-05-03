"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Code2, Copy, Eye } from "lucide-react";
import { useState } from "react";

interface BlockCardProps {
  title: string;
  category: string;
  description: string;
  size: string;
  preview: React.ReactNode;
  codeJsx: string;
  codeHtml: string;
}

export function BlockCard({
  title,
  description,
  category,
  size,
  preview,
  codeJsx,
  codeHtml,
}: BlockCardProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lang, setLang] = useState<"jsx" | "html">("jsx");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const copyToClipboard = () => {
    const code = lang === "jsx" ? codeJsx : codeHtml;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="group relative flex flex-col rounded-[2.5rem] border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5">
        {/* Category Label at the top */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[10px] font-black tracking-[0.2em] text-muted-foreground uppercase">
              {category}
            </span>
          </div>
          <span className="font-mono text-[10px] font-bold tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/10">
            {size}
          </span>
        </div>

        {/* Preview Area - Larger and more immersive */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] bg-muted/30 border border-border flex items-center justify-center mb-8 group/preview">
          {/* Decorative Grid */}
          <div
            className="absolute inset-0 opacity-[0.2] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--border) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 w-full h-full scale-[0.4] origin-center flex items-center justify-center pointer-events-none group-hover/preview:scale-[0.42] transition-transform duration-500">
            <div className="w-[1200px] bg-background rounded-[3rem] shadow-2xl overflow-hidden border border-border">
              {preview}
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setIsPreviewOpen(true)}
              className="px-4 py-2 bg-foreground text-background rounded-xl font-bold text-xs flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Eye className="w-3.5 h-3.5" />
              Live Preview
            </button>
          </div>
        </div>

        {/* Title & Description */}
        <div className="mb-8 px-2">
          <h3 className="font-black text-2xl tracking-tight mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto">
          <button
            type="button"
            onClick={() => setShowCode(!showCode)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-2xl border h-12 text-xs font-black uppercase tracking-widest transition-all ${
              showCode
                ? "bg-primary border-primary text-primary-foreground"
                : "border-border hover:bg-muted"
            }`}
          >
            <Code2 className="h-4 w-4" />
            {showCode ? "Close Code" : "Get Code"}
          </button>
          <button
            type="button"
            onClick={copyToClipboard}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border hover:bg-muted transition-all text-primary"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Code Viewer */}
        <AnimatePresence>
          {showCode && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-6 rounded-2xl bg-muted/50 border border-border p-4 text-[11px] font-mono relative">
                <div className="flex gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => setLang("jsx")}
                    className={`px-3 py-1 rounded-lg font-bold transition-all ${lang === "jsx" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-background/50 text-muted-foreground hover:bg-background"}`}
                  >
                    JSX
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang("html")}
                    className={`px-3 py-1 rounded-lg font-bold transition-all ${lang === "html" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-background/50 text-muted-foreground hover:bg-background"}`}
                  >
                    HTML
                  </button>
                </div>
                <div className="max-h-[300px] overflow-auto custom-scrollbar pr-2">
                  <pre className="text-muted-foreground leading-relaxed">
                    {lang === "jsx" ? codeJsx : codeHtml}
                  </pre>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fullscreen Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col"
          >
            <div className="h-16 border-b border-border flex items-center justify-between px-6 bg-card">
              <div className="flex items-center gap-4">
                <h2 className="font-black tracking-tight">{title}</h2>
                <div className="h-4 w-px bg-border" />
                <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest">
                  {category} Preview
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  {copied ? "Copied!" : "Copy Snippet"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    role="img"
                    aria-label="Close Preview"
                  >
                    <title>Close Preview</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto bg-background/50 p-4 md:p-12 lg:p-24">
              <div className="w-full max-w-7xl mx-auto rounded-[3rem] shadow-2xl border border-border bg-background overflow-hidden">
                {preview}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
