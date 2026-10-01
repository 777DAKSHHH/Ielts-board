import React, { useState } from "react";
import { CheckCircle2, BookOpen, ChevronLeft, ChevronRight, Sparkles, Eye, EyeOff } from "lucide-react";
import { TASK2_DATA } from "../../data/task2Data";

export const Step8ConclusionT2: React.FC = () => {
  const [angle, setAngle] = useState(0);
  const [isFacultyRevealed, setIsFacultyRevealed] = useState(false);
  const angles = TASK2_DATA.facultyAngles;

  return (
    <div className="stage-card-wrapper">
      <div>
        <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
          Step 08 / 09 • Conclusion + Faculty Extension
        </span>
        <h2 className="stage-title">Close the Argument — Then Go Deeper</h2>
        <p className="stage-subtitle">
          Examine the model Band 9 conclusion, then explore advanced cultural policy and repatriation debate angles for classroom discussion.
        </p>
      </div>

      <div className="stage-grid-2col">
        <div
          style={{
            background: "var(--slate-50)",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "20px",
            padding: "24px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <BookOpen size={20} />
            <h4 style={{ fontSize: "1.1rem", fontWeight: 750 }}>Sample Conclusion</h4>
          </div>
          <div
            style={{
              background: "#fff",
              border: "1px solid var(--border-subtle)",
              borderRadius: "14px",
              padding: "20px",
              fontSize: "1.02rem",
              lineHeight: 1.7
            }}
          >
            {TASK2_DATA.sampleConclusion}
          </div>
          <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <span className="apple-badge success">
              <CheckCircle2 size={14} /> Sums up both main reasons (Cultural Identity + Economic/Academic Sovereignty)
            </span>
            <span className="apple-badge neutral">
              Restates unequivocal agreement with repatriation
            </span>
            <span className="apple-badge neutral">
              Highlights moral restitution and native museum empowerment
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Interactive Blurred Faculty Idea Bank Card */}
          <div
            style={{
              background: "#fff",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "18px",
              padding: "20px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "var(--shadow-sm)"
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
                <Sparkles size={18} color="var(--apple-blue)" />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700 }}>Faculty Idea Bank — Advanced Policy Angles</h4>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="apple-badge neutral" style={{ fontSize: "0.74rem" }}>
                  Classroom Debate
                </span>
                {isFacultyRevealed && (
                  <button
                    onClick={() => setIsFacultyRevealed(false)}
                    className="apple-touch-btn secondary"
                    style={{
                      minHeight: "26px",
                      padding: "3px 8px",
                      fontSize: "0.75rem",
                      gap: "4px"
                    }}
                    title="Blur Faculty Idea Bank"
                  >
                    <EyeOff size={13} />
                    <span>Blur</span>
                  </button>
                )}
              </div>
            </div>

            {/* Blurred Content */}
            <div
              style={{
                filter: isFacultyRevealed ? "none" : "blur(8px)",
                opacity: isFacultyRevealed ? 1 : 0.2,
                transition: "filter 0.35s ease, opacity 0.35s ease",
                pointerEvents: isFacultyRevealed ? "auto" : "none",
                userSelect: isFacultyRevealed ? "auto" : "none"
              }}
            >
              <div style={{ minHeight: "150px" }}>
                <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "7px", color: "var(--slate-900)" }}>
                  {angles[angle].title}
                </h5>
                <p style={{ color: "var(--slate-600)", lineHeight: 1.55 }}>
                  {angles[angle].development}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "12px"
                }}
              >
                <button
                  onClick={() => setAngle(Math.max(0, angle - 1))}
                  className="apple-touch-btn secondary"
                  style={{ minHeight: "42px", opacity: angle === 0 ? 0.4 : 1 }}
                  disabled={angle === 0}
                >
                  <ChevronLeft size={17} />
                </button>
                <span style={{ fontSize: ".82rem", color: "var(--slate-500)", fontWeight: 600 }}>
                  {angle + 1} / {angles.length}
                </span>
                <button
                  onClick={() => setAngle(Math.min(angles.length - 1, angle + 1))}
                  className="apple-touch-btn secondary"
                  style={{ minHeight: "42px", opacity: angle === angles.length - 1 ? 0.4 : 1 }}
                  disabled={angle === angles.length - 1}
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>

            {/* Tap-to-Reveal Overlay */}
            {!isFacultyRevealed && (
              <div
                onClick={() => setIsFacultyRevealed(true)}
                style={{
                  position: "absolute",
                  inset: 0,
                  top: "46px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "9px",
                  background: "rgba(255, 255, 255, 0.55)",
                  backdropFilter: "blur(2px)",
                  cursor: "pointer",
                  borderRadius: "0 0 18px 18px",
                  zIndex: 10,
                  transition: "all 0.2s ease"
                }}
                title="Click to reveal Faculty Idea Bank"
              >
                <div
                  className="apple-touch-btn primary"
                  style={{
                    minHeight: "38px",
                    padding: "0 18px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    gap: "8px",
                    boxShadow: "0 4px 14px rgba(0, 113, 227, 0.25)"
                  }}
                >
                  <Eye size={16} />
                  <span>REVEAL FACULTY IDEA BANK</span>
                </div>
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--slate-600)",
                    fontWeight: 500,
                    letterSpacing: "0.01em"
                  }}
                >
                  Tap anywhere to reveal Band 9 policy angles & discussion prompts
                </span>
              </div>
            )}
          </div>

          <div
            style={{
              background: "var(--slate-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "16px",
              padding: "16px"
            }}
          >
            <strong style={{ fontSize: "0.92rem", color: "var(--slate-800)" }}>
              High-Value Academic Collocations:
            </strong>
            <p style={{ marginTop: "8px", color: "var(--slate-600)", lineHeight: 1.55, fontSize: "0.88rem" }}>
              {TASK2_DATA.vocabHunt.join(" • ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
