import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import bg from "/him.jpg";
import Footer from "@/components/Footer";
import { Shield, Users } from "lucide-react";
import { Globe } from "lucide-react";
import {
  FaRocket,
  FaShieldAlt,
  FaLightbulb,
  FaChartLine,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />

      {/* Supporting Growth Section */}

      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        {/* Decorative Icons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <FaRocket className="w-24 h-24 text-blue-400 absolute top-10 left-10 animate-float" />
          <FaShieldAlt className="w-24 h-24 text-purple-400 absolute bottom-10 right-10 animate-float-delay" />
          <FaLightbulb className="w-24 h-24 text-pink-400 absolute top-20 right-20 animate-float" />
          <FaChartLine className="w-24 h-24 text-indigo-400 absolute bottom-20 left-20 animate-float-delay" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary font-nouvelr">
              Supporting Growth
            </h2>
            {/* Section Description */}
            <p className="text-md md:text-xl text-gray-700 mb-8 leading-relaxed">
              Trusted Tech helps organizations safeguard their digital presence,
              enhance user safety, and navigate the complex intersection of
              ethics, law, and public policy in today's digital landscape.
            </p>
            {/* Highlighted Quote */}
            <div className="bg-white/80 backdrop-blur-sm md:p-4 p-2  md:px-0 rounded-full mb-10 shadow-lg">
              <p className="text-sm md:text-xl font-semibold text-secondary italic flex justify-center items-center gap-1 ">
                <FaQuoteLeft className="mb-4 " />
                Empowering Startups and Accelerators with Scalable, Secure Tech
                Solutions.
                <FaQuoteRight className="mb-4" />
              </p>
            </div>
            {/* Image with Modern Styling */}
            <div className="relative overflow-hidden rounded shadow-2xl">
              <img
                src="./ep.png"
                alt="Supporting Growth"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
              {/* Optional: Overlay for Image */}
              <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Trusted Tech Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-purple-900 relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-64 h-64 bg-blue-800 rounded-full opacity-20 blur-2xl -top-20 -left-20"></div>
          <div className="absolute w-64 h-64 bg-purple-800 rounded-full opacity-20 blur-2xl -bottom-20 -right-20"></div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white text-center font-nouvelr"
          >
            Why Choose Trusted Tech?
          </motion.h2>

          {/* Section Description */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12 font-aeonik"
          >
            We provide tailored solutions that ensure your products are not only
            scalable but also ethical, secure, and compliant.
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8  font-aeonik">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white text-center font-nouvelr">
                Global Reach
              </h3>
              <p className="text-gray-300 text-center">
                We understand local markets and global regulations, ensuring
                your platform thrives everywhere.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white text-center font-nouvelr">
                User Safety
              </h3>
              <p className="text-gray-300 text-center">
                We prioritize user safety, ensuring your platform is secure and
                trustworthy.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="w-16 h-16 bg-pink-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white text-center font-nouvelr">
                Community Focus
              </h3>
              <p className="text-gray-300 text-center">
                We foster responsible digital communities, ensuring inclusivity
                and engagement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="bg-white h-5"></div>
      <Footer />
    </div>
  );
};

export default Index;
