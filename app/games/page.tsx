"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Gamepad2, Zap } from "lucide-react";
import GameCard from "@/components/common/GameCard";
import { useDataStore } from "@/lib/store";

export default function GamesPage() {
  const { games } = useDataStore();
  const allGames = [...games, ...games, ...games];

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20">
      {/* Hero Banner for Games */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <div className="relative min-h-[50vh] md:min-h-[450px] rounded-2xl overflow-hidden group flex items-end shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
            alt="Arcade Header"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent md:via-black/60" />

          <div className="relative z-10 p-5 sm:p-8 md:p-12 w-full max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3 md:mb-4">
              <span className="bg-primary text-black font-bold text-[10px] md:text-xs px-2 py-1 uppercase rounded-sm tracking-wider">
                Featured
              </span>
              <span className="text-gray-300 font-mono text-[10px] md:text-xs uppercase bg-black/50 backdrop-blur px-2 py-1 rounded">
                Action / Roguelike
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-3 md:mb-4 leading-none text-shadow-md">
              CYBER SQUIRRELS
            </h1>

            <p className="text-gray-200 text-sm md:text-lg mb-6 leading-relaxed max-w-xl drop-shadow-md hidden sm:block">
              Defend your nut stash in a post-apocalyptic neon forest. Upgrade
              your cybernetics and fight off robotic predators in this
              high-octane adventure.
            </p>

            <p className="text-gray-300 text-sm mb-6 sm:hidden line-clamp-2">
              Defend your nut stash in a post-apocalyptic neon forest.
              High-octane action awaits.
            </p>

            <div className="flex gap-4">
              <button className="bg-white text-black font-bold uppercase px-6 py-3 md:px-8 md:py-4 hover:bg-primary transition-colors skew-x-[-10deg] text-xs md:text-sm tracking-widest active:scale-95">
                <span className="block skew-x-[10deg]">Play Now</span>
              </button>
              <button className="hidden sm:block border border-white/30 text-white font-bold uppercase px-6 py-3 md:px-8 md:py-4 hover:bg-white/10 transition-colors skew-x-[-10deg] text-xs md:text-sm tracking-widest">
                <span className="block skew-x-[10deg]">Details</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white flex items-center gap-3">
            <Gamepad2 className="text-primary" size={24} />
            THE ARCADE
          </h2>
          <p className="text-gray-500 font-mono text-xs md:text-sm mt-1 md:mt-2">
            Indie gems developed by the collective.
          </p>
        </div>
        <div className="hidden sm:flex gap-2">
          <button className="w-10 h-10 border border-white/20 rounded hover:bg-white/10 flex items-center justify-center text-white transition-colors">
            <Zap size={18} />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 sm:gap-6 md:gap-8">
          {allGames.map((game, index) => (
            <GameCard key={`${game.id}-${index}`} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
