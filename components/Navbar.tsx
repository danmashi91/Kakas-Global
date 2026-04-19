"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Quality Assurance", href: "/quality" },
    { name: "Contact", href: "/contact" },
    { name: "Request Quote", href: "/request-quote", highlight: true },
  ];

  const languages = [
    { code: "EN", name: "English" },
    { code: "FR", name: "Français" },
    { code: "AR", name: "العربية" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Kakas Global Limited"
                width={160}
                height={64}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-700 ${
                  item.highlight
                    ? "rounded-full bg-gradient-to-r from-emerald-600 to-amber-600 px-4 py-2 text-white hover:from-emerald-700 hover:to-amber-700"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Language Selector */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-emerald-700"
                aria-label="Select language"
                aria-haspopup="listbox"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                <span>{language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`block w-full px-4 py-2 text-sm text-left ${
                        language === lang.code
                          ? "bg-emerald-50 text-emerald-700"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-nav" className="md:hidden border-t border-gray-100 py-4">
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                    item.highlight
                      ? "bg-gradient-to-r from-emerald-600 to-amber-600 text-white"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <p className="px-3 py-2 text-sm font-medium text-gray-500">Language</p>
                <div className="flex space-x-2 px-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`rounded-full px-3 py-1 text-sm ${
                        language === lang.code
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {lang.code}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;