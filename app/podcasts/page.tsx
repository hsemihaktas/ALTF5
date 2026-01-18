"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mic, Search } from "lucide-react";
import PodcastCard from "@/components/common/PodcastCard";
import { useDataStore } from "@/lib/store";

export default function PodcastsPage() {
  const { podcasts } = useDataStore();
  const allPodcasts = [...podcasts, ...podcasts, ...podcasts];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Featured Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-2xl overflow-hidden bg-surface border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent pointer-events-none" />
          <div className="relative z-10 flex-1">
            <div className="flex items-center gap-2 text-secondary mb-4">
              <span className="animate-pulse w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-mono text-xs uppercase tracking-widest">
                Live Frequency
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              AUDIO LOGS
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Dive into deep conversations about creativity, tech, and the void.
              Featuring interviews with indie devs, artists, and sound
              designers.
            </p>
            <div className="relative max-w-md">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />
              <input
                type="text"
                placeholder="Search episodes..."
                className="w-full bg-black/50 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:border-secondary transition-colors"
              />
            </div>
          </div>
          <div className="relative z-10 w-full md:w-1/3 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-dashed border-secondary/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
              <Mic size={48} className="text-secondary" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-secondary/10 blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex gap-8 border-b border-white/10 text-sm font-bold uppercase tracking-wider pb-4">
          <button className="text-white border-b-2 border-secondary pb-4 -mb-4.5">
            Latest Episodes
          </button>
          <button className="text-gray-500 hover:text-white transition-colors">
            Series
          </button>
          <button className="text-gray-500 hover:text-white transition-colors">
            Playlists
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allPodcasts.map((pod, index) => (
            <PodcastCard key={`${pod.id}-${index}`} podcast={pod} />
          ))}
        </div>
      </div>
    </div>
  );
}
