import { FamousComponents } from "@/components/landing/famous-components";
import { FAQ } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { StatsSection } from "@/components/landing/stats-section";
import { Testimonials } from "@/components/landing/testimonials";
import { TrustedBy } from "@/components/landing/trusted-by";
import { WhySnapJSX } from "@/components/landing/why-copypaste";

export default function Home() {
  return (
    <div className="relative flex flex-col bg-transparent">
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
