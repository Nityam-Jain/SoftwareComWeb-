import React, { useState } from "react";
// import githubIcon from "../assets/github.png";
// import twitterIcon from "../assets/twitter.png";
// import telegramIcon from "../assets/telegram.png";

const faqLeft = [
  "How Benefit That I Got When Choose Basic Plan?",
  "How Do I Organize My Notes?",
  "How Long For A Standard Project",
  "How About Data Security & NDA Agreement",
];

const faqRight = [
  {
    question: "How Does Notero Store My Data?",
    answer:
      "Through the collaboration with customers in discussing needs and demand, we’re able to attain mutual understanding, gain customer trust to offer appropriate advice"
  },
  { question: "Does Notero Support Storing Data On ICloud?" },
  { question: "How Do I Change My Email Or Password?" },
  { question: "Can My Premium License Be Used For All Devices?" },
  { question: "Can I Lock My Note App?" }
];

export default function FAQSupportSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top */}
        <span className="inline-block text-xs mb-4 px-3 bg-purple-100 text-purple-700 rounded-md">Frequently Asked Question</span>
        <h2 className="text-4xl font-extrabold mb-8">
          Need A{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">Support?</span>
        </h2>
        {/* Accordion layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Left column */}
          <div>
            {faqLeft.map((q, i) => (
              <div
                key={i}
                className="border-b border-gray-200 py-5 cursor-pointer flex items-center justify-between"
              >
                <div className="font-bold text-gray-800">{q}</div>
                <span className="text-xl text-gray-400">&#9662;</span>
              </div>
            ))}
          </div>
          {/* Right column */}
          <div>
            {faqRight.map((item, i) => (
              <div key={i} className="border-b border-gray-200">
                <button
                  className={`w-full text-left py-5 flex items-center justify-between ${openIndex === i ? "text-purple-700 font-bold" : "font-bold text-gray-800"} transition`}
                  onClick={() => setOpenIndex(i)}
                  aria-expanded={openIndex === i}
                >
                  {item.question}
                  <span className={`text-xl ${openIndex === i ? "text-purple-600 rotate-180" : "text-gray-400"} transition-transform duration-200`}>&#9662;</span>
                </button>
                {/* Answer box */}
                {item.answer && openIndex === i &&
                  <div className="bg-purple-50 p-5 rounded-md text-sm text-gray-700 mb-3">
                    {item.answer}
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
        {/* Bottom COMMUNTY/HUB SECTION */}
        <div className="mt-20">
          <span className="inline-block text-xs mb-3 px-3 bg-purple-100 text-purple-700 rounded-md">Notero Community</span>
          <h2 className="mb-10 text-3xl font-extrabold text-center">
            Join Into <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">Our Hub</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-7">
            {/* Github CARD */}
            <div className="flex flex-col items-center bg-white border border-gray-200 px-8 py-6 rounded-xl shadow hover:shadow-lg transition max-w-xs mx-auto">
              <div className="w-11 h-11 mb-2 rounded-full flex items-center justify-center bg-purple-100">
                {/* <img src={githubIcon} alt="Github" className="w-6 h-6" /> */}
              </div>
              <div className="font-bold text-lg">Github</div>
              <div className="text-xs text-gray-500 text-center mt-1">Open Source &amp; Commit Code</div>
            </div>
            {/* Twitter CARD */}
            <div className="flex flex-col items-center bg-white border border-gray-200 px-8 py-6 rounded-xl shadow hover:shadow-lg transition max-w-xs mx-auto">
              <div className="w-11 h-11 mb-2 rounded-full flex items-center justify-center bg-purple-100">
                {/* <img src={twitterIcon} alt="Twitter" className="w-6 h-6" /> */}
              </div>
              <div className="font-bold text-lg">Twitter</div>
              <div className="text-xs text-gray-500 text-center mt-1">Latest News &amp; Update</div>
            </div>
            {/* Telegram CARD */}
            <div className="flex flex-col items-center bg-white border border-gray-200 px-8 py-6 rounded-xl shadow hover:shadow-lg transition max-w-xs mx-auto">
              <div className="w-11 h-11 mb-2 rounded-full flex items-center justify-center bg-purple-100">
                {/* <img src={telegramIcon} alt="Telegram" className="w-6 h-6" /> */}
              </div>
              <div className="font-bold text-lg">Telegram</div>
              <div className="text-xs text-gray-500 text-center mt-1">Channel for Community</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
