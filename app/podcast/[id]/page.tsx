"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Share2,
  Heart,
  Mic,
  Clock,
} from "lucide-react";
import { useDataStore } from "@/lib/store";

export default function PodcastDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const { getPodcastById } = useDataStore();
  const podcast = getPodcastById(id);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!podcast) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Podcast not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white pb-20 relative overflow-x-hidden">
      {/* Dynamic Background Blur */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-secondary/10 blur-[120px]" />
        <Image
          src={podcast.coverImage}
          alt=""
          fill
          className="object-cover opacity-10 blur-3xl scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="relative z-10 pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />{" "}
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Cover & Player */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group max-w-md mx-auto lg:max-w-none w-full"
            >
              <Image
                src={podcast.coverImage}
                alt={podcast.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.8)_100%)] opacity-60" />

              {isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-white/20 animate-[ping_3s_linear_infinite]" />
                  <div className="absolute w-48 h-48 rounded-full border border-white/10 animate-[ping_4s_linear_infinite_1s]" />
                </div>
              )}
            </motion.div>

            {/* Player Controls */}
            <div className="bg-surface/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl max-w-md mx-auto lg:max-w-none w-full">
              <div className="mb-4">
                <div className="h-1 bg-white/10 rounded-full cursor-pointer group">
                  <div className="h-full bg-secondary w-[30%] relative rounded-full">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="flex justify-between text-xs font-mono text-gray-500 mt-2">
                  <span>12:45</span>
                  <span>{podcast.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Volume2 size={20} />
                </button>
                <div className="flex items-center gap-4 sm:gap-6">
                  <button className="text-gray-400 hover:text-white transition-colors active:scale-95">
                    <SkipBack size={24} />
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary text-black rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(157,78,221,0.4)]"
                  >
                    {isPlaying ? (
                      <Pause size={28} fill="currentColor" />
                    ) : (
                      <Play size={28} fill="currentColor" className="ml-1" />
                    )}
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors active:scale-95">
                    <SkipForward size={24} />
                  </button>
                </div>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Heart size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Info & Notes */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <span className="bg-secondary/20 text-secondary text-xs font-bold px-3 py-1 rounded-full border border-secondary/20 uppercase tracking-widest">
                  Episode {podcast.episode}
                </span>
                <span className="text-gray-400 text-xs font-mono flex items-center gap-1">
                  <Clock size={12} /> RELEASED 2 DAYS AGO
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                {podcast.title}
              </h1>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                {podcast.hosts?.map((host) => (
                  <div
                    key={host}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-1 pr-4 py-1"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <Mic size={14} className="text-gray-300" />
                    </div>
                    <span className="text-sm text-gray-300 font-medium">
                      {host}
                    </span>
                  </div>
                ))}
              </div>

              <div className="prose prose-invert max-w-none text-left">
                <h3 className="text-xl font-bold text-white mb-4">
                  About This Episode
                </h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-6">
                  {podcast.fullDescription || podcast.description}
                </p>

                <div className="bg-black/30 border border-white/5 rounded-xl p-6 mb-6">
                  <h4 className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-widest">
                    Topics Discussed
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      The definition of &apos;Glitch Art&apos;
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      AI tools in 2025 workflows
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      Mental health for digital creators
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      Synthwave music production tips
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start gap-4 mt-4">
                <button className="px-6 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                  <Share2 size={18} /> Share
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
