import { Hero } from "@/components/landing/hero";
import { TrustedBy } from "@/components/landing/trusted-by";
import { FamousComponents } from "@/components/landing/famous-components";
import { StatsSection } from "@/components/landing/stats-section";
import { WhySnapJSX } from "@/components/landing/why-copypaste";
import { Testimonials } from "@/components/landing/testimonials";
import { FAQ } from "@/components/landing/faq";
import { HowItWorks } from "@/components/landing/how-it-works";

export default function Home() {
  return (
    <div className="relative flex flex-col bg-transparent landing-grid">
      <Hero />
      <TrustedBy />
      <FamousComponents />
      <StatsSection />
      <HowItWorks />
      <WhySnapJSX />
      <Testimonials />
      <FAQ />
    </div>
  );
}
