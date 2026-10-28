import Reveal from "./components/Reveal";

const panel =
  "rounded-2xl border border-borderline bg-midnight p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/50 hover:shadow-[0_12px_32px_rgba(0,229,255,0.12)]";
const tag =
  "rounded-full border border-borderline bg-obsidian px-3 py-1.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/60 hover:text-cyan";
const sectionTitle =
  "text-xl font-bold text-slate-100 sm:text-2xl";
const eyebrow =
  "text-xs font-bold uppercase tracking-[0.14em] text-cyan";

function TagList({ items, label }) {
  return (
    <ul aria-label={label} className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className={tag}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Hero / About */}
      <section
        id="about"
        aria-labelledby="hero-heading"
        className="scroll-mt-28 rounded-2xl border border-borderline bg-midnight p-6 sm:p-8"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-tactical/40 bg-tactical/10 px-3 py-1 text-xs font-bold text-tactical">
            AVAILABLE FOR OPPORTUNITIES
          </span>
          <span className="flex items-center gap-2 text-sm text-slate-300">
            <span className="ping-dot" aria-hidden="true" />
            Mumbai, Maharashtra, India
          </span>
        </div>
        <p className={`${eyebrow} mt-6`}>Ethical Hacker | Cybersecurity Aspirant</p>
        <h1
          id="hero-heading"
          className="mt-2 text-[clamp(2.4rem,6vw,3.8rem)] font-extrabold leading-tight text-slate-50"
        >
          Hannan Sayed
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          B.Sc. Computer Science student focused on offensive cybersecurity and web
          application penetration testing, with hands-on lab practice and working
          toward junior WAPT readiness.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/hannan-sayed-18b751258"
            className="flex min-h-[44px] items-center rounded-xl bg-cyan px-5 py-2.5 text-sm font-bold text-obsidian transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(0,229,255,0.35)]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/haxor-uii"
            className="flex min-h-[44px] items-center rounded-xl border border-borderline bg-obsidian px-5 py-2.5 text-sm font-bold text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/60 hover:text-cyan"
          >
            GitHub
          </a>
          <a
            href="mailto:sfmods130@gmail.com"
            className="flex min-h-[44px] items-center rounded-xl border border-borderline bg-obsidian px-5 py-2.5 text-sm font-bold text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/60 hover:text-cyan"
          >
            Email me
          </a>
          <a
            href="/cv"
            className="flex min-h-[44px] items-center rounded-xl border border-cyan/50 px-5 py-2.5 text-sm font-bold text-cyan transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan hover:text-obsidian"
          >
            Download CV
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-borderline bg-obsidian px-4 py-3">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Focus</p>
            <p className="mt-1 text-sm font-semibold text-slate-100">Web Application Penetration Testing</p>
          </div>
          <div className="rounded-xl border border-borderline bg-obsidian px-4 py-3">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Study</p>
            <p className="mt-1 text-sm font-semibold text-slate-100">B.Sc. Computer Science</p>
          </div>
          <div className="rounded-xl border border-borderline bg-obsidian px-4 py-3">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Location</p>
            <p className="mt-1 text-sm font-semibold text-slate-100">Mumbai, Maharashtra, India</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <Reveal tag="section" id="education" aria-labelledby="education-heading" className="scroll-mt-28">
        <div className={panel}>
          <p className={eyebrow}>Education</p>
          <h2 id="education-heading" className={`${sectionTitle} mt-2`}>
            Education
          </h2>
          <div className="mt-4">
            <h3 className="text-lg font-bold text-slate-100">
              St. Wilfred&apos;s College of ACS, University of Mumbai (NEP 2020)
            </h3>
            <p className="mt-1 text-slate-300">
              B.Sc. Computer Science, second year, academic year 2026–27.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Skills */}
      <Reveal tag="section" id="skills" aria-labelledby="skills-heading" className="scroll-mt-28">
        <p className={eyebrow}>Skills</p>
        <h2 id="skills-heading" className={`${sectionTitle} mt-2`}>
          Skills &amp; Knowledge
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className={panel}>
            <h3 className="text-lg font-bold text-slate-100">Core Competencies</h3>
            <TagList
              label="Core competencies"
              items={[
                "Penetration Testing",
                "Web Application Security",
                "OWASP Top 10",
                "Web Application Penetration Testing",
                "Ethical Hacking",
                "Cyber Security Fundamentals",
              ]}
            />
          </div>
          <div className={panel}>
            <h3 className="text-lg font-bold text-slate-100">Vulnerability Focus Directory</h3>
            <TagList
              label="Vulnerability focus"
              items={[
                "SQL injection",
                "XSS",
                "CSRF",
                "OS command injection",
                "SSRF",
                "Path traversal",
                "IDOR / access control",
                "Authentication flaws",
                "Information disclosure",
                "File uploads",
              ]}
            />
          </div>
          <div className={panel}>
            <h3 className="text-lg font-bold text-slate-100">Tools &amp; Environments</h3>
            <TagList
              label="Tools and environments"
              items={[
                "Burp Suite",
                "Linux",
                "Networking",
                "PortSwigger Web Security Academy",
                "DVWA",
                "bWAPP",
                "Juice Shop",
                "WebGoat",
              ]}
            />
          </div>
        </div>
      </Reveal>

      {/* Experience */}
      <Reveal tag="section" id="experience" aria-labelledby="experience-heading" className="scroll-mt-28">
        <div className={panel}>
          <p className={eyebrow}>Experience</p>
          <h2 id="experience-heading" className={`${sectionTitle} mt-2`}>
            Experience
          </h2>
          <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-slate-100">
                ShadowFox — Cyber Security Virtual Internship
              </h3>
              <p className="mt-1 text-slate-300">One-month Virtual Internship in Cyber Security.</p>
              <p className="mt-1 text-slate-300">Noted as exceptional performance.</p>
              <p className="mt-1 text-sm text-slate-400">Cert ID: SFO4VIP284</p>
            </div>
            <span className="rounded-full border border-tactical/40 bg-tactical/10 px-3 py-1 text-xs font-bold text-tactical">
              Apr 2026
            </span>
          </div>
          <p className="mt-3 text-sm text-slate-400">01/04/2026 to 30/04/2026</p>
        </div>
      </Reveal>

      {/* Certifications */}
      <Reveal tag="section" id="certifications" aria-labelledby="certifications-heading" className="scroll-mt-28">
        <p className={eyebrow}>Credentials</p>
        <h2 id="certifications-heading" className={`${sectionTitle} mt-2`}>
          Certifications &amp; Training
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className={panel}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold text-slate-100">DH - Penetration Tester</h3>
              <span className="shrink-0 rounded-full border border-tactical/40 bg-tactical/10 px-2.5 py-1 text-xs font-bold text-tactical">
                Completed
              </span>
            </div>
            <p className="mt-2 text-slate-300">Darknet Hacking (Mira Road branch) — 09/12/2025</p>
          </div>
          <div className={panel}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold text-slate-100">DH WAPT</h3>
              <span className="shrink-0 rounded-full border border-tactical/40 bg-tactical/10 px-2.5 py-1 text-xs font-bold text-tactical">
                Completed
              </span>
            </div>
            <p className="mt-2 text-slate-300">Darknet Hacking — 24/04/2026</p>
          </div>
          <div className={panel}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold text-slate-100">
                CompTIA PenTest+ (PT0-002) Specialization
              </h3>
              <span className="shrink-0 rounded-full border border-tactical/40 bg-tactical/10 px-2.5 py-1 text-xs font-bold text-tactical">
                Completed
              </span>
            </div>
            <p className="mt-2 text-slate-300">Coursera / Packt — completed 5 June 2026</p>
            <p className="mt-2 rounded-lg border border-borderline bg-obsidian px-3 py-2 text-sm text-slate-300">
              Specialization completion — not CompTIA certification itself.
            </p>
          </div>
          <div className={panel}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold text-slate-100">PortSwigger Web Security Academy</h3>
              <span className="shrink-0 rounded-full border border-cyan/40 bg-cyan/10 px-2.5 py-1 text-xs font-bold text-cyan">
                In progress
              </span>
            </div>
            <p className="mt-2 text-slate-300">In progress — ongoing lab practice.</p>
          </div>
        </div>
      </Reveal>

      {/* Writeups */}
      <Reveal tag="section" id="writeups" aria-labelledby="writeups-heading" className="scroll-mt-28">
        <div className={panel}>
          <p className={eyebrow}>Writeups</p>
          <h2 id="writeups-heading" className={`${sectionTitle} mt-2`}>
            Writeups
          </h2>
          <p className="mt-3 text-slate-300">
            A growing index for future writeups, organised by topic. Nothing is published
            here yet.
          </p>
          <TagList label="Writeup categories" items={["Web vulnerabilities", "Lab notes"]} />
          <p className="mt-4 rounded-lg border border-borderline bg-obsidian px-3 py-2 text-sm text-slate-300">
            Coming soon — writeups will be added here as they are written.
          </p>
          <p className="mt-4">
            <a
              href="/writeups"
              className="font-bold text-cyan transition-colors duration-200 hover:underline"
            >
              View the writeups index →
            </a>
          </p>
        </div>
      </Reveal>

      {/* Contact */}
      <Reveal tag="section" id="contact" aria-labelledby="contact-heading" className="scroll-mt-28">
        <div className={panel}>
          <p className={eyebrow}>Contact</p>
          <h2 id="contact-heading" className={`${sectionTitle} mt-2`}>
            Contact
          </h2>
          <p className="mt-3 text-slate-300">For professional enquiries, reach me through:</p>
          <ul className="mt-4 space-y-2 text-slate-200">
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/hannan-sayed-18b751258"
                className="font-semibold text-cyan transition-colors duration-200 hover:underline"
              >
                linkedin.com/in/hannan-sayed-18b751258
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/haxor-uii"
                className="font-semibold text-cyan transition-colors duration-200 hover:underline"
              >
                github.com/haxor-uii
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:sfmods130@gmail.com"
                className="font-semibold text-cyan transition-colors duration-200 hover:underline"
              >
                sfmods130@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
