"use client";

import { useEffect, useRef, useState } from "react";
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

function NavIcon({ label }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  switch (label) {
    case "About":
      return (
        <svg {...common}>
          <circle cx="8" cy="5" r="2.5" />
          <path d="M3.5 13.5c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" />
        </svg>
      );
    case "Education":
      return (
        <svg {...common}>
          <path d="M2.5 3.5h9v9h-9z" />
          <path d="M5.5 3.5v9" />
          <path d="M11.5 5.5h2v7h-2" />
        </svg>
      );
    case "Skills":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="2.5" />
          <path d="M8 2v2M8 12v2M2 8h2M12 8h2" />
        </svg>
      );
    case "Experience":
      return (
        <svg {...common}>
          <rect x="2" y="5" width="12" height="8" rx="1" />
          <path d="M5.5 5a2.5 2.5 0 0 1 5 0" />
          <path d="M2 9h12" />
        </svg>
      );
    case "Certifications":
      return (
        <svg {...common}>
          <circle cx="8" cy="7" r="4" />
          <path d="M5.5 10.5 4 14l4-1.5L12 14l-1.5-3.5" />
        </svg>
      );
    case "Writeups":
      return (
        <svg {...common}>
          <path d="M4 2h5l3 3v9H4z" />
          <path d="M6 8h5M6 11h5" />
        </svg>
      );
    case "Contact":
      return (
        <svg {...common}>
          <rect x="2" y="4" width="12" height="9" rx="1" />
          <path d="M2.5 5.5 8 10l5.5-4.5" />
        </svg>
      );
    case "Download CV":
      return (
        <svg {...common}>
          <path d="M8 2v8M4.5 7 8 10.5 11.5 7" />
          <path d="M3 14h10" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="3" />
        </svg>
      );
  }
}

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const isCv = pathname === "/cv" || pathname?.startsWith("/cv/");
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onDown = (e) => {
      const target = e.target;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, [menuOpen]);

  if (isCv) {
    return (
      <main key={pathname} id="main" className="page-fade relative z-10 mx-auto max-w-3xl px-4 pb-20 pt-10 sm:px-6">
        {children}
      </main>
    );
  }

  return (
    <div className="relative min-h-screen">
      <header className="topbar print:hidden sticky top-0 z-50 bg-[#0C0C0C]">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="flex min-h-[44px] items-center text-base lowercase tracking-wide text-[#F5F2ED]">
            hannan.
          </a>
          <button
            ref={buttonRef}
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

          <div
            ref={panelRef}
            className={`menu-dropdown absolute right-4 top-[calc(100%+8px)] z-[90] w-[260px] max-w-[calc(100vw-2rem)] rounded-2xl border border-[#262626] bg-[#111111] p-2 shadow-2xl print:hidden sm:right-6 ${menuOpen ? "open" : ""}`}
            aria-hidden={!menuOpen}
          >
            <nav aria-label="Menu" className="flex flex-col">
              {nav.map(([label, href], i) => {
                const active = pathname === href;
                return (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    tabIndex={menuOpen ? 0 : -1}
                    aria-current={active ? "page" : undefined}
                    style={{ "--i": i }}
                    className={`menu-link flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-left text-base text-[#F5F2ED] hover:bg-[#1E1E1E] ${active ? "bg-[#1E1E1E] font-semibold" : ""}`}
                  >
                    <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center text-[#8A8A8A]">
                      <NavIcon label={label} />
                    </span>
                    <span className="flex-1">{label}</span>
                    {active ? <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5F2ED]" /> : null}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <main key={pathname} id="main" className="page-fade relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 lg:px-10">
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
