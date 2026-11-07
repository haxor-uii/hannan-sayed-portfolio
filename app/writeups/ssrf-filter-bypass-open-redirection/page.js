import WriteupArticle from "../../components/WriteupArticle";
import Reveal from "../../components/Reveal";
import GlowDivider from "../../components/GlowDivider";

export const metadata = {
  description: "SSRF explainer: bypassing an SSRF filter through open redirection, the hardest Practitioner lab in the topic on PortSwigger Academy. How it works, the payload, and the fix.",
  title: "SSRF, bypassing a filter through open redirection, explained | hannan.",
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

export default function SsrfOpenRedirection() {
  return (
    <WriteupArticle
      title="SSRF, bypassing a filter through open redirection, explained"
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
        Server-side request forgery is when an attacker makes the server fetch a URL of their
        choosing. The server is inside the trusted network, so it can reach things you cannot, like
        an internal admin panel. The usual defence is a filter on the URL, and this lab is about
        what happens when the filter only looks at the first URL.
      </p>

      <GlowDivider />

      <Section title="The bug">
        <p>
          The lab is a shop with a stock check feature. When you check stock, your browser sends a
          stockApi parameter, and the server fetches that URL to get the stock data. The server
          validates the URL: it has to point at the allowed stock host. If you point it at the
          internal admin interface instead, the request is rejected.
        </p>
        <p>
          But the site also has an open redirection on one of its own pages. A URL on the allowed
          host can redirect the browser, or the server, to somewhere else entirely. The filter
          checks the URL you give it, which is allowed, and then the server follows the redirect to
          the URL you actually wanted, which is not. The check happens once, the fetch happens
          twice.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The worked example">
        <p>
          The lab is SSRF with filter bypass via open redirection, Practitioner level, on
          PortSwigger Academy. The goal is the internal admin interface, and then deleting the user
          carlos.
        </p>
        <p>
          The shop has a next-product page that redirects to whatever path you give it. So you set
          the stockApi parameter to that page on the allowed host, with the path set to the internal
          admin URL:
        </p>
        <Code>{"stockApi=http://weliketoshop.net/product/nextProduct?currentProductId=6&path=http://192.168.0.68/admin"}</Code>
        <p>
          The filter sees a URL on the allowed host and lets it through. The server fetches it, the
          page redirects to the internal admin URL, and the server follows the redirect, because the
          HTTP client it uses follows redirects by default. The admin page comes back in the
          response, and from there you can delete carlos the same way, by pointing the redirect at
          the admin delete URL for his account.
        </p>
        <p>
          The trick is a mismatch between two pieces of code. The filter validates the first URL.
          The fetcher follows the second one. Neither is wrong on its own, and together they let you
          through.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The fix">
        <p>
          <strong>Validate the final destination, not just the first URL.</strong> If the fetcher
          follows redirects, the filter has to apply to every URL in the chain, or redirects have to
          be disabled entirely. Checking only the starting URL is not a check.
        </p>
        <p>
          <strong>Allowlist the exact hosts and paths.</strong> Do not just check that the URL
          contains an allowed name. Parse it properly, check the host exactly, and only allow the
          endpoints the feature actually needs.
        </p>
        <p>
          <strong>Block private and internal addresses.</strong> The server should never be allowed
          to fetch loopback or private IP ranges, or cloud metadata endpoints. If the feature only
          ever talks to one public API, there is no reason for it to reach the internal network at
          all.
        </p>
      </Section>

      <GlowDivider />

      <p className="text-sm text-[#8A8A8A]">
        Lab: SSRF with filter bypass via open redirection, PortSwigger Web Security Academy, Practitioner level. Run it yourself on the Academy, it is free.
      </p>
      <p>
        <a href="/writeups" className="font-semibold text-[#F5F2ED] underline underline-offset-4">
          Back to Writeups
        </a>
      </p>
    </WriteupArticle>
  );
}
