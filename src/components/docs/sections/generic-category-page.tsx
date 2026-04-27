import { memo, useMemo } from "react";
import type React from "react";
import { ComponentCard } from "@/components/ui/component-card";

export interface ComponentVariant {
  title: string;
  category: string;
  subcategory: string;
  description: string;
  size: string;
  preview: React.ReactNode;
  codeJsx: string;
  codeHtml: string;
}

interface GenericCategoryPageProps {
  title: string;
  description: string;
  activeSection: string;
  slug: string[];
  variants: ComponentVariant[];
}

export const GenericCategoryPage = memo(function GenericCategoryPage({
  title,
  description,
  activeSection,
  slug,
  variants,
}: GenericCategoryPageProps) {
  const filteredVariants = useMemo(() => {
    const [_titleSlug, categorySlug, subcategorySlug] = slug;

    const toKebab = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

    return variants.filter((c) => {
      if (categorySlug === "all") return true;

      if (
        toKebab(c.category) !== categorySlug &&
        toKebab(c.subcategory) !== categorySlug
      ) {
        return false;
      }

      if (subcategorySlug) {
        return toKebab(c.title) === subcategorySlug;
      }

      return true;
    });
  }, [slug, variants]);

  return (
    <div className="w-full space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-black tracking-tight">{title}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>

      {filteredVariants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredVariants.map((item) => (
            <ComponentCard key={item.title} {...item} />
          ))}
        </div>
      ) : (
        <div className="p-12 border border-dashed border-border rounded-2xl text-center text-muted-foreground">
          No components found for "{activeSection}".
        </div>
      )}
    </div>
  );
});
