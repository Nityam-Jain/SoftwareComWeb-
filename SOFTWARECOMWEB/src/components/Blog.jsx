import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Search,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Globe,
} from "lucide-react";

const socialIcons = [
  { name: "Twitter (X)", icon: <Twitter size={18} /> },
  { name: "Instagram", icon: <Instagram size={18} /> },
  { name: "Facebook", icon: <Facebook size={18} /> },
  { name: "Pinterest", icon: <Globe size={18} /> },
  { name: "Google", icon: <Globe size={18} /> },
  { name: "LinkedIn", icon: <Linkedin size={18} /> },
];
const posts = [
  {
    id: 1,
    title: "Solutions For Big Data Issue, Expert Perspective",
    desc: "If there's one way that wireless technology has changed the way we work, it's that everyone is now connected [...]",
    category: "NEWS",
    date: "3 Days ago",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "How To Become A Python Develop Expert",
    desc: "If there's one way that wireless technology has changed the way we work, it's that everyone [...]",
    category: "NEWS",
    date: "12 Days ago",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "VR Game, Opportunity & Challenge",
    desc: "If there's one way that wireless technology has changed the way we work, it's that everyone [...]",
    category: "NEWS",
    date: "12 Days ago",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
];

const popularPosts = [
  {
    id: 1,
    title: "Crypto Trend 2023",
    desc: "If there's one way that wireless technology has changed the way we work, it's that everyone is now connected [...]",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "AI With Fingerprint",
    desc: "If there's one way that wireless technology has changed the way we work, it's that everyone is now connected [...]",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "NFT Game! New Opportunity",
    desc: "If there's one way that wireless technology has changed the way we work, it's that everyone is now connected [...]",
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=crop&w=400&q=80",
  },
];

const blogListData = [
  {
    id: 1,
    title: "Top 10 Web Development Trends in 2025",
    desc: "Explore the latest frameworks, design approaches, and performance optimization techniques shaping the future of web development.",
    category: "TECH",
    date: "1 Day ago",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "The Future of Cloud Computing in 2025",
    desc: "Cloud technology is evolving rapidly — learn how edge computing and AI-driven infrastructure are redefining scalability.",
    category: "CLOUD",
    date: "5 Days ago",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Mastering React Hooks for Efficient Development",
    desc: "React Hooks have transformed the way we write components. Learn how to use useEffect and useMemo effectively in production apps.",
    category: "REACT",
    date: "8 Days ago",
    image:
      "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Cybersecurity Best Practices for Modern Startups",
    desc: "Security isn't optional. Here are practical ways to protect your app and data from modern cyber threats.",
    category: "SECURITY",
    date: "10 Days ago",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "How AI is Changing Digital Marketing",
    desc: "Artificial Intelligence is revolutionizing digital marketing — from predictive analytics to smart ad targeting.",
    category: "AI",
    date: "15 Days ago",
    image:
      "https://eu-images.contentstack.com/v3/assets/blt6d90778a997de1cd/blt41dc5f14d8586e1e/675fd155828566e310714e06/genai_Anggalih_Prasetya_shutterstock.jpg",
  },

  {
    id: 6,
    title: "Wireframe For UI/UX",
    desc: "If there’s one way that wireless technology has changed the way we work, it’s that will everyone [...].",
    category: "TIPS AND TRICKS",
    date: "15 Days ago",
    image:
      "http://iteck_vuenuxt.themescamp.com/assets/img/blog/3.jpeg",
  },

  // {
  //   id: 7,
  //   title: "How AI is Changing Digital Marketing",
  //   desc: "Artificial Intelligence is revolutionizing digital marketing — from predictive analytics to smart ad targeting.",
  //   category: "AI",
  //   date: "15 Days ago",
  //   image:
  //     "https://images.unsplash.com/photo-1677444204458-23c28cc8b47d?auto=format&fit=crop&w=800&q=80",
  // },
];

const FeaturedPost = ({ posts }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % posts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [posts.length]);

  return (
    <section className="container mx-auto mt-10 px-4">
      <div className="relative rounded-3xl overflow-hidden shadow-lg">
        <img
          src={posts[current].image}
          alt={posts[current].title}
          className="w-full h-[480px] object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
          <div className="text-sm text-gray-300 mb-2 flex items-center gap-2">
            <span className="uppercase tracking-wide">{posts[current].category}</span>
            <span>•</span>
            <span>Posted on {posts[current].date}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-snug">
            {posts[current].title}
          </h2>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl">
            {posts[current].desc}
          </p>
        </div>
        <div className="absolute bottom-5 right-6 flex gap-2">
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === current ? "bg-white" : "bg-gray-400"
                }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const categories = [
    { name: "ALL", count: 265 },
    { name: "NEWS", count: 38 },
    { name: "TECHNOLOGY", count: 16 },
    { name: "TIPS & TRICKS", count: 85 },
    { name: "CAREER", count: 21 },
    { name: "COMMUNITY", count: 874 },
    { name: "VIDEOS", count: 54 },
    { name: "OTHERS", count: 85 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <section className="container mx-auto mt-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#623abc] via-[#cc64bc] to-[#f57e8a]">
            Journal
          </span>
        </h1>
        <p className="text-gray-500 mt-2">
          Get the latest articles from our journal, writing, discuss and share
        </p>
      </section>

      <FeaturedPost posts={posts} />

      {/* Blog List + Sidebar */}
      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col space-y-8">
          {blogListData.map((post) => (
            <div
              key={post.id}
              className="flex flex-col sm:flex-row bg-white rounded-xl p-4 space-x-0 sm:space-x-5 border-b border-gray-200 pb-6 hover:shadow-md transition-all duration-300"
            >
              {/* Post Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full sm:w-60 h-40 object-cover rounded-xl mb-3 sm:mb-0"
              />

              {/* Post Content */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                    <span className="text-[#6c4bdb] font-semibold uppercase tracking-wide text-xs">
                      {post.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center text-xs text-gray-500">
                      <i className="far fa-clock mr-1"></i> {post.date}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-[#6c4bdb] cursor-pointer">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {post.desc.length > 90 ? `${post.desc.slice(0, 90)} [...]` : post.desc}
                  </p>
                </div>

                {/* Bottom Meta Info */}
                <div className="flex items-center text-xs text-gray-500 mt-3 space-x-5">
                  <div className="flex items-center space-x-1">
                    <div className="w-5 h-5 flex items-center justify-center bg-[#6c4bdb]/10 text-[#6c4bdb] rounded-full text-[10px]">
                      A
                    </div>
                    <span>By Admin</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="far fa-comment"></i>
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="far fa-eye"></i>
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Right Sidebar */}
        <aside className="space-y-10">
          {/* Search */}
          <div>
            <h4 className="text-lg font-semibold mb-2">SEARCH</h4>
            <div className="relative w-full">
              <input
                className="w-full px-3 py-2 pr-10 rounded-2xl border border-gray-300 focus:outline-none"
                placeholder="Type and hit enter"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-black" size={20} />
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="text-lg font-semibold mb-2">RECENT POSTS</h4>
            <ul className="space-y-6">
              {popularPosts.map((post) => (
                <li
                  key={post.id}
                  className="flex items-center space-x-2 border-b border-gray-200 pb-2"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <div className="text-sm font-semibold">{post.title}</div>
                    <div className="text-xs text-gray-400">
                      {post.desc.slice(0, 35)}...
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-3 uppercase tracking-wider">
              Categories
            </h4>
            <ul className="border-t border-gray-200">
              {categories.map((cat) => (
                <li
                  key={cat.name}
                  className="flex justify-between text-sm border-b border-gray-200 py-2"
                >
                  <span className="text-gray-700 hover:text-[#9355dc] cursor-pointer">
                    {cat.name}
                  </span>
                  <span className="text-gray-500">{cat.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-[#f4f7ff] rounded-2xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold mb-1 uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Register now to get latest updates on promotions & coupons.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-3 py-2 rounded-xl border border-gray-300 focus:outline-none"
                />
              </div>
              <button className="w-full bg-[#6c4bdb] hover:bg-[#5a3ec5] text-white py-2 rounded-xl transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-3 uppercase tracking-wider">
              Social
            </h4>
            <div className="flex gap-3 flex-wrap">
              {socialIcons.map((item, index) => (
                <div
                  key={index}
                  title={item.name}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6c4bdb] hover:text-white transition cursor-pointer"
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Instagram */}
          <div>
            <h4 className="text-lg font-semibold mb-3 uppercase tracking-wider">
              Our Instagram
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {[
                "https://images.unsplash.com/photo-1611606063065-7c06b48d91a7?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1621839673705-6617adf9ce1e?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="instagram"
                  className="w-20 h-20 object-cover rounded-lg hover:opacity-80 transition"
                />
              ))}
            </div>
          </div>

          {/* Popular Tags */}
          <div>
            <h4 className="text-lg font-semibold mb-3 uppercase tracking-wider">
              Popular Tags
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "WordPress",
                "PHP",
                "HTML/CSS",
                "Figma",
                "Technology",
                "Marketing",
                "Consultation",
                "Seo",
                "Envato",
                "Psd",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-[#6c4bdb] hover:text-white cursor-pointer transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
