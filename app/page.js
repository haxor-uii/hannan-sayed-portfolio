import Reveal from "./components/Reveal";

const panel =
  "rounded-[20px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_12px_48px_rgba(125,211,252,0.12)]";
const tag =
  "rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7dd3fc]/40 hover:text-[#a5f3fc]";
const sectionTitle =
  "text-xl font-bold text-slate-100 sm:text-2xl";
const eyebrow =
  "text-xs font-bold uppercase tracking-[0.14em] text-[#a5f3fc]";

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
    <div className="space-y-8">
      {/* Hero / About */}
      <section
        id="about"
        aria-labelledby="hero-heading"
        className="scroll-mt-28 rounded-[24px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-10"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[#a7f3d0]/30 bg-[#a7f3d0]/10 px-3 py-1 text-xs font-bold text-[#a7f3d0]">
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
          className="mt-2 text-[clamp(2.4rem,6vw,3.8rem)] font-extrabold leading-tight text-slate-50 drop-shadow-[0_0_28px_rgba(125,211,252,0.25)]"
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
            className="flex min-h-[44px] items-center rounded-[16px] bg-[#7dd3fc] px-5 py-2.5 text-sm font-bold text-[#050810] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(125, 211, 252, 0.35)]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/haxor-uii"
            className="flex min-h-[44px] items-center rounded-[16px] border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm font-bold text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7dd3fc]/40 hover:text-[#a5f3fc]"
          >
            GitHub
          </a>
          <a
            href="mailto:sfmods130@gmail.com"
            className="flex min-h-[44px] items-center rounded-[16px] border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm font-bold text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7dd3fc]/40 hover:text-[#a5f3fc]"
          >
            Email me
          </a>
          <a
            href="/cv"
            className="flex min-h-[44px] items-center rounded-[16px] border border-[#7dd3fc]/40 px-5 py-2.5 text-sm font-bold text-[#a5f3fc] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7dd3fc] hover:text-[#050810]"
          >
            Download CV
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-[16px] border border-white/10 bg-white/[0.05] px-4 py-3">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Focus</p>
            <p className="mt-1 text-sm font-semibold text-slate-100">Web Application Penetration Testing</p>
          </div>
          <div className="rounded-[16px] border border-white/10 bg-white/[0.05] px-4 py-3">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Study</p>
            <p className="mt-1 text-sm font-semibold text-slate-100">B.Sc. Computer Science</p>
          </div>
          <div className="rounded-[16px] border border-white/10 bg-white/[0.05] px-4 py-3">
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
            <span className="rounded-full border border-[#a7f3d0]/30 bg-[#a7f3d0]/10 px-3 py-1 text-xs font-bold text-[#a7f3d0]">
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
              <span className="shrink-0 rounded-full border border-[#a7f3d0]/30 bg-[#a7f3d0]/10 px-2.5 py-1 text-xs font-bold text-[#a7f3d0]">
                Completed
              </span>
            </div>
            <p className="mt-2 text-slate-300">Darknet Hacking (Mira Road branch) — 09/12/2025</p>
          </div>
          <div className={panel}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold text-slate-100">DH WAPT</h3>
              <span className="shrink-0 rounded-full border border-[#a7f3d0]/30 bg-[#a7f3d0]/10 px-2.5 py-1 text-xs font-bold text-[#a7f3d0]">
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
              <span className="shrink-0 rounded-full border border-[#a7f3d0]/30 bg-[#a7f3d0]/10 px-2.5 py-1 text-xs font-bold text-[#a7f3d0]">
                Completed
              </span>
            </div>
            <p className="mt-2 text-slate-300">Coursera / Packt — completed 5 June 2026</p>
            <p className="mt-2 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-300">
              Specialization completion — not CompTIA certification itself.
            </p>
          </div>
          <div className={panel}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold text-slate-100">PortSwigger Web Security Academy</h3>
              <span className="shrink-0 rounded-full border border-[#7dd3fc]/30 bg-[#7dd3fc]/10 px-2.5 py-1 text-xs font-bold text-[#a5f3fc]">
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
          <p className="mt-4 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-300">
            Coming soon — writeups will be added here as they are written.
          </p>
          <p className="mt-4">
            <a
              href="/writeups"
              className="font-bold text-[#a5f3fc] transition-colors duration-200 hover:underline"
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
                className="font-semibold text-[#a5f3fc] transition-colors duration-200 hover:underline"
              >
                linkedin.com/in/hannan-sayed-18b751258
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/haxor-uii"
                className="font-semibold text-[#a5f3fc] transition-colors duration-200 hover:underline"
              >
                github.com/haxor-uii
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:sfmods130@gmail.com"
                className="font-semibold text-[#a5f3fc] transition-colors duration-200 hover:underline"
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
