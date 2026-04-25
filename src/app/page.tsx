import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { FamousComponents } from "@/components/sections/famous-components";
import { StatsSection } from "@/components/sections/stats-section";
import { WhySnapJSX } from "@/components/sections/why-copypaste";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { HowItWorks } from "@/components/sections/how-it-works";

export default function Home() {
  return (
    <div className="relative flex flex-col bg-transparent">
      <div className="absolute inset-0 -z-10 grid-background" />
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
