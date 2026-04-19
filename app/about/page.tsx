import Image from "next/image";
import Link from "next/link";
import { Target, Users, Globe, Award, Clock, TrendingUp } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    { name: "Hauwa Baba Duna", role: "CEO & Founder", bio: "Visionary leader with extensive experience in agricultural trade and business development" },
    { name: "Abdallah Baba Duna", role: "Export Operations Director", bio: "Expert in international logistics, shipping, and export documentation" },
    { name: "Chinedu Okoro", role: "Client Relations Manager", bio: "15 years experience in international trade and customer service" },
    { name: "Fatima Ibrahim", role: "Multilingual Trade Specialist", bio: "Fluent in English, French, and Arabic for global client communication" },
  ];

  const milestones = [
    { year: "2010", title: "Company Founded", description: "Started as a local agricultural trader" },
    { year: "2013", title: "First International Export", description: "Exported first container to Europe" },
    { year: "2016", title: "Quality Certifications", description: "Obtained NAFDAC and SON certifications" },
    { year: "2019", title: "Expansion", description: "Added 5 new product lines and expanded to Asia" },
    { year: "2022", title: "Sustainability Initiative", description: "Launched ethical sourcing program" },
    { year: "2024", title: "Digital Transformation", description: "Implemented end-to-end digital tracking" },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Integrity",
      description: "Honest and transparent dealings with all stakeholders"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality",
      description: "Uncompromising commitment to product excellence"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Partnership",
      description: "Building long-term relationships with clients and farmers"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Sustainability",
      description: "Ethical sourcing and environmental responsibility"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-amber-50 py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              About KAKAS GLOBAL
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              For over 15 years, we have been connecting Nigeria's rich agricultural resources 
              with global markets, building a reputation for reliability, quality, and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 text-white">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10" />
                <h2 className="ml-4 text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg">
                To be the most trusted bridge between Nigeria's agricultural potential and global markets, 
                delivering premium quality products while creating sustainable value for farmers, clients, 
                and communities.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 p-8 text-white">
              <div className="flex items-center mb-6">
                <Globe className="h-10 w-10" />
                <h2 className="ml-4 text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg">
                To transform Nigeria's agricultural export landscape through innovation, technology, 
                and ethical practices, becoming Africa's leading agricultural export company by 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Journey</h2>
            <p className="mt-4 text-lg text-gray-600">From humble beginnings to international recognition</p>
          </div>
          
          <div className="relative">
            {/* Timeline */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex items-start">
                  <div className="flex-shrink-0 w-24">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500 text-white font-bold text-xl">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="ml-8">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                      <p className="mt-2 text-gray-600">{milestone.description}</p>
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 to-amber-300"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-emerald-100 to-amber-100 text-emerald-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Leadership Team</h2>
            <p className="mt-4 text-lg text-gray-600">Experienced professionals dedicated to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-emerald-100 to-amber-100"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-emerald-600 font-medium">{member.role}</p>
                  <p className="mt-2 text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose KAKAS GLOBAL?</h2>
            <p className="mt-4 text-lg text-emerald-100">What sets us apart in the agricultural export industry</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8" />
                <h3 className="ml-4 text-xl font-bold">15+ Years Experience</h3>
              </div>
              <p>Deep understanding of Nigerian agriculture and international trade regulations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8" />
                <h3 className="ml-4 text-xl font-bold">Global Network</h3>
              </div>
              <p>Established relationships with buyers in 50+ countries worldwide</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8" />
                <h3 className="ml-4 text-xl font-bold">End-to-End Service</h3>
              </div>
              <p>From sourcing to shipping, we handle every aspect of the export process</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-base font-medium text-emerald-700 shadow-lg hover:bg-gray-100 transition-colors"
            >
              Partner With Us
              <Globe className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}