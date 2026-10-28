import PrintButton from "../components/PrintButton";

export const metadata = {
  description: "CV for Hannan Sayed — Ethical Hacker | Cybersecurity Aspirant.",
  title: "CV — Hannan Sayed",
};

const section = "cv-sheet mt-6 rounded-[20px] border border-white/10 bg-white/[0.04] p-6";
const tag =
  "rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm font-semibold text-slate-200";

export default function CV() {
  return (
    <div>
      <div className="no-print flex flex-wrap items-center justify-between gap-3">
        <a href="/" className="font-bold text-[#a5f3fc] transition-colors duration-200 hover:underline">
          ← Back to portfolio
        </a>
        <PrintButton />
      </div>

      <article className="cv-sheet rounded-[20px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <header>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-extrabold leading-tight text-slate-50">
            Hannan Sayed
          </h1>
          <p className="mt-1 text-base font-bold text-[#a5f3fc]">Ethical Hacker | Cybersecurity Aspirant</p>
          <p className="mt-1 text-slate-300">Mumbai, Maharashtra, India</p>
          <p className="mt-3 text-slate-300">
            B.Sc. Computer Science student focused on offensive cybersecurity and web
            application penetration testing, with hands-on lab practice and working
            toward junior WAPT readiness.
          </p>
          <p className="mt-3 text-sm text-slate-300">
            LinkedIn: https://www.linkedin.com/in/hannan-sayed-18b751258 · GitHub:
            https://github.com/haxor-uii · Email: sfmods130@gmail.com
          </p>
        </header>

        <section className={section}>
          <h2 className="text-xl font-bold text-slate-100">Education</h2>
          <p className="mt-2 font-bold text-slate-100">
            St. Wilfred&apos;s College of ACS, University of Mumbai (NEP 2020)
          </p>
          <p className="text-slate-300">B.Sc. Computer Science, second year, academic year 2026–27.</p>
        </section>

        <section className={section}>
          <h2 className="text-xl font-bold text-slate-100">Skills</h2>
          <h3 className="mt-4 font-bold text-slate-100">Core Competencies</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {["Penetration Testing", "Web Application Security", "OWASP Top 10", "Web Application Penetration Testing", "Ethical Hacking", "Cyber Security Fundamentals"].map((s) => (
              <li key={s} className={tag}>{s}</li>
            ))}
          </ul>
          <h3 className="mt-4 font-bold text-slate-100">Vulnerability Focus Directory</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {["SQL injection", "XSS", "CSRF", "OS command injection", "SSRF", "Path traversal", "IDOR / access control", "Authentication flaws", "Information disclosure", "File uploads"].map((s) => (
              <li key={s} className={tag}>{s}</li>
            ))}
          </ul>
          <h3 className="mt-4 font-bold text-slate-100">Tools &amp; Environments</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {["Burp Suite", "Linux", "Networking", "PortSwigger Web Security Academy", "DVWA", "bWAPP", "Juice Shop", "WebGoat"].map((s) => (
              <li key={s} className={tag}>{s}</li>
            ))}
          </ul>
        </section>

        <section className={section}>
          <h2 className="text-xl font-bold text-slate-100">Experience</h2>
          <p className="mt-2 font-bold text-slate-100">
            ShadowFox — One-month Virtual Internship in Cyber Security
          </p>
          <p className="text-slate-300">01/04/2026 to 30/04/2026 (Apr 2026)</p>
          <p className="text-slate-300">Noted as exceptional performance. Cert ID: SFO4VIP284</p>
        </section>

        <section className={section}>
          <h2 className="text-xl font-bold text-slate-100">Certifications &amp; Training</h2>
          <ul className="mt-2 space-y-2 text-slate-300">
            <li>DH - Penetration Tester, Darknet Hacking (Mira Road branch) — 09/12/2025</li>
            <li>DH WAPT, Darknet Hacking — 24/04/2026</li>
            <li>
              CompTIA PenTest+ (PT0-002) Specialization, Coursera / Packt — completed 5 June
              2026. Specialization completion — not CompTIA certification itself.
            </li>
            <li>PortSwigger Web Security Academy — In progress, ongoing lab practice.</li>
          </ul>
        </section>

        <section className={section}>
          <h2 className="text-xl font-bold text-slate-100">Writeups</h2>
          <p className="mt-2 text-slate-300">
            Coming soon — nothing published here yet. Categories: Web vulnerabilities, Lab notes.
          </p>
        </section>

        <section className={section}>
          <h2 className="text-xl font-bold text-slate-100">Contact</h2>
          <p className="mt-2 text-slate-300">
            LinkedIn: https://www.linkedin.com/in/hannan-sayed-18b751258 · GitHub:
            https://github.com/haxor-uii · Email: sfmods130@gmail.com
          </p>
        </section>
      </article>
    </div>
  );
}
