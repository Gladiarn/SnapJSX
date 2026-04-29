import type { Metadata } from "next";
import { GuidePageClient } from "./guide-page-client";

export const metadata: Metadata = {
  title: "Guides & Tutorials",
  description:
    "Learn how to build high-performance, zero-dependency UIs with SnapJSX. Master our architecture, styling patterns, and best practices.",
  openGraph: {
    title: "Guides & Tutorials | SnapJSX",
    description:
      "Learn how to build high-performance, zero-dependency UIs with SnapJSX.",
  },
};

export default function GuidePage() {
  return <GuidePageClient />;
}
