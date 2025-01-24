import { useState, useEffect } from "react";
import { ArrowRight, Shield, Lock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Transformative Solutions",
    description:
      "Your Partner in Creating Safer, Smarter, and More Resilient Digital Ecosystems.",
    icon: Shield,
  },
  {
    title: "Expertise That Matters",
    description:
      "Guiding Organizations Through the Complexities of Ethics, Law, and User Safety.",
    icon: Lock,
  },
  {
    title: "Community Commitment",
    description:
      "Fostering Responsible Digital Communities Across Africa and Beyond.",
    icon: Users,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="md:min-h-screen h-[600px] flex items-center  justify-center bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/fd.jpg')] bg-cover bg-center opacity-50"></div>
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Floating Graphics */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent-secondary/20 rounded-full blur-2xl animate-float delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float delay-4000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 ">
        <div className="max-w-4xl mx-auto text-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-in-out absolute inset-0 flex flex-col  items-center justify-center
                ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
            >
              <slide.icon className="w-24 h-24 mb-8 animate-bounce" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-nouvelr animate-fade-in px-2 md:px-0">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-8 md:px-0 font-aeonik animate-fade-in delay-200 px-5">
                {slide.description}
              </p>
            </div>
          ))}

          <div className="mt-80 md:block hidden ">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gray-200 text-primary font-bold rounded-full
                hover:bg-accent-secondary transition-colors duration-200 animate-fade-in delay-500 font-lato"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${index === currentSlide ? "bg-accent w-8" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
