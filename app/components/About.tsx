"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function About() {
  return (
    <section id="om-oss" className="bg-background py-24 px-10 md:px-16">
      <motion.p
        className="font-heading uppercase tracking-[0.45em] text-rust text-xs mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Vilka vi är
      </motion.p>

      <motion.h2
        className="font-heading font-bold uppercase text-foreground leading-none"
        style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        OM OSS
      </motion.h2>

      <motion.div
        className="h-[3px] w-14 bg-rust mt-6 mb-14"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ transformOrigin: "left" }}
      />

      <div className="max-w-3xl space-y-6">
        {[
          { text: "Svea Bygg Partner AB är ett hantverksföretag med bas i Eskilstuna. Vi utför det mesta inom bygg och snickeri – från mindre renoveringar till större byggprojekt.", highlight: true },
          { text: "Med över 7 års erfarenhet i branschen vet vi vad kvalitet innebär. Vårt team arbetar noggrant, håller tider och levererar resultat som håller länge.", highlight: false },
          { text: "Vi jobbar i hela Sverige – för privatpersoner och företag som ställer höga krav på kvalitet och noggrannhet.", highlight: false },
          { text: "Kontakta oss så berättar vi mer.", highlight: true },
        ].map((p, i) => (
          <motion.p
            key={i}
            className="font-sans text-lg leading-relaxed text-foreground"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.15, ease: EASE }}
          >
            {p.text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
