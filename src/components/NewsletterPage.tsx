import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, Sparkles, Users, Rocket, Heart, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { Toaster } from "./ui/sonner";

interface NewsletterPageProps {
  onNavigate: (page: "home" | "terms" | "privacy" | "refund" | "newsletter") => void;
}

export function NewsletterPage({ onNavigate }: NewsletterPageProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("🎉 Welcome to the VeyloDesk Founder Program! Check your email for next steps.");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-white mb-8"
            onClick={() => onNavigate("home")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-orange-500 rounded-3xl mb-8 shadow-2xl shadow-red-500/50">
            <Mail className="w-10 h-10 text-white" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl text-white mb-6">
            Join the VeyloDesk Founder Program
          </h1>

          <p className="text-2xl sm:text-3xl text-gray-300 mb-4">
            Be Part of the Journey. Work Directly with the Founder.
          </p>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join 500+ forward-thinking agency owners who are building VeyloDesk together with direct access to the founder.
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Direct Founder Access",
                description: "Talk directly with the founder. Your feedback shapes the product."
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Early Access & Updates",
                description: "Be the first to know about new features, updates, and exclusive offers."
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Exclusive Insights",
                description: "Behind-the-scenes content, tips, and strategies to grow your agency."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-red-500/50 transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600/20 to-orange-500/20 rounded-xl mb-4 text-red-500">
                  {benefit.icon}
                </div>
                <h3 className="text-xl text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-8 sm:p-12 shadow-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-red-950/30 border border-red-900/50 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-red-500" />
              <span className="text-red-400">Limited to First 1,000 Founders</span>
            </div>

            <h2 className="text-3xl sm:text-4xl text-white mb-4">
              Get Weekly Insights & Exclusive Updates
            </h2>

            <p className="text-lg text-gray-400 mb-8">
              Join the inner circle and shape the future of VeyloDesk
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-950 border-gray-700 text-white placeholder:text-gray-500 flex-1 h-16 px-6 text-lg"
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white shadow-2xl shadow-red-500/50 px-12 h-16 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join Now"}
              </Button>
            </form>

            <p className="text-gray-500 mt-6">
              <Heart className="w-4 h-4 inline text-red-500 mr-1" />
              Join 500+ founders already in the program • Unsubscribe anytime
            </p>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "500+", label: "Founders Joined" },
              { number: "95%", label: "Open Rate" },
              { number: "Weekly", label: "Updates" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <Toaster position="top-center" />
    </div>
  );
}
