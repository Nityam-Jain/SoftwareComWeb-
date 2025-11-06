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
    const [showModal, setShowModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [resumePreview, setResumePreview] = useState(null);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        portfolio: "",
        linkedin: "",
        github: "",
        resume: null,
    });

    const departments = ["All", "Development", "Design", "Marketing"];
 
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

    const handleApplyClick = (job) => {
        setSelectedJob(job);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedJob(null);
        setFormData({
            fullName: "",
            email: "",
            phone: "",
            portfolio: "",
            linkedin: "",
            github: "",
            resume: null,
        });
        setResumePreview(null);
    };

    const handleFormChange = (e) => {
        if (e.target.type === "file") {
            setFormData({ ...formData, resume: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleApplySubmit = (e) => {
        e.preventDefault();
        const submitData = new FormData();
        submitData.append("fullName", formData.fullName);
        submitData.append("email", formData.email);
        submitData.append("phone", formData.phone);
        submitData.append("portfolio", formData.portfolio);
        submitData.append("linkedin", formData.linkedin);
        submitData.append("github", formData.github);
        submitData.append("resume", formData.resume);
        submitData.append("jobTitle", selectedJob.title);
        submitData.append("department", selectedJob.department);
        submitData.append("location", selectedJob.location);
        submitData.append("experience", selectedJob.experience);

        axios
            .post("http://localhost:5001/api/apply", submitData)
            .then(() => alert("Application submitted successfully!"))
            .catch(() => alert("Submission failed"));

        handleCloseModal();
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
                                <h2 className="text-xl font-bold text-gray-800 mb-3">{job.title}</h2>

                                <div className="space-y-2 text-gray-600">
                                    <p>
                                        <strong className="text-gray-800">Type:</strong> {job.type}
                                    </p>
                                    <p>
                                        <strong className="text-gray-800">Location:</strong> {job.location}
                                    </p>
                                    <p>
                                        <strong className="text-gray-800">Department:</strong> {job.department}
                                    </p>
                                    <p>
                                        <strong className="text-gray-800">Experience:</strong>{" "}
                                        {job.experience} {job.experience && "years"}
                                    </p>
                                </div>

                                <motion.button
                                    onClick={() => handleApplyClick(job)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
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

            {/* Modal Section */}
            {showModal && selectedJob && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
                        >
                            &times;
                        </button>

                        <h3 className="text-2xl font-semibold text-center mb-6">
                            Apply for: <span className="text-blue-600">{selectedJob.title}</span>
                        </h3>

                        <form onSubmit={handleApplySubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-600 font-medium mb-1">Job Title</label>
                                    <input
                                        type="text"
                                        value={selectedJob.title}
                                        disabled
                                        className="w-full border px-4 py-2 rounded-lg bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-medium mb-1">Department</label>
                                    <input
                                        type="text"
                                        value={selectedJob.department}
                                        disabled
                                        className="w-full border px-4 py-2 rounded-lg bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-medium mb-1">Location</label>
                                    <input
                                        type="text"
                                        value={selectedJob.location}
                                        disabled
                                        className="w-full border px-4 py-2 rounded-lg bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-medium mb-1">Experience</label>
                                    <input
                                        type="text"
                                        value={selectedJob.experience + " years"}
                                        disabled
                                        className="w-full border px-4 py-2 rounded-lg bg-gray-100"
                                    />
                                </div>
                            </div>

                            {/* Personal Info Section */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-600 font-medium mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleFormChange}
                                        required
                                        className="w-full border px-4 py-2 rounded-lg focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-medium mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleFormChange}
                                        required
                                        className="w-full border px-4 py-2 rounded-lg focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-medium mb-1">Phone Number</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            // Allow only digits and limit to 10 characters
                                            if (/^\d*$/.test(value) && value.length <= 10) {
                                                handleFormChange(e);
                                            }
                                        }}
                                        maxLength="10"
                                        required
                                        className="w-full border px-4 py-2 rounded-lg focus:outline-none"
                                        placeholder="Enter 10-digit number"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-600 font-medium mb-1">Portfolio Link</label>
                                    <input
                                        type="url"
                                        name="portfolio"
                                        placeholder="https://your-portfolio.com"
                                        value={formData.portfolio}
                                        onChange={handleFormChange}
                                        className="w-full border px-4 py-2 rounded-lg focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-medium mb-1">LinkedIn Profile</label>
                                    <input
                                        type="url"
                                        name="linkedin"
                                        placeholder="https://linkedin.com/in/yourprofile"
                                        value={formData.linkedin}
                                        onChange={handleFormChange}
                                        className="w-full border px-4 py-2 rounded-lg focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-medium mb-1">GitHub Profile</label>
                                    <input
                                        type="url"
                                        name="github"
                                        placeholder="https://github.com/yourusername"
                                        value={formData.github}
                                        onChange={handleFormChange}
                                        className="w-full border px-4 py-2 rounded-lg focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Resume Upload */}
                            <div>
                                <label className="block text-gray-600 font-medium mb-1">
                                    Upload Resume (PDF/DOC)
                                </label>
                                <input
                                    type="file"
                                    name="resume"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) => {
                                        setFormData({ ...formData, resume: e.target.files[0] });
                                        setResumePreview(e.target.files[0]?.name || null);
                                    }}
                                    required
                                    className="w-full border px-4 py-2 rounded-lg cursor-pointer"
                                />
                                {resumePreview && (
                                    <p className="mt-2 text-sm text-green-600">
                                        <strong>Selected File:</strong> {resumePreview}
                                    </p>
                                )}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            )}

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

            <Footer />
        </div>
    );
}   
