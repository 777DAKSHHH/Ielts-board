import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TASK1_DATA } from "../../data/task1Data";

export const Step8Connectors: React.FC = () => (
  <div className="stage-card-wrapper">
    <div>
      <span className="apple-badge success" style={{ marginBottom: "8px" }}>
        Step 08 / 08 • Academic Transitions &amp; Comparative Cohesion
      </span>
      <h2 className="stage-title">Cohesive Sequencing &amp; Contrastive Linking for Comparative Diagrams</h2>
      <p className="stage-subtitle">
        Master academic discourse markers to establish seamless logical transitions between atmospheric wind circulation, eastward oceanic shifts, terrestrial precipitation, and marine nutrient upwelling.
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
          Recommended Cohesive Discourse Pathway for Comparative Systems
        </strong>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem", color: "var(--slate-700)" }}>
        {/* Paragraph 3 / Body 1 Flow */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", background: "var(--slate-50)", padding: "10px 14px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>Body 1 (Normal Equilibrium)</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Under normal conditions,...”</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Strong westward trade winds</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Warm water banked in West Pacific</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Convective storm clouds &amp; rain in Australia</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Meanwhile, off the Peruvian coast,...”</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Cold nutrient-dense upwelling</span>
          <ArrowRight size={13} color="var(--apple-blue)" />
          <span>Flourishing fish stocks under sunny skies</span>
        </div>

        {/* Paragraph 4 / Body 2 Flow */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", background: "var(--slate-50)", padding: "10px 14px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
          <span className="apple-badge neutral" style={{ fontWeight: 700 }}>Body 2 (El Niño Disruption)</span>
          <ArrowRight size={13} color="#dc2626" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“During an El Niño phase,...”</span>
          <ArrowRight size={13} color="#dc2626" />
          <span>Trade winds weaken + upper winds blow east</span>
          <ArrowRight size={13} color="#dc2626" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“As a result,...”</span>
          <ArrowRight size={13} color="#dc2626" />
          <span>Warm water propelled eastwards, capping cold thermocline</span>
          <ArrowRight size={13} color="#dc2626" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“Consequently,...”</span>
          <ArrowRight size={13} color="#dc2626" />
          <span>Australia suffers scorching sun &amp; drought</span>
          <ArrowRight size={13} color="#dc2626" />
          <span style={{ fontWeight: 650, color: "var(--slate-900)" }}>“whereas storm clouds migrate to Peru,...”</span>
          <ArrowRight size={13} color="#dc2626" />
          <span>Heavy rain + coastal fish stocks decline precipitously</span>
        </div>
      </div>
    </div>
  </div>
);
