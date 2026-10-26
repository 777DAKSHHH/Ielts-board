import React from "react";
import { CheckCircle2 } from "lucide-react";

export const Step9SubmissionT2: React.FC = () => (
  <div className="stage-card-wrapper">
    {/* Stage Header */}
    <div style={{ flexShrink: 0, marginBottom: "18px" }}>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
        Step 09 / 09 • Final Essay Structure &amp; Model
      </span>
      <h2 className="stage-title">Write Your Complete Discussion with Opinion Essay</h2>
      <p className="stage-subtitle" style={{ marginBottom: 0 }}>
        Review your 5-paragraph architecture and mandatory formatting rules before writing the complete Band 9 response.
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
      {/* Card 01: 5-Paragraph Format */}
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
          <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--apple-blue)" }}>
            5-PARAGRAPH FORMAT
          </span>
          <h3 style={{ fontSize: "1.28rem", fontWeight: 800, color: "var(--slate-900)", margin: "4px 0 0" }}>
            Discussion Architecture
          </h3>
          <p style={{ margin: "4px 0 0", fontSize: "0.96rem", color: "var(--slate-600)" }}>
            [ Intro + Body 1 + Body 2 + Body 3 + Conclusion ]
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1, overflowY: "auto" }}>
          {/* Intro Box */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              padding: "10px 12px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 800, background: "#f3e8ff", color: "#7e22ce", padding: "2px 6px", borderRadius: "4px" }}>
                INTRO
              </span>
              <strong style={{ fontSize: "0.94rem", color: "var(--slate-900)" }}>Paraphrase + Clear Opinion</strong>
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--slate-700)", marginTop: "4px", lineHeight: 1.45 }}>
              Paraphrase both viewpoints and state your opinion upfront.
            </div>
          </div>

          {/* Body 1 Box */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              padding: "10px 12px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 800, background: "#fef3c7", color: "#92400e", padding: "2px 6px", borderRadius: "4px" }}>
                BODY 1
              </span>
              <strong style={{ fontSize: "0.94rem", color: "var(--slate-900)" }}>Ideas for 1st View (History Outdated)</strong>
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--slate-700)", marginTop: "4px", lineHeight: 1.45 }}>
              Survivorship bias in records, the "fighting the last war" trap, and megacity demographic scale.
            </div>
          </div>

          {/* Body 2 Box */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              padding: "10px 12px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 800, background: "#dcfce7", color: "#166534", padding: "2px 6px", borderRadius: "4px" }}>
                BODY 2
              </span>
              <strong style={{ fontSize: "0.94rem", color: "var(--slate-900)" }}>Ideas for 2nd View (History Guides Us)</strong>
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--slate-700)", marginTop: "4px", lineHeight: 1.45 }}>
              Physical Roman road foundations, Tulip Mania market psychology, and 1918 flu playbooks.
            </div>
          </div>

          {/* Body 3 Box */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              padding: "10px 12px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 800, background: "#ffedd5", color: "#c2410c", padding: "2px 6px", borderRadius: "4px" }}>
                BODY 3
              </span>
              <strong style={{ fontSize: "0.94rem", color: "var(--slate-900)" }}>Ideas for Opinion (Author's Stance)</strong>
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--slate-700)", marginTop: "4px", lineHeight: 1.45 }}>
              Reconciling novel megacity scale with enduring physical foundations and cyclical human psychology.
            </div>
          </div>

          {/* Conclusion Box */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              padding: "10px 12px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 800, background: "#f1f5f9", color: "#334155", padding: "2px 6px", borderRadius: "4px" }}>
                CONCLUSION
              </span>
              <strong style={{ fontSize: "0.94rem", color: "var(--slate-900)" }}>Sum-Up Points + Restate Opinion</strong>
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--slate-700)", marginTop: "4px", lineHeight: 1.45 }}>
              Recap both sides concisely and affirm your final defensible stance.
            </div>
          </div>
        </div>
      </div>

      {/* Card 02: Body Paragraph Formula */}
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
            PARAGRAPH DEVELOPMENT
          </span>
          <h3 style={{ fontSize: "1.18rem", fontWeight: 800, color: "var(--slate-900)", margin: "4px 0 0" }}>
            Paragraph Logic &amp; Balance
          </h3>
          <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "var(--slate-500)" }}>
            [ Topic Sentence + Explanation + Evidence ]
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
          {[
            {
              step: "1. View 1 Development",
              desc: "Articulate how survivorship bias in ancient archives and the 'fighting the last war' trap create dangerous modern blindspots."
            },
            {
              step: "2. View 2 Development",
              desc: "Demonstrate that physical infrastructure (Roman roads) and market psychology (Tulip Mania vs crypto) directly continue today."
            },
            {
              step: "3. Opinion Paragraph",
              desc: "Develop your own stance (Body 3): argue that while instruments are novel, the foundational wisdom to govern responsibly comes from history."
            },
            {
              step: "4. Conclusion Restatement",
              desc: "Sum up all key ideas in 2 crisp sentences and restate your opinion with total clarity and conviction."
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
            BAND 9 VOCABULARY &amp; COHESION
          </span>
          <h3 style={{ fontSize: "1.18rem", fontWeight: 800, color: "var(--slate-900)", margin: "4px 0 0" }}>
            Natural Academic Precision
          </h3>
          <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "var(--slate-500)" }}>
            Dissolved naturally like sugar in a glass of water
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
              {[
                "path dependency",
                "survivorship bias",
                "speculative mania",
                "epidemiological",
                "fallacy",
                "conurbation",
                "autarky",
                "anachronistic",
                "precedent",
                "immutable"
              ].map((w) => (
                <span
                  key={w}
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border-subtle)",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    fontSize: "0.84rem",
                    fontWeight: 750,
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
            <strong style={{ color: "var(--slate-900)" }}>Discourse Linkers:</strong>
            <br />
            • <em>Intro opener:</em> “While some individuals argue that historical records provide little practical guidance... others maintain...”<br />
            • <em>Body 1 opener:</em> “On the one hand, proponents argue that historical archives suffer from profound survivorship bias...”<br />
            • <em>Body 2 opener:</em> “On the other hand, through the lens of path dependency, modern society remains physically anchored to...”<br />
            • <em>Body 3 opener:</em> “In my view, while the demographic scale of modern civilization is unprecedented, the underlying architecture of...”<br />
            • <em>Conclusion opener:</em> “In conclusion, although the elitist bias of historical archives leads some to dismiss history...”
          </div>
        </div>
      </div>
    </div>
  </div>
);
