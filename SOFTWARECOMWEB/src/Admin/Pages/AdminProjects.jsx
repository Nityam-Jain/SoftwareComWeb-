import React, { useEffect, useState } from "react";
import axios from "axios";
import { PlusCircle, X, Trash2 } from "lucide-react";
import Swal from "sweetalert2";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const API_URL = "/api/projects"; // ✅ Change if deployed

  // ✅ Fetch all projects
  const fetchProjects = async () => {
    try {
      const res = await axios.get(API_URL);
      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("category", formData.category);
      data.append("description", formData.description);
      if (formData.image) data.append("image", formData.image);

      await axios.post(API_URL, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      Swal.fire("Success", "Project added successfully!", "success");
      setShowModal(false);
      setFormData({ title: "", category: "", description: "", image: null });
      fetchProjects();
    } catch (err) {
      Swal.fire("Error", "Failed to add project", "error");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete project
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete?",
      text: "Are you sure you want to delete this project?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });
    if (confirm.isConfirmed) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        Swal.fire("Deleted!", "Project removed.", "success");
        fetchProjects();
      } catch (err) {
        Swal.fire("Error", "Failed to delete project", "error");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Project Manager</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
        >
          <PlusCircle size={18} /> Add Project
        </button>
      </div>

      {/* Projects Grid */}
      {projects.length === 0 ? (
        <p className="text-center text-gray-500">No projects uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={
                  project.image?.startsWith("http")
                    ? project.image
                    : `${project.image}`
                }
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-lg mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {project.category}
                </p>
                {project.description && (
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {project.description}
                  </p>
                )}
                <div className="flex justify-end mt-3">
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Project Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              <X size={22} />
            </button>

            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Add New Project
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
                >
                  <option value="">Select Category</option>
                  <option value="Website/App Development">
                    Website/App Development
                  </option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Logo">Logo</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
                  placeholder="Short project details..."
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Upload Image
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
              >
                {loading ? "Uploading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
