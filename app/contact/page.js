import PageHead from "../components/PageHead";
import Reveal from "../components/Reveal";

export const metadata = {
  description: "Contact hannan. LinkedIn, GitHub, and email.",
  title: "Contact | hannan.",
};

export default function Contact() {
  return (
    <div>
      <PageHead eyebrowText="Contact" title="Contact" intro="For professional enquiries, reach me through:" />
      <Reveal tag="section" className="py-10">
        <ul className="space-y-4 text-[#F5F2ED]">
          <li>
            <a href="https://www.linkedin.com/in/hannan-sayed-18b751258" className="font-semibold hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/haxor-uii" className="font-semibold hover:underline">
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:sfmods130@gmail.com" className="font-semibold hover:underline">
              sfmods130@gmail.com
            </a>
          </li>
        </ul>
      </Reveal>
    </div>
  );
}
