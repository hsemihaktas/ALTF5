"use client";

import React from "react";
import { motion } from "framer-motion";

const ComicCardSkeleton: React.FC = () => {
  return (
    <motion.div
      key="skeleton"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 z-30 bg-surfaceHighlight flex flex-col justify-end p-6 overflow-hidden"
    >
      {/* Background Pulse */}
      <div className="absolute inset-0 bg-white/5 animate-pulse" />

      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

      {/* Content Shapes */}
      <div className="relative space-y-4 z-10">
        <div className="flex gap-2">
          <div className="h-4 w-16 bg-white/10 rounded" />
          <div className="h-4 w-12 bg-white/10 rounded" />
        </div>
        <div className="h-8 w-3/4 bg-white/10 rounded" />
        <div className="h-3 w-1/3 bg-white/10 rounded" />
      </div>

      {/* Shimmer Sweep Animation */}
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent z-20" />
    </motion.div>
  );
};

export default ComicCardSkeleton;
