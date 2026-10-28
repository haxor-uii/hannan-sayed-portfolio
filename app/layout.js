import "./globals.css";

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
      <body className="bg-obsidian text-slate-100 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-cyan focus:px-4 focus:py-2 focus:font-bold focus:text-obsidian print:hidden"
        >
          Skip to content
        </a>
        <header className="sticky top-0 z-50 border-b border-borderline bg-midnight/80 backdrop-blur-md print:hidden">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between"
          >
            <a
              href="/#about"
              className="flex min-h-[44px] items-center text-base font-bold text-slate-100 transition-colors duration-200 hover:text-cyan"
            >
              Hannan Sayed
              <span className="ml-3 hidden rounded-full border border-borderline px-2 py-0.5 text-xs font-semibold text-tactical sm:inline">
                SOC PORTFOLIO
              </span>
            </a>
            <div className="flex flex-nowrap items-center gap-1 overflow-x-auto pb-1 md:pb-0">
              {nav.map(([label, href]) => (
                <a
                  key={href + label}
                  href={href}
                  className="flex min-h-[44px] items-center whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-cyan hover:underline hover:underline-offset-4"
                >
                  {label}
                </a>
              ))}
              <a
                href="/cv"
                className="ml-2 flex min-h-[44px] shrink-0 items-center rounded-xl bg-cyan px-4 py-2 text-sm font-bold text-obsidian transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(0,229,255,0.35)]"
              >
                Download CV
              </a>
            </div>
          </nav>
        </header>
        <main id="main" className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6">
          {children}
        </main>
        <footer className="border-t border-borderline bg-midnight/60 print:hidden">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
            <p className="text-sm text-slate-400">
              © Hannan Sayed ·{" "}
              <a
                href="https://www.linkedin.com/in/hannan-sayed-18b751258"
                className="font-semibold text-cyan transition-colors duration-200 hover:underline"
              >
                LinkedIn
              </a>{" "}
              ·{" "}
              <a
                href="https://github.com/haxor-uii"
                className="font-semibold text-cyan transition-colors duration-200 hover:underline"
              >
                GitHub
              </a>{" "}
              ·{" "}
              <a
                href="mailto:sfmods130@gmail.com"
                className="font-semibold text-cyan transition-colors duration-200 hover:underline"
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
