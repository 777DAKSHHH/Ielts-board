import React from "react";
import { CheckCircle2 } from "lucide-react";

export const Step9SubmissionT2: React.FC = () => (
  <div className="stage-card-wrapper">
    {/* Stage Header */}
    <div style={{ flexShrink: 0, marginBottom: "18px" }}>
      <span className="apple-badge accent" style={{ marginBottom: "8px" }}>
        Step 09 / 09 • Final Essay Structure &amp; Model
      </span>
      <h2 className="stage-title">Write Your Outweighed 5-Paragraph Essay</h2>
      <p className="stage-subtitle" style={{ marginBottom: 0 }}>
        Review your 3-body paragraph architecture and golden rules before writing the complete Band 9 response.
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
      {/* Card 01: 5-Paragraph Format (3 Body Paras Architecture) */}
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
            3-Body Paragraph Architecture
          </h3>
          <p style={{ margin: "4px 0 0", fontSize: "0.96rem", color: "var(--slate-600)" }}>
            [ Intro + 2 Strong Side + 1 Counterpoint + Conclusion ]
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1, overflowY: "auto" }}>
          {/* Body 1 Box */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "12px",
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "6px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 800, background: "#dbeafe", color: "#1e40af", padding: "3px 8px", borderRadius: "6px" }}>
                ADVANTAGE 1
              </span>
              <strong style={{ fontSize: "1.02rem", color: "var(--slate-900)" }}>Financial Independence</strong>
            </div>
            <div style={{ fontSize: "0.95rem", color: "var(--slate-800)", lineHeight: 1.55 }}>
              • <strong>Main Reason:</strong> Establish careers, build savings &amp; secure housing before children<br />
              • <strong>Development:</strong> Greater financial wherewithal shields the household from precarity<br />
              • <strong>Example:</strong> Working couples affording rent/mortgage, childcare, and school fees
            </div>
          </div>

          {/* Body 2 Box */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "12px",
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "6px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 800, background: "#dcfce7", color: "#166534", padding: "3px 8px", borderRadius: "6px" }}>
                ADVANTAGE 2
              </span>
              <strong style={{ fontSize: "1.02rem", color: "var(--slate-900)" }}>Emotional Maturity &amp; Conflict Skills</strong>
            </div>
            <div style={{ fontSize: "0.95rem", color: "var(--slate-800)", lineHeight: 1.55 }}>
              • <strong>Main Reason:</strong> Self-awareness and managing disagreements effectively<br />
              • <strong>Development:</strong> Emotional acuity helps partners resolve interpersonal discord<br />
              • <strong>Example:</strong> Couples resolving childcare disagreements constructively without friction
            </div>
          </div>

          {/* Body 3 Box */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "12px",
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "6px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 800, background: "#fee2e2", color: "#b91c1c", padding: "3px 8px", borderRadius: "6px" }}>
                COUNTERPOINT
              </span>
              <strong style={{ fontSize: "1.02rem", color: "var(--slate-900)" }}>Fertility Decline &amp; Practical Hurdles</strong>
            </div>
            <div style={{ fontSize: "0.95rem", color: "var(--slate-800)", lineHeight: 1.55 }}>
              • <strong>Main Drawback:</strong> Fertility generally declines with age, especially for women<br />
              • <strong>Development:</strong> Reproductive constraints and fewer years for raising children<br />
              • <strong>Example:</strong> A couple conceiving in their late 30s facing medical difficulties
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
            The 1 Main Reason Rule
          </h3>
          <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "var(--slate-500)" }}>
            [ Main Reason + Supporting Reasons + Example ]
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
          {[
            {
              step: "1. Single Core Reason",
              desc: "Anchor each body paragraph around 1 strong, well-defined reason (e.g. wealth accumulation, psychological maturity, or reproductive risks). Never pile up scattered shallow points."
            },
            {
              step: "2. Causal Explanation",
              desc: "Articulate the precise 'how' and 'why' mechanisms (e.g. how early-twenties salaries are strained by student debt, or how reproductive senescence accelerates after 35)."
            },
            {
              step: "3. Concrete Real-World Example",
              desc: "Provide verifiable empirical evidence (dual-income homeownership metrics, OECD divorce rate statistics, or reproductive clinic healthcare data)."
            },
            {
              step: "4. Outweighing Synthesis",
              desc: "Demonstrate in Body 3 and the Conclusion that reproductive hurdles can be mitigated via modern medicine, whereas lifelong emotional and economic stability are irreplaceable."
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
              {["equanimity", "precipitous", "procreation", "matrimony", "subsume", "catalyze", "demographic", "solvency"].map((w) => (
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
            <strong style={{ color: "var(--slate-900)" }}>Discourse Linkers:</strong>
            <br />
            • <em>Advantage 1 opener:</em> “Foremost among the advantages is that delaying marriage until one’s thirties provides financial security...”<br />
            • <em>Advantage 2 opener:</em> “Equally significant is that advanced age fosters professional consolidation and psychological maturity...”<br />
            • <em>Counterpoint opener:</em> “On the other hand, a prominent drawback is the physiological decline in natural reproductive capacity...”<br />
            • <em>Conclusion opener:</em> “In conclusion, although postponing family planning introduces undeniable biological hurdles...”
          </div>
        </div>
      </div>
    </div>
  </div>
);
