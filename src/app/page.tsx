import HeroSection from "@/components/sections/hero";
import ProblemSection from "@/components/sections/problem";
import HowItWorksSection from "@/components/sections/how-it-works";
import FeaturesSection from "@/components/sections/features";
import DealTypesSection from "@/components/sections/deal-types";
import SecuritySection from "@/components/sections/security";
import PricingSection from "@/components/sections/pricing";
import TestimonialsSection from "@/components/sections/testimonials";
import FaqSection from "@/components/sections/faq";
import CtaSection from "@/components/sections/cta";
import { ScrollSection } from "@/components/ui/scroll-stack";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <DealTypesSection />
      <SecuritySection />

      {/* Last 4 sections stack on scroll */}
      <ScrollSection zIndex={10}>
        <PricingSection />
      </ScrollSection>
      <ScrollSection zIndex={11}>
        <TestimonialsSection />
      </ScrollSection>
      <ScrollSection zIndex={12}>
        <FaqSection />
      </ScrollSection>
      <ScrollSection zIndex={13}>
        <CtaSection />
      </ScrollSection>
    </>
  );
}
