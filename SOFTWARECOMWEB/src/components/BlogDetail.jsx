import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowLeft, Clock, CalendarDays, Folder, User } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`http://localhost:5001/api/blogs/${id}`);
      setBlog(res.data.blog);
    } catch (error) {
      console.log("❌ Error fetching blog", error);
    }
  };

  if (!blog) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-10 max-w-4xl">
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-black-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        {/* IMAGE */}
        <img
          src={`http://localhost:5001${blog.image}`}
          alt={blog.title}
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] rounded-xl object-cover"
        />

        {/* META INFO WITH ICONS */}
        <div className="mt-6 text-sm text-gray-500 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* CATEGORY */}
          <span className="flex items-center gap-2">
            <Folder size={16} className="text-blue-600" />
            {blog.category}
          </span>

          {/* DATE */}
          <span className="flex items-center gap-2">
            <CalendarDays size={16} />
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>

          {/* READ TIME */}
          <span className="flex items-center gap-2">
            <Clock size={16} />
            {blog.readTime}
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-gray-800 mt-6">{blog.title}</h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mt-4 leading-relaxed whitespace-pre-line">
          {blog.desc}
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;
