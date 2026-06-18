import { Globe } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="px-10 md:px-16 pt-16 pb-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-14">
          <div className="text-center md:text-left">
            <p
              className="font-heading font-bold uppercase text-foreground leading-none"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 5rem)" }}
            >
              SVEA BYGGPARTNER AB
            </p>
            <p className="font-heading uppercase tracking-[0.35em] text-rust text-xs mt-3">
              Bygg & Hantverk
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 md:gap-x-16 gap-y-4 text-center md:text-left">
            <div>
              <p className="font-heading uppercase tracking-[0.3em] text-[10px] text-muted mb-2">
                Telefon
              </p>
              <a
                href="tel:+46735550495"
                className="font-sans text-foreground hover:text-rust active:text-rust transition-colors text-sm inline-block py-1"
              >
                073 555 04 95
              </a>
            </div>
            <div>
              <p className="font-heading uppercase tracking-[0.3em] text-[10px] text-muted mb-2">
                E-post
              </p>
              <a
                href="mailto:sveabyggpartner@gmail.com"
                className="font-sans text-foreground hover:text-rust active:text-rust transition-colors text-sm inline-block py-1"
              >
                sveabyggpartner@gmail.com
              </a>
            </div>
            <div>
              <p className="font-heading uppercase tracking-[0.3em] text-[10px] text-muted mb-2">
                Område
              </p>
              <p className="font-sans text-foreground text-sm">Hela Sverige</p>
            </div>
            <div>
              <p className="font-heading uppercase tracking-[0.3em] text-[10px] text-muted mb-2">
                Org.nr
              </p>
              <p className="font-sans text-foreground text-sm">559574-0522</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-border mb-8" />

        {/* Bottom row — 3 columns */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: copyright */}
          <p className="font-sans text-muted text-xs text-center md:text-left">
            © {year} Svea Byggpartner AB. Alla rättigheter förbehållna.
          </p>

          {/* Center: developer credit */}
          <div className="flex flex-col items-center gap-1.5">
            <p className="font-sans text-muted text-xs">
              Utvecklad av <span className="name-shimmer">Jan Elia</span>
            </p>
            <div className="flex items-center gap-4">
              <a href="https://portfolio1-lemon-tau.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-rust transition-all duration-300 hover:scale-125 hover:[filter:drop-shadow(0_0_6px_#c85a1e)] inline-flex" aria-label="Portfolio">
                <Globe size={16} strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a href="https://github.com/jan-elia-24" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-rust transition-all duration-300 hover:scale-125 hover:[filter:drop-shadow(0_0_6px_#c85a1e)] inline-flex" aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/jan-elia/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-rust transition-all duration-300 hover:scale-125 hover:[filter:drop-shadow(0_0_6px_#c85a1e)] inline-flex" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: badges */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {["F-skattsedel", "ROT-avdrag", "Ansvarsförsäkring"].map((t) => (
              <span
                key={t}
                className="font-heading uppercase tracking-widest text-[9px] text-rust border border-rust px-2 py-1 cursor-default transition-all duration-300 hover:bg-rust hover:text-foreground hover:[box-shadow:0_0_8px_#c85a1e,0_0_20px_rgba(200,90,30,0.5)]"
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
