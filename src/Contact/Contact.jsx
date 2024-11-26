import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  MessageCircleMore,
} from "lucide-react";
import Navbar from "/src/Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaWhatsapp } from "react-icons/fa";
const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: (
      <p className="text-gray-400 leading-relaxed">
        Cabin 3, Basement Floor of Ramanujan Block,Innovation Lab,
        <br />
        Saintgits College of Engineering Kottukulam Hills,
        <br />
        Pathamuttom P.O, Kottayam, Kerala-686 532
      </p>
    ),
  },
  {
    icon: Mail,
    title: "Email Us",
    content: (
      <a
        href="mailto:ceo@tessat.space"
        className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center group"
      >
        ceo@tessat.space
        <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </a>
    ),
  },
  {
    icon: Phone,
    title: "Call Us",
    content: (
      <a
        href="tel:+91 8078157810"
        className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center group"
      >
        +91 8078157810
        <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </a>
    ),
  },
];

export default function Contact() {
    const phoneNumber = "8078157810"; // Your phone number without country code
    const countryCode = "+91"; // Your country code

    const isMobile = () => {
      return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      );
    };

    const handleWhatsAppRedirect = () => {
      const fullPhoneNumber = isMobile()
        ? `${countryCode}${phoneNumber}`
        : phoneNumber;
      const message = "Hello, I would like to know more about Tessat!";
      const whatsappUrl = `https://wa.me/${fullPhoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
    };
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const form = new FormData(event.target);
    form.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");

      // Reset the formData state
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });

      setTimeout(() => {
        setResult(""); // Reset result after 5 seconds
      }, 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);

      setTimeout(() => {
        setResult(""); // Reset result after 5 seconds even on error
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              Ready to explore the future of aerospace? Contact us for
              inquiries, partnerships, or support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-all">
              <h3 className="text-2xl text-white font-bold mb-6 sm:mb-8">
                Let's Connect
              </h3>

              <div className="space-y-6 sm:space-y-8">
                {contactDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 sm:space-x-6 group"
                  >
                    <div className="bg-blue-500/10 p-3 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                      <detail.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 sm:mb-2">
                        {detail.title}
                      </h4>
                      {detail.content}
                    </div>
                  </div>
                ))}

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.9813563869748!2d76.54767847577102!3d9.510348890571485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062f85837644cd%3A0x85d83f06a99e8720!2sTessat%20Space!5e0!3m2!1sen!2sin!4v1732601125948!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tessat Space Location"
                  ></iframe>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-all">
              <h3 className="text-2xl text-white font-bold mb-6 sm:mb-8">
                Send us a Message
              </h3>

              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white text-sm font-medium mb-1 sm:mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-white text-sm font-medium mb-1 sm:mb-2"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white text-sm sm:text-base"
                      placeholder="+91 1231234567"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white text-sm font-medium mb-1 sm:mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white text-sm font-medium mb-1 sm:mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white text-sm sm:text-base resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-all transform hover:scale-[1.02]"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-green-500 flex items-center justify-center space-x-2  hover:bg-green-600 text-white px-6 py-3 rounded-xl"
                >
                  <FaWhatsapp className="h-5 w-5 text-white" />
                  <span className="text-white	">Message In WhatsApp </span>
                </button>
              </form>
              <span className="block text-sm text-white mt-6">{result}</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );


}
