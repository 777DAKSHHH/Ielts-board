import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, AlertTriangle, ArrowRight, Lightbulb, Copy, Check, Filter, Layers, CircleCheck } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

export const Step7EvaluationT2: React.FC = () => {
  const [activeModelIdx, setActiveModelIdx] = useState(1);
  const [perspective, setPerspective] = useState<"negative" | "positive">("negative");
  const [copied, setCopied] = useState(false);

  const body1Negative = TASK2_DATA.bodyParagraphs?.[0]?.alternativeReasons || [];
  const body2Positive = TASK2_DATA.bodyParagraphs?.[1]?.alternativeReasons || [];

  const currentReasons = perspective === "negative" ? body1Negative : body2Positive;
  const activeReason = currentReasons[activeModelIdx] || currentReasons[0];

  const handleCopy = () => {
    const textToCopy = activeReason?.modelParagraph || "";
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="stage-card-wrapper">
      {/* Step Header */}
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px", background: "#fee2e2", color: "#991b1b" }}>
          Step 07 / 09 • Body Para 2 (1 Main Reason + Supporting Reasoning + Example)
        </span>
        <h2 className="stage-title">Body 2 Ideas: Social Communication, Sleep &amp; Cognitive Focus</h2>
        <p className="stage-subtitle">
          Mandatory Format: <strong>Opinion Side — 1 Main Reason + Supporting Reasoning + Example</strong>. Select your second decisive supporting argument from the one-liners below.
        </p>
      </div>

      {/* Perspective Toggles Bar */}
      <div
        style={{
          background: perspective === "negative" ? "#fef2f2" : "#f0fdf4",
          border: perspective === "negative" ? "1.5px solid #fecaca" : "1.5px solid #bbf7d0",
          borderRadius: "14px",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "12px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "0.82rem", fontWeight: 800, color: perspective === "negative" ? "#991b1b" : "#166534", display: "flex", alignItems: "center", gap: "4px" }}>
            <Layers size={14} /> Active Perspective:
          </span>
          <button
            type="button"
            onClick={() => {
              setPerspective("negative");
              setActiveModelIdx(1);
            }}
            style={{
              border: perspective === "negative" ? "1.5px solid #dc2626" : "1px solid #e2e8f0",
              background: perspective === "negative" ? "#dc2626" : "#ffffff",
              color: perspective === "negative" ? "#ffffff" : "#475569",
              padding: "4px 12px",
              borderRadius: "7px",
              fontSize: "0.78rem",
              fontWeight: 800,
              cursor: "pointer",
              transition: "all 0.12s ease"
            }}
          >
            Opinion Side: Negative Development (5 Points)
          </button>
          <button
            type="button"
            onClick={() => {
              setPerspective("positive");
              setActiveModelIdx(0);
            }}
            style={{
              border: perspective === "positive" ? "1.5px solid #16a34a" : "1px solid #e2e8f0",
              background: perspective === "positive" ? "#16a34a" : "#ffffff",
              color: perspective === "positive" ? "#ffffff" : "#475569",
              padding: "4px 12px",
              borderRadius: "7px",
              fontSize: "0.78rem",
              fontWeight: 800,
              cursor: "pointer",
              transition: "all 0.12s ease"
            }}
          >
            Counter-Perspective: Positive Development (5 Points)
          </button>
        </div>

        <span style={{ fontSize: "0.76rem", color: "#64748b", fontWeight: 700 }}>
          {perspective === "negative" ? "Recommended: Option 2 (Social Skills)" : "Positive Contrast"}
        </span>
      </div>

      {/* ALL 5 ONE-LINER POINTS IN A HIGH-READABILITY SMART BOARD GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "12px",
          marginBottom: "14px"
        }}
      >
        {currentReasons.map((reason, idx) => {
          const isSelected = activeModelIdx === idx;

          return (
            <div
              key={reason.id}
              onClick={() => setActiveModelIdx(idx)}
              style={{
                background: isSelected ? (perspective === "negative" ? "#fff5f5" : "#f0fdf4") : "#ffffff",
                border: isSelected
                  ? perspective === "negative" ? "2px solid #dc2626" : "2px solid #16a34a"
                  : "1.5px solid var(--border-default)",
                borderRadius: "14px",
                padding: "14px",
                boxShadow: isSelected ? "0 4px 12px rgba(0, 0, 0, 0.08)" : "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              {/* Card Header & Badge */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span
                  style={{
                    background: isSelected
                      ? perspective === "negative" ? "#dc2626" : "#16a34a"
                      : perspective === "negative" ? "#fee2e2" : "#dcfce7",
                    color: isSelected ? "#ffffff" : perspective === "negative" ? "#991b1b" : "#166534",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    padding: "3px 8px",
                    borderRadius: "6px"
                  }}
                >
                  {reason.badge}
                </span>

                <span style={{ fontSize: "0.72rem", color: "#64748b", fontWeight: 700 }}>
                  Option {idx + 1}
                </span>
              </div>

              {/* 1. Main Reason (One-Liner) */}
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "8px 10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}>
                  <Lightbulb size={13} color="#2563eb" />
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#1e40af", textTransform: "uppercase" }}>
                    1. Main Reason (One-Liner)
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 700, color: "#0f172a", lineHeight: 1.4 }}>
                  {reason.mainReason}
                </p>
              </div>

              {/* 2. Supporting Reasoning (One-Liner) */}
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "8px 10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}>
                  <ArrowRight size={13} color="#059669" />
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#059669", textTransform: "uppercase" }}>
                    2. Supporting Reasoning (One-Liner)
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "0.82rem", color: "#334155", lineHeight: 1.4 }}>
                  {reason.supportingReasons}
                </p>
              </div>

              {/* 3. Concrete Example (One-Liner) */}
              <div
                style={{
                  background: perspective === "negative" ? "#fff1f2" : "#f0fdf4",
                  border: perspective === "negative" ? "1px solid #fecdd3" : "1px solid #bbf7d0",
                  borderRadius: "8px",
                  padding: "8px 10px",
                  marginTop: "auto"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}>
                  <CircleCheck size={13} color={perspective === "negative" ? "#e11d48" : "#16a34a"} />
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: perspective === "negative" ? "#9f1239" : "#166534", textTransform: "uppercase" }}>
                    3. Concrete Example (One-Liner)
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "0.82rem", color: perspective === "negative" ? "#881337" : "#14532d", lineHeight: 1.4, fontWeight: 600 }}>
                  {reason.example}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* SYNTHESIS & BAND 9 MODEL PARAGRAPH BOX */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-default)",
          borderRadius: "16px",
          padding: "16px 18px",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Award size={18} color="var(--apple-blue)" />
            <div>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                Band 9 Paragraph Integration: {activeReason?.title}
              </h4>
              <p style={{ margin: "1px 0 0", fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Format check: 1 Main Reason (Topic Sentence) + Supporting Reasoning + Concrete Example
              </p>
            </div>
          </div>

          <button
            onClick={handleCopy}
            style={{
              border: "1px solid var(--border-subtle)",
              background: copied ? "#dcfce7" : "#ffffff",
              padding: "4px 10px",
              borderRadius: "8px",
              fontSize: "0.76rem",
              fontWeight: 700,
              color: copied ? "#166534" : "var(--slate-700)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px"
            }}
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            <span>{copied ? "Copied" : "Copy Model Paragraph"}</span>
          </button>
        </div>

        {/* Model Paragraph Text */}
        <div
          style={{
            background: "#f8fafc",
            border: "1.5px solid #cbd5e1",
            borderRadius: "10px",
            padding: "12px 16px",
            fontSize: "0.96rem",
            lineHeight: 1.6,
            color: "var(--slate-900)",
            fontWeight: 500
          }}
        >
          {activeReason?.modelParagraph}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "6px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="apple-badge accent" style={{ fontSize: "0.72rem", padding: "1px 6px" }}>
              ✓ 1 Main Reason
            </span>
            <span className="apple-badge accent" style={{ fontSize: "0.72rem", padding: "1px 6px" }}>
              ✓ Supporting Reasoning
            </span>
            <span className="apple-badge accent" style={{ fontSize: "0.72rem", padding: "1px 6px" }}>
              ✓ Concrete Example
            </span>
          </div>
          <span style={{ fontSize: "0.78rem", color: "var(--slate-600)", fontWeight: 600 }}>
            💡 <em>{activeReason?.examinerNotes}</em>
          </span>
        </div>
      </div>
    </div>
  );
};
