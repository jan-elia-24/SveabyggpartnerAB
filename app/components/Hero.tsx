"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex flex-col justify-end">
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
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-rust"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Top nav bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-10 py-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <span className="font-heading font-bold uppercase text-foreground text-xl tracking-widest">
          YOUNAN
        </span>
        <nav className="hidden md:flex gap-10">
          {["Jobb", "Kontakt"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-heading uppercase tracking-widest text-xs text-muted hover:text-rust transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 px-10 md:px-16 pb-24">
        <motion.p
          className="font-heading uppercase tracking-[0.45em] text-rust text-xs mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hantverksföretag · Stockholm
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            className="font-heading font-bold uppercase text-foreground leading-[0.88]"
            style={{ fontSize: "clamp(5rem, 18vw, 22rem)" }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            YOU
            <br />
            NAN
          </motion.h1>
        </div>

        <motion.div
          className="h-[3px] bg-rust mt-10 mb-8"
          style={{ width: "clamp(60px, 10vw, 160px)", transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        />

        <motion.p
          className="font-heading uppercase tracking-[0.28em] text-muted leading-loose"
          style={{ fontSize: "clamp(0.75rem, 2vw, 1.1rem)" }}
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
          className="inline-flex items-center gap-4 mt-12 px-8 py-4 bg-rust text-foreground font-heading uppercase tracking-[0.3em] text-xs hover:bg-rust-hover transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          whileHover={{ x: 4 }}
        >
          Kontakta oss
          <span className="text-lg leading-none">→</span>
        </motion.a>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 right-10 flex flex-col items-center gap-2"
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
