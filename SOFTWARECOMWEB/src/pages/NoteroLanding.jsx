import React, { useState, useEffect } from "react";
import { motion, useAnimation, useViewportScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Scroll to section with smooth behavior
const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// Fade-in animation for sections triggering on scroll
const useScrollFadeIn = () => {
  const controls = useAnimation();
  useEffect(() => {
    const onScroll = () => {
      controls.start("visible");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);
  return controls;
};

const features = [
  { icon: "🛡️", title: "Robust Security" },
  { icon: "🔍", title: "Data Analytics" },
  { icon: "🤝", title: "Collaboration & Sharing", label: "new" },
  { icon: "⚡", title: "Fast Performance" },
  { icon: "☁️", title: "Cloud Integration" },
];

const projects = [
  {
    title: "AI-Powered Chatbot",
    desc: "AI-driven customer service automation.",
    img: "https://via.placeholder.com/400x250?text=AI+Chatbot",
  },
  {
    title: "E-commerce Platform",
    desc: "Scalable online shopping solutions.",
    img: "https://via.placeholder.com/400x250?text=Ecommerce",
  },
  {
    title: "Cybersecurity Audit",
    desc: "Enterprise vulnerability assessments.",
    img: "https://via.placeholder.com/400x250?text=Cybersecurity",
  },
  {
    title: "Mobile Banking App",
    desc: "Secure role-based financial management.",
    img: "https://via.placeholder.com/400x250?text=Mobile+Banking",
  },
];

const testimonials = [
  {
    user: "Jurgen K.",
    review:
      "Exceptional expertise that accelerated our digital transformation.",
    title: "Senior Marketing at Brator",
    avatar: "https://i.pravatar.cc/48?img=3",
  },
  {
    user: "Foden P.",
    review: "Reliable, innovative IT solutions for rapid growth.",
    title: "Director at Ecoland Resort",
    avatar: "https://i.pravatar.cc/48?img=5",
  },
  {
    user: "Kerry T.",
    review:
      "Proactive and professional team delivering beyond expectations.",
    title: "Designer at Teckzone Inc",
    avatar: "https://i.pravatar.cc/48?img=7",
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "Free",
    desc: "Startups and individuals",
    features: ["5 Projects", "Basic Security", "Community Support"],
  },
  {
    name: "Professional",
    price: "$49/month",
    desc: "For growing businesses",
    features: [
      "Unlimited Projects",
      "Advanced Analytics",
      "Priority Support",
      "Custom Integrations",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    desc: "Tailored enterprise solutions",
    features: [
      "Dedicated Support",
      "Compliance & SLA",
      "Custom Pricing",
    ],
  },
];

const AnimatedBlob = ({ style, animateProps }) => (
  <motion.div
    style={{
      borderRadius: "50%",
      filter: "blur(100px)",
      opacity: 0.6,
      position: "absolute",
      ...style,
    }}
    animate={animateProps}
    transition={{
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
  />
);

export default function ITCompanyPerfected() {
  const [dark, setDark] = useState(true);
  const fadeControls = useScrollFadeIn();

  // Sticky navbar background on scroll
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`relative min-h-screen font-sans transition-colors duration-700 ${
        dark ? "bg-gradient-to-tr from-purple-900 via-indigo-900 to-blue-900 text-white" : "bg-blue-50 text-gray-900"
      }`}
    >
      {/* Animated Background Blobs */}
      <AnimatedBlob
        style={{ width: 400, height: 400, top: 0, left: 0, background: "linear-gradient(135deg, #6B21A8, #3B82F6)" }}
        animateProps={{ y: ["0%", "15%", "0%"], x: ["0%", "-15%", "0%"] }}
      />
      <AnimatedBlob
        style={{ width: 300, height: 300, bottom: 20, right: 20, background: "linear-gradient(135deg, #EC4899, #8B5CF6)" }}
        animateProps={{ y: ["0%", "-20%", "0%"], rotate: [0, 360, 0] }}
      />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-30 px-6 py-4 max-w-7xl mx-auto flex items-center justify-between transition-colors duration-500 backdrop-blur-md ${
          scrolled
            ? dark
              ? "bg-gray-900 bg-opacity-90 shadow"
              : "bg-white bg-opacity-90 shadow"
            : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div
          className="text-2xl font-bold cursor-pointer select-none text-white tracking-wide"
          aria-label="Homepage"
          tabIndex={0}
        >
          Iteck Co.
        </div>
        <ul className="hidden md:flex gap-8 text-sm uppercase font-semibold text-white">
          {["features", "projects", "screenshots", "pricing", "testimonials", "contact"].map((section) => (
            <li key={section}>
              <button
                className="hover:text-pink-400 focus:outline-none focus:text-pink-400 transition"
                onClick={() => scrollToId(section)}
                aria-label={`Navigate to ${section}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setDark((d) => !d)}
          className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700 transition"
          aria-label="Toggle dark mode"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 text-center max-w-4xl mx-auto px-4 relative z-10" aria-label="Hero section">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
            Empower Your Business with Cutting-Edge IT Solutions
          </h1>
          <p className="text-xl mb-8 text-purple-300 leading-relaxed">
            Custom-tailored technology services that drive innovation, security, and growth. From AI to mobile apps,
            Iteck Co. delivers expertise with passion.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-xl hover:scale-105 transform transition-transform"
          >
            Get Started
          </a>
        </motion.div>
      </header>

      {/* Features Section */}
      <motion.section
        id="features"
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12"
        initial="hidden"
        animate={fadeControls}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
        }}
        aria-label="Features section"
      >
        {features.map(({ icon, title, label }, idx) => (
          <motion.div
            key={idx}
            className="glassmorph p-8 rounded-3xl cursor-pointer relative flex flex-col items-center text-center shadow-lg"
            whileHover={{ scale: 1.05, y: -5, boxShadow: "0 15px 30px rgba(236, 72, 153, 0.5)" }}
            tabIndex={0}
            role="article"
            aria-label={title}
          >
            <div className="text-7xl mb-5 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">{icon}</div>
            {label && (
              <span className="absolute top-4 right-6 bg-green-500 text-xs px-3 py-1 rounded-full text-white animate-pulse shadow-lg">
                {label.toUpperCase()}
              </span>
            )}
            <h3 className="text-2xl font-semibold">{title}</h3>
          </motion.div>
        ))}
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="bg-gray-900 bg-opacity-70 dark:bg-transparent py-16 px-6 max-w-7xl mx-auto rounded-lg backdrop-blur-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={fadeControls}
        aria-label="Projects section"
      >
        <h2 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          Latest Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map(({ title, desc, img }, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer glassmorph border border-white/20"
              whileHover={{ scale: 1.07, boxShadow: "0 20px 35px rgba(236, 72, 153, 0.6)" }}
              tabIndex={0}
              role="article"
              aria-label={`Project: ${title}`}
            >
              <img
                src={img}
                alt={title}
                className="w-full h-56 object-cover transition-transform duration-500 transform hover:scale-110"
                loading="lazy"
              />
              <div className="p-6 bg-gradient-to-t from-black/70 to-transparent absolute bottom-0 w-full text-white">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm">{desc}</p>
              </div>
              <div
                className="absolute inset-0 bg-pink-600 bg-opacity-80 opacity-0 hover:opacity-100 flex items-center justify-center text-xl font-bold transition-opacity text-white"
                aria-hidden="true"
              >
                View Details
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Screenshots Carousel */}
      <motion.section
        id="screenshots"
        className="max-w-7xl mx-auto px-6 py-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={fadeControls}
        aria-label="Screenshots section"
      >
        <h2 className="text-4xl font-bold mb-10 text-white">
          App <span className="underline decoration-pink-400">Screenshots</span>
        </h2>
        <Swiper spaceBetween={24} slidesPerView={3} centeredSlides loop>
          {[1, 2, 3, 4, 5].map((n) => (
            <SwiperSlide key={n}>
              <motion.img
                src={`https://via.placeholder.com/220x440?text=Screen+${n}`}
                alt={`Screenshot ${n}`}
                className="rounded-xl shadow-lg mx-auto border-2 border-pink-400"
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-tr from-pink-700 via-purple-700 to-blue-700 rounded-3xl text-white text-center shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={fadeControls}
        aria-label="Testimonials section"
      >
        <h2 className="text-4xl font-bold mb-10">
          What Our <span className="underline decoration-yellow-300">Clients Say</span>
        </h2>
        <Swiper spaceBetween={32} slidesPerView={1} loop>
          {testimonials.map(({ user, review, title, avatar }, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl mx-auto px-6"
                role="blockquote"
                aria-label={`Testimonial by ${user}`}
              >
                <blockquote className="italic text-lg mb-6">"{review}"</blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={avatar}
                    alt={`Photo of ${user}`}
                    className="rounded-full border-4 border-yellow-300 w-12 h-12 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-xl">{user}</p>
                    <p className="text-yellow-300">{title}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        className="max-w-7xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={fadeControls}
        aria-label="Pricing section"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Choose Your <span className="text-pink-400">Plan</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map(({ name, price, desc, features, highlight }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.07, boxShadow: "0 15px 40px rgba(236, 72, 153, 0.5)" }}
              className={`bg-white dark:bg-gray-800 rounded-xl p-10 shadow-md flex flex-col ${
                highlight ? "border-4 border-pink-600" : ""
              }`}
              role="region"
              aria-labelledby={`plan-title-${idx}`}
            >
              <h3 id={`plan-title-${idx}`} className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                {name}
              </h3>
              <p className="mb-4 text-pink-600 font-semibold text-2xl">{price}</p>
              <p className="mb-6 text-gray-700 dark:text-gray-300">{desc}</p>
              <ul className="mb-8 space-y-3 flex-1 text-gray-600 dark:text-gray-300">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-pink-600" aria-hidden="true">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-4 rounded font-semibold text-white shadow-lg ${
                  highlight ? "bg-pink-600 hover:bg-pink-700" : "bg-gray-700 hover:bg-gray-800"
                } transition`}
                role="button"
                tabIndex={0}
              >
                {highlight ? "Get Started" : "Select Plan"}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-r from-pink-700 via-purple-800 to-indigo-900 text-white py-20 px-6 text-center rounded-3xl max-w-4xl mx-auto shadow-lg"
        aria-label="Contact section"
      >
        <h2 className="text-5xl font-extrabold mb-8">Ready to Transform Your Business?</h2>
        <p className="mb-12 max-w-xl mx-auto text-xl leading-relaxed">
          Contact our experts to build innovative IT solutions tailored just for your company.
        </p>
        <a
          href="mailto:contact@iteckco.com"
          className="bg-yellow-400 text-indigo-900 px-10 py-5 font-bold rounded-full hover:bg-yellow-300 shadow-xl transition"
          aria-label="Send email to contact Iteck Co."
        >
          Get In Touch
        </a>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-6 bg-gray-900 text-gray-400 max-w-7xl mx-auto mt-20 rounded-t-lg"
        aria-label="Footer"
      >
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto text-sm">
          <p>© 2022 Iteck Co. All rights reserved.</p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>

      {/* Glassmorphism background style */}
      <style jsx>{`
        .glassmorph {
          background: rgba(255 255 255 / 0.05);
          backdrop-filter: blur(14px);
          border-radius: 2rem;
          border: 1px solid rgba(255 255 255 / 0.2);
          color: white;
          user-select: none;
        }
        /* Gradient text helper */
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
      `}</style>
    </div>
  );
}
