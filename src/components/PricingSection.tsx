import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Flame, Users } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function PricingSection() {
  const handleGetEarlyAccess = () => {
    // Show success message
    toast.success("🎉 Thank you for your interest! We'll contact you soon with early access details.", {
      duration: 5000,
    });
  };

  const plans = [
    {
      name: "Early Access",
      subtitle: "Only 50 spots",
      price: "$19",
      period: "/month",
      description: "Lifetime price — You will NEVER pay more.",
      features: [
        "All features included",
        "Complete platform access",
        "Client portal",
        "Unlimited team members",
        "Unlimited projects",
        "Priority onboarding",
        "Direct access to the Founder",
        "Lifetime discount guarantee",
      ],
      cta: "Get Early Access",
      popular: true,
      available: true,
      gradient: "from-red-600 to-orange-500",
    },
    {
      name: "Beta Price",
      subtitle: "Coming soon",
      price: "$29",
      period: "/month",
      description: "All features",
      features: ["All features", "No lifetime lock"],
      cta: "Coming Soon",
      popular: false,
      available: false,
      gradient: "from-purple-600 to-pink-500",
    },
    {
      name: "Public Launch",
      subtitle: "After launch",
      price: "$49",
      period: "/month",
      description: "Will be the main price after launch",
      features: ["All features", "Standard support"],
      cta: "Future Price",
      popular: false,
      available: false,
      gradient: "from-gray-600 to-gray-500",
    },
  ];

  return (
    <div className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Become an Early Founder — Lock Your Price Forever.
          </h2>

          <p className="text-xl text-gray-400 mb-2">
            Join 50 founders who will shape VeyloDesk together
          </p>

          <div className="flex items-center justify-center gap-2 mb-6">
            <Users className="w-5 h-5 text-red-500" />
            <span className="text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">
              Work directly with the Founder on product development
            </span>
          </div>

          {/* Urgency indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mt-6 bg-red-950/30 border border-red-900/50 rounded-full px-6 py-3"
          >
            <Flame className="w-5 h-5 text-red-500" />
            <span className="text-red-400">28/50 spots taken</span>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-gray-900 border ${
                plan.popular ? "border-red-500 shadow-2xl shadow-red-500/20" : "border-gray-800"
              } rounded-2xl p-8 ${plan.popular ? "md:scale-105" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-orange-500 text-white border-0 shadow-lg">
                  BEST VALUE
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.subtitle}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-5xl bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className={`w-full ${
                  plan.popular
                    ? `bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white shadow-lg`
                    : "bg-gray-800 hover:bg-gray-750 text-white"
                } ${!plan.available ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={!plan.available}
                onClick={plan.available ? handleGetEarlyAccess : undefined}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}