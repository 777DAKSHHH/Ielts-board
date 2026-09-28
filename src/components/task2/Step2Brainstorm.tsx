import React, { useState } from "react";
import {
  FileText,
  Building2,
  TrendingDown,
  Scale,
  Eye,
  EyeOff,
  Layers,
  Sparkles
} from "lucide-react";
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
    label: "Introduction",
    badgeBg: "rgba(147, 51, 234, 0.12)",
    badgeColor: "#7e22ce",
    instruction: "Paraphrase the question + opinion on either side"
  },
  {
    label: "Body Para 1",
    badgeBg: "rgba(37, 99, 235, 0.12)",
    badgeColor: "#1d4ed8",
    instruction: "Write on view 1 (Why government needs high taxes for roads & schools)"
  },
  {
    label: "Body Para 2",
    badgeBg: "rgba(220, 38, 38, 0.12)",
    badgeColor: "#b91c1c",
    instruction: "Write on view 2 (Why high taxes are a bad thing)"
  },
  {
    label: "Body Para 3",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    badgeColor: "#047857",
    instruction: "Write on your opinion (Your reasoned stance & balanced synthesis)"
  },
  {
    label: "Conclusion",
    badgeBg: "rgba(100, 116, 139, 0.15)",
    badgeColor: "#334155",
    instruction: "Sum-up the main reasons + restate opinion"
  }
];

export const Step2BrainstormT2: React.FC<Step2BrainstormProps> = ({
  formattedTime,
  isRunning,
  isFinished,
  onTimerToggle,
  onTimerReset
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 02 / 09 • Task Reveal & Analysis
        </span>
        <h2 className="stage-title">Deconstruct the Discussion Prompt</h2>
        <p className="stage-subtitle">
          Students have made their predictions. Now expose the exact exam wording, analyze both views, and reveal the required 5-paragraph structure.
        </p>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Spend a short planning window identifying what each viewpoint requires before writing."
        />
      </div>

      <div className="stage-grid-2col">
        {/* Left Column: Question Card + Revealable Essay Format Card */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Main Task Prompt */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "22px 24px"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "14px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <FileText size={20} color="var(--slate-800)" />
                <h4 style={{ fontSize: "1.08rem", fontWeight: 700 }}>IELTS Academic Writing Task 2</h4>
              </div>
              <span className="apple-badge accent">{TASK2_DATA.taskType}</span>
            </div>
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--border-subtle)",
                borderRadius: "14px",
                padding: "18px 20px",
                fontSize: "1.12rem",
                fontWeight: 650,
                lineHeight: 1.6,
                boxShadow: "var(--shadow-sm)",
                color: "var(--slate-900)"
              }}
            >
              {TASK2_DATA.questionText.split("\n\n").map((chunk, i) => (
                <p key={i} style={{ marginBottom: i === 0 ? "10px" : 0 }}>
                  {chunk}
                </p>
              ))}
            </div>
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--slate-500)",
                fontStyle: "italic",
                marginTop: "10px"
              }}
            >
              * Write at least 250 words. Spend approximately 40 minutes on this task.
            </p>
          </div>

          {/* Interactive Blur/Reveal Essay Format Component */}
          <div
            style={{
              background: "linear-gradient(145deg, #ffffff 0%, var(--slate-50) 100%)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "18px 20px",
              boxShadow: "var(--shadow-sm)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Layers size={18} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "0.98rem", fontWeight: 750, color: "var(--slate-900)" }}>
                  Exact Essay Writing Format
                </h4>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="apple-badge neutral" style={{ fontSize: "0.74rem" }}>
                  5 Paragraphs
                </span>
                {isRevealed && (
                  <button
                    onClick={() => setIsRevealed(false)}
                    className="apple-touch-btn secondary"
                    style={{
                      minHeight: "26px",
                      padding: "3px 8px",
                      fontSize: "0.75rem",
                      gap: "4px"
                    }}
                  >
                    <EyeOff size={13} />
                    <span>Blur</span>
                  </button>
                )}
              </div>
            </div>

            {/* Format Content (Blurred until tapped) */}
            <div
              style={{
                filter: isRevealed ? "none" : "blur(7px)",
                opacity: isRevealed ? 1 : 0.28,
                transition: "filter 0.35s ease, opacity 0.35s ease",
                pointerEvents: isRevealed ? "auto" : "none",
                userSelect: isRevealed ? "auto" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "7px"
              }}
            >
              {ESSAY_FORMAT_STEPS.map((step) => (
                <div
                  key={step.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#fff",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "10px",
                    padding: "7px 12px",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.03)"
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 750,
                      padding: "3px 8px",
                      borderRadius: "6px",
                      background: step.badgeBg,
                      color: step.badgeColor,
                      minWidth: "86px",
                      textAlign: "center",
                      flexShrink: 0
                    }}
                  >
                    {step.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.86rem",
                      color: "var(--slate-700)",
                      lineHeight: 1.4,
                      fontWeight: 500
                    }}
                  >
                    {step.instruction}
                  </span>
                </div>
              ))}
            </div>

            {/* Blur Overlay Trigger */}
            {!isRevealed && (
              <div
                onClick={() => setIsRevealed(true)}
                style={{
                  position: "absolute",
                  inset: 0,
                  top: "42px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: "rgba(255, 255, 255, 0.45)",
                  backdropFilter: "blur(2px)",
                  cursor: "pointer",
                  borderRadius: "0 0 18px 18px",
                  zIndex: 2
                }}
              >
                <button
                  type="button"
                  className="apple-touch-btn primary"
                  style={{
                    padding: "9px 20px",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    gap: "8px",
                    boxShadow: "0 4px 14px rgba(0, 113, 227, 0.3)"
                  }}
                >
                  <Eye size={17} />
                  <span>REVEAL ESSAY FORMAT</span>
                </button>
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--slate-600)",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px"
                  }}
                >
                  <Sparkles size={13} color="var(--apple-blue)" /> Tap to reveal the required paragraph architecture
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Key Breakdown Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              background: "#fff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "18px 20px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--apple-blue)",
                marginBottom: "8px"
              }}
            >
              <Building2 size={18} />
              <h5 style={{ fontSize: "1rem", fontWeight: 700 }}>View 1 — Necessary Public Services</h5>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
              Students must analyze the case for high taxation: funding essential, non-excludable infrastructure (highways, railways, free state schools, healthcare) that private enterprise cannot equitably provide.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "18px 20px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--apple-red)",
                marginBottom: "8px"
              }}
            >
              <TrendingDown size={18} />
              <h5 style={{ fontSize: "1rem", fontWeight: 700 }}>View 2 — High Taxes as Detrimental</h5>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
              Students must deconstruct why high taxes are viewed negatively: diminishing work motivation, shrinking household disposable income, triggering brain drain, and the frustration of bureaucratic waste.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "18px 20px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#059669",
                marginBottom: "8px"
              }}
            >
              <Scale size={18} />
              <h5 style={{ fontSize: "1rem", fontWeight: 700 }}>Requirement — Give Your Opinion</h5>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
              The prompt mandates "give your opinion". In this format, students present their independent opinion in dedicated Body Paragraph 3, while also stating it in the introduction and restating it in the conclusion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
