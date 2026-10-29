"use client";

import { useEffect, useRef } from "react";

// Cinematic reveal: 900ms rise in globals.css, with an optional stagger delay.
export default function Reveal({ children, className = "", tag = "div", delay = 0, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = tag;
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} style={{ transitionDelay: delay ? `${delay}ms` : undefined }} {...rest}>
      {children}
    </Tag>
  );
}
