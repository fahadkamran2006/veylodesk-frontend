import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface TermsPageProps {
  onNavigate: (page: "home" | "terms" | "privacy" | "refund") => void;
}

export function TermsPage({ onNavigate }: TermsPageProps) {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-white"
            onClick={() => onNavigate("home")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl text-white mb-4">Terms & Conditions</h1>
          <p className="text-gray-400">
            Effective: November 2024 — for VeyloDesk Founder Program & Early Access
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-8">
            <p className="text-gray-300 leading-relaxed">
              VeyloDesk is an upcoming AI-powered management and automation platform designed for creative agencies. The Founder Program provides early access, community participation, and discounted lifetime pricing for early supporters before the official launch. By becoming a Founder or accessing this website, you agree to the following Terms & Conditions.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">1. Definitions</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 space-y-3">
              <p className="text-gray-300">
                <strong className="text-white">"We", "Us", "Company"</strong> refers to VeyloDesk.
              </p>
              <p className="text-gray-300">
                <strong className="text-white">"You", "Founder", "User"</strong> refers to anyone purchasing early access, subscribing, or using this website.
              </p>
              <p className="text-gray-300">
                <strong className="text-white">"Founder Program"</strong> refers to the $19/month early-access subscription with lifetime discounted pricing.
              </p>
              <p className="text-gray-300">
                <strong className="text-white">"Platform / Software"</strong> refers to the upcoming VeyloDesk SaaS product.
              </p>
              <p className="text-gray-300">
                <strong className="text-white">"Early Access"</strong> refers to pre-launch features, previews, Discord community access, and future beta software access.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">2. Founder Program Description</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">The Founder Program includes:</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Lifetime discounted pricing ($19/month)</li>
                <li>Access to a private Discord server</li>
                <li>Early access to updates and previews</li>
                <li>Priority support and onboarding</li>
                <li>Feature voting & feedback participation</li>
                <li>Founder Badge & recognition</li>
                <li>Software access upon official release</li>
              </ul>
              <p className="text-gray-300 mt-4">
                The software is currently in development. Founders understand they are supporting early development and receiving benefits—not purchasing an immediately functional final product.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">3. Payment & Billing</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 space-y-3">
              <p className="text-gray-300">Payments are processed through Lemon Squeezy.</p>
              <p className="text-gray-300">Subscription renews monthly unless canceled.</p>
              <p className="text-gray-300">Price is locked for lifetime as long as subscription remains active.</p>
              <p className="text-gray-300">If you cancel and return later, new pricing will apply.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">4. No Immediate Software Availability</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">By joining the Founder Program, you acknowledge:</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>VeyloDesk is currently under active development.</li>
                <li>Early-access community benefits are available immediately.</li>
                <li>Full software access will be given at launch.</li>
              </ul>
              <p className="text-gray-300 mt-4 italic">
                This clause is required for pre-launch SaaS compliance.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">5. Discord Access</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">After purchase, Founders receive:</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>A link to join the private server</li>
                <li>Founder-only channels</li>
                <li>Exclusive announcements</li>
                <li>First look at upcoming features</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">6. Acceptable Use</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">Users agree NOT to:</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Share paid content publicly</li>
                <li>Leak internal roadmaps or previews</li>
                <li>Abuse the Discord community</li>
                <li>Attempt to reverse engineer or misuse the platform</li>
              </ul>
              <p className="text-gray-300 mt-4">We reserve the right to remove users for violations.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">7. Intellectual Property</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300">
                All designs, branding, content, and software previews belong to VeyloDesk. Founders receive usage rights only after full launch.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">8. Limitation of Liability</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300">
                VeyloDesk is provided "as is" during development. We are not liable for any business loss, data loss, or indirect damages.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">9. Changes to Terms</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300">
                We may update these terms. Continued subscription means acceptance of updates.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">10. Contact Information</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 space-y-3">
              <p className="text-gray-300">
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:support@veylodesk.com" className="text-blue-400 hover:text-blue-300">
                  support@veylodesk.com
                </a>
              </p>
              <p className="text-gray-300">
                <strong className="text-white">Discord:</strong> Official Founder Server
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
