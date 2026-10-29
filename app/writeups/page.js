import PageHead from "../components/PageHead";
import Reveal from "../components/Reveal";
import GlowDivider from "../components/GlowDivider";

export const metadata = {
  description: "Writeups index for hannan. Future posts on web vulnerabilities and lab notes. Coming soon.",
  title: "Writeups | hannan.",
};

function TagList({ items, label }) {
  return (
    <ul aria-label={label} className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-base text-[#F5F2ED]">
          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E11D2E]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Writeups() {
  return (
    <div>
      <PageHead eyebrowText="Writeups" title="Writeups" intro="Future writeups will live here, organised by topic. Nothing is published yet." />
      <Reveal tag="section" className="py-10">
        <h2 className="text-2xl text-[#F5F2ED] sm:text-3xl">Categories</h2>
        <TagList label="Writeup categories" items={["Web vulnerabilities", "Lab notes"]} />
      </Reveal>
      <GlowDivider />
      <Reveal tag="section" className="py-10">
        <h2 className="text-2xl text-[#F5F2ED] sm:text-3xl">Posts</h2>
        <p className="mt-4 text-sm text-[#8A8A8A]">
          Coming soon, writeups will be added here as they are written.
        </p>
      </Reveal>
    </div>
  );
}
