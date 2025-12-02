import { motion } from "motion/react";
import {
  MessageSquare,
  AlertCircle,
  FileText,
  FolderOpen,
  Table,
  DollarSign,
} from "lucide-react";

export function ProblemSection() {
  const problems = [
    { icon: MessageSquare, text: "Endless client messages" },
    { icon: AlertCircle, text: "Missed deadlines" },
    { icon: FileText, text: "Manual invoicing" },
    { icon: FolderOpen, text: "Unorganized projects" },
    { icon: Table, text: "Scattered spreadsheets" },
    { icon: DollarSign, text: "Too many tools, too much cost" },
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
            Running an Agency Is Chaos Without Automation.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-950/20 to-orange-950/20 border border-red-900/30 rounded-xl p-8 hover:border-red-700/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-900/30 rounded-lg">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <p className="text-xl text-gray-200 flex-1">{problem.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
