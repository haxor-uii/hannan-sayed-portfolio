"use client";

import { useEffect, useRef, useState } from "react";

export default function CrosshairCursor() {
  const dotRef = useRef(null);
  const linesRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState("stretched");

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return undefined;
    setEnabled(true);
    document.documentElement.classList.add("has-crosshair");

    const pos = { x: -100, y: -100 };
    let raf = 0;
    let idleTimer = null;
    const render = () => {
      raf = 0;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x - 2}px, ${pos.y - 2}px)`;
      }
      if (linesRef.current) {
        linesRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
    };
    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      setState("moving");
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setState("stretched"), 300);
      if (!raf) raf = requestAnimationFrame(render);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (idleTimer) clearTimeout(idleTimer);
      if (raf) cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-crosshair");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} aria-hidden="true" className="crosshair-dot" />
      <div ref={linesRef} aria-hidden="true" className={`crosshair-lines ${state}`}>
        <span className="line-n" />
        <span className="line-s" />
        <span className="line-w" />
        <span className="line-e" />
      </div>
    </>
  );
}
