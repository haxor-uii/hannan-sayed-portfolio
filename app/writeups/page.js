import PageHead from "../components/PageHead";
import Reveal from "../components/Reveal";
import GlowDivider from "../components/GlowDivider";

export const metadata = {
  description: "Writeups index for hannan. Future posts on web vulnerabilities and lab notes. Coming soon.",
  title: "Writeups | hannan.",
};

function TagList({ items, label }) {
  return (
    <ul aria-label={label} className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-base text-[#F5F2ED]">
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
      <PageHead eyebrowText="Writeups" title="Writeups" intro="Writeups from my ShadowFox internship and other labs, organised by topic. One post published so far." />
      <Reveal tag="section" className="py-10">
        <h2 className="text-2xl text-[#F5F2ED] sm:text-3xl">Categories</h2>
        <TagList label="Writeup categories" items={["Web vulnerabilities", "Lab notes"]} />
      </Reveal>
      <GlowDivider />
      <Reveal tag="section" className="py-10">
        <h2 className="text-2xl text-[#F5F2ED] sm:text-3xl">Posts</h2>
        <a
          href="/writeups/tryhackme-basic-pentesting"
          className="mt-6 block rounded-xl border border-[#262626] p-4 transition-colors duration-200 hover:border-[#8A8A8A]"
        >
          <span className="flex flex-wrap items-start justify-between gap-3">
            <span className="text-base font-semibold text-[#F5F2ED]">TryHackMe Basic Pentesting, full chain walkthrough</span>
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">30 Apr 2026</span>
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-[#8A8A8A]">
            Gobuster to Hydra to SSH jan to John to SSH kay to sudo su to root. Lab notes, 5 min read.
          </span>
        </a>
        <p className="mt-6 text-sm text-[#8A8A8A]">
          Coming soon: Beginner testasp.vulnweb.com recon, and Intermediate VeraCrypt, PE analysis, and Metasploit.
        </p>
      </Reveal>
    </div>
  );
}
