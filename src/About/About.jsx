import React from 'react';
import {
  Rocket,
  Zap,
  Target,
  Users,
  Shield,
  ArrowRight,
  GraduationCap,
  Lightbulb,
  Telescope,
  Atom,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Navbar from '/src/Navbar/Navbar';
import Footer from '/src/Footer/Footer';
import Team from '/src/Ourteam/Team';
import {motion} from 'framer-motion';
export default function About() {
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar />
      <div className="bg-black text-white">
        {/* Hero Section with Particle Effect */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
            {/* <video
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
            </video> */}
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

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Tessat
                </span>
                A Start-up on Aerospace Innovation
              </h1>

              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Found and run by a group of students dreaming to create and
                innovate without limits. Follow our journey through:
              </p>
              <div className="flex justify-center mb-12 space-x-4">
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

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={scrollToAbout}
                  className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Explore Our Vision</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                {/* <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all transform hover:-translate-y-0.5">
                  Partner With Us
                </button> */}
              </div>
            </motion.div>

            {/* <button
              onClick={scrollToAbout}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors"
            >
              <ChevronDown className="h-8 w-8 animate-bounce" />
            </button> */}
          </div>
        </section>

        {/* Mission Section */}
        <section id="about" className="py-24 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-20"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                About TESSAT
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Tipu-Electronics Students SAtellite Tech (TESSAT) is pioneering
                indigenous satellite technology, focusing on Space Related
                projects and fostering aerospace innovation among young minds.
              </p>
              <div className="h-1 w-20 bg-blue-500 mx-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-16">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">
                  Our Vision
                </h3>
                <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  TESSAT envisions pioneering advanced space technology,
                  creating cutting-edge solutions that benefit industry,
                  academia, space enthusiasts, and students alike. Through
                  focused research and development in space engineering, we
                  contribute to the progress of our nation and society.
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {[
                {
                  icon: Rocket,
                  title: "Space Tech Innovation",
                  description:
                    "Developing cutting-edge indigenous Space technology with focus on Sustainability and innovation",
                },
                {
                  icon: GraduationCap,
                  title: "Student Engagement",
                  description:
                    "Supporting electronics engineers and students with hands-on aerospace projects",
                },
                {
                  icon: Telescope,
                  title: "Space Education",
                  description:
                    "Inspiring school students through exposure to advanced space technology",
                },
                {
                  icon: Atom,
                  title: "Research Excellence",
                  description:
                    "Fostering innovation in space engineering through focused R&D initiatives",
                },
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <point.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {point.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">
                  Our Focus
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  We specialize in Satellite and space probes Developement with
                  experimental space technology. Our commitment extends to
                  providing comprehensive support for Aerospace and Aeronautics
                  projects, while actively engaging with school students to
                  inspire the next generation of space innovators.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Core Values</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our principles guide every decision and innovation we make
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Innovation First",
                  description:
                    "Pushing boundaries with breakthrough technologies and creative solutions.",
                },
                {
                  icon: Shield,
                  title: "Sustainability",
                  description:
                    "Committed to eco-friendly space exploration and responsible innovation.",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description:
                    "Building strong partnerships to accelerate aerospace advancement.",
                },
              ].map((value, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0  rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
                    <value.icon className="h-12 w-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Team />
      </div>
      <Footer />
    </>
  );
}