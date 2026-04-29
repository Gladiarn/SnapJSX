import type { Metadata } from "next";
import { UpdatesPageClient } from "./updates-page-client";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Stay informed about the latest releases, architectural shifts, and feature updates in the SnapJSX ecosystem.",
};

export default function UpdatesPage() {
  return <UpdatesPageClient />;
}
