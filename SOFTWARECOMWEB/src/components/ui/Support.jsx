import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  // {
  //   title: "What kind of businesses do you work with?",
  //   content:
  //     "We collaborate with startups, small businesses, and enterprises across industries — from tech and retail to education and real estate. Whether it’s a single-page website or a full digital transformation, we adapt to your scale and vision.",
  // },
  // {
  //   title: "Do you provide maintenance and post-launch support?",
  //   content:
  //     "Yes. Every project comes with reliable maintenance and ongoing support. We monitor performance, fix issues, and provide continuous improvements to keep your digital assets optimized and secure.",
  // },
  // {
  //   title: "Can you handle branding, design, and content creation too?",
  //   content:
  //     "Definitely. Our creative team specializes in logo design, UI/UX, video editing, and content production — ensuring your brand looks cohesive and communicates powerfully across all platforms.",
  // },
];


export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          {/* <span className="inline-block text-xs mb-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-md">
            OUR SERVICES
          </span> */}
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#3488fa] to-black/70 bg-clip-text text-transparent">
                FAQ
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore how Binarylogix empowers businesses through technology,
            creativity, and strategy — delivering solutions that drive results.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-3 text-left hover:bg-gray-50 transition"
              >
                <span className="font-medium text-gray-800">
                  {faq.title}
                </span>
                {activeIndex === index ? (
                  <ChevronUp className="text-blue-600" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${activeIndex === index
                    ? "max-h-40 opacity-100 p-5 pt-0"
                    : "max-h-0 opacity-0"
                  }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
