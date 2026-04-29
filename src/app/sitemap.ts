import type { MetadataRoute } from "next";
import { SIDEBAR_DATA } from "@/lib/store";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://snapjsx.com";

  const staticRoutes = [
    "",
    "/showcase",
    "/guide",
    "/components",
    "/updates",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const docRoutes: MetadataRoute.Sitemap = [];

  for (const section of SIDEBAR_DATA) {
    const sectionSlug = section.title.toLowerCase().replace(/\s+/g, "-");

    for (const item of section.items) {
      const itemSlug = item.name.toLowerCase().replace(/\s+/g, "-");

      if (item.subItems.length > 0) {
        for (const sub of item.subItems) {
          const subSlug = sub.toLowerCase().replace(/\s+/g, "-");
          docRoutes.push({
            url: `${baseUrl}/docs/${sectionSlug}/${itemSlug}/${subSlug}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
          });
        }
      } else {
        docRoutes.push({
          url: `${baseUrl}/docs/${sectionSlug}/${itemSlug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.6,
        });
      }
    }
  }

  return [...staticRoutes, ...docRoutes];
}
