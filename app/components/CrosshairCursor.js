"use client";

import { useEffect, useRef } from "react";

// Small crosshair, desktop and mobile.
// Desktop: a mouse crosshair, small when moving, stretched when still.
// Mobile: there is no hover cursor, so this is a touch indicator instead.
// It appears at the exact touch point while a finger is down or moving,
// then fades out shortly after the finger lifts. It never blocks taps,
// because it is pointer-events none, and it never stays on screen permanently.
export default function CrosshairCursor() {
  const dotRef = useRef(null);
  const linesRef = useRef(null);
  useEffect(() => {
    const fine =
      window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(any-pointer: fine)").matches;
    if (fine) {
      document.documentElement.classList.add("has-crosshair");
    }

    const pos = { x: -100, y: -100 };
    let raf = 0;
    let idleTimer = null;
    let touchHideTimer = null;
    const render = () => {
      raf = 0;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x - 2}px, ${pos.y - 2}px)`;
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
    const showAt = (x, y) => {
      pos.x = x;
      pos.y = y;
      if (!raf) raf = requestAnimationFrame(render);
    };
    const onMove = (e) => {
      showAt(e.clientX, e.clientY);
      setMoving(true);
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setMoving(false), 300);
    };
    const onDown = () => linesRef.current?.classList.add("is-click");
    const onUp = () => linesRef.current?.classList.remove("is-click");
    const onTouchStart = (e) => {
      const t = e.touches && e.touches[0];
      if (!t) return;
      document.documentElement.classList.add("has-crosshair");
      if (touchHideTimer) clearTimeout(touchHideTimer);
      setMoving(true);
      showAt(t.clientX, t.clientY);
    };
    const onTouchMove = (e) => {
      const t = e.touches && e.touches[0];
      if (!t) return;
      showAt(t.clientX, t.clientY);
    };
    const onTouchEnd = () => {
      setMoving(false);
      if (touchHideTimer) clearTimeout(touchHideTimer);
      touchHideTimer = setTimeout(() => {
        document.documentElement.classList.remove("has-crosshair");
      }, 800);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("touchcancel", onTouchEnd);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      if (idleTimer) clearTimeout(idleTimer);
      if (touchHideTimer) clearTimeout(touchHideTimer);
      if (raf) cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-crosshair");
    };
  }, []);

  // Elements are always rendered. CSS hides them until has-crosshair
  // is added, so a first tap on mobile is not lost to a re-render race.
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
