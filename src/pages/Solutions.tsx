import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  AlertCircle,
  Code,
  ArrowRight,
  CheckCircle2,
  Zap,
  Eye,
  BarChart,
  Settings,
} from "lucide-react";

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-64 h-64 bg-purple-400/20 rounded-full blur-3xl -top-32 -left-32 animate-float"></div>
          <div className="absolute w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -bottom-32 -right-32 animate-float-delay"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-nouvelr animate-fade-in-down">
              Our Solutions
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8 font-aeonik animate-fade-in-up">
              Comprehensive, cutting-edge solutions designed to integrate trust
              and safety into every stage of your digital journey.
            </p>
            <a
              href="#solutions"
              className="inline-flex items-center px-8 py-3 bg-white text-purple-600 rounded-full hover:bg-purple-50 transition-colors duration-300 font-aeonik animate-fade-in-up"
            >
              Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Solution */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white md:mx-auto md:container">
        <div className="container mx-auto px-4 md:max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-800 font-nouvelr">
                Trust & Safety Platform
              </h2>
              <p className="text-lg text-gray-600 font-aeonik">
                Our flagship platform combines advanced AI with human expertise
                to create comprehensive digital safety solutions that scale with
                your business.
              </p>
              <ul className="space-y-6">
                {[
                  {
                    text: "Real-time threat detection and prevention",
                    icon: Zap,
                    color: "text-blue-600",
                  },
                  {
                    text: "Automated content moderation",
                    icon: Eye,
                    color: "text-indigo-600",
                  },
                  {
                    text: "User behavior analytics",
                    icon: BarChart,
                    color: "text-purple-600",
                  },
                  {
                    text: "Compliance management tools",
                    icon: Settings,
                    color: "text-teal-600",
                  },
                ].map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-4 font-aeonik group"
                  >
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-sm group-hover:shadow-md transition-shadow ${feature.color}`}
                    >
                      <feature.icon className="w-6 h-6 " />
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      {feature.text}
                    </span>
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
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-400/20 rounded-full blur-xl -z-10 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-20 md:mx-auto md:container">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800 font-nouvelr">
              Comprehensive Solutions Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-aeonik">
              From startups to enterprises, we provide tailored solutions to
              meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Trust and Safety Strategy */}
            <div className="group p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <Shield className="w-10 h-10 text-purple-600 mb-4 group-hover:text-blue-600 transition-colors" />
              <h3 className="text-xl font-bold mb-4 text-purple-800 font-nouvelr">
                Trust and Safety Strategy
              </h3>
              <p className="text-gray-600 mb-6 font-aeonik">
                Create actionable trust and safety strategies aligned with your
                organizational goals.
              </p>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Strategy Planning"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>

            {/* Risk Assessment */}
            <div className="group p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <AlertCircle className="w-10 h-10 text-blue-600 mb-4 group-hover:text-indigo-600 transition-colors" />
              <h3 className="text-xl font-bold mb-4 text-blue-800 font-nouvelr">
                Risk Assessment
              </h3>
              <p className="text-gray-600 mb-6 font-aeonik">
                In-depth evaluations of your digital ecosystem to identify and
                mitigate potential risks.
              </p>
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
                alt="Risk Analysis"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>

            {/* Ethical Tech Integration */}
            <div className="group p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
              <Code className="w-10 h-10 text-indigo-600 mb-4 group-hover:text-purple-600 transition-colors" />
              <h3 className="text-xl font-bold mb-4 text-indigo-800 font-nouvelr">
                Ethical Tech Integration
              </h3>
              <p className="text-gray-600 mb-6 font-aeonik">
                Embed ethical principles into your product design and
                development processes.
              </p>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Ethical Tech"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 md:mx-auto md:container">
        <div className="container mx-auto px-4  max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-800 font-nouvelr">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Team Collaboration"
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-4 text-purple-800 font-nouvelr">
                E-commerce Giant
              </h3>
              <p className="text-gray-600 mb-4 font-aeonik">
                Implemented comprehensive trust & safety solutions, reducing
                fraud by 75% and improving customer satisfaction scores by 40%.
              </p>
              <a
                href="#"
                className="text-purple-600 hover:text-blue-600 inline-flex items-center font-aeonik"
              >
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Digital Solution"
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-4 text-purple-800 font-nouvelr">
                Social Platform
              </h3>
              <p className="text-gray-600 mb-4 font-aeonik">
                Revolutionized content moderation with AI-powered tools,
                processing 1M+ posts daily with 99.9% accuracy.
              </p>
              <a
                href="#"
                className="text-purple-600 hover:text-blue-600 inline-flex items-center font-aeonik"
              >
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-nouvelr">
            Ready to Build a Safer Digital Future?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-aeonik">
            Contact us today to explore how our solutions can elevate your
            digital platform.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-purple-600 rounded-full
              hover:bg-purple-50 transition-colors duration-300 font-aeonik"
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
