import Link from "next/link";
import { ArrowRight, Shield, CheckCircle, FileText, FlaskConical, Package, Award, ClipboardCheck } from "lucide-react";

export default function QualityPage() {
  const certifications = [
    {
      icon: Shield,
      title: "NAFDAC",
      subtitle: "National Agency for Food and Drug Administration and Control",
      description: "All food-grade products are registered and regulated by NAFDAC, ensuring compliance with Nigerian food safety standards.",
    },
    {
      icon: Award,
      title: "SON",
      subtitle: "Standards Organisation of Nigeria",
      description: "Our products meet SON quality standards, confirming adherence to Nigerian industrial specifications.",
    },
    {
      icon: FileText,
      title: "NEPC",
      subtitle: "Nigeria Export Promotion Council",
      description: "Registered and licensed exporter with NEPC",
    },
    {
      icon: ClipboardCheck,
      title: "CAC Registered",
      subtitle: "Corporate Affairs Commission",
      description: "Company Registration Number: 9107874",
    },
  ];

  const qualityProcess = [
    {
      step: "01",
      title: "Supplier Vetting",
      description: "We carefully select and evaluate our network of trusted farmers and processors based on their practices, capacity, and track record.",
    },
    {
      step: "02",
      title: "Raw Material Inspection",
      description: "All incoming products undergo thorough inspection for quality parameters including moisture content, purity, size grading, and visual inspection.",
    },
    {
      step: "03",
      title: "Laboratory Testing",
      description: "Samples are sent to accredited laboratories for comprehensive testing including microbiological analysis, heavy metals screening, and nutritional composition.",
    },
    {
      step: "04",
      title: "Processing & Grading",
      description: "Products are processed, cleaned, sorted, and graded according to international specifications and buyer requirements.",
    },
    {
      step: "05",
      title: "Packaging & Storage",
      description: "Products are packaged in food-grade materials and stored in clean, dry, temperature-controlled conditions to maintain quality.",
    },
    {
      step: "06",
      title: "Pre-Shipment Inspection",
      description: "Final quality check before loading, including sampling, sealing, and documentation verification for export compliance.",
    },
  ];

  const labTests = [
    { parameter: "Moisture Content", method: "AOAC 925.10", standard: "≤ 5% – 12% (varies by product)" },
    { parameter: "Purity / Admixture", method: "Visual / Mechanical Sorting", standard: "≥ 99% – 99.5%" },
    { parameter: "Foreign Matter", method: "AOAC 993.03", standard: "≤ 0.5% – 1%" },
    { parameter: "Aflatoxins (B1, B2, G1, G2)", method: "HPLC / ELISA", standard: "≤ 4 ppb (Total) / ≤ 2 ppb (B1)" },
    { parameter: "Pesticide Residues", method: "GC-MS / LC-MS/MS", standard: "Compliant with EU MRLs" },
    { parameter: "Heavy Metals (Pb, Cd, As, Hg)", method: "ICP-MS / AAS", standard: "Compliant with EU/USFDA limits" },
    { parameter: "Microbiological (Salmonella, E. coli)", method: "ISO 6579 / ISO 16649", standard: "Absent / Negative" },
    { parameter: "Oil Content (for oilseeds)", method: "Soxhlet Extraction", standard: "≥ 40% – 50%" },
    { parameter: "Volatile Oil (for spices)", method: "Steam Distillation", standard: "≥ 2% – 4%" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-emerald-700 to-amber-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Quality Assurance
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-emerald-50 max-w-prose">
              Our commitment to quality is unwavering. Every product we export undergoes rigorous testing and inspection to ensure it meets the highest international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Quality Control Process
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600 max-w-prose mx-auto">
              From farm to shipment, every step is monitored and controlled
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityProcess.map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl bg-gray-50 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <span className="text-4xl font-bold text-emerald-200">{item.step}</span>
                <h3 className="mt-2 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Certifications & Compliance
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600 max-w-prose mx-auto">
              Our products comply with Nigerian regulatory requirements and international standards
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <cert.icon className="h-10 w-10 text-emerald-600" />
                <h3 className="mt-4 text-lg font-bold text-gray-900">{cert.title}</h3>
                <p className="mt-1 text-sm font-medium text-emerald-600">{cert.subtitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Testing */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Laboratory Testing Parameters
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600 max-w-prose mx-auto">
              Our products are tested against international standards in accredited laboratories
            </p>
          </div>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-emerald-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Parameter</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Test Method</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Specification / Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {labTests.map((test, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{test.parameter}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{test.method}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{test.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-gray-500 italic">
            Testing parameters shown are indicative. Specific test results and certificates of analysis are provided with each shipment upon request.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Request Product Specifications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-emerald-100 max-w-prose mx-auto">
            Contact us for detailed product specifications, certificates of analysis, and samples.
          </p>
          <div className="mt-10">
            <Link
              href="/request-quote"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-base font-medium text-emerald-700 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Request Specifications
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
