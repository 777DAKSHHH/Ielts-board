import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CircleCheck, CheckCircle2, ShieldCheck, AlertTriangle, ArrowRight } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

export const Step7EvaluationT2: React.FC = () => {
  const [activeModelIdx, setActiveModelIdx] = useState(0);

  const body2 = TASK2_DATA.bodyParagraphs?.[1];
  const allEffects = body2?.alternativeReasons || [];

  return (
    <div className="stage-card-wrapper">
      {/* Step Header */}
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px", background: "#ecfdf5", color: "#065f46" }}>
          Step 07 / 09 • Body Para 2 (2nd View: History Guides Us)
        </span>
        <h2 className="stage-title">Body 2: Ideas for 2nd View (Study of Past Explains Present)</h2>
        <p className="stage-subtitle">
          Structure: <strong>Topic Sentence + Supporting Explanation + Concrete Real Example</strong>. Analyze how physical path dependency (Roman roads), speculative market psychology (Tulip Mania vs Crypto), and public health playbooks (1918 Flu vs COVID-19) make history an indispensable guide.
        </p>
      </div>

      {/* Teaching Strategy Banner */}
      <div
        style={{
          background: "#f0fdf4",
          border: "1.5px solid #bbf7d0",
          borderRadius: "16px",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "18px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "0.82rem", fontWeight: 800, background: "#166534", color: "#ffffff", padding: "4px 10px", borderRadius: "8px" }}>
            TEACHING RULE
          </span>
          <span style={{ fontSize: "0.98rem", fontWeight: 700, color: "#166534" }}>
            Students select ONE or TWO ideas below to construct Body 2. Support each argument with clear reasoning and proven historical examples!
          </span>
        </div>
        <span className="apple-badge" style={{ background: "#dcfce7", color: "#166534", fontWeight: 750 }}>
          2nd View • Body Para 2
        </span>
      </div>

      {/* =========================================================================
          ALL 4 VIEW 2 POINTS DISPLAYED SIMULTANEOUSLY (ZERO CLICKS REQUIRED FOR TEACHER)
         ========================================================================= */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "18px",
          marginBottom: "22px"
        }}
      >
        {allEffects.map((effect, idx) => (
          <div
            key={effect.id}
            style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-default)",
              borderRadius: "18px",
              padding: "20px 22px",
              boxShadow: "var(--shadow-sm)",
              display: "flex",
              flexDirection: "column",
              gap: "14px"
            }}
          >
            {/* Card Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1.5px solid var(--border-subtle)", paddingBottom: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    background: "#dcfce7",
                    color: "#166534",
                    fontSize: "0.84rem",
                    fontWeight: 800,
                    padding: "3px 10px",
                    borderRadius: "7px"
                  }}
                >
                  🟢 VIEW 2 • POINT 0{idx + 1}
                </span>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  {effect.title}
                </h4>
              </div>
            </div>

            {/* 1. Main Idea */}
            <div
              style={{
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: "12px",
                padding: "12px 14px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                <CircleCheck size={16} color="#16a34a" />
                <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#166534", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                  1. Main Idea (One-Liner)
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "1.04rem", fontWeight: 700, color: "#14532d", lineHeight: 1.5 }}>
                {effect.mainReason}
              </p>
            </div>

            {/* 2. Development */}
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid var(--border-subtle)",
                borderRadius: "12px",
                padding: "12px 14px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                <ArrowRight size={16} color="var(--slate-600)" />
                <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "var(--slate-700)", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                  2. Why It Explains Present (One-Liner)
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "0.98rem", color: "var(--slate-800)", lineHeight: 1.55 }}>
                {effect.supportingReasons}
              </p>
            </div>

            {/* 3. Real-Life Example */}
            <div
              style={{
                background: "#f0fdf4",
                border: "1px solid #86efac",
                borderRadius: "12px",
                padding: "12px 14px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                <CircleCheck size={16} color="#16a34a" />
                <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#166534", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                  3. Real Example (One-Liner)
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "0.98rem", color: "#14532d", lineHeight: 1.55, fontWeight: 550 }}>
                {effect.example}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* =========================================================================
          EXAMINER MODEL BODY PARAGRAPH SECTION
         ========================================================================= */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-default)",
          borderRadius: "20px",
          padding: "24px",
          boxShadow: "var(--shadow-sm)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px", flexWrap: "wrap", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Award size={24} color="#e11d48" />
            <div>
              <h4 style={{ fontSize: "1.24rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                Examiner Band 9 Model Paragraph Synthesis
              </h4>
              <p style={{ margin: "2px 0 0", fontSize: "0.88rem", color: "var(--slate-600)" }}>
                See how a Band 9 writer constructs a cohesive body paragraph on the victim consequences above
              </p>
            </div>
          </div>

          {/* Model Switcher Chips */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "var(--slate-100)", padding: "3px", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
            <span style={{ fontSize: "0.76rem", fontWeight: 750, color: "var(--slate-500)", padding: "0 6px" }}>
              Show Model for:
            </span>
            {allEffects.map((d, idx) => (
              <button
                key={d.id}
                onClick={() => setActiveModelIdx(idx)}
                style={{
                  border: "none",
                  padding: "4px 10px",
                  borderRadius: "7px",
                  fontSize: "0.82rem",
                  fontWeight: 750,
                  cursor: "pointer",
                  background: activeModelIdx === idx ? "#e11d48" : "transparent",
                  color: activeModelIdx === idx ? "#ffffff" : "var(--slate-700)",
                  transition: "all 0.12s ease"
                }}
              >
                Effect 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Model Paragraph Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModelIdx}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
          >
            <div
              style={{
                background: "#fff1f2",
                border: "1.5px solid #fecdd3",
                borderRadius: "16px",
                padding: "20px 24px",
                fontSize: "1.18rem",
                lineHeight: 1.75,
                color: "#881337",
                fontWeight: 500
              }}
            >
              {allEffects[activeModelIdx]?.modelParagraph}
            </div>

            <div style={{ marginTop: "12px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="apple-badge" style={{ fontSize: "0.82rem", background: "#fee2e2", color: "#991b1b" }}>
                  ✦ 1 Main Effect
                </span>
                <span className="apple-badge" style={{ fontSize: "0.82rem", background: "#fee2e2", color: "#991b1b" }}>
                  ✦ Causal Escalation
                </span>
                <span className="apple-badge" style={{ fontSize: "0.82rem", background: "#fee2e2", color: "#991b1b" }}>
                  ✦ Real-World Proof
                </span>
              </div>
              <span style={{ fontSize: "0.88rem", color: "var(--slate-600)", fontWeight: 600 }}>
                💡 <em>{allEffects[activeModelIdx]?.examinerNotes}</em>
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
