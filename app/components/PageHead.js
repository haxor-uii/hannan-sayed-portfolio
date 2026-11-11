import WordReveal from "./WordReveal";
import GlowDivider from "./GlowDivider";

export const eyebrow = "text-[11px] font-bold uppercase tracking-[0.28em] text-[#8A8A8A]";

export default function PageHead({ eyebrowText, title, intro }) {
  return (
    <div>
      <p className={`${eyebrow} entrance`}>{eyebrowText}</p>
      <WordReveal as="h1" text={title} className="mt-4 text-[clamp(1.8rem,4.2vw,2.9rem)] leading-[1.02] text-[#F5F2ED]" />
      {intro ? <p className="entrance mt-6 max-w-3xl text-xs leading-relaxed text-[#8A8A8A] sm:text-sm" style={{ animationDelay: "300ms" }}>{intro}</p> : null}
      <div className="entrance mt-10" style={{ animationDelay: "500ms" }}>
        <GlowDivider />
      </div>
    </div>
  );
}
