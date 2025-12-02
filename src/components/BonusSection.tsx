import { motion } from "motion/react";
import { Check, Gift } from "lucide-react";

export function BonusSection() {
  const bonuses = [
    "Free onboarding call",
    "Agency growth guide",
    "Private Discord access",
    "Priority feature voting",
    "Early founder badge",
    "Lifetime discount guarantee",
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mb-6">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Sign Up Today and Get These Bonuses
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-yellow-950/20 to-orange-950/20 border border-yellow-900/30 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-gray-200">{bonus}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}