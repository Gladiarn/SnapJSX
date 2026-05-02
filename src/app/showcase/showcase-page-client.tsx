"use client";

import { motion } from "framer-motion";
import { Sparkles, Trophy } from "lucide-react";
import { useMemo, useState } from "react";
import { Pagination } from "@/components/ui/pagination";
import { ShowcaseCard } from "@/components/ui/showcase-card";
import { SHOWCASE_PROJECTS } from "@/content/showcase";

export function ShowcasePageClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("1");
  const itemsPerPage = 9;

  const featuredProject = useMemo(
    () => SHOWCASE_PROJECTS.find((p) => p.featured),
    [],
  );
  const regularProjects = useMemo(
    () => SHOWCASE_PROJECTS.filter((p) => !p.featured),
    [],
  );

  const totalPages = Math.ceil(regularProjects.length / itemsPerPage);
  const paginatedProjects = useMemo(() => {
    return regularProjects.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage,
    );
  }, [regularProjects, currentPage]);

  const handlePagination = (page: number) => {
    setCurrentPage(page);
    setInputValue(page.toString());
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <main className="container mx-auto max-w-6xl px-4 py-24 relative">
      {/* Premium Background Decor */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/2 blur-[120px] pointer-events-none" />

      {/* Header - Unique Asymmetrical Split Layout */}
      <header className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="max-w-2xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            <Trophy className="w-3.5 h-3.5" />
            Community Showcase
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]"
          >
            Built with <br />
            <span className="text-primary">SnapJSX.</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-md lg:text-right space-y-6"
        >
          <p className="text-xl text-muted-foreground leading-relaxed font-medium">
            Explore the next generation of web interfaces. From minimalist
            portfolios to complex dashboards, see how developers are pushing the
            boundaries of JSX.
          </p>
          <div className="h-1 w-24 bg-primary lg:ml-auto" />
        </motion.div>
      </header>

      {/* Featured Project Section - Adds 'Soul' and Visual Interest */}
      {featuredProject && currentPage === 1 && (
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">
              Featured Masterpiece
            </span>
          </div>
          <div className="grid grid-cols-1">
            <ShowcaseCard project={featuredProject} />
          </div>
        </section>
      )}

      {/* Showcase Grid - Ready for 2 per row (md:grid-cols-2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {paginatedProjects.map((project) => (
          <ShowcaseCard key={project.id} project={project} />
        ))}

        {/* Placeholder for "Your Project Here" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[16/10] rounded-[2.5rem] border-2 border-dashed border-border/50 bg-card/20 flex flex-col items-center justify-center p-12 text-center group hover:border-primary/30 transition-colors"
        >
          <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500">
            <Sparkles className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <h3 className="text-xl font-bold mb-2">Build something epic?</h3>
          <p className="text-sm text-muted-foreground max-w-[240px] mb-8 leading-relaxed">
            Submit your project to be featured in the SnapJSX community
            showcase.
          </p>
          <button
            type="button"
            className="px-8 py-3 bg-foreground text-background rounded-xl font-bold hover:scale-105 transition-transform active:scale-95 text-xs"
          >
            Submit Project
          </button>
        </motion.div>
      </div>

      {/* Pagination Integration */}
      {totalPages > 1 && (
        <div className="mt-20">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePagination={handlePagination}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
      )}

      {/* Bottom Stats - Scaled down for better consistency */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 pt-20 border-t border-border/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl font-black text-primary mb-2">100%</div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Source Ownership
            </p>
          </div>
          <div>
            <div className="text-4xl font-black text-primary mb-2">0.0ms</div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Framework Bloat
            </p>
          </div>
          <div>
            <div className="text-4xl font-black text-primary mb-2">
              Infinite
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Creative Freedom
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
