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
        <h2 className="stage-title">Listen First: Islip Town Centre Redevelopment Briefing</h2>
        <p className="stage-subtitle">
          Play the briefing before revealing the comparative town maps. Deduce how through-traffic is redirected, which facilities replace the northern shops, what happens to the central main road, and how the park is altered.
        </p>
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto", width: "100%" }}>
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
                  Comparative Town Maps • Now vs Planned Development • Cambridge Academic IELTS
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
            <source src={`/${TASK1_DATA.audioUrl}`} type="audio/mp4" />
            <source src="/materials/Redesigning_High_Streets_for_Growing_Towns.mp4" type="audio/mp4" />
            <source src="/materials/Redesigning_High_Streets_for_Growing_Towns.m4a" type="audio/mp4" />
            <source src="/materials/Redesigning_High_Streets_for_Growing_Towns.wav" type="audio/wav" />
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

          <motion.button
            whileTap={tactilePress}
            onClick={onContinue}
            className="apple-touch-btn primary"
            style={{ minHeight: "52px", gap: "8px", marginTop: "8px", fontSize: "1.02rem", fontWeight: 700 }}
          >
            <Sparkles size={18} /> Continue to Map Deconstruction (Step 02)
          </motion.button>
        </div>
      </div>
    </div>
  );
};
