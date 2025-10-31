import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ✅ Import all assets
import project1 from "../assets/pachmariayurfull.png";
import project2 from "../assets/howtocleanfull.png";
import project3 from "../assets/edunaukarifull.png";
import project4 from "../assets/makeahabitfull.png";
import project5 from "../assets/chemistryfullpage.png";
import project6 from "../assets/sakshifullpage.png";
import project7 from "../assets/mandlamartfull.png";
import project8 from "../assets/ssvmfullpage.png";
import project9 from "../assets/fintechfull.png";

import design01 from "../assets/ui ux 1.png";
import design02 from "../assets/ui ux 2.jpg";
import design03 from "../assets/ui ux 3.jpg";

import graphic1 from "../assets/8.jpg";
import graphic2 from "../assets/9.jpg";
import graphic3 from "../assets/11.jpg";
import graphic4 from "../assets/1.jpg";
import graphic5 from "../assets/4.jpg";
import graphic6 from "../assets/12.jpg";
import graphic7 from "../assets/10.jpg";

import Logo1 from "../assets/logo01.png";
import Logo2 from "../assets/logo02.png";
import Logo3 from "../assets/logo004.png";
import Logo4 from "../assets/logo005.png";
import Logo5 from "../assets/logo006.png";
import Logo6 from "../assets/logo007.png";

// ✅ Categories
const categories = [
  "All",
  "Website/App Development",
  "UI/UX Design",
  "Graphic Design",
  "Logo",
];

// ✅ Projects
const projects = [
  { title: "Make A Habit", category: "Website/App Development", image: project4 },
  { title: "How to clean", category: "Website/App Development", image: project2 },
  { title: "Pachmarhi Ayurveda", category: "Website/App Development", image: project1 },
  { title: "EduNaukri Job-Portal", category: "Website/App Development", image: project3 },
  { title: "Chemistry Classes", category: "Website/App Development", image: project5 },
  { title: "Sakshi Hospital", category: "Website/App Development", image: project6 },
  { title: "Saravati Shishu Vidya Mandir", category: "Website/App Development", image: project8 },
  { title: "Robo Fintech Pvt Ltd", category: "Website/App Development", image: project9 },
  { title: "Mandla Mart", category: "Website/App Development", image: project7 },

  { title: "Design01", category: "UI/UX Design", image: design01 },
  { title: "Design02", category: "UI/UX Design", image: design02 },
  { title: "Design03", category: "UI/UX Design", image: design03 },

  { title: "Graphic", category: "Graphic Design", image: graphic1 },
  { title: "Graphic", category: "Graphic Design", image: graphic2 },
  { title: "Graphic", category: "Graphic Design", image: graphic3 },
  { title: "Graphic", category: "Graphic Design", image: graphic4 },
  { title: "Graphic", category: "Graphic Design", image: graphic5 },
  { title: "Graphic", category: "Graphic Design", image: graphic6 },
  { title: "Graphic", category: "Graphic Design", image: graphic7 },

  { title: "Graphic", category: "Logo", image: Logo1 },
  { title: "Graphic", category: "Logo", image: Logo2 },
  { title: "Graphic", category: "Logo", image: Logo3 },
  { title: "Graphic", category: "Logo", image: Logo4 },
  { title: "Graphic", category: "Logo", image: Logo5 },
  { title: "Graphic", category: "Logo", image: Logo6 },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) =>
        p.category.toLowerCase().includes(activeCategory.toLowerCase())
      );

  const handleCategoryClick = (category) => {
    setLoading(true);
    setActiveCategory(category);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div>
      <Header />
      <div className="bg-white w-full overflow-x-hidden">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 px-4 sm:px-6 md:px-8"
        >
          <span className="inline-block bg-[#efe6fb] text-blue-600 px-4 py-1 rounded-sm mt-8 mb-4 text-xs font-semibold tracking-wider">
            portfolio
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3488fa] to-black/70">
              Projects
            </span>
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            We have an experienced team of production and inspection personnel to ensure quality.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4"
        >
          {categories.map((category) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`text-sm md:text-base font-semibold px-3 sm:px-4 py-2 transition ${activeCategory === category ? "text-blue-600" : "text-gray-800"
                }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Loader */}
        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          {!loading && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 px-4 sm:px-6 mb-12"
            >
              {filteredProjects.map((project, index) => {
                const isWeb = project.category === "Website/App Development";
                const isUiUx =
                  project.category === "UI/UX Design" ||
                  project.category.toLowerCase() === "ux/ui";
                const isGraphic = project.category === "Graphic Design";

                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className={`rounded-2xl shadow-sm overflow-hidden bg-white group transition-all duration-500 
                      ${isGraphic ? "h-[380px] sm:h-[420px] md:h-[460px]" : "h-auto"}
                    `}
                  >
                    {/* Image Container */}
                    <div
                      className={`overflow-hidden 
                        ${isGraphic ? "h-[380px] sm:h-[420px] md:h-[460px]" : "h-48 sm:h-56 md:h-80"}
                      `}
                    >
                      <motion.img
                        whileHover={
                          isWeb || isUiUx
                            ? { y: "-100%" }
                            : { scale: 1.1 }
                        }
                        transition={{ duration: 6, ease: "linear" }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto max-h-none object-top"
                        style={{ transformOrigin: "top", display: "block" }}
                      />

                    </div>

                    {/* Text Section */}
                    {(isWeb || isUiUx) && (
                      <div className="p-4 sm:p-6 text-center">
                        {!isUiUx && (
                          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 text-left pl-2">
                            {project.title}
                          </h3>
                        )}
                        <a className="uppercase text-xs sm:text-sm font-semibold text-[#5b82e2] tracking-wide block text-left pl-2 mb-1">
                          {project.category}
                        </a>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}
