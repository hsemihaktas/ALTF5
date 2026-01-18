"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import ComicCard from "@/components/common/ComicCard";
import PodcastCard from "@/components/common/PodcastCard";
import GameCard from "@/components/common/GameCard";
import { useDataStore } from "@/lib/store";

const SectionTitle = ({
  children,
  subtitle,
}: {
  children?: React.ReactNode;
  subtitle: string;
}) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-display font-bold mb-2"
    >
      {children}
    </motion.h2>
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="flex items-center gap-4"
    >
      <div className="h-px w-12 bg-primary" />
      <span className="text-gray-400 uppercase tracking-widest text-sm">
        {subtitle}
      </span>
    </motion.div>
  </div>
);

export default function Home() {
  const { comics, podcasts, games } = useDataStore();

  return (
    <div className="pb-20">
      <Hero />

      {/* Featured / Highlight Strip (Horizontal Scroll) */}
      <section className="py-12 bg-surfaceHighlight border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-mono text-primary mb-4 uppercase tracking-widest">
            Trending Now
          </p>
          <motion.div
            className="flex gap-8 overflow-x-auto pb-4 hide-scrollbar cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="min-w-[300px] bg-background border border-white/10 p-6 rounded-xl hover:border-white/30 transition-colors group cursor-pointer"
              >
                <div className="text-2xl font-bold font-display mb-2 text-white group-hover:text-primary transition-colors">
                  Issue #{item}4
                </div>
                <div className="text-sm text-gray-400">
                  Exclusive early access for community members.
                </div>
                <div className="mt-4 h-1 w-full bg-white/5 overflow-hidden rounded-full">
                  <div className="h-full bg-primary w-1/3" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comics Section */}
      <section
        id="comics"
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <SectionTitle subtitle="Original Stories">LATEST COMICS</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {comics.slice(0, 3).map((comic, index) => (
            <ComicCard key={comic.id} comic={comic} index={index} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/comics"
            className="group inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
          >
            VIEW ALL ARCHIVES
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>

      {/* Podcasts Section */}
      <section
        id="podcasts"
        className="py-24 bg-surface border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Listen In">PODCASTS & AUDIO</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {podcasts.map((podcast) => (
              <PodcastCard key={podcast.id} podcast={podcast} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/podcasts"
              className="group inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
            >
              BROWSE ALL EPISODES
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section
        id="games"
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <SectionTitle subtitle="Play Now">INDIE GAMES</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/games"
            className="group inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
          >
            ENTER ARCADE
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
