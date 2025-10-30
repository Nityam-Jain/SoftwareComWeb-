import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import atIcon from "../assets/Aticon.png";
import envelopeIcon from "../assets/envicon.png";
import envelopeimg from "../assets/Envelope.png";
import location from "../assets/location.png";
import message from "../assets/message.png";

export default function ContactPage() {
  return (
    <div className="bg-gray-50  flex flex-col">
      <Header />

      <main className="flex-1">
        {/* ===== TOP SECTION ===== */}
        <section className="bg-white rounded-b-3xl shadow-sm pb-8 pt-12 md:pt-20 lg:pt-28">
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
          <div className="mx-auto max-w-6xl mt-12 flex flex-col md:flex-wrap md:flex-row items-center justify-center bg-white rounded-2xl shadow-md px-6 py-6 gap-6 md:gap-10 text-center md:text-left">
            {/* Email */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center md:justify-start ">
              <img
                src={envelopeimg}
                alt="Email"
                className="h-9 w-9 md:h-10 md:w-10 object-contain drop-shadow-[0_0_6px_rgba(52,135,250,0.3)] animate-zoom"
              />
              <p className="text-sm md:text-base font-semibold text-gray-800 break-words">
                binarylogixofficial@gmail.com
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-6 w-px bg-gray-200"></div>

            {/* Location */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center md:justify-start">
              <img
                src={location}
                alt="Location"
                className="h-8 w-8 object-contain drop-shadow-[0_0_6px_rgba(52,135,250,0.3)] animate-zoom"
              />
              <p className="text-sm md:text-base font-semibold text-gray-800 break-words max-w-[260px] sm:max-w-none">
                11-Himanshu Apartment, Indrapuri, Bhopal 462022
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-6 w-px bg-gray-200"></div>

            {/* Phone */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center md:justify-start">
              <img
                src={message}
                alt="Phone"
                className="h-8 w-8 object-contain drop-shadow-[0_0_6px_rgba(52,135,250,0.3)] animate-zoom"
              />
              <p className="text-sm md:text-base font-semibold text-gray-800">
                +91 9617189757
              </p>
            </div>
          </div>
          {/* ===== FORM SECTION ===== */}
          <section className="relative flex justify-center bg-white py-16 px-4 overflow-hidden">
            {/* Floating @ Icon (bottom left) */}
            <div className="absolute bottom-18 left-4 sm:bottom-12 sm:left-12 md:bottom-8 md:left-4 lg:bottom-12 lg:left-57 z-20 animate-float">
              <img
                src={atIcon}
                alt="At symbol"
                className="w-14 sm:w-20 md:w-28 lg:w-38 opacity-90 hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Envelope (top right) */}
            <div className="absolute top-20 right-4 sm:top-24 sm:right-10 md:top-12 md:right-0 lg:top-35 lg:right-32 z-20 animate-float">
              <img
                src={envelopeIcon}
                alt="Envelope"
                className="w-16 sm:w-24 md:w-38 lg:w-66 opacity-100 drop-shadow-lg"
              />
            </div>

            {/* Form Container */}
            <div className="relative bg-gradient-animate rounded-[30px] shadow-xl max-w-4xl w-full p-6 sm:p-8 md:p-10 z-10 border-t-8 border-[#3487fa] h-[545px] md:h-auto">
              {/* <p className="text-center text-red-500 text-sm mb-6">
                Fields marked with <span className="font-semibold">*</span> are required.
              </p> */}

              <form className="flex flex-col items-center space-y-6">
                {/* Grid Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-[700px]">
                  <input
                    type="text"
                    placeholder="Name"
                    className="rounded-full border bg-white border-gray-300 px-5 py-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#3487fa]"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="rounded-full border border-gray-300 bg-white px-5 py-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#3487fa]"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="rounded-full border border-gray-300 bg-white px-5 py-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#3487fa]"
                  />
                  <select
                    className="rounded-full border border-gray-300 bg-white px-5 py-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#3487fa]"
                    defaultValue=""
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

                {/* <input
                  type="text"
                  placeholder="Select Service"
                  className="rounded-full border border-gray-300 bg-white px-5 py-3 w-full max-w-[700px] text-sm focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                /> */}

                <textarea
                  rows="5"
                  placeholder="How can we help you?"
                  className="rounded-3xl border border-gray-300 px-5 py-3 w-full max-w-[700px] text-sm focus:outline-none focus:ring-2 bg-white focus:ring-[#8b5cf6]"
                  required
                ></textarea>

                {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-600 text-center sm:text-left">
                  <input type="checkbox" className="accent-[#8b5cf6]" />
                  <p>
                    By submitting, I agree to the{" "}
                    <a href="#" className="underline text-black hover:text-[#8b5cf6]">
                      Terms & Conditions
                    </a>
                  </p>
                </div> */}

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#3488fa] to-black/70 text-white font-medium rounded-full py-3 px-8 transition duration-300 hover:opacity-90"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              {/* ✅ Animations */}
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
          <section className="w-full">
            <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
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
