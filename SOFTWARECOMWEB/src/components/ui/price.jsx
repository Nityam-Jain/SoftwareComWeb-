import React from "react";

export default function PricingSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto text-center px-4">
        {/* Section Title */}
        <span className="inline-block text-xs mb-3 px-3 bg-purple-100 text-purple-700 rounded-md">Pricing Plan</span>
        <h2 className="text-4xl font-extrabold mb-2">
          Start With{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
            Affordable Price
          </span>
        </h2>
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-5 mb-8 mt-6">
          <span className="text-gray-700 font-medium">Billed monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="block w-12 h-6 rounded-full bg-purple-200 peer-checked:bg-purple-600"></div>
            <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white border border-purple-400 transition peer-checked:translate-x-6"></div>
          </label>
          <span className="text-gray-700 font-medium">Billed annually</span>
        </div>
        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center mt-4">
          {/* BASIC PLAN */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg flex-1 min-w-[320px] flex flex-col justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {/* Hat SVG icon for basic */}
                <span className="bg-blue-100 text-blue-600 w-7 h-7 flex items-center justify-center rounded-full">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6"><path d="M10 2C6.686 2 4 4.686 4 8c0 2.806 1.432 5.198 4 8.268C12.568 13.198 14 10.806 14 8c0-3.314-2.686-6-6-6zm0 2c2.206 0 4 1.794 4 4 0 2.663-1.23 5.148-3.675 7.98C7.23 13.148 6 10.663 6 8c0-2.206 1.794-4 4-4z"></path></svg>
                </span>
                <span className="text-sm font-bold text-gray-500">BASIC PLAN</span>
              </div>
              <div className="text-3xl font-bold mb-1">Free <span className="text-base text-gray-400 font-normal">/ month</span></div>
              <div className="text-xs text-gray-500 mb-4">Free 14 days trial, you can use over 20 basic features</div>
            </div>
            <ul className="mb-6 space-y-3 text-left w-full">
              <li className="flex items-center gap-3 font-bold text-gray-900">
                <span className="bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><circle cx="10" cy="10" r="8" /></svg>
                </span>
                Write 5 Notes On Only iOS & Android
              </li>
              <li className="flex items-center gap-3 font-bold text-gray-900">
                <span className="bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><circle cx="10" cy="10" r="8" /></svg>
                </span>
                Add Attachments, Tables, Codes and More To Your Notes
              </li>
              {/* Features faded/disabled */}
              <li className="flex items-center gap-3 text-gray-400 font-semibold opacity-60">
                <span className="bg-purple-50 rounded-full w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><circle cx="10" cy="10" r="8" /></svg>
                </span>
                Protect Your Notes and Notebooks With Lock
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-semibold opacity-60">
                <span className="bg-purple-50 rounded-full w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><circle cx="10" cy="10" r="8" /></svg>
                </span>
                Focus Mode and Dark Theme
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-semibold opacity-60">
                <span className="bg-purple-50 rounded-full w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><circle cx="10" cy="10" r="8" /></svg>
                </span>
                Export to Text, PDF, HTML and Markdown formats
              </li>
            </ul>
            <button className="rounded-full border border-purple-700 px-7 py-2 text-purple-700 font-semibold transition hover:bg-purple-50 mt-2">
              Register Now
            </button>
          </div>
          {/* PREMIUM PLAN */}
          <div className="bg-purple-50 rounded-2xl border border-purple-200 p-8 shadow-lg flex-1 min-w-[320px] flex flex-col justify-between items-start relative">
            <span className="absolute top-6 right-8 bg-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">20% OFF</span>
            <div>
              <div className="flex items-center gap-2 mb-2">
                {/* Crown SVG for premium */}
                <span className="bg-yellow-100 text-yellow-700 w-7 h-7 flex items-center justify-center rounded-full">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6"><path d="M10 3l3.09 6.26L19 10.27l-5 5.13-1.42-5.16L4.88 12.39 1 7.61l6.91-1.35z"></path></svg>
                </span>
                <span className="text-sm font-bold text-purple-700">PREMIUM PLAN</span>
              </div>
              <div className="text-3xl font-bold mb-1">$29 <span className="text-base text-gray-400 font-normal">/ month</span></div>
              <div className="text-xs text-gray-600 mb-4">Experience all premium features and only one-time payment</div>
            </div>
            <ul className="mb-6 space-y-3 text-left w-full">
              <li className="flex items-center gap-3 font-bold text-gray-900">
                <span className="bg-purple-200 rounded-full w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><circle cx="10" cy="10" r="8" /></svg>
                </span>
                Write 5 Notes On Only iOS & Android
              </li>
              <li className="flex items-center gap-3 font-bold text-gray-900">
                <span className="bg-purple-200 rounded-full w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><circle cx="10" cy="10" r="8" /></svg>
                </span>
                Add Attachments, Tables, Codes and More To Your Notes
              </li>
              <li className="flex items-center gap-3 font-bold text-gray-900">
                <span className="bg-purple-200 rounded-full w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><circle cx="10" cy="10" r="8" /></svg>
                </span>
                Protect Your Notes and Notebooks With Lock
              </li>
              <li className="flex items-center gap-3 font-bold text-gray-900">
                <span className="bg-purple-200 rounded-full w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><circle cx="10" cy="10" r="8" /></svg>
                </span>
                Focus Mode and Dark Theme
              </li>
              <li className="flex items-center gap-3 font-bold text-gray-900">
                <span className="bg-purple-200 rounded-full w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><circle cx="10" cy="10" r="8" /></svg>
                </span>
                Export to Text, PDF, HTML and Markdown formats
              </li>
            </ul>
            <button className="rounded-full bg-purple-700 text-white px-7 py-2 font-semibold shadow hover:bg-purple-800 transition mt-2">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
