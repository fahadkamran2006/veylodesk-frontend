import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { TermsPage } from "./components/TermsPage";
import { PrivacyPage } from "./components/PrivacyPage";
import { RefundPage } from "./components/RefundPage";
import { NewsletterPage } from "./components/NewsletterPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "terms" | "privacy" | "refund" | "newsletter">("home");

  const renderPage = () => {
    switch (currentPage) {
      case "terms":
        return <TermsPage onNavigate={setCurrentPage} />;
      case "privacy":
        return <PrivacyPage onNavigate={setCurrentPage} />;
      case "refund":
        return <RefundPage onNavigate={setCurrentPage} />;
      case "newsletter":
        return <NewsletterPage onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return <div className="min-h-screen bg-gray-950">{renderPage()}</div>;
}