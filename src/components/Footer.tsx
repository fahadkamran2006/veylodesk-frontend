import { Button } from "./ui/button";
import { Mail } from "lucide-react";

interface FooterProps {
  onNavigate: (page: "home" | "terms" | "privacy" | "refund" | "newsletter") => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl mb-4">VeyloDesk</h3>
            <p className="text-gray-400 text-sm">
              Automate your entire agency in one click. The all-in-one management platform for creative agencies.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <Button
                  variant="link"
                  className="text-gray-400 hover:text-white transition-colors text-sm p-0 h-auto flex items-center gap-2"
                  onClick={() => onNavigate("newsletter")}
                >
                  <Mail className="w-3 h-3" />
                  Newsletter
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Button
                  variant="link"
                  className="text-gray-400 hover:text-white transition-colors text-sm p-0 h-auto"
                  onClick={() => onNavigate("terms")}
                >
                  Terms & Conditions
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="text-gray-400 hover:text-white transition-colors text-sm p-0 h-auto"
                  onClick={() => onNavigate("privacy")}
                >
                  Privacy Policy
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="text-gray-400 hover:text-white transition-colors text-sm p-0 h-auto"
                  onClick={() => onNavigate("refund")}
                >
                  Refund Policy
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@veylodesk.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  support@veylodesk.com
                </a>
              </li>
              <li>
                <p className="text-gray-400 text-sm">Discord: Founder Server</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 VeyloDesk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}