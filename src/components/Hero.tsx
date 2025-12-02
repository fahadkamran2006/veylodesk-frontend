import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Sparkles, Play, Users } from "lucide-react";
import dashboardImage from "figma:asset/e8f567d5efacd8e303fba13f4bb35473e000e022.png";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStarted = () => {
    // Scroll to pricing section
    scrollToSection("pricing");
  };

  const handleWatchDemo = () => {
    // You can replace this with an actual video modal or demo link
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Limited Offer Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <Badge className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 text-sm border-0 shadow-lg shadow-red-500/50 animate-pulse">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            EARLY ACCESS: $19/month (Lifetime Price) — Only 50 Spots Left
          </Badge>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6"
            >
              Automate Your Entire Agency in One Click — Forever.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-400 mb-4"
            >
              Replace 10 tools. Save 20+ hours/week. Grow faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-8"
            >
              <Users className="w-5 h-5 text-red-500" />
              <p className="text-lg text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">
                Work directly with the Founder. Be part of the journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white shadow-lg shadow-red-500/50 text-lg px-8 py-6"
                onClick={handleGetStarted}
              >
                Get Early Access Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 bg-gray-900/50 text-white hover:bg-gray-800 text-lg px-8 py-6"
                onClick={handleWatchDemo}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Feature Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {[
                "CRM",
                "Tasks",
                "Payments",
                "Invoicing",
                "Client Portal",
                "Scheduling",
                "Team Management",
              ].map((feature, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-gray-700 bg-gray-900/50 text-gray-300 px-4 py-2"
                >
                  {feature}
                </Badge>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Dashboard UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-gray-800">
              <img
                src={dashboardImage}
                alt="VeyloDesk Dashboard - Agency Management Platform"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg"
            >
              <div className="text-xs">Time Saved</div>
              <div className="text-2xl">20+ hrs/week</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-br from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg shadow-lg"
            >
              <div className="text-xs">Tools Replaced</div>
              <div className="text-2xl">10+ tools</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}