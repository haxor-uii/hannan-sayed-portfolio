"use client";

import { useEffect, useRef, useState } from "react";

// Crosshair cursor, desktop only. Mounts when any pointer is fine, so a
// touchscreen laptop with a mouse still gets it. No React state on every
// mouse move: the position and the moving/stretched classes are updated
// directly on the DOM nodes, so fast trackpad movement does not re-render
// the component and does not stutter or stop.
export default function CrosshairCursor() {
  const dotRef = useRef(null);
  const linesRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine =
      window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(any-pointer: fine)").matches;
    if (!fine) return undefined;
    setEnabled(true);
    document.documentElement.classList.add("has-crosshair");

    const pos = { x: -100, y: -100 };
    let raf = 0;
    let idleTimer = null;
    const render = () => {
      raf = 0;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x - 3}px, ${pos.y - 3}px)`;
      }
      if (linesRef.current) {
        linesRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
    };
    const setMoving = (moving) => {
      const el = linesRef.current;
      if (!el) return;
      el.classList.toggle("moving", moving);
      el.classList.toggle("stretched", !moving);
    };
    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      setMoving(true);
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setMoving(false), 300);
      if (!raf) raf = requestAnimationFrame(render);
    };
    const onDown = () => linesRef.current?.classList.add("is-click");
    const onUp = () => linesRef.current?.classList.remove("is-click");
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (idleTimer) clearTimeout(idleTimer);
      if (raf) cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-crosshair");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} aria-hidden="true" className="crosshair-dot" />
      <div ref={linesRef} aria-hidden="true" className="crosshair-lines stretched">
        <span className="line-n" />
        <span className="line-s" />
        <span className="line-w" />
        <span className="line-e" />
      </div>
    </>
  );
}
