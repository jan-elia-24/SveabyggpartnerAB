"use client";

import { motion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const categories = [
  {
    label: "Fasad & Puts",
    items: [
      "Fasadrenovering",
      "Puts- och fasadarbeten",
      "Tunn- och tjockputs",
      "Fasadtvätt",
      "Omfärgning av befintlig fasad",
    ],
  },
  {
    label: "Takarbeten",
    items: [
      "Takmålning",
      "Taktvättning & underhåll",
      "Skorstensslamning",
    ],
  },
  {
    label: "Murning & Betong",
    items: [
      "Tegelfasad",
      "Stödmurar",
      "Murning i leca- och ytongblock",
      "Betongplatta & betongaltan",
    ],
  },
  {
    label: "Måleri & Snickeri",
    items: [
      "Målningsarbeten inomhus & utomhus",
      "Snickeri",
      "Slamning av murstockar",
    ],
  },
  {
    label: "Tillbyggnader",
    items: [
      "Utbyggnader & tillbyggnader",
    ],
  },
  {
    label: "Utomhusmiljö",
    items: [
      "Tralldäck & trädäck",
      "Stenläggning & marksten",
      "Plattsättning utomhus",
      "Naturstensarbeten",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Services() {
  return (
    <section className="bg-card py-24">
      <div className="px-10 md:px-16">
        {/* Section header */}
        <motion.p
          className="font-heading uppercase tracking-[0.45em] text-rust text-xs mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Vad vi gör
        </motion.p>
        <motion.h2
          className="font-heading font-bold uppercase text-foreground leading-none mb-4"
          style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          VÅRA
          <br />
          TJÄNSTER
        </motion.h2>
        <motion.div
          className="h-[3px] w-14 bg-rust mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ transformOrigin: "left" }}
        />

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={itemVariants}
              className="bg-card px-8 py-8"
            >
              {/* Category label */}
              <p className="font-heading uppercase tracking-[0.4em] text-rust text-[10px] mb-4">
                {cat.label}
              </p>

              {/* Divider */}
              <div className="h-[1px] bg-border mb-5" />

              {/* Items */}
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[7px] w-[5px] h-[5px] shrink-0 bg-rust" />
                    <span className="font-sans text-foreground text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
