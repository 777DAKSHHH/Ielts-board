import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step8Connectors: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge success" style={{ marginBottom: "8px" }}>
        Step 08 / 08 • Academic Transitions &amp; Comparative Cohesion
      </span>
      <h2 className="stage-title">Cohesive Sequencing &amp; Contrastive Linking for Line Graphs</h2>
      <p className="stage-subtitle">
        Master academic discourse markers to establish seamless logical transitions between opposing trajectory groups, pinpoint historical intersections, and articulate mathematical multipliers.
      </p>
    </div>

    {/* Connector Cards Grid */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", overflowY: "auto" }}>
      {TASK1_DATA.connectors.map((connector, index) => (
        <div
          key={connector.phrase}
          style={{
            background: "var(--slate-50)",
            border: "1.5px solid var(--border-subtle)",
            borderRadius: "16px",
            padding: "18px",
            display: "flex",
            flexDirection: "column",
            gap: "9px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span className="apple-badge neutral">{index + 1}</span>
            <strong style={{ color: "var(--slate-900)", fontSize: "0.92rem" }}>{connector.phrase}</strong>
          </div>
          <div style={{ color: "var(--slate-500)", fontSize: "0.8rem", fontWeight: 600 }}>
            Function: {connector.purpose}
          </div>
          <div
            style={{
              background: "#ffffff",
              border: "1px solid var(--border-subtle)",
              borderRadius: "11px",
              padding: "11px 13px",
              color: "var(--slate-700)",
              lineHeight: 1.5,
              fontSize: "0.88rem"
            }}
          >
            {connector.example}
          </div>
        </div>
      ))}
    </div>

    {/* Recommended Cohesive Flow Pathway */}
    <div
      style={{
        background: "#ffffff",
        border: "1.5px solid var(--border-subtle)",
        borderRadius: "18px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        boxShadow: "var(--shadow-sm)"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <CheckCircle2 size={18} color="#16a34a" />
        <strong style={{ color: "var(--slate-900)", fontSize: "0.95rem" }}>
          Recommended Cohesive Discourse Pathway for 4-Line Comparative Graphs
        </strong>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem", color: "var(--slate-700)" }}>
        {/* Paragraph 3 / Body 1 Flow */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", background: "var(--slate-50)", padding: "10px 14px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>Body 1 (Decreasers)</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Regarding the nations experiencing a net decline,...”</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>UK steady descent (10.8t → 8.7t)</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“By contrast, Sweden demonstrated the most erratic pattern...”</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>1977 peak (10.2t) → 30-year plunge (5.4t)</span>
        </div>

        {/* Paragraph 4 / Body 2 Flow */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", background: "var(--slate-50)", padding: "10px 14px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>Body 2 (Increasers)</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Turning to the countries with rising per capita emissions,...”</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>Italy rise (4.2t → 6.7t in 1987)</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“At which point it surpassed Sweden...”</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>Plateau at 7.6t</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Meanwhile, Portugal initiated as lowest contributor...”</span>
          <ArrowRight size={13} color="#16a34a" />
          <span>Quadrupling surge</span>
          <ArrowRight size={13} color="#16a34a" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Precisely converging with Sweden at 5.4t in 2007.”</span>
        </div>
      </div>
    </div>
  </div>
);
