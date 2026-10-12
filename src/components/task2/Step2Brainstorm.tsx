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
    instruction: "Paraphrase the prompt + state clear opinion (that advantages decisively outweigh disadvantages)"
  },
  {
    label: "Body Para 1",
    badgeBg: "rgba(37, 99, 235, 0.12)",
    badgeColor: "#1d4ed8",
    instruction: "Strong side opinion (Advantage 1): 1 main reason + supporting reasons + example [ Year-Round Fresh Produce in All Seasons ]"
  },
  {
    label: "Body Para 2",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    badgeColor: "#047857",
    instruction: "Strong side opinion (Advantage 2): 1 main reason + supporting reasons + example [ Lower Grocery Prices & Cultural Food Variety ]"
  },
  {
    label: "Body Para 3",
    badgeBg: "rgba(220, 38, 38, 0.12)",
    badgeColor: "#dc2626",
    instruction: "Non-opinion side (Counter/Disadvantage): 1 main reason + supporting reasons + example [ Threat to Local Farmers & Food Miles ]"
  },
  {
    label: "Conclusion",
    badgeBg: "rgba(100, 116, 139, 0.15)",
    badgeColor: "#334155",
    instruction: "Restate opinion + synthesize the balance (how benefits decisively outweigh the manageable drawbacks)"
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
        <h2 className="stage-title">Deconstruct the Advantages vs. Disadvantages Prompt</h2>
        <p className="stage-subtitle">
          Examine the prompt wording, establish your outweighing opinion thesis, and reveal the required 5-paragraph essay architecture with 3 Body Paragraphs [Strong Side 1 + Strong Side 2 + Non-Opinion Counterpoint].
        </p>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Focus Timer: Plan your outweighing thesis: Frame 1 main reason + supporting reasons + example for each of the 3 body paragraphs."
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
              <h5 style={{ fontSize: "1rem", fontWeight: 700 }}>Prompt Direction — Do Advantages Outweigh Disadvantages?</h5>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
              The essay question requires an explicit comparative judgment: <em>“Do the advantages of this development outweigh the disadvantages?”</em> You must take a clear side from the introduction, dedicate two body paragraphs to your strong-opinion side, and allocate one body paragraph to the non-opinion counter-perspective before synthesizing.
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
              <h5 style={{ fontSize: "1rem", fontWeight: 700 }}>The 3-Body-Paragraph Architecture</h5>
            </div>
            <div style={{ fontSize: "0.9rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
              • <strong>Body Para 1 (Strong Side Advantage 1):</strong> Focus on <em>Unprecedented Consumer Diversity &amp; Counter-Seasonal Food Security</em> [1 main reason + supporting reasons + example].
              <br />
              • <strong>Body Para 2 (Strong Side Advantage 2):</strong> Focus on <em>Reciprocal International Trade &amp; Domestic Producer Modernization</em> [1 main reason + supporting reasons + example].
              <br />
              • <strong>Body Para 3 (Non-Opinion Counterpoint):</strong> Focus on <em>Ecological Food Miles &amp; Pressure on Traditional Smallholders</em> [1 main reason + supporting reasons + example].
              <br />
              • <strong>Conclusion:</strong> Restate your stance, demonstrating why the nutritional and economic benefits decidedly eclipse the manageable environmental and farming drawbacks.
            </div>
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
              <ShoppingBag size={18} />
              <h5 style={{ fontSize: "1rem", fontWeight: 700 }}>Golden Paragraph Rule: 1 Main Reason + Support + Example</h5>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
              Avoid chaotic lists of disjointed points. Every single body paragraph must follow the rigorous rule: <strong>1 central, well-articulated reason</strong>, followed by <strong>substantiated causal explanations</strong>, and anchored by a <strong>concrete real-world example</strong> (e.g., Fairtrade cooperatives in Colombia, air-freighted South American berries, or Spanish greenhouse supply lines).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
