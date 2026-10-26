import React from "react";
import { motion } from "framer-motion";
import { Unlock, ShieldAlert } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";
import { tactilePress } from "../../motion";

interface Step1OverviewProps {
  onUnlockBypass: () => void;
  isUnlocked: boolean;
}

export const Step1OverviewT2: React.FC<Step1OverviewProps> = ({ onUnlockBypass }) => {
  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 01 / 09 • Cryptic Audio Briefing
        </span>
      </div>

      <div style={{ maxWidth: "720px", margin: "16px auto 0", width: "100%" }}>
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid var(--border-default)",
            borderRadius: "24px",
            padding: "36px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            boxShadow: "var(--shadow-md)",
            textAlign: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "var(--slate-900)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 15px -3px rgba(15, 23, 42, 0.2)"
            }}
          >
            <ShieldAlert size={28} />
          </div>

          <div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
              Audio Briefing
            </h3>
            <p style={{ fontSize: "0.92rem", color: "var(--slate-500)", marginTop: "4px" }}>
              Listen to the audio briefing before revealing the question
            </p>
          </div>

          <audio
            controls
            preload="metadata"
            style={{ width: "100%", maxWidth: "560px", height: "54px", borderRadius: "14px", outline: "none" }}
          >
            <source src={TASK2_DATA.audioUrl} type="audio/mp4" />
            Your browser does not support audio playback.
          </audio>

          <motion.button
            whileTap={tactilePress}
            onClick={onUnlockBypass}
            className="apple-touch-btn primary"
            style={{
              minHeight: "54px",
              padding: "0 32px",
              gap: "10px",
              fontSize: "1.08rem",
              fontWeight: 750,
              width: "100%",
              maxWidth: "560px",
              borderRadius: "14px",
              boxShadow: "0 10px 20px -5px rgba(37, 99, 235, 0.3)"
            }}
          >
            <Unlock size={20} /> <span>Reveal Task 2 Question &amp; Essay Format</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};
