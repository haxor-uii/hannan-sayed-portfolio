"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import GlowDivider from "./GlowDivider";

// Menu, redesigned so it is not a copy of the reference screenshot.
// The reference was a plain single-line icon-plus-label list. This one is
// different on purpose: a header with the name and a close button, numbered
// serif rows with a short description under each label, an arrow that only
// appears on hover, and a small contact row at the bottom. It is still a
// small dropdown, still dark, still no red panel, but it is not that list.
const nav = [
  ["About", "/about", "Who I am"],
  ["Education", "/education", "College and degree"],
  ["Skills", "/skills", "What I can test"],
  ["Experience", "/experience", "ShadowFox internship"],
  ["Certifications", "/certifications", "Training and certs"],
  ["Writeups", "/writeups", "Coming soon"],
  ["Contact", "/contact", "Reach me"],
  ["Download CV", "/cv", "Printable CV"],
];

function FooterIcon({ kind }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (kind === "linkedin") {
    return (
      <svg {...common}>
        <text x="9" y="13.5" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor" stroke="none" fontFamily="Arial, sans-serif">
          in
        </text>
      </svg>
    );
  }
  if (kind === "github") {
    return (
      <svg {...common}>
        <path d="M6 4 3 9l3 5M12 4l3 5-3 5M10.5 4 7.5 14" />
      </svg>
    );
  }
  if (kind === "email") {
    return (
      <svg {...common}>
        <rect x="2" y="4" width="14" height="11" rx="1" />
        <path d="M2.5 5.5 9 10.5l6.5-5" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M5 3h3l1.5 3-2 1.5a11 11 0 0 0 4.5 4.5L13.5 10 16.5 11.5v3a1.5 1.5 0 0 1-1.5 1.5A14 14 0 0 1 3.5 4.5 1.5 1.5 0 0 1 5 3z" />
    </svg>
  );
}

const footerLinks = [
  { label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/hannan-sayed-18b751258", kind: "linkedin" },
  { label: "GitHub", value: "haxor-uii", href: "https://github.com/haxor-uii", kind: "github" },
  { label: "Email", value: "sfmods130@gmail.com", href: "mailto:sfmods130@gmail.com", kind: "email" },
  { label: "Phone", value: "+91 7045028008", href: "tel:+917045028008", kind: "phone" },
];

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
            className={`menu-dropdown absolute right-4 top-[calc(100%+8px)] z-[90] w-[300px] max-w-[calc(100vw-2rem)] rounded-[20px] border border-[#2A2A2A] bg-[#141414] p-2 shadow-2xl print:hidden sm:right-6 ${menuOpen ? "open" : ""}`}
            aria-hidden={!menuOpen}
          >
            <div className="flex items-center justify-between border-b border-[#262626] px-3 pb-3 pt-2">
              <div>
                <p className="font-serif text-lg leading-none text-[#F5F2ED]">hannan.</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-[#8A8A8A]">Menu</p>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center text-xs font-bold uppercase tracking-[0.2em] text-[#8A8A8A] hover:text-[#F5F2ED]"
              >
                Close
              </button>
            </div>
            <nav aria-label="Menu" className="flex flex-col pt-2">
              {nav.map(([label, href, desc], i) => {
                const active = pathname === href;
                return (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    tabIndex={menuOpen ? 0 : -1}
                    aria-current={active ? "page" : undefined}
                    style={{ "--i": i }}
                    className={`menu-link group flex min-h-[56px] items-center gap-4 rounded-xl px-3 hover:bg-[#1E1E1E] ${active ? "bg-[#1E1E1E]" : ""}`}
                  >
                    <span aria-hidden="true" className={`w-6 shrink-0 font-serif text-sm ${active ? "text-[#F5F2ED]" : "text-[#8A8A8A]"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span className={`block font-serif text-base leading-tight ${active ? "font-semibold text-[#F5F2ED]" : "text-[#F5F2ED]"}`}>
                        {label}
                      </span>
                      <span className="block text-xs text-[#8A8A8A]">{desc}</span>
                    </span>
                    <span aria-hidden="true" className="text-[#8A8A8A] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      →
                    </span>
                  </a>
                );
              })}
            </nav>
            <div className="mt-2 flex gap-4 border-t border-[#262626] px-3 pb-2 pt-3">
              <a href="https://www.linkedin.com/in/hannan-sayed-18b751258" tabIndex={menuOpen ? 0 : -1} className="text-xs font-semibold text-[#8A8A8A] hover:text-[#F5F2ED]">
                LinkedIn
              </a>
              <a href="https://github.com/haxor-uii" tabIndex={menuOpen ? 0 : -1} className="text-xs font-semibold text-[#8A8A8A] hover:text-[#F5F2ED]">
                GitHub
              </a>
              <a href="mailto:sfmods130@gmail.com" tabIndex={menuOpen ? 0 : -1} className="text-xs font-semibold text-[#8A8A8A] hover:text-[#F5F2ED]">
                Email
              </a>
            </div>
          </div>
        </div>
      </header>

      <main key={pathname} id="main" className="page-fade relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 lg:px-10">
        {children}
      </main>
      <footer className="relative z-10 pb-16 print:hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <GlowDivider />
          <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="font-serif text-3xl leading-none text-[#F5F2ED]">hannan.</p>
              <p className="mt-3 text-sm text-[#8A8A8A]">Ethical Hacker | Cybersecurity Aspirant · Mumbai, India</p>
            </div>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="rounded-xl border border-[#262626] px-4 py-3 text-xs font-bold uppercase tracking-[0.28em] text-[#F5F2ED] hover:border-[#8A8A8A]"
            >
              Back to top ↑
            </button>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-xl border border-[#262626] p-4 transition-colors duration-200 hover:border-[#8A8A8A]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#262626] text-[#F5F2ED]">
                  <FooterIcon kind={link.kind} />
                </span>
                <span className="mt-3 block text-[11px] font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">{link.label}</span>
                <span className="mt-1 block break-all text-sm font-semibold text-[#F5F2ED]">{link.value}</span>
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs text-[#8A8A8A]">hannan. · Portfolio</p>
        </div>
      </footer>
    </div>
  );
}
