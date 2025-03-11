import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false); // State for mobile About dropdown

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-2 shadow-sm font-lato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              <img
                src="/tts.svg"
                alt="Logo"
                className="md:h-14 h-12 object-cover"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 font-medium">
            <Link
              to="/"
              className="relative text-gray-800 hover:text-secondary transition-colors duration-200 group"
            >
              Home
              <span className="absolute left-0 bottom-0 h-0.5 bg-accent w-0 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAboutHovered(true)}
              onMouseLeave={() => setIsAboutHovered(false)}
            >
              <button className="flex items-center text-gray-800 hover:text-secondary transition-colors duration-200">
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isAboutHovered && (
                <div className="absolute left-0  w-48 bg-white rounded-lg shadow-lg py-2">
                  <Link
                    to="/about-tta"
                    className="block px-4 py-2 text-gray-700 hover:bg-secondary hover:text-white transition-colors duration-200"
                  >
                    About TTA
                  </Link>
                  <Link
                    to="/our-team"
                    className="block px-4 py-2 text-gray-700 hover:bg-secondary hover:text-white transition-colors duration-200"
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/what-we-do"
              className="relative text-gray-800 hover:text-secondary transition-colors duration-200 group"
            >
              What we do
              <span className="absolute left-0 bottom-0 h-0.5 bg-accent w-0 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/solutions"
              className="relative text-gray-800 hover:text-secondary transition-colors duration-200 group"
            >
              Solutions
              <span className="absolute left-0 bottom-0 h-0.5 bg-accent w-0 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/who-we-serve"
              className="relative text-gray-800 hover:text-secondary transition-colors duration-200 group"
            >
              Who we serve
              <span className="absolute left-0 bottom-0 h-0.5 bg-accent w-0 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={34} color="red" /> : <Menu size={34} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden animate-slide-down shadow-lg font-lato">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-white rounded-lg">
            {/* Navigation Links */}
            <nav className="space-y-3">
              <Link
                to="/"
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div className="space-y-3">
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
                >
                  About
                  <ChevronDown
                    className={`h-5 w-5 transform transition-transform ${
                      isAboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isAboutOpen && (
                  <div className="pl-6 space-y-2 border-l-2 border-gray-100">
                    <Link
                      to="/about-tta"
                      className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      About TTA
                    </Link>
                    <Link
                      to="/our-team"
                      className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Our Team
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/what-we-do"
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                What We Do
              </Link>
              <Link
                to="/solutions"
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              <Link
                to="/who-we-serve"
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Who We Serve
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
