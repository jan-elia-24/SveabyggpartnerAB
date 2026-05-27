"use client";

import { motion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const projects = [
  {
    title: "Badrumsrenovering",
    category: "Renovering",
    location: "Stockholm",
    detail: "Klinker, inbyggd dusch & golvvärme",
    gradient:
      "linear-gradient(145deg, #1e2535 0%, #252f42 40%, #181e2c 100%)",
  },
  {
    title: "Köksnova",
    category: "Inredning",
    location: "Bromma",
    detail: "Helrenovering med nya ytor & belysning",
    gradient:
      "linear-gradient(145deg, #3a2010 0%, #5c381e 50%, #2a1808 100%)",
  },
  {
    title: "Fasadarbete",
    category: "Exteriör",
    location: "Solna",
    detail: "Puts, isolering & fasadmålning",
    gradient:
      "linear-gradient(145deg, #4a2e18 0%, #6a4228 55%, #352010 100%)",
  },
  {
    title: "Golvläggning",
    category: "Golv",
    location: "Täby",
    detail: "Parkett & naturstensklinker",
    gradient:
      "linear-gradient(145deg, #4a3010 0%, #7a5020 45%, #362208 100%)",
  },
  {
    title: "Rörinstallation",
    category: "VVS",
    location: "Nacka",
    detail: "Komplett vatteninstallation",
    gradient:
      "linear-gradient(145deg, #1c2030 0%, #283045 50%, #141825 100%)",
  },
  {
    title: "Totalrenovering",
    category: "Renovering",
    location: "Lidingö",
    detail: "240 m² – från stomme till finish",
    gradient:
      "linear-gradient(145deg, #481e10 0%, #6a2e18 50%, #3a1408 100%)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Projects() {
  return (
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
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
          <motion.div
            key={i}
            variants={cardVariants}
            className="group relative overflow-hidden h-72 cursor-pointer"
            style={{ background: p.gradient }}
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

            {/* Corner accent marks */}
            <div className="absolute top-5 left-5 w-7 h-7 border-t-[2px] border-l-[2px] border-rust opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-5 right-5 w-7 h-7 border-t-[2px] border-r-[2px] border-rust opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
