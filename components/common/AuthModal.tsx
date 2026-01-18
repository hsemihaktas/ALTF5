"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, ArrowRight, Lock } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const AuthModal: React.FC = () => {
  const { isAuthOpen, closeAuth } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeAuth();
  };

  return (
    <AnimatePresence>
      {isAuthOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
          onClick={handleBackdropClick}
        >
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md max-h-full overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl z-10 hide-scrollbar"
          >
            {/* Cyberpunk Decorative Line */}
            <div className="sticky top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary z-20" />

            <button
              onClick={closeAuth}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
            >
              <X size={20} />
            </button>

            <div className="p-8 pt-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold text-white mb-2">
                  {mode === "login" ? "WELCOME BACK" : "JOIN THE COLLECTIVE"}
                </h2>
                <p className="text-gray-400 text-sm">
                  {mode === "login"
                    ? "Access your digital library."
                    : "Start your journey into the void."}
                </p>
              </div>

              {/* Social Logins */}
              <div className="space-y-3 mb-6">
                <button className="w-full bg-white hover:bg-gray-100 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-3 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </button>
                <button className="w-full bg-[#1c1c1e] hover:bg-[#2c2c2e] border border-white/10 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-3 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  Continue with Apple
                </button>
              </div>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#0a0a0a] px-2 text-gray-500">
                    Or continue with email
                  </span>
                </div>
              </div>

              {/* Email Form */}
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-500 uppercase">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                      size={18}
                    />
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-500 uppercase">
                    Password
                  </label>
                  <div className="relative">
                    <Lock
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                      size={18}
                    />
                    <input
                      type="password"
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <button className="w-full bg-primary text-black font-bold font-display uppercase tracking-wider py-3 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2 group mt-2">
                  {mode === "login" ? "Sign In" : "Create Account"}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>

              {/* Toggle Mode */}
              <div className="mt-6 text-center text-sm">
                <p className="text-gray-400">
                  {mode === "login"
                    ? "Don't have an account? "
                    : "Already have an account? "}
                  <button
                    onClick={() =>
                      setMode(mode === "login" ? "signup" : "login")
                    }
                    className="text-primary hover:text-white font-bold transition-colors uppercase tracking-wide"
                  >
                    {mode === "login" ? "Sign Up" : "Log In"}
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
