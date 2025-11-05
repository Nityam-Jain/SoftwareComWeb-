import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import carrerBg3 from "../assets/carrerbanner.png";

export default function CareerPage() {
    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState("All");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedJob, setSelectedJob] = useState(null);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        portfolio: "",
        message: "",
        resume: null,
        jobId: "",
    });

    const departments = ["All", "Development", "Design", "Social Media"];

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get("http://localhost:5001/api/jobs");
                setJobs(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to load jobs.");
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const filteredJobs =
        filter === "All" ? jobs : jobs.filter((job) => job.department === filter);

    const openModal = (Job) => {
        setSelectedJob(Job);
        setFormData({ ...formData, jobId: Job._id });
    };

    const closeModal = () => {
        setSelectedJob(null);
        setFormData({
            fullName: "",
            email: "",
            phone: "",
            experience: "",
            portfolio: "",
            message: "",
            resume: null,
            jobId: "",
        });
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const submissionData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            submissionData.append(key, value);
        });

        try {
            // Replace with correct backend API endpoint
            await axios.post("http://localhost:5001/api/applications", submissionData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("Application submitted successfully!");
            closeModal();
        } catch (error) {
            console.error(error);
            alert("Failed to submit the application.");
        }
    };

    return (
        <div className="font-sans">
            <Header />

            {/* Banner Section */}
            <section
                className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center bg-fixed md:bg-cover bg-center mb-16 text-white bg-black/40 bg-blend-overlay bg-[length:auto_100%] sm:bg-cover"
                style={{ backgroundImage: `url(${carrerBg3})` }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-transparent text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-white"
                >
                    Join Our Team
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-lg max-w-2xl mx-auto"
                >
                    Build your career with one of the fastest-growing IT companies.
                </motion.p>
            </section>

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
                            className={`py-2 px-4 rounded-full border transition ${filter === dept
                                ? "bg-blue-600 text-white border-blue-600"
                                : "border-gray-300 text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            {dept}
                        </button>
                    ))}
                </motion.div>

                {/* Job Cards */}
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {loading ? (
                        <p className="text-center text-gray-500 col-span-full">Loading jobs...</p>
                    ) : error ? (
                        <p className="text-center text-red-500 col-span-full">{error}</p>
                    ) : filteredJobs.length > 0 ? (
                        filteredJobs.map((job, index) => (
                            <motion.div
                                key={job._id}
                                className="relative p-6 rounded-2xl shadow-xl bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-md border border-white/40 hover:shadow-2xl hover:scale-[1.03] transition-all cursor-pointer group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

                                <h2 className="text-xl font-bold text-gray-800 mb-3">{job.title}</h2>

                                <div className="space-y-2 text-gray-600">
                                    <p><strong className="text-gray-800">Type:</strong> {job.type}</p>
                                    <p><strong className="text-gray-800">Location:</strong> {job.location}</p>
                                    <p><strong className="text-gray-800">Department:</strong> {job.department}</p>
                                    <p>
                                        <strong className="text-gray-800">Experience:</strong>{" "}
                                        {job.experience} years
                                    </p>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={(e) => {
                                        e.stopPropagation(); // ✅ Allows button clicks even inside clickable cards
                                        openModal(Job);
                                    }}
                                    className="mt-6 w-full py-2.5 font-medium rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-md hover:from-blue-600 hover:to-indigo-700 transition"
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

            {/* Modal */}
            {selectedJob && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="bg-white max-w-lg w-full p-6 rounded-2xl shadow-2xl relative"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                        >
                            &times;
                        </button>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Apply for {selectedJob.title}
                        </h3>

                        <div className="mb-4 p-3 bg-gray-100 rounded-md text-gray-700 text-sm space-y-1">
                            <p><strong>Department:</strong> {selectedJob.department}</p>
                            <p><strong>Location:</strong> {selectedJob.location}</p>
                            <p><strong>Type:</strong> {selectedJob.type}</p>
                            <p><strong>Experience Required:</strong> {selectedJob.experience} years</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                required
                                className="w-full px-4 py-2 border rounded-lg"
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                className="w-full px-4 py-2 border rounded-lg"
                                onChange={handleChange}
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                required
                                className="w-full px-4 py-2 border rounded-lg"
                                onChange={handleChange}
                            />
                            <input
                                type="number"
                                name="experience"
                                placeholder="Years of Experience"
                                required
                                className="w-full px-4 py-2 border rounded-lg"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="portfolio"
                                placeholder="Portfolio URL (optional)"
                                className="w-full px-4 py-2 border rounded-lg"
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                placeholder="Additional Message (optional)"
                                className="w-full px-4 py-2 border rounded-lg"
                                onChange={handleChange}
                            />
                            <input
                                type="file"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                required
                                className="w-full px-4 py-2 border rounded-lg"
                                onChange={handleChange}
                            />

                            <button
                                type="submit"
                                className="w-full py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition font-medium"
                            >
                                Submit Application
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
