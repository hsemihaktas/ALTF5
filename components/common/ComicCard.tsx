"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Comic } from "@/lib/types";
import { BookOpen, ArrowUpRight } from "lucide-react";
import ComicCardSkeleton from "./ComicCardSkeleton";

interface Props {
  comic: Comic;
  index?: number;
}

const ComicCard: React.FC<Props> = ({ comic, index = 0 }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="h-full"
    >
      <Link
        href={`/comic/${comic.id}`}
        className="group block relative h-[420px] w-full perspective-1000"
      >
        <motion.div
          className="relative w-full h-full rounded-xl overflow-hidden bg-surface border border-white/10 group-hover:border-primary/50 transition-all duration-500 ease-out"
          whileHover={{
            y: -8,
            boxShadow: "0 20px 40px -10px rgba(204, 255, 0, 0.15)",
          }}
        >
          {/* Skeleton Loader */}
          <AnimatePresence>
            {!isLoaded && <ComicCardSkeleton />}
          </AnimatePresence>

          {/* Background Image with Zoom Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={comic.coverImage}
              alt={comic.title}
              fill
              onLoad={() => setIsLoaded(true)}
              className={`object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            />
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

            {/* Cyberpunk Grid Overlay (Subtle) */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
          </div>

          {/* Decorative Corner Brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-white/30 group-hover:border-primary transition-colors duration-300" />
          <div className="absolute top-3 right-3 w-4 h-4 border-r border-t border-white/30 group-hover:border-primary transition-colors duration-300" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-l border-b border-white/30 group-hover:border-primary transition-colors duration-300" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-white/30 group-hover:border-primary transition-colors duration-300" />

          {/* Content Overlay */}
          <div
            className={`absolute inset-0 p-6 flex flex-col justify-end transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            {/* Top Badge */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="bg-primary text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest flex items-center gap-1">
                Read <ArrowUpRight size={10} />
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {comic.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono border border-white/20 text-gray-300 px-2 py-0.5 rounded backdrop-blur-sm group-hover:border-primary/50 group-hover:text-primary transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-3xl font-display font-bold text-white mb-1 leading-none transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 origin-left group-hover:scale-105">
              {comic.title}
            </h3>

            {/* Author */}
            <p className="text-xs font-mono text-gray-400 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              // {comic.author}
            </p>

            {/* Description Reveal */}
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
              <div className="overflow-hidden">
                <p className="text-sm text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 border-l-2 border-primary pl-3 mb-2">
                  {comic.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mt-2">
                  <BookOpen size={14} /> Start Reading
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ComicCard;
