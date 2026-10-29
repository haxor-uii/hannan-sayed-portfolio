export default function Illustration({ label = "Abstract illustration, photo to be added later" }) {
  return (
    <div aria-label={label} className="illustration h-56 w-full sm:h-72">
      <div className="arc" style={{ width: 420, height: 420, top: -180, left: "12%" }} />
      <div className="arc" style={{ width: 300, height: 300, top: -60, right: "8%" }} />
      <div className="line" style={{ width: "70%", top: "38%", left: "15%" }} />
      <div className="line" style={{ width: "45%", top: "58%", left: "30%" }} />
      <span className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.28em] text-[#8A8A8A]">
        Illustration placeholder
      </span>
    </div>
  );
}
