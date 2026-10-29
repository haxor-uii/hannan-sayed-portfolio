import "./globals.css";
import Fireflies from "./components/Fireflies";
import SiteChrome from "./components/SiteChrome";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

export const metadata = {
  description:
    "Portfolio of Hannan Sayed — Ethical Hacker | Cybersecurity Aspirant, B.Sc. Computer Science student focused on offensive cybersecurity and web application penetration testing.",
  title: "Hannan Sayed — Ethical Hacker | Cybersecurity Aspirant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050810] text-slate-100 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-[#7dd3fc] focus:px-4 focus:py-2 focus:font-bold focus:text-[#050810] print:hidden"
        >
          Skip to content
        </a>
        {/* Very soft aurora glows behind flat content — not boxes */}
        <div
          aria-hidden="true"
          className="aurora pointer-events-none fixed inset-0 z-0 overflow-hidden print:hidden"
        >
          <div
            className="aurora-blob"
            style={{ top: "-12%", left: "8%", width: 520, height: 520, background: "rgba(125, 211, 252, 0.12)" }}
          />
          <div
            className="aurora-blob"
            style={{ top: "18%", right: "-8%", width: 460, height: 460, background: "rgba(196, 181, 253, 0.10)" }}
          />
          <div
            className="aurora-blob"
            style={{ bottom: "-14%", left: "32%", width: 480, height: 480, background: "rgba(167, 243, 208, 0.06)" }}
          />
        </div>
        <Fireflies />
        <CustomCursor />
        <SiteChrome>{children}</SiteChrome>
        <ScrollProgress />
      </body>
    </html>
  );
}
