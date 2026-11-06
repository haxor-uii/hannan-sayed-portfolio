"use client";

import { useEffect, useRef, useState } from "react";

// Red sweep, two modes:
// - scroll (default): the red word starts on the first word when the page is
//   at the top, then travels word by word as you scroll down. It finishes,
//   all words white, the moment the last word scrolls out of the top of the
//   viewport. The old formula mapped progress to the paragraph's position
//   inside the viewport, so a paragraph already in view on load started
//   mid-sentence, around "the usual web bugs" on About, and could never
//   start at word one. This version maps progress to page scroll instead,
//   so it works the same on mobile and desktop.
// - once: the red word travels through the sentence exactly one time, slowly,
//   then stops with all words white. It never loops. Used on the home page.
export default function RedSweep({ text, className = "", once = false }) {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    if (once) {
      let timer = null;
      const start = setTimeout(() => {
        timer = setInterval(() => {
          setActive((prev) => {
            if (prev >= words.length) {
              if (timer) clearInterval(timer);
              return prev;
            }
            return prev + 1;
          });
        }, 420);
      }, 1900);
      return () => {
        clearTimeout(start);
        if (timer) clearInterval(timer);
      };
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollY = window.scrollY || 0;
      // Distance from the top of the page to the bottom of the paragraph.
      // At the top of the page scrollY is 0, so progress is 0 and the red
      // word is the first word. When scrollY reaches this distance, the
      // paragraph's last word has just left the top of the viewport, so
      // progress is 1 and every word is white. Scrolling back up reverses it.
      const total = rect.top + scrollY + rect.height;
      const progress =
        total > 0 ? Math.min(1, Math.max(0, scrollY / total)) : 1;
      setActive(Math.floor(progress * words.length));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [once, text]);

  return (
    <p ref={ref} className={`scroll-fill ${className}`.trim()}>
      {words.map((word, i) => {
        const color = i < active ? "#F5F2ED" : i === active ? "#E11D2E" : "#525252";
        return (
          <span key={i} className="fill-word" style={{ color }}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}
