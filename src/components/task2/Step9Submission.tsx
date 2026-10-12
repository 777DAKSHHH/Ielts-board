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
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--apple-blue)" }}>
            5-PARAGRAPH FORMAT
          </span>
          <h3 style={{ fontSize: "1.18rem", fontWeight: 800, color: "var(--slate-900)", margin: "4px 0 0" }}>
            3-Body Paragraph Architecture
          </h3>
          <p style={{ margin: "4px 0 0", fontSize: "0.86rem", color: "var(--slate-500)" }}>
            [ Intro + 2 Strong Side + 1 Counterpoint + Conclusion ]
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1, overflowY: "auto" }}>
          {/* Body 1 Box */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "12px",
              padding: "11px 13px",
              display: "flex",
              flexDirection: "column",
              gap: "4px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "0.74rem", fontWeight: 800, background: "#dbeafe", color: "#1e40af", padding: "2px 7px", borderRadius: "5px" }}>
                ADVANTAGE 1
              </span>
              <strong style={{ fontSize: "0.88rem", color: "var(--slate-900)" }}>Year-Round Fresh Produce</strong>
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--slate-700)", lineHeight: 1.45 }}>
              • <strong>Main Reason:</strong> Year-round fresh food security &amp; winter freeze bypass<br />
              • <strong>Support:</strong> Eliminating seasonal nutrient deficits for families<br />
              • <strong>Example:</strong> Northern cities buying fresh berries and citrus in January
            </div>
          </div>

          {/* Body 2 Box */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "12px",
              padding: "11px 13px",
              display: "flex",
              flexDirection: "column",
              gap: "4px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "0.74rem", fontWeight: 800, background: "#dcfce7", color: "#166534", padding: "2px 7px", borderRadius: "5px" }}>
                ADVANTAGE 2
              </span>
              <strong style={{ fontSize: "0.88rem", color: "var(--slate-900)" }}>Affordable Groceries &amp; Cultural Variety</strong>
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--slate-700)", lineHeight: 1.45 }}>
              • <strong>Main Reason:</strong> Natural climate efficiency lowers family grocery bills<br />
              • <strong>Support:</strong> Bypasses costly heated greenhouses + caters to diverse diets<br />
              • <strong>Example:</strong> Cheap tropical staples (bananas, rice) &amp; international spices
            </div>
          </div>

          {/* Body 3 Box */}
          <div
            style={{
              background: "var(--slate-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "12px",
              padding: "11px 13px",
              display: "flex",
              flexDirection: "column",
              gap: "4px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "0.74rem", fontWeight: 800, background: "#fee2e2", color: "#b91c1c", padding: "2px 7px", borderRadius: "5px" }}>
                COUNTERPOINT
              </span>
              <strong style={{ fontSize: "0.88rem", color: "var(--slate-900)" }}>Local Farmer Strain &amp; Food Miles</strong>
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--slate-700)", lineHeight: 1.45 }}>
              • <strong>1 Main Disadvantage:</strong> Intense price pressure on small local farms &amp; transit emissions<br />
              • <strong>Support:</strong> Cheap overseas imports undercut family farms + planes burn fuel<br />
              • <strong>Example:</strong> Local dairy farms struggling + high emissions from air cargo
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
              desc: "Anchor each body paragraph around 1 strong, well-defined reason. Never pile up scattered shallow points."
            },
            {
              step: "2. Causal Explanation",
              desc: "Articulate the precise 'how' and 'why' mechanisms (e.g. how winter frost causes localized deficits, or how aviation fuel burns carbon)."
            },
            {
              step: "3. Concrete Real-World Example",
              desc: "Provide verifiable empirical evidence (Fairtrade cooperatives, Mexican avocados in Europe, South American berry air cargo)."
            },
            {
              step: "4. Outweighing Synthesis",
              desc: "Demonstrate in Body 3 and the Conclusion that environmental drawbacks are solvable through green logistics, whereas nutritional benefits are irreplaceable."
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
              {["myopic", "epitome", "counter-seasonal", "food miles", "complacency", "catalyze", "monopolistic", "sovereignty"].map((w) => (
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
            • <em>Advantage 1 opener:</em> “Foremost among the advantages is that importing goods guarantees...”<br />
            • <em>Advantage 2 opener:</em> “Equally important is that imported goods reduce household grocery costs...”<br />
            • <em>Counterpoint opener:</em> “On the other hand, critics rightly point out that cheap foreign goods...”<br />
            • <em>Conclusion opener:</em> “In conclusion, although importing supermarket goods increases food miles...”
          </div>
        </div>
      </div>
    </div>
  </div>
);
