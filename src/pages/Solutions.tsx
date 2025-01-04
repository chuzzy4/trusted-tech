import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Scale, Code, BookOpen, FileCheck, AlertCircle } from "lucide-react";

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-nouvelr animate-slide-down">
            Our Solutions
          </h1>
          <p className="text-xl max-w-3xl mx-auto font-aeonik animate-slide-up">
            Comprehensive, cutting-edge solutions designed to integrate trust and safety into every 
            stage of your digital journey.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Trust and Safety Strategy */}
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4 font-nouvelr">Trust and Safety Strategy</h3>
              <p className="text-gray-600 font-aeonik">
                Create actionable trust and safety strategies aligned with your organizational goals.
              </p>
            </div>

            {/* Risk Assessment */}
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <AlertCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4 font-nouvelr">Risk Assessment</h3>
              <p className="text-gray-600 font-aeonik">
                In-depth evaluations of your digital ecosystem to identify and mitigate potential risks.
              </p>
            </div>

            {/* Ethical Tech Integration */}
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Code className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4 font-nouvelr">Ethical Tech Integration</h3>
              <p className="text-gray-600 font-aeonik">
                Embed ethical principles into your product design and development processes.
              </p>
            </div>

            {/* Training and Capacity */}
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4 font-nouvelr">Training and Capacity</h3>
              <p className="text-gray-600 font-aeonik">
                Empower your team with knowledge and tools for maintaining trust and safety at scale.
              </p>
            </div>

            {/* Compliance and Policy */}
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <FileCheck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4 font-nouvelr">Compliance and Policy</h3>
              <p className="text-gray-600 font-aeonik">
                Navigate global tech regulations with confidence through expert guidance.
              </p>
            </div>

            {/* Crisis Management */}
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Scale className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4 font-nouvelr">Crisis Management</h3>
              <p className="text-gray-600 font-aeonik">
                Real-time support to address safety breaches and reputational risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-nouvelr">
            Ready to Build a Safer Digital Future?
          </h2>
          <p className="text-xl mb-8 text-gray-600 font-aeonik">
            Contact us today to explore how our solutions can elevate your digital platform.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full
              hover:bg-primary/90 transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;