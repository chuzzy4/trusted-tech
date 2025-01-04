import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Laptop, Building2, Rocket, ShoppingBag, Building, Globe, Landmark, Users } from "lucide-react";

const WhoWeServe = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-nouvelr animate-slide-down">
            Who We Serve
          </h1>
          <p className="text-xl max-w-3xl mx-auto font-aeonik animate-slide-up">
            Our Partners and Collaborations Across Africa
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tech Education */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Laptop className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 font-nouvelr">Tech Education Providers</h3>
              <p className="text-gray-600 font-aeonik">
                Empowering the next generation of developers and tech innovators.
              </p>
            </div>

            {/* Accelerators */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Rocket className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 font-nouvelr">Tech Accelerators</h3>
              <p className="text-gray-600 font-aeonik">
                Supporting startups with mentorship and strategic guidance.
              </p>
            </div>

            {/* E-Commerce */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <ShoppingBag className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 font-nouvelr">E-Commerce Platforms</h3>
              <p className="text-gray-600 font-aeonik">
                Ensuring secure and trustworthy online shopping experiences.
              </p>
            </div>

            {/* Government */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Landmark className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 font-nouvelr">Government Initiatives</h3>
              <p className="text-gray-600 font-aeonik">
                Developing robust digital infrastructures for public sector projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-nouvelr">
            Our Extended Network
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Nonprofits */}
            <div className="flex gap-4">
              <Globe className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 font-nouvelr">Nonprofits and International Organizations</h3>
                <p className="text-gray-600 font-aeonik">
                  Working with global nonprofits and advocacy groups to create safer digital environments.
                </p>
              </div>
            </div>

            {/* Corporate */}
            <div className="flex gap-4">
              <Building className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 font-nouvelr">Corporate Collaborations</h3>
                <p className="text-gray-600 font-aeonik">
                  Partnering with established corporations in tech and telecommunications sectors.
                </p>
              </div>
            </div>

            {/* Startups */}
            <div className="flex gap-4">
              <Building2 className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 font-nouvelr">Startups and Digital Services</h3>
                <p className="text-gray-600 font-aeonik">
                  Supporting digital service companies at all stages of their journey.
                </p>
              </div>
            </div>

            {/* Communities */}
            <div className="flex gap-4">
              <Users className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 font-nouvelr">Local Communities</h3>
                <p className="text-gray-600 font-aeonik">
                  Amplifying local voices in the trust and safety dialogue.
                </p>
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