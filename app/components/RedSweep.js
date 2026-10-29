"use client";

import { useEffect, useRef, useState } from "react";

// Red sweep, two modes:
// - scroll (default): the red word travels as the paragraph moves through the
//   viewport. The range is mapped from "just entering at the bottom" to
//   "mostly past the top", so a paragraph that is already in view on a tall
//   desktop screen still shows a red word in the middle, instead of jumping
//   straight to all white.
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
      const vh = window.innerHeight || 1;
      // 0 when the top of the paragraph touches the bottom of the viewport,
      // 1 when the paragraph has moved well past the top. In the middle of
      // the screen the value is in between, so the red word is visible.
      const progress = Math.min(
        1,
        Math.max(0, (vh - rect.top) / (vh * 0.8 + rect.height))
      );
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
