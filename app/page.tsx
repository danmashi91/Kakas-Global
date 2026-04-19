import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Globe, Truck, Shield, Package } from "lucide-react";

export default function Home() {
  const products = [
    { name: "Cashew Nuts", image: "/cashew.jpg" },
    { name: "Cocoa Beans", image: "/cocoa.jpg" },
    { name: "Sesame Seeds", image: "/sesame.jpg" },
    { name: "Shea Butter", image: "/shea.jpg" },
    { name: "Hibiscus Flower", image: "/hibiscus.jpg" },
    { name: "Ginger", image: "/ginger.jpg" },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Countries Served" },
    { value: "10,000+", label: "Metric Tons Exported" },
    { value: "100%", label: "Quality Guarantee" },
  ];

  const certifications = [
    "NAFDAC Certified",
    "SON Certified",
    "EU Compliant",
    "FDA Standards",
    "ISO 22000",
    "HACCP",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 mb-6">
                <Globe className="h-4 w-4 mr-2" />
                Exporting from Nigeria to the World Since 2010
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                From Nigeria's Farms to the World's Markets
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                KAKAS GLOBAL LIMITED is your trusted partner for premium agricultural raw materials. 
                We source, process, and export the finest Nigerian agricultural products to international buyers 
                with uncompromising quality and reliability.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-amber-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:from-emerald-700 hover:to-amber-700 transition-all"
                >
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full border-2 border-emerald-600 px-8 py-3 text-base font-medium text-emerald-600 hover:bg-emerald-50 transition-colors"
                >
                  View Products
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-500 to-amber-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold">Premium Quality Assurance</h3>
                  <p className="mt-2 opacity-90">Every shipment meets international standards</p>
                </div>
              </div>
              {/* Floating stats cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 w-64">
                <div className="flex items-center">
                  <Truck className="h-8 w-8 text-emerald-600" />
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">Global Logistics</div>
                    <div className="text-sm text-gray-600">FOB, CIF, CFR terms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-emerald-700">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Premium Products
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              High-quality agricultural raw materials sourced directly from Nigerian farms
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-amber-100"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-gray-600">
                    Available in raw, processed, and powdered forms with custom packaging options.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-emerald-700">Request Sample</span>
                    <Link
                      href={`/products#${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-emerald-600 hover:text-emerald-700"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center rounded-full border-2 border-emerald-600 px-8 py-3 text-base font-medium text-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications & Quality */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Certified Quality & Compliance
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We adhere to the highest international standards to ensure our products meet 
                regulatory requirements in all destination markets.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span className="ml-3 text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href="/quality"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Learn about our quality process
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl bg-emerald-50 p-6">
                    <Shield className="h-8 w-8 text-emerald-600" />
                    <h3 className="mt-4 font-bold text-gray-900">Quality Control</h3>
                    <p className="mt-2 text-sm text-gray-600">Rigorous testing at every stage</p>
                  </div>
                  <div className="rounded-xl bg-amber-50 p-6">
                    <Package className="h-8 w-8 text-amber-600" />
                    <h3 className="mt-4 font-bold text-gray-900">Custom Packaging</h3>
                    <p className="mt-2 text-sm text-gray-600">Tailored to your requirements</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-xl bg-gray-50 p-6">
                    <Truck className="h-8 w-8 text-gray-600" />
                    <h3 className="mt-4 font-bold text-gray-900">Global Logistics</h3>
                    <p className="mt-2 text-sm text-gray-600">Door-to-door delivery</p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-6">
                    <Globe className="h-8 w-8 text-emerald-600" />
                    <h3 className="mt-4 font-bold text-gray-900">Documentation</h3>
                    <p className="mt-2 text-sm text-gray-600">Full export compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Source Premium Agricultural Products?
          </h2>
          <p className="mt-4 text-lg text-emerald-100">
            Get competitive pricing, samples, and full documentation for your import needs.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-base font-medium text-emerald-700 shadow-lg hover:bg-gray-100 transition-colors"
            >
              Contact Our Export Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
