import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  ChevronDown,
  Rocket,
  Brain,
  School,
  Calendar,
  Users,
  ArrowRight,
  Target,
  Clock,
} from "lucide-react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import Earth_from_Space from "/Earth from Space.jpeg";
function Edutech() {
  const programs = [
    {
      id: 1,
      title: "Udaan",
      category: "Internship Program",
      duration: "3 months",
      seats: 25,
      description:
        "Gain hands-on experience in spacecraft design, propulsion systems, and mission planning through our comprehensive internship program.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      icon: <Rocket className="w-6 h-6" />,
      startDate: "March 2024",
    },
    {
      id: 2,
      title: "SarasVigyan",
      category: "Research Workshop",
      duration: "-- months",
      seats: 80,
      description:
        "Join our intensive workshop series focusing on cutting-edge space technologies, satellite systems, and aerospace innovations.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
      icon: <Brain className="w-6 h-6" />,
      startDate: "April 2024",
    },
    {
      id: 3,
      title: "Pragati",
      category: "Orientation Program",
      duration: "-- months",
      seats: 100,
      description:
        "Develop leadership skills specifically tailored for the aerospace industry while working on real-world space technology projects.",
      image:
        "https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&q=80",
      icon: <School className="w-6 h-6" />,
      startDate: "June 2024",
    },
  ];

  const [selectedProgram, setSelectedProgram] = useState(null);

  // Disable background scroll when modal is active
  useEffect(() => {
    if (selectedProgram) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProgram]);

  const scrollToPrograms = () => {
    document.getElementById("programs").scrollIntoView({ behavior: "smooth" });
  };

  const Header = () => (
    <div className="relative min-h-screen flex items-center py-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900" />
        <img
          src={Earth_from_Space}
          alt="Space background"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 bg-blue-500/20 backdrop-blur-sm rounded-xl">
            <GraduationCap className="w-8 h-8 text-blue-400" />
          </div>
          <span className="text-blue-400 text-xl font-medium">
            Educational Division
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Shape the Future of <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Space Technology
          </span>
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mb-2">
          Welcome to our Edutech series, where we provide and conduct courses
          and internships, will be updated frequently.
        </p>
        <p className="text-xl text-gray-300 max-w-2xl mb-12">
          Our Internships will be an opportunity for you to work alongside us on
          our active projects and missions. These will start from 2025 onwards.
        </p>

        <div className="flex flex-wrap gap-4">
          <NavLink
            to="/contact"
            className="text-gray-400 hover:text-white flex items-center group"
          >
            {" "}
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-medium transition-all duration-300 transform hover:-translate-y-0.5">
              Contact Us
            </button>
          </NavLink>

          {/* <button className="px-8 py-4 bg-gray-800/50 hover:bg-gray-800/70 backdrop-blur-sm rounded-xl text-white font-medium transition-all duration-300 transform hover:-translate-y-0.5">
            View Schedule
          </button> */}
        </div>
      </div>

      {/* <button
        onClick={scrollToPrograms}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button> */}
    </div>
  );

  // const ProgramCard = ({ program }) => (
  //   <div
  //     className="group cursor-pointer"
  //     onClick={() => setSelectedProgram(program)}
  //   >
  //     <div className="relative overflow-hidden rounded-2xl bg-gray-800">
  //       <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />

  //       <div className="p-6 space-y-6">
  //         <div className="flex items-center justify-between">
  //           <div className="flex items-center space-x-3">
  //             <div className="p-2 bg-blue-500/20 rounded-lg">
  //               {program.icon}
  //             </div>
  //             <span className="text-blue-400 font-medium">
  //               {program.category}
  //             </span>
  //           </div>
  //           <span className="text-sm text-gray-400">{program.startDate}</span>
  //         </div>

  //         <div>
  //           <h3 className="text-xl font-bold text-white mb-2">
  //             {program.title}
  //           </h3>
  //           <p className="text-gray-400">{program.description}</p>
  //         </div>

  //         <div className="flex items-center justify-between pt-4 border-t border-gray-700">
  //           <div className="flex space-x-4">
  //             <div className="flex items-center space-x-2 text-sm text-gray-400">
  //               <Calendar className="w-4 h-4" />
  //               <span>{program.duration}</span>
  //             </div>
  //             <div className="flex items-center space-x-2 text-sm text-gray-400">
  //               <Users className="w-4 h-4" />
  //               <span>{program.seats} seats</span>
  //             </div>
  //           </div>
  //           <div className="flex items-center space-x-2 text-blue-400 group-hover:text-blue-300">
  //             <span className="text-sm font-medium">Learn More</span>
  //             <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const ProgramModal = () => (
  //   <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-auto">
  //     <div className="bg-gray-800 rounded-2xl max-w-3xl w-full overflow-y-auto">
  //       <div className="relative h-64">
  //         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800/90" />
  //         <img
  //           src={selectedProgram.image}
  //           alt={selectedProgram.title}
  //           className="w-full h-full object-cover"
  //         />
  //         <button
  //           onClick={() => setSelectedProgram(null)}
  //           className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
  //         >
  //           ✕
  //         </button>
  //       </div>

  //       <div className="p-8 space-y-8">
  //         <div>
  //           <div className="flex items-center space-x-3 mb-4">
  //             <div className="p-2 text-whitebg-blue-500/20 rounded-lg">
  //               {selectedProgram.icon}
  //             </div>
  //             <span className="text-blue-400 font-medium">
  //               {selectedProgram.category}
  //             </span>
  //           </div>

  //           <h2 className="text-3xl font-bold text-white mb-2">
  //             {selectedProgram.title}
  //           </h2>
  //           <p className="text-gray-400">{selectedProgram.description}</p>
  //         </div>

  //         <div className="flex justify-between text-gray-400 text-sm">
  //           <div className="flex items-center space-x-2">
  //             <Calendar className="w-4 h-4" />
  //             <span>{selectedProgram.duration}</span>
  //           </div>
  //           <div className="flex items-center space-x-2">
  //             <Users className="w-4 h-4" />
  //             <span>{selectedProgram.seats} seats</span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <Navbar />
      <Header />

      {/* <section id="programs" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {selectedProgram && <ProgramModal />}*/}
      <Footer />
    </div>
  );
}

export default Edutech;
