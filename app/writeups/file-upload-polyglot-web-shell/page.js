import WriteupArticle from "../../components/WriteupArticle";
import Reveal from "../../components/Reveal";
import GlowDivider from "../../components/GlowDivider";

export const metadata = {
  description: "File upload explainer: remote code execution via a polyglot web shell upload, the hardest Practitioner lab in the topic on PortSwigger Academy. How it works, the payload, and the fix.",
  title: "File upload, the polyglot image that is also a shell, explained | hannan.",
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

export default function FileUploadPolyglot() {
  return (
    <WriteupArticle
      title="File upload, the polyglot image that is also a shell, explained"
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
        File upload vulnerabilities happen when a site lets users upload files and then trusts them.
        If you can upload a script and get the server to run it, you have remote code execution.
        Sites usually try to stop this by checking the file type, and this lab is about a file that
        passes the check and is still a script.
      </p>

      <GlowDivider />

      <Section title="The bug">
        <p>
          The lab is a shop where you upload an avatar image. The upload function checks that the
          file is really an image, and the earlier bypasses do not work here: changing the
          Content-Type gets caught, changing the extension gets caught, and the file has to be a
          valid image. So the check is real, and it works, for files that are only one thing.
        </p>
        <p>
          The flaw is that a file can be two things at once. A polyglot is a file that is valid in
          more than one format. A JPEG with PHP code hidden in its metadata is a real image, so it
          passes the image checks, and it is also a PHP script, so the server runs it when it is
          asked for with a .php name.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The worked example">
        <p>
          The lab is Remote code execution via polyglot web shell upload, Practitioner level, on
          PortSwigger Academy. The goal is the contents of /home/carlos/secret.
        </p>
        <p>
          First, make the polyglot. ExifTool can write your PHP payload into the Comment field of a
          normal image and save it with a .php extension:
        </p>
        <Code>{`exiftool -Comment="<?php echo 'START ' . file_get_contents('/home/carlos/secret') . ' END'; ?>" <YOUR-INPUT-IMAGE>.jpg -o polyglot.php`}</Code>
        <p>
          Upload polyglot.php as your avatar. The server checks it, sees a valid image, and accepts
          it. Then go back to your account page and find the GET request for your avatar in Burp's
          proxy history, at /files/avatars/polyglot.php. The server executes the PHP inside the
          image metadata and returns the secret between the START and END markers.
        </p>
        <Code>{"START <carlos-secret> END"}</Code>
        <p>
          Submit the secret and the lab is solved. The check did its job, it verified the file was
          an image, and it was right. It just never asked whether the image was also something else.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The fix">
        <p>
          <strong>Validate the content, then re-encode it.</strong> Checking a file is an image is
          not enough if you keep the original bytes. Re-encoding the image through a library strips
          out metadata, comments, and anything else hiding in it.
        </p>
        <p>
          <strong>Store uploads outside the web root, with random names.</strong> If the file
          cannot be reached by a URL, it cannot be executed by requesting it. Serve it through code
          that sets the right content type, never by letting the web server guess from the extension.
        </p>
        <p>
          <strong>Never execute uploaded files.</strong> The upload folder should not run scripts,
          whatever the extension. If the server cannot execute code from that folder, a polyglot is
          just an image with a weird comment in it.
        </p>
      </Section>

      <GlowDivider />

      <p className="text-sm text-[#8A8A8A]">
        Lab: Remote code execution via polyglot web shell upload, PortSwigger Web Security Academy, Practitioner level. Run it yourself on the Academy, it is free.
      </p>
      <p>
        <a href="/writeups" className="font-semibold text-[#F5F2ED] underline underline-offset-4">
          Back to Writeups
        </a>
      </p>
    </WriteupArticle>
  );
}
