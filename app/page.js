import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <section id="about" className="hero" aria-labelledby="hero-heading">
        <p className="eyebrow">Ethical Hacker | Cybersecurity Aspirant</p>
        <h1 id="hero-heading">Hannan Sayed</h1>
        <p className="lead">
          B.Sc. Computer Science student focused on offensive cybersecurity and web
          application penetration testing.
        </p>
        <p className="meta">Mumbai, Maharashtra, India</p>
        <div className="btns">
          <a className="btn" href="https://www.linkedin.com/in/hannan-sayed-18b751258">
            LinkedIn
          </a>
          <a className="btn btn-secondary" href="https://github.com/haxor-uii">
            GitHub
          </a>
          <a className="btn btn-secondary" href="mailto:sfmods130@gmail.com">
            Email me
          </a>
        </div>
      </section>

      <Reveal tag="section" id="education" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <Reveal tag="div" className="card">
          <h3>St. Wilfred&apos;s College of ACS, University of Mumbai (NEP 2020)</h3>
          <p>B.Sc. Computer Science, second year, academic year 2026–27.</p>
        </Reveal>
      </Reveal>

      <Reveal tag="section" id="skills" aria-labelledby="skills-heading">
        <h2 id="skills-heading">Skills &amp; Knowledge</h2>
        <ul className="tags" aria-label="Core skills">
          <li>Penetration Testing</li>
          <li>Web Application Security</li>
          <li>OWASP Top 10</li>
          <li>Web Application Penetration Testing</li>
          <li>Ethical Hacking</li>
          <li>Cyber Security Fundamentals</li>
        </ul>
        <h3>Web vulnerabilities</h3>
        <ul className="tags" aria-label="Web vulnerabilities">
          <li>SQL injection</li>
          <li>XSS</li>
          <li>CSRF</li>
          <li>OS command injection</li>
          <li>SSRF</li>
          <li>Path traversal</li>
          <li>IDOR / access control</li>
          <li>Authentication flaws</li>
          <li>Information disclosure</li>
          <li>File uploads</li>
        </ul>
        <h3>Tools &amp; practice</h3>
        <ul className="tags" aria-label="Tools and practice">
          <li>Burp Suite</li>
          <li>Linux</li>
          <li>Networking</li>
          <li>PortSwigger Web Security Academy</li>
          <li>DVWA</li>
          <li>bWAPP</li>
          <li>Juice Shop</li>
          <li>WebGoat</li>
        </ul>
      </Reveal>

      <Reveal tag="section" id="experience" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience</h2>
        <Reveal tag="div" className="card">
          <h3>ShadowFox — One-month Virtual Internship in Cyber Security</h3>
          <p className="meta">01/04/2026 to 30/04/2026</p>
          <p>Noted as exceptional performance.</p>
          <p className="meta">Cert ID: SFO4VIP284</p>
        </Reveal>
      </Reveal>

      <Reveal tag="section" id="certifications" aria-labelledby="certifications-heading">
        <h2 id="certifications-heading">Certifications &amp; Training</h2>
        <div className="card-grid">
        <Reveal tag="div" className="card">
          <h3>DH - Penetration Tester</h3>
          <p>Darknet Hacking (Mira Road branch) — 09/12/2025</p>
        </Reveal>
        <Reveal tag="div" className="card">
          <h3>DH WAPT</h3>
          <p>Darknet Hacking — 24/04/2026</p>
        </Reveal>
        <Reveal tag="div" className="card">
          <h3>CompTIA PenTest+ (PT0-002) Specialization</h3>
          <p>Coursera / Packt — completed 5 June 2026</p>
          <p className="note">
            Specialization completion — not CompTIA certification itself.
          </p>
        </Reveal>
        <Reveal tag="div" className="card">
          <h3>PortSwigger Web Security Academy</h3>
          <p>In progress — ongoing lab practice.</p>
        </Reveal>
        </div>
      </Reveal>

      <Reveal tag="section" id="writeups" aria-labelledby="writeups-heading">
        <h2 id="writeups-heading">Writeups</h2>
        <p>
          A growing index for future writeups, organised by topic. Nothing is published
          here yet.
        </p>
        <ul className="tags" aria-label="Writeup categories">
          <li>Web vulnerabilities</li>
          <li>Lab notes</li>
        </ul>
        <p className="note">Coming soon — writeups will be added here as they are written.</p>
        <p>
          <a href="/writeups">View the writeups index →</a>
        </p>
      </Reveal>

      <Reveal tag="section" id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact</h2>
        <p>For professional enquiries, reach me through:</p>
        <ul>
          <li>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/hannan-sayed-18b751258">
              linkedin.com/in/hannan-sayed-18b751258
            </a>
          </li>
          <li>
            GitHub: <a href="https://github.com/haxor-uii">github.com/haxor-uii</a>
          </li>
          <li>
            Email: <a href="mailto:sfmods130@gmail.com">sfmods130@gmail.com</a>
          </li>
        </ul>
      </Reveal>
    </>
  );
}
