import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Layers, Eye, EyeOff, Lock, Unlock } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";
import { TouchTimer } from "../common/TouchTimer";
import { tactilePress } from "../../motion";

interface Step2BrainstormProps {
  formattedTime: string;
  isRunning: boolean;
  isFinished: boolean;
  onTimerToggle: () => void;
  onTimerReset: () => void;
}

const ESSAY_FORMAT_STEPS = [
  {
    stepNum: "1",
    label: "INTRODUCTION",
    badgeBg: "rgba(147, 51, 234, 0.12)",
    badgeColor: "#7e22ce",
    formatRule: "Paraphrase the question + Thesis"
  },
  {
    stepNum: "2",
    label: "Body Paragraph 1",
    badgeBg: "rgba(37, 99, 235, 0.12)",
    badgeColor: "#1d4ed8",
    formatRule: "Advantages points [ 2 Main Reasons + Supporting reasons + Example ]"
  },
  {
    stepNum: "3",
    label: "Body Paragraph 2",
    badgeBg: "rgba(220, 38, 38, 0.12)",
    badgeColor: "#b91c1c",
    formatRule: "Disadvantages [ 2 Main reasons + Example ]"
  },
  {
    stepNum: "4",
    label: "CONCLUSION",
    badgeBg: "rgba(13, 148, 136, 0.12)",
    badgeColor: "#0f766e",
    formatRule: "Sum-up all the main reasons + Suggestion / Recommendation"
  }
];

export const Step2BrainstormT2: React.FC<Step2BrainstormProps> = ({
  formattedTime,
  isRunning,
  isFinished,
  onTimerToggle,
  onTimerReset
}) => {
  const [isFormatRevealed, setIsFormatRevealed] = useState(false);

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 02 / 09 • Task Reveal &amp; Essay Format
        </span>
        <h2 className="stage-title">Deconstruct the Advantages &amp; Disadvantages Architecture</h2>
        <p className="stage-subtitle">
          Essay Type: <strong>Advantages and Disadvantages</strong>. Master the mandatory 4-paragraph structure (Intro + Body 1 Advantages + Body 2 Disadvantages + Conclusion Recommendation).
        </p>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Focus Timer: 3 minutes to plan your 2 Main Advantages and 2 Main Disadvantages."
        />
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: Question Card */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "24px 26px",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <FileText size={22} color="var(--slate-800)" />
                <h4 style={{ fontSize: "1.15rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  IELTS Academic Writing Task 2
                </h4>
              </div>
              <span className="apple-badge accent" style={{ fontSize: "0.82rem" }}>
                {TASK2_DATA.taskType}
              </span>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1.5px solid var(--border-default)",
                borderRadius: "16px",
                padding: "24px 26px",
                fontSize: "1.3rem",
                fontWeight: 700,
                lineHeight: 1.7,
                boxShadow: "var(--shadow-sm)",
                color: "var(--slate-900)",
                flex: 1
              }}
            >
              {TASK2_DATA.questionText.split("\n\n").map((chunk, i) => (
                <p key={i} style={{ marginBottom: i === 0 ? "14px" : 0 }}>
                  {chunk}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Standard 4-Paragraph Essay Format Card (Blurred until Revealed) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "24px 26px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Layers size={22} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "1.15rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Mandatory Essay Format
                </h4>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {isFormatRevealed && (
                  <motion.button
                    whileTap={tactilePress}
                    onClick={() => setIsFormatRevealed(false)}
                    style={{
                      border: "1px solid var(--border-subtle)",
                      background: "#ffffff",
                      padding: "4px 10px",
                      borderRadius: "8px",
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      color: "var(--slate-600)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}
                  >
                    <EyeOff size={13} /> Hide Format
                  </motion.button>
                )}
                <span className="apple-badge neutral" style={{ fontSize: "0.82rem" }}>
                  4-Paragraph Structure
                </span>
              </div>
            </div>

            {/* Content Container (Blurred when !isFormatRevealed) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                flex: 1,
                filter: isFormatRevealed ? "none" : "blur(10px)",
                opacity: isFormatRevealed ? 1 : 0.25,
                transition: "filter 0.35s ease, opacity 0.35s ease",
                pointerEvents: isFormatRevealed ? "auto" : "none",
                userSelect: isFormatRevealed ? "auto" : "none"
              }}
            >
              {/* Prominent Essay Format Banner */}
              <div
                style={{
                  background: "#eff6ff",
                  border: "1.5px solid #bfdbfe",
                  borderRadius: "12px",
                  padding: "10px 16px",
                  fontSize: "1.02rem",
                  fontWeight: 800,
                  color: "#1d4ed8"
                }}
              >
                ⚡ Essay Structure: <strong>4-Paragraph Advantages &amp; Disadvantages Architecture</strong>
              </div>

              {/* Format Content Cards (Large, Bold, Clean) */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  flex: 1,
                  justifyContent: "space-between"
                }}
              >
                {ESSAY_FORMAT_STEPS.map((step) => (
                  <div
                    key={step.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      background: "#fff",
                      border: "1.5px solid var(--border-subtle)",
                      borderRadius: "14px",
                      padding: "16px 20px",
                      boxShadow: "var(--shadow-sm)"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 800,
                        padding: "6px 14px",
                        borderRadius: "8px",
                        background: step.badgeBg,
                        color: step.badgeColor,
                        minWidth: "165px",
                        textAlign: "center",
                        flexShrink: 0
                      }}
                    >
                      {step.label}
                    </span>
                    <div
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 800,
                        color: "var(--slate-900)",
                        letterSpacing: "0.01em"
                      }}
                    >
                      {step.formatRule}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reveal Overlay (Shown when !isFormatRevealed) */}
            {!isFormatRevealed && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  top: "60px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px",
                  background: "rgba(248, 250, 252, 0.4)",
                  zIndex: 10
                }}
              >
                <div
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid var(--border-default)",
                    borderRadius: "18px",
                    padding: "24px 28px",
                    maxWidth: "380px",
                    textAlign: "center",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px"
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(37, 99, 235, 0.1)",
                      color: "var(--apple-blue)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Lock size={24} />
                  </div>

                  <div>
                    <h4 style={{ fontSize: "1.12rem", fontWeight: 800, color: "var(--slate-900)", margin: 0 }}>
                      Format Hidden
                    </h4>
                    <p style={{ fontSize: "0.86rem", color: "var(--slate-500)", margin: "4px 0 0", lineHeight: 1.45 }}>
                      Ask students to recall the Advantages &amp; Disadvantages essay structure, then click to reveal.
                    </p>
                  </div>

                  <motion.button
                    whileTap={tactilePress}
                    onClick={() => setIsFormatRevealed(true)}
                    className="apple-touch-btn primary"
                    style={{
                      minHeight: "44px",
                      padding: "0 20px",
                      gap: "8px",
                      fontSize: "0.95rem",
                      fontWeight: 750,
                      width: "100%",
                      borderRadius: "12px",
                      marginTop: "6px"
                    }}
                  >
                    <Eye size={17} /> <span>Reveal Essay Format</span>
                  </motion.button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
