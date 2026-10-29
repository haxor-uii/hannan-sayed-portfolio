"use client";

export default function PrintButton() {
  return (
    <span className="silver-rotor">
      <button
        type="button"
        onClick={() => window.print()}
        className="thin-btn"
      >
        Print / Save as PDF
      </button>
    </span>
  );
}
