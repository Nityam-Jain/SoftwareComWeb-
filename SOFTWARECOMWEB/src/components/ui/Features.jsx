import { ShieldCheck, Search,  Clock, Palette } from "lucide-react";
import React from "react";


export default function FeaturesSection() {
  const features = [
    {
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
    title: "Notes Powerful and Security",
    bg: "from-[#7a5af8] to-[#6751d6]",
    },
    {
    icon: <Search className="w-10 h-10 text-white" />,
    title: "Easy Sort, Classify and Search",
    bg: "from-[#7a5af8] to-[#6a52e0]",
    },
    // {
    // icon: <PuzzlePiece className="w-10 h-10 text-white" />,
    // title: "Collaboration and Share",
    // bg: "from-[#6a52e0] to-[#c984f0]",
    // badge: "NEW",
    // },
    {
    icon: <Clock className="w-10 h-10 text-white" />,
    title: "Quick Note In Everywhere",
    bg: "from-[#facc15] to-[#f59e0b]",
    },
    {
    icon: <Palette className="w-10 h-10 text-white" />,
    title: "Write and Draw on iPad",
    bg: "from-[#ef4444] to-[#f97316]",
    },
  ];

  return (
    <section className="relative w-full bg-[#f8f7ff] py-16 md:py-24 overflow-hidden">
      {/* Subtle background gradient lines (optional) */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-white/60 pointer-events-none"></div>

      {/* Header */}
      <div class="text-center mb-12 relative z-10">
        <span className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-md mb-6 text-xs font-semibold tracking-wider">
          Notero - Easy Notes App
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Awesome{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#623abc] via-[#cc64bc] to-[#f57e8a]">
            Features
          </span>
        </h2>
      </div>

      {/* Features Grid */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-16 max-w-6xl mx-auto mt-12">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center relative group">
            <div
              className={`bg-gradient-to-r ${item.bg} w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-transform transform group-hover:scale-105`}
            >
              {item.icon}
              {item.badge && (
                <span className="absolute top-0 right-0 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>)
              }
            </div>
            <h3 className="mt-4 text-sm sm:text-base font-medium text-gray-700 leading-snug max-w-[150px]">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
