"use client"

import { useState } from "react"
import { Copy, Code2 } from "lucide-react"

interface ComponentCardProps {
  title: string
  category: string
  description: string
  size: string
  preview: React.ReactNode
  codeJsx: string
  codeHtml: string
}

export function ComponentCard({ title, description, category, size, preview, codeJsx, codeHtml }: ComponentCardProps) {
  const [showCode, setShowCode] = useState(false)
  const [lang, setLang] = useState<"jsx" | "html">("jsx")

  const copyToClipboard = () => {
    const code = lang === "jsx" ? codeJsx : codeHtml
    navigator.clipboard.writeText(code)
  }

  return (
    <div className="group relative flex flex-col rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50">
      {/* Category Label at the top */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
          {category}
        </span>
        <span className="font-mono text-[10px] font-medium tracking-wider text-muted-foreground uppercase bg-muted px-2 py-1 rounded">
          {size}
        </span>
      </div>

      {/* Preview Area */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-background border border-border flex items-center justify-center mb-4">
        {/* Chessboard Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
          style={{
            backgroundImage: "linear-gradient(45deg, var(--muted-foreground) 25%, transparent 25%, transparent 75%, var(--muted-foreground) 75%, var(--muted-foreground)), linear-gradient(45deg, var(--muted-foreground) 25%, transparent 25%, transparent 75%, var(--muted-foreground) 75%, var(--foreground))",
            backgroundSize: "14px 14px",
            backgroundPosition: "0 0, 7px 7px"
          }}
        />

        {/* Isolated Preview Container */}
        <div className="relative z-10 flex items-center justify-center p-8">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            {preview}
          </div>
        </div>
      </div>

      {/* Title & Description */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 mt-auto">
        <button
          type="button"
          onClick={() => setShowCode(!showCode)}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-input h-10 text-sm font-medium hover:bg-accent transition-all"
        >
          <Code2 className="h-4 w-4" />
          {showCode ? "Hide Code" : "View Code"}
        </button>
        <button
          type="button"
          onClick={copyToClipboard}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-input hover:bg-accent transition-all"
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>

      {/* Code Viewer */}
      {showCode && (
        <div className="mt-4 p-4 rounded-lg bg-muted text-xs font-mono overflow-auto max-h-64">
          <div className="flex gap-2 mb-2">
            <button 
              type="button"
              onClick={() => setLang("jsx")} 
              className={`px-2 py-1 rounded ${lang === "jsx" ? "bg-primary text-primary-foreground" : "bg-background"}`}
            >
              JSX
            </button>
            <button 
              type="button"
              onClick={() => setLang("html")} 
              className={`px-2 py-1 rounded ${lang === "html" ? "bg-primary text-primary-foreground" : "bg-background"}`}
            >
              HTML/CSS
            </button>
          </div>
          <pre>{lang === "jsx" ? codeJsx : codeHtml}</pre>
        </div>
      )}
    </div>
  )
}
