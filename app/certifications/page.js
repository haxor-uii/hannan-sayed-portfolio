import PageHead from "../components/PageHead";
import Reveal from "../components/Reveal";

export const metadata = {
  description: "Certifications of hannan. Darknet Hacking, Coursera and Packt, and PortSwigger Web Security Academy.",
  title: "Certifications | hannan.",
};

const certs = [
  { name: "DH - Penetration Tester", detail: "Darknet Hacking (Mira Road branch), 09/12/2025", status: "Completed" },
  { name: "DH WAPT", detail: "Darknet Hacking, 24/04/2026", status: "Completed" },
  { name: "CompTIA PenTest+ (PT0-002) Specialization", detail: "Coursera / Packt, completed 5 June 2026. Specialization completion, not CompTIA certification itself.", status: "Completed" },
  { name: "PortSwigger Web Security Academy", detail: "In progress, ongoing lab practice.", status: "In progress" },
];

export default function Certifications() {
  return (
    <div>
      <PageHead eyebrowText="Credentials" title="Certifications" />
      <Reveal tag="section" className="py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {certs.map((cert) => (
            <div key={cert.name}>
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-2xl leading-snug text-[#F5F2ED]">{cert.name}</h2>
                <span className="shrink-0 text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">{cert.status}</span>
              </div>
              <p className="mt-3 text-[#8A8A8A]">{cert.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
