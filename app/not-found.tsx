import Link from "next/link";
import { ArrowRight, Package, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-8">
          <Search className="h-10 w-10 text-emerald-600" aria-hidden="true" />
        </div>

        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Page Not Found</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Use the links below to find what you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-amber-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:from-emerald-700 hover:to-amber-700 transition-all duration-200"
          >
            Back to Home
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full border-2 border-emerald-600 px-8 py-3 text-base font-medium text-emerald-700 hover:bg-emerald-50 transition-colors duration-200"
          >
            <Package className="mr-2 h-5 w-5" aria-hidden="true" />
            View Products
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
          {[
            { label: "About Us", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Quality", href: "/quality" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg bg-white px-4 py-2 font-medium text-gray-700 shadow-sm hover:text-emerald-600 hover:shadow-md transition-all duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
