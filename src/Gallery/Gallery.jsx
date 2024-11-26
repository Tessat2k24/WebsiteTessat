import React, { useState } from "react";
import "./Gallery.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { images } from "./GalleryImages.jsx"
const Gallery = () => {
  // State for current filter
  const [filter, setFilter] = useState("Meetings");

  // Filtered images based on the selected filter
  const filteredImages = images.filter((image) => image.category === filter);

  return (
    <>
      <Navbar />
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-500/5 to-purple-500/5 backdrop-blur-3xl">
          {/* Filter Buttons */}
          <div
            className="
        text-center mb-16"
          >
            <h2 className="text-4xl text-white font-bold mb-4">Gallery</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
              Memories of our Events and Achievements.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {["Meetings", "Works", "Awards", "Orientation Class", "Team"].map(
                (category) => (
                  <button
                    key={category}
                    className={` px-6 py-2 rounded-full transition-all ${
                      filter === category
                        ? "bg-blue-500 text-white"
                        : "bg-white/5 text-gray-300 hover:bg-white/10"
                    }`}
                    onClick={() => setFilter(category)}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="row">
            {Array.from({ length: 4 }).map((_, col) => (
              <div className="column" key={col}>
                {filteredImages
                  .slice(
                    col * Math.ceil(filteredImages.length / 4),
                    (col + 1) * Math.ceil(filteredImages.length / 4)
                  )
                  .map((img, index) => (
                    <div className="img-hover-zoom" key={index}>
                      <img
                        loading="lazy"
                        src={img.src}
                        alt={`Image ${
                          col * Math.ceil(filteredImages.length / 4) + index + 1
                        }`}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
