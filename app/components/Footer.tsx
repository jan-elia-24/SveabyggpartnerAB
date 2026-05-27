export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="px-10 md:px-16 pt-16 pb-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-14">
          <div>
            <p
              className="font-heading font-bold uppercase text-foreground leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              YOUNAN
            </p>
            <p className="font-heading uppercase tracking-[0.35em] text-rust text-xs mt-3">
              Bygg & Hantverk
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-4">
            <div>
              <p className="font-heading uppercase tracking-[0.3em] text-[10px] text-muted mb-2">
                Telefon
              </p>
              <a
                href="tel:+46700000000"
                className="font-sans text-foreground hover:text-rust transition-colors text-sm"
              >
                070 000 00 00
              </a>
            </div>
            <div>
              <p className="font-heading uppercase tracking-[0.3em] text-[10px] text-muted mb-2">
                E-post
              </p>
              <a
                href="mailto:info@younan.se"
                className="font-sans text-foreground hover:text-rust transition-colors text-sm"
              >
                info@younan.se
              </a>
            </div>
            <div>
              <p className="font-heading uppercase tracking-[0.3em] text-[10px] text-muted mb-2">
                Område
              </p>
              <p className="font-sans text-foreground text-sm">Stockholm</p>
            </div>
            <div>
              <p className="font-heading uppercase tracking-[0.3em] text-[10px] text-muted mb-2">
                Org.nr
              </p>
              <p className="font-sans text-foreground text-sm">556XXX-XXXX</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-border mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-sans text-muted text-xs">
            © {year} Younan Bygg & Hantverk AB. Alla rättigheter förbehållna.
          </p>
          <div className="flex gap-6">
            {["F-skattsedel", "ROT-avdrag", "Ansvarsförsäkring"].map((t) => (
              <span
                key={t}
                className="font-heading uppercase tracking-widest text-[9px] text-border"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
