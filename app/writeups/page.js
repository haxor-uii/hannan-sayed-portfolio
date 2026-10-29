import Reveal from "../components/Reveal";
import GlowDivider from "../components/GlowDivider";

export const metadata = {
  description: "Writeups index for Hannan Sayed — future posts on web vulnerabilities and lab notes. Coming soon.",
  title: "Writeups — Hannan Sayed",
};

const panel =
  "rounded-[20px] bg-white/[0.04] p-6 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_48px_rgba(125,211,252,0.12)]";
const tag =
  "rounded-full bg-white/[0.05] px-3 py-1.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#a5f3fc]";

export default function Writeups() {
  return (
    <div className="space-y-8">
      <section className="rounded-[20px] bg-white/[0.04] p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#a5f3fc]">Writeups</p>
        <h1 className="mt-2 text-[clamp(2.2rem,5vw,3.2rem)] font-extrabold leading-tight text-slate-50">
          Writeups
        </h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          Future writeups will live here, organised by topic. Nothing is published yet.
        </p>
      </section>

      <GlowDivider />

      <Reveal tag="section" aria-labelledby="categories-heading">
        <div className={panel}>
          <h2 id="categories-heading" className="text-xl font-bold text-slate-100 sm:text-2xl">
            Categories
          </h2>
          <ul aria-label="Writeup categories" className="mt-4 flex flex-wrap gap-2">
            <li className={tag}>Web vulnerabilities</li>
            <li className={tag}>Lab notes</li>
          </ul>
        </div>
      </Reveal>

      <GlowDivider />

      <Reveal tag="section" aria-labelledby="posts-heading">
        <div className={panel}>
          <h2 id="posts-heading" className="text-xl font-bold text-slate-100 sm:text-2xl">
            Posts
          </h2>
          <p className="mt-3 rounded-lg bg-white/[0.05] px-3 py-2 text-sm text-slate-300">
            Coming soon — writeups will be added here as they are written.
          </p>
          <p className="mt-4">
            <a href="/#writeups" className="font-bold text-[#a5f3fc] transition-colors duration-200 hover:underline">
              ← Back to the portfolio
            </a>
          </p>
        </div>
      </Reveal>
    </div>
  );
}
