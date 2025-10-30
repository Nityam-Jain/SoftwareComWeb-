import React, { useEffect, useRef, useState } from "react";

// ✅ Import icons from assets folder
import ProfesIcon from "../../assets/skilledprof.png";
import repu from "../../assets/projectdeilivered.png";
import webIcon from "../../assets/projectcompleted.png";
import appdevIcon from "../../assets/happyclients.png";

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
    icon: webIcon,
    label: "Projects Completed",
    target: 120,
    suffix: "+",
  },
  {
    icon: ProfesIcon,
    label: "Skilled Professionals",
    target: 25,
    suffix: "+",
  },
  {
    icon: repu,
    label: "Websites & Apps Delivered",
    target: 80,
    suffix: "+",
  },
  {
    icon: appdevIcon,
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
      className="relative bg-white flex justify-center py-10 sm:py-14 md:py-20 overflow-hidden px-2 sm:px-6 md:px-24"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#3488fa]/10 via-[#5a72ea]/10 to-transparent blur-3xl animate-pulse" />

      <div className="relative w-full z-10 flex flex-wrap md:flex-nowrap flex-col md:flex-row gap-8 sm:gap-12 md:gap-28 items-center justify-center">
        {statsList.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center text-center transition-all duration-700 ${
              startCounting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${idx * 200}ms` }}
          >
            <img
              src={stat.icon}
              alt={stat.label}
              className="w-20 h-14 sm:w-28 sm:h-20 md:w-40 md:h-28 object-contain mb-2"
            />

            <div className="flex items-baseline -mt-2 mb-1 sm:-mt-4 sm:mb-1">
              <span className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800">
                {counters[idx]}
              </span>
              <span className="text-xl sm:text-2xl font-semibold text-blue-500 ml-1">
                {stat.suffix}
              </span>
            </div>
            <div className="text-gray-600 text-xs sm:text-sm md:text-base font-medium px-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
