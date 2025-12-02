import { Button } from "./ui/button";
import { Menu, X, Mail } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onNavigate?: (page: "home" | "terms" | "privacy" | "refund" | "newsletter") => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleGetEarlyAccess = () => {
    scrollToSection("pricing");
  };

  const handleNewsletter = () => {
    if (onNavigate) {
      onNavigate("newsletter");
      setMobileMenuOpen(false);
    } else {
      scrollToSection("newsletter");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl text-white">VeyloDesk</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={handleNewsletter}
              className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Newsletter
            </button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white shadow-lg"
              onClick={handleGetEarlyAccess}
            >
              Get Early Access
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                FAQ
              </button>
              <button
                onClick={handleNewsletter}
                className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-left"
              >
                <Mail className="w-4 h-4" />
                Newsletter
              </button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white shadow-lg w-full"
                onClick={handleGetEarlyAccess}
              >
                Get Early Access
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}