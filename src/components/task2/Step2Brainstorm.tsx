import React, { useState } from "react";
import {
  FileText,
  Activity,
  HeartPulse,
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
    instruction: "Paraphrase the prompt + outline paired effects and solutions in a concise thesis"
  },
  {
    label: "Body Para 1",
    badgeBg: "rgba(37, 99, 235, 0.12)",
    badgeColor: "#1d4ed8",
    instruction: "1 main reason + supporting reasons + example [ Effect 1 + Solution + Example ]"
  },
  {
    label: "Body Para 2",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    badgeColor: "#047857",
    instruction: "1 main reason + supporting reasons + example [ Effect 2 + Solution + Example ]"
  },
  {
    label: "Conclusion",
    badgeBg: "rgba(100, 116, 139, 0.15)",
    badgeColor: "#334155",
    instruction: "Sum-up all the main reasons + restate answers to both questions"
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
          Step 02 / 09 • Task Reveal &amp; 4-Para Format
        </span>
        <h2 className="stage-title">Deconstruct the Effects &amp; Solutions Prompt</h2>
        <p className="stage-subtitle">
          Examine the prompt wording, establish your 2-part thesis, and reveal the required 4-paragraph essay architecture with 1 main reason, supporting reasons, and concrete example [Effect + Solution + Example] per body paragraph.
        </p>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Focus Timer: Plan your thesis and frame 1 main reason + supporting reasons + example [Effect + Solution + Example] for each body paragraph."
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
                  4 Paragraphs (Effects &amp; Solutions Architecture)
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
                  <Sparkles size={13} color="var(--apple-blue)" /> Tap to reveal the required 4-paragraph architecture
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
              <Activity size={18} />
              <h5 style={{ fontSize: "1rem", fontWeight: 700 }}>Prompt Direction — Two-Part / Direct Question (Effects &amp; Solutions)</h5>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
              The prompt contains two specific, interconnected inquiries: 1) <em>“What are the effects of this?”</em> and 2) <em>“What measures could be taken to solve them?”</em> You must address both questions with balanced, fully-developed paragraphs.
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
              <h5 style={{ fontSize: "1rem", fontWeight: 700 }}>Structuring Your Two-Question Argument</h5>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
              Use the proven paired architecture: address each major effect directly alongside its counter-solution:
              <br />
              • <strong>Body Para 1 [ Effect 1 + Solution + Example ]:</strong> Focus on <em>Healthcare Fiscal Strain &amp; Chronic Diseases</em> (Effect 1) paired with <em>Targeted Fiscal Sugar Levies</em> (Solution 1) + Empirical Example (e.g. Mexico soda tax / NHS data).
              <br />
              • <strong>Body Para 2 [ Effect 2 + Solution + Example ]:</strong> Focus on <em>Sedentary Workforce Productivity Losses</em> (Effect 2) paired with <em>Active Municipal Transit &amp; Workplace Mandates</em> (Solution 2) + Empirical Example (e.g. Copenhagen bicycle corridors).
              <br />
              • <strong>Synthesis:</strong> Directly coupling each crisis with its targeted countermeasure creates an impenetrable, logical argument.
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
                color: "#9333ea",
                marginBottom: "8px"
              }}
            >
              <HeartPulse size={18} />
              <h5 style={{ fontSize: "1rem", fontWeight: 700 }}>Paragraph Rule — 1 Main Reason + Support + Example</h5>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
              Never dump disjointed symptom lists. Maintain strict paragraph depth: in Body 1, elaborate on <strong>1 main reason</strong> (Effect 1: unsustainable healthcare expenditure caused by chronic non-communicable diseases), explain the causal chain, present the direct policy remedy (Solution 1: fiscal sugar levies), and anchor it with verified evidence. In Body 2, follow the <strong>identical format</strong> for Effect 2 (macroeconomic productivity loss from sedentary work habits) + Solution 2 (active municipal infrastructure).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
