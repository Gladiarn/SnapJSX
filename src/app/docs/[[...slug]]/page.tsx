import type { Metadata } from "next";
import { DocPageClient } from "./doc-page-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const title = slug ? slug[0].replace(/-/g, " ") : "Getting Started";
  const subtitle =
    slug && slug.length > 1
      ? slug[slug.length - 1].replace(/-/g, " ")
      : "Introduction";

  const formattedTitle =
    slug && slug.length > 1
      ? `${subtitle.charAt(0).toUpperCase() + subtitle.slice(1)} | ${title.charAt(0).toUpperCase() + title.slice(1)}`
      : title.charAt(0).toUpperCase() + title.slice(1);

  return {
    title: formattedTitle,
    description: `Everything you need to know about ${subtitle} in ${title}. Copy, paste, and customize high-performance JSX components.`,
    openGraph: {
      title: `${formattedTitle} | SnapJSX`,
      description: `Everything you need to know about ${subtitle} in ${title}.`,
    },
  };
}

export default function DocPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  return <DocPageClient params={params} />;
}
