import WordReveal from "./components/WordReveal";
import RedSweep from "./components/RedSweep";
import Illustration from "./components/Illustration";

export const metadata = {
  description: "hannan. Ethical Hacker | Cybersecurity Aspirant.",
  title: "hannan. | Ethical Hacker | Cybersecurity Aspirant",
};

export default function Home() {
  return (
    <section aria-labelledby="hero-heading" className="py-16 sm:py-24">
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
          loop
          className="max-w-2xl text-xl leading-relaxed sm:text-2xl"
          text="Breaking web apps on purpose, learning how they fail, and getting cleaner every time."
        />
      </div>
      <div className="entrance" style={{ animationDelay: "1350ms" }}>
        <Illustration />
      </div>
    </section>
  );
}
