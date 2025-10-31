import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "919617189757"; // 👉 Replace with your actual WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 group"
    >
      {/* Glowing pulse ring */}
      <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-500 opacity-70 group-hover:opacity-90 animate-ping group-hover:animate-none blur-md"></span>

      {/* Main floating button */}
      <div
        className="relative bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.6)]
                   p-3 flex items-center justify-center transition-all duration-500
                   group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_30px_rgba(37,211,102,0.9)] animate-bounce"
      >
        <FaWhatsapp className="w-8 h-8 drop-shadow-lg group-hover:animate-spin-slow" />
      </div>

      {/* Tailwind custom slow spin animation */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
      `}</style>
    </a>
  );
}

export default WhatsAppButton;
