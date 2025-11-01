import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// ✅ Import icons from assets
import ProfesIcon from "../../assets/skilledprof.png";
import repu from "../../assets/projectdeilivered.png";
import webIcon from "../../assets/projectcompleted.png";
import appdevIcon from "../../assets/happyclients.png";

// ✅ Count-up hook
function useCountUp(end, startCounting, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const increment = end / (duration / 16); // 60fps

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

// ✅ Stats list
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

  // ✅ Trigger animation when in view
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
      className="relative bg-white flex justify-center py-14 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Soft gradient background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3488fa]/10 via-[#5a72ea]/10 to-transparent blur-3xl animate-pulse" />

      <div className="relative w-full max-w-9xl mx-auto z-10 flex flex-wrap justify-center items-center gap-10 sm:gap-14 md:gap-20 px-6 sm:px-8">
        {statsList.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={
              startCounting
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 30, scale: 0.95 }
            }
            transition={{
              duration: 0.6,
              delay: idx * 0.15,
              type: "spring",
              stiffness: 90,
            }}
            className="flex flex-col items-center text-center w-36 sm:w-44 md:w-48"
          >
            {/* Floating icon */}
            <motion.img
              src={stat.icon}
              alt={stat.label}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-3"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3 + idx,
                ease: "easeInOut",
              }}
            />

            {/* Count-up number */}
            <div className="flex items-baseline -mt-1 sm:-mt-2 mb-1">
              <span className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-800">
                {counters[idx]}
              </span>
              <span className="text-2xl sm:text-3xl md:text-3xl font-bold text-blue-500 ml-1">
                {stat.suffix}
              </span>
            </div>

            {/* Label */}
            <div className="text-gray-600 text-xs sm:text-sm md:text-base font-medium px-1">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
