import {React,useState} from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
} from 'lucide-react';
import Logo from "/Logo.svg"
import { NavLink } from 'react-router-dom';
import { use } from 'framer-motion/client';
function Footer() {
           const [email, setEmail] = useState("");
           const [status, setStatus] = useState("");

           // Handle form submission
           const handleSubmit = (e) => {
             e.preventDefault();
             setEmail(""); // Clear the input field

             // Prepare data to be sent
             const formData = new FormData();
             formData.append("email", email);
             // Replace the following URL with the URL of your deployed Google Apps Script web app
             const scriptURL = import.meta.env.VITE_SCRIPT_URL;

             // Send the form data to Google Sheets
             fetch(scriptURL, {
               method: "POST",
               body: formData,
             })
               .then((response) => {
                 setStatus("Subscription successful!");

                 // Hide success message after 5 seconds
                 setTimeout(() => {
                   setStatus(""); // Reset status after showing the success message
                 }, 5000);
               })
               .catch((error) => {
                 setStatus("Failed to subscribe, please try again.");
                 console.error("Error:", error);
               });
           };
    const quickLinks = [
      { name: "Home",to: "/" },

      { name: "About Us", to: "/about" },
      { name: "Projects", to: "/projects" },
      { name: "EduTech", to: "/edutech" },
      
    ];
  const Portals = [
    { name: "News", to: "/news" },
    { name: "Gallery", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 pt-20 border-t border-gray-800">
      {/* Scrolling Slogan
      <div className="overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 py-4 mb-16">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="whitespace-nowrap"
        >
          <span className="text-xl font-medium text-white inline-block mx-4">
            Pioneering the Future of Space Technology
          </span>
          <span className="text-xl font-medium text-white inline-block mx-4">
            •
          </span>
          <span className="text-xl font-medium text-white inline-block mx-4">
            Innovating Beyond Boundaries
          </span>
          <span className="text-xl font-medium text-white inline-block mx-4">
            •
          </span>
          <span className="text-xl font-medium text-white inline-block mx-4">
            Reaching for the Stars
          </span>
        </motion.div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-6">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <img src={Logo} className="w-10 h-10 text-blue-400" />
              </div>
              <span className="text-2xl font-bold text-white">Tessat</span>
            </div>
            <p className="text-gray-400">
              Leading the way in aerospace innovation and space technology
              advancement.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/tessat.space?igsh=OGt4cTVrMWFicnd1"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/tessat/"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>

              <a
                href="https://x.com/Tessat_Space?t=9ig4oenY8aDOwikBH1aiAw&s=09"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h3 className="text-white font-semibold mb-6">Portals</h3>
            <ul className="space-y-4">
              {Portals.map((Portals) => (
                <li key={Portals.name}>
                  <NavLink
                    to={Portals.to}
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {Portals.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:ceo@tessat.space"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  ceo@tessat.space
                </a>
              </li>
              <li>
                <a
                  href="+91 8078157810"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  +91 8078157810
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-gray-400" />
                <span className="text-gray-400">
                  Cabin 3, Basement Floor of Ramanujan Block, Innovation Lab,
                  Saintgits College of Engineering Kottukulam Hills, Pathamuttom
                  P.O, Kottayam, Kerala-686 532
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 pb-12 px-4 sm:px-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-white font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Stay updated with our latest innovations and developments
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-2">
              <form
                id="submit-form"
                className="flex flex-col sm:flex-row sm:space-x-2"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-gray-800 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
            {status && <p className="mt-2 text-gray-400">{status}</p>}{" "}
          </div>
        </div>

        {/* Copyright */}
        {/* <div className="border-t border-gray-800 py-8">
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} Tessat. All rights reserved.</p>
          </div>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;