"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Package, Globe, Upload, ArrowRight, CheckCircle, Truck, DollarSign, Send } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyQuoteForm = {
  product: "",
  variant: "",
  quantity: "",
  unit: "MT",
  incoterm: "FOB",
  destination: "",
  specifications: "",
  name: "",
  email: "",
  company: "",
  country: "",
};

export default function RequestQuotePage() {
  const [step, setStep] = useState(1);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState(emptyQuoteForm);
  const [step4Errors, setStep4Errors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (step4Errors[name]) {
      setStep4Errors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const validateStep4 = () => {
    const errs: Record<string, string> = {};
    if (formData.name.trim().length < 2) errs.name = "Full name must be at least 2 characters.";
    if (!EMAIL_RE.test(formData.email.trim())) errs.email = "Please enter a valid email address.";
    if (!formData.country.trim()) errs.country = "Country is required.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateStep4();
    if (Object.keys(errs).length > 0) {
      setStep4Errors(errs);
      return;
    }
    setSubmitSuccess(true);
    setStep(1);
    setFormData(emptyQuoteForm);
    setStep4Errors({});
    setTimeout(() => setSubmitSuccess(false), 8000);
  };

  const products = [
    "Cashew Nuts",
    "Cocoa Beans",
    "Sesame Seeds",
    "Shea Butter",
    "Hibiscus Flower (Zobo)",
    "Ginger",
    "Charcoal (Hardwood)",
    "Palm Kernel Shell",
    "Moringa",
    "Dried Split Ginger",
  ];

  const incoterms = [
    { value: "FOB", label: "FOB (Free On Board)" },
    { value: "CIF", label: "CIF (Cost, Insurance & Freight)" },
    { value: "CFR", label: "CFR (Cost & Freight)" },
    { value: "EXW", label: "EXW (Ex Works)" },
    { value: "DAP", label: "DAP (Delivered At Place)" },
  ];

  const units = [
    { value: "MT", label: "Metric Tons" },
    { value: "KG", label: "Kilograms" },
    { value: "LB", label: "Pounds" },
    { value: "Container", label: "Container Load" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-amber-50 py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500 text-white mb-6">
              <FileText className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Request a Quote
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Get competitive pricing for premium Nigerian agricultural products. 
              Fill out our multi-step form for accurate, customized quotations.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-white py-12 border-b">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step >= stepNumber ? 'bg-gradient-to-r from-emerald-500 to-amber-500 text-white' : 'bg-gray-100 text-gray-400'} font-bold text-lg`}>
                  {step > stepNumber ? <CheckCircle className="h-6 w-6" /> : stepNumber}
                </div>
                <span className="mt-2 text-sm font-medium text-gray-600">
                  {stepNumber === 1 && "Product Details"}
                  {stepNumber === 2 && "Quantity & Terms"}
                  {stepNumber === 3 && "Specifications"}
                  {stepNumber === 4 && "Contact Info"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {submitSuccess && (
            <div className="mb-8 p-6 bg-emerald-50 border border-emerald-200 rounded-xl" role="alert">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Send className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-emerald-800">Quote Request Received!</h3>
                  <p className="mt-1 text-sm text-emerald-700">
                    Thank you. Our export team will review your request and respond with a detailed quotation within 24 hours.
                    For urgent inquiries, call us at{" "}
                    <a href="tel:+2347040581036" className="font-medium underline">+234 704 058 1036</a>.
                  </p>
                </div>
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Product Details */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">Select Product</h2>
                  <p className="mt-2 text-gray-600">Choose the agricultural product you're interested in</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <div
                      key={product}
                      className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${formData.product === product ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-emerald-300'}`}
                      onClick={() => setFormData({ ...formData, product })}
                    >
                      <div className="flex items-center">
                        <Package className={`h-6 w-6 ${formData.product === product ? 'text-emerald-600' : 'text-gray-400'}`} />
                        <h3 className="ml-3 text-lg font-medium text-gray-900">{product}</h3>
                      </div>
                      {formData.product === product && (
                        <div className="mt-4 flex items-center text-emerald-600">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          <span className="text-sm font-medium">Selected</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Variant Selector — shown only for Hibiscus Flower */}
                {formData.product === "Hibiscus Flower (Zobo)" && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Select Variant</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      We offer two variants of hibiscus. Please select your preferred option:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div
                        className={`border-2 rounded-xl p-5 cursor-pointer transition-all ${
                          formData.variant === "Hibiscus Flower"
                            ? "border-emerald-500 bg-emerald-50"
                            : "border-gray-200 hover:border-emerald-300 bg-white"
                        }`}
                        onClick={() => setFormData({ ...formData, variant: "Hibiscus Flower" })}
                      >
                        <h4 className="font-bold text-gray-900">Hibiscus Flower</h4>
                        <p className="mt-1 text-sm text-gray-600">Whole dried calyces — ideal for tea blending, natural colorants, and premium extracts.</p>
                        {formData.variant === "Hibiscus Flower" && (
                          <div className="mt-3 flex items-center text-emerald-600">
                            <CheckCircle className="h-4 w-4 mr-1.5" />
                            <span className="text-sm font-medium">Selected</span>
                          </div>
                        )}
                      </div>
                      <div
                        className={`border-2 rounded-xl p-5 cursor-pointer transition-all ${
                          formData.variant === "Hibiscus Sifting"
                            ? "border-emerald-500 bg-emerald-50"
                            : "border-gray-200 hover:border-emerald-300 bg-white"
                        }`}
                        onClick={() => setFormData({ ...formData, variant: "Hibiscus Sifting" })}
                      >
                        <h4 className="font-bold text-gray-900">Hibiscus Sifting</h4>
                        <p className="mt-1 text-sm text-gray-600">Smaller pieces and fines — suitable for extracts, infusions, and cost-effective applications.</p>
                        {formData.variant === "Hibiscus Sifting" && (
                          <div className="mt-3 flex items-center text-emerald-600">
                            <CheckCircle className="h-4 w-4 mr-1.5" />
                            <span className="text-sm font-medium">Selected</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="pt-6 border-t">
                  <div className="flex justify-between">
                    <div></div>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.product || (formData.product === "Hibiscus Flower (Zobo)" && !formData.variant)}
                      className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-600 to-amber-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:from-emerald-700 hover:to-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Next: Quantity & Terms
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Quantity & Terms */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">Quantity & Shipping Terms</h2>
                  <p className="mt-2 text-gray-600">Specify your requirements and preferred Incoterms</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity
                    </label>
                    <div className="flex">
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="e.g., 20"
                        min="1"
                      />
                      <select
                        name="unit"
                        value={formData.unit}
                        onChange={handleChange}
                        className="px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      >
                        {units.map((unit) => (
                          <option key={unit.value} value={unit.value}>
                            {unit.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Destination Port/Country
                    </label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., Rotterdam, Netherlands"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Incoterm
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {incoterms.map((term) => (
                      <div
                        key={term.value}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${formData.incoterm === term.value ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-emerald-300'}`}
                        onClick={() => setFormData({ ...formData, incoterm: term.value })}
                      >
                        <div className="flex items-center">
                          <Truck className={`h-5 w-5 ${formData.incoterm === term.value ? 'text-emerald-600' : 'text-gray-400'}`} />
                          <span className="ml-2 font-medium text-gray-900">{term.value}</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">{term.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center rounded-full border border-gray-300 px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.quantity || !formData.destination}
                      className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-600 to-amber-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:from-emerald-700 hover:to-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Next: Specifications
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Specifications */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">Product Specifications</h2>
                  <p className="mt-2 text-gray-600">Provide any specific requirements or upload specifications</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requirements
                  </label>
                  <textarea
                    name="specifications"
                    value={formData.specifications}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g., Specific grade, moisture content, packaging requirements, quality standards..."
                  />
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Specifications (Optional)</h3>
                  <p className="text-gray-600 mb-4">Upload technical specifications, quality requirements, or sample analysis reports</p>
                  <button
                    type="button"
                    className="inline-flex items-center rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Choose File
                  </button>
                  <p className="mt-2 text-sm text-gray-500">PDF, DOC, or image files up to 10MB</p>
                </div>
                
                <div className="pt-6 border-t">
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center rounded-full border border-gray-300 px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-600 to-amber-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:from-emerald-700 hover:to-amber-700 transition-all"
                    >
                      Next: Contact Information
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Information</h2>
                  <p className="mt-2 text-gray-600">Provide your details for our quotation</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="q-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="q-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      aria-invalid={!!step4Errors.name}
                      className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${step4Errors.name ? "border-red-400 bg-red-50" : "border-gray-300"}`}
                      placeholder="John Smith"
                    />
                    {step4Errors.name && <p className="mt-1.5 text-sm text-red-600" role="alert">{step4Errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="q-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="q-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      aria-invalid={!!step4Errors.email}
                      className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${step4Errors.email ? "border-red-400 bg-red-50" : "border-gray-300"}`}
                      placeholder="john@company.com"
                    />
                    {step4Errors.email && <p className="mt-1.5 text-sm text-red-600" role="alert">{step4Errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="q-company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="q-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label htmlFor="q-country" className="block text-sm font-medium text-gray-700 mb-2">
                      Country <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="q-country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      autoComplete="country-name"
                      aria-invalid={!!step4Errors.country}
                      className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${step4Errors.country ? "border-red-400 bg-red-50" : "border-gray-300"}`}
                      placeholder="e.g., United States"
                    />
                    {step4Errors.country && <p className="mt-1.5 text-sm text-red-600" role="alert">{step4Errors.country}</p>}
                  </div>
                </div>
                
                {/* Summary */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Quote Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Product</p>
                      <p className="font-medium text-gray-900">
                        {formData.product || "Not selected"}
                        {formData.variant && ` — ${formData.variant}`}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Quantity</p>
                      <p className="font-medium text-gray-900">{formData.quantity ? `${formData.quantity} ${formData.unit}` : "Not specified"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Incoterm</p>
                      <p className="font-medium text-gray-900">{formData.incoterm}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Destination</p>
                      <p className="font-medium text-gray-900">{formData.destination || "Not specified"}</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center rounded-full border border-gray-300 px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.name || !formData.email || !formData.country}
                      className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-600 to-amber-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:from-emerald-700 hover:to-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Submit Quote Request
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Request a Quote Through Us</h2>
            <p className="mt-4 text-lg text-gray-600">Get the best value for your agricultural imports</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <DollarSign className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Competitive Pricing</h3>
              <p className="mt-2 text-gray-600">Direct sourcing from Nigerian farms ensures best market prices</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Logistics Expertise</h3>
              <p className="mt-2 text-gray-600">End-to-end shipping and documentation support</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Quality Guarantee</h3>
              <p className="mt-2 text-gray-600">All products meet international quality standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">Need Immediate Assistance?</h2>
          <p className="mt-4 text-lg text-emerald-100 max-w-3xl mx-auto">
            For urgent inquiries or to discuss large volume orders, contact our sales team directly.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-base font-medium text-emerald-700 shadow-lg hover:bg-gray-100 transition-colors"
            >
              Contact Sales Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
