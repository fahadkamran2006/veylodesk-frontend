import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Flame, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function FinalCTA() {
  const [time, setTime] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-red-950/30 border border-red-900/50 rounded-full px-6 py-3 mb-8">
            <Flame className="w-5 h-5 text-red-500" />
            <span className="text-red-400">50 spots only — filling fast</span>
          </div>

          <h2 className="text-4xl sm:text-6xl text-white mb-6">
            Don't Miss the Early Access — It Will Never Come Again.
          </h2>

          <p className="text-xl sm:text-2xl text-gray-400 mb-12">
            Join the first 50 founders and lock $19/month for life.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { value: time.hours, label: "Hours" },
              { value: time.minutes, label: "Minutes" },
              { value: time.seconds, label: "Seconds" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 min-w-[100px]"
              >
                <div className="text-4xl text-white mb-2">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white shadow-2xl shadow-red-500/50 text-2xl px-12 py-8 h-auto"
            onClick={scrollToPricing}
          >
            <Clock className="w-6 h-6 mr-3" />
            Get Early Access Now
          </Button>

          <p className="text-gray-500 mt-8">
            Cancel anytime • 30-day money back guarantee
          </p>
        </motion.div>
      </div>
    </div>
  );
}