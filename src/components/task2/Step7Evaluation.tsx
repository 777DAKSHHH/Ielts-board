import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, AlertTriangle, ArrowRight, Lightbulb, Copy, Check, Filter } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

export const Step7EvaluationT2: React.FC = () => {
  const [activeModelIdx, setActiveModelIdx] = useState(0);
  const [filterCategory, setFilterCategory] = useState<"all" | "standard" | "additional">("all");
  const [copied, setCopied] = useState(false);

  const body2 = TASK2_DATA.bodyParagraphs?.[1];
  const allDisadvantages = body2?.alternativeReasons || [];

  const filteredDisadvantages = allDisadvantages.filter((d) => {
    if (filterCategory === "all") return true;
    return d.category === filterCategory;
  });

  const activeDisadvantage = allDisadvantages[activeModelIdx] || allDisadvantages[0];

  const handleCopy = () => {
    const textToCopy = activeDisadvantage?.modelParagraph || "";
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="stage-card-wrapper">
      {/* Step Header */}
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px", background: "#fee2e2", color: "#991b1b" }}>
          Step 07 / 09 • Body Para 2 (5 Relatable Disadvantages &amp; Real-Life Angles)
        </span>
        <h2 className="stage-title">Body 2 Ideas: 5 Relatable Disadvantages with Concrete Examples</h2>
        <p className="stage-subtitle">
          Mandatory Format: <strong>Disadvantages Points [ 2 Main reasons + Example ]</strong>. Examine all 5 relatable drawbacks and real-life psychological angles below.
        </p>
      </div>

      {/* Strategy & Filter Bar */}
      <div
        style={{
          background: "#fef2f2",
          border: "1.5px solid #fecaca",
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
        {/* Category Tabs */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#991b1b", display: "flex", alignItems: "center", gap: "4px", marginRight: "4px" }}>
            <Filter size={13} /> View Drawbacks:
          </span>
          {[
            { id: "all", label: "All 5 Disadvantages" },
            { id: "standard", label: "Student Idea Bank (3)" },
            { id: "additional", label: "Real-Life Angles (2)" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterCategory(tab.id as any)}
              style={{
                border: "none",
                background: filterCategory === tab.id ? "#dc2626" : "#ffffff",
                color: filterCategory === tab.id ? "#ffffff" : "#991b1b",
                padding: "4px 10px",
                borderRadius: "7px",
                fontSize: "0.78rem",
                fontWeight: 750,
                cursor: "pointer",
                boxShadow: "var(--shadow-sm)",
                transition: "all 0.12s ease"
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <span className="apple-badge" style={{ background: "#fee2e2", color: "#991b1b", fontWeight: 750, fontSize: "0.78rem" }}>
          Disadvantages • Body 2
        </span>
      </div>

      {/* ALL 5 DISADVANTAGES DISPLAYED IN A CLEAN SMART BOARD GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: filterCategory === "all" ? "repeat(3, 1fr)" : "repeat(3, 1fr)",
          gap: "10px",
          marginBottom: "14px"
        }}
      >
        {filteredDisadvantages.map((disadv) => {
          const originalIdx = allDisadvantages.findIndex((d) => d.id === disadv.id);
          const isSelected = activeModelIdx === originalIdx;

          return (
            <div
              key={disadv.id}
              onClick={() => setActiveModelIdx(originalIdx)}
              style={{
                background: isSelected ? "#fff1f2" : "#ffffff",
                border: isSelected ? "2px solid #e11d48" : "1.5px solid var(--border-default)",
                borderRadius: "12px",
                padding: "12px 14px",
                boxShadow: isSelected ? "0 4px 12px rgba(225, 29, 72, 0.12)" : "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              {/* Card Header & Badges */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span
                  style={{
                    background: isSelected ? "#e11d48" : "#fee2e2",
                    color: isSelected ? "#ffffff" : "#991b1b",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    padding: "2px 7px",
                    borderRadius: "5px"
                  }}
                >
                  {disadv.badge}
                </span>

                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    padding: "1px 6px",
                    borderRadius: "4px",
                    background: disadv.category === "standard" ? "#fee2e2" : "#ffedd5",
                    color: disadv.category === "standard" ? "#991b1b" : "#c2410c"
                  }}
                >
                  {disadv.category === "standard" ? "Student Idea" : "Real-Life Angle"}
                </span>
              </div>

              {/* Core Idea (One-Liner) */}
              <div
                style={{
                  background: isSelected ? "#ffffff" : "#f8fafc",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                  padding: "8px 10px",
                  flex: 1
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}>
                  <Lightbulb size={12} color="#dc2626" />
                  <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "#dc2626", textTransform: "uppercase" }}>
                    Core Drawback
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "0.84rem", fontWeight: 650, color: "var(--slate-900)", lineHeight: 1.4 }}>
                  {disadv.mainReason}
                </p>
              </div>

              {/* Concrete Relatable Example (One-Liner) */}
              <div
                style={{
                  background: "#fff1f2",
                  border: "1px solid #fecdd3",
                  borderRadius: "8px",
                  padding: "8px 10px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}>
                  <AlertTriangle size={12} color="#be123c" />
                  <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "#be123c", textTransform: "uppercase" }}>
                    Concrete Example
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "#881337", lineHeight: 1.35, fontWeight: 550 }}>
                  {disadv.example}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* SYNTHESIS & BAND 9 MODEL ESSAY BOX */}
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
            <Award size={18} color="#dc2626" />
            <div>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                Band 9 Model Integration: {activeDisadvantage?.title}
              </h4>
              <p style={{ margin: "1px 0 0", fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Examiner demonstration of how to integrate this drawback and its concrete example into a unified Band 9 Body 2 paragraph:
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
            fontSize: "0.98rem",
            lineHeight: 1.6,
            color: "var(--slate-900)",
            fontWeight: 500
          }}
        >
          {activeDisadvantage?.modelParagraph}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "6px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="apple-badge warning" style={{ fontSize: "0.72rem", padding: "1px 6px", background: "#fee2e2", color: "#991b1b" }}>
              ✓ Topic Sentence
            </span>
            <span className="apple-badge warning" style={{ fontSize: "0.72rem", padding: "1px 6px", background: "#fee2e2", color: "#991b1b" }}>
              ✓ Relatable Real-World Example
            </span>
            <span className="apple-badge warning" style={{ fontSize: "0.72rem", padding: "1px 6px", background: "#fee2e2", color: "#991b1b" }}>
              ✓ Analytical Rigor
            </span>
          </div>
          <span style={{ fontSize: "0.78rem", color: "var(--slate-600)", fontWeight: 600 }}>
            💡 <em>{activeDisadvantage?.examinerNotes}</em>
          </span>
        </div>
      </div>
    </div>
  );
};
