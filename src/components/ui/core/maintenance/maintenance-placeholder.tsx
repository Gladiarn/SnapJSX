import { Wrench } from "lucide-react";

/**
 * MaintenancePlaceholder - A professional placeholder for pages under development.
 */
export function MaintenancePlaceholder({
  title = "Under Development",
}: {
  title?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 border-2 border-dashed border-border rounded-3xl bg-card/30">
      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
        <Wrench className="h-8 w-8" />
      </div>
      <h2 className="text-2xl font-black tracking-tight mb-2">{title}</h2>
      <p className="text-muted-foreground max-w-sm mb-8">
        We are crafting something special here. This section is currently being
        refined to meet SnapJSX standards.
      </p>
      <div className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest">
        Coming Soon
      </div>
    </div>
  );
}
