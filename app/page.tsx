"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Globe, Truck, Shield, Package, ChevronLeft, ChevronRight } from "lucide-react";
import { products as allProducts } from "@/data/products";

function AutoSlideshow({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;

    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }, 8000);

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
        clearInterval(timerRef.current);
      }
    };
  }, [images.length]);

  const goToSlide = (index: number) => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      clearInterval(timerRef.current);
    }
    setCurrentIndex(index);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  if (images.length === 0) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <Package className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Premium Quality Assurance</h3>
          <p className="mt-2 opacity-90">Every shipment meets international standards</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Kakas Global premium agricultural export product"
              fill
              sizes="100vw"
              className={`object-cover${isActive ? " slide-kenburns" : ""}`}
              priority={index === 0}
            />
          </div>
        );
      })}

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {images.slice(0, Math.min(5, images.length)).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => goToSlide((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 sm:p-4 rounded-full backdrop-blur-sm transition-all z-20 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </button>
          <button
            onClick={() => goToSlide((currentIndex + 1) % images.length)}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 sm:p-4 rounded-full backdrop-blur-sm transition-all z-20 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </button>
        </>
      )}
    </div>
  );
}

export default function Home() {
  const featuredProducts = allProducts.slice(0, 6);
  
  const slideshowProducts = allProducts.filter((p) => p.images && p.images.length > 0);
  const hibiscusIdx = slideshowProducts.findIndex((p) =>
    p.name.toLowerCase().includes("hibiscus")
  );
  const orderedProducts =
    hibiscusIdx > 0
      ? [
          slideshowProducts[hibiscusIdx],
          ...slideshowProducts.slice(0, hibiscusIdx),
          ...slideshowProducts.slice(hibiscusIdx + 1),
        ]
      : slideshowProducts;
  const slideshowImages = orderedProducts.map((p) => p.images![0]);

  const certifications = [
    "NAFDAC Certified",
    "SON Certified",
    "NEPC",
    "CAC Registered — RC: 9107874",
  ];

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kakas Global Limited",
    url: "https://kakasglobal.com",
    logo: "https://kakasglobal.com/logo.svg",
    description: "Leading Nigerian exporter of premium agricultural raw materials including cashew nuts, sesame seeds, shea butter, hibiscus flower, ginger, and moringa.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "44 Ahmadu Bello Way, Nasarawa GRA",
      addressLocality: "Kano",
      addressCountry: "NG",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+234-704-058-1036",
        contactType: "sales",
        availableLanguage: ["English", "French", "Arabic"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/kakas-global",
      "https://www.facebook.com/kakasglobal",
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* Hero Section - Full-bleed slideshow background */}
      <section className="relative h-screen max-h-[85vh] sm:max-h-none sm:h-screen w-full overflow-hidden">
        {/* Full-bleed slideshow background */}
        <div className="absolute inset-0 z-0">
          <AutoSlideshow images={slideshowImages} />
        </div>
        
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        
        {/* Content container */}
        <div className="relative z-10 h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-full flex items-center">
            <div className="w-full sm:max-w-[65%] lg:max-w-[50%] px-4 sm:pl-[5%] sm:pr-0">
              <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/20 px-4 py-2 text-sm font-medium text-white mb-6 backdrop-blur-sm">
                <Globe className="h-4 w-4 mr-2" />
                Exporting from Nigeria to the World
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                From Nigeria's Farms to the World's Markets
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/85 max-w-prose">
                KAKAS GLOBAL LIMITED is your trusted partner for premium agricultural raw materials.
                We source, process, and export the finest Nigerian agricultural products to international buyers
                with uncompromising quality and reliability.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-amber-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:from-emerald-700 hover:to-amber-700 transition-all duration-200 w-full sm:w-auto"
                >
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-3 text-base font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors duration-200 w-full sm:w-auto"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
          
          {/* Global Logistics tile moved to bottom-right */}
          <div className="hidden sm:block absolute bottom-8 right-8 z-20 bg-white/95 rounded-xl shadow-lg p-4 w-64 backdrop-blur-sm">
            <div className="flex items-center">
              <Truck className="h-8 w-8 text-emerald-600" />
              <div className="ml-4">
                <div className="text-xl font-bold text-gray-900">Global Logistics</div>
                <div className="text-sm text-gray-600">FOB, CIF, CFR terms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Premium Products
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600 max-w-prose mx-auto">
              High-quality agricultural raw materials sourced directly from Nigerian farms
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  {product.images && product.images.length > 0 ? (
                    <Image
                      src={product.images[0]}
                      alt={`${product.name} – Nigerian agricultural export`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-amber-100 flex items-center justify-center">
                      <Package className="h-12 w-12 text-emerald-300" />
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-gray-600 line-clamp-2 text-base leading-relaxed">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      {product.moq}
                    </span>
                    <Link
                      href={`/products/${product.id}`}
                      className="text-emerald-600 hover:text-emerald-700 transition-colors duration-200"
                      aria-label={`View details for ${product.name}`}
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
              className="inline-flex items-center rounded-full border-2 border-emerald-600 px-8 py-3 text-base font-medium text-emerald-600 hover:bg-emerald-50 transition-colors duration-200"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications & Quality */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                Certified Quality & Compliance
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600 max-w-prose">
                We adhere to the highest international standards to ensure our products meet
                regulatory requirements in all destination markets.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="ml-3 text-gray-700 text-sm sm:text-base">{cert}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href="/quality"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
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

      {/* CAC Registration Badge */}
      <div className="bg-white py-6 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            KAKAS GLOBAL LIMITED — CAC Registration: RC 9107874
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Ready to Source Premium Agricultural Products?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-emerald-100 max-w-prose mx-auto">
            Get competitive pricing, samples, and full documentation for your import needs.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-base font-medium text-emerald-700 shadow-lg hover:bg-gray-100 transition-colors duration-200"
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
