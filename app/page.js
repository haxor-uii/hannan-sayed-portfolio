import Reveal from "./components/Reveal";
import GlowDivider from "./components/GlowDivider";
import WordReveal from "./components/WordReveal";
import ScrollFill from "./components/ScrollFill";

// FLAT: no panels, no glass, no boxes. Sections are open text on the dark
// space background, separated only by GlowDivider. Tags are flat text with
// a small glow dot prefix — not chips, not pills, not boxes.
const eyebrow =
  "text-[11px] font-bold uppercase tracking-[0.28em] text-[#a5f3fc]";
const sectionTitle =
  "text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05] text-slate-50";
const outlineBtn =
  "flex min-h-[44px] items-center border border-[#7dd3fc]/50 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.22em] text-[#a5f3fc] transition-all duration-200 hover:tracking-[0.26em] hover:shadow-[0_0_24px_rgba(125,211,252,0.35)]";
const textLink =
  "flex min-h-[44px] items-center text-sm font-semibold text-slate-200 transition-colors duration-200 hover:text-[#a5f3fc]";

function TagList({ items, label }) {
  return (
    <ul aria-label={label} className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-base text-slate-300">
          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a5f3fc] shadow-[0_0_8px_2px_rgba(165,243,252,0.4)]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero / About — flat, cinematic */}
      <section id="about" aria-labelledby="hero-heading" className="scroll-mt-28 py-8 sm:py-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#a7f3d0]">
            Available for opportunities
          </span>
          <span className="flex items-center gap-2 text-sm text-slate-300">
            <span className="ping-dot" aria-hidden="true" />
            Mumbai, Maharashtra, India
          </span>
        </div>
        <p className={`${eyebrow} mt-8`}>Ethical Hacker | Cybersecurity Aspirant</p>
        <WordReveal
          as="h1"
          id="hero-heading"
          text="Hannan Sayed"
          className="mt-3 text-[clamp(3.2rem,8vw,6rem)] leading-[0.95] text-slate-50"
        />
        <ScrollFill
          text="B.Sc. Computer Science student focused on offensive cybersecurity and web application penetration testing, with hands-on lab practice and working toward junior WAPT readiness."
          className="mt-8 max-w-3xl text-base leading-relaxed sm:text-lg"
        />
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href="https://www.linkedin.com/in/hannan-sayed-18b751258" className={outlineBtn}>
            LinkedIn
          </a>
          <a href="https://github.com/haxor-uii" className={textLink}>
            GitHub →
          </a>
          <a href="mailto:sfmods130@gmail.com" className={textLink}>
            Email me →
          </a>
          <a href="/cv" className={outlineBtn}>
            Download CV
          </a>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-slate-400">Focus</p>
            <p className="mt-2 text-sm font-semibold text-slate-100">Web Application Penetration Testing</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-slate-400">Study</p>
            <p className="mt-2 text-sm font-semibold text-slate-100">B.Sc. Computer Science</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-slate-400">Location</p>
            <p className="mt-2 text-sm font-semibold text-slate-100">Mumbai, Maharashtra, India</p>
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Education */}
      <Reveal tag="section" id="education" aria-labelledby="education-heading" className="scroll-mt-28 py-8">
        <p className={eyebrow}>Education</p>
        <WordReveal as="h2" id="education-heading" text="Education" className={`${sectionTitle} mt-3`} />
        <h3 className="mt-8 text-2xl leading-snug text-slate-100">
          St. Wilfred&apos;s College of ACS, University of Mumbai (NEP 2020)
        </h3>
        <p className="mt-2 text-slate-300">
          B.Sc. Computer Science, second year, academic year 2026–27.
        </p>
      </Reveal>

      <GlowDivider />

      {/* Skills */}
      <Reveal tag="section" id="skills" aria-labelledby="skills-heading" className="scroll-mt-28 py-8">
        <p className={eyebrow}>Skills</p>
        <WordReveal as="h2" id="skills-heading" text="Skills & Knowledge" className={`${sectionTitle} mt-3`} />
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <h3 className="text-2xl leading-snug text-slate-100">Core Competencies</h3>
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
          <div>
            <h3 className="text-2xl leading-snug text-slate-100">Vulnerability Focus Directory</h3>
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
          <div>
            <h3 className="text-2xl leading-snug text-slate-100">Tools &amp; Environments</h3>
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

      <GlowDivider />

      {/* Experience */}
      <Reveal tag="section" id="experience" aria-labelledby="experience-heading" className="scroll-mt-28 py-8">
        <p className={eyebrow}>Experience</p>
        <WordReveal as="h2" id="experience-heading" text="Experience" className={`${sectionTitle} mt-3`} />
        <div className="mt-8 flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-2xl leading-snug text-slate-100">
            ShadowFox — Cyber Security Virtual Internship
          </h3>
          <span className="shrink-0 text-xs font-bold uppercase tracking-[0.22em] text-[#a7f3d0]">
            Apr 2026
          </span>
        </div>
        <p className="mt-2 text-slate-300">One-month Virtual Internship in Cyber Security.</p>
        <p className="mt-1 text-slate-300">Noted as exceptional performance.</p>
        <p className="mt-2 text-sm text-slate-400">Cert ID: SFO4VIP284</p>
        <p className="mt-1 text-sm text-slate-400">01/04/2026 to 30/04/2026</p>
      </Reveal>

      <GlowDivider />

      {/* Certifications */}
      <Reveal tag="section" id="certifications" aria-labelledby="certifications-heading" className="scroll-mt-28 py-8">
        <p className={eyebrow}>Credentials</p>
        <WordReveal as="h2" id="certifications-heading" text="Certifications & Training" className={`${sectionTitle} mt-3`} />
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-2xl leading-snug text-slate-100">DH - Penetration Tester</h3>
              <span className="shrink-0 text-xs font-bold uppercase tracking-[0.22em] text-[#a7f3d0]">Completed</span>
            </div>
            <p className="mt-2 text-slate-300">Darknet Hacking (Mira Road branch) — 09/12/2025</p>
          </div>
          <div>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-2xl leading-snug text-slate-100">DH WAPT</h3>
              <span className="shrink-0 text-xs font-bold uppercase tracking-[0.22em] text-[#a7f3d0]">Completed</span>
            </div>
            <p className="mt-2 text-slate-300">Darknet Hacking — 24/04/2026</p>
          </div>
          <div>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-2xl leading-snug text-slate-100">CompTIA PenTest+ (PT0-002) Specialization</h3>
              <span className="shrink-0 text-xs font-bold uppercase tracking-[0.22em] text-[#a7f3d0]">Completed</span>
            </div>
            <p className="mt-2 text-slate-300">Coursera / Packt — completed 5 June 2026</p>
            <p className="mt-2 text-sm italic text-slate-400">
              Specialization completion — not CompTIA certification itself.
            </p>
          </div>
          <div>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-2xl leading-snug text-slate-100">PortSwigger Web Security Academy</h3>
              <span className="shrink-0 text-xs font-bold uppercase tracking-[0.22em] text-[#a5f3fc]">In progress</span>
            </div>
            <p className="mt-2 text-slate-300">In progress — ongoing lab practice.</p>
          </div>
        </div>
      </Reveal>

      <GlowDivider />

      {/* Writeups */}
      <Reveal tag="section" id="writeups" aria-labelledby="writeups-heading" className="scroll-mt-28 py-8">
        <p className={eyebrow}>Writeups</p>
        <WordReveal as="h2" id="writeups-heading" text="Writeups" className={`${sectionTitle} mt-3`} />
        <p className="mt-6 max-w-3xl text-slate-300">
          A growing index for future writeups, organised by topic. Nothing is published
          here yet.
        </p>
        <TagList label="Writeup categories" items={["Web vulnerabilities", "Lab notes"]} />
        <p className="mt-6 text-sm italic text-slate-400">
          Coming soon — writeups will be added here as they are written.
        </p>
        <p className="mt-6">
          <a
            href="/writeups"
            className="font-bold text-[#a5f3fc] transition-colors duration-200 hover:underline"
          >
            View the writeups index →
          </a>
        </p>
      </Reveal>

      <GlowDivider />

      {/* Contact */}
      <Reveal tag="section" id="contact" aria-labelledby="contact-heading" className="scroll-mt-28 py-8">
        <p className={eyebrow}>Contact</p>
        <WordReveal as="h2" id="contact-heading" text="Contact" className={`${sectionTitle} mt-3`} />
        <p className="mt-6 text-slate-300">For professional enquiries, reach me through:</p>
        <ul className="mt-6 space-y-3 text-slate-200">
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
      </Reveal>
    </div>
  );
}
