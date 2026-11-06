"use client";

import { useEffect, useRef, useState } from "react";

// Red sweep, two modes:
// - scroll (default): the red word starts on the first word when the page is
//   at the top, then travels word by word as you scroll down, and finishes,
//   all words white, at the bottom of the page. Progress is mapped to the
//   full page scroll range, scrollY divided by the maximum scroll. That is
//   what makes it complete on desktop About: that page is barely taller
//   than the screen, only about 10px of scroll, so the paragraph can never
//   scroll out of the top, and any formula that waits for it to leave
//   stalls at "am". Mapping to the scroll you actually have means it
//   starts at word one and ends all white on every screen. On mobile the
//   page is much taller, so the same sweep travels slowly word by word.
//   If a page has no scroll at all (the smaller text made desktop About
//   fit the whole viewport), there is nothing to scroll, so the sweep
//   plays once on its own, one word at a time, and ends all white.
//   It never loops, and if the window is resized so the page can scroll
//   again, it goes back to following the scroll.
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
    let autoTimer = null;
    let autoStart = null;
    const stopAuto = () => {
      if (autoTimer) clearInterval(autoTimer);
      if (autoStart) clearTimeout(autoStart);
      autoTimer = null;
      autoStart = null;
    };
    const startAuto = () => {
      if (autoTimer || autoStart) return;
      autoStart = setTimeout(() => {
        autoStart = null;
        autoTimer = setInterval(() => {
          setActive((prev) => {
            if (prev >= words.length) {
              stopAuto();
              return prev;
            }
            return prev + 1;
          });
        }, 420);
      }, 900);
    };
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const scrollY = window.scrollY || 0;
      // Full page scroll range. At the top scrollY is 0, so progress is 0
      // and the red word is the first word. At the bottom scrollY equals
      // the maximum scroll, so progress is 1 and every word is white.
      // Scrolling back up reverses it. If the page has no scroll at all,
      // there is no scroll to follow, so play the sweep once on its own.
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) {
        startAuto();
        return;
      }
      stopAuto();
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
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
      stopAuto();
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
