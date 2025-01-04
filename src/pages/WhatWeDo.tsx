import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Book, Globe, Users, Cog, FileText, Rocket, Tool } from "lucide-react";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-nouvelr animate-slide-down">
            What We Do
          </h1>
          <p className="text-xl max-w-3xl mx-auto font-aeonik animate-slide-up">
            At TT, we are committed to helping organizations navigate the complexities of trust, 
            safety, and user engagement in the digital world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Safety Audit */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 font-nouvelr">Safety Audit</h3>
              <p className="text-gray-600 font-aeonik">
                We evaluate online risks and help integrate safety by design into your products and services.
              </p>
            </div>

            {/* Policy Development */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Book className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 font-nouvelr">Policy Development</h3>
              <p className="text-gray-600 font-aeonik">
                Support in crafting comprehensive internal policies and shaping public policy outcomes.
              </p>
            </div>

            {/* Tech Accelerator Support */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Rocket className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 font-nouvelr">Tech Accelerator Support</h3>
              <p className="text-gray-600 font-aeonik">
                Collaborate with startups to create safety-first tech ecosystems.
              </p>
            </div>

            {/* Global Advocacy */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 font-nouvelr">Global Advocacy</h3>
              <p className="text-gray-600 font-aeonik">
                Champion trust and safety best practices across Africa and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-nouvelr">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Strategic Consultancy */}
            <div className="flex gap-4">
              <Cog className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 font-nouvelr">Strategic Consultancy</h3>
                <p className="text-gray-600 font-aeonik">
                  We assess potential risks and challenges, offering scalable solutions tailored to Africa's unique digital environment.
                </p>
              </div>
            </div>

            {/* Product & Community Management */}
            <div className="flex gap-4">
              <Users className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 font-nouvelr">Product & Community Management</h3>
                <p className="text-gray-600 font-aeonik">
                  Excellence in community management, moderation, and customer support.
                </p>
              </div>
            </div>

            {/* Internal Policy Development */}
            <div className="flex gap-4">
              <FileText className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 font-nouvelr">Internal Policy Development</h3>
                <p className="text-gray-600 font-aeonik">
                  Create robust internal policies covering privacy, data collection, and communications.
                </p>
              </div>
            </div>

            {/* Safety Technology */}
            <div className="flex gap-4">
              <Tool className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 font-nouvelr">Safety Technology</h3>
                <p className="text-gray-600 font-aeonik">
                  Partner with companies to develop safety technology tools for in-house operations.
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