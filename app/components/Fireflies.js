export default function Fireflies() {
  // Deterministic positions only , no random values on render, so no hydration mismatch.
  // 32 warm fireflies, sparse and scattered, plus 24 tiny stars.
  // Each firefly gets a wander variant (a/b/c/d) for a different flight path.
  const fireflies = [
    { top: "8%", left: "6%", size: 3, dur: "11s", delay: "0s" },
    { top: "14%", left: "88%", size: 2, dur: "9s", delay: "2s" },
    { top: "22%", left: "22%", size: 4, dur: "13s", delay: "1s" },
    { top: "30%", left: "76%", size: 3, dur: "8s", delay: "4s" },
    { top: "38%", left: "12%", size: 2, dur: "12s", delay: "3s" },
    { top: "46%", left: "94%", size: 3, dur: "10s", delay: "1.5s" },
    { top: "54%", left: "38%", size: 2, dur: "14s", delay: "5s" },
    { top: "62%", left: "68%", size: 4, dur: "9s", delay: "0.5s" },
    { top: "70%", left: "18%", size: 3, dur: "11s", delay: "6s" },
    { top: "78%", left: "84%", size: 2, dur: "13s", delay: "2.5s" },
    { top: "86%", left: "30%", size: 3, dur: "8s", delay: "3.5s" },
    { top: "18%", left: "48%", size: 2, dur: "12s", delay: "7s" },
    { top: "42%", left: "56%", size: 3, dur: "10s", delay: "4.5s" },
    { top: "58%", left: "4%", size: 2, dur: "9s", delay: "1s" },
    { top: "66%", left: "46%", size: 3, dur: "14s", delay: "8s" },
    { top: "26%", left: "62%", size: 2, dur: "11s", delay: "5.5s" },
    { top: "82%", left: "58%", size: 4, dur: "12s", delay: "2s" },
    { top: "10%", left: "34%", size: 2, dur: "8s", delay: "6.5s" },
    { top: "50%", left: "28%", size: 3, dur: "13s", delay: "0.8s" },
    { top: "90%", left: "72%", size: 2, dur: "10s", delay: "4s" },
      { top: "16%", left: "14%", size: 3, dur: "16s", delay: "1.2s" },
    { top: "34%", left: "90%", size: 2, dur: "18s", delay: "3.2s" },
    { top: "48%", left: "66%", size: 3, dur: "11s", delay: "5.8s" },
    { top: "60%", left: "26%", size: 2, dur: "19s", delay: "0.4s" },
    { top: "74%", left: "52%", size: 4, dur: "15s", delay: "2.8s" },
    { top: "88%", left: "44%", size: 2, dur: "17s", delay: "6.4s" },
    { top: "6%", left: "52%", size: 3, dur: "12s", delay: "4.6s" },
    { top: "40%", left: "2%", size: 2, dur: "20s", delay: "1.8s" },
    { top: "56%", left: "82%", size: 3, dur: "13s", delay: "7.4s" },
    { top: "68%", left: "8%", size: 2, dur: "16s", delay: "3.9s" },
    { top: "92%", left: "62%", size: 3, dur: "11s", delay: "5.1s" },
    { top: "24%", left: "40%", size: 2, dur: "18s", delay: "0.9s" },
];
  const stars = [
    { top: "6%", left: "20%", size: 2, dur: "7s", delay: "0s" },
    { top: "12%", left: "64%", size: 1, dur: "9s", delay: "2s" },
    { top: "20%", left: "92%", size: 2, dur: "6s", delay: "1s" },
    { top: "28%", left: "4%", size: 1, dur: "8s", delay: "3s" },
    { top: "34%", left: "44%", size: 2, dur: "10s", delay: "1.5s" },
    { top: "44%", left: "82%", size: 1, dur: "7s", delay: "4s" },
    { top: "52%", left: "16%", size: 2, dur: "9s", delay: "2.5s" },
    { top: "60%", left: "90%", size: 1, dur: "6s", delay: "0.5s" },
    { top: "68%", left: "36%", size: 2, dur: "8s", delay: "5s" },
    { top: "74%", left: "60%", size: 1, dur: "10s", delay: "3.5s" },
    { top: "84%", left: "10%", size: 2, dur: "7s", delay: "1s" },
    { top: "92%", left: "48%", size: 1, dur: "9s", delay: "6s" },
    { top: "16%", left: "78%", size: 2, dur: "8s", delay: "4.5s" },
    { top: "36%", left: "68%", size: 1, dur: "6s", delay: "2s" },
    { top: "48%", left: "8%", size: 2, dur: "10s", delay: "3s" },
    { top: "56%", left: "52%", size: 1, dur: "7s", delay: "5.5s" },
    { top: "64%", left: "24%", size: 2, dur: "9s", delay: "1.8s" },
    { top: "72%", left: "96%", size: 1, dur: "8s", delay: "0.8s" },
    { top: "80%", left: "42%", size: 2, dur: "6s", delay: "4.8s" },
    { top: "88%", left: "86%", size: 1, dur: "10s", delay: "2.8s" },
    { top: "24%", left: "54%", size: 1, dur: "7s", delay: "6.2s" },
    { top: "40%", left: "32%", size: 2, dur: "9s", delay: "1.2s" },
    { top: "96%", left: "22%", size: 1, dur: "8s", delay: "3.8s" },
    { top: "4%", left: "42%", size: 2, dur: "6s", delay: "5s" },
  ];

  return (
    <div
      aria-hidden="true"
      className="fireflies pointer-events-none fixed inset-0 z-0 overflow-hidden print:hidden"
    >
      {stars.map((s, i) => (
        <span
          key={`star-${i}`}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDuration: s.dur,
            animationDelay: s.delay,
          }}
        />
      ))}
      {fireflies.map((f, i) => (
        <span
          key={`fly-${i}`}
          className={`firefly wander-${"abcd"[i % 4]}`}
          style={{
            top: f.top,
            left: f.left,
            width: f.size,
            height: f.size,
            animationDuration: f.dur,
            animationDelay: f.delay,
          }}
        />
      ))}
    </div>
  );
}
