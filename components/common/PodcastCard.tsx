"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Podcast } from "@/lib/types";
import { Play, Headphones, Radio } from "lucide-react";

interface Props {
  podcast: Podcast;
}

const PodcastCard: React.FC<Props> = ({ podcast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative h-[380px] w-full perspective-1000"
    >
      <Link href={`/podcast/${podcast.id}`} className="block h-full w-full">
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-surface border border-white/10 group-hover:border-secondary/50 transition-all duration-500 ease-out shadow-lg group-hover:shadow-[0_0_30px_-5px_rgba(157,78,221,0.3)]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={podcast.coverImage}
              alt={podcast.title}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1 opacity-60 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Cyberpunk Mesh Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
          </div>

          {/* Floating Play Button (Centers on Hover) */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-secondary group-hover:text-black group-hover:border-secondary transition-all duration-300 shadow-2xl">
              <Play className="fill-current ml-1" size={28} />
            </motion.div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
            {/* Top Info */}
            <div className="flex justify-between items-start transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-black/50 backdrop-blur px-2 py-1 rounded text-secondary border border-secondary/20">
                <Radio size={12} /> Episode{" "}
                {podcast.episode < 10 ? `0${podcast.episode}` : podcast.episode}
              </span>
              <span className="text-[10px] font-mono text-gray-300 flex items-center gap-1">
                <Headphones size={12} /> {podcast.duration}
              </span>
            </div>

            {/* Bottom Info */}
            <div>
              <h3 className="text-2xl font-display font-bold text-white leading-tight mb-2 group-hover:text-secondary transition-colors">
                {podcast.title}
              </h3>

              {/* Animated Waveform (Only animates on hover) */}
              <div className="flex items-end gap-1 h-8 mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-white group-hover:bg-secondary rounded-full"
                    animate={{ height: ["20%", "80%", "40%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: i * 0.05,
                      repeatType: "mirror",
                    }}
                    style={{ height: "30%" }}
                  />
                ))}
              </div>

              <p className="text-sm text-gray-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 transform translate-y-4 group-hover:translate-y-0">
                {podcast.description}
              </p>
            </div>
          </div>

          {/* Decorative Borders */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
        </div>
      </Link>
    </motion.div>
  );
};

export default PodcastCard;
