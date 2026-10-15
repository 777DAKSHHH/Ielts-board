import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleCheck, Sparkles, Award, CheckCircle2, BookOpen, Lightbulb, ArrowRight, Eye } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";
import { CaveatsDeepDiveModal } from "./CaveatsDeepDiveModal";
import { tactilePress } from "../../motion";

export const Step6ConsequencesT2: React.FC = () => {
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);
  const [activeModelIdx, setActiveModelIdx] = useState(0);

  const body1 = TASK2_DATA.bodyParagraphs?.[0];
  const allReasons = body1?.alternativeReasons || [];

  return (
    <div className="stage-card-wrapper">
      {/* Step Header */}
      <div>
        <span className="apple-badge success" style={{ marginBottom: "8px" }}>
          Step 06 / 09 • Points for the Advantages (Strong Side)
        </span>
        <h2 className="stage-title">Student Idea Bank: 4 Main Advantages</h2>
        <p className="stage-subtitle">
          All 4 strong arguments displayed simultaneously for your class. Students should <strong>choose two strong arguments and develop them</strong> using <em>Main Idea + Causal Development + Real-Life Example</em>.
        </p>
      </div>

      {/* Teaching Strategy Banner */}
      <div
        style={{
          background: "#f0fdf4",
          border: "1.5px solid #86efac",
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
          <span style={{ fontSize: "0.98rem", fontWeight: 700, color: "#14532d" }}>
            Students pick ANY TWO reasons below to write Body 1. Never attempt to cram all four into one essay!
          </span>
        </div>
        <motion.button
          whileTap={tactilePress}
          onClick={() => setIsDeepDiveOpen(true)}
          className="apple-touch-btn secondary"
          style={{
            minHeight: "36px",
            padding: "0 14px",
            fontSize: "0.82rem",
            fontWeight: 750,
            gap: "6px",
            color: "#166534",
            background: "#ffffff",
            border: "1.5px solid #86efac",
            cursor: "pointer",
            borderRadius: "10px"
          }}
        >
          <Sparkles size={15} color="#16a34a" />
          <span>Faculty Deep Dive &amp; Angles</span>
        </motion.button>
      </div>

      {/* =========================================================================
          ALL 4 REASONS DISPLAYED SIMULTANEOUSLY (ZERO CLICKS REQUIRED FOR TEACHER)
         ========================================================================= */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "18px",
          marginBottom: "22px"
        }}
      >
        {allReasons.map((reason, idx) => (
          <div
            key={reason.id}
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
                  🟢 REASON 0{idx + 1}
                </span>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                  {reason.title}
                </h4>
              </div>
            </div>

            {/* 1. Main Idea */}
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid var(--border-subtle)",
                borderRadius: "12px",
                padding: "12px 14px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                <Lightbulb size={16} color="var(--apple-blue)" />
                <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "var(--apple-blue)", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                  1. Main Idea (Topic Sentence)
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "1.04rem", fontWeight: 700, color: "var(--slate-900)", lineHeight: 1.5 }}>
                {reason.mainReason}
              </p>
            </div>

            {/* 2. Development */}
            <div
              style={{
                background: "#fffbeb",
                border: "1px solid #fde68a",
                borderRadius: "12px",
                padding: "12px 14px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                <ArrowRight size={16} color="#b45309" />
                <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#92400e", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                  2. Causal Development (Why &amp; How)
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "0.98rem", color: "#78350f", lineHeight: 1.55 }}>
                {reason.supportingReasons}
              </p>
            </div>

            {/* 3. Real-Life Example */}
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
                  3. Relatable Real-Life Example
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "0.98rem", color: "#14532d", lineHeight: 1.55, fontWeight: 550 }}>
                {reason.example}
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
            <Award size={24} color="var(--apple-blue)" />
            <div>
              <h4 style={{ fontSize: "1.24rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                Examiner Band 9 Model Paragraph Synthesis
              </h4>
              <p style={{ margin: "2px 0 0", fontSize: "0.88rem", color: "var(--slate-600)" }}>
                See how a Band 9 writer constructs a cohesive body paragraph from the ideas above
              </p>
            </div>
          </div>

          {/* Model Switcher Chips */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "var(--slate-100)", padding: "3px", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
            <span style={{ fontSize: "0.76rem", fontWeight: 750, color: "var(--slate-500)", padding: "0 6px" }}>
              Show Model for:
            </span>
            {allReasons.map((r, idx) => (
              <button
                key={r.id}
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
                Reason 0{idx + 1}
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
                background: "#f0fdf4",
                border: "1.5px solid #86efac",
                borderRadius: "16px",
                padding: "20px 24px",
                fontSize: "1.18rem",
                lineHeight: 1.75,
                color: "#14532d",
                fontWeight: 500
              }}
            >
              {allReasons[activeModelIdx]?.modelParagraph}
            </div>

            <div style={{ marginTop: "12px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="apple-badge accent" style={{ fontSize: "0.82rem" }}>
                  ✦ 1 Main Idea
                </span>
                <span className="apple-badge accent" style={{ fontSize: "0.82rem" }}>
                  ✦ Causal Progression
                </span>
                <span className="apple-badge accent" style={{ fontSize: "0.82rem" }}>
                  ✦ Concrete Real-Life Proof
                </span>
              </div>
              <span style={{ fontSize: "0.88rem", color: "var(--slate-600)", fontWeight: 600 }}>
                💡 <em>{allReasons[activeModelIdx]?.examinerNotes}</em>
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <CaveatsDeepDiveModal
        isOpen={isDeepDiveOpen}
        onClose={() => setIsDeepDiveOpen(false)}
      />
    </div>
  );
};
