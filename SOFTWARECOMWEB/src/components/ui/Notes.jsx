import React from "react";
import phoneImg from "../../assets/2mobile_image.png";
import chromeImg from "../../assets/chrome_icon.png"
export default function NotesSecuritySection() {
    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center px-4 gap-8">
                {/* Left: Content */}
                <div className="w-full md:w-1/2 flex flex-col items-start md:pr-10">
                    <span className="inline-block text-xs mb-3 px-2 bg-purple-100 text-purple-700 rounded-md">Better Note Management</span>
                    <h2 className="text-4xl font-extrabold mb-2">
                        Your Notes{" "}
                        <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                            Security
                        </span>
                    </h2>
                    <p className="mt-2 mb-6 text-gray-700">
                        Automatically syncs across all your devices. You can also access and write notes without internet connection.
                    </p>

                    {/* Features/Accordion cards */}
                    <div className="w-full space-y-3 mb-5">
                        {/* Expanded Card Example */}
                        <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                            <span className="font-semibold text-purple-700 block mb-2">Create And Save Your Notes With Multi-Media</span>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                            </p>
                        </div>
                        {/* Other features */}
                        <div className="font-semibold text-gray-900">Web Clipper Extension</div>
                        <div className="font-semibold text-gray-900">Protect Your Note With Lock</div>
                    </div>

                    {/* Chrome Web Store CTA */}
                    <div className="flex items-center gap-3 mt-8">
                        <div className="bg-gray-100 px-5 py-2 rounded-full flex items-center gap-2 shadow">
                            <img
                                src={chromeImg}
                                alt="Chrome Web Store"
                                className="w-7 h-7"
                            />
                            <span className="font-semibold">
                                <span className="text-gray-700 text-sm">Available In The</span> <br />
                                <span className="text-black text-base">Chrome Web Store</span>
                            </span>

                        </div>
                    </div>
                </div>

                {/* Right: Phone Image */}
                <div className="w-full md:w-1/2 flex justify-center relative min-h-[340px]">
                    <img
                        src={phoneImg}
                        alt="Mobile security note"
                        className="w-[380px] max-w-full drop-shadow-2xl rounded-xl"
                    />
                    {/* Decorative floating circles, optional */}
                    <span className="absolute left-10 bottom-12 w-10 h-10 bg-purple-200 rounded-full blur-md opacity-70"></span>
                    <span className="absolute right-14 top-20 w-6 h-6 bg-purple-400 rounded-full blur-md opacity-70"></span>
                    <span className="absolute left-24 top-24 w-7 h-7 bg-pink-300 rounded-full blur-md opacity-70"></span>
                </div>
            </div>
        </section>
    );
}
