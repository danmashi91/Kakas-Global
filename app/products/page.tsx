"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, Package, Scale, Globe, Download, ArrowRight } from "lucide-react";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Cashew Nuts",
      category: "nuts",
      description: "Premium quality raw and processed cashew nuts from Nigeria's finest farms.",
      forms: ["Raw", "Processed", "Roasted", "Salted"],
      packaging: ["25kg bags", "50kg bags", "Custom packaging"],
      moq: "5 MT",
      season: "Year-round",
      certifications: ["NAFDAC", "SON", "EU Compliant", "FDA"],
    },
    {
      id: 2,
      name: "Cocoa Beans",
      category: "beans",
      description: "Fermented and dried cocoa beans with excellent flavor profiles for chocolate production.",
      forms: ["Fermented", "Unfermented", "Cocoa Powder", "Cocoa Butter"],
      packaging: ["60kg jute bags", "Big bags", "Custom packaging"],
      moq: "10 MT",
      season: "Main: Oct-Mar, Mid: May-Aug",
      certifications: ["UTZ", "Rainforest", "Organic", "EU Compliant"],
    },
    {
      id: 3,
      name: "Sesame Seeds",
      category: "seeds",
      description: "High-oil content sesame seeds, hulled and natural, perfect for oil extraction and food processing.",
      forms: ["Natural", "Hulled", "Toasted", "Black Sesame"],
      packaging: ["25kg PP bags", "50kg bags", "Bulk containers"],
      moq: "10 MT",
      season: "Nov-Feb",
      certifications: ["NAFDAC", "SON", "HACCP", "ISO 22000"],
    },
    {
      id: 4,
      name: "Shea Butter",
      category: "oils",
      description: "Unrefined shea butter with high vitamin content, ideal for cosmetics and food industries.",
      forms: ["Raw", "Refined", "Organic", "Fractionated"],
      packaging: ["25kg drums", "180kg drums", "Custom packaging"],
      moq: "2 MT",
      season: "Jun-Sep",
      certifications: ["USDA Organic", "Fair Trade", "GMP", "ISO 22716"],
    },
    {
      id: 5,
      name: "Hibiscus Flower (Zobo)",
      category: "herbs",
      description: "Dried hibiscus flowers for herbal tea, beverages, and natural food coloring.",
      forms: ["Whole Dried", "Powder", "Extract", "Tea Bags"],
      packaging: ["20kg bags", "25kg cartons", "Custom packaging"],
      moq: "5 MT",
      season: "Dec-Mar",
      certifications: ["Organic", "Kosher", "Halal", "FDA"],
    },
    {
      id: 6,
      name: "Ginger",
      category: "spices",
      description: "Fresh and dried ginger with high gingerol content, suitable for food and pharmaceutical use.",
      forms: ["Fresh", "Dried", "Powder", "Oil"],
      packaging: ["15kg mesh bags", "25kg bags", "Custom packaging"],
      moq: "10 MT",
      season: "Year-round",
      certifications: ["NAFDAC", "SON", "EU Compliant", "FDA"],
    },
    {
      id: 7,
      name: "Charcoal (Hardwood)",
      category: "other",
      description: "Premium hardwood charcoal with high calorific value and long burning time.",
      forms: ["Lump Charcoal", "Briquettes", "Activated Carbon"],
      packaging: ["10kg bags", "25kg bags", "Bulk"],
      moq: "20 MT",
      season: "Year-round",
      certifications: ["FSC", "Sustainable Sourcing", "Quality Certified"],
    },
    {
      id: 8,
      name: "Palm Kernel Shell",
      category: "other",
      description: "Biomass fuel with high calorific value, ideal for power generation and industrial heating.",
      forms: ["Crushed", "Whole", "Powder"],
      packaging: ["Bulk", "Big bags", "Container load"],
      moq: "50 MT",
      season: "Year-round",
      certifications: ["Sustainable Sourcing", "Quality Certified"],
    },
    {
      id: 9,
      name: "Moringa",
      category: "herbs",
      description: "Moringa leaves and powder with high nutritional value for food supplements and cosmetics.",
      forms: ["Leaves", "Powder", "Oil", "Capsules"],
      packaging: ["1kg bags", "25kg bags", "Custom packaging"],
      moq: "1 MT",
      season: "Year-round",
      certifications: ["Organic", "GMP", "FDA", "EU Compliant"],
    },
    {
      id: 10,
      name: "Dried Split Ginger",
      category: "spices",
      description: "Sun-dried split ginger pieces with concentrated flavor for spice blends and extracts.",
      forms: ["Split Pieces", "Powder", "Granules"],
      packaging: ["20kg bags", "25kg cartons", "Custom packaging"],
      moq: "5 MT",
      season: "Year-round",
      certifications: ["NAFDAC", "SON", "HACCP", "ISO 22000"],
    },
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "nuts", name: "Nuts" },
    { id: "beans", name: "Beans" },
    { id: "seeds", name: "Seeds" },
    { id: "oils", name: "Oils & Butter" },
    { id: "herbs", name: "Herbs & Tea" },
    { id: "spices", name: "Spices" },
    { id: "other", name: "Other Products" },
  ];

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
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
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
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-amber-100 relative">
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-emerald-700">
                      {product.category.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <p className="mt-2 text-gray-600">{product.description}</p>
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
                    <button className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700">
                      <Download className="h-4 w-4 mr-1" />
                      Spec Sheet
                    </button>
                  </div>
                </div>
              </div>
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