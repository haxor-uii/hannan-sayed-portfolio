import PageHead from "../components/PageHead";
import Reveal from "../components/Reveal";

export const metadata = {
  description: "Experience of hannan. ShadowFox cyber security virtual internship, April 2026.",
  title: "Experience | hannan.",
};

export default function Experience() {
  return (
    <div>
      <PageHead eyebrowText="Experience" title="Experience" />
      <Reveal tag="section" className="py-10">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h2 className="text-2xl leading-snug text-[#F5F2ED] sm:text-3xl">
            ShadowFox, Cyber Security Virtual Internship
          </h2>
          <span className="shrink-0 text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">Apr 2026</span>
        </div>
        <p className="mt-3 text-[#8A8A8A]">One-month Virtual Internship in Cyber Security.</p>
        <p className="mt-1 text-[#8A8A8A]">Noted as exceptional performance.</p>
        <p className="mt-3 text-sm text-[#8A8A8A]">Cert ID: SFO4VIP284</p>
        <p className="mt-1 text-sm text-[#8A8A8A]">01/04/2026 to 30/04/2026</p>
      </Reveal>
    </div>
  );
}
