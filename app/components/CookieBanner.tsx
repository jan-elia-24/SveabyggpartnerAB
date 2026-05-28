"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookies-accepted", "1");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="px-8 md:px-16 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-7xl mx-auto">
            <p className="font-sans text-muted text-sm leading-relaxed max-w-2xl">
              Vi använder cookies för att webbplatsen ska fungera korrekt och för att analysera trafiken. Inga personuppgifter säljs eller delas med tredje part.
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={accept}
                className="font-heading uppercase tracking-[0.3em] text-xs bg-rust text-foreground px-6 py-3 hover:bg-rust-hover transition-colors cursor-pointer"
              >
                Godkänn
              </button>
              <button
                onClick={accept}
                className="font-heading uppercase tracking-[0.3em] text-xs text-muted hover:text-foreground transition-colors cursor-pointer text-[10px]"
              >
                Stäng
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
