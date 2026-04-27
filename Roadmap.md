# SnapJSX Roadmap & Mission Log

## 1. Mission Overview
**SnapJSX** is a minimalist, modern, and registry-driven UI component library. Our goal is to provide a clean, copy-pasteable component experience that prioritizes developer control, high-performance animations, and accessibility.

## 2. Architectural Design
- **RegistryHub (`src/lib/registry-hub.ts`)**: The central "database" for the UI library. It maps category keys (e.g., "Buttons") to arrays of `ComponentVariant` objects, each containing technical metadata (title, subcategory, description, preview component, and code snippets).
- **Generic Rendering Engine**: `GenericCategoryPage` acts as a high-level router/renderer. It dynamically filters the registry variants based on the `activeSection` identifier, ensuring that the documentation UI automatically adapts to include new components without manual dispatcher updates.
- **Component-State Pattern**: UI metadata and content are managed via state, facilitating easy migration to a fullstack API-driven backend.
- **Fullstack-Ready**: The system is designed to swap static variant arrays in the `RegistryHub` with dynamic API-fetched JSON, minimizing future integration friction.

## 3. Mission Log
### [2026-04-26] - v0.1.2: Refined Registry & Routing Logic
- **Unified Registry**: Restructured `RegistryHub` to use `Category` keys, with each variant explicitly defining its `subcategory` and `title`.
- **Dynamic Routing**: Simplified `DocsContent` dispatcher to be entirely registry-driven. It now resolves categories and passes variants to the `GenericCategoryPage` without hardcoded switch-cases.
- **Filtering Logic**: Implemented precise matching logic in `GenericCategoryPage` to handle both "All" views and specific component variant galleries.
- **Type-Safe Previews**: Standardized the use of `React.createElement` for component previews in the registry, ensuring build-time type stability.
- **Stability**: Verified the build stability and confirmed that sidebar navigation reliably maps to variant-specific implementation views.


### [2026-04-27] - v0.1.3: Advanced Routing & Search Alignment
- **"All" Route Support**: Added native support for `/docs/{title}/all` routes, allowing users to view all components in a category without subcategory filtering.
- **Search Modal URL Alignment**: Updated the `SearchModal` component to construct URLs using the canonical `/docs/{title}/{category}/{subcategory}` path format instead of the legacy hyphenated format.
- **Deep Routing Logic**: Refined `DocsContent` and `GenericCategoryPage` to process the full URL `slug`, ensuring consistent filtering across both direct sidebar navigation and search-driven navigation.
- **Linting & Stability**: Performed automated code cleanup (Biome) to resolve unused imports and type-safety warnings, ensuring production build integrity.

## 4. Immediate Action Plan
- [ ] **Task 2**: Continue component creation for remaining sidebar categories (Inputs, Modals, Dropdowns).
- [ ] **Task 3**: Implement mobile-responsive patterns for complex navigational components.
- [ ] **Task 4**: Transition local `useState` data to backend API integration.

## 5. Development Guidelines
- **Consistency**: All new components must follow the minimalist aesthetic and include a local `registry.json` and `README.md`.
- **Maintainability**: Avoid duplicating UI logic; leverage the `GenericCategoryPage` and `ComponentCard` wherever possible.
- **Registry First**: Any new component must be added to `src/lib/registry-hub.ts` and the `RegistryHub` data structure to appear in the docs.
