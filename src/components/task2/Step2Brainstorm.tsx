import React, { useState } from "react";
import {
  FileText,
  Activity,
  Scale,
  Eye,
  EyeOff,
  Layers,
  Sparkles,
  ShoppingBag
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
    instruction: "Paraphrase prompt + state largely positive opinion [Trend: later marriage/parenthood • Reasons: financial independence + emotional maturity]"
  },
  {
    label: "Body Para 1",
    badgeBg: "rgba(37, 99, 235, 0.12)",
    badgeColor: "#1d4ed8",
    instruction: "Strong side (Advantage 1): Financial Independence [establish careers, build savings, secure housing • e.g. affording mortgage & childcare]"
  },
  {
    label: "Body Para 2",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    badgeColor: "#047857",
    instruction: "Strong side (Advantage 2): Emotional Maturity [self-awareness, managing disagreements • e.g. resolving childcare disputes constructively]"
  },
  {
    label: "Body Para 3",
    badgeBg: "rgba(220, 38, 38, 0.12)",
    badgeColor: "#dc2626",
    instruction: "Non-opinion counterpoint: Acknowledge biological fertility concerns & practical hurdles [fertility decline past 35 • e.g. conception challenges]"
  },
  {
    label: "Conclusion",
    badgeBg: "rgba(100, 116, 139, 0.15)",
    badgeColor: "#334155",
    instruction: "Restate position + synthesize balance [benefits of maturity and preparedness generally outweigh practical/biological challenges]"
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
          Step 02 / 09 • Task Reveal &amp; 5-Para Format
        </span>
        <h2 className="stage-title">Deconstruct the Positive or Negative Development Prompt</h2>
        <p className="stage-subtitle">
          Recommended position: <strong>A largely positive development</strong>. Examine the prompt wording, establish your position, and reveal the five-minute planning architecture.
        </p>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Focus Timer: Plan your thesis: build around financial preparedness and emotional maturity, then acknowledge reproductive constraints."
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
                border: "1.5px solid var(--border-default)",
                borderRadius: "16px",
                padding: "20px 24px",
                fontSize: "1.24rem",
                fontWeight: 700,
                lineHeight: 1.65,
                boxShadow: "var(--shadow-sm)",
                color: "var(--slate-900)"
              }}
            >
              {TASK2_DATA.questionText.split("\n\n").map((chunk, i) => (
                <p key={i} style={{ marginBottom: i === 0 ? "12px" : 0 }}>
                  {chunk}
                </p>
              ))}
            </div>
            <div
              style={{
                marginTop: "14px",
                padding: "12px 16px",
                background: "#eff6ff",
                border: "1.5px solid #bfdbfe",
                borderRadius: "12px",
                fontSize: "1rem",
                color: "#1e3a8a",
                lineHeight: 1.55
              }}
            >
              <strong style={{ fontSize: "1.05rem" }}>Recommended Position:</strong> {TASK2_DATA.recommendedPosition}
              <div style={{ marginTop: "6px", color: "var(--slate-800)", fontSize: "0.96rem", lineHeight: 1.5 }}>
                {TASK2_DATA.strongestArgument}
              </div>
            </div>
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
                  5 Paragraphs (3 Body Paragraphs)
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
                      minWidth: "90px",
                      textAlign: "center",
                      flexShrink: 0
                    }}
                  >
                    {step.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.85rem",
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

            {/* Opaque Reveal Trigger Curtain */}
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
                  background: "#f8fafc",
                  border: "1px dashed var(--border-default)",
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
                  <Sparkles size={13} color="var(--apple-blue)" /> Tap to reveal the required 5-paragraph (3 Body Paras) architecture
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: 5-Minute Planning Map & Teaching Guidance */}
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
              <Activity size={18} />
              <h5 style={{ fontSize: "1.12rem", fontWeight: 750 }}>Smart Board — Five-Minute Planning Map</h5>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "10px" }}>
              <div style={{ background: "#f0fdf4", border: "1.5px solid #86efac", borderRadius: "12px", padding: "12px 14px" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#166534" }}>🟢 POSITIVE</span>
                <ul style={{ margin: "6px 0 0", paddingLeft: "18px", fontSize: "0.94rem", color: "#14532d", lineHeight: 1.55 }}>
                  <li>Financial independence → savings, housing, childcare</li>
                  <li>Emotional maturity → better conflict resolution</li>
                  <li>Informed decisions → compatible partners, planned families</li>
                </ul>
              </div>
              <div style={{ background: "#fef2f2", border: "1.5px solid #fca5a5", borderRadius: "12px", padding: "12px 14px" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#991b1b" }}>🔴 NEGATIVE</span>
                <ul style={{ margin: "6px 0 0", paddingLeft: "18px", fontSize: "0.94rem", color: "#7f1d1d", lineHeight: 1.55 }}>
                  <li>Fertility concerns → possible difficulty conceiving</li>
                  <li>Later responsibilities → childcare overlaps retirement</li>
                  <li>Social pressure → criticism for marrying later</li>
                </ul>
              </div>
            </div>
            <div style={{ marginTop: "12px", fontSize: "0.98rem", color: "var(--slate-800)", lineHeight: 1.55, background: "var(--slate-50)", padding: "12px 14px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
              <strong style={{ color: "var(--slate-900)" }}>Essay Roadmap:</strong> <em>Body 1:</em> Financial security + emotional maturity • <em>Body 2/3:</em> Acknowledge fertility concerns, but explain why the benefits generally outweigh them.
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "20px 22px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#9333ea",
                marginBottom: "8px"
              }}
            >
              <Scale size={18} />
              <h5 style={{ fontSize: "1.12rem", fontWeight: 750 }}>Teaching Recommendation &amp; Defensible Position</h5>
            </div>
            <p style={{ fontSize: "1rem", color: "var(--slate-800)", lineHeight: 1.6, margin: 0 }}>
              {TASK2_DATA.fiveMinutePlanningMap?.teachingRecommendation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
