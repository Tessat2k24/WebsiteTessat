import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import Cansat from "./cansat.jpg";
import Outpot from "./outpot.jpg";
import Humanoid from "./humanoid.jpg";
import Research from "./research.jpg";

// Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// SectionTitle Component
function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      className="text-center mb-16"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <h2 className="text-4xl text-white font-bold mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 transition-transform duration-300 hover:scale-x-100" />
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
  );
}

// ProjectCard Component
function ProjectCard({
  title,
  description,
  imageUrl,
  imageCaption,
  isReversed = false,
}) {
  const textContent = (
    <motion.div
      className={isReversed ? "order-1 md:order-2" : ""}
      variants={fadeInUp}
    >
      <h2 className="text-3xl text-white/90 md:text-4xl font-bold mb-4 hover:text-white transition-colors">
        {title}
      </h2>
      {description.map((paragraph, index) => (
        <p
          key={index}
          className="text-gray-300 text-lg leading-relaxed mb-4 last:mb-0 hover:text-white/90 transition-colors"
        >
          {paragraph}
        </p>
      ))}
    </motion.div>
  );

  const imageContent = (
    <motion.div
      className={`relative group ${isReversed ? "md:order-1 order-2" : ""}`}
      variants={fadeInUp}
    >
      <div className="overflow-hidden rounded-lg">
        <motion.img
          src={imageUrl}
          alt={title}
          className="rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
          whileHover={{ scale: 1.1 }}
        />
      </div>
      <p className="text-sm text-gray-400 mt-2 italic">{imageCaption}</p>
    </motion.div>
  );

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 last:mb-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {isReversed ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </motion.div>
  );
}

// Projects Component
function Projects() {
  // Projects Data
  const projects = [
    {
      title: "Small Scale Space Tech Initiative",
      description: [
        "Space debris poses a significant threat to humanity. We are embarking on a new venture in small satellite technology",
        "focusing on deploying small satellites in Low Earth Orbit (LEO) and repurposing space debris as satellite payloads.",
      ],
      imageUrl: Cansat,
      imageCaption: "Small Scale Space Tech Initiative",
    },
    {
      title: "Companion Robot Development",
      description: [
        "We are in the process of designing a highly functional and mobile companion robot, surpassing the capabilities of ISRO's Vyomithra",
        "Currently, we are at Technology Readiness Level 1 (TRL 1) in this project.",
      ],
      imageUrl: Humanoid,
      imageCaption: "Companion Robot",
    },
    {
      title: "Outposts Integrated Rover Development",
      description: [
        "We are developing an advanced rover capable of mining outposts at fixed intervals across an equal area of land on any exoplanet or moon.",
        "This innovation allows for parallel data collection over larger areas at consistent intervals, providing precise and unexplored data.",
      ],
      imageUrl: Outpot,
      imageCaption: "Outposts Integrated Rover",
    },
    {
      title: "GLOF Survillence Drone Development",
      description: [
        "We're developing an unmanned aerial drone to predict and respond to Glacial Lake Outburst Floods (GLOFs) and sudden floods. ",
        "The drone will utilize advanced sensors and cameras for real-time monitoring, predictive analytics for early warnings, and rapid response for damage assessment and situational awareness, ultimately enhancing disaster preparedness, response efficiency, and situational awareness.",
      ],
      imageUrl: Research,
      imageCaption: "GLOF Survillence Drone",
    },
  ];
  return (
    <>
      <Navbar />
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 backdrop-blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            title="Our Projects"
            subtitle="Discover our groundbreaking aerospace projects pushing the boundaries of innovation"
          />

          {/* Map through the projects and render cards */}
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              imageCaption={project.imageCaption}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Projects;
