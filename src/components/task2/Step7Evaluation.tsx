import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CircleCheck, CheckCircle2, ShieldCheck } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";
import { tactilePress } from "../../motion";

export const Step7EvaluationT2: React.FC = () => {
  const [selectedReasonIdx, setSelectedReasonIdx] = useState(0);

  const body2 = TASK2_DATA.bodyParagraphs?.[1];
  const reasonOptions = body2?.alternativeReasons || [];
  const currentReason = reasonOptions[selectedReasonIdx] || {
    badge: "Reason 1 • Biological Fertility Risks",
    title: "Biological Fertility Decline & Medical Complications",
    mainReason: body2?.mainReason || "Delaying pregnancy into one's thirties is biologically associated with steep declines in natural fertility and heightened risks of obstetric complications.",
    supportingReasons: body2?.supportingReasons || "Human reproductive biology becomes progressively more constrained after age 35, precipitating higher occurrences of gestational diabetes, chromosomal abnormalities, and conception difficulties.",
    example: body2?.example || "For example, clinical statistics show that women attempting first conception after 35 face a 30% higher likelihood of requiring invasive IVF treatments or caesarean deliveries.",
    modelParagraph:
      "On the other hand, a prominent drawback of delaying family planning into one's thirties is the physiological decline in natural reproductive capacity and corresponding medical risks. Clinical evidence consistently demonstrates that female fertility decreases noticeably after the age of thirty-two and drops precipitously past thirty-five. Consequently, couples attempting conception later in life often encounter difficulties conceiving naturally, predisposing them to elevated rates of pregnancy complications and emotionally exhausting, cost-prohibitive assisted reproductive therapies. For instance, public health registries indicate that mothers over thirty-five experience a significantly higher incidence of gestational diabetes and chromosomal conditions compared to their younger peers.",
    examinerNotes:
      "The most compelling biological counterpoint. High lexical resource and clear causal progression showing why age poses medical hurdles."
  };

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px", background: "#fee2e2", color: "#b91c1c" }}>
          Step 07 / 09 • Points for the Disadvantages (Counterpoint)
        </span>
        <h2 className="stage-title">Points for the Disadvantages: Counter-Arguments &amp; Concessions</h2>
        <p className="stage-subtitle">
          Structure: <strong>1 main reason + supporting reasons + example</strong>. Below are <strong>4 clear, relatable main reasons</strong> for the drawbacks. Select any reason to inspect its analytical development and how to outweigh it.
        </p>
      </div>

      {/* Golden Format Bar */}
      <div
        style={{
          background: "#fff1f2",
          border: "1.5px solid #fecdd3",
          borderRadius: "16px",
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 800, background: "#be123c", color: "#ffffff", padding: "3px 10px", borderRadius: "8px" }}>
            EXACT FORMAT
          </span>
          <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "#9f1239" }}>
            1 Main Disadvantage → Supporting Causal Chain → Verified Concrete Example
          </span>
        </div>
        <span className="apple-badge" style={{ background: "#fecdd3", color: "#9f1239", fontWeight: 700 }}>
          Counterpoint Concession • Non-Opinion Side
        </span>
      </div>

      {/* 4 REASONS INTERACTIVE SELECTOR STRIP */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          background: "var(--slate-50)",
          border: "1.5px solid var(--border-default)",
          borderRadius: "16px",
          padding: "12px 14px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "6px" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--slate-600)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
            Select 1 of 4 Relatable Disadvantage Reasons (Smartboard Interactive Choice):
          </span>
          <span style={{ fontSize: "0.75rem", color: "var(--slate-500)", fontWeight: 600 }}>
            Tip: Pick the drawback you can acknowledge fairly before proving the advantages prevail
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
          {reasonOptions.map((opt, idx) => {
            const isSelected = selectedReasonIdx === idx;
            return (
              <motion.button
                key={opt.id}
                whileTap={tactilePress}
                onClick={() => setSelectedReasonIdx(idx)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  textAlign: "left",
                  padding: "10px 12px",
                  borderRadius: "12px",
                  border: isSelected ? "2px solid #e11d48" : "1.5px solid var(--border-subtle)",
                  background: isSelected ? "#ffffff" : "var(--slate-100)",
                  cursor: "pointer",
                  boxShadow: isSelected ? "0 4px 12px rgba(225, 29, 72, 0.12)" : "none",
                  transition: "all 0.15s ease",
                  minHeight: "56px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", width: "100%", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: isSelected ? "#e11d48" : "var(--slate-600)"
                    }}
                  >
                    Reason 0{idx + 1}
                  </span>
                  {isSelected && <CheckCircle2 size={14} color="#e11d48" />}
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 750,
                    color: isSelected ? "var(--slate-900)" : "var(--slate-700)",
                    marginTop: "2px",
                    lineHeight: 1.3
                  }}
                >
                  {opt.title.split("&")[0].trim()}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* 2-Column Architectural Breakdown & Model View */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedReasonIdx}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="stage-grid-2col"
          style={{ overflowY: "auto" }}
        >
          {/* Left Column: Architectural Breakdown */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {/* Main Reason Card */}
            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid var(--border-default)",
                borderRadius: "18px",
                padding: "20px",
                boxShadow: "var(--shadow-sm)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <span className="apple-badge accent" style={{ background: "#ffe4e6", color: "#be123c" }}>
                  Component 1 • Main Disadvantage
                </span>
                <span style={{ fontSize: "0.76rem", fontWeight: 700, color: "var(--slate-400)" }}>
                  {currentReason.badge}
                </span>
              </div>
              <h4 style={{ fontSize: "1.06rem", fontWeight: 750, color: "var(--slate-900)", marginBottom: "8px" }}>
                {currentReason.title}
              </h4>
              <p style={{ fontSize: "0.93rem", color: "var(--slate-800)", lineHeight: 1.6, margin: 0 }}>
                {currentReason.mainReason}
              </p>
            </div>

            {/* Supporting Reasons Card */}
            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid var(--border-default)",
                borderRadius: "18px",
                padding: "20px",
                boxShadow: "var(--shadow-sm)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <span className="apple-badge warning" style={{ background: "#fef3c7", color: "#92400e" }}>
                  Component 2 • Supporting Causal Chain
                </span>
              </div>
              <h4 style={{ fontSize: "1.04rem", fontWeight: 750, color: "var(--slate-900)", marginBottom: "8px" }}>
                Why This Problem Occurs
              </h4>
              <p style={{ fontSize: "0.92rem", color: "var(--slate-700)", lineHeight: 1.6, margin: 0 }}>
                {currentReason.supportingReasons}
              </p>
            </div>

            {/* Example Card */}
            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid var(--border-default)",
                borderRadius: "18px",
                padding: "20px",
                boxShadow: "var(--shadow-sm)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <span className="apple-badge" style={{ background: "#f1f5f9", color: "#334155" }}>
                  Component 3 • Concrete Evidence
                </span>
              </div>
              <h4 style={{ fontSize: "1.04rem", fontWeight: 750, color: "var(--slate-900)", marginBottom: "8px" }}>
                Real-World IELTS Evidence
              </h4>
              <div
                style={{
                  background: "var(--slate-50)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "12px",
                  padding: "12px 14px",
                  fontSize: "0.92rem",
                  color: "var(--slate-800)",
                  lineHeight: 1.55
                }}
              >
                <CircleCheck size={16} color="#e11d48" style={{ verticalAlign: "-3px", marginRight: "6px", display: "inline" }} />
                {currentReason.example}
              </div>
            </div>
          </div>

          {/* Right Column: Model Paragraph & Outweighing Strategy */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {/* Integrated Paragraph Card */}
            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid var(--border-default)",
                borderRadius: "18px",
                padding: "22px",
                boxShadow: "var(--shadow-sm)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Award size={20} color="#e11d48" />
                  <h4 style={{ fontSize: "1.08rem", fontWeight: 800 }}>Complete Counterpoint Paragraph Model</h4>
                </div>
                <span className="apple-badge neutral" style={{ fontSize: "0.72rem" }}>
                  Reason 0{selectedReasonIdx + 1} Applied
                </span>
              </div>

              <div
                style={{
                  background: "#fff1f2",
                  border: "1px solid #fecdd3",
                  borderRadius: "14px",
                  padding: "18px",
                  fontSize: "0.98rem",
                  lineHeight: 1.7,
                  color: "#881337",
                  fontStyle: "normal"
                }}
              >
                {currentReason.modelParagraph}
              </div>

              <div style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span className="apple-badge" style={{ fontSize: "0.74rem", background: "#fee2e2", color: "#991b1b" }}>
                  ✦ Measured Concession
                </span>
                <span className="apple-badge" style={{ fontSize: "0.74rem", background: "#fee2e2", color: "#991b1b" }}>
                  ✦ Causal Proof
                </span>
                <span className="apple-badge" style={{ fontSize: "0.74rem", background: "#fee2e2", color: "#991b1b" }}>
                  ✦ Neutral Tone
                </span>
              </div>
            </div>

            {/* How to Outweigh This Point in the Essay */}
            <div
              style={{
                background: "#f0fdf4",
                border: "1.5px solid #bbf7d0",
                borderRadius: "16px",
                padding: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <ShieldCheck size={18} color="#15803d" />
                <h5 style={{ fontSize: "0.96rem", fontWeight: 750, color: "#166534", margin: 0 }}>
                  How to Outweigh This Disadvantage (Band 9 Examiner Strategy)
                </h5>
              </div>
              <p style={{ fontSize: "0.88rem", color: "#14532d", lineHeight: 1.55, margin: 0 }}>
                <strong>Examiner Secret:</strong> In an "Advantages Outweigh Disadvantages" essay, you must acknowledge the counterpoint honestly, but explain why the advantages are broader or more vital. For instance, while local farmers can be protected through government grants and organic certifications, the benefits of year-round fresh food and lower grocery bills affect the daily health and financial survival of the entire general public.
              </p>
            </div>

            {/* Examiner Notes Card */}
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid var(--border-subtle)",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "6px"
              }}
            >
              <h5 style={{ fontSize: "0.92rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                Examiner Insight for Disadvantage 0{selectedReasonIdx + 1}
              </h5>
              <p style={{ fontSize: "0.86rem", color: "var(--slate-600)", lineHeight: 1.5, margin: 0 }}>
                {currentReason.examinerNotes}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
