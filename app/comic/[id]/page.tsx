"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, BookOpen, Share2, Heart } from "lucide-react";
import ComicReader from "@/components/common/ComicReader";
import { useDataStore } from "@/lib/store";

export default function ComicDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const { getComicById } = useDataStore();
  const comic = getComicById(id);
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [isReading]);

  if (!comic) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Comic not found
      </div>
    );
  }

  return (
    <>
      <div
        className={`min-h-screen px-4 md:px-8 relative z-0 ${isReading ? "pt-24 md:pt-28 lg:pt-32" : "pt-20 md:pt-24 pb-32 lg:pb-20"}`}
      >
        <div className="max-w-7xl mx-auto h-full">
          {!isReading && (
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-gray-400 hover:text-white mb-6 md:mb-8 transition-colors group"
            >
              <ArrowLeft
                size={20}
                className="mr-2 group-hover:-translate-x-1 transition-transform"
              />{" "}
              Back
            </button>
          )}

          <AnimatePresence mode="wait">
            {!isReading ? (
              <motion.div
                key="details"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
              >
                {/* Left Column: Cover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative group mx-auto lg:mx-0 max-w-sm md:max-w-md lg:max-w-none w-full"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <Image
                    src={comic.coverImage}
                    alt={comic.title}
                    width={600}
                    height={900}
                    className="relative rounded-xl w-full shadow-2xl object-cover aspect-[2/3]"
                  />
                </motion.div>

                {/* Right Column: Info */}
                <div className="flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                      {comic.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 border border-primary/30 text-primary text-[10px] md:text-xs font-bold uppercase rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 leading-none break-words">
                      {comic.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-gray-400 mb-6 md:mb-8 border-b border-white/10 pb-6 md:pb-8 text-xs md:text-sm">
                      <span className="font-mono whitespace-nowrap">
                        BY {comic.author.toUpperCase()}
                      </span>
                      <span className="inline w-1 h-1 bg-gray-600 rounded-full"></span>
                      <span className="font-mono whitespace-nowrap">
                        {comic.pages.length} PAGES
                      </span>
                      <span className="hidden sm:inline w-1 h-1 bg-gray-600 rounded-full"></span>
                      <span className="font-mono whitespace-nowrap">
                        UPDATED RECENTLY
                      </span>
                    </div>

                    <p className="text-sm md:text-base lg:text-xl text-gray-300 leading-relaxed mb-8 md:mb-10 font-light">
                      {comic.description}
                    </p>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => setIsReading(true)}
                        className="flex-1 group relative bg-primary text-black font-bold text-lg py-5 rounded-lg overflow-hidden flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_40px_rgba(204,255,0,0.6)] transition-all transform hover:-translate-y-1"
                      >
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <BookOpen size={24} className="relative z-10" />
                        <span className="relative z-10 tracking-wider">
                          START READING
                        </span>
                      </button>

                      <div className="flex gap-4">
                        <button className="flex-1 sm:flex-none p-4 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center justify-center group">
                          <Heart
                            size={24}
                            className="group-hover:text-red-500 transition-colors"
                          />
                        </button>
                        <button className="flex-1 sm:flex-none p-4 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center justify-center group">
                          <Share2
                            size={24}
                            className="group-hover:text-primary transition-colors"
                          />
                        </button>
                      </div>
                    </div>

                    {/* Editor's Note */}
                    <div className="mt-8 lg:mt-12 p-6 bg-surface border border-white/5 rounded-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full pointer-events-none" />
                      <h4 className="text-sm font-bold text-gray-500 uppercase mb-2">
                        Editor&apos;s Note
                      </h4>
                      <p className="text-sm text-gray-400 italic relative z-10">
                        &quot;This issue features the debut of the antagonist,
                        heavily inspired by brutalist architecture and 80s synth
                        aesthetics.&quot;
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="reader"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full h-[75vh] md:h-[80vh] lg:h-[85vh] bg-[#111] rounded-xl overflow-hidden shadow-2xl border border-white/10 mb-10"
              >
                <ComicReader
                  pages={comic.pages}
                  title={comic.title}
                  onClose={() => setIsReading(false)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* STICKY ACTION BAR - Mobile/Tablet */}
      {!isReading && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] p-4 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 flex gap-3 pb-safe-area shadow-[0_-10px_40px_rgba(0,0,0,0.8)]"
        >
          <button
            onClick={() => setIsReading(true)}
            className="flex-1 bg-primary text-black font-bold font-display uppercase tracking-widest py-4 rounded-lg shadow-[0_0_20px_rgba(204,255,0,0.3)] flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <BookOpen size={20} /> Start Reading
          </button>
          <button className="p-4 rounded-lg bg-surface border border-white/10 text-white active:bg-white/10 active:scale-95 transition-all">
            <Heart size={20} />
          </button>
          <button className="p-4 rounded-lg bg-surface border border-white/10 text-white active:bg-white/10 active:scale-95 transition-all">
            <Share2 size={20} />
          </button>
        </motion.div>
      )}
    </>
  );
}
