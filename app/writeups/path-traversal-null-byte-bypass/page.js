import WriteupArticle from "../../components/WriteupArticle";
import Reveal from "../../components/Reveal";
import GlowDivider from "../../components/GlowDivider";

export const metadata = {
  description: "Path traversal explainer: bypassing a file extension check with a null byte, the hardest Practitioner lab in the topic on PortSwigger Academy. How it works, the payload, and the fix.",
  title: "Path traversal, the null byte trick, explained | hannan.",
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

export default function PathTraversalNullByte() {
  return (
    <WriteupArticle
      title="Path traversal, the null byte trick, explained"
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
        Path traversal is when an attacker puts ../ sequences into a filename and escapes the folder
        the app meant to serve files from. If the app builds a file path from your input without
        checking it, you can ask for files anywhere on the server, like /etc/passwd.
      </p>

      <GlowDivider />

      <Section title="The bug">
        <p>
          The lab is a shop that serves product images through a filename parameter. It tries to
          defend itself by checking the file extension: the filename has to end with an expected
          image extension. A plain traversal like ../../../etc/passwd gets a 400 response, because
          it does not end with an image extension.
        </p>
        <p>
          The flaw is that two pieces of code see the same filename differently. The validator looks
          at the whole string, and it ends with .png, so it passes. But the code that actually opens
          the file treats the string the old C way, where a null byte ends the string. Everything
          after the null byte is invisible to it.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The worked example">
        <p>
          The lab is File path traversal, validation of file extension with null byte bypass,
          Practitioner level, on PortSwigger Academy. The goal is the contents of /etc/passwd.
        </p>
        <p>
          The payload is the traversal, then a null byte, then a valid extension:
        </p>
        <Code>{"/image?filename=../../../etc/passwd%00.png"}</Code>
        <p>
          The validator sees a filename ending in .png and allows it. The filesystem code sees
          ../../../etc/passwd, because it stops reading at the null byte, %00, and never sees the
          .png. The server opens /etc/passwd and returns it in the response.
        </p>
        <p>
          Two things are worth knowing. First, modern versions of PHP and most frameworks are not
          vulnerable to null bytes any more, so this exact trick is mostly a lab thing today. Second,
          the lesson is not the null byte, it is the mismatch: the check and the use of the data have
          to agree on what the data is, or the check is worthless.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The fix">
        <p>
          <strong>Canonicalise the path, then check it.</strong> Resolve the full path, including
          any .. sequences, and then check that it is still inside the folder you meant to serve
          from. Checking the raw input before resolving it is how bypasses happen.
        </p>
        <p>
          <strong>Do not use user input as a file path.</strong> The safest design is to map input
          to a file indirectly, like an ID that looks up a record, instead of letting the user name
          the file. If they cannot name the file, they cannot traverse with it.
        </p>
        <p>
          <strong>Validate the extension after resolving, on the real filename.</strong> If you must
          check extensions, check the resolved path, not the raw input, and use an allowlist of
          extensions you actually serve.
        </p>
      </Section>

      <GlowDivider />

      <p className="text-sm text-[#8A8A8A]">
        Lab: File path traversal, validation of file extension with null byte bypass, PortSwigger Web Security Academy, Practitioner level. Run it yourself on the Academy, it is free.
      </p>
      <p>
        <a href="/writeups" className="font-semibold text-[#F5F2ED] underline underline-offset-4">
          Back to Writeups
        </a>
      </p>
    </WriteupArticle>
  );
}
