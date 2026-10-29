"use client";

import { useEffect, useRef, useState } from "react";

// Designed desktop cursor: a small glowing dot + a larger soft ring.
// Mounted ONLY on fine-pointer devices without reduced-motion. It adds
// .has-custom-cursor to <html> only while mounted, so if JS fails or the
// component never mounts, the native cursor is never hidden.
// Touch/coarse pointers, print, and reduced-motion keep the native cursor.
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return undefined;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const pos = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let raf = 0;
    const render = () => {
      raf = 0;
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x - 4}px, ${pos.y - 4}px)`;
      }
      if (ringRef.current) {
        const half = ringRef.current.offsetWidth / 2;
        ringRef.current.style.transform = `translate(${ring.x - half}px, ${ring.y - half}px)`;
      }
      // Keep easing while the ring is still catching up.
      if (Math.abs(pos.x - ring.x) > 0.5 || Math.abs(pos.y - ring.y) > 0.5) {
        raf = requestAnimationFrame(render);
      }
    };
    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!raf) raf = requestAnimationFrame(render);
    };
    const onOver = (e) => {
      setHover(Boolean(e.target && e.target.closest && e.target.closest("a, button, [data-cursor]")));
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      if (raf) cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} aria-hidden="true" className="custom-cursor-dot" />
      <div ref={ringRef} aria-hidden="true" className={`custom-cursor-ring ${hover ? "is-hover" : ""}`} />
    </>
  );
}
