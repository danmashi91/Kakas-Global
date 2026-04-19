import type { Metadata } from "next";
import Link from "next/link";
import { Search, CheckCircle, Truck, Package, FileText, Globe, Shield, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Export Services | Kakas Global Limited",
  description: "End-to-end agricultural export services: sourcing, quality control, logistics, custom packaging, documentation, and market intelligence. FOB, CIF, CFR, and EXW terms available.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Sourcing & Procurement",
      description: "We identify and partner with the best farms and cooperatives across Nigeria to source premium quality agricultural products.",
      features: [
        "Direct farmer relationships",
        "Quality assessment at source",
        "Competitive pricing",
        "Sustainable sourcing practices"
      ]
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Quality Control & Inspection",
      description: "Comprehensive quality assurance at every stage from farm to shipment to ensure international standards compliance.",
      features: [
        "Laboratory testing",
        "Moisture content analysis",
        "Purity and grading",
        "Microbiological testing"
      ]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logistics & Shipping",
      description: "End-to-end logistics management including inland transportation, port handling, and international shipping.",
      features: [
        "FOB, CIF, CFR terms",
        "Container loading",
        "Cold chain logistics",
        "Real-time tracking"
      ]
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Custom Packaging & Labeling",
      description: "Tailored packaging solutions to meet specific client requirements and destination market regulations.",
      features: [
        "Branded packaging",
        "Moisture barrier bags",
        "Vacuum packing",
        "Custom labeling"
      ]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Documentation & Compliance",
      description: "Complete export documentation and regulatory compliance for smooth customs clearance worldwide.",
      features: [
        "Certificate of Origin",
        "Phytosanitary Certificate",
        "Commercial Invoice",
        "Packing List"
      ]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Market Intelligence",
      description: "Regular market updates, price trends, and harvest season information to help clients make informed decisions.",
      features: [
        "Price monitoring",
        "Market reports",
        "Seasonal availability",
        "Trade regulations"
      ]
    }
  ];

  const incoterms = [
    {
      term: "FOB (Free On Board)",
      description: "We deliver goods on board the vessel at the port of shipment. Buyer bears all costs and risks from that point.",
      bestFor: "Experienced importers with established logistics"
    },
    {
      term: "CIF (Cost, Insurance & Freight)",
      description: "We pay costs and freight to bring goods to port of destination, including marine insurance.",
      bestFor: "First-time importers or those wanting simplified logistics"
    },
    {
      term: "CFR (Cost & Freight)",
      description: "We pay costs and freight to bring goods to port of destination, but buyer arranges insurance.",
      bestFor: "Importers who prefer to arrange their own insurance"
    },
    {
      term: "EXW (Ex Works)",
      description: "Buyer collects goods from our warehouse and handles all transportation and export formalities.",
      bestFor: "Buyers with strong logistics capabilities in Nigeria"
    }
  ];

  const exportProcess = [
    { step: 1, title: "Inquiry & Quotation", description: "Client submits inquiry, we provide detailed quotation" },
    { step: 2, title: "Order Confirmation", description: "Client confirms order, we prepare proforma invoice" },
    { step: 3, title: "Payment & Documentation", description: "Payment received, export documents prepared" },
    { step: 4, title: "Sourcing & Processing", description: "Products sourced, processed, and quality checked" },
    { step: 5, title: "Packaging & Loading", description: "Custom packaging, container loading, sealing" },
    { step: 6, title: "Shipping & Tracking", description: "Shipment dispatched, tracking provided to client" },
    { step: 7, title: "Arrival & Clearance", description: "Goods arrive, customs clearance at destination" },
    { step: 8, title: "Delivery & Feedback", description: "Final delivery to client, feedback collection" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-amber-50 py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Comprehensive Export Services
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              From sourcing to delivery, we provide end-to-end export solutions that ensure quality,
              compliance, and reliability for international buyers of Nigerian agricultural products.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Export Services</h2>
            <p className="mt-4 text-lg text-gray-600">Complete solutions for international agricultural trade</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-xl transition-all duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-emerald-100 to-amber-100 text-emerald-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Export Process</h2>
            <p className="mt-4 text-lg text-gray-600">A streamlined 8-step process for seamless international trade</p>
          </div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {exportProcess.map((process) => (
                <div key={process.step} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500 text-white font-bold">
                        {process.step}
                      </div>
                      <h3 className="ml-4 text-lg font-bold text-gray-900">{process.title}</h3>
                    </div>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                  {process.step < exportProcess.length && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-6 h-0.5 bg-gradient-to-r from-emerald-300 to-amber-300 transform translate-x-3"></div>
                  )}
                  {process.step === 4 && (
                    <div className="hidden lg:block absolute top-full left-1/2 w-0.5 h-6 bg-gradient-to-b from-emerald-300 to-amber-300 transform -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Process Flow Arrows */}
            <div className="hidden lg:block">
              <div className="absolute top-1/4 right-1/4 w-1/4 h-0.5 bg-gradient-to-r from-emerald-300 to-amber-300"></div>
              <div className="absolute top-1/4 right-3/4 w-1/4 h-0.5 bg-gradient-to-r from-emerald-300 to-amber-300"></div>
              <div className="absolute top-3/4 left-1/4 w-1/4 h-0.5 bg-gradient-to-r from-emerald-300 to-amber-300"></div>
              <div className="absolute top-3/4 left-3/4 w-1/4 h-0.5 bg-gradient-to-r from-emerald-300 to-amber-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Incoterms */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Incoterms 2020</h2>
            <p className="mt-4 text-lg text-gray-600">Understanding international commercial terms for smooth transactions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {incoterms.map((incoterm) => (
              <div key={incoterm.term} className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-emerald-600" />
                  <h3 className="ml-3 text-xl font-bold text-gray-900">{incoterm.term}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{incoterm.description}</p>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium text-gray-600">Best for:</span>
                    <p className="text-sm text-gray-700">{incoterm.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-emerald-100 to-amber-100 rounded-xl p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-emerald-600" />
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">Need Help Choosing?</h3>
                <p className="text-gray-700">
                  Our export specialists can recommend the most suitable Incoterm based on your location, 
                  experience, and specific requirements.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Consult with our export team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation & Compliance */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Export Documentation</h2>
            <p className="mt-4 text-lg text-gray-600">Complete documentation package for hassle-free customs clearance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-900">Commercial Invoice</h3>
              <p className="mt-2 text-sm text-gray-600">Detailed invoice with product description, value, and terms</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-900">Packing List</h3>
              <p className="mt-2 text-sm text-gray-600">Detailed list of contents, weights, and packaging details</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-900">Certificate of Origin</h3>
              <p className="mt-2 text-sm text-gray-600">Official document certifying Nigerian origin of goods</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-900">Phytosanitary Certificate</h3>
              <p className="mt-2 text-sm text-gray-600">Health certificate for plant-based products</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Additional documents available: Bill of Lading, Insurance Certificate, NAFDAC Export Certificate, 
              SONCAP Certificate, Fumigation Certificate, and more as required by destination country.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
            <Globe className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Ready to Export with Confidence?</h2>
          <p className="mt-4 text-lg text-emerald-100 max-w-3xl mx-auto">
            Let our experienced export team handle all the complexities while you focus on your business. 
            From documentation to delivery, we ensure a smooth and reliable export process.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-emerald-700 shadow-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Export Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              Request Export Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}