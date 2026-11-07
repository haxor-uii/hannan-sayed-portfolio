const items = [
  { date: "09 Dec 2025", title: "DH Penetration Tester", sub: "Darknet Hacking, Mira Road" },
  { date: "01 - 30 Apr 2026", title: "ShadowFox Cyber Security Internship", sub: "Virtual internship, exceptional performance" },
  { date: "24 Apr 2026", title: "DH WAPT", sub: "Darknet Hacking, Mira Road" },
  { date: "05 Jun 2026", title: "CompTIA PenTest+ Specialization", sub: "Coursera / Packt" },
  { date: "now", title: "PortSwigger Web Security Academy", sub: "Working through the labs, in progress", current: true },
];

export default function Timeline() {
  return (
    <div className="rounded-2xl border border-[#262626] bg-[#111111] p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8A8A8A]">
        <span className="text-[#E11D2E]">$</span> timeline
      </p>
      <ol className="mt-8">
        {items.map((item) => (
          <li
            key={item.date + item.title}
            className="relative border-l border-[#262626] pb-8 pl-8 last:border-l-transparent last:pb-0"
          >
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
