export default function GlowDivider() {
  return (
    <div
      aria-hidden="true"
      className="glow-divider print:hidden flex items-center gap-3 py-1"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E11D2E]/40 to-[#8A8A8A]/40" />
      <span className="h-2 w-2 shrink-0 rounded-full bg-[#E11D2E] shadow-[0_0_12px_4px_rgba(225,29,46,0.45)]" />
      <span className="h-px flex-1 bg-gradient-to-r from-[#8A8A8A]/40 via-[#E11D2E]/40 to-transparent" />
    </div>
  );
}
