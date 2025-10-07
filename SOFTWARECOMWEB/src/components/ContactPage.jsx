import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import atIcon from "../assets/Aticon.png"; // bottom-left @ icon
import envelopeIcon from "../assets/envicon.png"; // top-right envelope image
import location from "../assets/location.png"
import message from "../assets/message.png"
export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Top Section - Contact Info */}
        <section className="bg-white rounded-b-3xl shadow-sm border-t-4 border-[#7554e0] pb-8 pt-12 md:pt-20 lg:pt-28">
          <div className="max-w-3xl mx-auto text-center space-y-1">
            <span className="inline-block bg-[#efe6fb] text-[#7554e0] px-4 py-1 rounded-lg mb-3 text-xs font-semibold tracking-wider">
              Contact us
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#623abc] via-[#cc64bc] to-[#f57e8a] font-bold">
                Touch
              </span>
            </h1>
            <p className="text-base md:text-sm mt-6 text-gray-600">
              We will contact again after receiving your request within 24h
            </p>
          </div>

          {/* Contact Info Boxes */}
          <div className="mx-auto max-w-4xl mt-10 flex flex-col md:flex-row md:items-center md:justify-center gap-6">
            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-[#f4f7ff]shadow-md hover:shadow-lg transition-shadow duration-300 w-fit">
              <img
                src={envelopeIcon}
                alt="Contact"
                className="h-10 w-10 object-contain drop-shadow-md"
              />
              <p className="text-base md:text-lg font-semibold text-gray-900">
                contact@lteck.com
              </p>
            </div>



            <div className="flex-1 flex flex-row items-center gap-4 px-6 py-5 rounded-2xl bg-[#f4f7ff] shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={location}
                alt="location"
                className="h-10 w-auto object-contain drop-shadow-md"
              />
              <span className="text-[#9355dc] text-xl font-semibold whitespace-nowrap">
                58 Howard St, Toronto
              </span>

            </div>

            <div className="flex-1 flex flex-row items-center gap-4 px-6 py-5 rounded-2xl bg-[#f4f7ff] shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={message}
                alt="message"
                className="h-10 w-auto object-contain drop-shadow-md animate-float "
              />
              <span className="text-[#9355dc] text-xl font-semibold">
                (+23) 5535 68 68
              </span>
            </div>
          </div>

        </section>

        {/* Contact Form Section */}
        <section className="relative flex justify-center bg-white py-16 px-4 overflow-hidden">
          {/* Floating Decorative Image */}
          <div className="absolute bottom-10 left-25 z-20 ">
            <img
              src={atIcon}
              alt="At symbol"
              className="w-28 md:w-36 opacity-95 hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Floating Envelope (Top Right) */}
          <div className="absolute top-26 right-20 md:right-12 z-20 animate-float">
            <div className="relative">
              <img
                src={envelopeIcon}
                alt="Envelope"
                className="w-32 md:w-36 opacity-100 drop-shadow-lg"
              />

            </div>
          </div>


          {/* Form Container */}
          <div className="relative bg-blue-50 rounded-[30px] shadow-xl max-w-6xl w-full p-10 md:p-12 z-10">
            <p className="text-center text-red-500 text-sm mb-6">
              The field is required mark as <span className="font-semibold">*</span>
            </p>

            <form className="flex flex-col items-center space-y-6">
              {/* Grid for input fields but fixed width */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[700px] max-w-full">
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

              {/* Single input below grid */}
              <input
                type="text"
                placeholder="Select Service"
                className="rounded-full border border-gray-300 bg-white px-5 py-3 w-[700px] max-w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
              />

              {/* Textarea */}
              <textarea
                rows="5"
                placeholder="How can we help you?"
                className="rounded-3xl border border-gray-300 px-5 py-3 w-[700px] max-w-full text-sm focus:outline-none focus:ring-2 bg-white focus:ring-[#8b5cf6]"
                required
              ></textarea>


              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
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
                  className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium rounded-full py-3 px-8 transition duration-300"
                >
                  Send Your Request
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Responsive Full-Width Google Map */}
        <section className="w-full">
          <div className="w-full h-[320px] md:h-[500px] lg:h-[500px]">
            <iframe
              title="Flatbush Brooklyn NY Map"
              src="https://www.google.com/maps?q=Flatbush+Brooklyn,+NY,+USA&output=embed"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full border-0 rounded-none"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
