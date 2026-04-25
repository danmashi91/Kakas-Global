"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle, Package, Truck, Shield, FileText, Scale, Ruler, Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (product?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images!.length);
    }
  };

  const prevImage = () => {
    if (product?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + product.images!.length) % product.images!.length);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Package className="h-16 w-16 mx-auto text-gray-300" />
          <h1 className="mt-4 text-2xl font-bold text-gray-900">Product Not Found</h1>
          <p className="mt-2 text-gray-600">The product you are looking for does not exist.</p>
          <Link
            href="/products"
            className="mt-6 inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-emerald-600 transition-colors">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Slideshow */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
              {product.images && product.images.length > 0 ? (
                <>
                  <Image
                    src={product.images[currentImageIndex]}
                    alt={`${product.name} – premium Nigerian agricultural export – Image ${currentImageIndex + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-opacity duration-300"
                    priority
                  />
                  {/* Navigation Arrows */}
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                      {/* Dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {product.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              index === currentImageIndex
                                ? "bg-white w-4"
                                : "bg-white/50 hover:bg-white/80"
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-amber-100 flex items-center justify-center">
                  <Package className="h-20 w-20 text-emerald-300" />
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                {product.category}
              </div>
              <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                {product.name}
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600">
                {product.fullDescription}
              </p>

              {/* Certifications */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Certifications</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700"
                    >
                      <CheckCircle className="mr-1.5 h-4 w-4" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Details */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-50 p-4">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <p className="mt-1 text-sm font-medium text-gray-900">Origin</p>
                  <p className="text-sm text-gray-600">{product.origin}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <Package className="h-5 w-5 text-emerald-600" />
                  <p className="mt-1 text-sm font-medium text-gray-900">MOQ</p>
                  <p className="text-sm text-gray-600">{product.moq}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <Calendar className="h-5 w-5 text-emerald-600" />
                  <p className="mt-1 text-sm font-medium text-gray-900">Season</p>
                  <p className="text-sm text-gray-600">{product.season}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <FileText className="h-5 w-5 text-emerald-600" />
                  <p className="mt-1 text-sm font-medium text-gray-900">HS Code</p>
                  <p className="text-sm text-gray-600">{product.hsCode}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href={`/request-quote?product=${product.id}`}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-amber-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:from-emerald-700 hover:to-amber-700 transition-all duration-200"
                >
                  Request Quote for {product.name}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Specifications Table */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Product Specifications</h2>
              <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {product.specifications.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 w-2/5">
                          <div className="flex items-center">
                            <Ruler className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                            {spec.label}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Packaging */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Packaging Options</h2>
              <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {product.packaging.map((pkg, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 w-2/5">
                          <div className="flex items-center">
                            <Truck className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                            {pkg.label}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{pkg.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Available Forms */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900">Available Forms</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.forms.map((form) => (
                    <span
                      key={form}
                      className="inline-flex items-center rounded-full bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700"
                    >
                      {form}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Interested in {product.name}?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-emerald-100 max-w-prose mx-auto">
            Get a competitive quote with full product specifications and shipping options.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/request-quote?product=${product.id}`}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-emerald-700 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Request Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-3 text-base font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors duration-200"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
