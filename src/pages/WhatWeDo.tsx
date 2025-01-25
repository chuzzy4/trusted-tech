import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  Book,
  Globe,
  Users,
  Cog,
  FileText,
  Rocket,
  Wrench,
} from "lucide-react";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-opacity-10 bg-white"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-nouvelr animate-fade-in-down">
            What We Do
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-aeonik animate-fade-in-up">
            At TT, we are committed to helping organizations navigate the
            complexities of trust, safety, and user engagement in the digital
            world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Safety Audit */}
            <div className="p-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border border-purple-200">
              <Shield className="w-12 h-12 text-purple-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4 text-center font-nouvelr text-purple-800">
                Safety Audit
              </h3>
              <p className="text-gray-700 text-center font-aeonik">
                We evaluate online risks and help integrate safety by design
                into your products and services.
              </p>
            </div>

            {/* Policy Development */}
            <div className="p-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border border-blue-200">
              <Book className="w-12 h-12 text-blue-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4 text-center font-nouvelr text-blue-800">
                Policy Development
              </h3>
              <p className="text-gray-700 text-center font-aeonik">
                Support in crafting comprehensive internal policies and shaping
                public policy outcomes.
              </p>
            </div>

            {/* Tech Accelerator Support */}
            <div className="p-8 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border border-indigo-200">
              <Rocket className="w-12 h-12 text-indigo-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4 text-center font-nouvelr text-indigo-800">
                Tech Accelerator Support
              </h3>
              <p className="text-gray-700 text-center font-aeonik">
                Collaborate with startups to create safety-first tech
                ecosystems.
              </p>
            </div>

            {/* Global Advocacy */}
            <div className="p-8 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border border-teal-200">
              <Globe className="w-12 h-12 text-teal-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4 text-center font-nouvelr text-teal-800">
                Global Advocacy
              </h3>
              <p className="text-gray-700 text-center font-aeonik">
                Champion trust and safety best practices across Africa and
                beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-yellow-500 h-5 mx-4"></div>
      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center font-nouvelr text-gray-800">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Strategic Consultancy */}
            <div className="flex gap-6 p-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border border-purple-200">
              <Cog className="w-10 h-10 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="md:text-2xl text-lg font-bold mb-3 font-nouvelr text-purple-800">
                  Strategic Consultancy
                </h3>
                <p className="text-gray-700 font-aeonik">
                  We assess potential risks and challenges, offering scalable
                  solutions tailored to Africa's unique digital environment.
                </p>
              </div>
            </div>

            {/* Product & Community Management */}
            <div className="flex gap-6 p-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border border-blue-200">
              <Users className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="md:text-2xl text-lg font-bold mb-3 font-nouvelr text-blue-800">
                  Product & Community Management
                </h3>
                <p className="text-gray-700 font-aeonik">
                  Excellence in community management, moderation, and customer
                  support.
                </p>
              </div>
            </div>

            {/* Internal Policy Development */}
            <div className="flex gap-6 p-8 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border border-indigo-200">
              <FileText className="w-10 h-10 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="md:text-2xl text-lg font-bold mb-3 font-nouvelr text-indigo-800">
                  Internal Policy Development
                </h3>
                <p className="text-gray-700 font-aeonik">
                  Create robust internal policies covering privacy, data
                  collection, and communications.
                </p>
              </div>
            </div>

            {/* Safety Technology */}
            <div className="flex gap-6 p-8 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border border-teal-200">
              <Wrench className="w-10 h-10 text-teal-600 flex-shrink-0" />
              <div>
                <h3 className="md:text-2xl text-lg font-bold mb-3 font-nouvelr text-teal-800">
                  Safety Technology
                </h3>
                <p className="text-gray-700 font-aeonik">
                  Partner with companies to develop safety technology tools for
                  in-house operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeDo;
