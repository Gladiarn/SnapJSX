export async function fetchComponent(name: string) {
  // Logic from the original route.ts, refactored into a service.
  // In a real registry, this would query a database or CMS.

  // As a placeholder, we return a mock registry response.
  const registry = {
    components: [{ name: "glass-card", path: "glass-card.tsx" }],
  };

  const component = registry.components.find((c) => c.name === name);

  if (!component) {
    return { error: "Component not found", status: 404 };
  }

  // Placeholder for file system fetch logic
  return {
    data: { name: component.name, code: "// Code content placeholder" },
    status: 200,
  };
}
