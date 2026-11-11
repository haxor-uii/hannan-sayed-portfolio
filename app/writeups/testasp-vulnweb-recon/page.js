import WriteupArticle from "../../components/WriteupArticle";
import Reveal from "../../components/Reveal";
import GlowDivider from "../../components/GlowDivider";

export const metadata = {
  description: "testasp.vulnweb.com recon walkthrough, 30 April 2026. Nmap, Gobuster, and a cleartext login caught in Wireshark. A ShadowFox internship lab.",
  title: "testasp.vulnweb.com recon, one chain | hannan.",
};

function Step({ number, title, children }) {
  return (
    <Reveal tag="section" className="py-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">Step {number}</p>
      <h2 className="mt-3 text-lg text-[#F5F2ED] sm:text-xl">{title}</h2>
      <div className="mt-4 space-y-4 text-xs leading-relaxed text-[#F5F2ED]">{children}</div>
    </Reveal>
  );
}

function Code({ children }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-[#262626] bg-[#111111] p-4 font-mono text-sm leading-relaxed text-[#F5F2ED]">
      <code>{children}</code>
    </pre>
  );
}

function Shot({ src, alt, caption }) {
  return (
    <figure className="mt-6">
      <img src={src} alt={alt} className="w-full rounded-xl border border-[#262626]" loading="lazy" />
      <figcaption className="mt-3 text-xs text-[#8A8A8A]">{caption}</figcaption>
    </figure>
  );
}

export default function TestaspVulnwebRecon() {
  return (
    <WriteupArticle
      title="testasp.vulnweb.com recon, one chain"
      date="30 April 2026"
      category="Web vulnerabilities"
      readingTime="4 min read"
    >
      <p>
        This is the beginner task from my ShadowFox cyber security internship, April 2026. The target is
        testasp.vulnweb.com, a test site built for learning, so testing it is the whole point of it. I
        did the chain in one day on 30 April 2026: scan it, find the login page, then watch a login
        travel across the network in cleartext.
      </p>
      <p>
        Three tools, three steps, one story. The scan says what is open, the directory brute force says
        where the login lives, and the packet capture says what the login actually sends.
      </p>

      <GlowDivider />

      <Step number="1" title="Nmap, only port 80 open">
        <p>
          I scanned every port on testasp.vulnweb.com. The scan took 680 seconds, and the result was
          simple: only port 80 is open, running Microsoft IIS httpd 8.5. Everything else, 65534 ports,
          is filtered.
        </p>
        <Code>{`nmap -p- -sC -sV testasp.vulnweb.com`}</Code>
        <p>
          That means the whole attack surface here is one web server. An old one, too, IIS 8.5. The fix
          on a real site is the boring one: close what you do not need, and keep what is left patched.
        </p>
        <Shot
          src="/writeups/beginner/01-nmap-apr30.jpg"
          alt="Nmap output on testasp.vulnweb.com, only port 80 open, IIS httpd 8.5"
          caption="Nmap, 30 April 13:58. Host 44.238.29.244, only 80/tcp open, IIS httpd 8.5."
        />
      </Step>

      <GlowDivider />

      <Step number="2" title="Gobuster found /login.asp">
        <p>
          With only a web server to look at, I brute forced its directories with Gobuster and the common
          wordlist, looking for asp, aspx, and txt files. It finished all 18452 entries, and the
          interesting hit was /login.asp.
        </p>
        <Code>{`gobuster dir -u http://testasp.vulnweb.com/ -w /usr/share/wordlists/dirb/common.txt -x asp,aspx,txt`}</Code>
        <p>
          A login page is where the sensitive stuff happens, so that is where I went next. Hiding a page
          is not protection, but a login page that is easy to find still needs to be a strong one.
        </p>
        <Shot
          src="/writeups/beginner/02-gobuster-testasp-apr30.jpg"
          alt="Gobuster output on testasp.vulnweb.com, showing /login.asp found"
          caption="Gobuster, 30 April 14:20. Progress 18452 of 18452, /login.asp is the hit."
        />
      </Step>

      <GlowDivider />

      <Step number="3" title="Wireshark caught the login in cleartext">
        <p>
          I made a test login on the site while Wireshark was capturing, then followed the HTTP stream.
          The login is a plain HTTP POST to /login.asp, and the username and password travel in
          cleartext, readable by anyone on the network.
        </p>
        <Code>{`POST /login.asp
tfUName=ShadowFox_Admin&tfUPass=intern_2026`}</Code>
        <p>
          The test login was ShadowFox_Admin with the password intern_2026, and both are visible in the
          capture, in the open. That is the finding: this site uses HTTP, not HTTPS, so credentials go
          over the wire as plain text. The fix is HTTPS everywhere, with HSTS so the browser never falls
          back to plain HTTP.
        </p>
        <Shot
          src="/writeups/beginner/03-wireshark-apr30.jpg"
          alt="Wireshark follow HTTP stream showing a POST to /login.asp with cleartext credentials"
          caption="Wireshark, tcp.stream eq 3, 30 April. POST /login.asp, credentials in cleartext."
        />
      </Step>

      <GlowDivider />

      <Step number="4" title="What was wrong">
        <p>
          The chain was Nmap to Gobuster to Wireshark. One open port, one login page, one cleartext
          login. Nothing here needed an exploit, just three basic tools used in order.
        </p>
        <h3 className="pt-4 text-base text-[#F5F2ED]">Findings and fixes</h3>
        <p>
          <strong>Cleartext login over HTTP.</strong> The username and password travel as plain text.
          Fix it with HTTPS everywhere and HSTS, so logins never go over plain HTTP.
        </p>
        <p>
          <strong>Old web server.</strong> IIS 8.5 is old and out of support. Fix it by moving to a
          supported version and keeping it patched.
        </p>
        <p>
          <strong>Login page easy to find.</strong> Gobuster found /login.asp in one run. That is not a
          bug on its own, but it means the login has to be strong: good passwords, lockout after failed
          tries, and multi-factor authentication where it matters.
        </p>
      </Step>

      <GlowDivider />

      <p className="text-xs text-[#8A8A8A]">
        Done during the ShadowFox Cyber Security Virtual Internship, 1 to 30 April 2026. Cert ID SFO4VIP284.
      </p>
      <p>
        <a href="/writeups" className="font-semibold text-[#F5F2ED] underline underline-offset-4">
          Back to Writeups
        </a>
      </p>
    </WriteupArticle>
  );
}
