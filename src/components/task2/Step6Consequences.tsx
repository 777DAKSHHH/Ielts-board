import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleCheck, Sparkles, Award, CheckCircle2 } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";
import { CaveatsDeepDiveModal } from "./CaveatsDeepDiveModal";
import { tactilePress } from "../../motion";

export const Step6ConsequencesT2: React.FC = () => {
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);
  const [selectedReasonIdx, setSelectedReasonIdx] = useState(0);

  const body1 = TASK2_DATA.bodyParagraphs?.[0];
  const reasonOptions = body1?.alternativeReasons || [];
  const currentReason = reasonOptions[selectedReasonIdx] || {
    badge: "Reason 1 • Fresh Food All Year",
    title: "Year-Round Fresh Produce in Every Season",
    mainReason: body1?.mainReason || "",
    supportingReasons: body1?.supportingReasons || "",
    example: body1?.example || "",
    modelParagraph:
      "Foremost among the advantages is that importing goods guarantees consumers year-round access to fresh, healthy produce, overcoming harsh seasonal limitations. In colder countries, local farming shuts down almost entirely during the winter months, meaning domestic farms cannot produce fresh crops. By sourcing food from warmer countries in the southern hemisphere, supermarkets ensure that families can purchase essential fruits, vegetables, and vitamins throughout all twelve months. For instance, consumers in chilly northern European cities can regularly buy fresh strawberries, avocados, and citrus in the middle of January at stable prices.",
    examinerNotes:
      "Relatable & practical. Explains the seasonal winter gap in cold nations and shows how supermarket imports solve daily nutritional needs."
  };

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 06 / 09 • Points for the Advantages (Strong Side)
        </span>
        <h2 className="stage-title">Points for the Advantages: Core Arguments &amp; Evidence</h2>
        <p className="stage-subtitle">
          Structure: <strong>1 main reason + supporting reasons + example</strong>. Below are <strong>4 clear, relatable main reasons</strong> for the advantages. Select any reason to examine its exact IELTS analytical development.
        </p>
      </div>

      {/* Golden Format Bar */}
      <div
        style={{
          background: "#eff6ff",
          border: "1.5px solid #bfdbfe",
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
          <span style={{ fontSize: "0.8rem", fontWeight: 800, background: "#1e40af", color: "#ffffff", padding: "3px 10px", borderRadius: "8px" }}>
            EXACT FORMAT
          </span>
          <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1e3a8a" }}>
            1 Main Reason → Supporting Causal Chain → Verified Empirical Example
          </span>
        </div>
        <motion.button
          whileTap={tactilePress}
          onClick={() => setIsDeepDiveOpen(true)}
          className="apple-touch-btn secondary"
          style={{
            minHeight: "36px",
            padding: "0 14px",
            fontSize: "0.8rem",
            fontWeight: 750,
            gap: "6px",
            color: "#1e40af",
            background: "#ffffff",
            border: "1.5px solid #93c5fd",
            cursor: "pointer",
            borderRadius: "10px"
          }}
        >
          <Sparkles size={14} color="#2563eb" />
          <span>Examiner Logic Deep Dive</span>
        </motion.button>
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
            Select 1 of 4 Main Reasons (Smartboard Interactive Choice):
          </span>
          <span style={{ fontSize: "0.75rem", color: "var(--slate-500)", fontWeight: 600 }}>
            Tip: Choose the reason easiest for you to extend convincingly
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
                  border: isSelected ? "2px solid #0066cc" : "1.5px solid var(--border-subtle)",
                  background: isSelected ? "#ffffff" : "var(--slate-100)",
                  cursor: "pointer",
                  boxShadow: isSelected ? "0 4px 12px rgba(0, 102, 204, 0.12)" : "none",
                  transition: "all 0.15s ease",
                  minHeight: "56px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", width: "100%", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: isSelected ? "#0066cc" : "var(--slate-600)"
                    }}
                  >
                    Reason 0{idx + 1}
                  </span>
                  {isSelected && <CheckCircle2 size={14} color="#0066cc" />}
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
                <span className="apple-badge accent" style={{ background: "#dbeafe", color: "#1e40af" }}>
                  Component 1 • Main Reason
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
                Why This Occurs &amp; Its Impact
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
                <span className="apple-badge success">
                  Component 3 • Concrete Evidence
                </span>
              </div>
              <h4 style={{ fontSize: "1.04rem", fontWeight: 750, color: "var(--slate-900)", marginBottom: "8px" }}>
                Empirical Real-World Example
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
                <CircleCheck size={16} color="#059669" style={{ verticalAlign: "-3px", marginRight: "6px", display: "inline" }} />
                {currentReason.example}
              </div>
            </div>
          </div>

          {/* Right Column: Model Paragraph Synthesis & Lexical Mastery */}
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
                  <Award size={20} color="var(--apple-blue)" />
                  <h4 style={{ fontSize: "1.08rem", fontWeight: 800 }}>Complete Advantage Paragraph Model</h4>
                </div>
                <span className="apple-badge neutral" style={{ fontSize: "0.72rem" }}>
                  Reason 0{selectedReasonIdx + 1} Applied
                </span>
              </div>

              <div
                style={{
                  background: "var(--slate-50)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "14px",
                  padding: "18px",
                  fontSize: "0.98rem",
                  lineHeight: 1.7,
                  color: "var(--slate-800)",
                  fontStyle: "normal"
                }}
              >
                {currentReason.modelParagraph}
              </div>

              <div style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span className="apple-badge accent" style={{ fontSize: "0.74rem" }}>
                  ✦ 1 Main Reason
                </span>
                <span className="apple-badge accent" style={{ fontSize: "0.74rem" }}>
                  ✦ Causal Progression
                </span>
                <span className="apple-badge accent" style={{ fontSize: "0.74rem" }}>
                  ✦ Verifiable Evidence
                </span>
              </div>
            </div>

            {/* Examiner Assessment Card */}
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid var(--border-subtle)",
                borderRadius: "16px",
                padding: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              <h5 style={{ fontSize: "0.96rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                Examiner Assessment for Reason 0{selectedReasonIdx + 1}
              </h5>
              <p style={{ fontSize: "0.88rem", color: "var(--slate-600)", lineHeight: 1.5, margin: 0 }}>
                {currentReason.examinerNotes}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <CaveatsDeepDiveModal
        isOpen={isDeepDiveOpen}
        onClose={() => setIsDeepDiveOpen(false)}
      />
    </div>
  );
};
