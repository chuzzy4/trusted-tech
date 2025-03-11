import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Footer from "@/components/Footer";

const MeetOurTeam = () => {
  // Team data with name, image, LinkedIn URL, and role
  const teamMembers = [
    {
      name: "Abigail Adu-Daako",
      image:
        "https://res.cloudinary.com/karotcloud/image/upload/v1741687136/Abgail_Adu-Daako_sd3u0d.jpg",
      linkedin: "https://www.linkedin.com/in/abigail-adu-daako-7337306a/",
      role: "Advisory Board Member",
    },
    {
      name: "Amaka Ibeji",
      image:
        "https://res.cloudinary.com/karotcloud/image/upload/v1741687136/Amaka_Ibeji_qgvxjc.jpg",
      linkedin: "https://www.linkedin.com/in/amakai/",
      role: "Advisory Board Member",
    },
    {
      name: "Daniel Boateng",
      image:
        "https://res.cloudinary.com/karotcloud/image/upload/v1741687137/Daniel_Boateng_mlskjg.jpg",
      linkedin: "https://www.linkedin.com/in/daniel-boateng-43388511b/",
      role: "Advisory Board Member",
    },
    {
      name: "Emmanuel Adinkra",
      image:
        "https://res.cloudinary.com/karotcloud/image/upload/v1741687136/Emmanuel_Adinkra_feel9r.jpg",
      linkedin: "https://www.linkedin.com/in/eadinkrah/",
      role: "Advisory Board Member",
    },
    {
      name: "Jen Weedon",
      image:
        "https://res.cloudinary.com/karotcloud/image/upload/v1741687136/Jen_Weedon_snrakf.jpg",
      linkedin: "https://www.linkedin.com/in/jen-weedon-22b6883/",
      role: "Advisory Board Member",
    },
    {
      name: "Pearle Nwaezeigwe",
      image:
        "https://res.cloudinary.com/karotcloud/image/upload/v1741687136/Pearle_Nwaezeigwe_s5t9sx.jpg",
      linkedin: "https://www.linkedin.com/in/pearlenwaezeigwe/",
      role: "Advisory Board Member",
    },
    {
      name: "Joy Uchechi Eziashi",
      image:
        "https://res.cloudinary.com/karotcloud/image/upload/v1741687136/Uchechi_Joy_Eziashi_zepcmk.jpg",
      linkedin: "https://www.linkedin.com/in/joy-uchechi-eziashi-2b5a74b7/",
      role: "Co-Founder Trusted Tech Africa",
    },
    {
      name: "Isaac Damian Ezirim",
      image:
        "https://res.cloudinary.com/karotcloud/image/upload/v1741689865/WhatsApp_Image_2025-03-11_at_11.41.11_zqhfxp.jpg",
      linkedin: "https://www.linkedin.com/in/isaacezirim/",
      role: "Co-Founder Trusted Tech Africa",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="py-20 bg-gradient-to-r  from-gray-50 to-white">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 pt-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-nouvelr text-gray-900">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg md:text-xl font-aeonik text-gray-600 max-w-2xl mx-auto">
              A passionate group of professionals dedicated to building safer
              and more ethical digital ecosystems.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First 6 Team Members */}
            {teamMembers.slice(0, 6).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden "
              >
                {/* Image Container with Scale Animation */}
                <motion.div
                  className="w-full h-96  overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05 }} // Scale up on hover
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.3,
                  }} // Smooth ease-in-out animation
                >
                  {/* <div className="w-full h-96 overflow-hidden"> */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top" // Align image to the top
                  />
                  {/* </div> */}
                </motion.div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold font-nouvelr text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-lg font-aeonik text-gray-600">
                    {member.role}
                  </p>
                  <div className="mt-6 flex justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-[#4484cc] hover:text-white text-gray-500 transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Last 2 Centered Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {teamMembers.slice(6).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden "
              >
                {/* Image Container with Scale Animation */}
                <motion.div
                  className="w-full h-96  overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05 }} // Scale up on hover
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.3,
                  }} // Smooth ease-in-out animation
                >
                  {/* <div className="w-full h-96 overflow-hidden"> */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top" // Align image to the top
                  />
                  {/* </div> */}
                </motion.div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold font-nouvelr text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-lg font-aeonik text-gray-600">
                    {member.role}
                  </p>
                  <div className="mt-6 flex justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-[#4484cc] hover:text-white text-gray-500 transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MeetOurTeam;
