"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Package, Scale, Globe, Calendar, CheckCircle, Download, Phone, Mail, Truck } from "lucide-react";
import { getProductById, Product } from "@/data/products";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = getProductById(parseInt(id));

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
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3">
              <Link
                href="/products"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Products
              </Link>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                  {product.category.toUpperCase()}
                </span>
                {product.origin && (
                  <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
                    {product.origin}
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-lg text-gray-600">{product.description}</p>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
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
            </div>

            <div className="lg:w-1/3 w-full">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Request Quote</h3>
                <p className="text-gray-600 mb-6">
                  Get a customized quote for {product.name} including pricing, shipping, and documentation.
                </p>
                <Link
                  href={`/request-quote?product=${encodeURIComponent(product.name)}`}
                  className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-amber-600 px-6 py-3 text-base font-medium text-white hover:from-emerald-700 hover:to-amber-700 transition-all"
                >
                  Request Quote
                </Link>
                <div className="mt-6 space-y-3">
                  <button className="w-full inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">
                    <Download className="h-5 w-5 mr-2" />
                    Download Spec Sheet
                  </button>
                  <button className="w-full inline-flex items-center justify-center rounded-lg border border-emerald-300 px-6 py-3 text-base font-medium text-emerald-700 hover:bg-emerald-50">
                    <Phone className="h-5 w-5 mr-2" />
                    Call for Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
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
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
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
                    <div key={index} className="bg-amber-50 rounded-lg p-4">
                      <div className="font-medium text-amber-900">{pkg}</div>
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
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
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
              <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-6">
                <div className="flex items-center mb-6">
                  <Truck className="h-6 w-6 text-emerald-700 mr-3" />
                  <h3 className="text-xl font-bold text-emerald-900">Export Information</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-emerald-700 font-medium">Shipping Terms</div>
                    <div className="text-gray-700">FOB, CIF, CFR available</div>
                  </div>
                  <div>
                    <div className="text-sm text-emerald-700 font-medium">Payment Terms</div>
                    <div className="text-gray-700">LC, TT, Advance Payment</div>
                  </div>
                  <div>
                    <div className="text-sm text-emerald-700 font-medium">Documentation</div>
                    <div className="text-gray-700">Complete export documentation provided</div>
                  </div>
                </div>
              </div>

              {/* Contact for Samples */}
              <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
                <div className="flex items-center mb-6">
                  <Mail className="h-6 w-6 text-amber-700 mr-3" />
                  <h3 className="text-xl font-bold text-amber-900">Request Samples</h3>
                </div>
                <p className="text-amber-800 mb-4">
                  Available for qualified buyers. Contact us to request product samples.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700"
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
              const relatedId = (product.id + offset) % 12 || 12;
              const relatedProduct = getProductById(relatedId);
              if (!relatedProduct || relatedProduct.id === product.id) return null;
              
              return (
                <div key={relatedProduct.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-amber-100"></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900">{relatedProduct.name}</h3>
                    <p className="mt-2 text-gray-600 line-clamp-2">{relatedProduct.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-500">{relatedProduct.moq}</span>
                      <Link
                        href={`/products/${relatedProduct.id}`}
                        className="text-emerald-600 hover:text-emerald-700 font-medium"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Order {product.name}?</h2>
            <p className="mt-4 text-lg text-emerald-100 max-w-3xl mx-auto">
              Contact our export team for competitive pricing, samples, and comprehensive export support.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/request-quote?product=${encodeURIComponent(product.name)}`}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-emerald-700 shadow-lg hover:bg-gray-100 transition-colors"
              >
                Request Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}