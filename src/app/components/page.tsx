import type { Metadata } from "next";
import { ComponentsPageClient } from "./components-page-client";

export const metadata: Metadata = {
  title: "Components",
  description:
    "Explore our high-performance, accessible React components. Zero dependencies, full control, and perfectly styled with Tailwind CSS.",
};

export default function ComponentsPage() {
  return <ComponentsPageClient />;
}
