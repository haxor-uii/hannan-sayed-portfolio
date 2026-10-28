import Reveal from "../components/Reveal";

export const metadata = {
  description: "Writeups index for Hannan Sayed — future posts on web vulnerabilities and lab notes. Coming soon.",
  title: "Writeups — Hannan Sayed",
};

export default function Writeups() {
  return (
    <>
      <div className="page-hero">
      <p className="eyebrow">Writeups</p>
      <h1>Writeups</h1>
      <p className="lead">
        Future writeups will live here, organised by topic. Nothing is published yet.
      </p>
      </div>
      <Reveal tag="section" aria-labelledby="categories-heading">
        <h2 id="categories-heading">Categories</h2>
        <ul className="tags" aria-label="Writeup categories">
          <li>Web vulnerabilities</li>
          <li>Lab notes</li>
        </ul>
      </Reveal>
      <Reveal tag="section" aria-labelledby="posts-heading">
        <h2 id="posts-heading">Posts</h2>
        <p className="note">Coming soon — writeups will be added here as they are written.</p>
        <p>
          <a href="/#writeups">← Back to the portfolio</a>
        </p>
      </Reveal>
    </>
  );
}
