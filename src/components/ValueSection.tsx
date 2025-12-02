import { motion } from "motion/react";
import { Clock, Zap, TrendingUp } from "lucide-react";

export function ValueSection() {
  const stats = [
    {
      icon: Clock,
      number: "10+",
      label: "hours saved per week per editor",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      number: "40%",
      label: "faster delivery",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      number: "5×",
      label: "better client organization",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                  <div
                    className={`w-full h-full rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className={`text-6xl sm:text-7xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                  {stat.number}
                </div>
                <p className="text-xl text-gray-300">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
