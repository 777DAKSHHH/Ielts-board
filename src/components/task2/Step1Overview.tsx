import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Unlock, Sparkles, ShieldAlert } from "lucide-react";
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
        <h2 className="stage-title">Listen First: Digital Financial Fraud &amp; Identity Theft Crisis</h2>
        <p className="stage-subtitle">
          Play the briefing before revealing the actual IELTS question. Listen to the global surge in identity theft, cyber-enabled financial fraud, and the devastating fallout for victims.
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
              <ShieldAlert size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--slate-900)" }}>Cryptic Audio Briefing</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--slate-500)", marginTop: "2px" }}>
                Cybercrime &amp; Financial Fraud • Identity Theft Trends &amp; Victim Impact • ~1:15
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
            <strong style={{ color: "var(--slate-900)" }}>Focus Prompt:</strong> Listen attentively to the briefing. What technological and systemic vulnerabilities are driving the alarming rise in identity theft across numerous countries? What immediate financial ruin and profound psychological trauma do the innocent victims experience?
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
            "Why has identity theft skyrocketed into one of the fastest-growing financial crimes worldwide?",
            "How do online banking portals, e-commerce, and corporate database breaches expose ordinary consumers?",
            "What happens to a victim's bank accounts, credit ratings, and ability to borrow when their identity is hijacked?",
            "What severe emotional trauma, chronic anxiety, and bureaucratic battles do victims endure to restore their names?",
            "What systemic safeguards are urgently required to combat international cybercrime syndicates?"
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
            <Unlock size={18} /> <span>Reveal Task 2 Question &amp; Essay Format</span>
          </motion.button>

          <div
            style={{
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: "14px",
              padding: "12px 14px",
              color: "#1e3a8a",
              fontSize: "0.88rem",
              lineHeight: 1.45
            }}
          >
            The complete question prompt and essay architecture are unlocked in Step 02.
          </div>
        </div>
      </div>
    </div>
  );
};
