import type { Metadata } from "next";
import { BlocksPageClient } from "./blocks-page-client";

export const metadata: Metadata = {
  title: "Blocks",
  description:
    "Pre-assembled, functional component blocks for building modern web applications faster. Just copy and paste into your project.",
};

export default function BlocksPage() {
  return <BlocksPageClient />;
}
