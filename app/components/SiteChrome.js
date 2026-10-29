"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  ["About", "/#about", "about"],
  ["Education", "/#education", "education"],
  ["Skills", "/#skills", "skills"],
  ["Experience", "/#experience", "experience"],
  ["Certifications", "/#certifications", "certifications"],
  ["Writeups", "/writeups", "writeups"],
  ["Contact", "/#contact", "contact"],
];

// Flat side panel (desktop) + full-screen menu overlay (mobile).
// No glass: solid dark sidebar, no backdrop blur, no panel boxes.
// The CV page stays a single flat column so printing stays clean.
export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const isCv = pathname === "/cv" || pathname?.startsWith("/cv/");
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isCv) return undefined;
    if (pathname === "/writeups") {
      setActive("writeups");
      return undefined;
    }
    const ids = ["about", "education", "skills", "experience", "certifications", "writeups", "contact"];
    const onScroll = () => {
      let current = "about";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isCv, pathname]);

  // Mobile menu: lock body scroll while open, always restore on close/unmount.
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
    <div className="relative flex min-h-screen">
      {/* Desktop left side panel — flat, solid, neat */}
      <aside className="site-sidebar print:hidden fixed inset-y-0 left-0 z-40 hidden w-[290px] flex-col bg-[#050810] lg:flex">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
        />
        <div className="flex flex-1 flex-col gap-8 overflow-y-auto px-6 py-8">
          <div>
            <a href="/#about" className="block text-3xl leading-tight text-slate-50 transition-colors duration-200 hover:text-[#a5f3fc]">
              Hannan Sayed
            </a>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-[#a5f3fc]">Ethical Hacker | Cybersecurity Aspirant</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-300">
              <span className="ping-dot" aria-hidden="true" />
              Mumbai, Maharashtra, India
            </p>
            <span className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.22em] text-[#a7f3d0]">
              Available for opportunities
            </span>
          </div>

          <nav aria-label="Main navigation" className="flex flex-col gap-1">
            {nav.map(([label, href, id]) => {
              const isActive = active === id;
              return (
                <a
                  key={id}
                  href={href}
                  className={`group flex min-h-[44px] items-center gap-3 px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive ? "text-[#a5f3fc]" : "text-slate-300 hover:text-[#a5f3fc]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 shrink-0 rounded-full bg-[#a5f3fc] shadow-[0_0_10px_3px_rgba(165,243,252,0.45)] transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  {label}
                </a>
              );
            })}
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <a
              href="/cv"
              className="flex min-h-[44px] items-center justify-center border border-[#7dd3fc]/60 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.22em] text-[#a5f3fc] transition-all duration-200 hover:tracking-[0.26em] hover:shadow-[0_0_24px_rgba(125,211,252,0.35)]"
            >
              Download CV
            </a>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.linkedin.com/in/hannan-sayed-18b751258" className="flex min-h-[44px] items-center text-sm font-semibold text-slate-200 transition-colors duration-200 hover:text-[#a5f3fc]">
                LinkedIn
              </a>
              <a href="https://github.com/haxor-uii" className="flex min-h-[44px] items-center text-sm font-semibold text-slate-200 transition-colors duration-200 hover:text-[#a5f3fc]">
                GitHub
              </a>
              <a href="mailto:sfmods130@gmail.com" className="flex min-h-[44px] items-center text-sm font-semibold text-slate-200 transition-colors duration-200 hover:text-[#a5f3fc]">
                Email
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main column, to the right of the sidebar on desktop */}
      <div className="min-w-0 flex-1 lg:ml-[290px]">
        {/* Slim mobile top bar + full-screen menu (no plain scroll row) */}
        <div className="mobile-topbar print:hidden sticky top-0 z-50 bg-[#050810] lg:hidden">
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <a href="/#about" className="flex min-h-[44px] items-center text-base font-bold text-slate-100 transition-colors duration-200 hover:text-[#a5f3fc]">
              Hannan Sayed
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              className="flex min-h-[44px] items-center border border-[#7dd3fc]/60 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#a5f3fc] transition-all duration-200 hover:shadow-[0_0_24px_rgba(125,211,252,0.35)]"
            >
              Navigate
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu print:hidden fixed inset-0 z-[90] flex flex-col bg-[#050810] lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-base font-bold text-slate-100">Hannan Sayed</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[44px] items-center border border-[#7dd3fc]/60 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#a5f3fc]"
              >
                Close
              </button>
            </div>
            <nav aria-label="Mobile navigation" className="flex flex-1 flex-col justify-center gap-2 px-6">
              {nav.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[56px] items-center text-4xl text-slate-50 transition-colors duration-200 hover:text-[#a5f3fc]"
                >
                  {label}
                </a>
              ))}
              <a
                href="/cv"
                onClick={() => setMenuOpen(false)}
                className="mt-6 flex min-h-[44px] w-fit items-center border border-[#7dd3fc]/60 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.22em] text-[#a5f3fc]"
              >
                Download CV
              </a>
            </nav>
          </div>
        )}

        <main id="main" className="relative z-10 mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 lg:px-12 lg:pt-16">
          {children}
        </main>
        <footer className="relative z-10 print:hidden">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-12">
            <p className="text-sm text-slate-400">
              © Hannan Sayed ·{" "}
              <a href="https://www.linkedin.com/in/hannan-sayed-18b751258" className="font-semibold text-[#a5f3fc] transition-colors duration-200 hover:underline">
                LinkedIn
              </a>{" "}
              ·{" "}
              <a href="https://github.com/haxor-uii" className="font-semibold text-[#a5f3fc] transition-colors duration-200 hover:underline">
                GitHub
              </a>{" "}
              ·{" "}
              <a href="mailto:sfmods130@gmail.com" className="font-semibold text-[#a5f3fc] transition-colors duration-200 hover:underline">
                sfmods130@gmail.com
              </a>
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Contact panel — professional enquiries via LinkedIn, GitHub, or email.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
