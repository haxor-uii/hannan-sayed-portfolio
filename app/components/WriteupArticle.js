// Writeup template only. This is NOT a published post and is not rendered
// anywhere yet. Import it when a real writeup is ready, and pass only real
// content: a real title, a real date, a real category, and real lab notes.
// Do not use it to invent a post.
export default function WriteupArticle({ title, date, category, readingTime, children }) {
  return (
    <article>
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">
        {category}
      </p>
      <h1 className="mt-4 text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] text-[#F5F2ED]">{title}</h1>
      <p className="mt-4 text-sm text-[#8A8A8A]">
        {date} · {readingTime}
      </p>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-[#F5F2ED]">{children}</div>
    </article>
  );
}
