import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Search, User, Calendar, Tag, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturedPost = ({ posts }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!posts.length) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % posts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [posts.length]);

  if (!posts.length) return null;

  return (
    <section className="container max-w-6xl mx-auto mt-10 px-4">
      <div className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer">
        <img
          src={`http://localhost:5001${posts[current].image}`}
          alt={posts[current].title}
          className="w-full h-[220px] sm:h-[350px] md:h-[480px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">

          <div className="text-xs text-gray-300 mb-2 flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1 uppercase tracking-wide">
              <Tag size={14} /> {posts[current].category}
            </span>

            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(posts[current].createdAt).toLocaleDateString()}
            </span>

            <span className="flex items-center gap-1">
              <Clock size={14} />
              {posts[current].readTime}
            </span>

            <span className="flex items-center gap-1">
              <User size={14} />
              {posts[current].author}
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            {posts[current].title}
          </h2>

          <p className="text-gray-200 text-sm md:text-base">
            {posts[current].desc?.slice(0, 140)}...
          </p>
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2">
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full ${index === current ? "bg-white" : "bg-gray-400"
                }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/blogs");
      setBlogs(res.data.blogs || []);
    } catch (error) {
      console.log("❌ Error fetching blogs", error);
    }
  };

  // 🔍 FILTERED BLOGS (TITLE + CATEGORY + DESCRIPTION)
  const filteredBlogs = blogs.filter((blog) => {
    const q = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(q) ||
      blog.category.toLowerCase().includes(q) ||
      blog.desc.toLowerCase().includes(q)
    );
  });

  const categories = [
    { name: "ALL", count: blogs.length },
    { name: "SEO", count: blogs.filter((b) => b.category === "SEO").length },
    { name: "MARKETING", count: blogs.filter((b) => b.category === "Marketing").length },
    { name: "WEB DESIGNING", count: blogs.filter((b) => b.category === "Web Designing").length },
    { name: "APP DEVELOPMENT", count: blogs.filter((b) => b.category === "App Development").length },
    { name: "GRAPHIC DESIGNING", count: blogs.filter((b) => b.category === "Graphic Designing").length },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <section className="container mx-auto mt-8 text-center px-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3488fa] to-black/70">
            Journal
          </span>
        </h1>
        <p className="text-gray-500 mt-2">
          Get the latest articles from our journal, writing, discuss and share
        </p>
      </section>

      <FeaturedPost posts={blogs} />

      {/* Blog List + Sidebar */}
      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12 px-6 pb-20">

        {/* LEFT SIDE → BLOGS */}
        <div className="lg:col-span-2 flex flex-col space-y-8">
          {(filteredBlogs.length === 0 && searchQuery.trim() !== "") && (
            <p className="text-gray-500 text-sm">No matching blogs found.</p>
          )}

          {filteredBlogs.map((post) => (
            <div
              key={post._id}
              onClick={() => navigate(`/blog/${post._id}`)}
              className="flex flex-col sm:flex-row bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md duration-300 cursor-pointer"
            >
              <img
                src={`http://localhost:5001${post.image}`}
                className="w-full sm:w-56 h-44 object-cover rounded-xl"
                alt={post.title}
              />

              <div className="flex flex-col justify-between flex-1 sm:ml-4">

                <div>
                  <div className="flex items-center text-xs text-gray-500 mb-2 gap-4">

                    <span className="flex items-center gap-1 text-blue-600 font-semibold uppercase">
                      <Tag size={14} />
                      {post.category}
                    </span>

                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>

                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>

                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    {post.desc?.slice(0, 110)}...
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE → SIDEBAR */}
        <aside className="space-y-10">

          <div className="relative">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for blogs..."
              className="w-full px-4 py-3 pr-10 border rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-400"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2" size={20} />

            {/* SEARCH RESULT DROPDOWN */}
            {searchQuery.trim() !== "" && filteredBlogs.length > 0 && (
              <div className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-xl max-h-80 overflow-y-auto border">
                {filteredBlogs.map((item) => (
                  <div
                    key={item._id}
                    onClick={() => navigate(`/blog/${item._id}`)}
                    className="flex gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b"
                  >
                    <img
                      src={`http://localhost:5001${item.image}`}
                      className="w-14 h-14 object-cover rounded-md shadow-sm"
                      alt={item.title}
                    />

                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500">{item.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* NO RESULTS */}
            {searchQuery.trim() !== "" && filteredBlogs.length === 0 && (
              <div className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-xl p-4 text-gray-500 text-sm border">
                No matching blogs found.
              </div>
            )}
          </div>


          {/* CATEGORIES */}
          <div>
            <h4 className="text-lg font-semibold mb-3 uppercase">Categories</h4>
            <ul className="border-t border-gray-200">
              {categories.map((c) => (
                <li
                  key={c.name}
                  className="flex justify-between text-sm border-b py-2 cursor-pointer hover:text-blue-600"
                  onClick={() => setSearchQuery(c.name !== "ALL" ? c.name : "")}
                >
                  <span>{c.name}</span>
                  <span>{c.count}</span>
                </li>
              ))}
            </ul>
          </div>

        </aside>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
