"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Globe, Building, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    product: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      country: "",
      product: "",
      message: "",
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
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
    "Other Product",
  ];

  const countries = [
    "United States",
    "United Kingdom",
    "Germany",
    "France",
    "Netherlands",
    "Spain",
    "Italy",
    "China",
    "India",
    "Japan",
    "South Korea",
    "United Arab Emirates",
    "Saudi Arabia",
    "South Africa",
    "Other Country",
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@kakasglobal.com", "sales@kakasglobal.com"],
      description: "For general inquiries and sales"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+234 704 058 1036", "+234 903 834 3464"],
      description: "Available Monday-Friday, 9AM-5PM WAT"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office Address",
      details: ["44 Ahmadu Bello Way", "Nasarawa GRA", "Kano, Nigeria"],
      description: "Our headquarters in Kano"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
      description: "West Africa Time (WAT)"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-amber-50 py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Get in touch with our export team for product inquiries, pricing, or partnership opportunities. 
              We're here to help you source premium Nigerian agricultural products.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Send Us a Message</h2>
                <p className="mt-2 text-gray-600">Fill out the form below and our team will respond within 24 hours.</p>
              </div>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Send className="h-4 w-4 text-emerald-600" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-emerald-800">Message Sent Successfully!</h3>
                      <p className="mt-1 text-sm text-emerald-700">
                        Thank you for contacting KAKAS GLOBAL. Our export team will get back to you shortly.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="">Select your country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                    Product of Interest *
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select a product</option>
                    {products.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Tell us about your requirements, quantity needed, timeline, and any specific quality standards..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-amber-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:from-emerald-700 hover:to-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-sm text-gray-500">
                    By submitting this form, you agree to our Privacy Policy and consent to being contacted by our export team.
                  </p>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
                <p className="mt-2 text-gray-600">Multiple ways to connect with our export specialists.</p>
              </div>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-emerald-100 to-amber-100 flex items-center justify-center text-emerald-600">
                        {info.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">{info.title}</h3>
                      <div className="mt-1 space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700">{detail}</p>
                        ))}
                      </div>
                      <p className="mt-2 text-sm text-gray-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-xl p-6 mb-8">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-8 w-8 text-emerald-600" />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">WhatsApp Quick Chat</h3>
                    <p className="text-gray-600">Preferred by international buyers for instant communication</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/2347040581036?text=Hello%20KAKAS%20GLOBAL%2C%20I'm%20interested%20in%20your%20agricultural%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-emerald-600" />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">Our Location</h3>
                    <p className="text-gray-600">Kano, Nigeria - Northern Nigeria's commercial hub</p>
                  </div>
                </div>
                <div className="aspect-[16/9] bg-gradient-to-br from-emerald-100 to-amber-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Building className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <p className="text-gray-700 font-medium">Nasarawa GRA, Kano</p>
                    <p className="text-gray-600">Google Maps integration available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact the Right Department</h2>
            <p className="mt-4 text-lg text-gray-600">Connect with the appropriate team for faster response</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sales & Inquiries</h3>
              <p className="mt-2 text-gray-600">For product information, pricing, and quotations</p>
              <p className="mt-4 font-medium text-emerald-600">sales@kakasglobal.com</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-4">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Partnerships</h3>
              <p className="mt-2 text-gray-600">For distributor, agent, and partnership opportunities</p>
              <p className="mt-4 font-medium text-emerald-600">partners@kakasglobal.com</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Customer Support</h3>
              <p className="mt-2 text-gray-600">For existing orders, shipping updates, and support</p>
              <p className="mt-4 font-medium text-emerald-600">support@kakasglobal.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Ready to Start Your Export Journey?</h2>
          <p className="mt-4 text-lg text-emerald-100 max-w-3xl mx-auto">
            Whether you're looking for a reliable supplier, need custom product specifications, 
            or want to discuss long-term partnership opportunities, we're here to help.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-emerald-700 shadow-lg hover:bg-gray-100 transition-colors"
            >
              View Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-white/20 px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-white/30 transition-colors"
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
