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
        <h2 className="stage-title">Listen First: Guess the Ecological Energy Flow</h2>
        <p className="stage-subtitle">
          Play the cryptic briefing before showing the diagram. Students should deduce the five biological feeding tiers, the tenfold energy reduction rule, and the role of decomposers.
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
                Food Chain Energy Pyramid • 5 Trophic Tiers • ~1:10
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
            <strong style={{ color: "var(--slate-900)" }}>Do not reveal yet:</strong> ask students to calculate the rate of energy loss between tiers, identify where dissipated heat goes, and explain the circular role of decomposers.
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
            "What natural scientific structure is being depicted in this diagram?",
            "How much energy (or what percentage) is retained as you ascend each trophic tier?",
            "What happens to the 90% of energy that is not incorporated as stored biomass?",
            "What biological group breaks down organic waste and dead matter to recycle nutrients?"
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
            <Sparkles size={18} /> {revealed ? "Continue to Diagram Analysis" : "Reveal Task"}
          </button>

          {revealed && (
            <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "14px", padding: "14px 16px", color: "#1e3a8a", fontSize: "0.9rem", lineHeight: 1.5 }}>
              The full task prompt and ecological energy pyramid diagram are revealed in Step 02.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
