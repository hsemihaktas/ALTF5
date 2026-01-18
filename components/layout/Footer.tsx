import React from "react";
import { Twitter, Instagram, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-white/5 py-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 group">
              <div className="bg-primary text-black font-display font-bold text-lg px-2 py-0.5 -skew-x-12">
                ALT
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter text-white">
                F5
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              We are a digital collective building the future of storytelling.
              <br />
              <span className="text-primary font-mono mt-2 block">
                &gt; Initializing sequence...
              </span>
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary hover:text-black transition-all duration-300 group"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary hover:text-black transition-all duration-300 group"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary hover:text-black transition-all duration-300 group"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-[0.2em] text-primary">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-mono">
              <li>
                <a
                  href="/comics"
                  className="hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                  _Comics
                </a>
              </li>
              <li>
                <a
                  href="/podcasts"
                  className="hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                  _Podcasts
                </a>
              </li>
              <li>
                <a
                  href="/games"
                  className="hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                  _Games
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                  _Merch
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-[0.2em] text-primary">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-mono">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                  _Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                  _Submit Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                  _About
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
          <p>© {new Date().getFullYear()} ALT F5. ALL RIGHTS RESERVED.</p>
          <p>DESIGNED IN THE VOID</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
