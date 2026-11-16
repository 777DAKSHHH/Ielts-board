import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, BookOpen, Scale } from "lucide-react";
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
        <h2 className="stage-title">IELTS Writing Task 2 — Corporate Social Responsibility</h2>
        <p className="stage-subtitle">
          Examine the prompt, identify the opinion essay task, and master the mandatory 5-paragraph opinion architecture with a balanced concession.
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
                <Briefcase size={24} />
              </div>
              <div>
                <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#2563eb", textTransform: "uppercase" }}>
                  Task 2 Essay Type
                </span>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                  Opinion Essay (Agree or Disagree)
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
              <Scale size={14} /> 5-Paragraph Architecture
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
              “Apart from making money, businesses also have social responsibility.”
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.05rem", fontWeight: 750, color: "#2563eb" }}>
                <span>•</span> <span>To what extent do you agree or disagree?</span>
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
                Mandatory Essay Format Architecture
              </strong>
            </div>
            <ul style={{ margin: "4px 0 0", paddingLeft: "20px", fontSize: "0.9rem", color: "#1e293b", lineHeight: 1.65 }}>
              <li><strong>INTRO:</strong> Paraphrase the question + opinion</li>
              <li><strong>BODY PARA 1 &amp; 2:</strong> On your opinion side (e.g. Environmental Stewardship &amp; Worker/Community Welfare)</li>
              <li><strong>BODY PARA 3:</strong> On your non-opinion side (e.g. Commercial Solvency, Job Creation &amp; Tax Contributions)</li>
              <li><strong>CONCLUSION:</strong> Sum-up all the main points + restate your opinion</li>
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
