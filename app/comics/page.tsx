"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";
import ComicCard from "@/components/common/ComicCard";
import { useDataStore } from "@/lib/store";

export default function ComicsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Cyberpunk", "Horror", "Sci-Fi", "Fantasy"];
  const { getComicsByTag } = useDataStore();

  const filteredComics = getComicsByTag(activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background Animation Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Moving Grid */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Pulsing Ambient Glows */}
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-secondary/10 blur-[150px] rounded-full mix-blend-screen"
        />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b border-white/10 pb-8"
          >
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-2">
              / Archives / Visual
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
              COMIC LIBRARY
            </h1>
            <p className="text-gray-400 max-w-2xl text-lg">
              Explore our growing collection of digital graphic novels, manga,
              and experimental visual storytelling.
            </p>
          </motion.div>

          {/* Filters Bar */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between mt-8">
            <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 font-bold text-sm uppercase rounded transition-colors whitespace-nowrap border ${
                    activeCategory === category
                      ? "bg-primary text-black border-primary"
                      : "bg-surface text-gray-300 border-white/10 hover:text-white hover:border-white/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm font-mono">
              <Filter size={16} />
              <span>SORT BY: LATEST</span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
            >
              {filteredComics.length > 0 ? (
                filteredComics.map((comic, index) => (
                  <ComicCard key={comic.id} comic={comic} index={index} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center text-gray-500 font-mono">
                  No transmissions found for this frequency.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
