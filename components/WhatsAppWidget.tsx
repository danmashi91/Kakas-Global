"use client";

import Image from "next/image";
import { X, Mail } from "lucide-react";
import { useState } from "react";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "+2347040581036";
  const defaultMessage = "Hello KAKAS GLOBAL, I'm interested in your agricultural products. Can you provide more information?";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodedMessage}`, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:info@kakasglobal.com?subject=Inquiry about Agricultural Products&body=${encodeURIComponent(defaultMessage)}`;
  };

  return (
    <>
      {/* Quick Contact Panel — renders above the toggle button */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Quick contact options"
          className="fixed bottom-24 right-6 z-40 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 p-4"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-900 text-sm">Contact Our Export Team</h3>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Preferred by international buyers — get a response within hours.
          </p>
          <div className="space-y-2">
            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2.5 px-4 rounded-lg transition-colors text-sm font-medium"
              aria-label="Open WhatsApp chat with Kakas Global"
            >
              <Image
                src="/social.png"
                alt="WhatsApp"
                width={16}
                height={16}
                className="h-4 w-4"
              />
              Chat on WhatsApp
            </button>
            <button
              onClick={handleEmailClick}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 rounded-lg transition-colors text-sm font-medium"
              aria-label="Send email to Kakas Global"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Send Email
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label={isOpen ? "Close contact panel" : "Open WhatsApp contact options"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Image
            src="/social.png"
            alt="WhatsApp"
            width={28}
            height={28}
            className="h-7 w-7"
          />
        )}
      </button>
    </>
  );
};

export default WhatsAppWidget;
