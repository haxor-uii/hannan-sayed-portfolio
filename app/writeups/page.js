import Reveal from "../components/Reveal";
import GlowDivider from "../components/GlowDivider";
import WordReveal from "../components/WordReveal";

export const metadata = {
  description: "Writeups index for Hannan Sayed — future posts on web vulnerabilities and lab notes. Coming soon.",
  title: "Writeups — Hannan Sayed",
};

const eyebrow = "text-[11px] font-bold uppercase tracking-[0.28em] text-[#a5f3fc]";

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

export default function Writeups() {
  return (
    <div className="space-y-16">
      <section className="py-8 sm:py-12">
        <p className={eyebrow}>Writeups</p>
        <WordReveal as="h1" text="Writeups" className="mt-3 text-[clamp(3rem,8vw,5.5rem)] leading-[0.95] text-slate-50" />
        <p className="mt-6 max-w-3xl text-slate-300">
          Future writeups will live here, organised by topic. Nothing is published yet.
        </p>
      </section>

      <GlowDivider />

      <Reveal tag="section" aria-labelledby="categories-heading" className="py-8">
        <h2 id="categories-heading" className="text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.05] text-slate-50">
          Categories
        </h2>
        <TagList label="Writeup categories" items={["Web vulnerabilities", "Lab notes"]} />
      </Reveal>

      <GlowDivider />

      <Reveal tag="section" aria-labelledby="posts-heading" className="py-8">
        <h2 id="posts-heading" className="text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.05] text-slate-50">
          Posts
        </h2>
        <p className="mt-4 text-sm italic text-slate-400">
          Coming soon — writeups will be added here as they are written.
        </p>
        <p className="mt-6">
          <a href="/#writeups" className="font-bold text-[#a5f3fc] transition-colors duration-200 hover:underline">
            ← Back to the portfolio
          </a>
        </p>
      </Reveal>
    </div>
  );
}
