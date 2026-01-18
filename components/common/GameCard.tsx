"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Game } from "@/lib/types";
import { ArrowRight, Star, Terminal } from "lucide-react";

interface Props {
  game: Game;
}

const GameCard: React.FC<Props> = ({ game }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-[450px] w-full"
    >
      <Link href={`/game/${game.id}`} className="block h-full w-full">
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-surface border border-white/10 group-hover:border-primary transition-colors duration-500">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={game.coverImage}
              alt={game.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black opacity-90" />
          </div>

          {/* Price Tag (Cyberpunk Style) */}
          <div className="absolute top-4 right-4 z-20">
            <div className="relative">
              <div className="absolute inset-0 bg-black skew-x-[-10deg] border border-white/20 group-hover:border-primary transition-colors" />
              <div className="relative px-4 py-2 flex flex-col items-end skew-x-[-10deg]">
                {game.discountedPrice ? (
                  <>
                    <span className="text-[10px] text-gray-500 line-through decoration-red-500 decoration-2">
                      {game.price}
                    </span>
                    <span className="text-lg font-bold text-primary font-display tracking-wider">
                      {game.discountedPrice}
                    </span>
                  </>
                ) : (
                  <span className="text-lg font-bold text-white group-hover:text-primary transition-colors font-display tracking-wider">
                    {game.price}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Original Badge */}
          {game.isOriginal && (
            <div className="absolute top-4 left-4 z-20">
              <div className="bg-primary text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest skew-x-[-10deg] border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                Dev Choice
              </div>
            </div>
          )}

          {/* Content Area */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-500 group-hover:-translate-y-2">
            {/* Tech Line */}
            <div className="flex items-center gap-2 mb-2 opacity-70">
              <Terminal size={12} className="text-primary" />
              <span className="text-[10px] font-mono text-primary uppercase tracking-widest">
                {game.developer}
              </span>
            </div>

            <h3 className="text-3xl font-display font-bold text-white mb-2 leading-none group-hover:text-primary transition-colors">
              {game.title}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < Math.floor(game.rating)
                      ? "fill-current"
                      : "text-gray-700"
                  }
                />
              ))}
              <span className="text-xs text-gray-400 ml-2 font-mono">
                [{game.rating}]
              </span>
            </div>

            {/* Hover Reveal Section */}
            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
              <p className="text-sm text-gray-300 mb-4 font-light leading-relaxed border-l border-white/20 pl-3">
                {game.description}
              </p>

              <button className="w-full bg-white text-black font-bold uppercase tracking-widest py-3 hover:bg-primary transition-colors flex items-center justify-center gap-2 group/btn">
                <ArrowRight
                  size={16}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
                View Details
              </button>
            </div>
          </div>

          {/* Scanline Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
    </motion.div>
  );
};

export default GameCard;
