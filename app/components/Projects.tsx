"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import Lightbox, { type Project } from "./Lightbox";
import type { MediaItem } from "./Lightbox";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const projects: Project[] = [
  {
    title: "Altan och Trädäck",
    category: "Utomhus",
    location: "Eskilstuna",
    detail: "Trädäck & altan med tryckimpregnerat virke",
    gradient: "linear-gradient(145deg, #1a2e18 0%, #243d20 40%, #131f12 100%)",
    media: [
      { type: "image", src: "/altan/18895880-bc56-429f-bd50-3e20a990387c.jpg" },
      { type: "image", src: "/altan/22b4258d-6bc0-4831-bdf8-b523f9570925.jpg" },
      { type: "image", src: "/altan/541b46f2-a3da-4dcf-8a2d-339cdcffb247.jpg" },
      { type: "image", src: "/altan/595b9dc2-5467-4cbd-8865-c065a5644835.jpg" },
      { type: "image", src: "/altan/83f2e2d0-31f8-48bf-a0ee-b195ed03dfc6.jpg" },
      { type: "image", src: "/altan/a34eb57e-0b18-4dd2-b445-71cee8f5a122.jpg" },
    ] as MediaItem[],
  },
  {
    title: "Köksrenovering",
    category: "Renovering",
    location: "Eskilstuna",
    detail: "Helrenovering med nya ytor & belysning",
    gradient: "linear-gradient(145deg, #3a2010 0%, #5c381e 50%, #2a1808 100%)",
    media: [
      { type: "image", src: "/koksrenovering/01bba256-7145-4350-99f1-ed16753f94c6.jpg" },
      { type: "image", src: "/koksrenovering/3eff03d3-39d7-4a84-99dd-6af9087d4821.jpg" },
      { type: "image", src: "/koksrenovering/410c6f33-628b-4f95-a4b8-f32b0dd9f7b8.jpg" },
      { type: "image", src: "/koksrenovering/65ad7cfe-5a36-456b-ac65-a12d50ab0a31.jpg" },
      { type: "image", src: "/koksrenovering/8b00209f-1605-4499-b75d-2b61c0a9d3e2.jpg" },
    ] as MediaItem[],
  },
  {
    title: "Takrenovering / Takbyte",
    category: "Tak",
    location: "Stockholm",
    detail: "Komplett takbyte med nytt taktäckningsmaterial",
    gradient: "linear-gradient(145deg, #1c1c2e 0%, #2a2a42 55%, #141420 100%)",
    media: [
      { type: "image", src: "/takbyte/4b975c6c-3b99-4bf0-9ee1-563381fc6d95.jpg" },
      { type: "image", src: "/takbyte/8dc8f3e6-9aa8-4efe-9037-7346f5bc849d.jpg" },
      { type: "video", src: "/takbyte/04067cf2-d2e9-4586-af48-79997cb2eea2.mp4" },
      { type: "video", src: "/takbyte/62185dac-08c6-447f-ac9c-07d0360bbac4.mp4" },
      { type: "video", src: "/takbyte/992588bf-ca91-446d-99cf-33c5df572939.mp4" },
    ] as MediaItem[],
  },
  {
    title: "Golvläggning",
    category: "Golv",
    location: "Stockholm",
    detail: "Parkett & naturstensklinker",
    gradient: "linear-gradient(145deg, #4a3010 0%, #7a5020 45%, #362208 100%)",
    media: [
      { type: "image", src: "/golv/a6bc1d91-af24-4a95-a016-8cc0ccd4fad5.jpg" },
      { type: "video", src: "/golv/0acdc079-9290-44fa-89ab-19135a17e095.mp4" },
      { type: "video", src: "/golv/261d20a2-74e4-4acf-97e5-f01661174d14.mp4" },
      { type: "video", src: "/golv/5056dd2d-38b8-4a09-92f8-8c5b95ca6429.mp4" },
      { type: "video", src: "/golv/d6c49f5f-0172-44fa-88f4-b559d5c23b51.mp4" },
    ] as MediaItem[],
  },
  {
    title: "Ombyggnation / Tillbyggnad",
    category: "Tillbyggnad",
    location: "Eskilstuna",
    detail: "Ombyggnation & tillbyggnad av befintlig fastighet",
    gradient: "linear-gradient(145deg, #1c2030 0%, #283045 50%, #141825 100%)",
    media: [
      { type: "image", src: "/ombyggnation/1da0ab00-390f-4ac3-af06-200eb5cacf9d.jpg" },
      { type: "image", src: "/ombyggnation/fa65c055-dc33-47ee-a852-e3ce75ddfa10.jpg" },
    ] as MediaItem[],
  },
  {
    title: "Målning",
    category: "Målning",
    location: "Eskilstuna",
    detail: "Invändig & utvändig målning",
    gradient: "linear-gradient(145deg, #2a1a2e 0%, #3d2845 50%, #1e1220 100%)",
    media: [
      { type: "gradient", src: "linear-gradient(145deg, #2a1a2e 0%, #3d2845 50%, #1e1220 100%)" },
    ] as MediaItem[],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="jobb" className="bg-surface py-24">
        {/* Section header */}
        <div className="px-10 md:px-16 mb-16">
          <motion.p
            className="font-heading uppercase tracking-[0.45em] text-rust text-xs mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.p>
          <motion.h2
            className="font-heading font-bold uppercase text-foreground leading-none"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            VÅRA JOBB
          </motion.h2>
          <motion.div
            className="h-[3px] w-14 bg-rust mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((p, i) => (
            <motion.button
              key={i}
              variants={cardVariants}
              className="group relative overflow-hidden h-72 cursor-pointer text-left w-full"
              style={{ background: p.gradient }}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={() => setSelected(p)}
              aria-label={`Öppna galleri för ${p.title}`}
            >
              {/* First image as thumbnail */}
              {p.media[0]?.type === "image" && (
                <Image
                  src={p.media[0].src}
                  alt={p.title}
                  fill
                  className="object-cover"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={i === 0}
                />
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

              {/* Corner accents */}
              <div className="absolute top-5 left-5 w-7 h-7 border-t-[2px] border-l-[2px] border-rust opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-5 right-5 w-7 h-7 border-t-[2px] border-r-[2px] border-rust opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Gallery indicator */}
              <div className="absolute top-5 right-5 w-7 h-7 flex items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-0.5 pb-0.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-foreground">
                  <rect x="0.5" y="2.5" width="6" height="6" rx="0" />
                  <path d="M3 2.5V1.5h6v6H8" />
                </svg>
              </div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-heading uppercase tracking-[0.35em] text-rust text-[10px] mb-1 group-hover:text-amber transition-colors duration-300">
                  {p.category} · {p.location}
                </p>
                <h3 className="font-heading font-bold uppercase text-foreground text-xl leading-tight">
                  {p.title}
                </h3>
                <p className="font-sans text-muted text-sm mt-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {p.detail}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <Lightbox project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
