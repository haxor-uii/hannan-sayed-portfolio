"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="flex min-h-[44px] items-center rounded-xl bg-cyan px-5 py-2.5 text-sm font-bold text-obsidian transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
    >
      Print / Save as PDF
    </button>
  );
}
