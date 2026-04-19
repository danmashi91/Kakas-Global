import Link from "next/link";
import { CheckCircle, Shield, Microscope, FileCheck, Globe, Award, Target, ArrowRight } from "lucide-react";

export default function QualityPage() {
  const qualityStages = [
    {
      stage: 1,
      title: "Processing & Cleaning",
      description: "Modern processing facilities with hygiene protocols",
      checks: ["Mechanical cleaning", "Grading by size", "Color sorting", "Foreign material removal"]
    },
    {
      stage: 2,
      title: "Laboratory Testing",
      description: "Comprehensive testing in accredited laboratories",
      checks: ["Microbiological analysis", "Chemical residue testing", "Aflatoxin screening", "Nutritional analysis"]
    },
    {
      stage: 3,
      title: "Packaging & Storage",
      description: "Hygienic packaging and controlled storage conditions",
      checks: ["Food-grade packaging", "Moisture barrier bags", "Temperature control", "Pest control"]
    },
    {
      stage: 4,
      title: "Final Inspection & Documentation",
      description: "Pre-shipment inspection and complete documentation",
      checks: ["Random sampling", "Weight verification", "Labeling accuracy", "Export documentation"]
    }
  ];

  const certifications = [
    {
      name: "NAFDAC",
      description: "National Agency for Food and Drug Administration and Control",
      scope: "Food safety and quality standards in Nigeria"
    },
    {
      name: "SON",
      description: "Standards Organization of Nigeria",
      scope: "Product quality and standardization"
    },
    {
      name: "ISO 22000",
      description: "Food Safety Management System",
      scope: "International food safety standards"
    },
    {
      name: "HACCP",
      description: "Hazard Analysis Critical Control Points",
      scope: "Systematic preventive approach to food safety"
    },
    {
      name: "EU Compliant",
      description: "European Union Import Requirements",
      scope: "Compliance with EU food safety regulations"
    },
    {
      name: "FDA Standards",
      description: "US Food and Drug Administration",
      scope: "Compliance with US import requirements"
    }
  ];

  const testingParameters = [
    { parameter: "Moisture Content", standard: "≤ 10%", method: "Oven drying method" },
    { parameter: "Aflatoxin B1", standard: "≤ 5 ppb", method: "HPLC analysis" },
    { parameter: "Foreign Matter", standard: "≤ 1%", method: "Visual inspection" },
    { parameter: "Pesticide Residues", standard: "Below MRL", method: "GC-MS analysis" },
    { parameter: "Microbial Count", standard: "Within limits", method: "Plate count method" },
    { parameter: "Heavy Metals", standard: "Below limits", method: "AAS analysis" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-amber-50 py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500 text-white mb-6">
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Quality Assurance & Compliance
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Our commitment to quality is unwavering. Every product undergoes rigorous testing and 
              inspection to meet international standards and ensure customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our 4-Stage Quality Process</h2>
            <p className="mt-4 text-lg text-gray-600">From processing to shipment, quality is monitored at every step</p>
          </div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="space-y-12">
              {qualityStages.map((stage) => (
                <div key={stage.stage} className="relative flex flex-col lg:flex-row items-start">
                  <div className="lg:w-1/4 mb-6 lg:mb-0">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500 text-white font-bold text-xl">
                        {stage.stage}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-900">{stage.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{stage.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-3/4">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {stage.checks.map((check, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{check}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {stage.stage < qualityStages.length && (
                    <div className="hidden lg:block absolute left-1/4 top-16 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 to-amber-300 transform -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Certifications & Compliance</h2>
            <p className="mt-4 text-lg text-gray-600">Meeting international standards for global market access</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-emerald-600" />
                  <h3 className="ml-4 text-xl font-bold text-gray-900">{cert.name}</h3>
                </div>
                <p className="text-gray-700 mb-3">{cert.description}</p>
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{cert.scope}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Parameters */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
              <Microscope className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Laboratory Testing Parameters</h2>
            <p className="mt-4 text-lg text-gray-600">Comprehensive testing to ensure product safety and quality</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Testing Parameter
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Standard Limit
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Testing Method
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Compliance
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {testingParameters.map((test) => (
                  <tr key={test.parameter} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{test.parameter}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{test.standard}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{test.method}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Compliant
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-xl p-8">
            <div className="flex items-center">
              <FileCheck className="h-10 w-10 text-emerald-600" />
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900">Quality Documentation</h3>
                <p className="mt-2 text-gray-700">
                  Each shipment includes comprehensive quality certificates: Certificate of Analysis, 
                  Test Reports, and Compliance Certificates. We maintain traceability from farm to final destination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
              <Shield className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Our Quality Commitment</h2>
            <p className="mt-4 text-lg text-emerald-100 max-w-3xl mx-auto">
              We guarantee that every product meets or exceeds international quality standards. 
              Our quality assurance process is transparent, documented, and continuously improved.
            </p>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Zero Tolerance</h3>
                <p className="mt-2 text-emerald-100">Zero tolerance for quality deviations or safety issues</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Global Standards</h3>
                <p className="mt-2 text-emerald-100">Compliance with destination country regulations</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Continuous Improvement</h3>
                <p className="mt-2 text-emerald-100">Regular audits and process optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Request Quality Certificates</h2>
            <p className="mt-4 text-lg text-gray-600">
              Need specific quality certificates or test reports for your import requirements? 
              Contact our quality team for detailed documentation.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-600 to-amber-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:from-emerald-700 hover:to-amber-700 transition-all"
              >
                Request Quality Documents
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="mt-8">
              <Link
                href="/products"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
              >
                View our certified products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}