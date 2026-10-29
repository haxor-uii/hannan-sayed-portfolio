import WordReveal from "./components/WordReveal";
import RedSweep from "./components/RedSweep";
import Illustration from "./components/Illustration";

export const metadata = {
  description: "hannan. Ethical Hacker | Cybersecurity Aspirant.",
  title: "hannan. | Ethical Hacker | Cybersecurity Aspirant",
};

const topics = [
  "Penetration Testing",
  "Web Application Security",
  "OWASP Top 10",
  "Ethical Hacking",
  "Burp Suite",
  "Linux",
  "Networking",
  "PortSwigger Web Security Academy",
];

const quickLinks = [
  { label: "About", href: "/about", desc: "Who I am and what I focus on." },
  { label: "Skills", href: "/skills", desc: "Core skills, vulns, and tools." },
  { label: "Certifications", href: "/certifications", desc: "Training and certificates." },
  { label: "Writeups", href: "/writeups", desc: "Coming soon: lab notes and web vulns." },
];

export default function Home() {
  return (
    <div>
      <section aria-labelledby="hero-heading" className="grid items-start gap-10 py-16 sm:py-24 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <WordReveal
            as="h1"
            id="hero-heading"
            text="hannan."
            className="text-[clamp(2.8rem,7vw,4.8rem)] leading-[0.95] text-[#F5F2ED]"
          />
          <p
            className="entrance mt-6 text-sm font-bold uppercase tracking-[0.28em] text-[#8A8A8A]"
            style={{ animationDelay: "350ms" }}
          >
            Ethical Hacker | Cybersecurity Aspirant
          </p>
          <div className="entrance mt-10" style={{ animationDelay: "700ms" }}>
            <span className="silver-rotor">
              <a href="/cv" className="thin-btn">
                Download CV
              </a>
            </span>
          </div>
          <div className="entrance mt-12" style={{ animationDelay: "1050ms" }}>
            <RedSweep
              once
              className="max-w-2xl text-xl leading-relaxed sm:text-2xl"
              text="Breaking web apps on purpose, learning how they fail, and getting cleaner every time."
            />
          </div>
        </div>
        <div className="entrance lg:col-span-2" style={{ animationDelay: "900ms" }}>
          <Illustration />
        </div>
      </section>

      <section aria-label="Topics" className="marquee border-y border-[#262626] py-4">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-8 pr-8">
              {topics.map((topic) => (
                <span key={`${copy}-${topic}`} className="flex items-center gap-8 whitespace-nowrap text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">
                  {topic}
                  <span aria-hidden="true" className="text-[#E11D2E]">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="explore-heading" className="py-16">
        <p id="explore-heading" className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">
          Explore
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-xl border border-[#262626] p-4 transition-colors duration-200 hover:border-[#8A8A8A]"
            >
              <span className="flex items-center justify-between text-base font-semibold text-[#F5F2ED]">
                {link.label}
                <span aria-hidden="true">→</span>
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-[#8A8A8A]">{link.desc}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
