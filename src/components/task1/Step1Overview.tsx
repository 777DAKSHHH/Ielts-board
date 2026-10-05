import React, { useState } from "react";
import { Headphones, Lightbulb, PlayCircle, Sparkles } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

interface Step1OverviewProps {
  onSpeak: (text: string) => void;
  accent: "en-GB" | "en-US";
  setAccent: (accent: "en-GB" | "en-US") => void;
  onContinue: () => void;
}

export const Step1Overview: React.FC<Step1OverviewProps> = ({ onSpeak, accent, setAccent, onContinue }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 01 / 08 • Cryptic Audio Guess
        </span>
        <h2 className="stage-title">Listen First: Guess the 40-Year Emissions Trajectories</h2>
        <p className="stage-subtitle">
          Play the cryptic briefing before revealing the line graph. Students should deduce the four European countries, the two contrasting trends, and the two major crossover points.
        </p>
      </div>

      <div className="stage-grid-2col">
        <div
          style={{
            background: "var(--slate-50)",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "20px",
            padding: "26px",
            display: "flex",
            flexDirection: "column",
            gap: "18px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "var(--slate-900)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Headphones size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--slate-900)" }}>
                Cryptic Audio Briefing
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--slate-500)" }}>
                Dynamic Line Graph • 4 European Nations • ~1:21
              </p>
            </div>
          </div>

          <audio controls preload="metadata" style={{ width: "100%", height: "54px", borderRadius: "14px", outline: "none" }}>
            <source src={TASK1_DATA.audioUrl} />
            Your browser does not support audio playback.
          </audio>

          <button
            onClick={() => onSpeak(TASK1_DATA.audioClueText)}
            className="apple-touch-btn secondary"
            style={{ minHeight: "48px", gap: "8px" }}
          >
            <PlayCircle size={18} /> Play using browser voice
          </button>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "12px 14px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--slate-600)", fontWeight: 600 }}>Voice accent</span>
            <div style={{ display: "flex", gap: "6px" }}>
              {(["en-GB", "en-US"] as const).map((value) => (
                <button
                  key={value}
                  onClick={() => setAccent(value)}
                  className="apple-touch-btn secondary"
                  style={{ minHeight: "34px", padding: "0 10px", fontSize: "0.78rem", background: accent === value ? "var(--slate-100)" : "#ffffff" }}
                >
                  {value === "en-GB" ? "UK" : "US"}
                </button>
              ))}
            </div>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "16px", color: "var(--slate-700)", lineHeight: 1.55 }}>
            <strong style={{ color: "var(--slate-900)" }}>Focus Prompt:</strong> Listen attentively to the briefing. Identify which two nations experienced net declines, which two underwent sustained increases, and where the two major intersection points occurred.
          </div>
        </div>

        <div
          style={{
            background: "var(--slate-50)",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "20px",
            padding: "26px",
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Lightbulb size={21} color="var(--slate-800)" />
            <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--slate-900)" }}>Student Guess Board</h4>
          </div>

          {[
            "What environmental metric is being measured across the 40-year timeframe from 1967 to 2007?",
            "Which nation remained the dominant, highest per capita emitter in every single year measured?",
            "Which country displayed the most volatile pattern—a sharp rise to a 1977 peak followed by a 30-year plunge?",
            "Which nation began with the lowest emissions by far, but underwent a more than four-fold surge to converge with another nation in 2007?"
          ].map((question, index) => (
            <div key={question} style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "15px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <span className="apple-badge neutral" style={{ minWidth: "30px", justifyContent: "center" }}>{index + 1}</span>
              <span style={{ fontSize: "0.95rem", color: "var(--slate-700)", lineHeight: 1.45 }}>{question}</span>
            </div>
          ))}

          <button
            onClick={() => {
              if (!revealed) {
                setRevealed(true);
                return;
              }
              onContinue();
            }}
            className="apple-touch-btn primary"
            style={{ minHeight: "50px", gap: "8px", marginTop: "auto" }}
          >
            <Sparkles size={18} /> {revealed ? "Continue to Line Graph Analysis" : "Reveal Task"}
          </button>

          {revealed && (
            <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "14px", padding: "14px 16px", color: "#1e3a8a", fontSize: "0.9rem", lineHeight: 1.5 }}>
              The full task prompt and dynamic CO2 line graph are revealed in Step 02.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
