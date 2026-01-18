"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Play,
  Star,
  Terminal,
  Cpu,
  Monitor,
  HardDrive,
  Gamepad2,
  Heart,
  ShoppingBag,
} from "lucide-react";
import { useDataStore } from "@/lib/store";

export default function GameDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const { getGameById } = useDataStore();
  const game = getGameById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Game not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white pb-32 lg:pb-20">
      {/* Hero Banner */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10 }}
          className="absolute inset-0"
        >
          <Image
            src={game.coverImage}
            alt="Hero"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full z-20 px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-white/80 hover:text-white mb-4 md:mb-6 backdrop-blur-md bg-black/30 px-4 py-2 rounded-full text-xs md:text-sm transition-colors cursor-pointer"
            >
              <ArrowLeft size={16} className="mr-2" /> Back
            </button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-2 md:mb-4">
                {game.isOriginal && (
                  <span className="bg-primary text-black text-[10px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 uppercase tracking-widest skew-x-[-10deg]">
                    Original
                  </span>
                )}
                <span className="text-primary font-mono text-xs md:text-sm flex items-center gap-2">
                  <Terminal size={14} /> {game.developer}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-4 leading-none text-shadow-lg break-words">
                {game.title}
              </h1>
              <div className="flex items-center gap-4 text-sm md:text-base">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < Math.floor(game.rating)
                          ? "fill-current"
                          : "text-gray-500"
                      }
                    />
                  ))}
                  <span className="text-gray-300 ml-2">
                    ({game.rating}/5.0)
                  </span>
                </div>
                <span className="text-gray-500">|</span>
                <span className="text-gray-300">v1.2.4 Stable</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div className="bg-surface/50 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-display font-bold mb-4">
                Transmission
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {game.description}
                <br />
                <br />
                Dive into a world where every pixel matters. Designed by the{" "}
                {game.developer} team, this experience pushes the boundaries of
                browser-based gaming engines. Prepare for high-octane action,
                deep lore, and an original soundtrack that will melt your CPU.
              </p>
            </div>

            {/* System Specs */}
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-display font-bold mb-6">
                System Requirements
              </h3>
              {game.specs ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest mb-2">
                      <Monitor size={14} /> OS
                    </div>
                    <div className="text-white font-mono text-sm">
                      {game.specs.os}
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest mb-2">
                      <Cpu size={14} /> Processor
                    </div>
                    <div className="text-white font-mono text-sm">
                      {game.specs.processor}
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest mb-2">
                      <Terminal size={14} /> Graphics
                    </div>
                    <div className="text-white font-mono text-sm">
                      {game.specs.graphics}
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest mb-2">
                      <HardDrive size={14} /> Storage
                    </div>
                    <div className="text-white font-mono text-sm">
                      {game.specs.storage}
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400">Specifications not available.</p>
              )}
            </div>
          </div>

          {/* Sidebar (Right) - Desktop only */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* Action Card */}
              <div className="bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Gamepad2 size={100} />
                </div>

                <div className="flex items-end gap-2 mb-2">
                  {game.discountedPrice ? (
                    <div className="flex flex-col">
                      <span className="text-gray-500 line-through text-sm">
                        {game.price}
                      </span>
                      <span className="text-3xl font-bold text-primary font-display">
                        {game.discountedPrice}
                      </span>
                    </div>
                  ) : (
                    <span className="text-3xl font-bold text-white font-display">
                      {game.price}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-xs mb-6 uppercase tracking-wider">
                  Browser Compatible • Instant Play
                </p>

                <button className="w-full bg-primary text-black font-bold font-display uppercase tracking-wider py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.3)] mb-3 active:scale-95 duration-200">
                  <Play size={20} fill="currentColor" /> Play Now
                </button>

                {game.marketUrl && (
                  <a
                    href={game.marketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-white/20 text-white font-bold uppercase tracking-wider py-3 rounded-lg hover:bg-[#171a21] hover:border-[#66c0f4] hover:text-[#66c0f4] transition-colors text-sm flex items-center justify-center gap-2 mb-3"
                  >
                    <ShoppingBag size={16} /> Get on Steam
                  </a>
                )}

                <button className="w-full border border-white/20 text-white font-bold uppercase tracking-wider py-3 rounded-lg hover:bg-white/10 transition-colors text-sm">
                  Add to Wishlist
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Indie",
                  "Action",
                  "Singleplayer",
                  "Atmospheric",
                  "Great Soundtrack",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar for Mobile/Tablet */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] p-4 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 flex gap-3 pb-safe-area shadow-[0_-10px_40px_rgba(0,0,0,0.8)]"
      >
        <div className="flex-1 flex gap-2">
          <button className="flex-1 bg-primary text-black font-bold font-display uppercase tracking-widest py-3 rounded-lg shadow-[0_0_20px_rgba(204,255,0,0.3)] flex items-center justify-center gap-2 active:scale-95 transition-transform text-xs sm:text-sm">
            <Play size={20} fill="currentColor" /> Play
          </button>
          {game.marketUrl && (
            <a
              href={game.marketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-surface border border-white/20 text-white font-bold font-display uppercase tracking-widest py-3 rounded-lg flex items-center justify-center gap-2 active:scale-95 transition-transform text-xs sm:text-sm hover:text-[#66c0f4] hover:border-[#66c0f4]"
            >
              <ShoppingBag size={20} /> Steam
            </a>
          )}
        </div>
        <button className="p-4 rounded-lg bg-surface border border-white/10 text-white active:bg-white/10 active:scale-95 transition-all">
          <Heart size={20} />
        </button>
      </motion.div>
    </div>
  );
}
