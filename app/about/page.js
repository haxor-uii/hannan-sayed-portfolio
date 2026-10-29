import PageHead from "../components/PageHead";
import RedSweep from "../components/RedSweep";
import Reveal from "../components/Reveal";
import Illustration from "../components/Illustration";

export const metadata = {
  description: "About hannan. B.Sc. Computer Science student focused on offensive cybersecurity and web application penetration testing.",
  title: "About | hannan.",
};

export default function About() {
  return (
    <div>
      <PageHead eyebrowText="About" title="About" />
      <Reveal tag="section" className="py-10">
        <RedSweep
          className="max-w-3xl text-xl leading-relaxed sm:text-2xl"
          text="I am a second year computer science student in Mumbai. I spend most of my lab time breaking web apps on purpose, learning how they fail, and writing down what I find so I can do it cleaner next time. Right now that means working through PortSwigger labs and the usual web bugs, with a clear goal in mind: get good enough at web application testing to do it properly as a junior tester."
        />
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-[#8A8A8A]">
          I like the practical side of security more than the theory. If something can be tested by hand, I would rather test it than read about it.
        </p>
        <Illustration label="Abstract illustration, photo to be added later" />
      </Reveal>
    </div>
  );
}
