import React, { useEffect, useRef, useState } from "react";

// ✅ Import icons from assets folder
import icon1 from "../../assets/tailoredstarticon.png";
import icon2 from "../../assets/cuttingedgeicon.png";
import icon3 from "../../assets/resulticon.png";

// Intersection observer hook
const useInView = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
};

export default function WhyChooseUsSection() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: icon1,
      title: "Tailored Strategies",
      desc: "We create personalized digital marketing plans that align with your unique business goals and target audience, ensuring maximum impact and relevance.",
    },
    {
      icon: icon2,
      title: "Cutting-Edge Technology",
      desc: "Leveraging the latest tools and trends, our team stays ahead of the curve to deliver innovative solutions that keep your brand competitive in a rapidly evolving digital landscape.",
    },
    {
      icon: icon3,
      title: "Results-Driven Approach",
      desc: "Our focus is on achieving measurable outcomes. We use data-driven insights to optimize campaigns and track success, providing you with clear ROI and actionable results.",
    },
  ];

  return (
    <section
      ref={ref}
      className="w-full bg-gradient-to-r from-white via-blue-50 to-white py-20 relative overflow-hidden"
    >
      {/* Floating decorative shapes */}
      <span className="absolute w-16 h-16 bg-blue-200 rounded-full blur-2xl animate-float1 opacity-60"></span>
      <span className="absolute w-12 h-12 bg-blue-400 rounded-full blur-2xl animate-float2 opacity-50"></span>
      <span className="absolute w-20 h-20 bg-cyan-300 rounded-full blur-2xl animate-float3 opacity-40"></span>

      <div
        className={`max-w-6xl mx-auto px-4 flex flex-col gap-12 transition-all duration-1000 ${
          isVisible ? "animate-sectionVisible" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center md:text-left">
          <span className="inline-block text-xs mb-3 px-3 py-1 bg-blue-100 text-blue-700 rounded-full animate-fadeInUp">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-3xl font-bold mb-4 animate-fadeInUp">
            What Makes Us{" "}
            <span className="bg-gradient-to-r from-[#3488fa] to-black/70 bg-clip-text text-transparent">
              Different
            </span>
          </h2>
          <p className="text-gray-700 animate-fadeInUp">
            Discover why businesses trust Binarylogix to elevate their brand and
            drive measurable growth through technology and creativity.
          </p>
        </div>

        {/* Features cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`p-6 bg-white border border-blue-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 animate-card`}
              style={{ animationDelay: `${idx * 0.3}s` }}
            >
              <img src={feature.icon} alt={feature.title} className="w-29 h-25 mb-3 object-contain" />
              <h3 className="font-semibold text-blue-700 text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        .animate-sectionVisible {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: opacity 1s, transform 1s;
        }
        .animate-float1 {
          top: 10%;
          left: 5%;
          animation: float 6s ease-in-out infinite;
        }
        .animate-float2 {
          top: 30%;
          right: 10%;
          animation: float 8s ease-in-out infinite;
        }
        .animate-float3 {
          top: 50%;
          left: 40%;
          animation: float 10s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-fadeInUp {
          opacity: 0;
          transform: translateY(25px);
          animation: fadeInUp 0.8s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-card {
          opacity: 0;
          transform: translateY(25px) scale(0.97);
          animation: cardIn 0.8s forwards;
        }
        @keyframes cardIn {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
