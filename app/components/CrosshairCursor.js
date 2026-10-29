"use client";

import { useEffect, useRef } from "react";

// Small crosshair, desktop and mobile, with a butter slide.
// The crosshair never teleports to a new point. It keeps a current position
// and a target position, and each animation frame it eases about 18 percent
// of the way toward the target. So touch point 1 is the anchor, and when
// touch point 2 happens anywhere else, the crosshair glides from point 1
// to point 2, like sliding on butter, instead of popping up at point 2.
// The very first point appears directly, because there is no previous
// point to slide from. While a finger drags, the crosshair trails slightly
// behind the finger, which is what makes it feel smooth instead of instant.
// Mobile: there is no hover cursor, so this is a touch indicator. It fades
// out shortly after the finger lifts, and it never blocks taps.
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

    const current = { x: -100, y: -100 };
    const target = { x: -100, y: -100 };
    let hasPos = false;
    let raf = 0;
    let idleTimer = null;
    let touchHideTimer = null;
    let touchFadeTimer = null;
    const render = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${current.x - 2}px, ${current.y - 2}px)`;
      }
      if (linesRef.current) {
        linesRef.current.style.transform = `translate(${current.x}px, ${current.y}px)`;
      }
    };
    const tick = () => {
      raf = 0;
      const dx = target.x - current.x;
      const dy = target.y - current.y;
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
        current.x = target.x;
        current.y = target.y;
        render();
        return;
      }
      current.x += dx * 0.18;
      current.y += dy * 0.18;
      render();
      raf = requestAnimationFrame(tick);
    };
    const startTick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const setTarget = (x, y) => {
      if (!hasPos) {
        current.x = x;
        current.y = y;
        target.x = x;
        target.y = y;
        hasPos = true;
        render();
        return;
      }
      target.x = x;
      target.y = y;
      startTick();
    };
    const setMoving = (moving) => {
      const el = linesRef.current;
      if (!el) return;
      el.classList.toggle("moving", moving);
      el.classList.toggle("stretched", !moving);
    };
    const onMove = (e) => {
      setTarget(e.clientX, e.clientY);
      setMoving(true);
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setMoving(false), 300);
    };
    const onDown = () => linesRef.current?.classList.add("is-click");
    const onUp = () => linesRef.current?.classList.remove("is-click");
    const onTouchStart = (e) => {
      const t = e.touches && e.touches[0];
      if (!t) return;
      document.documentElement.classList.remove("crosshair-fading");
      document.documentElement.classList.add("has-crosshair");
      if (touchHideTimer) clearTimeout(touchHideTimer);
      if (touchFadeTimer) clearTimeout(touchFadeTimer);
      setMoving(true);
      setTarget(t.clientX, t.clientY);
    };
    const onTouchMove = (e) => {
      const t = e.touches && e.touches[0];
      if (!t) return;
      setTarget(t.clientX, t.clientY);
    };
    const onTouchEnd = () => {
      setMoving(false);
      if (touchHideTimer) clearTimeout(touchHideTimer);
      if (touchFadeTimer) clearTimeout(touchFadeTimer);
      touchHideTimer = setTimeout(() => {
        document.documentElement.classList.add("crosshair-fading");
        touchFadeTimer = setTimeout(() => {
          document.documentElement.classList.remove("has-crosshair");
          document.documentElement.classList.remove("crosshair-fading");
        }, 350);
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
      if (touchFadeTimer) clearTimeout(touchFadeTimer);
      if (raf) cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-crosshair");
      document.documentElement.classList.remove("crosshair-fading");
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
