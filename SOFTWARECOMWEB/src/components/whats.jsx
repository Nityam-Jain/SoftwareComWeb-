import React from "react";
import { FaWhatsapp } from "react-icons/fa";

 function WhatsAppButton() {
  const phoneNumber = "919617189757"; // 👉 Replace with your actual WhatsApp number

  return (
    <>
      <a              
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-6 z-50 group"
      >             
        {/* Animated ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-900 opacity-75 group-hover:animate-ping"></span>

        {/* Main button */}
        <div className="relative bg-[#016c29] text-white rounded-full shadow-xl p-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <FaWhatsapp className="w-8 h-8" />
        </div>
      </a>
    </>
  );
}

export default WhatsAppButton