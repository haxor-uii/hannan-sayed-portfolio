export default function GlowDivider() {
  return (
    <div
      aria-hidden="true"
      className="glow-divider print:hidden flex items-center gap-3 py-1"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#7dd3fc]/30 to-[#c4b5fd]/50" />
      <span className="h-2 w-2 shrink-0 rounded-full bg-[#a5f3fc] shadow-[0_0_12px_4px_rgba(165,243,252,0.45)]" />
      <span className="h-px flex-1 bg-gradient-to-r from-[#c4b5fd]/50 via-[#7dd3fc]/30 to-transparent" />
    </div>
  );
}
