export interface ComponentData {
  title: string;
  category: string;
  section: string;
  size: string;
  description: string;
  codeJsx: string;
  codeHtml: string;
}

export const COMPONENTS_DATA: ComponentData[] = [
  // Buttons
  {
    title: 'Primary Button',
    category: 'Button',
    section: 'Buttons',
    size: '0.15kb',
    description: 'Main action button with elevation and hover effects.',
    codeJsx: `export function PrimaryButton() {
  return (
    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-sm shadow-primary/20 font-medium">
      Primary Button
    </button>
  );
}`,
    codeHtml: `<button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm font-medium">
  Primary Button
</button>`
  },
  {
    title: 'Secondary Button',
    category: 'Button',
    section: 'Buttons',
    size: '0.12kb',
    description: 'Subtle button for secondary actions.',
    codeJsx: `export function SecondaryButton() {
  return (
    <button className="px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors font-medium">
      Secondary Button
    </button>
  );
}`,
    codeHtml: `<button class="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors font-medium">
  Secondary Button
</button>`
  },
  // Cards
  {
    title: 'Basic Card',
    category: 'Card',
    section: 'Cards',
    size: '0.18kb',
    description: 'A clean container for grouping related information.',
    codeJsx: `export function BasicCard() {
  return (
    <div className="bg-card border border-border/50 rounded-xl p-6 max-w-sm">
      <h3 className="font-semibold mb-2">Card Title</h3>
      <p className="text-sm text-muted-foreground">
        This is a basic card component with a title and description.
      </p>
    </div>
  );
}`,
    codeHtml: `<div class="bg-white border border-gray-200 rounded-xl p-6 max-w-sm">
  <h3 class="font-semibold mb-2">Card Title</h3>
  <p class="text-sm text-gray-500">
    This is a basic card component with a title and description.
  </p>
</div>`
  }
];
