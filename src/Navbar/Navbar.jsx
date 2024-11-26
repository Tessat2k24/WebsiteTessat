import React, { useState } from "react";
import { Rocket, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import tessatLogo from "./tessatCorrectedlogo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/10 backdrop-blur-md z-50 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <NavLink to="/">
              <img src={tessatLogo} className="w-20 text-blue-500" />
            </NavLink>

            {/* <span className="text-2xl font-bold text-white">Tessat</span> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-white hover:text-blue-400 transition-colors ${
                    isActive ? "font-bold border-b-2 border-blue-500" : ""
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-white hover:text-blue-400 transition-colors ${
                    isActive ? "font-bold border-b-2 border-blue-500" : ""
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `text-white hover:text-blue-400 transition-colors ${
                    isActive ? "font-bold border-b-2 border-blue-500" : ""
                  }`
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/edutech"
                className={({ isActive }) =>
                  `text-white hover:text-blue-400 transition-colors ${
                    isActive ? "font-bold border-b-2 border-blue-500" : ""
                  }`
                }
              >
                EduTech
              </NavLink>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  `text-white hover:text-blue-400 transition-colors ${
                    isActive ? "font-bold border-b-2 border-blue-500" : ""
                  }`
                }
              >
                News
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `text-white hover:text-blue-400 transition-colors ${
                    isActive ? "font-bold border-b-2 border-blue-500" : ""
                  }`
                }
              >
                Gallery
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-white hover:text-blue-400 transition-colors ${
                    isActive ? "font-bold border-b-2 border-blue-500" : ""
                  }`
                }
              >
                Contact
              </NavLink>

              {/* <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                Contact Us
              </button> */}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block text-white hover:text-blue-400 transition-colors py-2 px-4 ${
                  isActive ? "font-bold border-b-2 border-blue-500" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block text-white hover:text-blue-400 transition-colors py-2 px-4 ${
                  isActive ? "font-bold border-b-2 border-blue-500" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block text-white hover:text-blue-400 transition-colors py-2 px-4 ${
                  isActive ? "font-bold border-b-2 border-blue-500" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/edutech"
              className={({ isActive }) =>
                `block text-white hover:text-blue-400 transition-colors py-2 px-4 ${
                  isActive ? "font-bold border-b-2 border-blue-500" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              EduTech
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                `block text-white hover:text-blue-400 transition-colors py-2 px-4 ${
                  isActive ? "font-bold border-b-2 border-blue-500" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              News
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `block text-white hover:text-blue-400 transition-colors py-2 px-4 ${
                  isActive ? "font-bold border-b-2 border-blue-500" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block text-white hover:text-blue-400 transition-colors py-2 px-4 ${
                  isActive ? "font-bold border-b-2 border-blue-500" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            {/* <button
              className="w-full text-left bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </button> */}
          </div>
        </div>
      )}
    </nav>
  );
}
