import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import atIcon from "../assets/Aticon.png";
import envelopeIcon from "../assets/envicon.png";
import location from "../assets/location.png";
import message from "../assets/message.png";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
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
              We will contact again after receiving your request within 24h
            </p>
          </div>

          {/* Contact Info Boxes */}
          <div className="mx-auto max-w-5xl mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6">
            {/* Email Box */}
            <div className="flex flex-col sm:flex-row items-center gap-4 px-6 py-5 rounded-2xl bg-[#f4f7ff] shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[30%] text-center sm:text-left">
              <img
                src={envelopeIcon}
                alt="Email"
                className="h-12 w-12 object-contain drop-shadow-md"
              />
              <div>
                <p className="text-base md:text-lg font-semibold text-[#9355dc] break-all">
                  binarylogixofficial@gmail.com
                </p>
              </div>
            </div>

            {/* Location Box */}
            <div className="flex flex-col sm:flex-row items-center gap-4 px-6 py-5 rounded-2xl bg-[#f4f7ff] shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[30%] text-center sm:text-left">
              <img
                src={location}
                alt="Location"
                className="h-12 w-12 object-contain drop-shadow-md"
              />
              <div>
                <p className="text-base md:text-lg font-semibold text-[#9355dc] leading-snug">
                  11-Himanshu Apartment, Indrapuri, Bhopal 462022
                </p>
              </div>
            </div>

            {/* Phone Box */}
            <div className="flex flex-col sm:flex-row items-center gap-4 px-6 py-5 rounded-2xl bg-[#f4f7ff] shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[30%] text-center sm:text-left">
              <img
                src={message}
                alt="Phone"
                className="h-12 w-12 object-contain drop-shadow-md animate-float"
              />
              <div>
                <p className="text-base md:text-lg font-semibold text-[#9355dc]">
                  +91 9617189757
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FORM SECTION ===== */}
        <section className="relative flex justify-center bg-white py-16 px-4 overflow-hidden">
          {/* Floating @ Icon (bottom left) */}
          <div className="absolute bottom-5 left-5 md:bottom-10 md:left-40 z-20">
            <img
              src={atIcon}
              alt="At symbol"
              className="w-20 md:w-28 opacity-95 hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Floating Envelope (top right) */}
          <div className="absolute top-6 right-2 md:top-30 md:right-10 z-20 animate-float">
            <img
              src={envelopeIcon}
              alt="Envelope"
              className="w-24 md:w-66 opacity-100 drop-shadow-lg"
            />
          </div>

          {/* Form Container */}
          <div className="relative bg-gradient-animate rounded-[30px] shadow-xl max-w-5xl w-full p-6 sm:p-8 md:p-12 z-10 border-t-10 border-[#3487fa]">
            <p className="text-center text-red-500 text-sm mb-6">
              The field is required mark as{" "}
              <span className="font-semibold">*</span>
            </p>

            <form className="flex flex-col items-center space-y-6">
              {/* Grid Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-[700px]">
                <input
                  type="text"
                  placeholder="Name"
                  className="rounded-full border bg-white border-gray-300 px-5 py-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="rounded-full border border-gray-300 bg-white px-5 py-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  className="rounded-full border border-gray-300 bg-white px-5 py-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                />
                <input
                  type="text"
                  placeholder="Your Website (optional)"
                  className="rounded-full border border-gray-300 bg-white px-5 py-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                />
              </div>

              <input
                type="text"
                placeholder="Select Service"
                className="rounded-full border border-gray-300 bg-white px-5 py-3 w-full max-w-[700px] text-sm focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
              />

              <textarea
                rows="5"
                placeholder="How can we help you?"
                className="rounded-3xl border border-gray-300 px-5 py-3 w-full max-w-[700px] text-sm focus:outline-none focus:ring-2 bg-white focus:ring-[#8b5cf6]"
                required
              ></textarea>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-600 text-center sm:text-left">
                <input type="checkbox" className="accent-[#8b5cf6]" />
                <p>
                  By submitting, I’m agreed to the{" "}
                  <a
                    href="#"
                    className="underline text-black hover:text-[#8b5cf6]"
                  >
                    Terms & Conditions
                  </a>
                </p>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className=" bg-gradient-to-r from-[#3488fa] to-black/70  text-white font-medium rounded-full py-3 px-8 transition duration-300"
                >
                  Send Your Request
                </button>
              </div>
            </form>

            {/* Inline style for gradient animation */}
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
            `}</style>
          </div>
        </section>

        {/* ===== GOOGLE MAP ===== */}
        <section className="w-full">
          <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps?q=Binarylogix+Technologies+LLP,+Himanshu+Apartment,+Indrapuri+A+Sector,+Bhopal,+Madhya+Pradesh+462041&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Binarylogix Technologies LLP Location"
              className="sm:scale-90 xs:scale-75 md:scale-95 transition-transform duration-300"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
