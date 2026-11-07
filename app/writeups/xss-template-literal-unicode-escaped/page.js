import WriteupArticle from "../../components/WriteupArticle";
import Reveal from "../../components/Reveal";
import GlowDivider from "../../components/GlowDivider";

export const metadata = {
  description: "Cross-site scripting explainer: reflected XSS inside a JavaScript template literal, the hardest Practitioner lab in the topic on PortSwigger Academy. How it works, the payload, and the fix.",
  title: "Cross-site scripting, breaking out of a template literal, explained | hannan.",
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

export default function XssTemplateLiteral() {
  return (
    <WriteupArticle
      title="Cross-site scripting, breaking out of a template literal, explained"
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
        Cross-site scripting is when an attacker gets a website to return JavaScript that runs in
        another user's browser. Reflected XSS is the simple version: your input comes back in the
        response, in the same request. The hard part is always the context, where exactly your input
        lands, and what the site does to it on the way.
      </p>

      <GlowDivider />

      <Section title="The bug">
        <p>
          The lab is a blog with a search box. Your search term is reflected inside a JavaScript
          template literal, the kind written with backticks. The site tries hard to stop you: angle
          brackets, single quotes, double quotes, backslashes, and backticks all get Unicode-escaped
          on the way out. You cannot break out of the string the normal way, because every character
          you would use to break out is escaped.
        </p>
        <p>
          But a template literal is not a normal string. Anything inside {"${...}"} in a template literal
          is JavaScript, and it gets evaluated when the literal is processed. The escaping does not
          touch the dollar sign or the curly brackets, so you do not need to break out at all. You
          just write code inside the literal.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The worked example">
        <p>
          The lab is Reflected XSS into a template literal with angle brackets, single, double
          quotes, backslash and backticks Unicode-escaped, Practitioner level, on PortSwigger
          Academy. Search for a random string first, look at the page source, and you will see your
          string sitting inside a template literal, with the dangerous characters escaped.
        </p>
        <p>
          The payload is short. Put this in the search box:
        </p>
        <Code>{"${alert(1)}"}</Code>
        <p>
          When the page builds the template literal, it evaluates the expression inside {"${...}"}, and
          alert(1) runs. That is the whole trick. The filter was built to stop you breaking out of a
          string, and it works, but it never considered that the string itself can run code.
        </p>
        <p>
          This is why context matters in XSS. The same payload is useless in an HTML context and
          perfect here. The fix has to match the context too, which is the next section.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The fix">
        <p>
          <strong>Encode output for the context it lands in.</strong> HTML encoding is not enough
          inside JavaScript. Data going into a script needs JavaScript encoding, and the safest move
          is to not put user data into scripts at all. Keep data in the page as data, and let the
          script read it from there.
        </p>
        <p>
          <strong>Content Security Policy as a second line.</strong> A strict CSP can stop an
          injected script from running even if the encoding fails. It is a safety net, not a fix on
          its own, because CSPs get bypassed, but it still raises the bar a lot.
        </p>
        <p>
          <strong>Do not build JavaScript by concatenating strings.</strong> Template literals with
          user input inside them are a footgun. If the input has to reach the page, put it somewhere
          safe, like a data attribute, and read it with JavaScript instead of writing it into code.
        </p>
      </Section>

      <GlowDivider />

      <p className="text-sm text-[#8A8A8A]">
        Lab: Reflected XSS into a template literal with angle brackets, single, double quotes, backslash and backticks Unicode-escaped, PortSwigger Web Security Academy, Practitioner level. Run it yourself on the Academy, it is free.
      </p>
      <p>
        <a href="/writeups" className="font-semibold text-[#F5F2ED] underline underline-offset-4">
          Back to Writeups
        </a>
      </p>
    </WriteupArticle>
  );
}
