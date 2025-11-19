// New dynamic project page handling 
// -------------------------------------------------------

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import projectBg from "../assets/projectbanner.jpg";

// ✅ Categories
const categories = [
  "All",
  "Website/App Development",
  "UI/UX Design",
  "Graphic Design",
  "Logo",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  // ✅ Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/projects");
        // ✅ Map only required fields (title, category, image)
        const fetched = res.data.map((p) => ({
          title: p.title,
          category: p.category,
          image: p.image?.startsWith("http")
            ? p.image
            : `http://localhost:5001/${p.image.replace(/^\/?/, "").replace(/\\/g, "/")}`,

        }));
        setProjects(fetched);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, []);

  // ✅ Category filter
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
        <section
          className="relative w-full h-[60vh] flex items-center justify-center text-center bg-fixed bg-cover bg-center mb-10"
          style={{
            backgroundImage: `url(${projectBg})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-blue-900/40 to-black/70"></div>
          <div className="relative z-10 text-white px-6">
            <span className="inline-block bg-white/20 text-blue-200 px-4 py-1 rounded-full text-xs uppercase tracking-wider mb-4">
              Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                Projects
              </span>
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto sm:text-base">
              We have an experienced team of production and inspection personnel
              to ensure top-notch quality in every project we deliver.
            </p>
          </div>

          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400/30 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-52 h-52 bg-blue-300/30 blur-3xl rounded-full"></div>
        </section>

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
              className={`text-sm md:text-base font-semibold px-3 sm:px-4 py-2 transition ${activeCategory === category
                ? "text-blue-600"
                : "text-gray-800"
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
                      ${project.category === "Logo"
                        ? "h-[260px] sm:h-[320px] md:h-[380px]"
                        : isGraphic
                          ? "h-[380px] sm:h-[420px] md:h-[460px]"
                          : "h-auto"
                      }`}
                  >
                    {/* Image Container */}
                    <div
                      className={`overflow-hidden 
                        ${isGraphic
                          ? "h-[380px] sm:h-[420px] md:h-[460px]"
                          : "h-48 sm:h-56 md:h-80"
                        }
                      `}
                    >
                      <motion.img
                        whileHover={
                          project.category === "Website/App Development"
                            ? { y: "-100%" } // 🧠 full scroll effect only for web dev category
                            : {}
                        }
                        transition={
                          project.category === "Website/App Development"
                            ? { duration: 6, ease: "linear" }
                            : {}
                        }
                        src={project.image}
                        alt={project.title}
                        className={` 
                         w-full h-auto max-h-none object-top
                        ${project.category === "Logo"
                            ? "object-contain object-center p-6 sm:p-8"
                            : "object-cover"
                          }
    `}
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