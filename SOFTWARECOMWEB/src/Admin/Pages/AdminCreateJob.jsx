import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Edit3, Trash2, PlusCircle, X } from "lucide-react";

export default function AdminJobManager() {
  const [jobData, setJobData] = useState({
    title: "",
    type: "",
    location: "",
    department: "",
    experience: "",
  });

  const [jobs, setJobs] = useState([]);
  const [message, setMessage] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [currentJobId, setCurrentJobId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Fetch all jobs on load
  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/jobs");
      setJobs(res.data);
    } catch (err) {
      console.error("Error fetching jobs", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // ✅ Handle input changes in modal form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  // ✅ Handle form submit (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(
          `http://localhost:5001/api/jobs/${currentJobId}`,
          jobData
        );
        setMessage("Job updated successfully");
      } else {
        const res = await axios.post("http://localhost:5001/api/jobs", jobData);
        setMessage(res.data.message);
      }
      fetchJobs();
      handleModalClose();
    } catch (err) {
      setMessage(err.response?.data?.message || "Error processing request");
    }
  };

  // ✅ Handle Delete with SweetAlert
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This job will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5001/api/jobs/${id}`);
          Swal.fire("Deleted!", "Job has been deleted.", "success");
          fetchJobs();
        } catch (err) {
          Swal.fire("Error!", "Could not delete job.", "error");
        }
      }
    });
  };

  // ✅ Set job data for edit mode and open modal
  const handleEdit = (job) => {
    setEditMode(true);
    setCurrentJobId(job._id);
    setJobData({
      title: job.title,
      type: job.type,
      location: job.location,
      department: job.department,
      experience: job.experience,
    });
    setIsModalOpen(true);
  };

  // ✅ Open modal for creating new job
  const handleCreate = () => {
    setEditMode(false);
    setCurrentJobId(null);
    setJobData({
      title: "",
      type: "",
      location: "",
      department: "",
      experience: "",
    });
    setIsModalOpen(true);
  };

  // ✅ Close modal
  const handleModalClose = () => {
    setIsModalOpen(false);
    setJobData({
      title: "",
      type: "",
      location: "",
      department: "",
      experience: "",
    });
    setEditMode(false);
    setCurrentJobId(null);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800"> Job Management</h2>
        <button
          onClick={handleCreate}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          <PlusCircle className="mr-2" size={18} /> Create Job
        </button>
      </div>

      {/* Job Listing */}
      <div className="grid gap-6 md:grid-cols-2">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="p-4 border rounded-lg shadow-sm bg-gray-50"
          >
            <h4 className="text-lg font-bold text-gray-800">{job.title}</h4>
            <p className="text-gray-600">Type: {job.type}</p>
            <p className="text-gray-600">Location: {job.location}</p>
            <p className="text-gray-600">Department: {job.department}</p>
            <p className="text-gray-600">Experience: {job.experience}</p>

            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={() => handleEdit(job)}
                className="flex items-center justify-center text-blue-900 p-2 rounded-lg"
              >
                <Edit3 size={18} />
              </button>

              <button
                onClick={() => handleDelete(job._id)}
                className="flex items-center justify-center text-red-600 p-2 rounded-lg"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={handleModalClose}
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-4 text-gray-800">
              {editMode ? "Edit Job" : "Create New Job"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                value={jobData.title}
                onChange={handleChange}
                required
                placeholder="Job Title"
                className="w-full border p-2 rounded-lg"
              />
              <select
                name="type"
                value={jobData.type}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded-lg"
              >
                <option value="">Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
              <input
                type="text"
                name="location"
                value={jobData.location}
                onChange={handleChange}
                required
                placeholder="Location"
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="text"
                name="department"
                value={jobData.department}
                onChange={handleChange}
                required
                placeholder="Department (e.g. Development)"
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="text"
                name="experience"
                value={jobData.experience}
                onChange={handleChange}
                required
                placeholder="Experience (e.g. 1-3 years)"
                className="w-full border p-2 rounded-lg"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg font-medium"
              >
                {editMode ? "Update Job" : "Create Job"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
