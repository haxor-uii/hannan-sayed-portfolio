"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  ["About", "/about"],
  ["Education", "/education"],
  ["Skills", "/skills"],
  ["Experience", "/experience"],
  ["Certifications", "/certifications"],
  ["Writeups", "/writeups"],
  ["Contact", "/contact"],
  ["Download CV", "/cv"],
];

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const isCv = pathname === "/cv" || pathname?.startsWith("/cv/");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  if (isCv) {
    return (
      <main id="main" className="relative z-10 mx-auto max-w-3xl px-4 pb-20 pt-10 sm:px-6">
        {children}
      </main>
    );
  }

  return (
    <div className="relative min-h-screen">
      <header className="topbar print:hidden sticky top-0 z-50 bg-[#0C0C0C]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="flex min-h-[44px] items-center text-base lowercase tracking-wide text-[#F5F2ED]">
            hannan.
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center"
          >
            <span aria-hidden="true" className={`menu-lines ${menuOpen ? "open" : ""}`}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`menu-overlay print:hidden fixed inset-0 z-[90] flex flex-col bg-[#410306] ${menuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!menuOpen}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <span className="text-base lowercase text-[#F5F2ED]">hannan.</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
            className="flex min-h-[44px] items-center text-xs font-bold uppercase tracking-[0.28em] text-[#F5F2ED]"
          >
            Close
          </button>
        </div>
        <div aria-hidden="true" className="menu-sweep mx-auto w-full max-w-6xl px-4 sm:px-6" />
        <nav aria-label="Menu" className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-1 px-4 sm:px-6">
          {nav.map(([label, href], i) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              style={{ "--i": i }}
              className="menu-link flex min-h-[56px] items-center text-left text-4xl text-[#F5F2ED] hover:text-white sm:text-5xl"
            >
              {label}
            </a>
          ))}
        </nav>
        <p className="menu-link mx-auto w-full max-w-6xl px-4 pb-10 text-xs uppercase tracking-[0.28em] text-[#F5F2ED]/70 sm:px-6" style={{ "--i": nav.length }}>
          Portfolio
        </p>
      </div>

      <main id="main" className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 lg:px-10">
        {children}
      </main>
      <footer className="relative z-10 pb-16 print:hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <p className="text-sm text-[#8A8A8A]">
            hannan. ·{" "}
            <a href="https://www.linkedin.com/in/hannan-sayed-18b751258" className="font-semibold text-[#F5F2ED] hover:underline">
              LinkedIn
            </a>{" "}
            ·{" "}
            <a href="https://github.com/haxor-uii" className="font-semibold text-[#F5F2ED] hover:underline">
              GitHub
            </a>{" "}
            ·{" "}
            <a href="mailto:sfmods130@gmail.com" className="font-semibold text-[#F5F2ED] hover:underline">
              sfmods130@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
