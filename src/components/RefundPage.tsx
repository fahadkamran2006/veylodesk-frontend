import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface RefundPageProps {
  onNavigate: (page: "home" | "terms" | "privacy" | "refund") => void;
}

export function RefundPage({ onNavigate }: RefundPageProps) {
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
          <h1 className="text-4xl sm:text-5xl text-white mb-4">Refund Policy</h1>
          <p className="text-gray-400">
            Clear refund rules for the VeyloDesk Founder Program
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">1. 14-Day Refund Window</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                We offer a 14-day no-questions-asked refund for all new Founder Program subscriptions.
              </p>
              <p className="text-gray-300">
                If you request a refund within 14 days, we will fully refund your payment.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">2. No Refunds After 14 Days</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">Since the Founder Program includes:</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside mb-4">
                <li>Immediate community access</li>
                <li>Digital resources</li>
                <li>Early-access benefits</li>
                <li>Locked discount pricing</li>
              </ul>
              <p className="text-gray-300">Refunds are not available after 14 days.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">3. Cancel Anytime</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-3">
                You can cancel your subscription at any time.
              </p>
              <p className="text-gray-300">
                Canceling stops future payments—but does not refund previous charges.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">4. How to Request a Refund</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 space-y-3">
              <p className="text-gray-300">
                <strong className="text-white">Email us:</strong>{" "}
                <a href="mailto:support@veylodesk.com" className="text-blue-400 hover:text-blue-300">
                  support@veylodesk.com
                </a>
              </p>
              <p className="text-gray-300">
                Or open a ticket in the Discord Founder Support channel.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-white mb-4">5. Lemon Squeezy Billing</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300">
                Refunds are processed using Lemon Squeezy's system.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
