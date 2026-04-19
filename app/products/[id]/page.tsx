"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Package, Scale, Globe, CheckCircle, Phone, Mail, Truck, ChevronLeft, ChevronRight } from "lucide-react";
import { getProductById, Product } from "@/data/products";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

function ProductImageSlideshow({ product }: { product: Product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!product.images || product.images.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-emerald-100 to-amber-100">
          <Package className="h-24 w-24 text-emerald-300" />
        </div>
      </div>
    );
  }

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images!.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images!.length) % product.images!.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Main Image with Navigation */}
      <div className="aspect-square relative">
        <Image
          src={product.images[currentImageIndex]}
          alt={`${product.name} – view ${currentImageIndex + 1} of ${product.images.length}`}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
          priority
        />
        
        {/* Navigation Arrows */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={goToPrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              onClick={goToNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </>
        )}
        
        {/* Image Counter */}
        {product.images.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {product.images.length}
          </div>
        )}
      </div>
      
      {/* Thumbnail Navigation */}
      {product.images.length > 1 && (
        <div className="p-4 grid grid-cols-4 gap-2 border-t">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                index === currentImageIndex
                  ? 'border-emerald-500 ring-2 ring-emerald-200'
                  : 'border-transparent hover:border-gray-300'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${product.name} – thumbnail ${index + 1}`}
                fill
                sizes="80px"
                className="object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {
        const { id } = await params;
        const foundProduct = getProductById(parseInt(id));
        setProduct(foundProduct || null);
      } catch {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen" aria-busy="true" aria-label="Loading product details">
        {/* Breadcrumb skeleton */}
        <div className="bg-gray-50 border-b py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="h-4 w-48 rounded bg-gray-200 animate-pulse" />
          </div>
        </div>
        {/* Header skeleton */}
        <section className="bg-gradient-to-br from-emerald-50 to-amber-50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 bg-gray-200 rounded-2xl animate-pulse aspect-square" />
              <div className="lg:col-span-8 space-y-4">
                <div className="h-4 w-24 rounded bg-gray-200 animate-pulse" />
                <div className="h-8 w-3/4 rounded bg-gray-200 animate-pulse" />
                <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
                <div className="h-4 w-2/3 rounded bg-gray-200 animate-pulse" />
                <div className="grid grid-cols-4 gap-4 pt-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-16 rounded-lg bg-gray-200 animate-pulse" />
                  ))}
                </div>
                <div className="h-20 rounded-2xl bg-gray-200 animate-pulse" />
              </div>
            </div>
          </div>
        </section>
        {/* Details skeleton */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-32 rounded-xl bg-gray-200 animate-pulse" />
                ))}
              </div>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-40 rounded-xl bg-gray-200 animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-emerald-600">
                    Products
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-sm font-medium text-emerald-600">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <section className="bg-gradient-to-br from-emerald-50 to-amber-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Product Image Section — 4 of 12 columns */}
            <div className="lg:col-span-4">
              <ProductImageSlideshow product={product} />
            </div>

            {/* Product Details + Quick Actions — 8 of 12 columns */}
            <div className="lg:col-span-8 space-y-6">
              <Link
                href="/products"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Products
              </Link>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                  {product.category.toUpperCase()}
                </span>
                {product.origin && (
                  <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
                    {product.origin}
                  </span>
                )}
              </div>

              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-lg text-gray-600">{product.description}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-500">MOQ</div>
                  <div className="text-xl font-bold text-gray-900">{product.moq}</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-500">Season</div>
                  <div className="text-xl font-bold text-gray-900">{product.season}</div>
                </div>
                {product.priceRange && (
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-gray-500">Price Range</div>
                    <div className="text-xl font-bold text-gray-900">{product.priceRange}</div>
                  </div>
                )}
                {product.leadTime && (
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-gray-500">Lead Time</div>
                    <div className="text-xl font-bold text-gray-900">{product.leadTime}</div>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Request Quote</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Get a customized price for {product.name} — includes shipping terms and full documentation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/request-quote?product=${encodeURIComponent(product.name)}`}
                    className="flex-1 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-amber-600 px-6 py-3 text-base font-medium text-white hover:from-emerald-700 hover:to-amber-700 transition-all"
                  >
                    Request Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center rounded-lg border border-emerald-300 px-6 py-3 text-base font-medium text-emerald-700 hover:bg-emerald-50 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Request Sample
                  </Link>
                  <a
                    href={`tel:+2347040581036`}
                    className="flex-1 inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Specifications */}
            <div className="lg:col-span-2 space-y-12">
               {/* Available Forms */}
               <div>
                 <div className="flex items-center mb-6">
                   <Package className="h-6 w-6 text-emerald-600 mr-3" />
                   <h2 className="text-2xl font-bold text-gray-900">Available Forms</h2>
                 </div>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                   {product.forms.map((form, index) => (
                     <div key={index} className="bg-white border border-emerald-200 rounded-lg p-4 shadow-sm">
                       <div className="font-medium text-gray-900">{form}</div>
                     </div>
                   ))}
                 </div>
               </div>

              {/* Packaging Options */}
              <div>
                <div className="flex items-center mb-6">
                  <Scale className="h-6 w-6 text-amber-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Packaging Options</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {product.packaging.map((pkg, index) => (
                    <div key={index} className="bg-white border border-amber-200 rounded-lg p-4 shadow-sm">
                      <div className="font-medium text-gray-900">{pkg}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div>
                  <div className="flex items-center mb-6">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Technical Specifications</h2>
                  </div>
                  <div className="bg-white rounded-xl border border-emerald-200 overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <tbody className="divide-y divide-gray-200">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <tr key={key} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Certifications & Info */}
            <div className="space-y-8">
              {/* Certifications */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center mb-6">
                  <Globe className="h-6 w-6 text-emerald-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Certifications & Standards</h3>
                </div>
                <div className="space-y-3">
                  {product.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Export Information */}
              <div className="bg-white rounded-xl border border-emerald-200 p-6 shadow-sm">
                <div className="flex items-center mb-6">
                  <Truck className="h-6 w-6 text-emerald-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Export Information</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-emerald-600 font-medium">Shipping Terms</div>
                    <div className="text-gray-700">FOB, CIF, CFR available</div>
                  </div>
                  <div>
                    <div className="text-sm text-emerald-600 font-medium">Payment Terms</div>
                    <div className="text-gray-700">LC, TT, Advance Payment</div>
                  </div>
                  <div>
                    <div className="text-sm text-emerald-600 font-medium">Documentation</div>
                    <div className="text-gray-700">Complete export documentation provided</div>
                  </div>
                </div>
              </div>

              {/* Contact for Samples */}
              <div className="bg-white rounded-xl border border-amber-200 p-6 shadow-sm">
                <div className="flex items-center mb-6">
                  <Mail className="h-6 w-6 text-amber-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Request Samples</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Available for qualified buyers. Contact us to request product samples.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-2 text-sm font-medium text-white hover:from-amber-700 hover:to-orange-700 transition-all"
                >
                  Request Sample
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Related Products</h2>
            <p className="mt-4 text-lg text-gray-600">Explore other products in the same category</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((offset) => {
              const relatedId = (product.id + offset) % 9 || 9;
              const relatedProduct = getProductById(relatedId);
              if (!relatedProduct || relatedProduct.id === product.id) return null;
              
              return (
                <Link 
                  key={relatedProduct.id} 
                  href={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow block"
                >
                  <div className="aspect-[4/3] relative bg-gradient-to-br from-emerald-100 to-amber-100 overflow-hidden">
                    {relatedProduct.images && relatedProduct.images.length > 0 ? (
                      <Image
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Package className="h-12 w-12 text-emerald-300" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900">{relatedProduct.name}</h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-emerald-700">{relatedProduct.moq}</span>
                      <span className="text-sm text-gray-500">{relatedProduct.category}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
