import React, { useState } from "react";
import { motion } from "framer-motion";
import { Headphones, Lightbulb, PlayCircle, Sparkles } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";
import { tactilePress } from "../../motion";

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
        <h2 className="stage-title">Listen First: Pacific Atmospheric Circulation &amp; El Niño Inversion</h2>
        <p className="stage-subtitle">
          Play the cryptic briefing before revealing the comparative diagrams. Students should deduce the two contrasting climatic states, the direction of trade winds and warm water displacement, and the ecological fate of Australia and Peru.
        </p>
      </div>

      <div className="stage-grid-2col">
        <div
          style={{
            background: "#ffffff",
            border: "1px solid var(--border-default)",
            borderRadius: "20px",
            padding: "26px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            boxShadow: "var(--shadow-sm)"
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
              <p style={{ fontSize: "0.85rem", color: "var(--slate-500)", marginTop: "2px" }}>
                Comparative Oceanographic Diagram • Normal vs. El Niño • ~1:15
              </p>
            </div>
          </div>

          <audio controls preload="metadata" style={{ width: "100%", height: "54px", borderRadius: "14px", outline: "none" }}>
            <source src={TASK1_DATA.audioUrl} />
            Your browser does not support audio playback.
          </audio>

          <motion.button
            whileTap={tactilePress}
            onClick={() => onSpeak(TASK1_DATA.audioClueText)}
            className="apple-touch-btn secondary"
            style={{ minHeight: "48px", gap: "8px", fontWeight: 600 }}
          >
            <PlayCircle size={18} /> Play using browser voice
          </motion.button>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", background: "var(--slate-50)", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "12px 14px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--slate-700)", fontWeight: 600 }}>Voice accent</span>
            <div style={{ display: "flex", gap: "6px" }}>
              {(["en-GB", "en-US"] as const).map((value) => (
                <motion.button
                  key={value}
                  whileTap={tactilePress}
                  onClick={() => setAccent(value)}
                  className="apple-touch-btn secondary"
                  style={{ minHeight: "36px", padding: "0 14px", fontSize: "0.82rem", fontWeight: 700, background: accent === value ? "var(--slate-900)" : "#ffffff", color: accent === value ? "#ffffff" : "var(--slate-700)" }}
                >
                  {value === "en-GB" ? "UK" : "US"}
                </motion.button>
              ))}
            </div>
          </div>

          <div style={{ background: "var(--slate-50)", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "16px", color: "var(--slate-700)", lineHeight: 1.55 }}>
            <strong style={{ color: "var(--slate-900)" }}>Focus Prompt:</strong> Listen attentively to the briefing. Identify how trade winds alter between the two phases, why warm water shifts eastward, and how nutrient upwelling off Peru controls commercial fish populations.
          </div>
        </div>

        <div
          style={{
            background: "#ffffff",
            border: "1px solid var(--border-default)",
            borderRadius: "20px",
            padding: "26px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            boxShadow: "var(--shadow-sm)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Lightbulb size={22} color="var(--slate-800)" />
            <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--slate-900)" }}>Student Guess Board</h4>
          </div>

          {[
            "Which oceanic basin and two coastal regions are depicted in the dual comparative cross-sections?",
            "Under normal conditions, which direction do the trade winds blow, and where does warm surface water pool?",
            "What meteorological and ecological changes occur in Australia when El Niño conditions develop?",
            "Why do Peruvian commercial fish harvests collapse from flourishing (up arrow) to depleted (down arrow) during El Niño?"
          ].map((question, index) => (
            <div key={question} style={{ background: "var(--slate-50)", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "15px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <span className="apple-badge neutral" style={{ minWidth: "32px", justifyContent: "center", fontWeight: 800 }}>{index + 1}</span>
              <span style={{ fontSize: "0.95rem", color: "var(--slate-800)", lineHeight: 1.45 }}>{question}</span>
            </div>
          ))}

          <motion.button
            whileTap={tactilePress}
            onClick={() => {
              if (!revealed) {
                setRevealed(true);
                return;
              }
              onContinue();
            }}
            className="apple-touch-btn primary"
            style={{ minHeight: "52px", gap: "8px", marginTop: "auto", fontSize: "1.02rem", fontWeight: 700 }}
          >
            <Sparkles size={18} /> {revealed ? "Continue to Pacific Diagram Analysis" : "Reveal Task"}
          </motion.button>

          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "14px", padding: "14px 16px", color: "#1e3a8a", fontSize: "0.9rem", lineHeight: 1.5 }}
            >
              The full task prompt and interactive Pacific Ocean Diagram Engine are revealed in Step 02.
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
