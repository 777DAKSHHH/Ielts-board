import React, { useState } from "react";
import {
  FileText,
  Activity,
  Scale,
  Eye,
  EyeOff,
  Layers,
  Sparkles,
  ShieldAlert
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
    stepNum: "1",
    label: "Introduction",
    badgeBg: "rgba(147, 51, 234, 0.12)",
    badgeColor: "#7e22ce",
    formatRule: "Paraphrase the question + Dual Outline / Thesis",
    instruction: "Paraphrase prompt (surge in identity theft & financial fraud) + State clear outline of both primary causes (digital banking, data breaches) and acute effects on victims (financial destitution, psychological trauma)."
  },
  {
    stepNum: "2",
    label: "Body Para 1 (Causes)",
    badgeBg: "rgba(37, 99, 235, 0.12)",
    badgeColor: "#1d4ed8",
    formatRule: "1 Main reason + Supporting reasons + Example",
    instruction: "Causes of Identity Theft: [1 Main reason: Rapid digitisation of financial transactions & organized cybercrime syndicates • Supporting reasons: Routine storage of credentials on cloud portals; corporate database breaches exfiltrating records to dark web marketplaces • Example: Large-scale breaches of major credit bureaus and consumer retail databases]."
  },
  {
    stepNum: "3",
    label: "Body Para 2 (Effects on Victims)",
    badgeBg: "rgba(220, 38, 38, 0.12)",
    badgeColor: "#dc2626",
    formatRule: "1 Main reason + Supporting reasons + Example",
    instruction: "Devastating Fallout for Victims: [1 Main reason: Catastrophic financial ruin compounded by ruined credit ratings and severe psychological trauma • Supporting reasons: Fraudulent loans default, blacklisting victims from housing and employment; grueling multi-year bureaucratic struggle to clear one's name • Example: Debt collectors hounding innocent citizens for tens of thousands in fraudulent debts]."
  },
  {
    stepNum: "4",
    label: "Conclusion",
    badgeBg: "rgba(100, 116, 139, 0.15)",
    badgeColor: "#334155",
    formatRule: "Sum-up all the main ideas + Restate thesis",
    instruction: "Synthesize both dimensions: The alarming rise of identity theft is fueled by digital vulnerabilities and corporate data leaks, leaving victims facing acute financial hardship and severe emotional trauma requiring years to resolve."
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
          Step 02 / 09 • Task Reveal &amp; Essay Format
        </span>
        <h2 className="stage-title">Deconstruct the 'Causes &amp; Effects' Prompt &amp; Architecture</h2>
        <p className="stage-subtitle">
          Direct Two-Part Question: <strong>Causes of Identity Theft + Effects on the Victims</strong>. Examine the question wording, master the mandatory body paragraph format: <strong>1 Main reason + Supporting reasons + Example</strong>.
        </p>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <TouchTimer
          formattedTime={formattedTime}
          isRunning={isRunning}
          isFinished={isFinished}
          onToggle={onTimerToggle}
          onReset={onTimerReset}
          instruction="Focus Timer: 3 minutes to plan your two body paragraphs: Body 1 on technological and systemic causes (digital banking, data breaches), and Body 2 on the financial and psychological devastation suffered by victims."
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
                color: "#1e40af",
                lineHeight: 1.55
              }}
            >
              <strong style={{ fontSize: "1.05rem" }}>Recommended Approach:</strong> {TASK2_DATA.recommendedPosition}
              <div style={{ marginTop: "4px", fontSize: "0.92rem", color: "#1e3a8a" }}>
                {TASK2_DATA.strongestArgument}
              </div>
            </div>
          </div>

          {/* Revealable Essay Format Card */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "16px 20px",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Layers size={17} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "0.95rem", fontWeight: 750, color: "var(--slate-900)", margin: 0 }}>
                  Standard Cause &amp; Effect Essay Format
                </h4>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="apple-badge neutral" style={{ fontSize: "0.72rem" }}>
                  4-Paragraph Structure
                </span>
                {isRevealed && (
                  <button
                    type="button"
                    onClick={() => setIsRevealed(false)}
                    className="apple-touch-btn secondary"
                    style={{
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

            {/* Prominent Body Paragraph Golden Rule Callout */}
            <div
              style={{
                background: "#f0fdf4",
                border: "1.5px solid #bbf7d0",
                borderRadius: "10px",
                padding: "8px 14px",
                marginBottom: "10px",
                fontSize: "0.88rem",
                fontWeight: 750,
                color: "#166534"
              }}
            >
              ⚡ Body Paragraph Rule: <strong>1 Main reason + Supporting reasons + Example</strong>
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
                    alignItems: "flex-start",
                    gap: "10px",
                    background: "#fff",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "10px",
                    padding: "8px 12px",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.03)"
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      padding: "3px 8px",
                      borderRadius: "6px",
                      background: step.badgeBg,
                      color: step.badgeColor,
                      minWidth: "115px",
                      textAlign: "center",
                      flexShrink: 0
                    }}
                  >
                    {step.label}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.82rem", fontWeight: 750, color: "var(--slate-900)", marginBottom: "2px" }}>
                      {step.formatRule}
                    </div>
                    <div
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--slate-600)",
                        lineHeight: 1.4,
                        fontWeight: 500
                      }}
                    >
                      {step.instruction}
                    </div>
                  </div>
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
                  <Sparkles size={13} color="var(--apple-blue)" /> Tap to reveal the required Cause &amp; Effect architecture
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
              <div style={{ background: "#f0f9ff", border: "1.5px solid #bae6fd", borderRadius: "12px", padding: "12px 14px" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0369a1" }}>⚡ CAUSES (WHY IT'S RISING)</span>
                <ul style={{ margin: "6px 0 0", paddingLeft: "18px", fontSize: "0.94rem", color: "#0c4a6e", lineHeight: 1.55 }}>
                  <li>Ubiquitous digital banking → routine entry of passwords &amp; PINs</li>
                  <li>Corporate database breaches → mass leaks of citizen dossiers</li>
                  <li>Sophisticated cybercrime tools → automated phishing &amp; spyware</li>
                </ul>
              </div>
              <div style={{ background: "#fef2f2", border: "1.5px solid #fca5a5", borderRadius: "12px", padding: "12px 14px" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#991b1b" }}>⚠️ EFFECTS ON VICTIMS</span>
                <ul style={{ margin: "6px 0 0", paddingLeft: "18px", fontSize: "0.94rem", color: "#7f1d1d", lineHeight: 1.55 }}>
                  <li>Immediate financial ruin → accounts siphoned, fraudulent loans taken</li>
                  <li>Decimated credit scores → blacklisted from mortgages &amp; rentals</li>
                  <li>Severe psychological trauma → chronic anxiety, paranoia &amp; legal battles</li>
                </ul>
              </div>
            </div>
            <div style={{ marginTop: "12px", fontSize: "0.98rem", color: "var(--slate-800)", lineHeight: 1.55, background: "var(--slate-50)", padding: "12px 14px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
              <strong style={{ color: "var(--slate-900)" }}>Essay Roadmap:</strong> <em>Body 1:</em> Root technological &amp; corporate causes • <em>Body 2:</em> Severe financial ruin &amp; chronic psychological trauma on victims.
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
