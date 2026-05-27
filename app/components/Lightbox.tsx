"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Project = {
  title: string;
  category: string;
  location: string;
  detail: string;
  gradient: string;
  images: string[];
};

type Props = {
  project: Project;
  onClose: () => void;
};

export default function Lightbox({ project, onClose }: Props) {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i - 1 + project.images.length) % project.images.length);
  }
  function next() {
    setIndex((i) => (i + 1) % project.images.length);
  }

  useEffect(() => {
    setIndex(0);
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/92" />

      {/* Panel */}
      <motion.div
        className="relative z-10 w-full max-w-4xl flex flex-col"
        initial={{ scale: 0.94, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4 px-1">
          <div>
            <p className="font-heading uppercase tracking-[0.4em] text-rust text-[10px] mb-1">
              {project.category} · {project.location}
            </p>
            <h3 className="font-heading font-bold uppercase text-foreground text-2xl md:text-4xl leading-none">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-muted hover:text-foreground transition-colors ml-6 mt-1 cursor-pointer"
            aria-label="Stäng"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: "clamp(240px, 55vh, 560px)" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute inset-0"
              style={{ background: project.images[index] }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </AnimatePresence>

          {/* Prev / Next */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-rust transition-colors cursor-pointer"
                aria-label="Föregående"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-rust transition-colors cursor-pointer"
                aria-label="Nästa"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}

          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-rust pointer-events-none" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-rust pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-rust pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-rust pointer-events-none" />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 px-1">
          <p className="font-sans text-muted text-sm">{project.detail}</p>
          <div className="flex items-center gap-2">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 transition-colors cursor-pointer ${
                  i === index ? "bg-rust" : "bg-border hover:bg-muted"
                }`}
                aria-label={`Bild ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
