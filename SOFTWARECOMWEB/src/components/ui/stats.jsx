import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Users, ShoppingBag, Smile } from "lucide-react";

// Count-up hook
function useCountUp(end, startCounting, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const increment = end / (duration / 16);
    function update() {
      start += increment;
      if (start < end) {
        setValue(Math.round(start));
        requestAnimationFrame(update);
      } else {
        setValue(end);
      }
    }
    update();
  }, [end, duration, startCounting]);
  return value;
}

const statsList = [
  {
    icon: <Briefcase className="w-12 h-12 text-blue-500" />,
    label: "Projects Completed",
    target: 120,
    suffix: "+",
  },
  {
    icon: <Users className="w-12 h-12 text-blue-500" />,
    label: "Skilled Professionals",
    target: 25,
    suffix: "+",
  },
  {
    icon: <ShoppingBag className="w-12 h-12 text-blue-500" />,
    label: "Websites & Apps Delivered",
    target: 80,
    suffix: "+",
  },
  {
    icon: <Smile className="w-12 h-12 text-blue-500" />,
    label: "Happy Clients",
    target: 150,
    suffix: "+",
  },
];

export default function AnimatedStats() {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const counters = statsList.map((stat) =>
    useCountUp(stat.target, startCounting, 1300 + stat.target * 5)
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white flex justify-center py-16 md:py-20 overflow-hidden"
    >
      {/* subtle animated gradient background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3488fa]/10 via-[#5a72ea]/10 to-transparent blur-3xl animate-pulse" />

      <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        {statsList.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center text-center transition-all duration-700 ${
              startCounting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${idx * 200}ms` }}
          >
            <div className="bg-blue-100 p-4 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              {stat.icon}
            </div>
            <div className="flex items-baseline mt-3 mb-1">
              <span className="text-3xl md:text-4xl font-bold text-gray-800">
                {counters[idx]}
              </span>
              <span className="text-2xl font-semibold text-blue-500 ml-1">
                {stat.suffix}
              </span>
            </div>
            <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
