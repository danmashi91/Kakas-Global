"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "+2347040581036";
  const defaultMessage = "Hello KAKAS GLOBAL, I'm interested in your agricultural products. Can you provide more information?";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:info@kakasglobal.com?subject=Inquiry about Agricultural Products&body=${encodeURIComponent(defaultMessage)}`;
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -top-10 right-0 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </button>

      {/* Quick Contact Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-900">Quick Contact</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Get instant responses via WhatsApp or email us for detailed inquiries.
          </p>
          <div className="space-y-2">
            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Chat</span>
            </button>
            <button
              onClick={handleEmailClick}
              className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Send Email</span>
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button for Contact Panel */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-40 flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white shadow-lg hover:shadow-xl hover:bg-gray-900 transition-all"
        aria-label="Toggle contact options"
      >
        {isOpen ? "−" : "+"}
      </button>
    </>
  );
};

export default WhatsAppWidget;