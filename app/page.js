import WordReveal from "./components/WordReveal";
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
      <p className="mt-6 text-sm font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">
        Ethical Hacker | Cybersecurity Aspirant
      </p>
      <div className="mt-10">
        <span className="silver-rotor">
          <a href="/cv" className="thin-btn">
            Download CV
          </a>
        </span>
      </div>
      <Illustration />
    </section>
  );
}
