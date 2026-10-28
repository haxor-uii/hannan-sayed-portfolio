import "./globals.css";
import Fireflies from "./components/Fireflies";

export const metadata = {
  description:
    "Portfolio of Hannan Sayed — Ethical Hacker | Cybersecurity Aspirant, B.Sc. Computer Science student focused on offensive cybersecurity and web application penetration testing.",
  title: "Hannan Sayed — Ethical Hacker | Cybersecurity Aspirant",
};

const nav = [
  ["About", "/#about"],
  ["Education", "/#education"],
  ["Skills", "/#skills"],
  ["Experience", "/#experience"],
  ["Certifications", "/#certifications"],
  ["Writeups", "/writeups"],
  ["Contact", "/#contact"],
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050810] text-slate-100 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[#7dd3fc] focus:px-4 focus:py-2 focus:font-bold focus:text-[#050810] print:hidden"
        >
          Skip to content
        </a>
        {/* Soft aurora glows behind everything */}
        <div
          aria-hidden="true"
          className="aurora pointer-events-none fixed inset-0 z-0 overflow-hidden print:hidden"
        >
          <div
            className="aurora-blob"
            style={{ top: "-12%", left: "8%", width: 520, height: 520, background: "rgba(125, 211, 252, 0.20)" }}
          />
          <div
            className="aurora-blob"
            style={{ top: "18%", right: "-8%", width: 460, height: 460, background: "rgba(196, 181, 253, 0.18)" }}
          />
          <div
            className="aurora-blob"
            style={{ bottom: "-14%", left: "32%", width: 480, height: 480, background: "rgba(167, 243, 208, 0.10)" }}
          />
        </div>
        <Fireflies />
        <header className="sticky top-4 z-50 px-4 print:hidden">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex max-w-6xl flex-col gap-2 rounded-[20px] border border-white/10 bg-[#0a0f24]/60 px-4 py-2 shadow-[0_10px_40px_rgba(125,211,252,0.08)] backdrop-blur-xl sm:px-5 md:flex-row md:items-center md:justify-between"
          >
            <a
              href="/#about"
              className="flex min-h-[44px] items-center text-base font-bold text-slate-100 transition-colors duration-200 hover:text-[#a5f3fc]"
            >
              Hannan Sayed
            </a>
            <div className="flex flex-nowrap items-center gap-1 overflow-x-auto pb-1 md:pb-0">
              {nav.map(([label, href]) => (
                <a
                  key={href + label}
                  href={href}
                  className="flex min-h-[44px] items-center whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-[#a5f3fc] hover:underline hover:underline-offset-4"
                >
                  {label}
                </a>
              ))}
              <a
                href="/cv"
                className="ml-2 flex min-h-[44px] shrink-0 items-center rounded-full bg-[#7dd3fc] px-5 py-2 text-sm font-bold text-[#050810] shadow-[0_0_24px_rgba(125,211,252,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_32px_rgba(125,211,252,0.5)]"
              >
                Download CV
              </a>
            </div>
          </nav>
        </header>
        <main id="main" className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6">
          {children}
        </main>
        <footer className="relative z-10 border-t border-white/10 bg-white/[0.02] backdrop-blur-xl print:hidden">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <p className="text-sm text-slate-400">
              © Hannan Sayed ·{" "}
              <a
                href="https://www.linkedin.com/in/hannan-sayed-18b751258"
                className="font-semibold text-[#a5f3fc] transition-colors duration-200 hover:underline"
              >
                LinkedIn
              </a>{" "}
              ·{" "}
              <a
                href="https://github.com/haxor-uii"
                className="font-semibold text-[#a5f3fc] transition-colors duration-200 hover:underline"
              >
                GitHub
              </a>{" "}
              ·{" "}
              <a
                href="mailto:sfmods130@gmail.com"
                className="font-semibold text-[#a5f3fc] transition-colors duration-200 hover:underline"
              >
                sfmods130@gmail.com
              </a>
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Contact panel — professional enquiries via LinkedIn, GitHub, or email.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
