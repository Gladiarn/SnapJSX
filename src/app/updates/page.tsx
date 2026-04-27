"use client";

import { ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";
import { Pagination } from "@/components/ui/pagination";

export default function UpdatesPage() {
  const [updatesLog] = useState([
    {
      version: "v0.1.11",
      date: "April 28, 2026",
      title: "UI/UX: Enhanced Navigation & Breadcrumbs",
      summary:
        "Refined navigation path clarity and improved search accessibility on mobile devices.",
      details: [
        "SubNavbar Breadcrumbs: Refactored to use semantic 'title' and 'subtitle' props derived from page state. This provides cleaner breadcrumb paths (e.g., 'Core Components / Primary Button') compared to slug-parsing, while dynamically hiding redundant labels.",
        "Mobile Search Integration: Added a dedicated search trigger button to the mobile navigation menu, ensuring search functionality is accessible on all device sizes.",
        "UX Consistency: Search trigger in mobile menu automatically handles UI state by closing the menu upon invocation.",
      ],
    },
    {
      version: "v0.1.10",
      date: "April 28, 2026",
      title: "UI/UX: Global Scrollbar Design",
      summary:
        "Standardized scrollbar appearance across the application to match the site's gold theme.",
      details: [
        "Implemented custom thin scrollbar styles in globals.css using system variables.",
        "Ensured scrollbar track is transparent and the thumb matches the brand 'primary' color with a subtle hover effect.",
        "Maintained cross-browser compatibility with standard CSS scrollbar properties.",
      ],
    },
    {
      version: "v0.1.9",
      date: "April 28, 2026",
      title: "UI/UX: Breadcrumb Refactoring",
      summary:
        "Refined sub-navbar navigation path to use explicit page titles and subtitles.",
      details: [
        "Updated SubNavbar to accept 'title' and 'subtitle' props from the DocPage, providing cleaner and more reliable breadcrumb paths compared to string-parsing the active slug.",
        "Ensured breadcrumbs only display sub-titles that differ from the category title, preventing redundant UI labels.",
      ],
    },
    {
      version: "v0.1.8",
      date: "April 28, 2026",
      title: "UI/UX: SubNavbar Breadcrumb Refinement",
      summary:
        "Refactored the sub-navigation breadcrumbs for better visual hierarchy and clarity.",
      details: [
        "Updated SubNavbar to parse activeSection slugs, replacing hyphens with '/' separators to display a breadcrumb-style navigation path.",
        "Applied capitalization styling to breadcrumb segments for a more professional UI appearance.",
      ],
    },
    {
      version: "v0.1.7",
      date: "April 27, 2026",
      title: "Navigation UX: Persistent Sidebar Accordions",
      summary:
        "Enhanced sidebar navigation by ensuring category accordions persist when a sub-item is active.",
      details: [
        "Updated sidebar logic to initialize 'open' state based on the active path, automatically expanding categories when their children are navigated to.",
        "Improved navigation flow by preventing category collapse during route transitions, ensuring a consistent and expected state.",
      ],
    },
    {
      version: "v0.1.6",
      date: "April 27, 2026",
      title: "Performance Optimization: Routing & Rendering",
      summary:
        "Optimized documentation navigation responsiveness through memoization and improved rendering logic.",
      details: [
        "Implemented React.memo and useMemo across DocsContent and GenericCategoryPage to prevent redundant re-renders during route transitions.",
        "Optimized registry lookup logic by memoizing category identification, significantly reducing overhead on navigation.",
        "Refactored variant filtering in GenericCategoryPage into a stable memoized hook, ensuring component lists only re-calculate when URL parameters change.",
        "Maintained structural integrity and scalability while achieving a snappier, more responsive navigation experience.",
      ],
    },
    {
      version: "v0.1.5",
      date: "April 27, 2026",
      title: "Advanced Routing & Search Modal Refinement",
      summary:
        "Refined deep-linking architecture and streamlined navigation paths for enhanced developer experience.",
      details: [
        "Implemented native support for '/docs/{title}/all' routes, enabling users to view the entire library for a category without subcategory-level filtering.",
        "Refactored Search Modal URL construction to follow the canonical '/docs/{title}/{category}/{subcategory}' path format, ensuring direct routing parity with the sidebar navigation.",
        "Synchronized search results with the primary routing engine; clicking a search result now triggers native Next.js router navigation rather than custom event dispatching, fixing potential state inconsistencies.",
        "Standardized slug processing across DocsContent and GenericCategoryPage, ensuring that URL segments are correctly parsed for both 'all' routes and granular component filtering.",
        "Cleaned up the Search Modal component, removing unused imports and refactoring the logic for list item selection and routing, leading to improved code readability and maintainability.",
        "Rigorous quality assurance: executed full linting (Biome) to resolve unused imports, type mismatches, and radix-missing warnings, followed by a successful production build (Next.js 16.2.4).",
      ],
    },
    {
      version: "v0.1.4",
      date: "April 27, 2026",
      title: "Search Modal Implementation & Performance Optimization",
      summary:
        "Engineered a high-performance, registry-driven Command Palette (Search Modal) and refined global navigation sync.",
      details: [
        "Initial Implementation: Architected a global Search Modal with a decoupled state-driven interface, allowing it to render at the root level.",
        "Routing Engine: Implemented custom event-based synchronization between the Modal and the Sidebar to ensure atomic routing transitions without URL fragment pollution.",
        "Performance Tuning: Eliminated React render bottlenecks by moving hover-states to CSS, optimizing list indexing with useMemo, and memoizing ResultItems.",
        "UX Polish: Refined visual aesthetics by removing clunky transition effects in favor of instantaneous, reactive interactions.",
        "Stability: Stabilized component indexing by tightly coupling the search engine to the central sidebar store, automatically reflecting any registry changes.",
        "Quality Assurance: Rigorously linted for A11y, resolved strict routing issues, and verified production stability via full-stack build checks.",
      ],
    },
    {
      version: "v0.1.3",
      date: "April 26, 2026",
      title: "Architecture Stabilization & Registry-Driven Routing",
      summary:
        "Completed a comprehensive refactor of the documentation architecture for extreme scalability.",
      details: [
        "Registry Hub: Consolidated all UI block definitions into a centralized, type-safe registry-hub.",
        "Generic Rendering: Replaced category-specific pages with a single, reusable 'GenericCategoryPage' engine.",
        "Routing Precision: Standardized sidebar navigation to 'Category-Subcategory' paths for rock-solid routing.",
        "Mobile Responsiveness: Optimized grid layouts and code viewers to account for fixed-width sidebar constraints.",
        "Performance Tuning: Replaced heavy Framer Motion height-transitions with GPU-accelerated CSS to eliminate scroll lag.",
        "Accessibility: Resolved all A11y warnings including missing button types and SVG titles.",
        "Code Quality: Cleaned codebase of linting regressions (noArrayIndexKey, unused imports, explicit types).",
        "Fullstack Readiness: Transitioned all static documentation data into a stateful pattern to facilitate future backend integration.",
      ],
    },
    {
      version: "v0.1.2",
      date: "April 26, 2026",
      title: "UI Performance Optimization & Routing Stability",
      summary:
        "Refined navigation routing and optimized component animations for a snappier feel.",
      details: [
        "Replaced Framer Motion code viewer animations with optimized CSS transitions to eliminate layout lag.",
        "Strictly coupled sidebar navigation to component registry using full-path identifiers.",
        "Fixed 'All' tab routing and ensured category-level gallery rendering.",
        "Stabilized build processes with type-safe React.createElement patterns.",
      ],
    },
    {
      version: "v0.1.1",
      date: "April 26, 2026",
      title: "Registry-Driven Documentation Expansion",
      summary:
        "Refactored the documentation architecture to be fully registry-driven and modular.",
      details: [
        "Implemented GenericCategoryPage for scalable UI component showcasing.",
        "Transitioned to a strictly scoped navigation identifier system (Category-SubItem) for precise routing.",
        "Automated sidebar navigation with explicit 'All' tabs for every category.",
        "Standardized component registration with local and global registry manifests.",
      ],
    },
    {
      version: "v0.1.0",
      date: "April 25, 2026",
      title: "Initial Launch & Component Library Setup",
      summary:
        "SnapJSX foundation is laid. Components grouped, documentation system scaffolded, and branding unified.",
      details: [
        "Implemented responsive Navbar with a search-first approach.",
        "Established centralized 'landing-grid' background pattern.",
        "Built a dynamic, collapsible Documentation sidebar following a structured registry pattern.",
        "Integrated Framer Motion for smooth UI transitions.",
        "Created a robust directory structure for landing page, layout, and documentation components.",
      ],
    },
    {
      version: "v0.0.9",
      date: "April 20, 2026",
      title: "Core Design System Implementation",
      summary: "Basic layout primitives and landing page sections completed.",
      details: [
        "Global dark mode configuration with next-themes.",
        "Setup Tailwind CSS typography and branding constants.",
        "Developed Hero, Stats, and How-It-Works sections.",
        "Introduced consistent styling using glass-morphism aesthetic.",
      ],
    },
    {
      version: "v0.0.8",
      date: "April 15, 2026",
      title: "Refined Navigation",
      summary: "Improved mobile menu and navigation responsiveness.",
      details: [
        "Added mobile drawer.",
        "Optimized search bar.",
        "Improved active link state.",
      ],
    },
    {
      version: "v0.0.7",
      date: "April 10, 2026",
      title: "Theme Polishing",
      summary: "Enhanced color palette and theme toggle animations.",
      details: ["Smoother theme transitions.", "Improved contrast ratios."],
    },
    {
      version: "v0.0.6",
      date: "April 5, 2026",
      title: "Documentation Framework",
      summary: "Set up dynamic doc routing and sidebar.",
      details: ["Implemented catch-all routing.", "Added sidebar resizing."],
    },
    {
      version: "v0.0.5",
      date: "March 30, 2026",
      title: "Component Registry",
      summary: "Started component registry infrastructure.",
      details: ["Refactored API route handlers.", "Created component-service."],
    },
    {
      version: "v0.0.4",
      date: "March 25, 2026",
      title: "Initial Styling",
      summary: "Standardized Tailwind setup.",
      details: ["Configured PostCSS.", "Added global CSS variables."],
    },
    {
      version: "v0.0.3",
      date: "March 20, 2026",
      title: "Project Bootstrapped",
      summary: "Initialized the Next.js project.",
      details: ["Project scaffolded.", "TypeScript enabled."],
    },
  ]);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("1");
  const itemsPerPage = 5;

  const totalPages = Math.ceil(updatesLog.length / itemsPerPage);
  const paginatedUpdates = updatesLog.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePagination = (page: number) => {
    setCurrentPage(page);
    setInputValue(page.toString());
  };

  const toggleItem = (version: string) => {
    setOpenItems((prev) => ({ ...prev, [version]: !prev[version] }));
  };

  return (
    <main className="container mx-auto max-w-6xl px-4 py-24">
      <header className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-widest mb-6">
          <Sparkles className="w-3 h-3" />
          Release History
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Development Log
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          Tracking the evolution of SnapJSX, from architectural shifts to
          feature releases.
        </p>
      </header>

      <div className="relative border-l-2 border-border ml-2 space-y-12">
        {paginatedUpdates.map((update) => (
          <div key={update.version} className="relative pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-background bg-primary ring-2 ring-primary/20" />
            <div className="bg-card/50 rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-colors duration-200 will-change-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="text-primary font-mono font-bold text-lg">
                  {update.version}
                </span>
                <span className="text-sm text-muted-foreground font-medium">
                  {update.date}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {update.title}
              </h3>
              <p className="text-muted-foreground mb-6">{update.summary}</p>
              {openItems[update.version] && (
                <ul className="space-y-3 mb-6 border-t border-border/50 pt-6 animate-in slide-in-from-top-2">
                  {update.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-sm text-foreground/80"
                    >
                      <span className="text-primary mt-1">✦</span> {detail}
                    </li>
                  ))}
                </ul>
              )}
              <button
                type="button"
                onClick={() => toggleItem(update.version)}
                className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider hover:text-primary/80 transition-colors"
              >
                {openItems[update.version]
                  ? "Hide technical logs"
                  : "Read full technical logs"}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${openItems[update.version] ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePagination={handlePagination}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </main>
  );
}
