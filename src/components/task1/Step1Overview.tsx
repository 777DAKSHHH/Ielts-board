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
        <h2 className="stage-title">Listen First: Guess the Process</h2>
        <p className="stage-subtitle">
          Play the cryptic briefing before showing the task image. Students should infer the manufacturing process, the branching point and the two final products.
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
              <p style={{ fontSize: "0.85rem", color: "var(--slate-500)" }}>Approx. 55 seconds</p>
            </div>
          </div>

          <audio controls preload="metadata" style={{ width: "100%", height: "54px", borderRadius: "14px", outline: "none" }}>
            <source src={TASK1_DATA.audioUrl} type="audio/wav" />
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
            <strong style={{ color: "var(--slate-900)" }}>Do not reveal yet:</strong> ask students to identify what is being made, what happens before the split, where the process branches, and how the two routes finish.
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

          {["What is being manufactured?", "What is the common stage before the process splits?", "What are the two different final products?"] .map((question, index) => (
            <div key={question} style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "16px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
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
            <Sparkles size={18} /> {revealed ? "Continue to Task Prompt" : "Reveal Task"}
          </button>

          {revealed && (
            <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "14px", padding: "14px 16px", color: "#1e3a8a", fontSize: "0.9rem", lineHeight: 1.5 }}>
              The full task prompt and process diagram are revealed in Step 02.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
