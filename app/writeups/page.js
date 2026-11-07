import PageHead from "../components/PageHead";
import Reveal from "../components/Reveal";
import GlowDivider from "../components/GlowDivider";

export const metadata = {
  description: "Writeups index for hannan. Three ShadowFox internship walkthroughs on web vulnerabilities and lab notes.",
  title: "Writeups | hannan.",
};

function TagList({ items, label }) {
  return (
    <ul aria-label={label} className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-sm text-[#F5F2ED]">
          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E11D2E]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Writeups() {
  return (
    <div>
      <PageHead eyebrowText="Writeups" title="Writeups" intro="Writeups from my ShadowFox internship and other labs, organised by topic. Four posts published, including the first vulnerability explainer." />
      <Reveal tag="section" className="py-10">
        <h2 className="text-xl text-[#F5F2ED] sm:text-2xl">Categories</h2>
        <TagList label="Writeup categories" items={["Web vulnerabilities", "Lab notes", "Vulnerability explainers"]} />
      </Reveal>
      <GlowDivider />
      <Reveal tag="section" className="py-10">
        <h2 className="text-xl text-[#F5F2ED] sm:text-2xl">Posts</h2>
        <a
          href="/writeups/tryhackme-basic-pentesting"
          className="mt-6 block rounded-xl border border-[#262626] p-4 transition-colors duration-200 hover:border-[#8A8A8A]"
        >
          <span className="flex flex-wrap items-start justify-between gap-3">
            <span className="text-sm font-semibold text-[#F5F2ED]">TryHackMe Basic Pentesting, full chain walkthrough</span>
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">30 Apr 2026</span>
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-[#8A8A8A]">
            Gobuster to Hydra to SSH jan to John to SSH kay to sudo su to root. Lab notes, 5 min read.
          </span>
        </a>
        <a
          href="/writeups/testasp-vulnweb-recon"
          className="mt-6 block rounded-xl border border-[#262626] p-4 transition-colors duration-200 hover:border-[#8A8A8A]"
        >
          <span className="flex flex-wrap items-start justify-between gap-3">
            <span className="text-sm font-semibold text-[#F5F2ED]">testasp.vulnweb.com recon, one chain</span>
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">30 Apr 2026</span>
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-[#8A8A8A]">
            Nmap to Gobuster to Wireshark. One open port, one login page, one cleartext login. Web vulnerabilities, 4 min read.
          </span>
        </a>
        <a
          href="/writeups/veracrypt-pe-metasploit"
          className="mt-6 block rounded-xl border border-[#262626] p-4 transition-colors duration-200 hover:border-[#8A8A8A]"
        >
          <span className="flex flex-wrap items-start justify-between gap-3">
            <span className="text-sm font-semibold text-[#F5F2ED]">VeraCrypt, PE analysis, and Metasploit</span>
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">30 Apr 2026</span>
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-[#8A8A8A]">
            MD5 cracked to password123, a PE entry point, and a reverse shell on my own Windows VM. Lab notes, 5 min read.
          </span>
        </a>
        <a
          href="/writeups/sql-injection-out-of-band-exfiltration"
          className="mt-6 block rounded-xl border border-[#262626] p-4 transition-colors duration-200 hover:border-[#8A8A8A]"
        >
          <span className="flex flex-wrap items-start justify-between gap-3">
            <span className="text-sm font-semibold text-[#F5F2ED]">SQL injection, blind with out-of-band exfiltration, explained</span>
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">Practitioner</span>
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-[#8A8A8A]">
            The hardest Practitioner SQLi lab on PortSwigger Academy. A cookie, a silent query, and a password smuggled out over DNS. Vulnerability explainer, 5 min read.
          </span>
        </a>
      </Reveal>
    </div>
  );
}
