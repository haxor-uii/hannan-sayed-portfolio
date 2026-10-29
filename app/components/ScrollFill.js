"use client";

import { useEffect, useRef, useState } from "react";

// Scroll-linked fill: as the reader scrolls through this paragraph, words
// change from dim grey to bright white, word by word. Lightweight scroll
// listener with a rAF guard, no animation library. Falls back to fully
// bright text if scroll cannot be measured.
export default function ScrollFill({ text, className = "" }) {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when the paragraph is below the viewport, 1 when scrolled past it.
      const progress = Math.min(
        1,
        Math.max(0, (vh * 0.85 - rect.top) / (rect.height + vh * 0.3))
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
  }, []);

  return (
    <p ref={ref} className={`scroll-fill ${className}`.trim()}>
      {words.map((word, i) => (
        <span
          key={i}
          className="fill-word"
          style={{ color: i < active ? "#f8fafc" : "#475569" }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
