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
// 1. IMPORT useLocation from react-router-dom
import { useLocation } from 'react-router-dom';
// 2. IMPORT useEffect from React
import { useEffect } from 'react'; 


export function LandingPage() {
  // 3. INITIALIZE useLocation hook
  const location = useLocation();

  // 4. ADD the useEffect hook here, after the hooks and before the return statement
  useEffect(() => {
    // Check if there is a hash (e.g., #pricing) in the URL
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Use a small delay to ensure the DOM is stable and the page has rendered completely 
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
      }
    }
  }, [location.hash]); // Rerun effect whenever the URL hash changes

  return (
    <>
      <Header />
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
      <Footer />
      <Toaster position="top-center" />
    </>
  );
}