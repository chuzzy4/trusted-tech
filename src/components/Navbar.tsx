import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-2 shadow-sm font-lato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              <img
                src="/logo.png"
                alt="Logo"
                className="md:h-14 h-12 object-cover"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <Link
              to="/"
              className="relative text-gray-800 hover:text-secondary transition-colors duration-200 group"
            >
              Home
              <span className="absolute left-0 bottom-0 h-0.5 bg-accent w-0 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="relative text-gray-800 hover:text-secondary transition-colors duration-200 group"
            >
              About
              <span className="absolute left-0 bottom-0 h-0.5 bg-accent w-0 transition-all duration-300 group-hover:w-full"></span>
            </Link>
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
          <div className="md:hidden flex items-center">
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
        <div className="md:hidden animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-600 hover:text-secondary transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-600 hover:text-secondary transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/what-we-do"
              className="block px-3 py-2 text-gray-600 hover:text-secondary transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              What we do
            </Link>
            <Link
              to="/solutions"
              className="block px-3 py-2 text-gray-600 hover:text-secondary transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Link
              to="/who-we-serve"
              className="block px-3 py-2 text-gray-600 hover:text-secondary transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Who we serve
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2  text-gray-600 hover:text-secondary transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
