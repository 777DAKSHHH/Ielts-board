import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CircleCheck, CheckCircle2, ShieldCheck, AlertTriangle, ArrowRight, Lightbulb } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

export const Step7EvaluationT2: React.FC = () => {
  const [activeModelIdx, setActiveModelIdx] = useState(0);

  const body2 = TASK2_DATA.bodyParagraphs?.[1];
  const allDisadvantages = body2?.alternativeReasons || [];

  return (
    <div className="stage-card-wrapper">
      {/* Step Header */}
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px", background: "#fee2e2", color: "#991b1b" }}>
          Step 07 / 09 • Body Para 2 (Disadvantages: 2 Main Reasons + Example)
        </span>
        <h2 className="stage-title">Body 2: Disadvantages of the 'Achieve Anything' Message</h2>
        <p className="stage-subtitle">
          Mandatory Format: <strong>Disadvantages [ 2 Main reasons + Example ]</strong>. Examine the severe psychological fallout of internalizing failure as personal inadequacy and the danger of ignoring inborn biological boundaries.
        </p>
      </div>

      {/* Teaching Strategy Banner */}
      <div
        style={{
          background: "#fef2f2",
          border: "1.5px solid #fecaca",
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
          <span style={{ fontSize: "0.82rem", fontWeight: 800, background: "#dc2626", color: "#ffffff", padding: "4px 10px", borderRadius: "8px" }}>
            MANDATORY FORMAT
          </span>
          <span style={{ fontSize: "0.98rem", fontWeight: 700, color: "#991b1b" }}>
            Body 2 requires 2 Main Reasons + Concrete Example. Both key disadvantages and real-world proof are detailed below!
          </span>
        </div>
        <span className="apple-badge" style={{ background: "#fee2e2", color: "#991b1b", fontWeight: 750 }}>
          Disadvantages • Body Para 2
        </span>
      </div>

      {/* 2 MAIN DISADVANTAGES DISPLAYED SIMULTANEOUSLY */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "18px",
          marginBottom: "22px"
        }}
      >
        {allDisadvantages.map((disadv, idx) => (
          <div
            key={disadv.id}
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
                    background: "#fee2e2",
                    color: "#991b1b",
                    fontSize: "0.84rem",
                    fontWeight: 800,
                    padding: "3px 10px",
                    borderRadius: "7px"
                  }}
                >
                  ⚠️ DISADVANTAGE 0{idx + 1}
                </span>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  {disadv.title}
                </h4>
              </div>
            </div>

            {/* 1. Main Reason */}
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid var(--border-subtle)",
                borderRadius: "12px",
                padding: "12px 14px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                <Lightbulb size={16} color="#dc2626" />
                <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#dc2626", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                  Main Reason 0{idx + 1}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "1.04rem", fontWeight: 700, color: "var(--slate-900)", lineHeight: 1.5 }}>
                {disadv.mainReason}
              </p>
            </div>

            {/* 2. Supporting Explanation */}
            <div
              style={{
                background: "#fff1f2",
                border: "1px solid #fecdd3",
                borderRadius: "12px",
                padding: "12px 14px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                <ArrowRight size={16} color="#be123c" />
                <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#be123c", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                  Why It Causes Harm (Explanation)
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "0.98rem", color: "#881337", lineHeight: 1.55 }}>
                {disadv.supportingReasons}
              </p>
            </div>

            {/* 3. Real Example */}
            <div
              style={{
                background: "#f0fdf4",
                border: "1.5px solid #86efac",
                borderRadius: "12px",
                padding: "12px 14px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                <CircleCheck size={16} color="#16a34a" />
                <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#166534", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                  Concrete Example
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "0.98rem", color: "#14532d", lineHeight: 1.55, fontWeight: 550 }}>
                {disadv.example}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* EXAMINER MODEL BODY 2 PARAGRAPH */}
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
            <Award size={24} color="#dc2626" />
            <div>
              <h4 style={{ fontSize: "1.24rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                Examiner Band 9 Model Paragraph Synthesis
              </h4>
              <p style={{ margin: "2px 0 0", fontSize: "0.88rem", color: "var(--slate-600)" }}>
                See how a Band 9 response articulates both disadvantages and integrates the East Asian school exam example:
              </p>
            </div>
          </div>

          {/* Model Switcher Chips */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "var(--slate-100)", padding: "3px", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
            <span style={{ fontSize: "0.76rem", fontWeight: 750, color: "var(--slate-500)", padding: "0 6px" }}>
              Focus View:
            </span>
            {allDisadvantages.map((d, idx) => (
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
                  background: activeModelIdx === idx ? "var(--slate-900)" : "transparent",
                  color: activeModelIdx === idx ? "#ffffff" : "var(--slate-700)",
                  transition: "all 0.12s ease"
                }}
              >
                Disadvantage 0{idx + 1}
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
                background: "#f8fafc",
                border: "1.5px solid #cbd5e1",
                borderRadius: "16px",
                padding: "20px 24px",
                fontSize: "1.18rem",
                lineHeight: 1.75,
                color: "var(--slate-900)",
                fontWeight: 500
              }}
            >
              {allDisadvantages[activeModelIdx]?.modelParagraph}
            </div>

            <div style={{ marginTop: "12px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="apple-badge accent" style={{ fontSize: "0.82rem" }}>
                  ✦ 2 Main Reasons
                </span>
                <span className="apple-badge accent" style={{ fontSize: "0.82rem" }}>
                  ✦ Psychological &amp; Biological Depth
                </span>
                <span className="apple-badge accent" style={{ fontSize: "0.82rem" }}>
                  ✦ Exam System Proof
                </span>
              </div>
              <span style={{ fontSize: "0.88rem", color: "var(--slate-600)", fontWeight: 600 }}>
                💡 <em>{allDisadvantages[activeModelIdx]?.examinerNotes}</em>
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
