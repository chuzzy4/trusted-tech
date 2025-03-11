import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-24 md:mt-10 relative overflow-hidden">
          {/* Noise Pattern Overlay */}
          <div className="absolute inset-0 bg-noise-pattern opacity-10"></div>
          {/* Container */}
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 font-nouvelr animate-slide-down">
              About TrustedTech
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-aeonik animate-slide-up">
              Building safer, more ethical, and resilient digital ecosystems
              across Africa and beyond.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-40 gap-8 items-center">
              {/* Left Side: Text Content */}
              <div className="space-y-8">
                {/* Animated Paragraphs */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold font-nouvelr text-gray-800">
                      Building Safer Digital Ecosystems
                    </h3>
                  </div>
                  <p className="text-lg font-aeonik text-gray-700 leading-relaxed">
                    At TrustedTech, we are dedicated to building safer, more
                    ethical, and resilient digital ecosystems across Africa and
                    beyond. Our mission is to empower startups, organizations,
                    government tech initiatives, accelerators, and incubators to
                    integrate trust and safety principles seamlessly into their
                    digital platforms.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Users className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold font-nouvelr text-gray-800">
                      Collaboration & Innovation
                    </h3>
                  </div>
                  <p className="text-lg font-aeonik text-gray-700 leading-relaxed">
                    We specialize in addressing the critical intersection of
                    ethics, law, and public policy, ensuring digital platforms
                    not only comply with regulations but also prioritize user
                    safety and engagement.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-pink-100 p-3 rounded-full">
                      <Globe className="w-8 h-8 text-pink-600" />
                    </div>
                    <h3 className="text-2xl font-bold font-nouvelr text-gray-800">
                      Global Reach, Local Impact
                    </h3>
                  </div>
                  <p className="text-lg font-aeonik text-gray-700 leading-relaxed">
                    What sets us apart is our commitment to collaboration and
                    capacity-building. We work closely with our partners to
                    design practical, user-centered solutions that not only
                    mitigate risks but also encourage innovation.
                  </p>
                </motion.div>
              </div>

              {/* Right Side: Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="/sc.jpg" // Replace with your image path
                  alt="TrustedTech Team"
                  className="w-full md:h-[700px] h-[300px] rounded-2xl shadow-2xl object-cover"
                />
                {/* Optional: Decorative Blob */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-2xl z-0"></div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          <div className="container mx-auto md:px-20 px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              >
                <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-full p-4 inline-block">
                  <Shield className="w-12 h-12 text-blue-400 animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold mt-6 mb-4 font-nouvelr text-white">
                  Our Mission
                </h3>
                <p className="font-aeonik text-gray-300">
                  Empowering organizations to build trusted digital platforms
                  that prioritize user safety and engagement.
                </p>
              </motion.div>

              {/* Team Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              >
                <div className="bg-gradient-to-r from-purple-800 to-purple-900 rounded-full p-4 inline-block">
                  <Users className="w-12 h-12 text-purple-400 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mt-6 mb-4 font-nouvelr text-white">
                  Our Team
                </h3>
                <p className="font-aeonik text-gray-300">
                  Experienced professionals dedicated to creating innovative
                  solutions for digital safety.
                </p>
              </motion.div>

              {/* Reach Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              >
                <div className="bg-gradient-to-r from-pink-800 to-pink-900 rounded-full p-4 inline-block">
                  <Globe className="w-12 h-12 text-pink-400 animate-spin-slow" />
                </div>
                <h3 className="text-2xl font-bold mt-6 mb-4 font-nouvelr text-white">
                  Our Reach
                </h3>
                <p className="font-aeonik text-gray-300">
                  Supporting organizations across Africa and beyond in building
                  resilient digital ecosystems.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Call-to-Action Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-nouvelr">
              Ready to Build a Safer Digital Future?
            </h2>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto font-aeonik">
              Join us in creating trusted, ethical, and innovative digital
              solutions for a connected world.
            </p>
            <button className="mt-8 px-8 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition hover:bg-purple-50">
              Get Started
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
