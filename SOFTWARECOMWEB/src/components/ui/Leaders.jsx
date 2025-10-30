import React, { useEffect } from "react";
import leader1 from "../../assets/CEO.png";
import leader2 from "../../assets/Marketer.jpeg";

const Leaders = () => {
  const leaders = [
    {
      name: "Kamal Solanki",
      role: "CEO & Founder",
      img: leader1,
    },
    {
      name: "Jayant Ahirwar",
      role: "Marketing Specialist",
      img: leader2,
    },
  ];

  useEffect(() => {
    // Trigger animations on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeUp");
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".leader-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background Glow Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#dbe8ff]/40 via-transparent to-[#f0f8ff]/50 blur-3xl animate-pulse-slow"></div>

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <span className="text-sm text-blue-500 font-semibold uppercase tracking-wide bg-blue-50 px-4 py-1 rounded-full shadow-sm">
          Our Team
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-5">
          Our{" "}
          <span className="bg-gradient-to-r from-[#3488fa] to-black/70 bg-clip-text text-transparent">
            Leadership Team
          </span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          The professional creative team that drives growth and innovation.
        </p>
      </div>

      {/* Team Cards */}
      <div className="flex flex-wrap justify-center gap-10 relative z-10">
        {leaders.map((leader, i) => (
          <div
            key={i}
            className="leader-card bg-white rounded-3xl shadow-md w-[270px] text-center overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
          >
            <img
              src={leader.img}
              alt={leader.name}
              className="w-full h-72 object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="py-5">
              <h3 className="text-gray-900 font-semibold text-lg">
                {leader.name}
              </h3>
              <p className="text-blue-500 text-sm font-medium">
                {leader.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 1s ease-out forwards;
        }
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Leaders;
