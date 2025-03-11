import { motion } from "framer-motion";
import { Linkedin, Mail, Twitter } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const MeetOurTeam = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-nouvelr text-gray-900">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg md:text-xl font-aeonik text-gray-600 max-w-2xl mx-auto">
            A passionate group of professionals dedicated to building safer and
            more ethical digital ecosystems.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1730391136/karotimages/hqcga9abxqy164maixlk.jpg" // Replace with your image path
              alt="Team Member 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold font-nouvelr text-gray-900">
                Joy Uchechi Eziashi{" "}
              </h3>
              <p className="mt-2 text-lg font-aeonik text-gray-600">
                CEO & Co-Founder
              </p>
              <p className="mt-4 text-gray-600 font-aeonik">
                John is a visionary leader with over 10 years of experience in
                digital safety and ethical tech.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                >
                  <FaXTwitter className="w-6 h-6" />
                  {/* Replaced Github with Twitter */}
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-pink-600 transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1730391136/karotimages/hqcga9abxqy164maixlk.jpg" // Replace with your image path
              alt="Team Member 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold font-nouvelr text-gray-900">
                Isaac Damian Ezirim{" "}
              </h3>
              <p className="mt-2 text-lg font-aeonik text-gray-600">
                CTO & Co-Founder
              </p>
              <p className="mt-4 text-gray-600 font-aeonik">
                Jane is a tech innovator with a passion for building resilient
                and secure digital platforms.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                >
                  <FaXTwitter className="w-6 h-6" />
                  {/* Replaced Github with Twitter */}
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-pink-600 transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1730391136/karotimages/hqcga9abxqy164maixlk.jpg" // Replace with your image path
              alt="Team Member 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold font-nouvelr text-gray-900">
                Alex Johnson
              </h3>
              <p className="mt-2 text-lg font-aeonik text-gray-600">
                Head of Partnerships
              </p>
              <p className="mt-4 text-gray-600 font-aeonik">
                Alex specializes in fostering collaborations and building
                strategic alliances for global impact.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                >
                  <FaXTwitter className="w-6 h-6" />
                  {/* Replaced Github with Twitter */}
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-pink-600 transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: Centered Last Two Members */}
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {/* Team Member 4 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src="https://res.cloudinary.com/karotcloud/image/upload/v1730391136/karotimages/hqcga9abxqy164maixlk.jpg" // Replace with your image path
                alt="Team Member 4"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold font-nouvelr text-gray-900">
                  Sarah Lee
                </h3>
                <p className="mt-2 text-lg font-aeonik text-gray-600">
                  Lead Designer
                </p>
                <p className="mt-4 text-gray-600 font-aeonik">
                  Sarah is a creative force, designing intuitive and
                  user-friendly digital experiences.
                </p>
                <div className="flex space-x-4 mt-6">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                  >
                    <FaXTwitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-pink-600 transition-colors duration-300"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Team Member 5 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src="https://res.cloudinary.com/karotcloud/image/upload/v1730391136/karotimages/hqcga9abxqy164maixlk.jpg" // Replace with your image path
                alt="Team Member 5"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold font-nouvelr text-gray-900">
                  Michael Brown
                </h3>
                <p className="mt-2 text-lg font-aeonik text-gray-600">
                  Senior Developer
                </p>
                <p className="mt-4 text-gray-600 font-aeonik">
                  Michael is a coding wizard, building robust and scalable
                  digital solutions.
                </p>
                <div className="flex space-x-4 mt-6">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                  >
                    <FaXTwitter className="w-6 h-6" />
                    {/* Replaced Github with Twitter */}
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-pink-600 transition-colors duration-300"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
