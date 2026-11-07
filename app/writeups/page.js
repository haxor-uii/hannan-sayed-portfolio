import PageHead from "../components/PageHead";
import Reveal from "../components/Reveal";
import GlowDivider from "../components/GlowDivider";

export const metadata = {
  description: "Writeups index for hannan. Three ShadowFox internship walkthroughs and ten vulnerability explainers on web vulnerabilities and lab notes.",
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
      <PageHead eyebrowText="Writeups" title="Writeups" intro="Writeups from my ShadowFox internship and other labs, organised by topic. Thirteen posts published, including ten vulnerability explainers." />
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
        <a
          href="/writeups/xss-template-literal-unicode-escaped"
          className="mt-6 block rounded-xl border border-[#262626] p-4 transition-colors duration-200 hover:border-[#8A8A8A]"
        >
          <span className="flex flex-wrap items-start justify-between gap-3">
            <span className="text-sm font-semibold text-[#F5F2ED]">Cross-site scripting, breaking out of a template literal, explained</span>
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">Practitioner</span>
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-[#8A8A8A]">
            The hardest Practitioner XSS lab on PortSwigger Academy. Every way out is escaped, except the one inside the string itself. Vulnerability explainer, 4 min read.
          </span>
        </a>
        <a
          href="/writeups/csrf-samesite-strict-sibling-domain"
          className="mt-6 block rounded-xl border border-[#262626] p-4 transition-colors duration-200 hover:border-[#8A8A8A]"
        >
          <span className="flex flex-wrap items-start justify-between gap-3">
            <span className="text-sm font-semibold text-[#F5F2ED]">CSRF, bypassing SameSite Strict through a sibling domain, explained</span>
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">Practitioner</span>
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-[#8A8A8A]">
            The hardest Practitioner CSRF lab on PortSwigger Academy. A WebSocket with no token, a Strict cookie, and a forgotten sibling domain. Vulnerability explainer, 5 min read.
          </span>
        </a>
        <a
          href="/writeups/os-command-injection-blind-out-of-band"
          className="mt-6 block rounded-xl border border-[#262626] p-4 transition-colors duration-200 hover:border-[#8A8A8A]"
        >
          <span className="flex flex-wrap items-start justify-between gap-3">
            <span className="text-sm font-semibold text-[#F5F2ED]">OS command injection, blind and out of band, explained</span>
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">Practitioner</span>
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-[#8A8A8A]">
            The hardest Practitioner OS command injection lab on PortSwigger Academy. A command that runs in silence, and an answer smuggled out over DNS. Vulnerability explainer, 4 min read.
          </span>
        </a>
        <a
          href="/writeups/ssrf-filter-bypass-open-redirection"
          className="mt-6 block rounded-xl border border-[#262626] p-4 transition-colors duration-200 hover:border-[#8A8A8A]"
        >
          <span className="flex flex-wrap items-start justify-between gap-3">
            <span className="text-sm font-semibold text-[#F5F2ED]">SSRF, bypassing a filter through open redirection, explained</span>
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">Practitioner</span>
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-[#8A8A8A]">
            The hardest Practitioner SSRF lab on PortSwigger Academy. The filter checks one URL, the server fetches another. Vulnerability explainer, 4 min read.
          </span>
        </a>
        <a
          href="/writeups/path-traversal-null-byte-bypass"
          className="mt-6 block rounded-xl border border-[#262626] p-4 transition-colors duration-200 hover:border-[#8A8A8A]"
        >
          <span className="flex flex-wrap items-start justify-between gap-3">
            <span className="text-sm font-semibold text-[#F5F2ED]">Path traversal, the null byte trick, explained</span>
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">Practitioner</span>
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-[#8A8A8A]">
            The hardest Practitioner path traversal lab on PortSwigger Academy. A filename that passes the check and opens a different file. Vulnerability explainer, 4 min read.
          </span>
        </a>
        <a
          href="/writeups/access-control-multi-step-no-check"
          className="mt-6 block rounded-xl border border-[#262626] p-4 transition-colors duration-200 hover:border-[#8A8A8A]"
        >
          <span className="flex flex-wrap items-start justify-between gap-3">
            <span className="text-sm font-semibold text-[#F5F2ED]">Access control, the missing check on step two, explained</span>
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">Practitioner</span>
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-[#8A8A8A]">
            The hardest Practitioner access control lab on PortSwigger Academy. Step one checks, step two does not, and the request is just a request. Vulnerability explainer, 4 min read.
          </span>
        </a>
        <a
          href="/writeups/authentication-brute-force-ip-block"
          className="mt-6 block rounded-xl border border-[#262626] p-4 transition-colors duration-200 hover:border-[#8A8A8A]"
        >
          <span className="flex flex-wrap items-start justify-between gap-3">
            <span className="text-sm font-semibold text-[#F5F2ED]">Authentication, resetting the lockout by logging in, explained</span>
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">Practitioner</span>
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-[#8A8A8A]">
            The hardest Practitioner authentication lab on PortSwigger Academy. Three wrong guesses block you, unless you log in correctly in between. Vulnerability explainer, 5 min read.
          </span>
        </a>
        <a
          href="/writeups/information-disclosure-git-history"
          className="mt-6 block rounded-xl border border-[#262626] p-4 transition-colors duration-200 hover:border-[#8A8A8A]"
        >
          <span className="flex flex-wrap items-start justify-between gap-3">
            <span className="text-sm font-semibold text-[#F5F2ED]">Information disclosure, secrets left in git history, explained</span>
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">Practitioner</span>
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-[#8A8A8A]">
            The hardest Practitioner information disclosure lab on PortSwigger Academy. The password was deleted, but git never forgets. Vulnerability explainer, 4 min read.
          </span>
        </a>
        <a
          href="/writeups/file-upload-polyglot-web-shell"
          className="mt-6 block rounded-xl border border-[#262626] p-4 transition-colors duration-200 hover:border-[#8A8A8A]"
        >
          <span className="flex flex-wrap items-start justify-between gap-3">
            <span className="text-sm font-semibold text-[#F5F2ED]">File upload, the polyglot image that is also a shell, explained</span>
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">Practitioner</span>
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-[#8A8A8A]">
            The hardest Practitioner file upload lab on PortSwigger Academy. A real image that is also a PHP script. Vulnerability explainer, 5 min read.
          </span>
        </a>
      </Reveal>
    </div>
  );
}
