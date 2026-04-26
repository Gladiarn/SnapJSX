# SnapJSX Roadmap & Mission Log

## 1. Mission Overview
**SnapJSX** is a minimalist, modern, and registry-driven UI component library. Our goal is to provide a clean, copy-pasteable component experience that prioritizes developer control, high-performance animations, and accessibility.

## 2. Architectural Design
- **Registry-Driven Registry**: We use a central `registry.json` and `registry-hub.ts` as our single source of truth for component discovery and metadata.
- **Component-State Pattern**: UI metadata and content are managed via component-level `useState` (pre-backend) and global state managed by `Zustand` (`src/lib/store.ts`).
- **Generic Rendering Engine**: `GenericCategoryPage` acts as our unified rendering engine, dynamically managing component galleries ("All" views) and isolated detail views for individual variants.
- **Fullstack-Ready**: The system is designed to swap local `useState` data with API-fetched JSON dynamically, minimizing future friction during fullstack migration.

## 3. Mission Log
### [2026-04-26] - v0.1.1: Documentation & Registry Expansion
- **Completed Components**:
    - **Primary Button**: Implemented with Framer Motion and standardized registry metadata.
    - **Spinner & Bouncing Dots (Pulse)**: High-performance loading indicators.
    - **Card**: Minimalist container with hover-elevation effects.
- **Routing & Navigation**:
    - Stabilized routing using fully qualified identifiers (e.g., `Category-SubItem`), ensuring perfect sidebar state isolation.
    - Implemented global "All" galleries for every category.
- **UI Refinement**: Standardized a 3-column responsive grid system across all documentation galleries.
- **Stability**: Refactored the registry to use `React.createElement` for robust, error-free component preview rendering.

## 4. Immediate Action Plan
- [ ] **Task 2**: Continue component creation for remaining sidebar categories (Inputs, Modals, Dropdowns).
- [ ] **Task 3**: Implement mobile-responsive patterns for complex navigational components.
- [ ] **Task 4**: Transition local `useState` data to backend API integration.

## 5. Development Guidelines
- **Consistency**: All new components must follow the minimalist aesthetic and include a local `registry.json` and `README.md`.
- **Maintainability**: Avoid duplicating UI logic; leverage the `GenericCategoryPage` and `ComponentCard` wherever possible.
- **Registry First**: Any new component must be added to `src/lib/registry-hub.ts` and the `RegistryHub` data structure to appear in the docs.
