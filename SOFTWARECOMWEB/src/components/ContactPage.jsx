import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import atIcon from "../assets/Aticon.png";
import envelopeIcon from "../assets/envicon.png";
import envelopeimg from "../assets/Envelope.png";
import location from "../assets/location.png";
import message from "../assets/message.png";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // ✅ Restrict input to numeric and 10 digits only
  const handlePhoneInput = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    e.target.value = value.slice(0, 10);
    handleChange(e); // keep synced with form data
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5001/contact", formData);
      alert(response.data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* ===== TOP SECTION ===== */}
        <section className="bg-white rounded-b-3xl shadow-sm pb-8 pt-12 md:pt-20 lg:pt-20">
          <div className="max-w-3xl mx-auto text-center space-y-1 px-4">
            <span className="inline-block bg-[#efe6fb] text-[#3488fa] px-4 py-1 rounded-lg mb-3 text-xs font-semibold tracking-wider">
              Contact us
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3488fa] to-black/70 font-bold">
                Touch
              </span>
            </h1>
            <p className="text-base md:text-sm mt-6 text-gray-600">
              We’ll reach out within 24 hours after receiving your request.
            </p>
          </div>

          {/* ===== CONTACT INFO SECTION ===== */}
          <div className="mx-auto max-w-6xl mt-12 flex flex-col md:flex-wrap md:flex-row items-start md:items-center justify-start md:justify-center bg-white rounded-2xl shadow-md px-6 py-6 gap-6 md:gap-10 text-left">
            {/* Email */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-start md:justify-start">
              <img
                src={envelopeimg}
                alt="Email"
                className="h-9 w-9 md:h-10 md:w-10 object-contain drop-shadow-[0_0_6px_rgba(52,135,250,0.3)] animate-zoom"
              />
              <p className="text-sm md:text-base text-gray-800 break-words">
                binarylogixofficial@gmail.com
              </p>
            </div>

            <div className="hidden md:block h-6 w-px bg-gray-200"></div>

            {/* Location */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-start md:justify-start">
              <img
                src={location}
                alt="Location"
                className="h-8 w-8 object-contain drop-shadow-[0_0_6px_rgba(52,135,250,0.3)] animate-zoom"
              />
              <p className="text-sm md:text-base text-gray-800 break-words max-w-[260px] sm:max-w-none">
                11-Himanshu Apartment, Indrapuri, Bhopal 462022
              </p>
            </div>

            <div className="hidden md:block h-6 w-px bg-gray-200"></div>

            {/* Phone */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-start md:justify-start">
              <img
                src={message}
                alt="Phone"
                className="h-8 w-8 object-contain drop-shadow-[0_0_6px_rgba(52,135,250,0.3)] animate-zoom"
              />
              <p className="text-sm md:text-base text-gray-800">
                +91 9617189757
              </p>
            </div>
          </div>

          {/* ===== FORM SECTION ===== */}
          <section className="relative flex justify-center bg-white px-4 overflow-hidden">
            <div className="absolute bottom-8 left-4 sm:bottom-12 sm:left-12 md:-bottom-6 md:left-5 lg:-bottom-10 lg:left-57 z-20 animate-float">
              <img
                src={atIcon}
                alt="At symbol"
                className="w-14 sm:w-20 md:w-28 lg:w-38 opacity-90 hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="absolute top-2 -right-4 sm:top-24 sm:right-10 md:-top-4 md:-right-6 lg:top-5 lg:right-32 z-20 animate-float">
              <img
                src={envelopeIcon}
                alt="Envelope"
                className="h-24 w-25 sm:w-24 md:w-48 md:h-53 lg:w-66 opacity-100 drop-shadow-lg"
              />
            </div>

            <div className="relative bg-gradient-animate rounded-[30px] shadow-xl max-w-4xl w-full p-6 sm:p-8 md:p-10 z-10 border-t-8 border-[#3487fa] h-[545px] md:h-auto">
              <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-[700px]">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="rounded-full border bg-white border-gray-300 px-5 py-3 w-full text-sm focus:outline-none focus:ring-1 focus:ring-[#3487fa]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    className="rounded-full border border-gray-300 bg-white px-5 py-3 w-full text-sm focus:outline-none focus:ring-1 focus:ring-[#3487fa]"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onInput={handlePhoneInput}
                    onChange={handleChange}
                    placeholder="Phone Number (10 digits)"
                    className="rounded-full border border-gray-300 bg-white px-5 py-3 w-full text-sm focus:outline-none focus:ring-1 focus:ring-[#3487fa]"
                    maxLength="10"
                    required
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="rounded-full border border-gray-300 bg-white px-5 py-3 w-full text-sm focus:outline-none focus:ring-1 focus:ring-[#3487fa]"
                    required
                  >
                    <option value="" disabled>
                      Select Service
                    </option>
                    <option value="seo">SEO Strategy</option>
                    <option value="google_fb_ads">Google & Facebook Ads</option>
                    <option value="email_marketing">Email Marketing</option>
                    <option value="social_media">Social Media</option>
                    <option value="website_design">Website Design & Development</option>
                    <option value="app_development">App Development</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="How can we help you?"
                  className="rounded-3xl border border-gray-300 px-5 py-3 w-full max-w-[700px] text-sm focus:outline-none focus:ring-1 bg-white focus:ring-[#3487fa]"
                  required
                ></textarea>

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-[#3488fa] to-black/70 text-white font-medium rounded-full py-3 px-8 transition duration-300 hover:opacity-90 disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>

              <style>{`
                .bg-gradient-animate {
                  background: linear-gradient(135deg, #ffffff, #eaf2ff, #fdfcfb, #dbe8ff);
                  background-size: 400% 400%;
                  animation: gradientShift 15s ease-in-out infinite;
                }
                @keyframes gradientShift {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                }
                .animate-float {
                  animation: float 5s ease-in-out infinite;
                }
                @keyframes zoomPulse {
                  0%, 100% {
                    transform: scale(1.2);
                  }
                  50% {
                    transform: scale(1.08);
                  }
                }
                .animate-zoom {
                  animation: zoomPulse 5s ease-in-out infinite;
                }
              `}</style>
            </div>
          </section>

          {/* ===== GOOGLE MAP ===== */}
          <section className="w-full mt-3 md:mt-20 lg:mt-14 !mb-0 !pb-0">
            <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[540px]">
              <iframe
                src="https://www.google.com/maps?q=Binarylogix+Technologies+LLP,+Himanshu+Apartment,+Indrapuri,+Bhopal,+Madhya+Pradesh&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Binarylogix Technologies LLP Location"
                className="transition-transform duration-300"
              />
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
