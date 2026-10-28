import Reveal from "../components/Reveal";

export const metadata = {
  description: "Writeups index for Hannan Sayed — future posts on web vulnerabilities and lab notes. Coming soon.",
  title: "Writeups — Hannan Sayed",
};

const panel =
  "rounded-2xl border border-borderline bg-midnight p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/50 hover:shadow-[0_12px_32px_rgba(0,229,255,0.12)]";
const tag =
  "rounded-full border border-borderline bg-obsidian px-3 py-1.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/60 hover:text-cyan";

export default function Writeups() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-borderline bg-midnight p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan">Writeups</p>
        <h1 className="mt-2 text-[clamp(2.2rem,5vw,3.2rem)] font-extrabold leading-tight text-slate-50">
          Writeups
        </h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          Future writeups will live here, organised by topic. Nothing is published yet.
        </p>
      </section>

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

      <Reveal tag="section" aria-labelledby="posts-heading">
        <div className={panel}>
          <h2 id="posts-heading" className="text-xl font-bold text-slate-100 sm:text-2xl">
            Posts
          </h2>
          <p className="mt-3 rounded-lg border border-borderline bg-obsidian px-3 py-2 text-sm text-slate-300">
            Coming soon — writeups will be added here as they are written.
          </p>
          <p className="mt-4">
            <a href="/#writeups" className="font-bold text-cyan transition-colors duration-200 hover:underline">
              ← Back to the portfolio
            </a>
          </p>
        </div>
      </Reveal>
    </div>
  );
}
