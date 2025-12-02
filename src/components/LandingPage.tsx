import { Hero } from "./Hero";
import { SocialProof } from "./SocialProof";
import { ProblemSection } from "./ProblemSection";
import { SolutionSection } from "./SolutionSection";
import { ValueSection } from "./ValueSection";
import { PricingSection } from "./PricingSection";
import { BonusSection } from "./BonusSection";
import { FAQSection } from "./FAQSection";
import { FinalCTA } from "./FinalCTA";
import { NewsletterSection } from "./NewsletterSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TrustBadges } from "./TrustBadges";
import { Toaster } from "./ui/sonner";

interface LandingPageProps {
  onNavigate: (page: "home" | "terms" | "privacy" | "refund" | "newsletter") => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <>
      <Header onNavigate={onNavigate} />
      <Hero />
      <TrustBadges />
      <SocialProof />
      <ProblemSection />
      <div id="features">
        <SolutionSection />
      </div>
      <ValueSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <BonusSection />
      <div id="faq">
        <FAQSection />
      </div>
      <FinalCTA />
      <div id="newsletter">
        <NewsletterSection />
      </div>
      <Footer onNavigate={onNavigate} />
      <Toaster position="top-center" />
    </>
  );
}