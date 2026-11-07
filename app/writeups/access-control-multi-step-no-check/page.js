import WriteupArticle from "../../components/WriteupArticle";
import Reveal from "../../components/Reveal";
import GlowDivider from "../../components/GlowDivider";

export const metadata = {
  description: "Access control explainer: a multi-step process with no access control on one step, the hardest Practitioner lab in the topic on PortSwigger Academy. How it works and the fix.",
  title: "Access control, the missing check on step two, explained | hannan.",
};

function Section({ title, children }) {
  return (
    <Reveal tag="section" className="py-8">
      <h2 className="mt-3 text-xl text-[#F5F2ED] sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#F5F2ED]">{children}</div>
    </Reveal>
  );
}

export default function AccessControlMultiStep() {
  return (
    <WriteupArticle
      title="Access control, the missing check on step two, explained"
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
        Access control is the question of who is allowed to do what. The classic failure is when the
        app checks permission in one place and forgets it in another, usually because a task happens
        in more than one step, and the check only lives on the first one.
      </p>

      <GlowDivider />

      <Section title="The bug">
        <p>
          The lab is a shop with an admin panel. An admin can upgrade a user's role, and it takes
          two steps: first you pick the user and the new role, then you confirm it. The first step
          checks that you are an admin. The confirmation step does not check anything at all. It
          just does what the request says.
        </p>
        <p>
          The app assumes that anyone who reaches step two must have passed step one. That is only
          true if the user follows the intended path. But requests are just requests, and nothing
          stops you from sending step two directly, as anyone.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The worked example">
        <p>
          The lab is Multi-step process with no access control on one step, Practitioner level, on
          PortSwigger Academy. The goal is to make the low-privilege user wiener an administrator.
        </p>
        <p>
          First, do it properly. Log in as administrator, upgrade carlos, and capture the
          confirmation request in Burp Repeater. That gives you the exact request the server expects,
          with the role and the username in it.
        </p>
        <p>
          Then do it as the wrong user. Log in as wiener in another browser, copy wiener's session
          cookie into the captured confirmation request, and change the username in the request from
          carlos to wiener. Replay it.
        </p>
        <p>
          The server never re-checks your privileges on the confirmation step, so it promotes wiener
          to administrator. Log in as wiener, open the admin panel, and the lab is solved.
        </p>
        <p>
          The fix is one sentence, and it is the whole lesson: check authorization on every step,
          not just the first one.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The fix">
        <p>
          <strong>Authorise every request, not every flow.</strong> Each step of a multi-step
          process is its own request, and each one needs its own check. The server cannot assume
          that a request is authorised just because an earlier request was.
        </p>
        <p>
          <strong>Check on the server, never on the client.</strong> Hiding a button from a user
          does not stop them from sending the request behind it. The check has to live in the code
          that performs the action, not in the page that shows it.
        </p>
        <p>
          <strong>Default to deny.</strong> If the code cannot prove the user is allowed to do
          something, it should refuse. Access control that fails open, by forgetting a check, is
          how labs like this one get solved.
        </p>
      </Section>

      <GlowDivider />

      <p className="text-sm text-[#8A8A8A]">
        Lab: Multi-step process with no access control on one step, PortSwigger Web Security Academy, Practitioner level. Run it yourself on the Academy, it is free.
      </p>
      <p>
        <a href="/writeups" className="font-semibold text-[#F5F2ED] underline underline-offset-4">
          Back to Writeups
        </a>
      </p>
    </WriteupArticle>
  );
}
