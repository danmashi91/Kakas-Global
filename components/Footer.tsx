import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-stacked.svg"
                alt="KAKAS GLOBAL LIMITED"
                width={160}
                height={60}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Connecting Nigeria's farms to the world's markets.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="ml-3 text-sm">
                  44 Ahmadu Bello Way, Nasarawa GRA,<br />
                  Kano, Nigeria
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a
                  href="tel:+2347040581036"
                  className="ml-3 text-sm hover:text-emerald-400 transition-colors"
                >
                  +234 704 058 1036
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a
                  href="mailto:info@kakasglobal.com"
                  className="ml-3 text-sm hover:text-emerald-400 transition-colors"
                >
                  info@kakasglobal.com
                </a>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/company/kakas-global"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-2 hover:bg-emerald-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </a>
              <a
                href="https://www.facebook.com/kakasglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-2 hover:bg-emerald-600 transition-colors"
                aria-label="Facebook"
              >
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm hover:text-emerald-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-emerald-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-sm hover:text-emerald-400 transition-colors">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className="text-sm hover:text-emerald-400 transition-colors">
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Our Products</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/products/cashew-nuts" className="text-sm hover:text-emerald-400 transition-colors">
                  Cashew Nuts
                </Link>
              </li>
              <li>
                <Link href="/products/sesame-seeds" className="text-sm hover:text-emerald-400 transition-colors">
                  Sesame Seeds
                </Link>
              </li>
              <li>
                <Link href="/products/shea-butter" className="text-sm hover:text-emerald-400 transition-colors">
                  Shea Butter
                </Link>
              </li>
              <li>
                <Link href="/products/hibiscus-flower" className="text-sm hover:text-emerald-400 transition-colors">
                  Hibiscus Flower
                </Link>
              </li>
              <li>
                <Link href="/products/dried-split-ginger" className="text-sm hover:text-emerald-400 transition-colors">
                  Dried Split Ginger
                </Link>
              </li>
              <li>
                <Link href="/products/moringa" className="text-sm hover:text-emerald-400 transition-colors">
                  Moringa
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Get In Touch</h3>
            <p className="mt-4 text-sm text-gray-400">
              Ready to source premium agricultural products? Contact our export team for competitive pricing and full documentation.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              &copy; {currentYear} KAKAS GLOBAL LIMITED. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 text-center sm:text-right max-w-2xl">
              KAKAS GLOBAL LIMITED is registered with the Corporate Affairs Commission (CAC) — RC: 9107874 — and certified by NAFDAC, SON, NEPC, and other relevant export regulatory bodies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
