import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    type: "Full-time",    
    location: "Remote",
    department: "Development",
    experience: "1-3 years",
  },
  {
    id: 2,
    title: "Backend Developer",
    type: "Full-time",
    location: "Indore, India",
    department: "Development",
    experience: "2-4 years",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    type: "Contract",
    location: "Remote",
    department: "Design",
    experience: "1+ years",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Pune, India",
    department: "Infrastructure",
    experience: "3+ years",
  },
];

export default function CareerPage() {
  const [filter, setFilter] = useState("All");

  const departments = ["All", "Development", "Design", "Infrastructure"];

  const filteredJobs =
    filter === "All" ? jobs : jobs.filter((job) => job.department === filter);

  return (
    <div className="font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#F8FAFF] py-16 px-6 md:px-16 text-center"
      >
        <h1 className="text-4xl md:text-4xl font-bold mb-6 text-gray-800">
          Build Your Career With Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
          Join our fast-growing IT team and be a part of innovative solutions
          that shape the digital future.
        </p>
        <motion.img
          src="https://plus.unsplash.com/premium_photo-1661274209157-118069b926f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
          alt="Career"
          className="mx-auto mt-10 rounded-xl w-full md:w-2/3 lg:w-1/2 shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.section>

      {/* Current Openings Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-gray-800 text-center"
        >
          Current Openings
        </motion.h2>

        {/* Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setFilter(dept)}
              className={`py-2 px-4 rounded-full border transition ${
                filter === dept
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {dept}
            </button>
          ))}
        </motion.div>

        {/* Job Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-1">
                  <strong>Type:</strong> {job.type}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Experience:</strong> {job.experience}
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition"
                >
                  Apply Now
                </motion.button> 
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No openings in this department currently.
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#F2F6FF] py-16 px-6 md:px-16 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Didn’t Find a Job That Fits You?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          We're always looking for talented individuals. Send us your resume and
          we’ll get in touch when the right opportunity arises.
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Resume
        </motion.button>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
