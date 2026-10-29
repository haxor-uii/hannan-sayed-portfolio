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

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const isCv = pathname === "/cv" || pathname?.startsWith("/cv/");
  const [active, setActive] = useState("about");

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

  if (isCv) {
    return (
      <main id="main" className="relative z-10 mx-auto max-w-3xl px-4 pb-20 pt-10 sm:px-6">
        {children}
      </main>
    );
  }

  return (
    <div className="relative flex min-h-screen">
      {/* Desktop left side panel */}
      <aside className="site-sidebar print:hidden fixed inset-y-0 left-0 z-40 hidden w-[290px] flex-col bg-[#0a0f24]/60 backdrop-blur-xl lg:flex">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
        />
        <div className="flex flex-1 flex-col gap-8 overflow-y-auto px-6 py-8">
          <div>
            <a href="/#about" className="block text-2xl font-extrabold leading-tight text-slate-50 drop-shadow-[0_0_24px_rgba(125,211,252,0.25)] transition-colors duration-200 hover:text-[#a5f3fc]">
              Hannan Sayed
            </a>
            <p className="mt-2 text-sm font-bold text-[#a5f3fc]">Ethical Hacker | Cybersecurity Aspirant</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-300">
              <span className="ping-dot" aria-hidden="true" />
              Mumbai, Maharashtra, India
            </p>
            <span className="mt-4 inline-block rounded-full bg-[#a7f3d0]/10 px-3 py-1 text-xs font-bold text-[#a7f3d0]">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          <nav aria-label="Main navigation" className="flex flex-col gap-1">
            {nav.map(([label, href, id]) => {
              const isActive = active === id;
              return (
                <a
                  key={id}
                  href={href}
                  className={`group flex min-h-[44px] items-center gap-3 rounded-[12px] px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive ? "bg-white/[0.06] text-[#a5f3fc]" : "text-slate-300 hover:bg-white/[0.04] hover:text-[#a5f3fc]"
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
              className="flex min-h-[44px] items-center justify-center rounded-[16px] bg-[#7dd3fc] px-5 py-2.5 text-sm font-bold text-[#050810] shadow-[0_0_24px_rgba(125,211,252,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_32px_rgba(125,211,252,0.5)]"
            >
              Download CV
            </a>
            <div className="flex flex-wrap gap-2">
              <a href="https://www.linkedin.com/in/hannan-sayed-18b751258" className="flex min-h-[44px] items-center rounded-[12px] bg-white/[0.05] px-3 py-2 text-sm font-semibold text-slate-200 transition-colors duration-200 hover:bg-white/[0.08] hover:text-[#a5f3fc]">
                LinkedIn
              </a>
              <a href="https://github.com/haxor-uii" className="flex min-h-[44px] items-center rounded-[12px] bg-white/[0.05] px-3 py-2 text-sm font-semibold text-slate-200 transition-colors duration-200 hover:bg-white/[0.08] hover:text-[#a5f3fc]">
                GitHub
              </a>
              <a href="mailto:sfmods130@gmail.com" className="flex min-h-[44px] items-center rounded-[12px] bg-white/[0.05] px-3 py-2 text-sm font-semibold text-slate-200 transition-colors duration-200 hover:bg-white/[0.08] hover:text-[#a5f3fc]">
                Email
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main column, to the right of the sidebar on desktop */}
      <div className="min-w-0 flex-1 lg:ml-[290px]">
        {/* Slim mobile top bar — no hamburger drawer */}
        <div className="mobile-topbar print:hidden sticky top-0 z-50 bg-[#050810]/70 backdrop-blur-xl lg:hidden">
          <div className="flex items-center justify-between gap-3 px-4 pt-3">
            <a href="/#about" className="flex min-h-[44px] items-center text-base font-bold text-slate-100 transition-colors duration-200 hover:text-[#a5f3fc]">
              Hannan Sayed
            </a>
            <a
              href="/cv"
              className="flex min-h-[44px] shrink-0 items-center rounded-full bg-[#7dd3fc] px-5 py-2 text-sm font-bold text-[#050810] shadow-[0_0_24px_rgba(125,211,252,0.35)] transition-all duration-200 hover:brightness-110"
            >
              Download CV
            </a>
          </div>
          <nav aria-label="Main navigation" className="flex flex-nowrap items-center gap-1 overflow-x-auto px-4 pb-2">
            {nav.map(([label, href, id]) => (
              <a
                key={id}
                href={href}
                className="flex min-h-[44px] items-center whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-[#a5f3fc]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <main id="main" className="relative z-10 mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 lg:px-10 lg:pt-14">
          {children}
        </main>
        <footer className="relative z-10 bg-white/[0.02] backdrop-blur-xl print:hidden">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-10">
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
