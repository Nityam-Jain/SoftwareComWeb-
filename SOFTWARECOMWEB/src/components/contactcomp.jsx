import React from "react";
import { motion } from "framer-motion";
import atIcon from "../assets/Aticon.png";
import envelopeIcon from "../assets/envicon.png";
import envelopeimg from "../assets/Envelope.png";
import location from "../assets/location.png";
import message from "../assets/message.png";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 flex flex-col">
      <main className="flex-1">
        {/* ===== TOP SECTION ===== */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-b-3xl shadow-sm pb-10 pt-12 sm:pt-16 md:pt-20 lg:pt-28"
        >
          <div className="max-w-3xl mx-auto text-center px-4 space-y-2 sm:space-y-3">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-[#efe6fb] text-[#3488fa] px-4 py-1 rounded-lg text-xs sm:text-sm font-semibold tracking-wider"
            >
              Contact Us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800"
            >
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3488fa] to-black/70 font-bold">
                Touch
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4"
            >
              We’ll reach out within 24 hours after receiving your request.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl mt-10 sm:mt-12 flex flex-col md:flex-row flex-wrap items-center md:items-start justify-end md:justify-center bg-white rounded-2xl shadow-md px-5 sm:px-8 py-6 gap-6 md:gap-10 text-right md:text-left"
          >
            {/* Email */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-start md:justify-start">
              <img
                src={envelopeimg}
                alt="Email"
                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 object-contain drop-shadow-[0_0_6px_rgba(52,135,250,0.3)] animate-zoom"
              />
              <p className="text-sm sm:text-base text-gray-800 break-words">
                binarylogixofficial@gmail.com
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-6 w-px bg-gray-200"></div>

            {/* Location */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-start md:justify-start">
              <img
                src={location}
                alt="Location"
                className="h-7 w-7 sm:h-8 sm:w-8 object-contain drop-shadow-[0_0_6px_rgba(52,135,250,0.3)] animate-zoom"
              />
              <p className="text-sm sm:text-base text-gray-800 max-w-[260px] sm:max-w-none">
                11-Himanshu Apartment, <br/> Indrapuri, Bhopal 462022
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-6 w-px bg-gray-200"></div>

            {/* Phone */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-start md:justify-start">
              <img
                src={message}
                alt="Phone"
                className="h-7 w-7 sm:h-8 sm:w-8 object-contain drop-shadow-[0_0_6px_rgba(52,135,250,0.3)] animate-zoom"
              />
              <p className="text-sm sm:text-base text-gray-800">
                +91 9617189757
              </p>
            </div>
          </motion.div>

          {/* ===== FORM SECTION ===== */}
          <section className="relative flex justify-center bg-white py-12 sm:py-16 px-4 overflow-hidden">
            {/* Floating @ Icon */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="hidden md:block absolute bottom-10 left-6 z-20 animate-float"
            >
              {/* <img
                src={atIcon}
                alt="At symbol"
                className="w-14 sm:w-20 md:w-28 opacity-90 hover:scale-105 transition-transform duration-500"
              /> */}
            </motion.div>

            {/* Floating Envelope */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="hidden md:block absolute top-16 right-6 z-20 animate-float"
            >
              {/* <img
                src={envelopeIcon}
                alt="Envelope"
                className="w-16 sm:w-24 md:w-32 opacity-100 drop-shadow-lg"
              /> */}
            </motion.div>

            {/* Form Container */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative bg-gradient-animate rounded-[30px] shadow-xl max-w-4xl w-full p-6 sm:p-8 md:p-10 z-10 border-t-8 border-[#3487fa]"
            >
              <form className="flex flex-col items-center space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full max-w-[700px]">
                  <input
                    type="text"
                    placeholder="Name"
                    className="rounded-full border bg-white border-gray-300 px-5 py-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3487fa]"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="rounded-full border border-gray-300 bg-white px-5 py-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3487fa]"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="rounded-full border border-gray-300 bg-white px-5 py-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3487fa]"
                  />
                  <select
                    className="rounded-full border border-gray-300 bg-white px-5 py-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3487fa]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Service
                    </option>
                    <option value="seo">SEO Strategy</option>
                    <option value="google_fb_ads">Google & Facebook Ads</option>
                    <option value="email_marketing">Email Marketing</option>
                    <option value="social_media">Social Media</option>
                    <option value="website_design">
                      Website Design & Development
                    </option>
                    <option value="app_development">App Development</option>
                  </select>
                </div>

                <textarea
                  rows="5"
                  placeholder="How can we help you?"
                  className="rounded-3xl border border-gray-300 px-5 py-3 w-full max-w-[700px] text-sm sm:text-base focus:outline-none focus:ring-2 bg-white focus:ring-[#8b5cf6]"
                  required
                ></textarea>

                <div className="flex justify-center pt-2 pb-6 sm:pb-10">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="bg-gradient-to-r from-[#3488fa] to-black/70 text-white font-medium rounded-full py-3 px-8 transition duration-300 hover:opacity-90"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>

              {/* Animations */}
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
                  0%, 100% { transform: scale(1.2); }
                  50% { transform: scale(1.08); }
                }
                .animate-zoom {
                  animation: zoomPulse 5s ease-in-out infinite;
                }
              `}</style>
            </motion.div>
          </section>

          {/* ===== GOOGLE MAP ===== */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="w-full h-[260px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
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
          </motion.section>
        </motion.section>
      </main>
    </div>
  );
}
