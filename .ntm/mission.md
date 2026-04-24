# MISSION: Fullstack Component Registry - Master Directive

## 1. SOURCE OF TRUTH & BINDING
- Design Standard: ALL visual and layout decisions MUST be derived from `design_spec.md`. If a detail is not in the spec, refer to `palette.md` for tokens.
- Framework: Next.js 15+ (App Router).
- Registry Pattern: `registry.json` index + `/snippets` file storage.
- API Engine: `src/app/api/components/[name]/route.ts` must dynamically resolve paths.
- Resilience: All build steps must execute via `make build`. 
- Error Protocol: If build fails, analyze logs, apply hotfixes, and re-run. Do NOT stop until status is 0.

## 1. TECHNICAL STACK & ARCHITECTURE
- Framework: Next.js 15+ (App Router).
- Registry Pattern: `registry.json` (index) + `/snippets` (source).
- API Engine: `src/app/api/components/[name]/route.ts` must dynamically resolve paths.
- Resilience: All build steps must execute via `make build`. 
- Error Protocol: If build fails, analyze logs, apply hotfixes, and re-run. Do NOT stop until status is 0.

## 2. DESIGN & UX (Binding to design_spec.md)
- Aesthetic: Modern, high-contrast, "Shadcn-Standard" minimalism.
- Color System: Strict adherence to semantic variables defined in `palette.md` (no hardcoded colors).
- Theme: Next-themes implementation for Light/Dark mode.
- Interactive Standard: Hover-lift effects, yellow-tinted shadows, and 300ms transitions.

## 3. HOMEPAGE ARCHITECTURE (Scroll Flow)
Build the landing page (`src/app/page.tsx`) in this precise order:
1. Navbar: Sticky, backdrop-blur, search + theme toggle.
2. Hero: Centered, heavy typography, grid-pattern background, yellow radial highlights.
3. Trusted-By: Monochrome logo strip.
4. Famous Components: 3-column grid, interactive placeholder cards.
5. Why SnapJSX: 3-column feature grid with benefit-driven copy.
6. Testimonials: Quote block for developer credibility.
7. FAQ: Accordion-style layout.
8. Footer: 4-column structure with muted links.

## 4. EXECUTION WORKFLOW
1. Environment Check: Verify `next-themes` and Tailwind v4 setup.
2. Theming: Map palette variables in `globals.css` to Tailwind config.
3. Scaffolding: Create directory structure, build API resolver, and implement UI sections.
4. Validation: Execute `make build`.
5. Reporting: Output `build_report.log` summarizing status and component availability.

## 5. RECOVERY PROTOCOL
- If build fails: Log error -> Hotfix code -> Run `make build` -> Verify.
- Do not ask for human input for standard debugging. Proceed until success.