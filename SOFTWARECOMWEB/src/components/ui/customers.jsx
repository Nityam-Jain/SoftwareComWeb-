import React from "react";
import icon1 from "../../assets/customerimg.png";
import icon2 from "../../assets/customerimg2.png";
import icon3 from "../../assets/customerimg3.png";

export default function TestimonialsSection() {
    return (
        <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 relative">
                {/* Left Side */}
                <div className="w-full lg:w-1/2 max-w-lg">
                    <span className="inline-block text-xs sm:text-sm mb-3 px-3 bg-purple-100 text-purple-700 rounded-md">
                        Testimonials
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">
                        Loved From{" "}
                        <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                            Customers
                        </span>
                    </h2>
                    <p className="text-gray-700 mb-8 sm:mb-10 mt-2 lg:mr-10 text-sm sm:text-base">
                        Notero loved from thousands customer worldwide and get trusted from big companies.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-col sm:flex-row gap-6 mb-10 sm:mb-12">
                        {/* Stat 1 */}
                        <div className="flex items-center gap-4">
                            <img src={icon1} alt="Downloads" className="w-10 h-10" />
                            <div>
                                <div className="text-2xl sm:text-3xl font-bold text-purple-700">2,5M+</div>
                                <div className="text-gray-600 text-xs sm:text-sm">
                                    Downloaded<br />and Installation
                                </div>
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex items-center gap-4">
                            <img src={icon2} alt="Star Rating" className="w-10 h-10" />
                            <div>
                                <div className="text-2xl sm:text-3xl font-bold text-blue-600">4.8/5</div>
                                <div className="flex gap-1 mb-1">
                                    {Array(5).fill().map((_, i) =>
                                        <span key={i} className="text-yellow-400 text-lg">★</span>
                                    )}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600">Based on 1,258 reviews</div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 sm:gap-5 items-center mt-4">
                        <a
                            href="#"
                            className="rounded-full bg-purple-700 text-white font-semibold px-6 sm:px-8 py-2 shadow-md hover:bg-purple-800 transition text-sm sm:text-base text-center"
                        >
                            See Reviews On App Store
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-1 text-purple-700 font-semibold hover:underline transition text-sm sm:text-base"
                        >
                            <svg fill="none" viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
                                <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            View Promotion
                        </a>
                    </div>
                </div>

                {/* Right Side: Testimonial Cards */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6 relative items-center">
                    {/* Card 1 */}
                    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-start gap-4 mb-3 border border-gray-100">
                        <img src={icon1} alt="App" className="w-12 h-12 rounded-lg bg-gray-50" />
                        <div>
                            <div className="flex gap-1 mb-2">
                                {Array(5).fill().map((_, i) =>
                                    <span key={i} className="text-yellow-400 text-md">★</span>
                                )}
                            </div>
                            <p className="font-semibold text-gray-700 leading-snug text-sm sm:text-base">
                                “You can even send emails to Evernote and gather all of the things you need in a single place.”
                            </p>
                            <div className="text-[0.85rem] sm:text-[0.9rem] text-gray-500 mt-2">
                                <span className="font-bold">JURGEN K.</span> / Senior Marketing at
                                <span className="text-indigo-500"> Br /ator</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-start gap-4 mb-3 border border-gray-100 sm:ml-10">
                        <img src={icon2} alt="App" className="w-12 h-12 rounded-lg bg-gray-50" />
                        <div>
                            <div className="flex gap-1 mb-2">
                                {Array(5).fill().map((_, i) =>
                                    <span key={i} className="text-yellow-400 text-md">★</span>
                                )}
                            </div>
                            <p className="font-semibold text-gray-700 leading-snug text-sm sm:text-base">
                                “Notero - 1st my choice for notes app. <span className="text-black font-bold">Awesome</span>”
                            </p>
                            <div className="text-[0.85rem] sm:text-[0.9rem] text-gray-500 mt-2">
                                <span className="font-bold">FODEN P.</span> / Director at
                                <span className="text-indigo-500"> Ecoland Resort</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-start gap-4 border border-gray-100 sm:ml-20">
                        <img src={icon3} alt="App" className="w-12 h-12 rounded-lg bg-gray-50" />
                        <div>
                            <div className="flex gap-1 mb-2">
                                {Array(5).fill().map((_, i) =>
                                    <span key={i} className="text-yellow-400 text-md">★</span>
                                )}
                            </div>
                            <p className="font-semibold text-gray-700 leading-snug text-sm sm:text-base">
                                ”This app is seriously good. It’s simple, clean and a real joy to use.”
                            </p>
                            <div className="text-[0.85rem] sm:text-[0.9rem] text-gray-500 mt-2">
                                <span className="font-bold">KERRY T.</span> / Designer at
                                <span className="text-indigo-500"> Teckzone Inc</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 