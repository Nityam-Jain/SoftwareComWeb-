import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import project1 from "../assets/pachmariayurfull.png";
import project2 from "../assets/howtocleanfull.png";
import project3 from "../assets/edunaukarifull.png";
import project4 from "../assets/makeahabitfull.png";
import project5 from "../assets/chemistryfullpage.png";
import project6 from "../assets/sakshifullpage.png";
import project7 from "../assets/mandlamartfull.png";
import project8 from "../assets/ssvmfullpage.png";
import project9 from "../assets/fintechfull.png";

const categories = [
  "All",
  "Website Development",
  "UI/UX Design",
  "Graphic Design",
  "App Development"
];

const projects = [
   {
    title: "Make A Habit",
    category: "Multi Service Provider",
    image: project4,
    description:
      "It's an app for connecting customers with local service providers. The application features a clean, modern design that allows users to easily search for and book services such as home cleaning, plumbing, and electrical work.",
    tags: ["Seo Analysis", "Content Strategy"],
  },
  {
    title: "Pachmarhi Ayurveda",
    category: "E-Commerce Website",
    image: project1,
    description:
      "Pachmarhi Ayurveda is a wellness and e-commerce website offering a catalog of Ayurvedic products, wellness therapies, and natural remedies.",
    tags: ["Ayurvedic Product", "Management"],
  },
  {
    title: "How To Clean",
    category: "Application",
    image: project2,
    description:
      "How To Clean is a professional cleaning service website that focuses on offering tips, solutions, and booking options for residential and commercial cleaning..",
    tags: ["Web Development", "UI/UX"],
  },
  {
    title: "EduNaukri Job-Portal",
    category: "Jobs",
    image: project3,
    description:
      " EduNaukri is a comprehensive job portal website designed to connect job seekers with employers. It features a user-friendly interface, advanced search options, and secure login for both candidates and recruiters.",
    tags: ["Game Dev", "AR/VR"],
  },
 
  {
    title: "Chemistry Classes",
    category: "Education",
    image: project5,
    description:
      "Chemistry Classes is an educational website designed to provide students with resources, tutorials, and interactive learning experiences in chemistry.",
    tags: ["WordPress", "PHP", "HTML/CSS", "Figma"],
  },
  {
    title: "Sakshi Hospital",
    category: "Health",
    image: project6,
    description:
      "Sakshi Hospital’s website is designed to provide patients with easy access to healthcare information, doctor profiles, appointment booking, and facility details.",
    tags: ["SecurityManagement", "Backup" & "Recovery"],
  },
  {
    title: "Saravati Shishu Vidya Mandir Sironj",
    category: "School Website",
    image: project8,
    description:
      "Sakshi Hospital’s website is designed to provide patients with easy access to healthcare information, doctor profiles, appointment booking, and facility details.",
    tags: ["SecurityManagement", "Backup" & "Recovery"],
  },
  {
    title: "Robo Fintech Pvt Ltd",
    category: "financial technology website",
    image: project9,
    description:
      "Sakshi Hospital’s website is designed to provide patients with easy access to healthcare information, doctor profiles, appointment booking, and facility details.",
    tags: ["SecurityManagement", "Backup" & "Recovery"],
  },
   {
    title: "Mandla Mart",
    category: "Grocery Website",
    image: project7,
    description:
      "Sakshi Hospital’s website is designed to provide patients with easy access to healthcare information, doctor profiles, appointment booking, and facility details.",
    tags: ["SecurityManagement", "Backup" & "Recovery"],
  },
  //  {
  //   title: "Sakshi Hospital",
  //   category: "Health",
  //   image: project7,
  //   description:
  //     "Sakshi Hospital’s website is designed to provide patients with easy access to healthcare information, doctor profiles, appointment booking, and facility details.",
  //   tags: ["HTML/CSS","Figma"],
  // },
  //  {
  //   title: "Encrypt Blockchain",
  //   category: "Data security, it consultation",
  //   image: project8,
  //   description:
  //     "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
  //   tags: ["Data Security","PythonData", "Backup"],
  // },
  //  {
  //   title: "Robotchat AI Development",
  //   category: "machine learning",
  //   image: project9,
  //   description:
  //     "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
  //   tags: ["AI","Machine Learning"],
  // },
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
    <div>
      <Header />

      <div className="bg-white  w-full overflow-x-hidden">

        {/* Header Section */}
        <div className="text-center mb-12 px-4 sm:px-6 md:px-8">
          <span className="inline-block bg-[#efe6fb] text-blue-600 px-4 py-1 rounded-sm mt-8 mb-4 text-xs font-semibold tracking-wider">
            portfolio
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3488fa] to-black/70">
              Projects
            </span>
          </h1>
          <p className="text-gray-600 mt-2  max-w-2xl mx-auto">
            We have an experienced team of production and inspection personnel to ensure quality.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm md:text-base font-semibold px-3 sm:px-4 py-2 transition ${activeCategory === category
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
              className="rounded-2xl shadow-sm transition duration-100 overflow-hidden bg-white group"
            >
              {/* 🌀 Scroll-on-hover: parent has `group`, image animates on group-hover */}
              <div className="overflow-hidden h-48 sm:h-56 md:h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  /* make image taller than container so translate reveals hidden part */
                  className="w-full h-auto min-h-[140%] object-top object-cover transform transition-transform duration-[3.5s] ease-linear group-hover:-translate-y-[40%]"

                />
              </div>

              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 text-left pl-2">
                  {project.title}
                </h3>
                <a
                  // href="#"
                  className="uppercase text-xs sm:text-sm font-semibold text-[#5b82e2] tracking-wide block text-left pl-2 mb-1"
                >
                  {project.category}
                </a>

                {/* <p className="mt-2 text-gray-600 text-sm text-left pl-2 mb-4 leading-relaxed">
                  {project.description}
                </p> */}
              </div>
            </div>
          ))}
        </div>


        {/* See More Button */}
        <div className="flex justify-center mt-20 sm:mt-20 mb-12 px-4">
          {/* <button className="px-6 py-2 bg-gradient-to-r from-[#3488fa] to-black/70 text-white font-semibold rounded-full transition w-auto sm:w-auto">
            Show More
          </button> */}
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
            <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold mb-4 text-gray-900 leading-snug">
              Access your business potentials <br className="hidden sm:block" />
              today &amp; find opportunity for
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#3488fa] to-black/70 bg-clip-text font-bold text-transparent">
                bigger success
              </span>
            </h2>

            <div className="mt-6 sm:mt-7 flex flex-wrap justify-center gap-3 sm:gap-4">
              <button className="px-6 sm:px-7 py-3 bg-gradient-to-r from-[#3488fa] to-black/70 text-white font-bold rounded-full shadow-lg transition">
                Start A Project Now
              </button>
              <button className="px-6 sm:px-7 py-3 border border-[#7b6cff] bg-transparent text-black hover:bg-gradient-to-r from-[#3488fa] to-black/70 hover:text-white font-semibold rounded-full shadow transition">
                See Pricing &amp; Plan
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>

  );
}
