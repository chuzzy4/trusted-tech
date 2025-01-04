import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-nouvelr animate-slide-down">
              About TrustedTech
            </h1>
            <p className="text-xl max-w-3xl mx-auto font-aeonik animate-slide-up">
              Building safer, more ethical, and resilient digital ecosystems across Africa and beyond.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4 font-nouvelr">Our Mission</h3>
                <p className="font-aeonik">
                  Empowering organizations to build trusted digital platforms that prioritize user safety and engagement.
                </p>
              </div>
              
              <div className="text-center">
                <Users className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4 font-nouvelr">Our Team</h3>
                <p className="font-aeonik">
                  Experienced professionals dedicated to creating innovative solutions for digital safety.
                </p>
              </div>
              
              <div className="text-center">
                <Globe className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4 font-nouvelr">Our Reach</h3>
                <p className="font-aeonik">
                  Supporting organizations across Africa and beyond in building resilient digital ecosystems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-lg font-aeonik">
                At TrustedTech, we are dedicated to building safer, more ethical, and resilient digital ecosystems across Africa and beyond. Our mission is to empower startups, organizations, government tech initiatives, accelerators, and incubators to integrate trust and safety principles seamlessly into their digital platforms.
              </p>
              
              <p className="text-lg font-aeonik">
                We specialize in addressing the critical intersection of ethics, law, and public policy, ensuring digital platforms not only comply with regulations but also prioritize user safety and engagement.
              </p>
              
              <p className="text-lg font-aeonik">
                What sets us apart is our commitment to collaboration and capacity-building. We work closely with our partners to design practical, user-centered solutions that not only mitigate risks but also encourage innovation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;