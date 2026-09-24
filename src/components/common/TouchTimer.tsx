import React from "react";
import { Play, Pause, RotateCcw, Clock } from "lucide-react";

interface TouchTimerProps {
  formattedTime: string;
  isRunning: boolean;
  isFinished: boolean;
  onToggle: () => void;
  onReset: () => void;
  instruction?: string;
}

export const TouchTimer: React.FC<TouchTimerProps> = ({
  formattedTime,
  isRunning,
  isFinished,
  onToggle,
  onReset,
  instruction = "Focus Timer: Brainstorm categories, high/low extremes, and comparative trends."
}) => {
  return (
    <div
      style={{
        background: isFinished ? "#fef2f2" : isRunning ? "#f0fdf4" : "var(--slate-50)",
        border: `1.5px solid ${isFinished ? "#f87171" : isRunning ? "#86efac" : "var(--border-subtle)"}`,
        borderRadius: "20px",
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        transition: "all 0.25s ease"
      }}
    >
      {/* Left: Big Digital Display */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "16px",
            background: isFinished ? "#fee2e2" : isRunning ? "#dcfce7" : "#ffffff",
            color: isFinished ? "var(--apple-red)" : isRunning ? "var(--apple-green)" : "var(--slate-700)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "var(--shadow-sm)"
          }}
        >
          <Clock size={28} />
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "2.4rem",
              fontWeight: 800,
              color: isFinished ? "var(--apple-red)" : isRunning ? "var(--slate-900)" : "var(--slate-700)",
              lineHeight: 1
            }}
          >
            {formattedTime}
          </div>
          <div style={{ fontSize: "0.85rem", color: "var(--slate-500)", marginTop: "4px", maxWidth: "420px" }}>
            {instruction}
          </div>
        </div>
      </div>

      {/* Right: Touch Buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button
          onClick={onToggle}
          className="apple-touch-btn"
          style={{
            minHeight: "52px",
            padding: "0 22px",
            background: isRunning ? "var(--slate-800)" : "var(--slate-900)",
            color: "#ffffff",
            gap: "8px",
            fontSize: "1.05rem"
          }}
        >
          {isRunning ? <Pause size={20} /> : <Play size={20} />}
          <span>{isRunning ? "Pause" : "Start Timer"}</span>
        </button>

        <button
          onClick={onReset}
          className="apple-touch-btn secondary"
          style={{
            minHeight: "52px",
            width: "52px",
            padding: 0,
            borderRadius: "16px"
          }}
          title="Reset timer to 3:00"
        >
          <RotateCcw size={20} />
        </button>
      </div>
    </div>
  );
};
