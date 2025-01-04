import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Scale, Code, BookOpen, FileCheck, AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-64 h-64 bg-accent/20 rounded-full blur-3xl -top-32 -left-32"></div>
          <div className="absolute w-64 h-64 bg-accent-secondary/20 rounded-full blur-3xl -bottom-32 -right-32"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-nouvelr animate-slide-down">
              Our Solutions
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8 font-aeonik animate-slide-up">
              Comprehensive, cutting-edge solutions designed to integrate trust and safety into every 
              stage of your digital journey.
            </p>
            <a href="#solutions" className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground rounded-full hover:bg-accent-secondary transition-colors duration-300 font-aeonik">
              Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Solution */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-nouvelr">
                Trust & Safety Platform
              </h2>
              <p className="text-lg text-gray-600 font-aeonik">
                Our flagship platform combines advanced AI with human expertise to create 
                comprehensive digital safety solutions that scale with your business.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time threat detection and prevention",
                  "Automated content moderation",
                  "User behavior analytics",
                  "Compliance management tools"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3 font-aeonik">
                    <CheckCircle2 className="w-5 h-5 text-accent-secondary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Trust & Safety Platform Interface"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-nouvelr">
              Comprehensive Solutions Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-aeonik">
              From startups to enterprises, we provide tailored solutions to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Trust and Safety Strategy */}
            <div className="group p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <Shield className="w-12 h-12 text-primary mb-4 group-hover:text-accent-secondary transition-colors" />
              <h3 className="text-xl font-bold mb-4 font-nouvelr">Trust and Safety Strategy</h3>
              <p className="text-gray-600 mb-6 font-aeonik">
                Create actionable trust and safety strategies aligned with your organizational goals.
              </p>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Strategy Planning"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Risk Assessment */}
            <div className="group p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <AlertCircle className="w-12 h-12 text-primary mb-4 group-hover:text-accent-secondary transition-colors" />
              <h3 className="text-xl font-bold mb-4 font-nouvelr">Risk Assessment</h3>
              <p className="text-gray-600 mb-6 font-aeonik">
                In-depth evaluations of your digital ecosystem to identify and mitigate potential risks.
              </p>
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
                alt="Risk Analysis"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Ethical Tech Integration */}
            <div className="group p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <Code className="w-12 h-12 text-primary mb-4 group-hover:text-accent-secondary transition-colors" />
              <h3 className="text-xl font-bold mb-4 font-nouvelr">Ethical Tech Integration</h3>
              <p className="text-gray-600 mb-6 font-aeonik">
                Embed ethical principles into your product design and development processes.
              </p>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Ethical Tech"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary font-nouvelr">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Team Collaboration"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-4 font-nouvelr">E-commerce Giant</h3>
              <p className="text-gray-600 mb-4 font-aeonik">
                Implemented comprehensive trust & safety solutions, reducing fraud by 75% and improving 
                customer satisfaction scores by 40%.
              </p>
              <a href="#" className="text-primary hover:text-accent-secondary inline-flex items-center font-aeonik">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Digital Solution"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-4 font-nouvelr">Social Platform</h3>
              <p className="text-gray-600 mb-4 font-aeonik">
                Revolutionized content moderation with AI-powered tools, processing 1M+ posts daily 
                with 99.9% accuracy.
              </p>
              <a href="#" className="text-primary hover:text-accent-secondary inline-flex items-center font-aeonik">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-nouvelr">
            Ready to Build a Safer Digital Future?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-aeonik">
            Contact us today to explore how our solutions can elevate your digital platform.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground rounded-full
              hover:bg-accent-secondary transition-colors duration-300 font-aeonik"
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;