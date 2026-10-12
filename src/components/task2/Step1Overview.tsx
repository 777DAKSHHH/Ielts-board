import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Unlock, Sparkles, ShoppingBag } from "lucide-react";
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
        <h2 className="stage-title">Listen First: Guess the Global Food Trade Topic</h2>
        <p className="stage-subtitle">
          Play the briefing before revealing the actual IELTS question. Listen to the global debate surrounding international food imports on supermarket shelves versus regional domestic agricultural produce.
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
              <ShoppingBag size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--slate-900)" }}>Cryptic Audio Briefing</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--slate-500)", marginTop: "2px" }}>
                Global Commerce &amp; Agrarian Economics • Imported Goods vs. Local Agriculture • ~1:05
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
            <strong style={{ color: "var(--slate-900)" }}>Focus Prompt:</strong> Listen attentively to the briefing. Why are contemporary supermarkets filled with items shipped from overseas rather than domestic harvests? What are the key consumer and economic benefits, what ecological and farming drawbacks exist, and do the benefits outweigh the costs?
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
            "Why have modern supermarkets transitioned from local produce to global imported food?",
            "How does international food trade provide counter-seasonal nutrition and consumer diversity?",
            "What ecological toll do 'food miles' and transcontinental air freight impose on the environment?",
            "Does global trade empower developing agrarian exporters or undermine traditional local farmers?",
            "Do the substantial advantages of globalized supermarket goods decisively outweigh the disadvantages?"
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
