"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 400]);
  const textY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-black selection:bg-primary selection:text-black">
      {/* Background Image - Comic Style */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-20" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Halftone Overlay for Comic Feel */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.4)_1px,transparent_1px)] bg-[length:4px_4px] z-10 opacity-30 pointer-events-none" />
      </motion.div>

      {/* Atmospheric Glow Blob */}
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/20 blur-[100px] md:blur-[150px] rounded-full animate-pulse-slow z-[1] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-secondary/20 blur-[80px] md:blur-[100px] rounded-full animate-pulse-slow z-[1] pointer-events-none delay-1000" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] animate-noise-move z-[2] pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 text-center px-4 max-w-7xl mx-auto w-full flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full"
        >
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6">
            <div className="h-px w-8 md:w-20 bg-gradient-to-r from-transparent to-primary/50"></div>
            <h2 className="text-primary font-mono text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase whitespace-nowrap">
              System Online v2.5
            </h2>
            <div className="h-px w-8 md:w-20 bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>

          {/* Responsive Typography: Mobile(5xl), Tablet(8xl), Desktop(10rem) */}
          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] leading-[0.9] md:leading-[0.85] tracking-tighter text-white mix-blend-normal break-words mb-2">
            ALT<span className="text-primary">F5</span>
          </h1>

          <p className="font-display text-lg sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-600 font-bold tracking-tight uppercase">
            Refresh Reality
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 md:mt-12 text-sm md:text-lg lg:text-xl text-gray-400 font-light max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed border-l-2 border-primary/30 pl-4 md:pl-6 text-left"
        >
          We are the{" "}
          <span className="text-white font-medium">force reload</span>. A
          collective crafting immersive comics, audio experiences, and indie
          games for those who want to escape the mundane.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-6 sm:px-0"
        >
          <button className="w-full sm:w-auto bg-primary text-black font-bold font-display uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors skew-x-[-10deg] active:scale-95 duration-200">
            <span className="block skew-x-[10deg]">Start Reading</span>
          </button>
          <button className="w-full sm:w-auto border border-white/20 text-white font-bold font-display uppercase tracking-widest px-8 py-4 hover:bg-white/10 transition-colors skew-x-[-10deg] active:scale-95 duration-200">
            <span className="block skew-x-[10deg]">Join Discord</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 md:bottom-10 left-0 right-0 z-10 flex flex-col items-center gap-2 pointer-events-none"
      >
        <div className="h-8 md:h-12 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
        <span className="text-[10px] uppercase tracking-widest font-mono text-gray-500">
          Scroll to Explore
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
