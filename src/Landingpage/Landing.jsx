import React from "react";
import Navbar from "/src/Navbar/Navbar";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Rocket,
  Satellite,
  Trophy,
  Star,
  Award,
  Target,
  Globe,
  Users,
  ArrowRight,
  ChevronDown,
  Globe2,
  Sparkles,
} from "lucide-react";
import Footer from "../Footer/Footer";
import Cansat from "/src/Projects/cansat.jpg";
import Outpot from "/src/Projects/outpot.jpg";
import Humanoid from "/src/Projects/humanoid.jpg";
function Landing() {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };
  const achievements = [
    {
      icon: Award,
      title: "Top 5 Space Startups",
      description:
        "Recognized among South India's leading aerospace innovators",
    },
    {
      icon: Target,
      title: "100% Mission Success",
      description: "Perfect track record in project execution and delivery",
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Partnerships with leading space agencies worldwide",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-black text-white">
        {/* Hero Section with Particle Effect */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-40"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* <div className="flex items-center justify-center space-x-2 mb-8">
                <img src="/Logo.svg" className="h-8 w-8 text-blue-500" />{" "}
                <span className="text-2xl font-bold">Tessat Space</span>
              </div> */}

              <h1 className="text-4xl sm:text-7xl font-bold mb-8 leading-tight">
                Revolutionizing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Space Technology
                </span>
                for Tomorrow
              </h1>

              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                A pioneering aerospace startup dedicated to making space
                technology accessible and sustainable for the next generation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <NavLink to="/about" className=" flex items-center group">
                  <button className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all transform hover:-translate-y-0.5">
                    <span>About Us</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </NavLink>

                <NavLink
                  to="/contact"
                  className="text-gray-400 hover:text-white flex items-center group"
                >
                  <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all transform hover:-translate-y-0.5">
                    Partner With Us
                  </button>
                </NavLink>
              </div>
            </motion.div>

            <button
              onClick={scrollToProjects}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors"
            >
              <ChevronDown className="h-8 w-8 animate-bounce" />
            </button>
          </div>
        </section>

        {/* Current Projects */}
        <section id="projects" className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-blue-500" />
                <span className="text-blue-500 font-medium">
                  Innovation Lab
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-white">
                Current Projects
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Pioneering initiatives that are pushing the boundaries of
                aerospace technology.
              </p>
            </motion.div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  title: "Small Scale Space Tech Initiative",
                  category: "Satellite",
                  description:
                    "Revolutionizing small satellite technology by deploying satellites in Low Earth Orbit (LEO) and transforming space debris into innovative satellite payloads to address humanity's growing challenges.",
                  image: Cansat,
                  stats: [
                    { label: "Development", value: "TRL 2" },
                    { label: "Launch", value: "2026" },
                  ],
                },
                {
                  title: "Companion Robot Development",
                  category: "Space Infrastructure",
                  description:
                    "Developing an advanced and mobile companion robot, surpassing ISRO's Vyommitra, with the project currently at Technology Readiness Level 1 (TRL 1).",
                  image: Humanoid,
                  stats: [
                    { label: "SubSystems", value: "15+" },
                    { label: "Timeline", value: "2028" },
                  ],
                },
                {
                  title: "Outposts Integrated Rover Development",
                  category: "Space Infrastructure",
                  description:
                    "Designing an advanced rover for mining outposts at fixed intervals, enabling parallel data collection across vast exoplanetary or lunar terrains for precise and groundbreaking insights.",
                  image: Outpot,
                  stats: [
                    { label: "SubSystems", value: "12+" },
                    { label: "Status", value: "Discussion" },
                  ],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border-t border-x border-y border-gray-800 flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500/80 text-white text-sm rounded-full">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex-grow p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {project.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-xl font-bold text-white">
                            {stat.value}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="py-24 bg-gradient-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Achievements
              </h2>
              <div className="h-1 w-20 bg-blue-500 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                {
                  icon: Trophy,
                  number: "500+",
                  title: "Completed Projects",
                  description: "Successfully delivered across industries",
                },
                {
                  icon: Star,
                  number: "98%",
                  title: "Client Satisfaction",
                  description: "Consistently exceeding expectations",
                },
                {
                  icon: Award,
                  number: "50+",
                  title: "Industry Awards",
                  description: "Recognition for excellence",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-6">
                    <item.icon className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                  <h3 className="text-5xl font-bold text-white mb-4 tracking-tight">
                    {item.number}
                  </h3>
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-lg">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Key Metrics */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 flex justify-center items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
              {[
                // icon: Target, value: "100%", label: "Mission Success" },
                //{ icon: Users, value: "50+", label: "Team Members" },
                { icon: Satellite, value: "4+", label: "Active Projects" },
                { icon: Globe2, value: "2 Ongoing", label: "patent" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex  p-4 bg-blue-500/10 rounded-2xl mb-4">
                    <stat.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80"
              alt="Space background"
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Join the Future of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Space Innovation?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Partner with us to shape the future of space technology and be
                part of the next generation of aerospace innovation.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-medium hover:opacity-90 transition-all transform hover:-translate-y-0.5">
                Get in Touch
              </button>
            </motion.div>
          </div>
        </section> */}
      </div>
      <Footer />
    </>
  );
}

export default Landing;
