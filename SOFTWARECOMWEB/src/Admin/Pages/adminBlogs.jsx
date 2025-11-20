import React, { useState, useEffect } from "react";
import axios from "axios";
import { PlusCircle, Trash2, Edit3, Eye, Calendar, User, Tag, Clock } from "lucide-react";
import Swal from "sweetalert2";

const AdminBlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [viewBlog, setViewBlog] = useState(null);
  const [editingBlog, setEditingBlog] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    author: "",
    category: "Other",
    readTime: "5 min read",
    image: null,
    imagePreview: "",
  });

  // ✅ Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/api/blogs/getAllBlogs");
      if (res.data.success) setBlogs(res.data.blogs);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ✅ Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle file upload with preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onload = () =>
        setFormData((prev) => ({ ...prev, imagePreview: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  // ✅ Handle Create or Update Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "imagePreview" && value) {
        data.append(key, value);
      }
    });

    try {
      const url = editingBlog
        ? `/api/blogs/${editingBlog._id}`
        : `/api/blogs`;

      const method = editingBlog ? axios.put : axios.post;

      const res = await method(url, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      Swal.fire(
        editingBlog ? "Updated!" : "Success",
        `Blog ${editingBlog ? "updated" : "created"} successfully!`,
        "success"
      );

      fetchBlogs();
      setShowModal(false);
      setEditingBlog(null);
      resetForm();
    } catch (err) {
      Swal.fire("Error", err.response?.data?.message || "Something went wrong", "error");
    }
  };


  // ✅ Reset form
  const resetForm = () => {
    setFormData({
      title: "",
      desc: "",
      author: "",
      category: "Other",
      readTime: "5 min read",
      image: null,
      imagePreview: "",
    });
  };

  //edit modal 
  const handleEdit = (blog) => {
    setEditingBlog(blog);

    setFormData({
      title: blog.title || "",
      desc: blog.desc || "",
      author: blog.author || "",
      category: blog.category || "Other",
      readTime: blog.readTime || "5 min read",
      image: null,
      imagePreview: blog.image ? `${blog.image}` : "",
    });

    setShowModal(true);
  };


  // ✅ Delete blog
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete Blog?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete",
    });
    if (!confirm.isConfirmed) return;

    try {
      const res = await axios.delete(`/api/blogs/${id}`);
      if (res.data.success) {
        Swal.fire("Deleted!", "Blog removed successfully", "success");
        fetchBlogs();
      }
    } catch (err) {
      Swal.fire("Error", "Failed to delete blog", "error");
    }
  };

  // ✅ View blog details
  const handleView = (blog) => {
    setViewBlog(blog);
    setViewModal(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Your Blogs</h2>
        <button
          onClick={() => {
            resetForm();
            setEditingBlog(null);
            setShowModal(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition flex items-center gap-2"
        >
          <PlusCircle size={20} strokeWidth={2} />
          Blog
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden border border-gray-200"
          >
            <img
              src={`${blog.image}`}
              alt={blog.title}
              className="h-40 w-full object-cover"
            />

            <div className="p-4 flex flex-col justify-between h-[200px]">
              <div>
                <h3 className="text-base font-semibold text-gray-900 hover:text-blue-600 truncate">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {blog.desc}
                </p>

                <div className="flex flex-wrap items-center text-xs text-gray-500 mt-2 gap-3">
                  <span className="flex items-center gap-1">
                    <User size={14} /> {blog.author || "Admin"}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />{" "}
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag size={14} /> {blog.category}
                  </span>
                  {/* Read Time */}
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {blog.readTime}
                  </span>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-3">
                <button
                  className="p-2 text-blue-500 border rounded hover:bg-blue-50"
                  title="View Blog"
                  onClick={() => handleView(blog)}
                >
                  <Eye size={16} />
                </button>
                <button
                  className="p-2 text-purple-500 border rounded hover:bg-purple-50"
                  title="Edit Blog"
                  onClick={() => handleEdit(blog)}
                >
                  <Edit3 size={16} />
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="p-2 text-red-500 border rounded hover:bg-red-50"
                  title="Delete Blog"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create / Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-[95%] max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-2xl text-gray-600"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">
              {editingBlog ? "Edit Blog" : "Create Blog"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Blog Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter blog title"
                    className="border p-2 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Author
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Enter author name"
                    className="border p-2 rounded"
                    required
                  />
                </div>

                {/* Image Upload */}
                <div className="flex flex-col col-span-2">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="border p-2 rounded"
                    {...(editingBlog ? {} : { required: true })}
                  />
                  {formData.imagePreview && (
                    <div className="mt-3">
                      <p className="text-xs text-gray-500 mb-1">
                        Image Preview:
                      </p>
                      <img
                        src={formData.imagePreview}
                        alt="Preview"
                        className="w-30 h-20 object-cover rounded border"
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                  >
                    <option value="">Select Category</option>
                    <option>SEO</option>
                    <option>Marketing</option>
                    <option>Web Designing</option>
                    <option>App Development</option>
                    <option>Graphic Designing</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Read Time
                  </label>
                  <input
                    type="text"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleChange}
                    placeholder="e.g. 5 min read"
                    className="border p-2 rounded"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="desc"
                  value={formData.desc}
                  onChange={handleChange}
                  placeholder="Enter full blog description..."
                  rows={4}
                  className="w-full border p-2 rounded"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-2 w-full"
              >
                {editingBlog ? "Update Blog" : "Create Blog"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* View Modal */}
      {viewModal && viewBlog && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-[95%] max-w-3xl p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setViewModal(false)}
              className="absolute top-3 right-4 text-2xl text-gray-600"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">{viewBlog.title}</h2>
            <img
              src={`${viewBlog.image}`}
              alt={viewBlog.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <div className="text-gray-600 text-sm mb-2">
              <span className="mr-4 flex items-center gap-1 inline-flex">
                <User size={14} /> {viewBlog.author}
              </span>
              <span className="mr-4 flex items-center gap-1 inline-flex">
                <Calendar size={14} />{" "}
                {new Date(viewBlog.createdAt).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1 inline-flex">
                <Tag size={14} /> {viewBlog.category}
              </span>

              <span className="flex items-center gap-1">
                <Clock size={14} />
                {viewBlog.readTime}
              </span>

            </div>
            <p className="text-gray-800 leading-relaxed">{viewBlog.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBlogManager;
