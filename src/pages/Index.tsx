import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Supporting Growth Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary animate-slide-up">
              Supporting Growth
            </h2>
            <p className="text-lg text-gray-600 mb-12 animate-slide-up">
              Trusted Tech helps organizations safeguard their digital presence, enhance user safety, 
              and navigate the complex intersection of ethics, law, and public policy in today's 
              digital landscape. TrustedTech is your partner in building safer, more resilient 
              digital ecosystems.
            </p>
            <div className="text-xl font-semibold text-secondary mb-12 animate-slide-up">
              "Empowering Startups and Accelerators with Scalable, Secure Tech Solutions."
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center animate-slide-up">
              Why Choose Trusted Tech?
            </h2>
            <p className="text-lg text-gray-600 animate-slide-up">
              Trusted Tech is dedicated to helping businesses build safer, more resilient digital 
              ecosystems across Africa and globally. With a deep understanding of local markets 
              and regulatory environments, we provide tailored solutions that ensure your products 
              are not only scalable but also ethical, secure, and compliant. Whether you're a 
              startup or an established organization, we help you navigate the complexities of 
              trust, safety, and public policy, enabling you to thrive in today's digital landscape.
            </p>
            <div className="mt-12 text-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-secondary text-white rounded-full
                  hover:bg-secondary/90 transition-colors duration-200 animate-slide-up"
              >
                Learn More
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;