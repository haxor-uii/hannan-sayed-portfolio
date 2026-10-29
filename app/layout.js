import "./globals.css";
import Fireflies from "./components/Fireflies";
import SiteChrome from "./components/SiteChrome";
import CrosshairCursor from "./components/CrosshairCursor";
import ScrollProgress from "./components/ScrollProgress";

export const metadata = {
  description: "Portfolio of hannan. Ethical Hacker | Cybersecurity Aspirant, B.Sc. Computer Science student focused on offensive cybersecurity and web application penetration testing.",
  title: "hannan. | Ethical Hacker | Cybersecurity Aspirant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0C0C0C] text-[#F5F2ED] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-[#E11D2E] focus:px-4 focus:py-2 focus:font-bold focus:text-[#F5F2ED] print:hidden"
        >
          Skip to content
        </a>
        <Fireflies />
        <CrosshairCursor />
        <SiteChrome>{children}</SiteChrome>
        <ScrollProgress />
      </body>
    </html>
  );
}
