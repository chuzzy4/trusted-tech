import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Laptop,
  Building2,
  Rocket,
  ShoppingBag,
  Building,
  Globe,
  Landmark,
  Users,
} from "lucide-react";

const WhoWeServe = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-32 relative overflow-hidden ">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-64 h-64 bg-purple-400/20 rounded-full blur-3xl -top-32 -left-32 animate-float"></div>
          <div className="absolute w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -bottom-32 -right-32 animate-float-delay"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-nouvelr text-center animate-fade-in-down">
            Who We Serve
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-center font-aeonik animate-fade-in-up">
            Our Partners and Collaborations Across Africa
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tech Education */}
            <div className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border border-purple-100">
              <Laptop className="w-12 h-12 text-purple-600 mb-6 mx-auto" />
              <h3 className="text-xl font-bold mb-4 text-center text-purple-800 font-nouvelr">
                Tech Education Providers
              </h3>
              <p className="text-gray-600 text-center font-aeonik">
                Empowering the next generation of developers and tech
                innovators.
              </p>
            </div>

            {/* Accelerators */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border border-blue-100">
              <Rocket className="w-12 h-12 text-blue-600 mb-6 mx-auto" />
              <h3 className="text-xl font-bold mb-4 text-center text-blue-800 font-nouvelr">
                Tech Accelerators
              </h3>
              <p className="text-gray-600 text-center font-aeonik">
                Supporting startups with mentorship and strategic guidance.
              </p>
            </div>

            {/* E-Commerce */}
            <div className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border border-indigo-100">
              <ShoppingBag className="w-12 h-12 text-indigo-600 mb-6 mx-auto" />
              <h3 className="text-xl font-bold mb-4 text-center text-indigo-800 font-nouvelr">
                E-Commerce Platforms
              </h3>
              <p className="text-gray-600 text-center font-aeonik">
                Ensuring secure and trustworthy online shopping experiences.
              </p>
            </div>

            {/* Government */}
            <div className="p-8 bg-gradient-to-br from-purple-50 to-teal-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border border-teal-100">
              <Landmark className="w-12 h-12 text-teal-600 mb-6 mx-auto" />
              <h3 className="text-xl font-bold mb-4 text-center text-teal-800 font-nouvelr">
                Government Initiatives
              </h3>
              <p className="text-gray-600 text-center font-aeonik">
                Developing robust digital infrastructures for public sector
                projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Partners */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-800 font-nouvelr">
            Our Extended Network
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Nonprofits */}
            <div className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border border-purple-100">
              <div className="flex gap-4">
                <Globe className="w-10 h-10 text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-800 font-nouvelr">
                    Nonprofits and International Organizations
                  </h3>
                  <p className="text-gray-600 font-aeonik">
                    Working with global nonprofits and advocacy groups to create
                    safer digital environments.
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border border-blue-100">
              <div className="flex gap-4">
                <Building className="w-10 h-10 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-800 font-nouvelr">
                    Corporate Collaborations
                  </h3>
                  <p className="text-gray-600 font-aeonik">
                    Partnering with established corporations in tech and
                    telecommunications sectors.
                  </p>
                </div>
              </div>
            </div>

            {/* Startups */}
            <div className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border border-indigo-100">
              <div className="flex gap-4">
                <Building2 className="w-10 h-10 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-indigo-800 font-nouvelr">
                    Startups and Digital Services
                  </h3>
                  <p className="text-gray-600 font-aeonik">
                    Supporting digital service companies at all stages of their
                    journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Communities */}
            <div className="p-8 bg-gradient-to-br from-purple-50 to-teal-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border border-teal-100">
              <div className="flex gap-4">
                <Users className="w-10 h-10 text-teal-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-teal-800 font-nouvelr">
                    Local Communities
                  </h3>
                  <p className="text-gray-600 font-aeonik">
                    Amplifying local voices in the trust and safety dialogue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeServe;
