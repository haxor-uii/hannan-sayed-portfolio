"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="flex min-h-[44px] items-center border border-[#7dd3fc]/60 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.22em] text-[#a5f3fc] transition-all duration-200 hover:tracking-[0.26em] hover:shadow-[0_0_24px_rgba(125,211,252,0.35)]"
    >
      Print / Save as PDF
    </button>
  );
}
