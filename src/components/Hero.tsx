import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Transformative Solutions",
    description: "Your Partner in Creating Safer, Smarter, and More Resilient Digital Ecosystems.",
  },
  {
    title: "Expertise That Matters",
    description: "Guiding Organizations Through the Complexities of Ethics, Law, and User Safety.",
  },
  {
    title: "Community Commitment",
    description: "Fostering Responsible Digital Communities Across Africa and Beyond.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-500 absolute inset-0 flex flex-col items-center justify-center
                ${index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-down">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-slide-up">
                {slide.description}
              </p>
            </div>
          ))}
          
          <div className="mt-80">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-accent text-white rounded-full
                hover:bg-accent/90 transition-colors duration-200 animate-slide-up"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${index === currentSlide ? "bg-white w-8" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;