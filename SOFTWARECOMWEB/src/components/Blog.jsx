import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Digimark from "../assets/digimark.png"
import Website from "../assets/websiteimg.png"
import Seo from "../assets/seoimg.png"
import seoImg from "../assets/seoimg.png";
import marketingImg from "../assets/digimark.png";
import webdesignImg from "../assets/websiteimg.png";
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
    title: "Boost Your Online Presence with Smart SEO Strategies",
    desc: "Learn how advanced SEO practices can help your business rank higher on Google, attract quality traffic, and build long-term online visibility.",
    category: "SEO",
    date: "3 Days ago",
    image: seoImg,
  },
  {
    id: 2,
    title: "Effective Digital Marketing Techniques for Business Growth",
    desc: "Explore data-driven digital marketing methods that enhance brand awareness, boost conversions, and strengthen your customer engagement.",
    category: "MARKETING",
    date: "7 Days ago",
    image: marketingImg,
  },
  {
    id: 3,
    title: "Modern Web Designing Trends for 2025",
    desc: "Discover the latest web design principles and UI/UX trends that make your website visually stunning, fast, and user-friendly.",
    category: "WEB DESIGNING",
    date: "10 Days ago",
    image: webdesignImg,
  },
];

const popularPosts = [
  {
    id: 1,
    title: "Boost Your Business with Digital Marketing Strategies",
    desc: "Learn how digital marketing can transform your brand’s visibility and help you connect with the right audience for higher engagement and conversions.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=400&q=80", // digital marketing
  },
  {
    id: 2,
    title: "Master SEO: Rank Higher and Drive Organic Traffic",
    desc: "SEO is the key to online growth. Discover proven techniques to improve your website’s ranking, visibility, and authority on search engines.",
    image:
      "https://artattackk.com/blogs/wp-content/uploads/2024/04/welcome.gif", // SEO
  },
  {
    id: 3,
    title: "Building Modern Websites that Convert Visitors into Clients",
    desc: "A great website is more than design—it’s strategy, performance, and user experience. Learn how to create responsive, fast, and conversion-driven websites.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80", // web development
  },
];


const blogListData = [
  {
    id: 1,
    title: "What is Digital Marketing ?",
    desc: "In today’s interconnected world, businesses are constantly looking for innovative ways to reach their audiences. Digital marketing has emerged as a powerful and essential strategy…",
    category: "Marketing",
    date: "1 Day ago",
    image: Digimark
      
  },
  {
    id: 2,
    title: "Importance of a Website in a Business",
    desc: " First Impressions MatterA website is often the first interaction a customer has with your business. A professional, well-designed website creates a positive first impression,…",
    category: "Development",
    date: "5 Days ago",
    image: Website,
      
  },
  {
  id: 3,
  title: "Mastering SEO Strategies for Business Growth",
  desc: "Discover proven SEO techniques to boost your website visibility, improve Google rankings, and drive more organic traffic to your business effectively.",
  category: "SEO",
  date: "8 Days ago",
  image: Seo
    ,
},


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
          className="w-full h-[260px] sm:h-[350px] md:h-[480px] object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8">
          <div className="text-xs sm:text-sm text-gray-300 mb-2 flex items-center gap-2 flex-wrap">
            <span className="uppercase tracking-wide">{posts[current].category}</span>
            <span>•</span>
            <span>Posted on {posts[current].date}</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2 leading-snug">
            {posts[current].title}
          </h2>
          <p className="text-gray-200 text-xs sm:text-sm md:text-base max-w-2xl">
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
    { name: "SEO", count: 38 },
    { name: "MARKETING", count: 16 },
    { name: "WEB DESIGNING", count: 85 },
    { name: "APP DEVELOPMENT", count: 21 },
    { name: "GRAPHIC DESIGNING", count: 874 },

  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <section className="container mx-auto mt-8 text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3488fa] to-black/70 ">
            Journal
          </span>
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Get the latest articles from our journal, writing, discuss and share
        </p>
      </section>

      <FeaturedPost posts={posts} />

      {/* Blog List + Sidebar */}
      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 px-4">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col space-y-8">
          {blogListData.map((post) => (
            <div
              key={post.id}
              className="flex flex-col sm:flex-row bg-white rounded-xl p-4 space-x-0 sm:space-x-5 border-b border-gray-200 pb-6 hover:shadow-md transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full sm:w-60 h-40 sm:h-44 object-cover rounded-xl mb-3 sm:mb-0"
              />
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 mb-1">
                    <span className="text-blue-600 font-semibold uppercase tracking-wide text-xs">
                      {post.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center text-xs text-gray-500">
                      <i className="far fa-clock mr-1"></i> {post.date}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 hover:text-blue-600 cursor-pointer">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {post.desc.length > 90
                      ? `${post.desc.slice(0, 90)} [...]`
                      : post.desc}
                  </p>
                </div>

                <div className="flex items-center text-xs text-gray-500 mt-3 space-x-5">
                  <div className="flex items-center space-x-1">
                    <div className="w-5 h-5 flex items-center justify-center bg-[#6c4bdb]/10 text-black rounded-full text-[10px]">
                      A
                    </div>
                    <span> BinaryLogix </span>
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
          <div className="bg-[#f4f7ff] rounded-2xl p-8 shadow-md w-full max-w-md mx-auto">
            <h4 className="text-lg font-semibold mb-2 uppercase tracking-wider text-center">
              Newsletter
            </h4>
            <p className="text-sm text-gray-600 mb-5 text-center">
              Register now to get the latest updates on promotions & coupons.
            </p>
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-[85%]">
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
              <button className="w-[50%] bg-gradient-to-r from-[#3488fa] to-black/70 text-white py-2 rounded-xl transition hover:opacity-90">
                Subscribe
              </button>
            </div>
          </div>


          {/* Social */}
          {/* <div>
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
          </div> */}

          {/* Instagram */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-3 uppercase tracking-wider">
              Our Instagram
            </h4>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-3">
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
                  className="w-full h-20 object-cover rounded-lg hover:opacity-80 transition"
                />
              ))}
            </div>
          </div> */}

          {/* Popular Tags */}
          <div>
            <h4 className="text-lg font-semibold mb-3 uppercase tracking-wider">
              Popular Tags
            </h4>
            <div className="flex flex-wrap mb-6 gap-2">
              {[
                "WordPress",
                "Graphic Designing",
                "Figma",
                "Technology",
                "Marketing",
                "Consultation",
                "Seo",
                "Website Development",
                
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
