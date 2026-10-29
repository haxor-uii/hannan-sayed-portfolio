"use client";

import { useEffect, useRef, useState } from "react";

// Forge-style text reveal: deterministic word split, each word rises
// slightly tilted then settles, staggered on entry via IntersectionObserver.
// No random values, no entrance/loading effect , only on scroll into view.
// If JS or IntersectionObserver is unavailable, words are visible by default
// (the component starts visible when no observer can be set up).
export default function WordReveal({ text, className = "", id, as = "h2" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const words = text.split(" ");
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      aria-label={text}
      className={`word-reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
    >
      {words.map((word, i) => (
        <span key={i} aria-hidden="true" className="word" style={{ transitionDelay: `${Math.min(i * 45, 450)}ms` }}>
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}
