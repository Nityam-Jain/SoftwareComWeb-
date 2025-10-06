import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// Example project images (replace with your own)
// import project1 from "../assets/project1.jpg";
// import project2 from "../assets/project2.jpg";
// import project3 from "../assets/project3.jpg";

const categories = [
  "All",
  "IT Consultation",
  "Data Security",
  "Website Development",
  "UI/UX Design",
  "Cloud Service",
  "Game Development",
];

const projects = [
  {
    title: "Infrastructure Upgrade",
    category: "IT Consultation",
    // image: project1,
  },
  {
    title: "Criftocy Landing Page",
    category: "Website Development, UI/UX Design",
    // image: project2,
  },
  {
    title: "AR/VR War 1986 Game",
    category: "Game Development",
    // image: project3,
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) =>
        p.category.toLowerCase().includes(activeCategory.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-[#f9faff] pt-24 pb-20 px-6">
      
            <Header />
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="inline-block bg-[#efe6fb] text-[#7554e0] px-4 py-1 rounded-lg mb-4 text-xs font-semibold tracking-wider">
          portfolio
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#623abc] via-[#cc64bc] to-[#f57e8a]">
            Projects
          </span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          We have an experienced team of production and inspection personnel to ensure quality.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm md:text-base font-semibold px-4 py-2 rounded-full border transition ${activeCategory === category
                ? "bg-[#7554e0] text-white shadow"
                : "text-gray-800 hover:text-[#7554e0]"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-[#7554e0] font-semibold">
                {project.category}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />

    </div>
  );
}
