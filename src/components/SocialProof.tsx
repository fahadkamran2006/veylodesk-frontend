import { motion } from "motion/react";
import { Star } from "lucide-react";

export function SocialProof() {
  const logos = [
    "CreativeFlow",
    "StudioX",
    "MediaLab",
    "PixelWorks",
    "BrandHub",
    "ContentCo",
  ];

  const testimonials = [
    {
      text: "Cut our admin time in half. Game changer.",
      author: "Sarah M.",
      role: "Agency Owner",
    },
    {
      text: "Finally, everything in one place. No more juggling tools.",
      author: "Mike R.",
      role: "Creative Director",
    },
    {
      text: "The AI features alone are worth 10x the price.",
      author: "Lisa K.",
      role: "Freelance Designer",
    },
  ];

  return (
    <div className="bg-gray-900 py-16 border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-500 mb-6">Trusted by 150+ creators and agencies</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="text-gray-600 px-6 py-2 border border-gray-800 rounded-lg bg-gray-950/50"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-950 border border-gray-800 rounded-xl p-6"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
              <div>
                <div className="text-white">{testimonial.author}</div>
                <div className="text-gray-500 text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
