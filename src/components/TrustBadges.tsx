import { Shield, Lock, CreditCard, Headphones } from "lucide-react";
import { motion } from "motion/react";

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "Secure & Encrypted",
      description: "Enterprise-grade security",
    },
    {
      icon: Lock,
      title: "Privacy Protected",
      description: "Your data is never shared",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "PCI-compliant billing",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Priority founder support",
    },
  ];

  return (
    <div className="bg-gray-900/50 border-y border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h4 className="text-white text-sm">{badge.title}</h4>
                  <p className="text-gray-500 text-xs">{badge.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
