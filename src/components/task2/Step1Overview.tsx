import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Unlock, Sparkles, Users } from "lucide-react";
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
          Step 01 / 09 • Cryptic Audio Guess
        </span>
        <h2 className="stage-title">Listen First: Guess the Marriage &amp; Family Planning Trend</h2>
        <p className="stage-subtitle">
          Play the briefing before revealing the actual IELTS question. Listen to the global demographic shift toward marrying and starting families in one's thirties rather than at a younger age.
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
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Users size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--slate-900)" }}>Cryptic Audio Briefing</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--slate-500)", marginTop: "2px" }}>
                Sociology &amp; Family Economics • Delaying Marriage &amp; Children to 30s • ~1:05
              </p>
            </div>
          </div>

          <audio
            controls
            preload="metadata"
            style={{ width: "100%", height: "54px", borderRadius: "14px", outline: "none" }}
          >
            <source src={TASK2_DATA.audioUrl} type="audio/mp4" />
            Your browser does not support audio playback.
          </audio>

          <div
            style={{
              background: "var(--slate-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "14px",
              padding: "16px",
              color: "var(--slate-700)",
              lineHeight: 1.55
            }}
          >
            <strong style={{ color: "var(--slate-900)" }}>Focus Prompt:</strong> Listen attentively to the briefing. Why are contemporary young adults choosing to defer marriage and parenthood until their thirties? What financial, career, and psychological benefits exist, what biological and demographic drawbacks occur, and is this overall a positive or negative development?
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
            "Why are millions of young adults postponing marriage and parenthood until their 30s instead of their 20s?",
            "How do career advancement and financial independence benefit families formed later in life?",
            "What psychological advantages and lower divorce rates are linked to greater maturity in one's 30s?",
            "What biological fertility risks and clinical challenges arise as parents age past 35?",
            "Is delaying marriage and childbirth a predominantly positive or negative development for society?"
          ].map((question, index) => (
            <div
              key={question}
              style={{
                background: "var(--slate-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "14px",
                padding: "14px 15px",
                display: "flex",
                gap: "12px",
                alignItems: "flex-start"
              }}
            >
              <span className="apple-badge neutral" style={{ minWidth: "32px", justifyContent: "center", fontWeight: 800 }}>
                {index + 1}
              </span>
              <span style={{ fontSize: "0.93rem", color: "var(--slate-800)", lineHeight: 1.45 }}>
                {question}
              </span>
            </div>
          ))}

          <motion.button
            whileTap={tactilePress}
            onClick={onUnlockBypass}
            className="apple-touch-btn primary"
            style={{ minHeight: "52px", gap: "8px", marginTop: "auto", fontSize: "1.02rem", fontWeight: 700 }}
          >
            <Unlock size={18} /> <span>Reveal Task 2 Question &amp; 5-Para Format</span>
          </motion.button>

          <div
            style={{
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: "14px",
              padding: "13px 15px",
              color: "#1e3a8a",
              fontSize: "0.88rem"
            }}
          >
            <Sparkles size={14} style={{ verticalAlign: "-2px", marginRight: "6px" }} />
            The next stage reveals the exact question wording and the required 5-paragraph structure (3 Body Paragraphs).
          </div>
        </div>
      </div>
    </div>
  );
};
