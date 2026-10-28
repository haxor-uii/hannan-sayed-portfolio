import "./globals.css";

export const metadata = {
  description:
    "Portfolio of Hannan Sayed — Ethical Hacker | Cybersecurity Aspirant, B.Sc. Computer Science student focused on offensive cybersecurity and web application penetration testing.",
  title: "Hannan Sayed — Ethical Hacker | Cybersecurity Aspirant",
};

const nav = [
  ["About", "#about"],
  ["Education", "#education"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Certifications", "#certifications"],
  ["Writeups", "#writeups"],
  ["Contact", "#contact"],
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <header className="header">
          <nav className="nav" aria-label="Main navigation">
            <a href="#about">
              <strong>Hannan Sayed</strong>
            </a>
            <div className="nav-links">
              {nav.map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </header>
        <main id="main" className="main">
          {children}
        </main>
        <footer className="footer">
          <div className="main" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <p>
              © Hannan Sayed ·{" "}
              <a href="https://www.linkedin.com/in/hannan-sayed-18b751258">LinkedIn</a> ·{" "}
              <a href="https://github.com/haxor-uii">GitHub</a> ·{" "}
              <a href="mailto:sfmods130@gmail.com">sfmods130@gmail.com</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
