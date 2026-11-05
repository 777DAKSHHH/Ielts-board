import React from "react";
import { motion } from "framer-motion";
import { Rocket, ArrowRight, BookOpen, AlertTriangle } from "lucide-react";
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
        <h2 className="stage-title">IELTS Writing Task 2 — Satellite Launches &amp; Space Debris</h2>
        <p className="stage-subtitle">
          Examine the prompt, identify the two direct question tasks (Causes &amp; Measures), and review the mandatory essay architecture.
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
                  background: "#1e3a8a",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Rocket size={24} />
              </div>
              <div>
                <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#2563eb", textTransform: "uppercase" }}>
                  Task 2 Essay Type
                </span>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                  Causes &amp; Solutions Architecture
                </h4>
              </div>
            </div>

            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 750,
                background: "#fef2f2",
                color: "#991b1b",
                border: "1px solid #fecaca",
                padding: "4px 10px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "5px"
              }}
            >
              <AlertTriangle size={14} /> Two-Part Prompt
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
            <p style={{ margin: 0, fontSize: "1.2rem", fontWeight: 750, color: "#0f172a", lineHeight: 1.5 }}>
              “The increasing frequency of the satellite launches &amp; space debris is becoming a threat to the Earth.”
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.02rem", fontWeight: 700, color: "#2563eb" }}>
                <span>•</span> <span>What are the main causes?</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.02rem", fontWeight: 700, color: "#059669" }}>
                <span>•</span> <span>What measures can be taken to address this?</span>
              </div>
            </div>
          </div>

          {/* Format Panel Overview */}
          <div
            style={{
              background: "#eff6ff",
              border: "1.5px solid #bfdbfe",
              borderRadius: "16px",
              padding: "18px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <BookOpen size={16} color="#1d4ed8" />
              <strong style={{ fontSize: "0.92rem", color: "#1e3a8a", textTransform: "uppercase" }}>
                Mandatory Format Architecture
              </strong>
            </div>
            <ul style={{ margin: "4px 0 0", paddingLeft: "20px", fontSize: "0.88rem", color: "#1e293b", lineHeight: 1.6 }}>
              <li><strong>INTRODUCTION:</strong> Paraphrase the question + Thesis</li>
              <li><strong>BODY PARA 1:</strong> Cause 1 + Solution 1 + Example</li>
              <li><strong>BODY PARA 2:</strong> Cause 2 + Solution 2 + Example</li>
              <li><strong>CONCLUSION:</strong> Sum-up all the main causes, solutions + Suggestion / Recommendation</li>
            </ul>
          </div>

          {/* Advance Button */}
          <motion.button
            whileTap={tactilePress}
            onClick={onUnlockBypass}
            className="apple-touch-btn primary"
            style={{
              minHeight: "50px",
              padding: "0 28px",
              gap: "10px",
              fontSize: "1.02rem",
              fontWeight: 750,
              width: "100%",
              borderRadius: "14px",
              boxShadow: "0 8px 20px -4px rgba(37, 99, 235, 0.3)",
              cursor: "pointer"
            }}
          >
            <span>Proceed to Step 2: Format &amp; Brainstorm</span>
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};
