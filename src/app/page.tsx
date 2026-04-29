import { FamousComponents } from "@/components/landing/famous-components";
import { FAQ } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { StatsSection } from "@/components/landing/stats-section";
import { Testimonials } from "@/components/landing/testimonials";
import { TrustedBy } from "@/components/landing/trusted-by";
import { WhySnapJSX } from "@/components/landing/why-copypaste";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SnapJSX",
    description:
      "Barebone JSX for Modern Apps. High-performance, zero-dependency component registry.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="relative flex flex-col bg-transparent">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data injection
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustedBy />
      <FamousComponents />
      <StatsSection />
      <WhySnapJSX />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </div>
  );
}
