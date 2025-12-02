import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface PrivacyPageProps {
  onNavigate: (page: "home" | "terms" | "privacy" | "refund") => void;
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
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
          <h1 className="text-4xl sm:text-5xl text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">
            How VeyloDesk collects, uses, and protects your data
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">1. Information We Collect</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">We collect minimal data necessary to operate the Founder Program:</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Name</li>
                <li>Email</li>
                <li>Payment details (processed securely by Lemon Squeezy)</li>
                <li>Interaction within Discord (subject to Discord's privacy policy)</li>
              </ul>
              <p className="text-gray-300 mt-4">
                We do not store credit card information. All payment data is handled by Lemon Squeezy.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">2. How We Use Your Information</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Provide early-access content</li>
                <li>Deliver email updates</li>
                <li>Give Discord access</li>
                <li>Improve product features</li>
                <li>Internal analytics (non-identifiable)</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">3. Cookies & Tracking</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300">
                We use basic analytics tools to understand traffic and conversions. No personal tracking cookies are used.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">4. Sharing of Data</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">We do not sell or share your data with third parties except:</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Lemon Squeezy (billing)</li>
                <li>Discord (community access)</li>
                <li>Email service provider (MailerLite)</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">5. Data Security</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300">
                We protect your data using modern security standards. However, no system is 100% secure.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">6. Founder Program Communication</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">By joining, you consent to receive:</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Email updates</li>
                <li>Feature previews</li>
                <li>Founder-only announcements</li>
                <li>Discord notifications</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">7. Your Rights</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">You may:</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Request deletion of your data</li>
                <li>Update your profile</li>
                <li>Cancel your subscription anytime via Lemon Squeezy</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">8. Contact</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300">
                <strong className="text-white">Queries:</strong>{" "}
                <a href="mailto:privacy@veylodesk.com" className="text-blue-400 hover:text-blue-300">
                  privacy@veylodesk.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
