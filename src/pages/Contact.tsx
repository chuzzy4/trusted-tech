import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FaBookOpen, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-red-500 text-white py-36 font-nouvelr">
        <div className="container mx-auto px-6 text-center space-y-8">
          <h1 className="text-4xl font-bold md:text-5xl">
            We’d Love to Hear From You
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Whether you have a question, want to give feedback, or simply want
            to connect, we’re here for you.
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-red-500 hover:bg-gray-200 transition"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-red-500 hover:bg-gray-200 transition"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-red-500 hover:bg-gray-200 transition"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-red-500 hover:bg-gray-200 transition"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 flex justify-center items-center -mt-40">
        <div className="container mx-auto max-w-5xl bg-white shadow-lg rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Contact Information */}
          <div
            className="relative text-white p-8 md:p-12 space-y-6 bg-cover bg-center"
            style={{
              backgroundImage: "url('/sc.jpg')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-5">Contact Us</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6" />
                  <p>32, Avenue ve Newyork, 321994 Newyork</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6" />
                  <p>hello@trustedtech.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <p>+3356 1589 2105</p>
                </div>
                <div className="flex items-center space-x-4">
                  <FaWhatsapp className="w-6 h-6" />
                  <p>+3356 1589 2100</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Feel free to drop us a line below!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  className="w-full border-gray-300 rounded-lg "
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  className="w-full border-gray-300 rounded-lg min-h-[150px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg"
              >
                SEND
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 py-16">
        <div className="container mx-auto px-6 text-center space-y-8">
          {/* Heading Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800 flex justify-center items-center space-x-3 font-nouvelr">
              <span>Stay Updated with Our Newsletter</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Join thousands of subscribers and get exclusive updates, offers,
              and insights delivered straight to your inbox.
            </p>
          </div>

          {/* Subscription Form */}
          <form
            onSubmit={e => {
              e.preventDefault();
              toast({
                title: "Subscribed",
                description:
                  "You've successfully subscribed to our newsletter.",
              });
            }}
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
          >
            <div className="relative w-full md:w-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12H3m13 0H3m13 0a2 2 0 11-4 0m4 0a2 2 0 10-4 0"
                />
              </svg>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full border-gray-300 rounded-lg pl-12"
                required
              />
            </div>
            <Button className="bg-red-500 hover:bg-red-600 text-white w-full md:w-auto font-bold py-2 px-6 rounded-lg flex items-center space-x-2">
              <span>Subscribe</span>
            </Button>
          </form>

          {/* Additional Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 place-items-center ">
            <div className="flex items-center space-x-4 flex-col md:flex-row md:space-y-0 space-y-2">
              <div className="bg-red-100 text-red-500 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 8v10M4 8v10M9 16v2m6-2v2"
                  />
                </svg>
              </div>
              <p className="text-gray-700 font-medium">
                Exclusive Deals & Discounts
              </p>
            </div>
            <div className="flex items-center space-x-4 flex-col md:flex-row md:space-y-0 space-y-2">
              <div className="bg-green-100 text-green-500 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-gray-700 font-medium">Latest News & Updates</p>
            </div>
            <div className="flex items-center space-x-4 flex-col md:flex-row md:space-y-0 space-y-2">
              <div className="bg-blue-100 text-blue-500 p-4 rounded-full">
                <FaBookOpen size={30} />
              </div>
              <p className="text-gray-700 font-medium">Free Tips & Resources</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
