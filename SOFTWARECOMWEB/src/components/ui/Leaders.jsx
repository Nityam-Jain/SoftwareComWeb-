import React from "react";

const Leaders = () => {
  const leaders = [
    {
      name: "Kamal Solanki",
      role: "CEO & Founder",
      img: "/assets/leader1.jpg", 
    },
    {
      name: "Jayant Ahirwar",
      role: "Marketing Specialist",
      img: "/assets/leader2.jpg", 
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#f8faff]">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-sm text-blue-500 font-semibold uppercase tracking-wide bg-purple-50 px-3 py-1 rounded-full">
         Our Team
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Our{" "}
          <span className="bg-gradient-to-r from-[#3488fa] to-black/70  bg-clip-text text-transparent">
            Leadership Team
          </span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          The professional creative team that drives growth and innovation.
        </p>
      </div>

      {/* Team Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {leaders.map((leader, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 w-[270px] text-center overflow-hidden"
          >
            <img
              src={leader.img}
              alt={leader.name}
              className="w-full h-72 object-cover"
            />
            <div className="py-4">
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
    </section>
  );
};

export default Leaders;
