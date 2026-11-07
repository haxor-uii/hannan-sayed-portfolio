import WriteupArticle from "../../components/WriteupArticle";
import Reveal from "../../components/Reveal";
import GlowDivider from "../../components/GlowDivider";

export const metadata = {
  description: "Authentication explainer: broken brute-force protection with an IP block, the hardest Practitioner lab in the topic on PortSwigger Academy. How it works and the fix.",
  title: "Authentication, resetting the lockout by logging in, explained | hannan.",
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

export default function AuthBruteForceIpBlock() {
  return (
    <WriteupArticle
      title="Authentication, resetting the lockout by logging in, explained"
      date="PortSwigger Academy, Practitioner"
      category="Vulnerability explainer"
      readingTime="5 min read"
    >
      <p>
        This is an explainer, not a lab diary. Each post in this series teaches one vulnerability and
        walks through the hardest Practitioner lab for it on PortSwigger Academy, step by step, with
        the real payloads. There are no screenshots here, the labs are public and you can run them
        yourself.
      </p>
      <p>
        Brute-force protection is supposed to make guessing passwords too slow to be worth it. The
        usual design is simple: too many wrong guesses, and the account or the IP gets blocked for a
        while. This lab is about a protection that counts the wrong thing, and lets you reset it by
        doing something right.
      </p>

      <GlowDivider />

      <Section title="The bug">
        <p>
          The lab site blocks your IP for a minute after three failed logins in a row. But the
          counter that tracks failed logins is reset by a successful login, any successful login, for
          any account. You have valid credentials of your own, wiener and peter, and the victim is
          carlos, whose password you do not know.
        </p>
        <p>
          So the block is not really a block. Two wrong guesses for carlos, then one correct login
          as wiener, and the counter is back to zero. Repeat that forever, and you can try every
          password in the list without ever being blocked. The protection counts consecutive failures,
          and you keep breaking the streak on purpose.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The worked example">
        <p>
          The lab is Broken brute-force protection, IP block, Practitioner level, on PortSwigger
          Academy. The goal is carlos's password, and then his account page.
        </p>
        <p>
          Send the login request to Burp Intruder as a pitchfork attack, with positions in both the
          username and the password. The pattern is two carlos attempts, then one wiener login, on
          repeat:
        </p>
        <Code>{`carlos : <password from list>
carlos : <password from list>
wiener : peter
carlos : <password from list>
carlos : <password from list>
wiener : peter`}</Code>
        <p>
          Two details matter. The attack has to run one request at a time, so put it in a resource
          pool with a maximum of one concurrent request, or the logins arrive out of order and the
          counter trips. And when it finishes, filter out the 200 responses and sort by username:
          there will be exactly one 302 response for carlos, and that is the correct password.
          Log in as carlos with it and the lab is solved.
        </p>
        <p>
          The flaw is a logic error, not a missing feature. The protection exists, it just resets on
          the wrong event. A successful login by someone else should never clear the failures
          against a different account.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The fix">
        <p>
          <strong>Count failures per account, not just per IP, and do not reset on unrelated
          logins.</strong> A successful login as wiener says nothing about the guesses against
          carlos. The counter for carlos should only move when carlos logs in correctly.
        </p>
        <p>
          <strong>Make the cost real.</strong> Proper rate limiting, CAPTCHAs after a few failures,
          and lockouts that actually stick will slow a brute force down to the point where it is not
          worth running. A one-minute block that can be reset in one request is not a limit.
        </p>
        <p>
          <strong>Add multi-factor authentication.</strong> Even if the password falls, a second
          factor stops the login. It is the one control that survives a brute-force protection
          failure.
        </p>
      </Section>

      <GlowDivider />

      <p className="text-sm text-[#8A8A8A]">
        Lab: Broken brute-force protection, IP block, PortSwigger Web Security Academy, Practitioner level. Run it yourself on the Academy, it is free.
      </p>
      <p>
        <a href="/writeups" className="font-semibold text-[#F5F2ED] underline underline-offset-4">
          Back to Writeups
        </a>
      </p>
    </WriteupArticle>
  );
}
