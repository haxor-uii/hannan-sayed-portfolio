"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="flex min-h-[44px] items-center rounded-[16px] bg-[#7dd3fc] px-5 py-2.5 text-sm font-bold text-[#050810] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
    >
      Print / Save as PDF
    </button>
  );
}
