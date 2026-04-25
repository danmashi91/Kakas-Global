import Link from "next/link";
import { ArrowRight, Shield, Globe, Truck, Users, Target, Eye, Heart, Award, Leaf } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain rigorous quality control standards across our entire supply chain, ensuring every product meets or exceeds international specifications.",
    },
    {
      icon: Heart,
      title: "Integrity & Trust",
      description: "Transparent dealings, honest communication, and reliable delivery form the foundation of every relationship we build.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We promote sustainable agricultural practices that protect the environment while supporting the livelihoods of farming communities.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "We invest in the communities we work with, supporting local farmers through fair trade practices and capacity building initiatives.",
    },
  ];

  const whyChoose = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Established relationships with buyers across 50+ countries, ensuring smooth international transactions and reliable market access.",
    },
    {
      icon: Truck,
      title: "End-to-End Service",
      description: "From sourcing and quality control to logistics and documentation, we handle every aspect of the export process.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-emerald-700 to-amber-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              About KAKAS GLOBAL LIMITED
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-emerald-50 max-w-prose">
              We connect Nigeria's rich agricultural resources with global markets, building a reputation for reliability, quality, and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="rounded-2xl bg-emerald-50 p-8 sm:p-10">
              <Target className="h-10 w-10 text-emerald-600" />
              <h2 className="mt-6 text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                To be a trusted bridge between Nigeria's agricultural resources and global markets, delivering quality products while creating value for farmers, clients, and communities.
              </p>
            </div>
            <div className="rounded-2xl bg-amber-50 p-8 sm:p-10">
              <Eye className="h-10 w-10 text-amber-600" />
              <h2 className="mt-6 text-2xl font-bold text-gray-900">Our Vision</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                To grow Nigeria's agricultural export capacity through reliable operations, strong partnerships, and ethical practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Core Values
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600 max-w-prose mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <value.icon className="h-8 w-8 text-emerald-600" />
                <h3 className="mt-4 text-lg font-bold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose KAKAS GLOBAL */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Why Choose KAKAS GLOBAL?
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600 max-w-prose mx-auto">
              What sets us apart in the agricultural export industry
            </p>
          </div>
          <div className="mt-12 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-gray-50 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <item.icon className="h-10 w-10 text-emerald-600" />
                <h3 className="mt-4 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Let's Work Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-emerald-100 max-w-prose mx-auto">
            Ready to start a partnership? Contact our team to discuss your requirements.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-base font-medium text-emerald-700 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
