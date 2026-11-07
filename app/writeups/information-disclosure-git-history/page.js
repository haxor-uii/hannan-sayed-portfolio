import WriteupArticle from "../../components/WriteupArticle";
import Reveal from "../../components/Reveal";
import GlowDivider from "../../components/GlowDivider";

export const metadata = {
  description: "Information disclosure explainer: secrets left in version control history, the hardest Practitioner lab in the topic on PortSwigger Academy. How it works and the fix.",
  title: "Information disclosure, secrets left in git history, explained | hannan.",
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

export default function InfoDisclosureGitHistory() {
  return (
    <WriteupArticle
      title="Information disclosure, secrets left in git history, explained"
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
        Information disclosure is when a site hands out data it never meant to share. Sometimes that
        is an error message with too much detail, sometimes it is a backup file, and sometimes it is
        the site's own version control, sitting in public, with the whole history still in it.
      </p>

      <GlowDivider />

      <Section title="The bug">
        <p>
          The lab site has its .git directory exposed on the web server. That means anyone can
          download the repository, not just the current files, but the entire commit history. And
          history remembers everything, including things that were deleted later.
        </p>
        <p>
          At some point, someone committed the administrator password, realised the mistake, and
          removed it in a later commit. The current version of the site has no password in it. But
          git does not forget a commit just because a later one undid it. The password is still
          there, in the history, for anyone who looks.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The worked example">
        <p>
          The lab is Information disclosure in version control history, Practitioner level, on
          PortSwigger Academy. It is the only Practitioner lab in the topic, which makes it the
          hardest by definition. The goal is the administrator password.
        </p>
        <p>
          First, check that the .git directory is really there:
        </p>
        <Code>{"GET /.git/HEAD"}</Code>
        <p>
          If it answers, download the repository with a git dumping tool, then walk the commit
          history and look at what changed in each commit. One of the earlier commits still contains
          the administrator password, in the version of a file from before it was cleaned up. Take
          that password, log in as administrator, and the lab is solved.
        </p>
        <p>
          The lesson is that deleting a secret is not the same as never having shared it. Once it is
          in a commit, it is in every copy of the repository, and in every backup of it, until the
          history itself is rewritten and the secret is rotated.
        </p>
      </Section>

      <GlowDivider />

      <Section title="The fix">
        <p>
          <strong>Do not deploy .git.</strong> Version control directories, backup files, and
          editor leftovers have no business on a web server. Block them at the server, and check
          that the block actually works.
        </p>
        <p>
          <strong>Never commit secrets, and rotate any that leak.</strong> Passwords, API keys, and
          tokens belong in a secrets manager, not in a repository. If one does get committed,
          removing it from the current version is not enough: rewrite the history, and treat the
          secret as compromised, because it already was.
        </p>
        <p>
          <strong>Scan for secrets before they ship.</strong> Pre-commit hooks and repository
          scanners catch a password before it becomes a commit. After it is a commit, you are
          cleaning up, not preventing.
        </p>
      </Section>

      <GlowDivider />

      <p className="text-sm text-[#8A8A8A]">
        Lab: Information disclosure in version control history, PortSwigger Web Security Academy, Practitioner level. Run it yourself on the Academy, it is free.
      </p>
      <p>
        <a href="/writeups" className="font-semibold text-[#F5F2ED] underline underline-offset-4">
          Back to Writeups
        </a>
      </p>
    </WriteupArticle>
  );
}
