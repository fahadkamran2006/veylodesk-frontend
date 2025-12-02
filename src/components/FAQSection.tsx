import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "What is VeyloDesk?",
      answer:
        "VeyloDesk is an all-in-one agency management platform that combines CRM, project management, invoicing, payments, client portals, and team collaboration into one powerful tool.",
    },
    {
      question: "Why $19 lifetime price?",
      answer:
        "We're offering early access pricing to our first 50 users. This allows us to build a community of founders who shape the product. Once you lock in at $19/month, your price will never increase — even as we add new features.",
    },
    {
      question: "How many tools does it replace?",
      answer:
        "VeyloDesk replaces 10+ tools including CRM systems, project management software, invoicing tools, payment processors, scheduling apps, file storage, and client portals.",
    },
    {
      question: "Do I need technical setup?",
      answer:
        "No technical setup required! VeyloDesk is designed for non-technical users. We provide a guided onboarding process and priority support for early access members.",
    },
    {
      question: "What if I cancel?",
      answer:
        "You can cancel anytime with no questions asked. Your data will be available for export for 30 days after cancellation.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption, secure cloud storage, and comply with industry standards. Your data is backed up daily and never shared with third parties.",
    },
  ];

  return (
    <div className="bg-gray-950 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl text-white mb-4">Frequently Asked Questions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-900 border border-gray-800 rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-white hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}