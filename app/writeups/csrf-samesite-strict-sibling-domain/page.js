import WriteupArticle from "../../components/WriteupArticle";
import Reveal from "../../components/Reveal";
import GlowDivider from "../../components/GlowDivider";

export const metadata = {
  description: "CSRF explainer: bypassing SameSite Strict through a sibling domain, the hardest Practitioner lab in the topic on PortSwigger Academy. How it works and the fix.",
  title: "CSRF, bypassing SameSite Strict through a sibling domain, explained | hannan.",
};

function Section({ title, children }) {
  return (
    <Reveal tag="section" className="py-8">
      <h2 className="mt-3 text-xl text-[#F5F2ED] sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#F5F2ED]">{children}</div>
    </Reveal>
  );
}

export default function CsrfSamesiteSibling() {
  return (
    <WriteupArticle
      title="CSRF, bypassing SameSite Strict through a sibling domain, explained"
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
        Cross-site request forgery is when an attacker makes your browser do something on a site you
        are logged into, without you meaning to. The site trusts the request because your browser
        attaches your session cookie automatically. The defence that usually stops this is the
        SameSite cookie attribute, and this lab is about going around it.
      </p>

      <GlowDivider />

      <Section title="The bug">
        <p>
          The lab site has a live chat feature. It works over a WebSocket, and the handshake request
          has no CSRF token in it, so anyone who can get the browser to open that WebSocket can act
          as the logged-in user. The catch is the session cookie, which is set with SameSite=Strict.
          A Strict cookie is never sent on a cross-site request, so a chat hijack launched from an
          attacker site arrives with no cookie, and the server treats it as a brand new, empty
          session. The attack is real, but it cannot reach the victim's account.
        </p>
        <p>
          The way around it is the sibling domain. The site's static resources return an
          Access-Control-Allow-Origin header that gives away a second domain under the same site, a
          CMS at cms-lab-id.web-security-academy.net. Two domains under the same site count as
          same-site for cookies, so a request started from the sibling domain carries the cookie.
          And the sibling domain has its own flaw: its login page reflects the username in the
          Invalid username message, which is a reflected XSS.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The worked example">
        <p>
          The lab is SameSite Strict bypass via sibling domain, Practitioner level, on PortSwigger
          Academy. It chains two vulnerabilities to beat one defence, and it goes in four steps.
        </p>
        <p>
          First, confirm the chat hijack works at all. Open a WebSocket to the chat endpoint from a
          page you control, send the READY message, and the server answers with the chat history.
          That proves the handshake has no token. But it is a new session, so the history is empty,
          and your cookie was not sent.
        </p>
        <p>
          Second, find the sibling domain. The ACAO header on static resources points at the CMS
          domain. Visit it and you find a login form. Submit any username and it comes back in the
          Invalid username message, and a script tag in the username runs, so it is reflected XSS.
          The login request can also be turned from POST into GET and still works, which means the
          whole attack fits in a URL.
        </p>
        <p>
          Third, put the chat hijack inside that XSS. The script opens the WebSocket to the main
          site and sends the chat history to a Collaborator server. Because the script runs on the
          sibling domain, the browser counts the WebSocket handshake as same-site, so the session
          cookie goes with it, and the history that comes back is the victim's real one.
        </p>
        <p>
          Fourth, deliver it to the victim. The exploit server hosts a page that sends the victim's
          browser to the sibling login URL with the hijack script as the username. The victim's chat
          history lands in the Collaborator log, and in that history there is a message containing
          the victim's username and password. Log in with those credentials and the lab is solved.
        </p>
        <p>
          The lesson is that SameSite is a browser rule about sites, not about trust. A sibling
          domain is the same site, so anything that runs there gets the cookie. One XSS on a
          forgotten subdomain undoes the protection on the main app.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The fix">
        <p>
          <strong>Use CSRF tokens on state-changing requests.</strong> SameSite is a useful layer,
          but it is not a replacement for an unpredictable token that an attacker cannot guess. The
          WebSocket handshake here had no token at all, and that is the real flaw.
        </p>
        <p>
          <strong>Treat sibling domains as part of your attack surface.</strong> A CMS, a staging
          site, or an old admin panel on a subdomain is the same site for cookie purposes. If it has
          XSS, your main app inherits the problem. Keep subdomains patched and minimal, and do not
          leave forgotten ones lying around.
        </p>
        <p>
          <strong>Do not put secrets in chat history.</strong> The victim's password was sitting in
          a chat message. Passwords belong in a password store, never in messages, logs, or anything
          a hijacked session can read back.
        </p>
      </Section>

      <GlowDivider />

      <p className="text-sm text-[#8A8A8A]">
        Lab: SameSite Strict bypass via sibling domain, PortSwigger Web Security Academy, Practitioner level. Run it yourself on the Academy, it is free.
      </p>
      <p>
        <a href="/writeups" className="font-semibold text-[#F5F2ED] underline underline-offset-4">
          Back to Writeups
        </a>
      </p>
    </WriteupArticle>
  );
}
