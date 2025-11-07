import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, Trash2, Edit3, Eye, Clock, Calendar, User, Tag } from "lucide-react";
import Swal from "sweetalert2";

const AdminBlogManager = () => {
    const [blogs, setBlogs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        desc: "",             // ✅ renamed
        author: "",
        category: "Other",
        readTime: "5 min read",
        image: null,
    });


    // ✅ Fetch blogs
    const fetchBlogs = async () => {
        try {
            const res = await axios.get("http://localhost:5001/api/blogs");
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

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    };

    // ✅ Create Blog
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();

        // Only append the fields needed for backend
        for (const key in formData) {
            if (key !== "imagePreview") {
                data.append(key, formData[key]);
            }
        }


        try {
            const res = await axios.post("http://localhost:5001/api/blogs", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            if (res.data.success) {
                Swal.fire("Success", "Blog Created Successfully!", "success");
                setShowModal(false);
                fetchBlogs();
                setFormData({
                    title: "",
                    highlight: "",
                    author: "",
                    category: "Other",
                    readTime: "5 min read",
                    content: "",
                    image: null,
                });
            }
        } catch (err) {
            Swal.fire("Error", err.response?.data?.message || "Something went wrong", "error");
        }
    };

    // ✅ Delete Blog
    const deleteBlog = async (id) => {
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

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Your Blogs</h2>
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
                >
                    + Blog
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
                            src={`http://localhost:5001${blog.image}`}
                            alt={blog.title}
                            className="h-40 w-full object-cover" // reduced height
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
                                </div>
                            </div>

                            <div className="flex justify-end space-x-3 mt-3">
                                <button
                                    className="p-2 text-blue-500 border rounded hover:bg-blue-50"
                                    title="View Blog"
                                >
                                    <Eye size={16} />
                                </button>
                                <button
                                    className="p-2 text-purple-500 border rounded hover:bg-purple-50"
                                    title="Edit Blog"
                                >
                                    <Edit3 size={16} />
                                </button>
                                <button
                                    onClick={() => deleteBlog(blog._id)}
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


            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg w-[95%] max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-4 text-2xl text-gray-600"
                        >
                            ×
                        </button>
                        <h2 className="text-xl font-bold mb-4">Create Blog</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Top Fields */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-gray-700 mb-1">Blog Title</label>
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
                                    <label className="text-sm font-medium text-gray-700 mb-1">Highlight</label>
                                    <input
                                        type="text"
                                        name="highlight"
                                        value={formData.highlight}
                                        onChange={handleChange}
                                        placeholder="Short highlight"
                                        className="border p-2 rounded"
                                        required
                                    />
                                </div>

                                {/* Image Upload with Preview */}
                                <div className="flex flex-col col-span-2">
                                    <label className="text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                                    <input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        onChange={(e) => {
                                            handleFileChange(e);
                                            if (e.target.files && e.target.files[0]) {
                                                const reader = new FileReader();
                                                reader.onload = () => {
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        imagePreview: reader.result,
                                                    }));
                                                };
                                                reader.readAsDataURL(e.target.files[0]);
                                            }
                                        }}
                                        className="border p-2 rounded"
                                        required
                                    />
                                    {formData.imagePreview && (
                                        <div className="mt-3">
                                            <p className="text-xs text-gray-500 mb-1">Image Preview:</p>
                                            <img
                                                src={formData.imagePreview}
                                                alt="Preview"
                                                className="w-30 h-20 object-cover rounded border"
                                            />
                                        </div>
                                    )}
                                </div>


                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-gray-700 mb-1">Author Name</label>
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

                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-gray-700 mb-1">Category</label>
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

                                <div className="flex flex-col col-span-2">
                                    <label className="text-sm font-medium text-gray-700 mb-1">Read Time</label>
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

                            {/* Description */}
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700 mb-1">Description</label>
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

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-2 w-full"
                            >
                                Create Blog
                            </button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AdminBlogManager;
