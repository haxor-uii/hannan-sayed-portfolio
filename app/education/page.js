import PageHead from "../components/PageHead";
import Reveal from "../components/Reveal";

export const metadata = {
  description: "Education of hannan. B.Sc. Computer Science at St. Wilfred's College of ACS, University of Mumbai.",
  title: "Education | hannan.",
};

export default function Education() {
  return (
    <div>
      <PageHead eyebrowText="Education" title="Education" />
      <Reveal tag="section" className="py-10">
        <h2 className="text-2xl leading-snug text-[#F5F2ED] sm:text-3xl">
          St. Wilfred&apos;s College of ACS, University of Mumbai (NEP 2020)
        </h2>
        <p className="mt-3 text-[#8A8A8A]">B.Sc. Computer Science, second year, academic year 2026-27.</p>
      </Reveal>
    </div>
  );
}
