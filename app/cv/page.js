import PrintButton from "../components/PrintButton";
import GlowDivider from "../components/GlowDivider";

export const metadata = {
  description: "CV for Hannan Sayed — Ethical Hacker | Cybersecurity Aspirant.",
  title: "CV — Hannan Sayed",
};

// FLAT CV: no glass, no panels, no boxes — open text, glow-dot dividers only.
const tagItem = "flex items-center gap-2 text-base text-slate-300";

function TagList({ items }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
      {items.map((s) => (
        <li key={s} className={tagItem}>
          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a5f3fc]" />
          {s}
        </li>
      ))}
    </ul>
  );
}

export default function CV() {
  return (
    <div>
      <div className="no-print flex flex-wrap items-center justify-between gap-3">
        <a href="/" className="font-bold text-[#a5f3fc] transition-colors duration-200 hover:underline">
          ← Back to portfolio
        </a>
        <PrintButton />
      </div>

      <article className="cv-sheet py-6">
        <header>
          <h1 className="text-[clamp(2.6rem,6vw,4.5rem)] leading-[0.95] text-slate-50">
            Hannan Sayed
          </h1>
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.28em] text-[#a5f3fc]">Ethical Hacker | Cybersecurity Aspirant</p>
          <p className="mt-3 text-slate-300">Mumbai, Maharashtra, India</p>
          <p className="mt-4 max-w-3xl text-slate-300">
            B.Sc. Computer Science student focused on offensive cybersecurity and web
            application penetration testing, with hands-on lab practice and working
            toward junior WAPT readiness.
          </p>
          <p className="mt-4 text-sm text-slate-300">
            LinkedIn: https://www.linkedin.com/in/hannan-sayed-18b751258 · GitHub:
            https://github.com/haxor-uii · Email: sfmods130@gmail.com
          </p>
        </header>

        <GlowDivider />

        <section className="py-6">
          <h2 className="text-3xl text-slate-100">Education</h2>
          <p className="mt-3 font-bold text-slate-100">
            St. Wilfred&apos;s College of ACS, University of Mumbai (NEP 2020)
          </p>
          <p className="text-slate-300">B.Sc. Computer Science, second year, academic year 2026–27.</p>
        </section>

        <GlowDivider />

        <section className="py-6">
          <h2 className="text-3xl text-slate-100">Skills</h2>
          <h3 className="mt-6 text-2xl text-slate-100">Core Competencies</h3>
          <TagList items={["Penetration Testing", "Web Application Security", "OWASP Top 10", "Web Application Penetration Testing", "Ethical Hacking", "Cyber Security Fundamentals"]} />
          <h3 className="mt-6 text-2xl text-slate-100">Vulnerability Focus Directory</h3>
          <TagList items={["SQL injection", "XSS", "CSRF", "OS command injection", "SSRF", "Path traversal", "IDOR / access control", "Authentication flaws", "Information disclosure", "File uploads"]} />
          <h3 className="mt-6 text-2xl text-slate-100">Tools &amp; Environments</h3>
          <TagList items={["Burp Suite", "Linux", "Networking", "PortSwigger Web Security Academy", "DVWA", "bWAPP", "Juice Shop", "WebGoat"]} />
        </section>

        <GlowDivider />

        <section className="py-6">
          <h2 className="text-3xl text-slate-100">Experience</h2>
          <p className="mt-3 font-bold text-slate-100">
            ShadowFox — One-month Virtual Internship in Cyber Security
          </p>
          <p className="text-slate-300">01/04/2026 to 30/04/2026 (Apr 2026)</p>
          <p className="text-slate-300">Noted as exceptional performance. Cert ID: SFO4VIP284</p>
        </section>

        <GlowDivider />

        <section className="py-6">
          <h2 className="text-3xl text-slate-100">Certifications &amp; Training</h2>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>DH - Penetration Tester, Darknet Hacking (Mira Road branch) — 09/12/2025</li>
            <li>DH WAPT, Darknet Hacking — 24/04/2026</li>
            <li>
              CompTIA PenTest+ (PT0-002) Specialization, Coursera / Packt — completed 5 June
              2026. Specialization completion — not CompTIA certification itself.
            </li>
            <li>PortSwigger Web Security Academy — In progress, ongoing lab practice.</li>
          </ul>
        </section>

        <GlowDivider />

        <section className="py-6">
          <h2 className="text-3xl text-slate-100">Writeups</h2>
          <p className="mt-3 text-slate-300">
            Coming soon — nothing published here yet. Categories: Web vulnerabilities, Lab notes.
          </p>
        </section>

        <GlowDivider />

        <section className="py-6">
          <h2 className="text-3xl text-slate-100">Contact</h2>
          <p className="mt-3 text-slate-300">
            LinkedIn: https://www.linkedin.com/in/hannan-sayed-18b751258 · GitHub:
            https://github.com/haxor-uii · Email: sfmods130@gmail.com
          </p>
        </section>
      </article>
    </div>
  );
}
