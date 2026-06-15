"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Om oss", href: "#om-oss" },
  { label: "Jobb", href: "#jobb" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex flex-col justify-end">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }}
      />

      {/* Left accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#c85a1e] pointer-events-none"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Nav */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 md:px-10 py-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10 ml-auto">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-heading uppercase tracking-widest text-xs text-[#7a6a58] hover:text-[#c85a1e] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden ml-auto font-heading uppercase tracking-[0.3em] text-xs cursor-pointer transition-colors"
          style={{ color: menuOpen ? "#c85a1e" : "#7a6a58" }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Meny"
        >
          {menuOpen ? "STÄNG" : "MENY"}
        </button>
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-10 md:hidden"
            style={{ backgroundColor: "#0a0a0a" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map(({ label, href }, i) => (
              <motion.a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-heading font-bold uppercase tracking-[0.3em] text-2xl text-[#f0e8d8] hover:text-[#c85a1e] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="relative z-10 px-8 md:px-16 pb-16 md:pb-24">
        <div className="overflow-hidden">
          <motion.h1
            className="font-heading font-bold uppercase leading-[0.88]"
            style={{ fontSize: "clamp(3.5rem, 7vw, 9rem)", color: "#f0e8d8" }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            SVEA<br />
            BYGG<br />
            PARTNER AB
          </motion.h1>
        </div>

        <motion.div
          className="h-[3px] bg-[#c85a1e] mt-10 mb-8"
          style={{ width: "clamp(60px, 10vw, 160px)", transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        />

        <motion.p
          className="font-heading uppercase tracking-[0.15em] md:tracking-[0.28em] leading-loose"
          style={{ fontSize: "clamp(0.85rem, 2.5vw, 1.1rem)", color: "#7a6a58" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          Vi bygger med händerna.
          <br />
          Vi levererar med stolthet.
        </motion.p>

        <motion.a
          href="#kontakt"
          className="inline-flex items-center gap-4 mt-12 px-8 py-4 bg-[#c85a1e] text-[#f0e8d8] font-heading uppercase tracking-[0.3em] text-xs hover:bg-[#d4682c] transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ opacity: { duration: 0.5, delay: 1.3 }, filter: { duration: 0.2 }, x: { duration: 0.2 } }}
          style={{ filter: "drop-shadow(0 0 0px transparent)" }}
          whileHover={{ x: 4, filter: "drop-shadow(0 0 8px #c85a1e) drop-shadow(0 0 18px #c85a1e) drop-shadow(0 0 32px rgba(200,90,30,0.6))" }}
        >
          Kontakta oss
          <span className="text-lg leading-none">→</span>
        </motion.a>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 right-10 hidden sm:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="font-heading uppercase tracking-[0.3em] text-[10px] text-border rotate-90 mb-4">
          Scrolla
        </span>
        <motion.div
          className="w-[1px] h-16 bg-border"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
