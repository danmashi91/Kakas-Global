"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter, Package, Scale, Globe, Download, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { products, categories, Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Auto-rotate images when hovered
  useEffect(() => {
    if (!isHovered || !product.images || product.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.images!.length);
    }, 3000); // Change image every 3 seconds
    
    return () => clearInterval(interval);
  }, [isHovered, product.images]);
  
  const goToNextImage = () => {
    if (!product.images || product.images.length <= 1) return;
    setCurrentImageIndex((prev) => (prev + 1) % product.images!.length);
  };
  
  const goToPrevImage = () => {
    if (!product.images || product.images.length <= 1) return;
    setCurrentImageIndex((prev) => (prev - 1 + product.images!.length) % product.images!.length);
  };
  
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-amber-100 relative overflow-hidden group">
        {product.images && product.images.length > 0 ? (
          <>
            <Image
              src={product.images[currentImageIndex]}
              alt={`${product.name} – Nigerian agricultural export`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            
            {/* Image navigation arrows (show on hover) */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    goToPrevImage();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4 text-gray-700" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    goToNextImage();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4 text-gray-700" />
                </button>
              </>
            )}
            
            {/* Image indicators (show on hover) */}
            {product.images.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      goToImage(index);
                    }}
                    className={`h-2 w-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
            
            {/* Image counter */}
            {product.images.length > 1 && (
              <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded-full text-xs">
                {currentImageIndex + 1} / {product.images.length}
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Package className="h-16 w-16 text-emerald-300" />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-emerald-700">
            {product.category.toUpperCase()}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <Link href={`/products/${product.id}`}>
              <h3 className="text-xl font-bold text-gray-900 hover:text-emerald-600 transition-colors">{product.name}</h3>
            </Link>
            <p className="mt-2 text-gray-600 line-clamp-2">{product.description}</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <div className="flex items-center text-sm text-gray-500">
              <Package className="h-4 w-4 mr-2" />
              <span className="font-medium">Available Forms:</span>
            </div>
            <div className="mt-1 flex flex-wrap gap-2">
              {product.forms.map((form) => (
                <span key={form} className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                  {form}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center text-sm text-gray-500">
              <Scale className="h-4 w-4 mr-2" />
              <span className="font-medium">Packaging:</span>
            </div>
            <div className="mt-1 flex flex-wrap gap-2">
              {product.packaging.map((pkg) => (
                <span key={pkg} className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                  {pkg}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <div className="text-sm text-gray-500">MOQ</div>
              <div className="font-medium text-gray-900">{product.moq}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Season</div>
              <div className="font-medium text-gray-900">{product.season}</div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <div className="text-sm text-gray-500 mb-2">Certifications</div>
            <div className="flex flex-wrap gap-1">
              {product.certifications.map((cert) => (
                <span key={cert} className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Link
            href={`/request-quote?product=${encodeURIComponent(product.name)}`}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-600 to-amber-600 px-6 py-2 text-sm font-medium text-white hover:from-emerald-700 hover:to-amber-700 transition-all"
          >
            Request Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}`}
            className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700"
          >
            <Download className="h-4 w-4 mr-1" aria-hidden="true" />
            Request Specs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-amber-50 py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Our Agricultural Products
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              Premium quality agricultural raw materials sourced directly from Nigerian farms,
              processed to international standards, and exported worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-white py-8 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                aria-label="Search agricultural products"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" aria-hidden="true" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Products Grid */}
       <section className="bg-gray-50 py-20">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {filteredProducts.map((product) => (
               <ProductCard key={product.id} product={product} />
             ))}
           </div>
           
           {filteredProducts.length === 0 && (
             <div className="text-center py-12">
               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                 <Search className="h-8 w-8 text-gray-400" />
               </div>
               <h3 className="text-lg font-medium text-gray-900">No products found</h3>
               <p className="mt-2 text-gray-600">Try adjusting your search or filter criteria</p>
               <button
                 onClick={() => {
                   setSearchTerm("");
                   setSelectedCategory("all");
                 }}
                 className="mt-4 inline-flex items-center text-emerald-600 hover:text-emerald-700"
               >
                 Clear all filters
               </button>
             </div>
           )}
         </div>
       </section>

      {/* Bulk Inquiry CTA */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
              <Globe className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Bulk Order Inquiry</h2>
            <p className="mt-4 text-lg text-emerald-100 max-w-3xl mx-auto">
              For large volume orders, custom product specifications, or long-term supply contracts, 
              our export team will provide you with competitive pricing and comprehensive support.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-white px-8 py-3 text-base font-medium text-emerald-700 shadow-lg hover:bg-gray-100 transition-colors"
              >
                Contact for Bulk Orders
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Product Specifications & Standards</h2>
            <p className="mt-4 text-lg text-gray-600">All our products meet international quality standards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <Scale className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Quality Parameters</h3>
              <p className="mt-2 text-gray-600">
                Moisture content, purity, size grading, color, and other quality parameters are strictly monitored.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-4">
                <Package className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Packaging Options</h3>
              <p className="mt-2 text-gray-600">
                Custom packaging available including vacuum packing, moisture barrier bags, and branded packaging.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Export Documentation</h3>
              <p className="mt-2 text-gray-600">
                Complete export documentation including certificates of origin, phytosanitary certificates, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
