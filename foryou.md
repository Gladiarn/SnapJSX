# Refactoring Documentation: Component-State & Zustand Architecture

This project has been refactored to move documentation data from static files directly into component states, preparing the frontend for seamless fullstack integration.

## Key Architectural Changes

### 1. Local Component State (`useState`)
For components that own their specific data, we moved the data objects inside the component and wrapped them in `useState`. This mimics a real-world scenario where data would be fetched from an API.
- **Affected Components**:
    - `Introduction`: Contains features, philosophy, and credits.
    - `Installation`: Contains prerequisites and setup steps.
    - `QuickStart`: Contains the 3-step workflow and folder structure.
    - `Customization`: Contains strategies, comparative examples, and global theming.
    - `UpdatesPage`: Contains the version history and technical logs.
    - `SectionOverview`: Contains the component metadata (JSX/HTML snippets) used for the UI grids.

### 2. Global State Management (`Zustand`)
For data shared across multiple independent components (more than 2), we implemented a global store using **Zustand**.
- **The `useDocsStore` Store**:
    - Located at `src/lib/store.ts`.
    - Manages `sidebarData`, which is used by both the `Sidebar` navigation and the main `DocPage` header logic (for identifying categories).
    - Includes a `setSidebarData` action for future dynamic updates.

### 3. Data-Driven Components
The documentation is now fully data-driven. Adding a new component or updating documentation only requires updating the `useState` object within the respective file. 

## Integration for Fullstack
To connect this to a backend:
1. Replace the initial `useState` value with an empty array or object.
2. Use a `useEffect` hook to fetch data from your API.
3. Call the setter function (e.g., `setData(fetchedData)`) to update the UI.

## File Cleanup
The following static data files have been removed to prevent redundancy:
- `src/content/docs.ts`
- `src/content/docs-sidebar.ts`
- `src/content/docs-content-data.ts`
- `src/content/components-data.ts`
- `src/content/updates.ts`
