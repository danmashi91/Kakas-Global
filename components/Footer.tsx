import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const products = [
    "Cashew Nuts",
    "Cocoa Beans",
    "Sesame Seeds",
    "Shea Butter",
    "Hibiscus Flower",
    "Ginger",
    "Charcoal",
    "Palm Kernel Shell",
    "Moringa",
  ];

  const services = [
    "Sourcing & Procurement",
    "Quality Control",
    "Logistics & Shipping",
    "Custom Packaging",
    "Documentation & Compliance",
  ];

  const company = [
    "About Us",
    "Our Team",
    "Quality Assurance",
    "Sustainability",
    "Careers",
    "Blog",
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">KG</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">KAKAS GLOBAL</span>
                <span className="text-sm text-gray-300 -mt-1">LIMITED</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Leading Nigerian exporter of premium agricultural raw materials to international markets. 
              Connecting Nigeria's farms to the world's markets since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Instagram
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product}>
                  <Link
                    href={`/products#${product.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 mt-0.5" />
                <span className="text-gray-300">
                  44 Ahmadu Bello Way, Nasarawa GRA<br />
                  Kano, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <a href="tel:+2347040581036" className="text-gray-300 hover:text-emerald-400">
                  +234 704 058 1036
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <a href="mailto:info@kakasglobal.com" className="text-gray-300 hover:text-emerald-400">
                  info@kakasglobal.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold mb-2 text-gray-300">Market Updates</h4>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-amber-600 text-white font-medium hover:from-emerald-700 hover:to-amber-700 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} KAKAS GLOBAL LIMITED. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">
                Sitemap
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <p>
              KAKAS GLOBAL LIMITED is registered with the Nigerian Corporate Affairs Commission (CAC) and 
              certified by NAFDAC, SON, and other relevant export regulatory bodies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;