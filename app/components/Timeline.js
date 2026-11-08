const items = [
  { date: "09 Dec 2025", title: "DH Penetration Tester", sub: "Darknet Hacking, Mira Road" },
  { date: "01 - 30 Apr 2026", title: "ShadowFox Cyber Security Internship", sub: "Virtual internship, exceptional performance" },
  { date: "24 Apr 2026", title: "DH WAPT", sub: "Darknet Hacking, Mira Road" },
  { date: "05 Jun 2026", title: "CompTIA PenTest+ Specialization", sub: "Coursera / Packt" },
  { date: "now", title: "PortSwigger Web Security Academy", sub: "Working through the labs, in progress", current: true },
];

// The line between two dots is a small S-curve that always starts and ends
// on the dot column, so it connects the dots exactly however tall each
// entry is. The curve flips direction at every entry, making one
// continuous wave down the timeline.
function Curve({ flip }) {
  return (
    <svg
      aria-hidden="true"
      className="absolute -left-5 top-[11px] -bottom-[11px] w-10"
      viewBox="0 0 40 100"
      preserveAspectRatio="none"
    >
      <path
        d={flip ? "M20 0 C 2 25, 38 75, 20 100" : "M20 0 C 38 25, 2 75, 20 100"}
        fill="none"
        stroke="#262626"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function Timeline() {
  return (
    <div className="rounded-2xl border border-[#262626] bg-[#111111] p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">
        <span className="text-[#E11D2E]">$</span> timeline
      </p>
      <ol className="mt-8">
        {items.map((item, index) => (
          <li
            key={item.date + item.title}
            className="relative pb-8 pl-8 last:pb-0"
          >
            {index < items.length - 1 && <Curve flip={index % 2 === 1} />}
            <span
              aria-hidden="true"
              className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${
                item.current ? "bg-[#F5F2ED]" : "bg-[#E11D2E]"
              }`}
            />
            <p className={`text-xs font-bold ${item.current ? "text-[#F5F2ED]" : "text-[#E11D2E]"}`}>
              {item.date}
            </p>
            <p className="mt-2 text-sm text-[#F5F2ED]">{item.title}</p>
            <p className="mt-1 text-xs text-[#8A8A8A]">{item.sub}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
