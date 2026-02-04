"use client";

import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
    const back = () => {
    history.back();
    }
  return (
    <div className="nf-wrapper">
      <div className="nf-card">
        {/* LIQUID 404 */}
        <div className="nf-liquid">
          <span className="nf-digit">4</span>
          <span className="nf-digit">0</span>
          <span className="nf-digit">4</span>
        </div>

        {/* TEXT */}
        <h1 className="nf-title">Page not found</h1>
        <p className="nf-subtitle">You weren&apos;t supposed to see this</p>

        {/* ACTION */}
        <button onClick={back}  className="nf-btn">
          Back
        </button>
      </div>
    </div>
  );
}
