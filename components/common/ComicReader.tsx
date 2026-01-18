"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

interface Props {
  pages: string[];
  title: string;
  onClose: () => void;
  className?: string;
}

const PageImage = ({
  src,
  side,
}: {
  src: string | null;
  side: "left" | "right";
}) => {
  if (!src) return <div className="w-full h-full bg-transparent" />;

  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      <Image
        src={src}
        alt=""
        fill
        className="object-fill select-none pointer-events-none"
      />
      <div className="absolute inset-0 bg-noise opacity-[0.12] mix-blend-multiply pointer-events-none" />
      <div
        className={`absolute inset-y-0 ${side === "left" ? "right-0 w-8 md:w-16 bg-gradient-to-l" : "left-0 w-8 md:w-16 bg-gradient-to-r"} from-black/20 to-transparent mix-blend-multiply pointer-events-none`}
      />
    </div>
  );
};

const ComicReader: React.FC<Props> = ({
  pages,
  title,
  onClose,
  className = "",
}) => {
  const [viewMode, setViewMode] = useState<"mobile" | "tablet" | "desktop">(
    "desktop",
  );
  const [showControls, setShowControls] = useState(true);

  const [[page, direction], setPage] = useState([0, 0]);
  const currentPageIndex = page;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setViewMode("mobile");
      else if (width < 1024) setViewMode("tablet");
      else setViewMode("desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSpreadView = viewMode === "desktop";

  const spreads = useMemo(() => {
    const s: (string | null)[][] = [];
    if (pages.length > 0) {
      s.push([null, pages[0]]);
      for (let i = 1; i < pages.length; i += 2) {
        s.push([pages[i], pages[i + 1] || null]);
      }
    }
    return s;
  }, [pages]);

  const getSpreadIndex = (pageIdx: number) => {
    if (pageIdx === 0) return 0;
    return Math.ceil(pageIdx / 2);
  };

  const currentSpreadIndex = getSpreadIndex(currentPageIndex);
  const currentSpread = spreads[currentSpreadIndex] || [null, null];
  const [isTurning, setIsTurning] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (zoom === 1) setPosition({ x: 0, y: 0 });
  }, [zoom]);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage < 0 || newPage >= pages.length) return;
    setPage([newPage, newDirection]);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isTurning) return;

    if (!isSpreadView) {
      if (currentPageIndex < pages.length - 1) paginate(1);
    } else {
      if (currentSpreadIndex < spreads.length - 1) {
        setIsTurning(true);
        setTimeout(() => {
          const nextSpreadIdx = currentSpreadIndex + 1;
          const nextPageIdx =
            nextSpreadIdx === 0 ? 0 : (nextSpreadIdx - 1) * 2 + 1;
          setPage([nextPageIdx, 1]);
          setIsTurning(false);
        }, 300);
      }
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isTurning) return;

    if (!isSpreadView) {
      if (currentPageIndex > 0) paginate(-1);
    } else {
      if (currentSpreadIndex > 0) {
        setIsTurning(true);
        setTimeout(() => {
          const prevSpreadIdx = currentSpreadIndex - 1;
          const prevPageIdx =
            prevSpreadIdx === 0 ? 0 : (prevSpreadIdx - 1) * 2 + 1;
          setPage([prevPageIdx, -1]);
          setIsTurning(false);
        }, 300);
      }
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT") return;
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        handleNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      }
      if (e.key === "Escape") onClose();
      if (e.key === "=" || e.key === "+")
        setZoom((z) => Math.min(2.5, z + 0.25));
      if (e.key === "-") setZoom((z) => Math.max(0.5, z - 0.25));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [
    page,
    isTurning,
    viewMode,
    currentSpreadIndex,
    handleNext,
    handlePrev,
    onClose,
  ]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`relative w-full h-full bg-[#111] flex flex-col overflow-hidden border-2 border-primary/20 ${className}`}
    >
      {/* TOP CONTROL BAR */}
      <motion.div
        animate={{
          height: showControls ? "auto" : 0,
          opacity: showControls ? 1 : 0,
        }}
        className="flex-none bg-[#1a1a1a] border-b border-white/10 z-30 overflow-hidden"
      >
        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="p-2 bg-white/10 hover:bg-red-600 hover:text-white rounded-full transition-colors text-white/70"
            >
              <X size={16} />
            </button>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase truncate max-w-[150px]">
                {title}
              </span>
              <span className="text-primary text-[10px] font-mono">
                {!isSpreadView
                  ? `PAGE ${page + 1} / ${pages.length}`
                  : currentSpreadIndex === 0
                    ? "COVER"
                    : `SPREAD ${currentSpreadIndex} / ${spreads.length - 1}`}
              </span>
            </div>
          </div>
          {/* Zoom Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}
              className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
            >
              <ZoomOut size={16} />
            </button>
            <button
              onClick={() => setZoom((z) => Math.min(2.5, z + 0.25))}
              className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
            >
              <ZoomIn size={16} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* MIDDLE IMAGE AREA */}
      <div
        className="flex-1 relative w-full overflow-hidden bg-[#050505]"
        onClick={() => setShowControls((prev) => !prev)}
      >
        <div className="w-full h-full flex items-center justify-center relative p-0 sm:p-4">
          <motion.div className="relative w-full h-full flex items-center justify-center perspective-[2000px]">
            <motion.div
              animate={{
                scale: zoom,
                x: zoom === 1 ? 0 : position.x,
                y: zoom === 1 ? 0 : position.y,
              }}
              drag={zoom > 1}
              dragConstraints={{
                left: -1500,
                right: 1500,
                top: -1500,
                bottom: 1500,
              }}
              dragElastic={0.05}
              dragMomentum={true}
              onDragEnd={(e, info) => {
                setPosition({
                  x: position.x + info.offset.x,
                  y: position.y + info.offset.y,
                });
              }}
              transition={{
                scale: { type: "spring", stiffness: 200, damping: 25 },
                x: { type: "spring", stiffness: 300, damping: 30 },
                y: { type: "spring", stiffness: 300, damping: 30 },
              }}
              className={`relative pointer-events-auto origin-center
                    ${
                      !isSpreadView
                        ? "w-full h-full p-2"
                        : "h-full w-auto aspect-[4/3] max-w-full shadow-2xl mx-auto"
                    }
                    ${zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-default"}
                `}
            >
              {!isSpreadView ? (
                <div className="w-full h-full relative overflow-hidden bg-transparent flex items-center justify-center">
                  {!showControls && (
                    <>
                      <div
                        className="absolute inset-y-0 left-0 w-1/3 z-30"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrev();
                        }}
                      />
                      <div
                        className="absolute inset-y-0 right-0 w-1/3 z-30"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNext();
                        }}
                      />
                    </>
                  )}

                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={page}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Image
                        src={pages[page] || ""}
                        alt={`Page ${page + 1}`}
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : (
                <div className="w-full h-full relative preserve-3d">
                  <div className="absolute inset-0 flex bg-transparent">
                    <div className="w-1/2 h-full relative z-0">
                      <PageImage side="left" src={currentSpread[0]} />
                    </div>
                    <div className="w-1/2 h-full relative z-0">
                      <PageImage side="right" src={currentSpread[1]} />
                    </div>
                  </div>
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-black/20 via-black/5 to-black/20 blur-sm pointer-events-none z-30 opacity-60" />
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM CONTROL BAR */}
      <motion.div
        animate={{
          height: showControls ? "auto" : 0,
          opacity: showControls ? 1 : 0,
        }}
        className="flex-none bg-[#1a1a1a] border-t border-white/10 z-30 overflow-hidden pb-safe-area"
      >
        <div className="flex justify-center items-center p-3 gap-6 sm:gap-12">
          <button
            onClick={handlePrev}
            disabled={
              !isSpreadView ? page === 0 : currentSpreadIndex === 0 || isTurning
            }
            className="w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-primary hover:text-black text-white disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white transition-all active:scale-95 border border-white/10"
          >
            <ChevronLeft size={32} strokeWidth={2} />
          </button>

          <div className="flex flex-col items-center w-20">
            <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">
              {viewMode === "mobile"
                ? "Mobile"
                : viewMode === "tablet"
                  ? "Tablet"
                  : "Page"}
            </span>
            <span className="text-xl font-bold text-white leading-none">
              {!isSpreadView ? page + 1 : currentSpreadIndex}
            </span>
          </div>

          <button
            onClick={handleNext}
            disabled={
              !isSpreadView
                ? page === pages.length - 1
                : currentSpreadIndex === spreads.length - 1 || isTurning
            }
            className="w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-primary hover:text-black text-white disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white transition-all active:scale-95 border border-white/10"
          >
            <ChevronRight size={32} strokeWidth={2} />
          </button>
        </div>
      </motion.div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .perspective-2000 {
          perspective: 2000px;
        }
        .pb-safe-area {
          padding-bottom: max(0px, env(safe-area-inset-bottom));
        }
      `}</style>
    </motion.div>
  );
};

export default ComicReader;
