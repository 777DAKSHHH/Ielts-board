import React, { useState } from "react";
import { motion } from "framer-motion";
import { Headphones, Lightbulb, PlayCircle, Sparkles } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";
import { tactilePress } from "../../motion";
import { LiquidGlassOrb, OrbState } from "../common/LiquidGlassOrb";

interface Step1OverviewProps {
  onSpeak: (text: string) => void;
  accent: "en-GB" | "en-US";
  setAccent: (accent: "en-GB" | "en-US") => void;
  onContinue: () => void;
}

export const Step1Overview: React.FC<Step1OverviewProps> = ({ onSpeak, accent, setAccent, onContinue }) => {
  const [revealed, setRevealed] = useState(false);
  const [orbState, setOrbState] = useState<OrbState>("idle");

  const handleBrowserSpeak = () => {
    setOrbState("speaking");
    onSpeak(TASK1_DATA.audioClueText);
    setTimeout(() => {
      setOrbState("idle");
    }, 12000);
  };

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent chromatic-glass-badge" style={{ marginBottom: "8px" }}>
          Step 01 / 08 • Cryptic Audio Guess
        </span>
        <h2 className="stage-title">Listen First: Wheat Exports Across Three Regions (1985–1990)</h2>
        <p className="stage-subtitle">
          Play the briefing before revealing the line graph. Deduce which region achieved the overall apex of 25 million tonnes, which area underwent steady upward growth to finish as the market leader, and which nation experienced continuous decline to finish lowest.
        </p>
      </div>

      <div className="stage-grid-2col">
        <div
          className="chromatic-glass-card"
          style={{
            borderRadius: "20px",
            padding: "26px",
            display: "flex",
            flexDirection: "column",
            gap: "18px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <LiquidGlassOrb
                state={orbState}
                size={52}
                onClick={handleBrowserSpeak}
                showStateBadge
              />
              <div>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 750, color: "var(--slate-900)" }}>
                  Cryptic Audio Briefing
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--slate-500)", marginTop: "2px" }}>
                  Multi-Line Graph • Wheat Exports (1985–1990) • Millions of Tonnes
                </p>
              </div>
            </div>
          </div>

          <audio
            controls
            preload="metadata"
            onPlay={() => setOrbState("speaking")}
            onPause={() => setOrbState("idle")}
            onEnded={() => setOrbState("idle")}
            style={{ width: "100%", height: "54px", borderRadius: "14px", outline: "none" }}
          >
            <source src={TASK1_DATA.audioUrl} />
            Your browser does not support audio playback.
          </audio>

          <motion.button
            whileTap={tactilePress}
            onClick={handleBrowserSpeak}
            className="apple-touch-btn secondary liquid-action-btn"
            style={{ minHeight: "48px", gap: "8px", fontWeight: 650 }}
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
            <strong style={{ color: "var(--slate-900)" }}>Focus Prompt:</strong> Listen attentively to the briefing. Identify which country started as the leading exporter at 19 million tonnes, which region surged to 21 million tonnes to finish first, and which country steadily fell from 16 to 11 million tonnes.
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
            <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--slate-900)" }}>Student Deduction Board</h4>
          </div>

          {[
            "Which nation achieved the overall apex of the entire graph at 25 million tonnes in 1988?",
            "Which region experienced steady upward expansion over the final two years to emerge as the top exporter at 21 million tonnes in 1990?",
            "How did Canada's export figure in 1990 compare to its initial volume in 1985 (Zero net change: 19 million tonnes)?",
            "Which country underwent a continuous downward trajectory after 1986, ultimately finishing lowest at 11 million tonnes?"
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
            <Sparkles size={18} /> {revealed ? "Continue to Line Graph Analysis" : "Reveal Task & Line Graph"}
          </motion.button>

          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "14px", padding: "14px 16px", color: "#1e3a8a", fontSize: "0.9rem", lineHeight: 1.5 }}
            >
              The full task prompt and interactive SmartBoard Line Graph Engine are revealed in Step 02.
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
