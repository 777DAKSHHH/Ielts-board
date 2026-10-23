import React from "react";
import { FileText, Layers } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";
import { TouchTimer } from "../common/TouchTimer";

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
    label: "Introduction",
    badgeBg: "rgba(147, 51, 234, 0.12)",
    badgeColor: "#7e22ce",
    formatRule: "Paraphrase the question + Opinion / Outline"
  },
  {
    stepNum: "2",
    label: "Body Paragraph 1",
    badgeBg: "rgba(37, 99, 235, 0.12)",
    badgeColor: "#1d4ed8",
    formatRule: "Cause 1 + Effect 1 + Example"
  },
  {
    stepNum: "3",
    label: "Body Paragraph 2",
    badgeBg: "rgba(220, 38, 38, 0.12)",
    badgeColor: "#dc2626",
    formatRule: "Cause 1 + Effect 1 + Example"
  },
  {
    stepNum: "4",
    label: "Conclusion",
    badgeBg: "rgba(100, 116, 139, 0.15)",
    badgeColor: "#334155",
    formatRule: "Sum-up all the main ideas + Restate opinion"
  }
];

export const Step2BrainstormT2: React.FC<Step2BrainstormProps> = ({
  formattedTime,
  isRunning,
  isFinished,
  onTimerToggle,
  onTimerReset
}) => {
  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 02 / 09 • Task Reveal &amp; Essay Format
        </span>
        <h2 className="stage-title">Deconstruct the 'Causes &amp; Effects' Prompt &amp; Architecture</h2>
        <p className="stage-subtitle">
          Direct Two-Part Question: <strong>Causes of Identity Theft + Effects on the Victims</strong>. Master the mandatory body paragraph format: <strong>Cause 1 + Effect 1 + Example</strong>.
        </p>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Focus Timer: 3 minutes to plan your two body paragraphs: Body 1 (Cause 1 + Effect 1 + Example) and Body 2 (Cause 1 + Effect 1 + Example)."
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

        {/* Right Column: Standard Cause & Effect Essay Format Card */}
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
              gap: "14px"
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
                  Standard Cause &amp; Effect Essay Format
                </h4>
              </div>

              <span className="apple-badge neutral" style={{ fontSize: "0.82rem" }}>
                4-Paragraph Structure
              </span>
            </div>

            {/* Prominent Body Paragraph Format Banner */}
            <div
              style={{
                background: "#f0fdf4",
                border: "1.5px solid #86efac",
                borderRadius: "12px",
                padding: "12px 18px",
                fontSize: "1.08rem",
                fontWeight: 800,
                color: "#166534"
              }}
            >
              ⚡ Body Paragraph Format: <strong>Cause 1 + Effect 1 + Example</strong>
            </div>

            {/* Format Content Cards (Large, Bold, Clean) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
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
                      minWidth: "155px",
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
        </div>
      </div>
    </div>
  );
};
