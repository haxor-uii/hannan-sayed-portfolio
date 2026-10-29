import PageHead from "../components/PageHead";
import Reveal from "../components/Reveal";

export const metadata = {
  description: "Skills of hannan. Core competencies, vulnerability focus, and tools and environments.",
  title: "Skills | hannan.",
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

export default function Skills() {
  return (
    <div>
      <PageHead eyebrowText="Skills" title="Skills" />
      <Reveal tag="section" className="py-10">
        <h2 className="text-2xl text-[#F5F2ED] sm:text-3xl">Core Competencies</h2>
        <TagList label="Core competencies" items={["Penetration Testing", "Web Application Security", "OWASP Top 10", "Web Application Penetration Testing", "Ethical Hacking", "Cyber Security Fundamentals"]} />
      </Reveal>
      <Reveal tag="section" className="py-10">
        <h2 className="text-2xl text-[#F5F2ED] sm:text-3xl">Vulnerability Focus Directory</h2>
        <TagList label="Vulnerability focus" items={["SQL injection", "XSS", "CSRF", "OS command injection", "SSRF", "Path traversal", "IDOR / access control", "Authentication flaws", "Information disclosure", "File uploads"]} />
      </Reveal>
      <Reveal tag="section" className="py-10">
        <h2 className="text-2xl text-[#F5F2ED] sm:text-3xl">Tools and Environments</h2>
        <TagList label="Tools and environments" items={["Burp Suite", "Linux", "Networking", "PortSwigger Web Security Academy", "DVWA", "bWAPP", "Juice Shop", "WebGoat"]} />
      </Reveal>
    </div>
  );
}
