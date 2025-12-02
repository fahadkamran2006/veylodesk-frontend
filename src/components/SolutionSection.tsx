import { motion } from "motion/react";
import {
  Users,
  FileText,
  CheckSquare,
  CreditCard,
  UserCircle,
  Calendar,
  Upload,
  Bell,
  Zap,
} from "lucide-react";

export function SolutionSection() {
  const features = [
    { icon: Users, title: "Client Management", color: "from-blue-500 to-cyan-500" },
    { icon: FileText, title: "Automatic Invoicing", color: "from-green-500 to-emerald-500" },
    { icon: CheckSquare, title: "Project Tracking", color: "from-purple-500 to-pink-500" },
    { icon: CreditCard, title: "Payment Integrations", color: "from-yellow-500 to-orange-500" },
    { icon: UserCircle, title: "Team Management", color: "from-red-500 to-rose-500" },
    { icon: Upload, title: "Unlimited File Sharing", color: "from-teal-500 to-cyan-500" },
    { icon: Zap, title: "Client Portal", color: "from-orange-500 to-red-500" },
    { icon: Calendar, title: "Deadline Automation", color: "from-pink-500 to-purple-500" },
    { icon: Bell, title: "Notifications & Reminders", color: "from-cyan-500 to-blue-500" },
  ];

  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Meet VeyloDesk: Your Agency Management Platform.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all"
              >
                <div className={`inline-flex p-3 bg-gradient-to-br ${feature.color} rounded-lg mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl text-white">{feature.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
