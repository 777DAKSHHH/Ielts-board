import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleCheck, Sparkles, Award, Lightbulb, ArrowRight, Copy, Check, Filter } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";
import { CaveatsDeepDiveModal } from "./CaveatsDeepDiveModal";
import { tactilePress } from "../../motion";

export const Step6ConsequencesT2: React.FC = () => {
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);
  const [activeModelIdx, setActiveModelIdx] = useState(0);
  const [filterCategory, setFilterCategory] = useState<"all" | "standard" | "additional">("all");
  const [copied, setCopied] = useState(false);

  const body1 = TASK2_DATA.bodyParagraphs?.[0];
  const allReasons = body1?.alternativeReasons || [];

  const filteredReasons = allReasons.filter((r) => {
    if (filterCategory === "all") return true;
    return r.category === filterCategory;
  });

  const activeReason = allReasons[activeModelIdx] || allReasons[0];

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
        <span className="apple-badge accent" style={{ marginBottom: "8px", background: "#dbeafe", color: "#1e40af" }}>
          Step 06 / 09 • Body Para 1 (6 Relatable Advantages &amp; Real-Life Angles)
        </span>
        <h2 className="stage-title">Body 1 Ideas: 6 Relatable Advantages with Concrete Examples</h2>
        <p className="stage-subtitle">
          Mandatory Format: <strong>Advantages Points [ 2 Main Reasons + Supporting reasons + Example ]</strong>. Explore all 6 relatable student ideas and additional real-life angles below.
        </p>
      </div>

      {/* Strategy & Filter Bar */}
      <div
        style={{
          background: "#eff6ff",
          border: "1.5px solid #bfdbfe",
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
          <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#1e40af", display: "flex", alignItems: "center", gap: "4px", marginRight: "4px" }}>
            <Filter size={13} /> View Ideas:
          </span>
          {[
            { id: "all", label: "All 6 Advantages" },
            { id: "standard", label: "Student Idea Bank (3)" },
            { id: "additional", label: "Real-Life Angles (3)" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterCategory(tab.id as any)}
              style={{
                border: "none",
                background: filterCategory === tab.id ? "#1d4ed8" : "#ffffff",
                color: filterCategory === tab.id ? "#ffffff" : "#1e40af",
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

        <motion.button
          whileTap={tactilePress}
          onClick={() => setIsDeepDiveOpen(true)}
          className="apple-touch-btn secondary"
          style={{
            minHeight: "32px",
            padding: "0 12px",
            fontSize: "0.78rem",
            fontWeight: 750,
            gap: "5px",
            color: "#1e40af",
            background: "#ffffff",
            border: "1.5px solid #bfdbfe",
            cursor: "pointer",
            borderRadius: "8px"
          }}
        >
          <Sparkles size={14} color="#2563eb" />
          <span>Faculty Deep Dive</span>
        </motion.button>
      </div>

      {/* ALL 6 ADVANTAGES DISPLAYED IN A CLEAN SMART BOARD GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: filterCategory === "all" ? "repeat(3, 1fr)" : "repeat(3, 1fr)",
          gap: "10px",
          marginBottom: "14px"
        }}
      >
        {filteredReasons.map((reason) => {
          const originalIdx = allReasons.findIndex((r) => r.id === reason.id);
          const isSelected = activeModelIdx === originalIdx;

          return (
            <div
              key={reason.id}
              onClick={() => setActiveModelIdx(originalIdx)}
              style={{
                background: isSelected ? "#eff6ff" : "#ffffff",
                border: isSelected ? "2px solid #2563eb" : "1.5px solid var(--border-default)",
                borderRadius: "12px",
                padding: "12px 14px",
                boxShadow: isSelected ? "0 4px 12px rgba(37, 99, 235, 0.12)" : "var(--shadow-sm)",
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
                    background: isSelected ? "#2563eb" : "#dbeafe",
                    color: isSelected ? "#ffffff" : "#1e40af",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    padding: "2px 7px",
                    borderRadius: "5px"
                  }}
                >
                  {reason.badge}
                </span>

                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    padding: "1px 6px",
                    borderRadius: "4px",
                    background: reason.category === "standard" ? "#eff6ff" : "#f3e8ff",
                    color: reason.category === "standard" ? "#1e40af" : "#7e22ce"
                  }}
                >
                  {reason.category === "standard" ? "Student Idea" : "Real-Life Angle"}
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
                  <Lightbulb size={12} color="var(--apple-blue)" />
                  <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "var(--apple-blue)", textTransform: "uppercase" }}>
                    Core Point
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "0.84rem", fontWeight: 650, color: "var(--slate-900)", lineHeight: 1.4 }}>
                  {reason.mainReason}
                </p>
              </div>

              {/* Concrete Relatable Example (One-Liner) */}
              <div
                style={{
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  borderRadius: "8px",
                  padding: "8px 10px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}>
                  <CircleCheck size={12} color="#16a34a" />
                  <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "#166534", textTransform: "uppercase" }}>
                    Concrete Example
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "#14532d", lineHeight: 1.35, fontWeight: 550 }}>
                  {reason.example}
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
            <Award size={18} color="var(--apple-blue)" />
            <div>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                Band 9 Model Integration: {activeReason?.title}
              </h4>
              <p style={{ margin: "1px 0 0", fontSize: "0.78rem", color: "var(--slate-600)" }}>
                Examiner demonstration of how to integrate this idea and its concrete example into a unified Band 9 Body 1 paragraph:
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
          {activeReason?.modelParagraph}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "6px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="apple-badge accent" style={{ fontSize: "0.72rem", padding: "1px 6px" }}>
              ✓ Topic Sentence
            </span>
            <span className="apple-badge accent" style={{ fontSize: "0.72rem", padding: "1px 6px" }}>
              ✓ Relatable Student Example
            </span>
            <span className="apple-badge accent" style={{ fontSize: "0.72rem", padding: "1px 6px" }}>
              ✓ Cohesive Development
            </span>
          </div>
          <span style={{ fontSize: "0.78rem", color: "var(--slate-600)", fontWeight: 600 }}>
            💡 <em>{activeReason?.examinerNotes}</em>
          </span>
        </div>
      </div>

      <CaveatsDeepDiveModal
        isOpen={isDeepDiveOpen}
        onClose={() => setIsDeepDiveOpen(false)}
      />
    </div>
  );
};
