import React, { useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import { newsItems } from "./newsItems.jsx";


export default function News() {
    const categories = ["All", "Recognition", "Collaboration", "Research"];

    const [activeCategory, setActiveCategory] = useState("All");
   const filteredNews = newsItems.filter(
     (news) =>
       activeCategory === "All" || news.category === activeCategory
   );
  return (
    <>
      <Navbar />
      <section className="py-20 bg-black relative overflow-hidden">
        <div
          className="
      absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 backdrop-blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-white font-bold mb-4">Latest News</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
              Stay updated with our latest achievements, innovations, and
              announcements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <div
                key={news.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img loading="lazy"
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center text-sm text-gray-300">
                    <Calendar className="h-4 w-4 mr-2" />
                    {news.date}
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-sm text-blue-300 px-3 py-1 rounded-full text-sm">
                    {news.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-white font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {news.description}
                  </p>
                  <NavLink to={`/news/${news.id}`}>
                    <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                      <span className="mr-2">Read More</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>{" "}
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
