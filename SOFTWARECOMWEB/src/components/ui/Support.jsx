import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    title: "What makes Binarylogix different from other IT service providers?",
    content:
      "At Binarylogix, we combine creativity, strategy, and technology to deliver measurable results. Our team focuses on understanding your business goals first — then builds tailored digital solutions that drive growth, efficiency, and lasting value.",
  },
  {
    title: "How long does it take to develop a website or mobile app?",
    content:
      "Timelines vary depending on project complexity, but most web projects take 3–6 weeks and mobile apps around 6–10 weeks. We ensure transparent communication at every stage — from planning and prototyping to final deployment.",
  },
  {
    title: "Do you provide complete digital marketing solutions?",
    content:
      "Yes, we offer 360° digital marketing services — including SEO, Google Ads, social media marketing, and content strategy. Our goal is to help your brand connect with the right audience and achieve measurable growth online.",
  },
  {
    title: "Can you help improve my website’s Google ranking?",
    content:
      "Absolutely. Our SEO experts perform in-depth audits, optimize on-page and technical SEO, and create keyword-rich content strategies. We focus on long-term ranking stability and sustainable organic traffic growth.",
  },
  {
    title: "How do you approach social media marketing?",
    content:
      "We craft platform-specific content strategies to boost engagement, visibility, and trust. Our campaigns focus on storytelling and brand personality — turning followers into loyal customers across Instagram, LinkedIn, and Facebook.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-2 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#3488fa] to-black/70 bg-clip-text text-transparent">
            FAQ
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore how Binarylogix empowers businesses through technology,
            creativity, and strategy — delivering solutions that drive results.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition"
              >
                <span className=" text-gray-800">{faq.title}</span>
                <motion.div
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? (
                    <ChevronUp className="text-blue-600" />
                  ) : (
                    <ChevronDown className="text-gray-500" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="px-5 pb-4"
                  >
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
