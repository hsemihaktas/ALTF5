"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { openAuth } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Comics", path: "/comics" },
    { name: "Podcasts", path: "/podcasts" },
    { name: "Games", path: "/games" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Stylized Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary translate-x-1 translate-y-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"></div>
              <div className="relative bg-white text-black font-display font-bold text-xl px-3 py-1 border border-black z-10 -skew-x-12">
                ALT
              </div>
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter text-white group-hover:text-primary transition-colors">
              F5
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`relative text-sm font-bold transition-colors uppercase tracking-widest group ${pathname === link.path ? "text-primary" : "text-gray-300 hover:text-white"}`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            ))}
            <button
              onClick={openAuth}
              className="bg-white/10 border border-white/20 text-white px-6 py-2 rounded-none font-bold hover:bg-primary hover:text-black hover:border-primary transition-all text-sm uppercase tracking-wider skew-x-[-10deg]"
            >
              <span className="block skew-x-[10deg]">Join Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:text-primary transition-colors"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden absolute w-full left-0 top-full shadow-2xl"
          >
            <div className="px-4 pt-4 pb-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-display font-bold pl-4 border-l-2 transition-all ${pathname === link.path ? "text-primary border-primary" : "text-gray-300 hover:text-primary border-transparent hover:border-primary"}`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  openAuth();
                }}
                className="bg-white/10 border border-white/20 text-white px-6 py-4 rounded-none font-bold hover:bg-primary hover:text-black hover:border-primary transition-all text-sm uppercase tracking-wider text-center"
              >
                Join The Collective
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
