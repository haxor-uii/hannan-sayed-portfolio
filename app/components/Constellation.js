"use client";

import { useEffect, useRef, useState } from "react";

const N = 64;
const LINK_DIST = 115;
const PAPER = "#F5F2ED";
const RED = "#E11D2E";

const PATCH_LINES = [
  "> breach detected - isolating node",
  "> rerouting links...",
  "> patching... ok",
  "> integrity restored",
];

export default function Constellation() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const integrityRef = useRef(null);
  const attacksRef = useRef(null);
  const [log, setLog] = useState(["> status: secure - move to attack"]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    let rotY = 0.6;
    const rotX = 0.32;
    let integrity = 100;
    let lastShownIntegrity = 100;
    let attacks = 0;
    let pointer = { x: -9999, y: -9999, down: false };
    const timers = [];

    // Points spread over a sphere (fibonacci sphere), each with a spring
    // offset so it can be knocked away from home and drift back.
    const pts = [];
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = 2.399963 * i;
      pts.push({
        x: Math.cos(theta) * r,
        y,
        z: Math.sin(theta) * r,
        ox: 0,
        oy: 0,
        oz: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        red: Math.random() < 0.15,
        hit: 0,
        sx: 0,
        sy: 0,
        s: 1,
      });
    }

    function resize() {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function project(p) {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = p.x * cosY + p.z * sinY;
      const z1 = -p.x * sinY + p.z * cosY;
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;
      const persp = 1 / (1.9 - z2 * 0.55);
      const R = Math.min(w, h) * 0.36;
      return {
        x: w / 2 + (x1 + p.ox) * R * persp,
        y: h / 2 + (y2 + p.oy) * R * persp,
        s: persp,
      };
    }

    function physics() {
      for (const p of pts) {
        p.vx += -0.025 * p.ox;
        p.vy += -0.025 * p.oy;
        p.vz += -0.025 * p.oz;
        p.vx *= 0.92;
        p.vy *= 0.92;
        p.vz *= 0.92;
        p.ox += p.vx;
        p.oy += p.vy;
        p.oz += p.vz;
        p.hit *= 0.94;
        const dx = p.sx - pointer.x;
        const dy = p.sy - pointer.y;
        const d = Math.hypot(dx, dy);
        const radius = pointer.down ? 170 : 120;
        if (d < radius && d > 0.01) {
          const f = (1 - d / radius) * (pointer.down ? 1.6 : 0.9);
          p.vx += (dx / d) * f * 0.08;
          p.vy += (dy / d) * f * 0.08;
          p.hit = Math.min(1, p.hit + f * 0.5);
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        const pr = project(p);
        p.sx = pr.x;
        p.sy = pr.y;
        p.s = pr.s;
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const d = Math.hypot(a.sx - b.sx, a.sy - b.sy);
          if (d < LINK_DIST) {
            const hot = Math.max(a.hit, b.hit);
            const alpha = (1 - d / LINK_DIST) * (hot > 0.05 ? 0.55 : 0.14);
            ctx.strokeStyle =
              hot > 0.05 ? `rgba(225,29,46,${alpha})` : `rgba(245,242,237,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }
      }
      const order = [...pts].sort((a, b) => a.s - b.s);
      for (const p of order) {
        const r = 1.1 + p.s * 1.5;
        if (p.hit > 0.1) {
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, r + 4 * p.hit, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(225,29,46,${0.25 * p.hit})`;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fillStyle = p.red ? RED : PAPER;
        ctx.globalAlpha = 0.45 + p.s * 0.55;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    function updateHud() {
      const shown = Math.round(integrity);
      if (shown !== lastShownIntegrity && integrityRef.current) {
        integrityRef.current.textContent = `${shown}%`;
        lastShownIntegrity = shown;
      }
    }

    function breach() {
      attacks += 1;
      if (attacksRef.current) attacksRef.current.textContent = String(attacks);
      integrity = Math.max(58, integrity - 34);
      PATCH_LINES.forEach((line, i) => {
        timers.push(
          window.setTimeout(() => {
            setLog((prev) => [...prev.slice(-2), line]);
          }, i * 450)
        );
      });
    }

    function onMove(e) {
      const rect = wrap.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    }

    function onDown(e) {
      onMove(e);
      pointer.down = true;
      breach();
    }

    function onUp() {
      pointer.down = false;
    }

    function onLeave() {
      pointer.down = false;
      pointer.x = -9999;
      pointer.y = -9999;
    }

    function frame() {
      rotY += 0.0016;
      physics();
      integrity += (100 - integrity) * 0.008;
      draw();
      updateHud();
      raf = requestAnimationFrame(frame);
    }

    resize();
    const observer = new ResizeObserver(() => {
      resize();
      if (reduced) draw();
    });
    observer.observe(wrap);

    if (reduced) {
      draw();
    } else {
      wrap.addEventListener("pointermove", onMove);
      wrap.addEventListener("pointerdown", onDown);
      window.addEventListener("pointerup", onUp);
      wrap.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="flex h-80 w-full flex-col overflow-hidden rounded-2xl border border-[#262626] bg-[#111111] sm:h-[420px]">
      <div ref={wrapRef} className="relative min-h-0 flex-1">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Interactive particle constellation. Move your pointer over it to attack it, it fractures and heals itself."
          className="absolute inset-0 h-full w-full"
          style={{ touchAction: "pan-y" }}
        />
      </div>
      <div className="flex items-end justify-between gap-3 border-t border-[#262626] px-4 py-3">
        <div className="flex h-[54px] min-w-0 flex-col justify-end overflow-hidden">
          {log.map((line, i) => (
            <p key={`${i}-${line}`} className="truncate text-[11px] leading-[18px] text-[#8A8A8A]">
              {line}
            </p>
          ))}
        </div>
        <div className="shrink-0 text-right text-[11px] leading-[18px] text-[#8A8A8A]">
          <p>
            integrity <span ref={integrityRef} className="text-[#F5F2ED]">100%</span>
          </p>
          <p>
            attacks blocked <span ref={attacksRef} className="text-[#F5F2ED]">0</span>
          </p>
        </div>
      </div>
    </div>
  );
}
