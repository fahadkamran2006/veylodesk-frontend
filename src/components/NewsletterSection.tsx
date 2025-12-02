import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, Sparkles, Users, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function NewsletterSection() {
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
      toast.success("🎉 Welcome to the VeyloDesk Founder Program! You'll hear from the founder soon.");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-950/30 border border-red-900/50 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-red-500 animate-pulse" />
            <span className="text-red-400">Limited to First 1,000 Founders</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
            Join the Founder Program
          </h2>

          <p className="text-2xl sm:text-3xl text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text mb-4">
            Work Directly with the Founder. Shape VeyloDesk Together.
          </p>

          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Get exclusive weekly insights, early access to features, and direct communication with the founder. Be part of the journey from day one.
          </p>

          {/* Benefits Row */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                text: "Direct access to the founder"
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                text: "Weekly exclusive updates"
              },
              {
                icon: <Heart className="w-6 h-6" />,
                text: "Shape the product roadmap"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-center gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-red-500/50 transition-all"
              >
                <div className="text-red-500">{benefit.icon}</div>
                <span className="text-gray-300">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-8 sm:p-12 shadow-2xl max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-orange-500 rounded-2xl mb-6 shadow-2xl shadow-red-500/50">
              <Mail className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-3xl sm:text-4xl text-white mb-4">
              Get Exclusive Founder Updates
            </h3>

            <p className="text-lg text-gray-400 mb-8">
              500+ founders already joined. Be part of something special.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
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
                className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white shadow-2xl shadow-red-500/50 px-12 h-16 text-lg whitespace-nowrap"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join the Program"}
              </Button>
            </form>

            <p className="text-gray-500 mt-6 flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-red-500" />
              Join 500+ founders • Unsubscribe anytime
            </p>
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "500+", label: "Founders" },
              { number: "95%", label: "Open Rate" },
              { number: "Weekly", label: "Updates" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}