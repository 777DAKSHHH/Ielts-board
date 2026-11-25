import React from "react";
import { motion } from "framer-motion";
import { Trash2, ArrowRight, BookOpen, Scale, AlertTriangle, ShieldCheck } from "lucide-react";
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
          Step 01 / 09 • Question Briefing &amp; Topic Overview
        </span>
        <h2 className="stage-title">IELTS Writing Task 2 — Problems and Solutions: Single-Use Products</h2>
        <p className="stage-subtitle">
          Examine the prompt, identify the Problems and Solutions essay task, and master the 4-paragraph analytical architecture.
        </p>
      </div>

      <div style={{ maxWidth: "860px", margin: "16px auto 0", width: "100%" }}>
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid var(--border-default)",
            borderRadius: "24px",
            padding: "32px 36px",
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            boxShadow: "var(--shadow-md)"
          }}
        >
          {/* Header Tag */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "#dc2626",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Trash2 size={24} />
              </div>
              <div>
                <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#dc2626", textTransform: "uppercase" }}>
                  Task 2 Essay Type
                </span>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                  Problems and Solutions Essay
                </h4>
              </div>
            </div>

            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 750,
                background: "#f0fdf4",
                color: "#166534",
                border: "1px solid #bbf7d0",
                padding: "4px 10px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "5px"
              }}
            >
              <ShieldCheck size={14} /> 4-Paragraph Problem &amp; Solution Architecture
            </span>
          </div>

          {/* Official Prompt Box */}
          <div
            style={{
              background: "#f8fafc",
              border: "2px solid #cbd5e1",
              borderRadius: "16px",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase" }}>
              Official Exam Prompt
            </span>
            <p style={{ margin: 0, fontSize: "1.18rem", fontWeight: 750, color: "#0f172a", lineHeight: 1.5 }}>
              “Today single use products are very common.”
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#dc2626", fontWeight: 700, fontSize: "0.95rem" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#dc2626" }} />
                <span>What are the problems caused by this?</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#16a34a", fontWeight: 700, fontSize: "0.95rem" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#16a34a" }} />
                <span>What could be the possible solutions?</span>
              </div>
            </div>
          </div>

          {/* Core Essay Architecture Breakdown */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div
              style={{
                background: "#fef2f2",
                border: "1px solid #fecaca",
                borderRadius: "14px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "6px"
              }}
            >
              <span style={{ fontSize: "0.74rem", fontWeight: 800, color: "#991b1b", textTransform: "uppercase" }}>
                Body Paragraph 1 • The Problems
              </span>
              <p style={{ margin: 0, fontSize: "0.88rem", color: "#7f1d1d", lineHeight: 1.45 }}>
                Examine landfill saturation and non-biodegradable persistence lasting centuries, alongside marine contamination and toxic microplastics entering aquatic trophic chains.
              </p>
            </div>

            <div
              style={{
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: "14px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "6px"
              }}
            >
              <span style={{ fontSize: "0.74rem", fontWeight: 800, color: "#166534", textTransform: "uppercase" }}>
                Body Paragraph 2 • The Solutions
              </span>
              <p style={{ margin: 0, fontSize: "0.88rem", color: "#14532d", lineHeight: 1.45 }}>
                Present concrete strategic solutions: statutory product bans, fiscal levies on disposables, subsidies for compostable seaweed/cornstarch packaging, and corporate Extended Producer Responsibility (EPR).
              </p>
            </div>
          </div>

          {/* Continue Action */}
          <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "8px" }}>
            <motion.button
              whileTap={tactilePress}
              onClick={onUnlockBypass}
              style={{
                background: "#0f172a",
                color: "#ffffff",
                border: "none",
                borderRadius: "12px",
                padding: "12px 24px",
                fontSize: "0.92rem",
                fontWeight: 750,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(15, 23, 42, 0.2)"
              }}
            >
              <span>Explore Task Question &amp; Format Panel</span>
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
