import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const posts = [
  {
    id: 1,
    title: "Solutions For Big Data Issue, Expert Perspective",
    desc: "If there's one way that wireless technology has changed the way we work, it's that will everyone is now connected [...]",
    category: "NEWS",
    date: "3 Days ago",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", // Replace with your own images if needed
  },
  {
    id: 2,
    title: "How To Become A Python Develop Expert",
    desc: "If there's one way that wireless technology has changed the way we work, it's that will everyone [...]",
    category: "NEWS",
    date: "12 Days ago",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "VR Game, Opportunity & Challenge",
    desc: "If there's one way that wireless technology has changed the way we work, it's that will everyone [...]",
    category: "NEWS",
    date: "12 Days ago",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
];

const popularPosts = [
  {
    id: 1,
    title: "Crypto Trend 2023",
    desc: "If there's one way that wireless technology has changed the way we work, it's that will everyone is now connected [...]",
    image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "AI With Fingerprint",
    desc: "If there's one way that wireless technology has changed the way we work, it's that will everyone is now connected [...]",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "NFT Game! New Opportunity",
    desc: "If there's one way that wireless technology has changed the way we work, it's that will everyone is now connected [...]",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=crop&w=400&q=80",
  },
];

const Blog = () => (
  <div className="bg-gray-50 min-h-screen">
          <Header />
    
    {/* <header className="py-6 bg-white shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-purple-200 p-2 rounded">
            <span className="font-bold text-lg text-purple-700">Iteck</span>
          </div>
          <span className="text-xs text-gray-500">TECH & IT SOLUTIONS</span>
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-purple-500">HOMES</a>
          <a href="#" className="text-gray-700 hover:text-purple-500">PAGES</a>
          <a href="#" className="text-gray-700 hover:text-purple-500">PORTFOLIO</a>
          <a href="#" className="text-gray-700 hover:text-purple-500">BLOG</a>
          <a href="#" className="text-gray-700 hover:text-purple-500">CONTACT</a>
        </nav>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-600">Join Iteck Hub</button>
      </div>
    </header> */}

    {/* Journal */}
    <section className="container mx-auto mt-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Our{" "}
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#623abc] via-[#cc64bc] to-[#f57e8a]">Journal</span></h1>
      <p className="text-gray-500 mt-2">Get the latest articles from our journal, writing, discuss and share</p>
    </section>

    {/* Featured Post */}
    <section className="container mx-auto mt-8">
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <img src={posts[0].image} alt={posts[0].title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8">
          <span className="text-white text-xs mb-2">{posts[0].category} • Posted on {posts[0].date}</span>
          <h2 className="text-2xl text-white font-bold">{posts[0].title}</h2>
          <p className="text-white mt-1 text-sm">{posts[0].desc}</p>
        </div>
      </div>
    </section>

    {/* Blog List */}
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
      {/* Left Column (Blog List) */}
      <div className="lg:col-span-2 flex flex-col space-y-8">
        {posts.slice(1).map((post) => (
          <div key={post.id} className="flex bg-white rounded-xl shadow p-4 space-x-4">
            <img src={post.image} alt={post.title} className="w-32 h-32 object-cover rounded-xl" />
            <div>
              <span className="text-purple-500 text-xs">{post.category} • {post.date}</span>
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-500 mt-1">{post.desc}</p>
              <div className="flex items-center mt-3 text-gray-400 text-xs">
                <span>By Admin</span>
                <span className="ml-3">24</span>
                <span className="ml-1">comments</span>
                <span className="ml-3">774k views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Right Column (Sidebar) */}
      <aside className="space-y-10">
        <div>
          <h4 className="text-lg font-semibold mb-2">SEARCH</h4>
          <input className="w-full px-3 py-2 border rounded focus:outline-none" placeholder="Type and hit enter" />
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">RECENT POST</h4>
          <ul className="space-y-3">
            {popularPosts.map((post) => (
              <li key={post.id} className="flex items-center space-x-2">
                <img src={post.image} alt={post.title} className="w-12 h-12 object-cover rounded" />
                <div>
                  <div className="text-sm font-semibold">{post.title}</div>
                  <div className="text-xs text-gray-400">{post.desc.slice(0, 35)}...</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>

    {/* Popular Posts */}
    <section className="container mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-6 text-center">POPULAR POSTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {popularPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <span className="text-purple-400 text-xs block mb-1">NEWS • Posted on 3 Days ago</span>
              <h3 className="font-bold text-lg">{post.title}</h3>
              <p className="text-gray-500 mt-1">{post.desc}</p>
              <div className="flex items-center mt-2 text-gray-400 text-xs">
                <span>By Admin</span>
                <span className="ml-3">24 comments</span>
                <span className="ml-3">774k views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <Footer />

  </div>
);

export default Blog;
