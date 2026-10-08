import React from "react";
import { CheckCircle2 } from "lucide-react";

export const Step9SubmissionT2: React.FC = () => (
  <div className="stage-card-wrapper">
    {/* Stage Header */}
    <div style={{ flexShrink: 0, marginBottom: "18px" }}>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
        Step 09 / 09 • Final Essay Structure
      </span>
      <h2 className="stage-title">Write Your Two-Part Essay</h2>
      <p className="stage-subtitle" style={{ marginBottom: 0 }}>
        Review your paired paragraph architecture and key points before writing the complete response.
      </p>
    </div>

    {/* 3 Pillars Grid */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        flex: 1,
        minHeight: 0,
        alignItems: "stretch"
      }}
    >
      {/* Card 01: Paired Body Paragraph Architecture */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "18px",
          padding: "22px 24px",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          flexDirection: "column",
          gap: "14px"
        }}
      >
        <div>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--apple-blue)" }}>
            4-PARAGRAPH FORMAT
          </span>
          <h3 style={{ fontSize: "1.18rem", fontWeight: 800, color: "var(--slate-900)", margin: "4px 0 0" }}>
            Paired Body Paragraphs
          </h3>
          <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "var(--slate-500)" }}>
            [ Effect + Solution + Example ]
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
          {/* Body 1 Box */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "12px",
              padding: "14px 16px",
              display: "flex",
              flexDirection: "column",
              gap: "6px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 800, background: "#dbeafe", color: "#1e40af", padding: "2px 8px", borderRadius: "6px" }}>
                BODY PARA 1
              </span>
              <strong style={{ fontSize: "0.92rem", color: "var(--slate-900)" }}>Healthcare Solvency</strong>
            </div>
            <div style={{ fontSize: "0.88rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
              • <strong>Effect 1:</strong> Hospital fiscal strain &amp; chronic diseases<br />
              • <strong>Solution 1:</strong> Targeted fiscal sugar levies on junk foods<br />
              • <strong>Example:</strong> Mexico 10% soda tax / NHS £6B spend
            </div>
          </div>

          {/* Body 2 Box */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "12px",
              padding: "14px 16px",
              display: "flex",
              flexDirection: "column",
              gap: "6px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 800, background: "#dcfce7", color: "#166534", padding: "2px 8px", borderRadius: "6px" }}>
                BODY PARA 2
              </span>
              <strong style={{ fontSize: "0.92rem", color: "var(--slate-900)" }}>Workforce Vitality</strong>
            </div>
            <div style={{ fontSize: "0.88rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
              • <strong>Effect 2:</strong> Sedentary lethargy &amp; labor productivity loss<br />
              • <strong>Solution 2:</strong> Active municipal transit &amp; office mandates<br />
              • <strong>Example:</strong> Copenhagen bicycle superhighways (&gt;40%)
            </div>
          </div>
        </div>
      </div>

      {/* Card 02: 1 Main Reason Rule */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "18px",
          padding: "22px 24px",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          flexDirection: "column",
          gap: "14px"
        }}
      >
        <div>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#059669" }}>
            PARAGRAPH DEPTH
          </span>
          <h3 style={{ fontSize: "1.18rem", fontWeight: 800, color: "var(--slate-900)", margin: "4px 0 0" }}>
            1 Core Problem &amp; Causal Flow
          </h3>
          <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "var(--slate-500)" }}>
            Avoid listing multiple superficial points
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
          {[
            {
              step: "Core Problem",
              desc: "Focus on 1 primary crisis per paragraph rather than multiple symptoms."
            },
            {
              step: "Causal Explanation",
              desc: "Detail why and how sedentary habits lead to systemic health or economic strain."
            },
            {
              step: "Direct Countermeasure",
              desc: "Propose a policy measure that specifically resolves that core issue."
            },
            {
              step: "Concrete Evidence",
              desc: "Substantiate with real-world data and precedent."
            }
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                background: "var(--slate-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "10px",
                padding: "10px 12px"
              }}
            >
              <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div style={{ fontSize: "0.88rem", lineHeight: 1.45 }}>
                <strong style={{ color: "var(--slate-900)" }}>{item.step}:</strong>{" "}
                <span style={{ color: "var(--slate-700)" }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card 03: Lexical Precision & Cohesion */}
      <div
        style={{
          background: "#ffffff",
          border: "1.5px solid var(--border-subtle)",
          borderRadius: "18px",
          padding: "22px 24px",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          flexDirection: "column",
          gap: "14px"
        }}
      >
        <div>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#9333ea" }}>
            VOCABULARY &amp; TRANSITIONS
          </span>
          <h3 style={{ fontSize: "1.18rem", fontWeight: 800, color: "var(--slate-900)", margin: "4px 0 0" }}>
            Natural Academic Tone
          </h3>
          <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "var(--slate-500)" }}>
            Dissolved naturally like sugar in water
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
          <div
            style={{
              background: "var(--slate-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              padding: "12px 14px"
            }}
          >
            <div style={{ fontSize: "0.82rem", fontWeight: 750, color: "var(--slate-500)", marginBottom: "6px" }}>
              PRECISION VOCABULARY:
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {["myopic", "epitome", "pervasive", "exacerbate", "catalyze", "mitigate", "paradigm"].map((w) => (
                <span
                  key={w}
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border-subtle)",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    fontSize: "0.84rem",
                    fontWeight: 700,
                    color: "var(--slate-800)"
                  }}
                >
                  {w}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "var(--slate-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              padding: "12px 14px",
              fontSize: "0.86rem",
              color: "var(--slate-700)",
              lineHeight: 1.5
            }}
          >
            <strong style={{ color: "var(--slate-900)" }}>Discourse Linkers:</strong> Position cohesive markers purposefully at paragraph openers, causal logic chains, and solution transitions.
          </div>
        </div>
      </div>
    </div>
  </div>
);
