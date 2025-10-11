import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";
import project9 from "../assets/project9.jpg";

const categories = [
  "All",
  "IT Consultation",
  "Website Development",
  "UI/UX Design",
  "Graphic Design",
  "App Development"
];

const projects = [
  {
    title: "Infrastructure Upgrade",
    category: "IT Consultation",
    image: project1,
    description:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    tags: ["Consultation", "Management"],
  },
  {
    title: "Criftocy Landing Page",
    category: "Website Development, UI/UX Design",
    image: project2,
    description:
      "Modern landing page with custom UI/UX for better user experience.",
    tags: ["Web Development", "UI/UX"],
  },
  {
    title: "AR/VR War 1986 Game",
    category: "Game Development",
    image: project3,
    description:
      "Immersive AR/VR experience based on classic war themes.",
    tags: ["Game Dev", "AR/VR"],
  },
   {
    title: "Okpay E-Wallet Optimized",
    category: "SEO ANALYSIS",
    image: project4,
    description:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    tags: ["Seo Analysis", "Content Strategy"],
  },
   {
    title: "e-Commerce Dashboard",
    category: "website design & develoment",
    image: project5,
    description:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app..",
    tags: ["WordPress","PHP","HTML/CSS","Figma"],
  },
   {
    title: "Crypto Blockchain",
    category: "Data security",
    image: project6,
    description:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    tags: ["SecurityManagement","Backup" & "Recovery"],
  },
   {
    title: "Car Rental Dashboard",
    category: "UI/UX Design",
    image: project7,
    description:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    tags: ["HTML/CSS","Figma"],
  },
   {
    title: "Encrypt Blockchain",
    category: "Data security, it consultation",
    image: project8,
    description:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    tags: ["Data Security","PythonData", "Backup"],
  },
   {
    title: "Robotchat AI Development",
    category: "machine learning",
    image: project9,
    description:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    tags: ["AI","Machine Learning"],
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
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <Header />

      {/* Header Section */}
      <div className="text-center mb-12 px-4 sm:px-6 md:px-8">
        <span className="inline-block bg-[#efe6fb] text-blue-600 px-4 py-1 rounded-sm mt-8 mb-4 text-xs font-semibold tracking-wider">
          portfolio
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3488fa] to-black/70">
            Projects
          </span>
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base max-w-2xl mx-auto">
          We have an experienced team of production and inspection personnel to ensure quality.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm md:text-base font-semibold px-3 sm:px-4 py-2 transition ${
              activeCategory === category
                ? "text-blue-600"
                : "text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 px-4 sm:px-6 mb-12">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-sm transition duration-300 overflow-hidden bg-white"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-56 md:h-60 object-cover"
            />
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 text-left pl-2">
                {project.title}
              </h3>
              <a
                href="#"
                className="uppercase text-xs sm:text-sm font-semibold text-[#5b82e2] tracking-wide block text-left pl-2 mb-1"
              >
                {project.category}
              </a>

              <p className="mt-2 text-gray-600 text-sm text-left pl-2 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-start mt-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-sm text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-20 sm:mt-20 mb-12 px-4">
        <button className="px-6 py-2 bg-[#5842bc] text-white font-semibold rounded-full transition w-auto sm:w-auto">
          Show More
        </button>
      </div>

      {/* Hero Section with Rotating Globe */}
      <div className="relative flex flex-col items-center justify-center min-h-[350px] sm:min-h-[400px] py-12 sm:py-16 bg-[#f8f8fa] overflow-hidden px-4">
        {/* Rotating Globe Background */}
        <div className="absolute inset-0 flex items-center justify-center z-0 opacity-30 pointer-events-none">
          <div className="w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] relative">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full animate-spin-slow"
            >
              <circle cx="100" cy="100" r="90" fill="#efe6fb" />
              <ellipse
                cx="100"
                cy="100"
                rx="80"
                ry="30"
                fill="none"
                stroke="#d1c4e9"
                strokeWidth="2"
              />
              <ellipse
                cx="100"
                cy="100"
                rx="60"
                ry="15"
                fill="none"
                stroke="#bb86fc"
                strokeWidth="2"
                transform="rotate(20 100 100)"
              />
              <ellipse
                cx="100"
                cy="100"
                rx="50"
                ry="10"
                fill="none"
                stroke="#7c4dff"
                strokeWidth="1.5"
                transform="rotate(-25 100 100)"
              />
            </svg>
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col items-center justify-center z-10 relative text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-gray-900 leading-snug">
            Access your business potentials <br className="hidden sm:block" />
            today &amp; find opportunity for
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#7b6cff] via-[#ac5cd8] to-[#ff85ac] bg-clip-text font-bold text-transparent">
              bigger success
            </span>
          </h2>

          <div className="mt-6 sm:mt-7 flex flex-wrap justify-center gap-3 sm:gap-4">
            <button className="px-6 sm:px-7 py-3 bg-[#5842bc] text-white font-bold rounded-full shadow-lg transition">
              Start A Project Now
            </button>
            <button className="px-6 sm:px-7 py-3 border border-[#7b6cff] bg-transparent text-black hover:bg-[#5842bc] hover:text-white font-semibold rounded-full shadow transition">
              See Pricing &amp; Plan
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
