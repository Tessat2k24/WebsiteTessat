import React from "react";
import { Calendar, Share2, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Newspaper, Home } from "lucide-react";
import {  Link } from "react-router-dom";



import { newsItems } from "./newsItems.jsx";
function NewsDetail() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the dynamic `id` from the route
  const news = newsItems.find((item) => item.id === parseInt(id));

  // Handle the case where the news item is not found
  if (!news) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating Newspaper Animation */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, -3, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-8"
          >
            <Newspaper className="h-24 w-24 mx-auto text-blue-500" />
          </motion.div>

          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Article Not Found
          </h1>
          
          <p className="text-xl text-gray-400 mb-12">
            The news article you're looking for seems to have vanished into the cosmos.
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/news")}
              className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-medium hover:opacity-90 transition-all transform hover:-translate-y-0.5"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to News</span>
            </button>
            
            <Link
              to="/"
              className="group flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-lg font-medium hover:bg-white/20 transition-all transform hover:-translate-y-0.5"
            >
              <Home className="h-5 w-5" />
              <span>Go Home</span>
            </Link>
          </div>
        </motion.div>

        {/* Floating Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
    </div>
  );
};

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/news")}
          className="flex items-center text-blue-400 hover:text-blue-300 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to News
        </button>

        {/* Hero Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
          <img
            loading="lazy"
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 text-gray-400 mb-4">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {news.date}
            </div>
            {/* <button className="flex items-center hover:text-blue-400 transition-colors">
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </button> */}
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">{news.title}</h1>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed mb-6">
            {news.description}
          </p>

          {/* <p className="text-gray-300 leading-relaxed mb-6">
            This groundbreaking development represents a significant milestone
            in our ongoing commitment to advancing aerospace technology and
            pushing the boundaries of what's possible in space exploration.
          </p> */}

          <blockquote className="border-l-4 border-blue-500 pl-4 my-8">
            <p className="text-xl text-gray-300 italic">
              "This achievement marks a new chapter in aerospace innovation and
              sets the stage for unprecedented advancements in space
              technology."
            </p>
            <footer className="text-gray-400 mt-2">
              — Edwin K Jayesh, CEO
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
