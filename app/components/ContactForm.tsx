"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const inputBase =
    "w-full bg-transparent text-foreground font-sans text-base md:text-lg outline-none placeholder:text-border px-6 pb-6 pt-2";

  return (
    <section id="kontakt" className="bg-background py-24">
      <div className="px-10 md:px-16 max-w-5xl">
        {/* Section header */}
        <motion.p
          className="font-heading uppercase tracking-[0.45em] text-rust text-xs mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Kom i kontakt
        </motion.p>
        <motion.h2
          className="font-heading font-bold uppercase text-foreground leading-none mb-4"
          style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          KONTAKTA
          <br />
          OSS
        </motion.h2>
        <motion.div
          className="h-[3px] w-14 bg-rust mb-14"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ transformOrigin: "left" }}
        />

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="border border-rust p-14 text-center max-w-lg"
            >
              <p className="font-heading font-bold uppercase text-rust text-4xl mb-4">
                Tack!
              </p>
              <p className="font-sans text-muted leading-relaxed">
                Vi har tagit emot ditt meddelande och hör av oss inom 24 timmar.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Row 1: Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border mb-[1px]">
                <div className="bg-background border border-border focus-within:border-rust transition-colors">
                  <label className="block font-heading uppercase tracking-[0.35em] text-rust text-[10px] px-6 pt-5 pb-1">
                    Namn *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ditt namn"
                    className={inputBase}
                    suppressHydrationWarning
                  />
                </div>
                <div className="bg-background border border-border focus-within:border-rust transition-colors">
                  <label className="block font-heading uppercase tracking-[0.35em] text-rust text-[10px] px-6 pt-5 pb-1">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="070 000 00 00"
                    className={inputBase}
                    suppressHydrationWarning
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="bg-background border border-border focus-within:border-rust transition-colors mb-[1px]">
                <label className="block font-heading uppercase tracking-[0.35em] text-rust text-[10px] px-6 pt-5 pb-1">
                  E-post *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="din@email.se"
                  className={inputBase}
                  suppressHydrationWarning
                />
              </div>

              {/* Row 3: Message */}
              <div className="bg-background border border-border focus-within:border-rust transition-colors">
                <label className="block font-heading uppercase tracking-[0.35em] text-rust text-[10px] px-6 pt-5 pb-1">
                  Meddelande *
                </label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={7}
                  placeholder="Beskriv ditt projekt – vad ska göras, var och när?"
                  className={`${inputBase} resize-none`}
                />
              </div>

              {/* Submit */}
              <div className="mt-8 flex items-center gap-8">
                <motion.button
                  type="submit"
                  className="bg-rust text-foreground font-heading font-bold uppercase tracking-[0.35em] text-xs px-10 py-5 hover:bg-rust-hover transition-colors cursor-pointer"
                  initial={{ filter: "drop-shadow(0 0 0px transparent)" }}
                  whileHover={{ scale: 1.02, filter: "drop-shadow(0 0 8px #c85a1e) drop-shadow(0 0 18px #c85a1e) drop-shadow(0 0 32px rgba(200,90,30,0.6))" }}
                  whileTap={{ scale: 0.97 }}
                  suppressHydrationWarning
                >
                  SKICKA FÖRFRÅGAN
                </motion.button>
                <p className="text-muted font-sans text-sm hidden md:block">
                  Svar inom 24 timmar
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
