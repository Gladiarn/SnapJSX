import type { Metadata } from "next";
import { ShowcasePageClient } from "./showcase-page-client";

export const metadata: Metadata = {
  title: "Community Showcase",
  description:
    "Explore amazing projects built with SnapJSX. Get inspired by how developers are using our high-performance component registry to build modern web interfaces.",
  openGraph: {
    title: "Community Showcase | SnapJSX",
    description: "Explore amazing projects built with SnapJSX.",
  },
};

export default function ShowcasePage() {
  return <ShowcasePageClient />;
}
